'use client'
import IconButton from "@m3/icon_buttons/IconButton";
import {usePathname} from "next/navigation";
import {useState, Fragment} from "react";
import {Transition, Dialog} from "@headlessui/react";
import Link from "next/link";
import Icon from "@m3/assets/icons/Icon";

export default function MobileMenu({pageTitle}) {
    const menuList = [
        {
            title: "Dashboard",
            icon: "dashboard",
            link: "/admin",
            id: 1
        },
        // {
        //     title: "Analytics",
        //     icon: "analytics",
        //     link: "/admin/analytics",
        //     id: 1
        // },
        {
            title: "Website Builder",
            icon: "layers",
            link: "/admin/pages",
            id: 1
        },
        // {
        //     title: "Blogs",
        //     icon: "post",
        //     link: "/admin/blogs",
        //     id: 2
        // },
        // {
        //     title: "Testimonials",
        //     icon: "reviews",
        //     link: "/admin/testimonials",
        //     id: 2
        // },
        // {
        //     title: "Sliders",
        //     icon: "photo_library",
        //     link: "/admin/sliders",
        //     id: 2
        // },
        {
            title: "Mails",
            icon: "mail",
            link: "/admin/mails",
            id: 3
        },
        // {
        //     title: "Forms",
        //     icon: "assignment",
        //     link: "/admin/forms",
        //     subItem: [
        //         {
        //             icon: "monitoring",
        //             title: "SEO",
        //             link: "/admin/setting/monitoring",
        //             description: "Edit global SEO settings"
        //         },
        //     ],
        //     id: 3
        // },
        {
            title: "Setting",
            icon: "settings",
            link: "/admin/setting",
            subItem: [
                {
                    icon: "monitoring",
                    title: "SEO",
                    link: "/admin/setting/monitoring",
                    description: "Edit global SEO settings"
                },

                {
                    icon: "palette",
                    title: "Appearance",
                    link: "/admin/setting/appearance",
                    description: "Edit theme, font, color and more..."
                },
                {
                    icon: "person",
                    title: "Users",
                    link: "/admin/setting/users",
                    description: "Add admin users and there role"

                },
                {
                    icon: "web",
                    title: "Website",
                    link: "/admin/setting/website",
                    description: "domain and logo settings"
                }
            ],
            id: 3
        },
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathName = usePathname()
    return (
        <div
            className="md:hidden fixed z-999 h-[64px] flex items-center bg-surface-container-light dark:bg-surface-container-dark top-0 left-0 w-full ">
            <IconButton onClick={() => setIsMenuOpen(true)}>
                menu
            </IconButton>
            <h1 className={"text-on-surface-light dark:text-on-surface-dark mx-auto text-title-large"}>
                {menuList.find(item => item.link === pathName).title}
            </h1>
            <IconButton>
                account_circle
            </IconButton>

            <Transition.Root show={isMenuOpen} as={Fragment}>
                <Dialog as="div" className="absolute inset-0 flex z-[999] overflow-hidden"
                        onClose={setIsMenuOpen}>
                    <Dialog.Overlay className={"fixed inset-0 bg-scrim-light/[40%] dark:bg-scrim-dark/[40%]"} close={setIsMenuOpen}/>

                    <div
                        className={`fixed inset-y-0 w-[360px]  left-0  flex  `}>

                        <Transition.Child
                            as={Fragment}
                            enter="transition duration-1000 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition transform duration-1000"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >

                            <Dialog.Panel
                                className={"pt-4 rounded-r-[16px] w-[360px] h-full overflow-hidden  bg-surface-container-light dark:bg-surface-container-dark"}>
                                <ul className={"px-3  overflow-scroll"}>
                                    {menuList.map((item, index) => (
                                        <li onClick={()=>setIsMenuOpen(false)} key={index}>
                                            <Link href={item.link}
                                                  className={`text-label-large ${item.link === pathName ? "bg-secondary-container-light dark:bg-secondary-container-dark rounded-full font-bold text-on-secondary-container-light dark:text-on-secondary-container-dark" : "font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"} flex items-center justify-start h-[56px] w-full px-4 `}>
                                                <Icon
                                                    className={`mr-3 ${item.link === pathName ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}
                                                    size={24} weight={item.link === pathName?700:500} fill={item.link === pathName?1:0}>
                                                    {item.icon}
                                                </Icon>
                                                <h3>{item.title}</h3>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}