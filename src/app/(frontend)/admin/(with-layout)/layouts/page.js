'use strict';
import React from "react";
import TemplateList from "@admin/admin-panel/pages/TemplateList";
import {getPages} from "@controller/PageController";
import {getTemplates} from '@controller/TemplateController'

// async function getTemplates() {
//     'use server'
//     const res = await fetch('http://localhost:3000/api/template', {next: {tags: ['template']}})
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }
async function getData() {
    'use server'
    const pages = await getPages();
    const templates = await getTemplates();
    // console.log(pages)
    return [...pages.data,...templates.data]
}

export default async function Layout() {
    const data = await getData();
    return (
        <>
            <div className={" border-outline-variant-light dark:border-outline-variant-dark"}>
                <TemplateList showDefaultTemplate={true} showDefaultPages={true} data={data}/>
            </div>
        </>

    )
}