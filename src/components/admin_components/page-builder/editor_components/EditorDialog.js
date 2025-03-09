import {Component} from "grapesjs";
import IconButton from "@m3/icon_buttons/IconButton";
import {Transition,Dialog} from "@headlessui/react";
import {Fragment} from "react";

export default function EditorDialog({children,setIsOpen,isOpen}) {
    return(
        <Transition.Root show={isOpen} as={Fragment}>
            <div as="div" className="absolute w-[360px] h-screen flex z-[999] overflow-hidden"
                    onClose={()=>{}}>
                <div
                    className={`fixed z-[999]  h-full w-[360px] justify-center transform bottom-0 left-0  `}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition duration-1000 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition transform duration-1000"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >

                        <div
                            className={" w-[360px] h-full overflow-hidden rounded-[16px] bg-surface-light dark:bg-surface-dark"}>
                            <div className={"px-4 space-x-2 flex items-center justify-start border-b border-outline-light dark:border-outline-dark py-2 mb-0"}>
                                <IconButton onClick={() => setIsOpen(false)}>
                                    chevron_left
                                </IconButton>
                                <h2 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                    Edit Element
                                </h2>
                            </div>
                            <div className={"px-0 h-[calc(100%_-_80px)] overflow-scroll"}>
                                {children}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition.Root>
    )
}