import {Dialog, DialogPanel, DialogTitle, Transition} from "@headlessui/react";
import {Fragment} from "react";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";

export default function BasicDialog({onClose,isOpen,className,children,width,icon,title,description,submitButton,cancelButton}) {
    return(
        <Dialog open={isOpen} as="div" className="relative z-999 focus:outline-none" onClose={onClose}>
            <div className=" fixed inset-0 bg-black/30" aria-hidden="true"/>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition

                        className={`${className} p-6 bg-surface-container-high-light dark:bg-surface-container-high-dark rounded-[28px] min-w-[280px] max-w-[560px] `}
                    >
                        {icon&&<div className={"text-center"}><Icon size={24}
                            className={"text-center mx-auto text-secondary-light dark:text-secondary-dark"}>
                            {icon}
                        </Icon></div>}
                        <DialogTitle as="h3" className={`${icon?"text-center":"text-left"} text-headline-small   text-on-surface-light dark:text-on-surface-dark`}>
                            {title}
                        </DialogTitle>
                        {description&&
                            <p className="mt-4 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark">
                                {description}
                            </p>}
                        <div className={`${children&&"mt-6"}`}>
                        {children&&children}
                        </div>
                        {!(!cancelButton&&!submitButton)&&<div className="mt-6 flex justify-end">
                            {cancelButton && <Button type={cancelButton?.type} onClick={cancelButton?.action}>
                                {cancelButton?.label}
                            </Button>}
                            {submitButton && <Button type={submitButton?.type} onClick={submitButton?.action}>
                                {submitButton?.label}
                            </Button>}
                        </div>}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}