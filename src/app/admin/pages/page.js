'use client';
import React, {useState} from "react";
import IconButton from "@m3/icon_buttons/IconButton";
import FAB from "@m3/floating_action_buttons/FAB";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import {useThemeContext} from "@/app/theme-provider";
import Typography from "@m3/assets/typography/Typography";
import Image from "next/legacy/image";
import Divider from "@m3/dividers/Divider";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";
import Checkbox from "@m3/checkboxes/Checkbox";
import FilterChips from "@m3/chips/FilterChips";
import Link from "next/link";
import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import PageList from "@admin/admin-panel/pages/PageList";

export default function Page() {

    const [selectedSetting, setSelectedSetting] = useState(0);
    const tabs = [
        {
            icon: "Pages",
            title: "Pages",
            description: "Edit or Add Pages"
        },
        {
            icon: "Inventory",
            title: "Inventory",
            description: "Edit Inventory Card and Pages Styles"
        },
        {
            icon: "post",
            title: "Blog",
            description: "Edit Blog Card and Pages Styles"
        },
        {
            icon: "space_dashboard",
            title: "Templates",
            description: "Add New Component and Template"
        },

    ]

    return (
        <>
            {/*<div className={"flex bg-surface-light dark:bg-surface-dark items-center justify-center md:hidden fixed inset-0 z-[888]"}>*/}
            {/*    <div>*/}
            {/*      <label className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-center w-full flex justify-center text-headline-small font-normal"}>*/}
            {/*          :(*/}
            {/*      </label>*/}
            {/*        <h1 className={"mb-4 text-title-medium font-bold text-center mt-2 text-on-surface-light dark:text-on-surface-dark"}>*/}
            {/*            This option just work in Desktop Version*/}
            {/*        </h1>*/}
            {/*        <Link href={"/admin"} className={"flex items-center justify-center"}>*/}
            {/*        <Button type={"filled"}>*/}
            {/*            Back to Dashboard*/}
            {/*        </Button>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={"md:grid   grid-cols-12 md:h-[100vh]"}>
                <div className={"flex sticky top-[64px] bg-surface-container-high-light dark:bg-surface-container-high-dark md:pt-0 md:hidden justify-center items-center"}>
                    {tabs.map((tab, index) => (
                        <div onClick={()=>setSelectedSetting(index)} key={index} className={`cursor-pointer text-title-small w-3/12 flex items-center justify-center text-center h-[40px] ${index === selectedSetting ? "font-bold border-b-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark" : "border-b border-outline-variant-light dark:border-outline-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark"} `}>
                            {tab.title}
                        </div>
                    ))}
                </div>

                <div
                    className={"md:col-span-3 md:block hidden  border-l-outline-light dark:border-l-outline-dark border-r border-outline-variant-light dark:border-outline-variant-dark h-full"}>
                    <div
                        className={"border-b text-on-surface-light dark:text-on-surface-dark bg-surface-light dark:bg-surface-dark border-outline-variant-light dark:border-outline-variant-dark flex items-center justify-between px-4 h-[64px]"}>
                        <h1 className={"font-bold text-title-large"}>
                            Setting
                        </h1>
                    </div>
                    <ul>
                        {tabs.map((item, index) =>
                            <>
                                <li onClick={() => setSelectedSetting(index)}
                                    className={`transition-all duration-300 ${selectedSetting === index ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "text-surface-light dark:text-surface-dark "} flex items-center h-[72px] py-2 px-4 `}
                                    key={index}>
                                    {<Icon
                                        className={"mr-4 text-on-secondary-container-light dark:text-on-secondary-container-dark"}>
                                        {item.icon}
                                    </Icon>}
                                    <div>
                                        <h3 className={`${selectedSetting === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark"} text-body-large  `}>
                                            {item.title}
                                        </h3>
                                        <p className={`${selectedSetting === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} text-body-medium `}>
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                                {selectedSetting !== index && <div className={"px-4"}>
                                    <div className={"h-[1px] bg-surface-variant-light dark:bg-surface-variant-dark"}/>
                                </div>}
                            </>
                        )}
                    </ul>
                </div>
                <div className={"col-span-9"}>
                    <div className="border-l border-outline-variant-light dark:border-outline-variant-dark">

                        {selectedSetting === 1 &&

                            <InventoryEditor/>

                        }
                        {selectedSetting === 2 &&

                            <InventoryEditor/>

                        }
                        {selectedSetting === 0 && <PageList/>}
                    </div>
                </div>
            </div>
        </>

    )
}