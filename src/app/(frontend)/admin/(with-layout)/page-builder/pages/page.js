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

async function getData(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/page', {cache:"no-store"})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()

}




export default async function Layout({params}) {
    const {slug} = params
    const selectedTab = slug
    const data = await getData(slug);


    return (
        <>

            <div className={" border-outline-variant-light dark:border-outline-variant-dark"}>

                <TemplateList showDefaultPages={true} data={data.data}/>

            </div>
        </>

    )
}