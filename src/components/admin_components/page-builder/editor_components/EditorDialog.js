import {Component} from "grapesjs";
import IconButton from "@m3/icon_buttons/IconButton";
import {Transition,Dialog} from "@headlessui/react";
import {Fragment} from "react";

export default function EditorDialog({children,setIsOpen,isOpen}) {
    return(
        <Transition.Root show={isOpen}>
            <Dialog  className=" fixed w-[360px] z-999 h-screen flex  overflow-hidden"
                    onClose={()=>{}}>
                <div
                    className={`fixed   h-full w-[360px] justify-center transform top-0 right-0  `}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition  duration-1000 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition transform duration-1000"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >

                        <div
                            className={" w-[360px] h-full overflow-hidden border-l border-outline-light dark:border-outline-dark bg-surface-light dark:bg-surface-dark"}>
                            <div className={"pl-6 pr-2 space-x-2 flex items-center justify-start border-b border-outline-light dark:border-outline-dark py-6 mb-0"}>

                                <h2 className={"flex-1 text-title-large text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                    Edit Element
                                </h2>
                                <IconButton onClick={() => setIsOpen(false)}>
                                    close
                                </IconButton>
                            </div>
                            <div className={"px-0 h-[calc(100%_-_80px)] overflow-scroll"}>
                                {children}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}