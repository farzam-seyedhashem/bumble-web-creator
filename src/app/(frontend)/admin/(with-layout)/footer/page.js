'use strict';
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
import {getSiteSetting} from "@controller/SiteSettingController";
import {getFooter} from "@controller/FooterController";
// async function getFooter(slug) {
//     'use server'
//     const res = await fetch('http://localhost:3000/api/footer', {next: {tags: ['footer']}})
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }
export default async function Page() {
    // const siteSetting = await getSiteSettingData();
    const siteSetting = JSON.parse(await getSiteSetting())

    const footer = await getFooter();

    return (
        <>

            <div className={"min-h-screen border-l border-outline-variant-light dark:border-outline-variant-dark"}>

                {/*<FooterEditor footerSetting={footer} siteSetting={siteSetting}/>*/}

            </div>
        </>

    )
}