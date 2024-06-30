'use client'
import {useState} from "react";
import Icon from "@m3/assets/icons/Icon";
import FAB from "@m3/floating_action_buttons/FAB";
import Badge from "@m3/badges/Badge";
import AssistChips from "@m3/chips/AssistChips";
import IconButton from "@m3/icon_buttons/IconButton";

export default function Page({children}) {
    const [selectedMail, setSelectedMail] = useState(null);
    const Mails = [
        {
            title: "Lorem ipsum dolor",
            from: "mail@mail.com",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae  "
        },
        {
            title: "Lorem ipsum dolor",
            from: "info@mail.com",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae "
        }
    ]
    return (
        <div>
            <div
                className={"border-l bg-surface-container-light dark:bg-surface-container-dark border-outline-variant-light dark:border-outline-variant-dark flex items-center justify-between px-4 h-[64px]"}>
                <h1 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large"}>
                    Mail List
                </h1>
                <button
                    className={"px-4 h-[40px] rounded-full border border-outline-variant-light dark:border-outline-variant-dark flex bg-surface-light dark:bg-surface-dark items-center"}>
                    <div
                        className={"mr-2 rounded-full bg-surface-container-high-light dark:bg-surface-container-high-dark w-6 h-6 flex justify-center items-center"}>
                        <div
                            className="text-[18px] font-normal  text-on-surface-variant-light dark:text-on-surface-variant-dark">
                            in
                        </div>
                    </div>
                    <label
                        className={"font-normal text-on-surface-light dark:text-on-surface-dark text-label-large mr-2 truncate w-[120px]"}>
                        info@bumbleauto.com
                    </label>
                    <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                        arrow_drop_down
                    </Icon>
                </button>
            </div>
            <FAB color={"primary"} className={"bottom-4 right-4 absolute"} label={"Send New Message"} icon={""}
                 isExtended={true}>
                edit
            </FAB>
            <div className={"grid grid-cols-12 h-[calc(100vh_-_64px)]"}>
                <div
                    className={"col-span-4 border-x border-outline-variant-light dark:border-outline-variant-dark h-full"}>
                    <ul>
                        {Mails.map((mail, index) =>
                            <>
                                <li onClick={() => setSelectedMail(index)}
                                    className={`transition-all duration-300 ${selectedMail === index ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "text-surface-light dark:text-surface-dark "} flex items-center h-[88px] py-3 px-4 `}
                                    key={index}>

                                    {selectedMail === index && <Icon
                                        className={"mr-4 text-on-secondary-container-light dark:text-on-secondary-container-dark"}>
                                        check
                                    </Icon>}
                                    <div>
                                        <h3 className={`${selectedMail === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark"} text-body-large  `}>
                                            {mail.title}
                                        </h3>
                                        <p className={`${selectedMail === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} text-body-medium `}>
                                            {mail.shortDescription}
                                            <span className={"text-label-small ml-1"}>
                                    ...
                                </span>
                                        </p>
                                    </div>
                                </li>
                                {selectedMail !== index && <div className={"px-4"}>
                                    <div className={"h-[1px] bg-surface-variant-light dark:bg-surface-variant-dark"}/>
                                </div>}
                            </>
                        )}
                    </ul>
                </div>
                <div className={"col-span-8"}>
                    {selectedMail !== null && <div>
                        <div
                            className={"py-6 space-y-1 flex items-center justify-between px-6 border-b border-outline-variant-light dark:border-outline-variant-dark"}>
                            <div className="">
                                <div className={"mb-1"}>
                                    <label className={"font-bold text-on-surface-light dark:text-on-surface-dark text-title-medium "}>
                                        {Mails[selectedMail].title}
                                    </label>
                                </div>
                                <div className={""}>
                                    <label className={"text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                        From :
                                        <span
                                            className={"ml-2 text-on-surface-light dark:text-on-surface-dark text-label-large bg-surface-container-highest-light dark:bg-surface-container-highest-dark px-2 py-1 rounded-[8px]"}>
                                    {Mails[selectedMail].from}
                                    </span>
                                    </label>
                                </div>
                            </div>
                            <div className={"space-x-1 flex items-center"}>
                                <IconButton  type={"outlined"}>
                                    message
                                </IconButton>
                                <IconButton type={"tonal"}>
                                    reply
                                </IconButton>
                                <IconButton className={"text-on-error-light dark:text-on-error-dark bg-error-light dark:bg-error-dark"} selected type={"filled"}>
                                    delete
                                </IconButton>
                            </div>
                        </div>
                        <div className={"px-6 py-6 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            {Mails[selectedMail].description}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}