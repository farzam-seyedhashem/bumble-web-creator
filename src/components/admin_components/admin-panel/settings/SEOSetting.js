'use client'
import {Component} from "grapesjs";
import Divider from "@m3/dividers/Divider";
import {Switch} from "@headlessui/react";
import FilledTextField from "@m3/text_fields/FilledTextField";
import {useState} from "react";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import FilledTextArea from "@m3/text_area/FilledTextArea";

export default function SEOSetting({data}) {
    const [seoSetting, setSeoSetting] = useState(data);
    const saveData = () => {
        try {
            fetch(`/api/site-setting/${data._id}`, {
                method: 'PUT',
                body: JSON.stringify(seoSetting)
            }).then(response =>
                    console.log(response)
                // setIsOpen(true)
            ).then(data => alert(data));
        } catch (error) {
            alert('An error occurred!');
        }
    }
    const handleSeoSettingChange = (key, value) => {
        setSeoSetting({...seoSetting, [key]: value});
    }
    return (
        <div className={"rounded-[16px] h-full w-full bg-surface-container-light dark:bg-surface-container-dark"}>
            <div className={"pb-6 px-6"}>
                <div className={"py-6 flex items-center justify-between"}>
                    <h2 className={"text-title-large text-on-surface-light dark:text-on-surface-dark font-extrabold "}>
                        SEO Setting
                    </h2>
                    <Button onClick={()=>saveData()} type={"filled"} icon={"save"}>
                        Save
                    </Button>

                </div>
                <div className={" mb-4"}>
                    <div
                        className={"w-full   p-[40px]  rounded-[12px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark"}>
                        <div className={"max-w-[600px]"}>
                            <div className={"flex items-center"}>
                                <div
                                    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark w-[32px] h-[32px] flex items-center justify-center mr-3 bg-surface-variant-light dark:bg-surface-variant-dark rounded-full relative border border-outline-variant-light dark:border-outline-variant-dark"}>
                                    <Icon size={20}>
                                        image
                                    </Icon>
                                </div>
                                <div>
                                    <h3 className={"text-[14px] text-on-surface-light dark:text-on-surface-dark"}>
                                        Example Website
                                    </h3>
                                    <h3 className={"text-[12px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                        https://example.com
                                    </h3>
                                </div>
                            </div>
                            <h4 className={"mb-[3px] mt-[5px] text-primary-light dark:text-primary-dark font-[26px]"}>
                                {seoSetting.metaTitle}
                            </h4>
                            <p className={"text-[14px] text-on-surface-variant-light dark:text-on-surface-variant-dark  "}>
                                {seoSetting.metaDescription}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"mt-6 grid grid-cols-12 gap-4"}>
                    <div className={"col-span-6"}>
                        <FilledTextField value={seoSetting?.metaTitle}
                                         onChange={(e) => handleSeoSettingChange("metaTitle", e.target.value)}
                                         label={"Meta Title"}/>
                    </div>
                    <div className={"col-span-6"}>
                        <FilledTextField value={seoSetting?.metaKeywords} onChange={(e) => handleSeoSettingChange("metaKeywords", e.target.value)} label={"Meta Keywords"}/>
                    </div>
                    <div className={"col-span-12"}>
                        <FilledTextField value={seoSetting?.metaDescription}
                                         onChange={(e) => handleSeoSettingChange("metaDescription", e.target.value)}
                                         label={"Meta Description"}/>
                    </div>
                    <div className={"col-span-12"}>
                        <FilledTextArea value={seoSetting?.globalJSONLD}
                                        onChange={(e) => handleSeoSettingChange("globalJSONLD", e.target.value)} label={"Global JSON LD"}/>
                    </div>

                </div>
            </div>
        </div>
    )
}