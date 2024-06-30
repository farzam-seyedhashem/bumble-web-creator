'use strict';
import React from "react";
// import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import PageList from "@admin/admin-panel/pages/PageList";
// import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import Link from "next/link";
import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import {getBySlug} from "@controller/PageController";

async function getData(slug) {
    'use server'
    switch (slug) {
        case "page":
            const res = await fetch('http://localhost:3000/api/page', {next: {tags: ['pages']}})
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')
            }
            return res.json()

        case "menu":
            break;
        case "footer":
            break;
        case "inventory":
            break;
        case "template":
            break;
        case "blog":
            break;
        default:
            return 404;
    }


}

async function getSiteSettingData(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/site-setting', {next: {tags: ['site-setting']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page({params}) {
    const {slug} = params
    const selectedTab = slug
    const data = await getData(slug);
    const siteSetting = await getSiteSettingData();
    // console.log(typeof data)
    const tabs = [
        {
            icon: "Pages",
            id: "page",
            title: "Pages",
            link: "/admin/pages/page",
            description: "Edit or Add Pages"
        },
        {
            icon: "menu",
            title: "Menu",
            id: "menu",
            link: "/admin/pages/menu",
            description: "Edit or Add Pages"
        },
        {
            icon: "footer",
            title: "Footer",
            id: "footer",
            link: "/admin/pages/footer",
            description: "Edit or Add Pages"
        },
        {
            icon: "Inventory",
            title: "Inventory",
            id: "inventory",
            link: "/admin/pages/inventory",
            description: "Edit Inventory Card and Pages Styles"
        },
        {
            icon: "post",
            title: "Blog",
            id: "blog",
            link: "/admin/pages/blog",
            description: "Edit Blog Card and Pages Styles"
        },
        {
            icon: "space_dashboard",
            title: "Templates",
            id: "template",
            link: "/admin/pages/template",
            description: "Add New Component and Template"
        },

    ]

    return (
        <>

            <div className={"min-h-screen border-l border-outline-variant-light dark:border-outline-variant-dark"}>
                <div
                    className={"flex sticky z-999 top-[64px] bg-surface-container-high-light dark:bg-surface-container-high-dark md:pt-0 md:hidden justify-center items-center"}>
                    {tabs.map((tab, index) => (
                        <Link href={tab.link} key={index}
                              className={`cursor-pointer text-title-small w-3/12 flex items-center justify-center text-center h-[40px] ${tab.id === selectedTab ? "font-bold border-b-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark " : "border-b border-outline-variant-light dark:border-outline-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark"} `}>
                            {tab.title}
                        </Link>
                    ))}
                </div>
                {/*<div*/}
                {/*    className={"sticky top-0 z-999 bg-surface-container-light dark:bg-surface-container-dark  flex items-center justify-between px-4 h-[64px]"}>*/}
                {/*    <h1 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large"}>*/}
                {/*        Page Builder*/}
                {/*    </h1>*/}
                {/*</div>*/}
                <div
                    className={"border-b z-999 bg-surface-container-light dark:bg-surface-container-dark border-surface-variant-light dark:border-surface-variant-dark *:w-2/12 *:relative *:flex *:justify-center *:items-center *:h-full sticky top-[0px] h-[48px] flex items-center"}>
                    {tabs.map((item, index) => <Link
                        className={`transition-all duration-300 ${selectedTab === item.id ? "hover:bg-primary-light/[8%] dark:hover:bg-primary-dark/[8%]" : "hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}`}
                        href={item.link} key={index}>
                        <div className={"text-center "}>
                            {/*<Icon*/}
                            {/*    className={`block ${selectedTab === index ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>*/}
                            {/*    {item.icon}*/}
                            {/*</Icon>*/}
                            <label
                                className={`relative font-medium ${selectedTab === item.id ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark "} block text-title-small`}>
                                {item.title}
                                {selectedTab === item.id && <div
                                    className={"w-full bg-primary-light dark:bg-primary-dark rounded-t-[3px] absolute -bottom-[14px] left-1/2 transform -translate-x-1/2 h-[3px]"}/>
                                }
                            </label>
                        </div>
                    </Link>)}
                </div>

                {selectedTab === "menu" &&

                    <MenuEditor siteSetting={siteSetting}/>

                }
                {selectedTab === "inventory" &&

                    <InventoryEditor/>

                }
                {selectedTab === "page" && <PageList data={data}/>}

            </div>
        </>

    )
}