import {Dialog, Transition} from "@headlessui/react";
import {useState, Fragment} from "react";
import Icon from "@m3/assets/icons/Icon";
import IconButton from "@m3/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";

export default function ComponentDrawer({isOpen, dragFunc, setIsOpen}) {

    return (
        <>
            {/*<Transition.Root show={isOpen} as={Fragment}>*/}
            {/*    <div  className="fixed w-[360px] h-full left-0 top-0 z-[1001] overflow-hidden" onClose={()=>{}}>*/}

            {/*        /!*<Dialog.Overlay className="absolute bg-black bg-opacity-30 inset-0"/>*!/*/}

            {/*        <div className="h-screen rtl:right-0 ltr:left-0 max-w-full flex">*/}
            {/*            <Transition.Child*/}
            {/*                as={Fragment}*/}
            {/*                enter="transform transition ease-in-out duration-300"*/}
            {/*                enterFrom="-translate-x-full"*/}
            {/*                enterTo="translate-x-0"*/}
            {/*                leave="transform transition ease-in-out duration-300"*/}
            {/*                leaveFrom="translate-x-0"*/}
            {/*                leaveTo="-translate-x-full"*/}
            {/*            >*/}
            <div
                className="h-[calc(100%_-_64px)] overflow-scroll w-[360px] border-r border-outline-variant-light dark:border-outline-dark max-w-[360px] ">
                <div
                    className="h-full flex flex-col bg-surface-light dark:bg-surface-dark overflow-y-scroll">
                    {/*<div*/}
                    {/*    className={"pl-6 pr-4 justify-between text-title-large text-on-surface-variant-light dark:text-on-surface-variant-dark pt-2 flex items-center"}>*/}
                    {/*    All Components*/}
                    {/*    <IconButton  onClick={()=>setIsOpen(false)}>*/}
                    {/*        close*/}
                    {/*    </IconButton>*/}
                    {/*</div>*/}
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
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"1"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                {/*<div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                                {/*<div*/}
                                {/*    className={"text-headline-small  text-on-primary-container-light dark:text-on-primary-container-dark "}>*/}
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    title
                                </Icon>
                                {/*</div>*/}
                                {/*<label*/}
                                {/*    className={"z-20 absolute bottom-2 font-medium block text-title-medium text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                                {/*    Title*/}
                                {/*</label>*/}
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"2"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    notes
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"3"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    image
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"4"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <div className={"z-10 absolute inset-0 w-full h-full"}/>
                                <Button
                                    className={"*:text-secondary-container-light dark:*:!text-on-secondary-container-dark bg-on-primary-container-light dark:bg-on-primary-container-light"}>
                                    Button
                                </Button>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"5"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    crop_5_4
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"6"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    view_column
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"11"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    star
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"7"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    gallery_thumbnail
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"8"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    star
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"9"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    post
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"10"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    inventory
                                </Icon>
                            </div>
                            <div onDragStart={(e) => dragFunc(e)} draggable={true} id={"12"}
                                 className={"relative flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark w-full h-[132px]"}>
                                <Icon weight={700} size={48} fill={1}
                                      className={"text-[48px] text-on-primary-container-light dark:text-on-primary-container-light"}>
                                    h
                                </Icon>
                            </div>
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"4"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}

                            {/*    <Button type={"tonal"}>*/}
                            {/*        Button*/}
                            {/*    </Button>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Button*/}
                            {/*    </label>*/}
                            {/*</div>*/}

                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"5"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}

                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Container*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"6"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        view_column*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Column*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"11"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <div*/}
                            {/*        className={"text-headline-small font-medium text-on-surface-light dark:text-on-surface-dark "}>*/}
                            {/*        <Icon className={"text-[36px]"}>*/}
                            {/*            star*/}
                            {/*        </Icon>*/}

                            {/*    </div>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Icon Picker*/}
                            {/*    </label>*/}
                            {/*</div>*/}

                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"7"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        gallery_thumbnail*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Slider*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"8"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        star*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Feature Section*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"9"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        post*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Blog Post*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"10"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        inventory*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Inventories*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"11"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        /!*user_circle*!/*/}
                            {/*        interpreter_mode*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Testimonial*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div onDragStart={(e) => dragFunc(e)} draggable={true} id={"12"}*/}
                            {/*     className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        /!*user_circle*!/*/}
                            {/*        align_space_even*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        Space*/}
                            {/*    </label>*/}
                            {/*</div>*/}

                            {/*<div*/}
                            {/*    className={"relative flex items-center justify-center rounded-[8px] bg-surface-container-light dark:bg-surface-container-dark w-full h-[132px]"}>*/}
                            {/*    <div className={"z-10 absolute inset-0 w-full h-full"}/>*/}
                            {/*    <Icon*/}
                            {/*        className={"text-[32px] text-on-surface-variant-light dark:text-on-surface-variant-dark "}>*/}
                            {/*        list*/}
                            {/*    </Icon>*/}
                            {/*    <label*/}
                            {/*        className={"z-20 absolute bottom-2 block text-label-large text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                            {/*        List*/}
                            {/*    </label>*/}
                            {/*</div>*/}

                        </div>
                        {/*<div className={"mt-4 flex items-center justify-between"}>*/}
                        {/*    <h2 className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                        {/*        Sliders*/}
                        {/*    </h2>*/}
                        {/*    <button*/}
                        {/*        className={"text-primary-light dark:text-primary-dark text-label-large"}>*/}
                        {/*        Show All*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className={"mt-4 flex items-center justify-between"}>*/}
                        {/*    <h2 className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                        {/*        Testimonial Card*/}
                        {/*    </h2>*/}
                        {/*    <button*/}
                        {/*        className={"text-primary-light dark:text-primary-dark text-label-large"}>*/}
                        {/*        Show All*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className={"mt-4 flex items-center justify-between"}>*/}
                        {/*    <h2 className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                        {/*        Text & Image Components*/}
                        {/*    </h2>*/}
                        {/*    <button*/}
                        {/*        className={"text-primary-light dark:text-primary-dark text-label-large"}>*/}
                        {/*        Show All*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            {/*            </Transition.Child>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</Transition.Root>*/}
        </>
    )
}