import {Component} from "grapesjs";
import Button from "@m3/buttons/Button";
import Link from "next/link";
import {useState} from "react";
import IconButton from "@m3/icon_buttons/IconButton";

export default function PageSection({item}) {
    const [selectedHeader,setSelectedHeader] = useState(0);
    // console.log(item)
    return (
        <div className="w-full">
            <div
                className={"flex items-center justify-between px-6 py-4 border-b border-outline-light dark:border-outline-dark"}>
                <h1 className={"font-bold text-body-large text-on-surface-light dark:text-on-surface-dark"}>
                    {item.title}
                </h1>
                <div className={"flex items-center space-x-2 "}>
                    <Link href={`/${item.slug}`}>
                        <IconButton >
                            preview
                        </IconButton>
                    </Link>
                    <Link href={`/admin/page-builder/${item._id}`}>
                        <Button type={"tonal"} icon={"edit"}>
                            edit
                        </Button>
                    </Link>
                    <Button icon={"delete"}
                            className={"text-error-light dark:text-error-dark hover:bg-error-light/[8%]"}>
                        Remove Page
                    </Button>
                </div>
            </div>
            <div className={" py-6"}>
                <ul>
                    <li className={"px-6  h-[40px] flex items-center"}>
                        <div
                            className={"pr-4 text-label-large font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Page Title
                        </div>
                        <div className={"pl-4 text-on-surface-light dark:text-on-surface-dark text-body-large"}>
                            {item.title}
                        </div>
                    </li>
                    <li className={"bg-surface-container-high-light dark:bg-surface-container-high-dark px-6  h-[40px] flex items-center"}>
                        <div
                            className={"pr-4 text-label-large font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Page Link(Slug)
                        </div>
                        <div className={"pl-4 text-on-surface-light dark:text-on-surface-dark text-body-large"}>
                            {item.slug}
                        </div>
                    </li>
                    <li className={"px-6  h-[40px] flex items-center"}>
                        <div
                            className={"pr-4 text-label-large font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Updated At
                        </div>
                        <div className={"pl-4 text-on-surface-light dark:text-on-surface-dark text-body-large"}>
                            {new Date(item.updatedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                weekday: 'long',
                            })}
                        </div>
                    </li>
                    <li className={"bg-surface-container-high-light dark:bg-surface-container-high-dark px-6 h-[40px] flex items-center"}>
                        <div
                            className={"pr-4 text-label-large font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Created At
                        </div>
                        <div className={"pl-4 text-on-surface-light dark:text-on-surface-dark text-body-large"}>
                            {new Date(item.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                weekday: 'long',
                            })}
                        </div>
                    </li>

                </ul>
                <div className={"mt-8 px-6"}>
                    <h3 className={"font-bold text-title-small"}>
                        Header type
                    </h3>
                    <div className={"flex mt-2 items-center space-x-4 justify-between"}>
                        <div onClick={()=>setSelectedHeader(0)} className={`${selectedHeader===0 ?"ring-2 ring-primary-light dark:ring-primary-dark":""} h-[200px] px-2 py-2 rounded-[16px] w-6/12 bg-surface-container-low-light dark:bg-surface-container-low-dark`}>
                            <div className={"flex items-center px-6 rounded-[8px] h-[100px] bg-secondary-container-light dark:bg-secondary-container-dark"}>
                                <div>
                                    <h2 className={"text-black/[50%] font-black text-title-large"}>
                                        Header
                                    </h2>
                                    <div className={"bg-black/[50%] rounded-full w-[100px] h-[5px] text-body-medium"}>

                                    </div>
                                    <div className={"mt-px bg-black/[50%] rounded-full w-[120px] h-[5px] text-body-medium"}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>setSelectedHeader(1)}
                            className={`${selectedHeader===1 ?"ring-2 ring-primary-light dark:ring-primary-dark":""} h-[200px] px-2 py-2 rounded-[16px] w-6/12 bg-surface-container-low-light dark:bg-surface-container-low-dark`}>
                          <h3 className={"font-medium text-label-small mb-1 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                              Story
                          </h3>
                            <div className={"flex space-x-1"}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item,index)=><div key={index}
                                className={"rounded-full w-[36px] h-[36px] bg-secondary-container-light dark:bg-secondary-container-dark"}>

                                </div>)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}