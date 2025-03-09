'use client'

export default function Menu() {
    const menuItems1 = {
        "fistList": [
            {
                id: 1,
                title: "View",
                icon: "visibility",
            },
            {
                id: 2,
                title: "copy",
                icon: "content_copy",

            },
            {
                id: 3,
                title: "edit",
                icon: "edit",

            },
        ],
        "secondList": [
            {
                id: 4,
                title: "delete",
                icon: "delete"
            }
        ]
    }
    const menuItems2 = [

        {
            id: 2,
            title: "Lato",

        },
        {
            id: 3,
            title: "Open Sans",

        },
        {
            id: 3,
            title: "Lusitana",


        },
        {
            id: 1,
            title: "Roboto",
            selected: true,
        },
    ]
    const menuItems3 = {
        "fistList": [
            {
                id: 1,
                title: "Bold",
                selected: true,
                trailingIcon: "keyboard_command_keyformat_bold"

            },
            {
                id: 2,
                title: "Italic",
                trailingIcon: "keyboard_command_keyformat_italic"


            },
            {
                id: 3,
                title: "Underline",
                trailingIcon: "keyboard_command_keyformat_underlined"
            },
        ],
        "secondList": [
            {
                id: 4,
                title: "Align",
                subMenu: [
                    {
                        title: "Left"
                    },
                    {
                        title: "Center"
                    },
                    {
                        title: "Right"
                    }
                ]
            }
        ]
    }


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <div className={"flex z-20 items-center w-full justify-evenly space-x-4"}>
            <div className={"w-[200px]"}>
                <ul className={"w-full min-w-[112px] max-w-[280px] rounded-[4px] py-2 bg-surface-container-light dark:bg-surface-container-dark shadow-elevated-two-light dark:shadow-elevated-two-dark"}>
                    {menuItems1.fistList.map(item => <li key={item.id}
                                                         className={classNames(
                                                             "text-on-surface-light dark:text-on-surface-dark active:before:bg-on-surface-light/[10%] dark:active:before:bg-on-surface-dark/[10%] hover:before:bg-on-surface-light/[8%] dark:hover:before:bg-on-surface-dark/[8%]",
                                                             "relative overflow-hidden before:absolute before:inset-0 flex items-center h-[48px] px-3 space-x-3 text-label-large font-medium")}>
                        <i className={classNames(
                            "text-on-surface-variant-light dark:text-on-surface-variant-dark",
                            "material-symbols-outlined text-[18px] font-vs-[0_500_0_24] "
                        )}>
                            {item.icon}
                        </i>
                        <span className={"flex-grow"}>
                        {item.title}
                    </span>
                    </li>)}
                    <hr className={"my-2 border-surface-variant-light dark:border-surface-variant-dark"}/>
                    {menuItems1.secondList.map(item => <li key={item.id}
                                                           className={classNames(
                                                               "text-on-surface-light dark:text-on-surface-dark active:before:bg-on-surface-light/[10%] dark:active:before:bg-on-surface-dark/[10%] hover:before:bg-on-surface-light/[8%] dark:hover:before:bg-on-surface-dark/[8%]",
                                                               "relative overflow-hidden before:absolute before:inset-0 flex items-center h-[48px] px-3 space-x-3 text-label-large font-medium")}>
                        <i className={classNames(
                            "text-on-surface-variant-light dark:text-on-surface-variant-dark",
                            "material-symbols-outlined text-[18px] font-vs-[0_500_0_24] "
                        )}>
                            {item.icon}
                        </i>
                        <span className={"flex-grow"}>
                        {item.title}
                    </span>
                    </li>)}
                </ul>
            </div>
            <div className={"w-[200px]"}>
                <ul className={"w-full min-w-[112px] max-w-[280px] rounded-[4px] py-2 bg-surface-container-light dark:bg-surface-container-dark shadow-elevated-two-light dark:shadow-elevated-two-dark"}>
                    {menuItems2.map(item => <li key={item.id}
                                                className={classNames(
                                                    item.selected ? "bg-secondary-container-light dark:bg-secondary-container-dark active:before:bg-on-secondary-container-light/[10%] dark:active:before:bg-on-secondary-container-dark/[10%] hover:before:bg-on-secondary-container-light/[8%] dark:hover:before:bg-on-secondary-container-dark/[8%] text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark active:before:bg-on-surface-light/[10%] dark:active:before:bg-on-surface-dark/[10%] hover:before:bg-on-surface-light/[8%] dark:hover:before:bg-on-surface-dark/[8%]",
                                                    "relative overflow-hidden before:absolute before:inset-0 flex items-center h-[48px] px-3 space-x-3 text-label-large font-medium")}>
                        {item.selected && <i className={classNames(
                            "text-on-secondary-container-light dark:text-on-secondary-container-dark",
                            "material-symbols-outlined text-[18px] font-vs-[0_500_0_24] "
                        )}>
                            check
                        </i>}
                        <span className={"flex-grow"}>
                        {item.title}
                    </span>
                    </li>)}
                </ul>
            </div>
            <div className={"w-[200px]"}>

                <ul className={"w-full min-w-[112px] max-w-[280px] rounded-[4px] py-2 bg-surface-container-light dark:bg-surface-container-dark shadow-elevated-two-light dark:shadow-elevated-two-dark"}>
                    {menuItems3.fistList.map(item => <li key={item.id}
                                                         className={classNames(
                                                             item.selected ? "bg-secondary-container-light dark:bg-secondary-container-dark active:before:bg-on-secondary-container-light/[10%] dark:active:before:bg-on-secondary-container-dark/[10%] hover:before:bg-on-secondary-container-light/[8%] dark:hover:before:bg-on-secondary-container-dark/[8%] text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark active:before:bg-on-surface-light/[10%] dark:active:before:bg-on-surface-dark/[10%] hover:before:bg-on-surface-light/[8%] dark:hover:before:bg-on-surface-dark/[8%]",
                                                             "relative overflow-hidden before:absolute before:inset-0 flex items-center h-[48px] px-3 space-x-3 text-label-large font-medium")}>
                        {item.selected && <i className={classNames(
                            "text-on-secondary-container-light dark:text-on-secondary-container-dark",
                            "material-symbols-outlined text-[18px] font-vs-[0_500_0_24] "
                        )}>
                            check
                        </i>}
                        <span className={"flex-grow"}>
                        {item.title}
                    </span>
                        {item.trailingIcon && <i className={classNames(
                            item.selected ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark",
                            "ml-auto material-symbols-outlined text-[18px] font-vs-[0_500_0_24] "
                        )}>
                            {item.trailingIcon}
                        </i>}
                    </li>)}
                    <hr className={"my-2 border-surface-variant-light dark:border-surface-variant-dark"}/>
                    {menuItems3.secondList.map(item => <li key={item.id}
                                                           className={classNames(
                                                               item.selected ? "bg-secondary-container-light dark:bg-secondary-container-dark active:before:bg-on-secondary-container-light/[10%] dark:active:before:bg-on-secondary-container-dark/[10%] hover:before:bg-on-secondary-container-light/[8%] dark:hover:before:bg-on-secondary-container-dark/[8%] text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark active:before:bg-on-surface-light/[10%] dark:active:before:bg-on-surface-dark/[10%] hover:before:bg-on-surface-light/[8%] dark:hover:before:bg-on-surface-dark/[8%]",
                                                               "relative overflow-hidden before:absolute before:inset-0 flex items-center h-[48px] px-3 space-x-3 text-label-large font-medium")}>
                        {item.selected && <i className={classNames(
                            "text-on-secondary-container-light dark:text-on-secondary-container-dark",
                            "material-symbols-outlined text-[18px] font-vs-[0_500_0_24] "
                        )}>
                            check
                        </i>}
                        <span className={"flex-grow"}>
                            {item.title}
                        </span>
                        {item.subMenu && <i className={classNames(
                            item.selected ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark",
                            "ml-auto material-symbols-outlined text-[18px] font-vs-[0_500_0_24] "
                        )}>
                            arrow_right
                        </i>}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}