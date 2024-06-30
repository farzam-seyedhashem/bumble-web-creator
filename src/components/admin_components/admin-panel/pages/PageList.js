'use client';
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import FAB from "@m3/floating_action_buttons/FAB";
import {Dialog, DialogPanel} from "@headlessui/react";
import {useState} from "react";
import Button from "@m3/buttons/Button";
import TextField from "@m3/text_fields/TextField";
import {StyleToTailwind} from "@frontend/_helper/StyleToTailwind";

export default function PageList({data}) {
    const [isOpen, setIsOpen] = useState(false);
    const [newPageData,setNewPageData] = useState({})
    console.log("data", StyleToTailwind({
        paddingTop: 5,
        marginLeft:4,
    },"large"))
    const CreateNewPage = () => {
        console.log(newPageData);
        try {
            fetch("/api/page", {
                method: 'POST',
                body: JSON.stringify(newPageData)
            }).then(response =>
                setIsOpen(true)
            ).then(data => alert(data));
        }catch(error) {
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
    const updateNewPageData = (id,value) => {
        setNewPageData({...newPageData,[id]:value})
    }
    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="p-6 pb-0 w-[560px] rounded-[28px] bg-surface-container-high-light dark:bg-surface-container-high-dark">
                        {/*<DialogTitle className="font-bold">Deactivate account</DialogTitle>*/}
                        {/*<Description>This will permanently deactivate your account</Description>*/}
                        <h2 className={"mb-4 text-center font-normal text-headline-small text-on-surface-light dark:text-on-surface-dark"}>
                            Create New Page
                        </h2>
                        <p className={"mb-6 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Please fill the form and submit to new page created.
                        </p>
                        <div className={"space-y-2"}>
                        <TextField onChange={(e)=>updateNewPageData("title",e.target.value)} label={"Page Title"}/>
                        <TextField onChange={(e)=>updateNewPageData("slug",e.target.value)} label={"Page Link"}/>
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
            <div className="h-full w-full flex pt-0 px-0 justify-center">

                <FAB onClick={() => setIsOpen(true)} label={"Add New"} color={"primary"} className={"fixed bottom-6 right-6"} isExtended={true}>
                    add
                </FAB>
                <div className={"w-full"}>
                    <div
                        className={"overflow-hidden rounded-[0px]  dark:border-outline-dark border-outline-light"}>
                        <table
                            className={" w-full mt-2  border-collapse"}>
                            <thead className={" *:border-b *:border-outline-variant-light"}>
                            <tr className={"text-left *:font-medium *:text-title-small *:text-on-surface-variant-light dark:*:text-on-surface-variant-dark *:px-4 *:h-[48px] bg-surface-light dark:bg-surface-dark"}>
                                <th>Page Name</th>
                                <th>Slug (link)</th>
                                <th>Created At</th>
                                <th>Update At</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody
                                className={"*:text-on-surface-variant-light dark:*:text-on-surface-variant-dark dark:hover:*:text-on-secondary-container-dark hover:*:text-on-secondary-container-light dark:hover:*:bg-secondary-container-dark hover:*:bg-secondary-container-light  *:border-b dark:*:border-outline-variant-dark *:border-outline-variant-light"}>
                            {data.data.map(page=><tr key={page._id} className={"*:px-4 *:h-[56px] "}>
                                <td className={"font-medium"}>{page.title}</td>
                                <td>{page.slug}</td>
                                <td>{page.createdAt}</td>
                                <td>{page.updatedAt}</td>
                                <td>
                                    <div className={"flex items-center space-x-1 justify-end"}>
                                        <Link href={"/page-builder"}>
                                            <IconButton>
                                                edit
                                            </IconButton>
                                        </Link>
                                    </div>
                                </td>
                            </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}