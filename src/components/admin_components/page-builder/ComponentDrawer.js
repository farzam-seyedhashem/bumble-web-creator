import {Dialog, Transition} from "@headlessui/react";
import {useState, Fragment} from "react";
import Icon from "@m3/assets/icons/Icon";
import IconButton from "@m3/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";

export default function ComponentDrawer({isOpen, setIsOpen}) {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog onTouchMove={() => {
                setIsOpen(false)
            }} as="div" className="fixed inset-0 z-[1001] overflow-hidden" onClose={setIsOpen}>

                {/*<Dialog.Overlay className="absolute bg-black bg-opacity-30 inset-0"/>*/}

                <div className="fixed inset-y-0 rtl:right-0 ltr:left-0 max-w-full flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div
                            className="w-[360px] border-r border-outline-light dark:border-outline-dark max-w-[360px] ">
                            <div
                                className="h-full flex flex-col bg-surface-container-low-light dark:bg-surface-container-low-dark overflow-y-scroll">
                                <div
                                    className={"pl-6 pr-4 justify-between text-title-large text-on-surface-variant-light dark:text-on-surface-variant-dark pt-2 flex items-center"}>
                                    All Components
                                    <IconButton>
                                        close
                                    </IconButton>
                                </div>
                                <div className={"px-6"}>
                                    <div className={"mt-4 flex items-center justify-between"}>
                                        <h2 className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                            Basic Components
                                        </h2>
                                        <button
                                            className={"text-primary-light dark:text-primary-dark text-label-large"}>
                                            Show All
                                        </button>
                                    </div>
                                    <div className={"grid mt-3 grid-cols-2 gap-4"}>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>
                                            <div
                                                className={"text-headline-small font-medium text-on-surface-light dark:text-on-surface-dark "}>
                                                TEXT
                                            </div>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                Text
                                            </label>
                                        </div>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>

                                            <div
                                                className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                                Paragraph
                                            </div>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                Paragraph
                                            </label>
                                        </div>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>

                                            <Button type={"tonal"}>
                                                Button
                                            </Button>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                Button
                                            </label>
                                        </div>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>
                                            <Icon
                                                className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                                image
                                            </Icon>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                Image
                                            </label>
                                        </div>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>
                                            <Icon
                                                className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                                crop_5_4
                                            </Icon>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                Container
                                            </label>
                                        </div>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>
                                            <Icon
                                                className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                                view_column
                                            </Icon>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                Column
                                            </label>
                                        </div>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>
                                            <Icon
                                                className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                                gallery_thumbnail
                                            </Icon>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                Slider
                                            </label>
                                        </div>
                                        <div
                                            className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>
                                            <div className={"z-10 absolute inset-0 w-full h-full"}/>
                                            <Icon
                                                className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                                list
                                            </Icon>
                                            <label
                                                className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                                List
                                            </label>
                                        </div>

                                    </div>
                                    <div className={"mt-4 flex items-center justify-between"}>
                                        <h2 className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                            Sliders
                                        </h2>
                                        <button
                                            className={"text-primary-light dark:text-primary-dark text-label-large"}>
                                            Show All
                                        </button>
                                    </div>
                                    <div className={"mt-4 flex items-center justify-between"}>
                                        <h2 className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                            Testimonial Card
                                        </h2>
                                        <button
                                            className={"text-primary-light dark:text-primary-dark text-label-large"}>
                                            Show All
                                        </button>
                                    </div>
                                    <div className={"mt-4 flex items-center justify-between"}>
                                        <h2 className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                            Text & Image Components
                                        </h2>
                                        <button
                                            className={"text-primary-light dark:text-primary-dark text-label-large"}>
                                            Show All
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>

            </Dialog>
        </Transition.Root>
    )
}