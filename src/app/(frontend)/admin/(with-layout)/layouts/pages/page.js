'use strict';
import React from "react";
// import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import PageList from "@admin/admin-panel/pages/PageList";
// import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import Link from "next/link";
import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import {getPageBySlug, getPages} from "@controller/PageController";
import PostEditor from "@admin/admin-panel/pages/PostEditor";
import FooterEditor from "@admin/admin-panel/pages/FooterEditor";
import TemplateList from "@admin/admin-panel/pages/TemplateList";
import Icon from "@m3/assets/icons/Icon";



export default async function Layout({params}) {
    // const {slug} = params
    // const selectedTab = slug
    const data = await getPages();


    return (
        <>

            <div className={" border-outline-variant-light dark:border-outline-variant-dark"}>

                <TemplateList showDefaultPages={true} data={data.data}/>

            </div>
        </>

    )
}