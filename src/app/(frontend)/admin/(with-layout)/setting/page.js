'use strict';
import React from "react";
// import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import PageList from "@admin/admin-panel/pages/PageList";
// import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import Link from "next/link";
import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import Icon from "@m3/assets/icons/Icon";
import Appearance from "@admin/admin-panel/settings/Appearance";
import WebsiteSetting from "@admin/admin-panel/settings/WebsiteSetting";
import SEOSetting from "@admin/admin-panel/settings/SEOSetting";
import WebsiteInfo from "@admin/admin-panel/settings/WebsiteInfo";
import FontSetting from "@admin/admin-panel/settings/FontSetting";

export default async function Page({params}) {
    const {slug} = params
    const selectedTab = slug

    // console.log(typeof data)
    // const tabs = [
    //     {
    //         icon: "monitoring",
    //         id: "seo",
    //         title: "SEO",
    //         link: "/admin/setting/seo",
    //         description: "Edit or Add Pages"
    //     },
    //     {
    //         icon: "palette",
    //         title: "Appearance",
    //         id: "appearance",
    //         link: "/admin/setting/appearance",
    //         description: "Edit or Add Pages"
    //     },
    //     {
    //         icon: "person",
    //         title: "Users",
    //         id: "users",
    //         link: "/admin/setting/users",
    //         description: "Edit or Add Pages"
    //     },
    //     {
    //         icon: "web",
    //         title: "Website",
    //         id: "website",
    //         link: "/admin/setting/website",
    //         description: "Edit Inventory Card and Pages Styles"
    //     },
    //
    // ]

    return (
        <>

            <div className={"h-full"}>

            </div>
        </>

    )
}