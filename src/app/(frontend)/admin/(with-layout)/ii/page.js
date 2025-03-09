'use strict';
import React from "react";
import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import PostEditor from "@admin/admin-panel/pages/PostEditor";
import FooterEditor from "@admin/admin-panel/pages/FooterEditor";

async function getData(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/page', {next: {tags: ['pages']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    switch (slug) {
        case "page":
            return res.json()

        case "menu":
            return res.json()

        case "footer":
            break;
        case "inventory":
            break;
        case "template":
            break;
        case "post":
            break;
        default:
            return 404;
    }


}
async function getTemplates() {
    'use server'
    const res = await fetch('http://localhost:3000/api/template', {next: {tags: ['template']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
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
async function getMenu(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/menu', {next: {tags: ['menu']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function getFooter(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/footer', {next: {tags: ['footer']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function getInventoryPage(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/inventory-page', {next: {tags: ['inventory-page']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Page({params}) {
    const {slug} = params
    // const selectedTab = slug
    // const data = await getData(slug);
    // const siteSetting = await getSiteSettingData();
    // const templates = await getTemplates();
    // const menuSetting = await getMenu();
    // const inventoryPage = await getInventoryPage();
    // const footer = await getFooter();
    const tabs = [
        {
            icon: "menu",
            title: "Menu",
            id: "menu",
            link: "/admin/header-footer/menu",
            description: "Edit or Add Pages"
        },
        {
            icon: "footer",
            title: "Footer",
            id: "footer",
            link: "/admin/header-footer/footer",
            description: "Edit or Add Pages"
        },
        // {
        //     icon: "Inventory",
        //     title: "Inventory",
        //     id: "inventory",
        //     link: "/admin/pages/inventory",
        //     description: "Edit Inventory Card and Pages Styles"
        // },
        // {
        //     icon: "post",
        //     title: "Post",
        //     id: "post",
        //     link: "/admin/pages/post",
        //     description: "Edit Blog Card and Pages Styles"
        // },

    ]

    return (
        <>

            {/*<div className={"min-h-screen border-l border-outline-variant-light dark:border-outline-variant-dark"}>*/}
            {/*    <div className={"border-b border-outline-light container mx-auto pt-6 pb-2 "}>*/}
            {/*        <h1 className={"text-display-small text-on-surface-light dark:text-on-surface-dark font-black"}>*/}
            {/*            Header & Footer*/}
            {/*        </h1>*/}
            {/*        <div className={"flex justify-center py-4 mt-2"}>*/}
            {/*            <div className={"flex items-center h-[64px] bg-surface-container-lowest-light dark:bg-surface-container-lowest-dark w-5/12 rounded-full"}>*/}
            {/*                /!*<Link href={"/"} className={"w-6/12"}>*!/*/}

            {/*                /!*</Link>*!/*/}
            {/*                /!*<Link className={"w-6/12"}>*!/*/}

            {/*                /!*</Link>*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*<div*!/*/}
            {/*    /!*    className={"border-b z-999 bg-surface-container-light dark:bg-surface-container-dark border-surface-variant-light dark:border-surface-variant-dark *:w-2/12 *:relative *:flex *:justify-center *:items-center *:h-full sticky top-[0px] h-[48px] flex items-center"}>*!/*/}
            {/*    /!*    {tabs.map((item, index) => <Link*!/*/}
            {/*    /!*        className={`transition-all duration-300 ${selectedTab === item.id ? "hover:bg-primary-light/[8%] dark:hover:bg-primary-dark/[8%]" : "hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}`}*!/*/}
            {/*    /!*        href={item.link} key={index}>*!/*/}
            {/*    /!*        <div className={"text-center "}>*!/*/}
            {/*    /!*            <label*!/*/}
            {/*    /!*                className={`relative font-medium ${selectedTab === item.id ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark "} block text-title-small`}>*!/*/}
            {/*    /!*                {item.title}*!/*/}
            {/*    /!*                {selectedTab === item.id && <div*!/*/}
            {/*    /!*                    className={"w-full bg-primary-light dark:bg-primary-dark rounded-t-[3px] absolute -bottom-[14px] left-1/2 transform -translate-x-1/2 h-[3px]"}/>*!/*/}
            {/*    /!*                }*!/*/}
            {/*    /!*            </label>*!/*/}
            {/*    /!*        </div>*!/*/}
            {/*    /!*    </Link>)}*!/*/}
            {/*    /!*</div>*!/*/}

            {/*    {selectedTab === "menu" &&*/}

            {/*        <MenuEditor menuSetting={menuSetting} data={data} siteSetting={siteSetting}/>*/}

            {/*    }*/}
            {/*    {selectedTab === "footer" &&*/}
            {/*        <FooterEditor footerSetting={footer} siteSetting={siteSetting}/>*/}
            {/*    }*/}
            {/*    {selectedTab === "inventory" &&*/}

            {/*        <InventoryEditor inventorySetting={inventoryPage} siteSetting={siteSetting}/>*/}

            {/*    }*/}
            {/*    {selectedTab === "post" &&*/}

            {/*        <PostEditor siteSetting={siteSetting}/>*/}

            {/*    }*/}

            {/*</div>*/}
        </>

    )
}