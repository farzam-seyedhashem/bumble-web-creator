'use strict';
import React from "react";
// import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import PageList from "@admin/admin-panel/pages/PageList";
// import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import Link from "next/link";
import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import {getBySlug} from "@controller/PageController";
import PostEditor from "@admin/admin-panel/pages/PostEditor";
import FooterEditor from "@admin/admin-panel/pages/FooterEditor";
import TemplateList from "@admin/admin-panel/pages/TemplateList";
import Icon from "@m3/assets/icons/Icon";
import {getTemplates} from "@controller/TemplateController";


// async function getTemplates() {
//     'use server'
//     const res = await fetch('http://localhost:3000/api/template', {next: {tags: ['template']}})
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }



export default async function Layout({}) {
    const templates = await getTemplates();


    return (
        <>

            <div className={"border-outline-variant-light dark:border-outline-variant-dark"}>

               <TemplateList showDefaultTemplate={true} data={templates.data}/>

            </div>
        </>

    )
}