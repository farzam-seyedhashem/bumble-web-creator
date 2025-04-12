'use strict';

import MenuEditor from "@admin/admin-panel/pages/MenuEditor";

async function getData(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/page', {next: {tags: ['pages']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()


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

async function getSiteSettingData() {
    'use server'
    const res = await fetch('http://localhost:3000/api/site-setting', {next: {tags: ['site-setting']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function getMenu() {
    'use server'
    const res = await fetch('http://localhost:3000/api/menu', {next: {tags: ['menu']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}



export default async function Page() {
    // const {slug} = params
    // const selectedTab = slug
    const data = await getData();
    const siteSetting = await getSiteSettingData();
    const menuSetting = await getMenu();
    // const pages = await getData();

    return (
        <>

            <div className={" border-l border-outline-variant-light dark:border-outline-variant-dark"}>
                <MenuEditor menuSetting={menuSetting} data={data} siteSetting={siteSetting}/>
            </div>
        </>

    )
}