'use client';
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import FAB from "@m3/floating_action_buttons/FAB";
import {Dialog, DialogPanel} from "@headlessui/react";
import {useState} from "react";
import Button from "@m3/buttons/Button";
import TextField from "@m3/text_fields/TextField";
import Icon from "@m3/assets/icons/Icon";
import PageSection from "@admin/admin-panel/pages/PageSection";

export default function PageList({data}) {
    const [isOpen, setIsOpen] = useState(false);
    const [newPageData, setNewPageData] = useState({})
    const [selectedPage, setSelectedPage] = useState(-1)
    const CreateNewPage = () => {
        try {
            fetch("/api/page", {
                method: 'POST',
                body: JSON.stringify(newPageData)
            }).then(response =>
                setIsOpen(true)
            ).then(data => alert(data));
        } catch (error) {
            alert('An error occurred!');
        }
    }
    // const pageCompleteHelper = (value) => {
    //     try {
    //         fetch("/api/page?", {
    //             method: 'GET',
    //         }).then(response =>
    //             setIsOpen(true)
    //         ).then(data => alert(data));
    //     }catch(error) {
    //         alert('An error occurred!');
    //     }
    // }
    const updateNewPageData = (id, value) => {
        setNewPageData({...newPageData, [id]: value})
    }
    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel
                        className="p-6 pb-0 w-[560px] rounded-[28px] bg-surface-container-high-light dark:bg-surface-container-high-dark">
                        {/*<DialogTitle className="font-bold">Deactivate account</DialogTitle>*/}
                        {/*<Description>This will permanently deactivate your account</Description>*/}
                        <h2 className={"mb-4 text-center font-normal text-headline-small text-on-surface-light dark:text-on-surface-dark"}>
                            Create New Page
                        </h2>
                        <p className={"mb-6 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Please fill the form and submit to new page created.
                        </p>
                        <div className={"space-y-2"}>
                            <TextField onChange={(e) => updateNewPageData("title", e.target.value)}
                                       label={"Page Title"}/>
                            <TextField onChange={(e) => updateNewPageData("slug", e.target.value)} label={"Page Link"}/>
                        </div>
                        <div className="py-6 flex justify-end">
                            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                            <Button type={"filled"} onClick={CreateNewPage}>Submit</Button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
            {/*<div*/}
            {/*    className={" bg-surface-container-light dark:bg-surface-container-dark  flex items-center justify-between px-4 h-[64px]"}>*/}
            {/*    <h1 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large"}>*/}
            {/*       Pages*/}
            {/*    </h1>*/}
            {/*    <Button icon={"add"} type={"filled"}*/}
            {/*            className={""}>*/}
            {/*        Add New Page*/}
            {/*    </Button>*/}
            {/*</div>*/}
            <div className={"grid grid-cols-12  "}>
                <div
                    className=" border-r border-outline-light dark:border-outline-dark h-[calc(100vh_-_64px)] col-span-5 w-full  pt-0 px-0 justify-center">

                    {/*<FAB onClick={() => setIsOpen(true)} label={"Add New"} color={"primary"}*/}
                    {/*     className={"fixed bottom-6 right-6"} isExtended={true}>*/}
                    {/*    add*/}
                    {/*</FAB>*/}
                    <div className={"border-b border-outline-light dark:border-outline-dark py-4 px-4 flex items-center justify-between"}>
                        <h1 className={"font-bold text-title-large"}>
                            Page List
                        </h1>
                        <Button icon={"add"} type={"filled"} className={""}>
                            Add New Page
                        </Button>
                    </div>
                    <ul className={"w-full py-0"}>
                        {data.data.map(page => <li onClick={() => setSelectedPage(page._id)} key={page._id}
                                                   className={`${selectedPage === page._id ? "text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark hover:before:bg-on-surface-light/[8%] dark:hover:before:bg-on-surface-dark/[8%]"} cursor-pointer before:inset-0 before:absolute relative  flex items-center  justify-between  px-4 h-[64px] `}>
                            <div>
                                <h3 className={"text-body-large"}>{page.title}</h3>
                                <h4 className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-large"}>{page.slug}</h4>
                            </div>

                            <Icon>
                                chevron_right
                            </Icon>

                            {/*<div className={"flex items-center space-x-1 justify-end"}>*/}
                            {/*    <Link href={"/page-builder"}>*/}
                            {/*        <IconButton>*/}
                            {/*            chevron*/}
                            {/*        </IconButton>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}

                        </li>)}
                    </ul>
                </div>
                <div className={"col-span-7  "}>
                    <div>
                        {selectedPage !== -1 &&
                            <PageSection item={data.data.find((item) => item._id === selectedPage)}/>}
                    </div>
                </div>
            </div>
        </>
    )
}