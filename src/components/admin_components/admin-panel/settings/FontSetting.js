'use client'
import {Component} from "grapesjs";
import Divider from "@m3/dividers/Divider";
import {Switch} from "@headlessui/react";
import FilledTextField from "@m3/text_fields/FilledTextField";
import {useState} from "react";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import FilledTextArea from "@m3/text_area/FilledTextArea";

export default function FontSetting({data}) {
    const [selectedFont, setSelectedFonts] = useState(data?.font || "roboto-flex")
    const saveData = () => {
        try {
            fetch(`/api/site-setting/${data._id}`, {
                method: 'PUT',
                body: JSON.stringify({font:selectedFont})
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
                        SEO Setting
                    </h2>
                    <Button onClick={()=>saveData()} type={"filled"} icon={"save"}>
                        Save
                    </Button>
                </div>
                <div className={"grid *:h-[200px] grid-cols-2 gap-4"}>
                    <div onClick={() => setSelectedFonts("roboto-flex")}
                         className={`${selectedFont === "roboto-flex" ? "text-on-secondary-container-light dark:text-on-secondary-container-dark border border-transparent bg-secondary-container-light dark:bg-secondary-container-dark":"border border-outline-light dark:border-outline-dark bg-surface-container-low-light dark:bg-surface-container-low-dark text-on-surface-light dark:text-on-surface-dark"}  rounded-[12px] py-4 px-4 text-headline-large roboto-font`}>
                        <div
                            className={`${selectedFont==="roboto-flex"?"text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"} font-bold text-title-small mb-2`}>
                            Roboto Flex
                        </div>
                        Whereas recognition of the inherent dignity
                    </div>
                    <div onClick={() => setSelectedFonts("noto-sans")}
                         className={`${selectedFont === "noto-sans" ? "text-on-secondary-container-light dark:text-on-secondary-container-dark border border-transparent bg-secondary-container-light dark:bg-secondary-container-dark":"border border-outline-light dark:border-outline-dark bg-surface-container-low-light dark:bg-surface-container-low-dark text-on-surface-light dark:text-on-surface-dark"}  rounded-[12px] py-4 px-4 text-headline-large roboto-font`}>
                        <div
                            className={`${selectedFont==="noto-sans"?"text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"} font-bold text-title-small mb-2`}>
                            Noto Sans
                        </div>
                        Whereas recognition of the inherent dignity
                    </div>
                    <div onClick={() => setSelectedFonts("open-sans")}
                         className={`${selectedFont === "open-sans" ? "text-on-secondary-container-light dark:text-on-secondary-container-dark border border-transparent bg-secondary-container-light dark:bg-secondary-container-dark":"border border-outline-light dark:border-outline-dark bg-surface-container-low-light dark:bg-surface-container-low-dark text-on-surface-light dark:text-on-surface-dark"}  rounded-[12px] py-4 px-4 text-headline-large roboto-font`}>
                        <div
                            className={`${selectedFont==="open-sans"?"text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"} font-bold text-title-small mb-2`}>
                            Open Sans
                        </div>
                        Whereas recognition of the inherent dignity
                    </div>
                    <div onClick={() => setSelectedFonts("inter")}
                         className={`${selectedFont === "inter" ? "text-on-secondary-container-light dark:text-on-secondary-container-dark border border-transparent bg-secondary-container-light dark:bg-secondary-container-dark":"border border-outline-light dark:border-outline-dark bg-surface-container-low-light dark:bg-surface-container-low-dark text-on-surface-light dark:text-on-surface-dark"}  rounded-[12px] py-4 px-4 text-headline-large roboto-font`}>
                        <div
                            className={`${selectedFont==="inter"?"text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"} font-bold text-title-small mb-2`}>
                            Inter
                        </div>
                        Whereas recognition of the inherent dignity
                    </div>
                </div>
            </div>
        </div>
    )
}