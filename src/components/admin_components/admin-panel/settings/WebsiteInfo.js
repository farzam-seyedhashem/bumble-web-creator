'use client'
import {Component} from "grapesjs";
import Divider from "@m3/dividers/Divider";
import {Switch} from "@headlessui/react";
import FilledTextField from "@m3/text_fields/FilledTextField";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import {useState} from "react";
import  Image from 'next/image'
import favicon from '@/app/favicon.ico'
export default function WebsiteInfo({data}) {
    console.log(data)
    const [pageInfo, setPageInfo] = useState(data)
    const handleChangeWebsiteInfo = (key,value) => {
        setPageInfo({...pageInfo, [key]:value})
    }
    const saveData = () => {
        try {
            fetch(`/api/site-setting/${data._id}`, {
                method: 'PUT',
                body: JSON.stringify(pageInfo)
            }).then(response =>
                    console.log(response)
                // setIsOpen(true)
            ).then(data => alert(data));
        } catch (error) {
            alert('An error occurred!');
        }
    }
    return (
        <div className={"rounded-[16px] h-full w-full bg-surface-container-light dark:bg-surface-container-dark"}>
            <div className={"pb-6 px-6"}>
                <div className={"py-6 flex items-center justify-between"}>
                    <h2 className={"text-title-large text-on-surface-light dark:text-on-surface-dark font-extrabold "}>
                        Website Info
                    </h2>
                    <Button onClick={()=>saveData()} type={"filled"} icon={"save"}>
                        Save
                    </Button>

                </div>
                <div className={"mb-4"}>
                    <div
                        className={"overflow-hidden relative border-outline-light dark:border-outline-dark w-full h-[300px]  rounded-[12px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark"}>
                        <div className={"absolute right-0 top-1/2 transform -translate-y-1/2"}>
                            <div
                                className={"relative shadow-md dark:shadow-shadow-dark/[4%] shadow-shadow-light/[4%]  border-r-0 border-outline-variant-light bg-surface-container-light dark:bg-surface-container-dark w-[600px] h-[64px]"}>
                                <div
                                    className={"border border-outline-variant-light dark:border-outline-variant-dark border-b-outline-light dark:border-b-outline-dark rounded-t-[8px] h-[40px] absolute -top-[40px] left-6 w-[300px] bg-surface-container-light dark:bg-surface-container-dark "}>
                                    <div className={" w-full h-full items-center flex px-4 relative"}>
                                        <Image width={20} height={20} src={favicon} alt={"logo"} />
                                        <h3 className={"ml-2 mr-6 truncate text-on-surface-light dark:text-on-surface-dark text-label-medium font-medium"}>
                                            {pageInfo?.title}
                                        </h3>
                                        <Icon size={20}
                                              className={"top-1/2 transform -translate-y-1/2 right-2 absolute text-on-surface-variant-light dark:text-on-surface-variant-light"}>
                                            close
                                        </Icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={" grid grid-cols-12 gap-4"}>
                    <div className={"col-span-6"}>
                        <FilledTextField value={pageInfo?.title} onChange={(e)=>handleChangeWebsiteInfo("title",e.target.value)} label={"Website Title"}/>
                    </div>
                    <div className={"col-span-6"}>
                        <FilledTextField value={pageInfo?.description} onChange={(e)=>handleChangeWebsiteInfo("description",e.target.value)} label={"Website Description"}/>
                    </div>

                    <div className={"col-span-12"}>
                        <div className={"flex items-center space-x-4"}>
                            <div
                                className="flex justify-center items-center relative h-[110px] w-[110px] rounded-[12px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark">
                                <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                                      size={36}>
                                    image
                                </Icon>
                            </div>
                            <div>
                                <h3 className={"text-title-small font-extrabold text-on-surface-light dark:text-on-surface-dark"}>
                                    Fav Icon
                                </h3>
                                <p className={"mb-2 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Upload Website Fav Icon
                                </p>
                                <Button icon={"upload"} type={"tonal"}>
                                    upload
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12"}>
                        <div className={"flex items-center space-x-4"}>
                            <div
                                className="flex justify-center items-center relative h-[150px] w-[150px] rounded-[12px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark">
                                <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                                      size={36}>
                                    image
                                </Icon>
                            </div>
                            <div>
                                <h3 className={"text-title-small font-extrabold text-on-surface-light dark:text-on-surface-dark"}>
                                    Logo
                                </h3>
                                <p className={"mb-2 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Upload Website Logo
                                </p>
                                <Button icon={"upload"} type={"tonal"}>
                                    upload
                                </Button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}