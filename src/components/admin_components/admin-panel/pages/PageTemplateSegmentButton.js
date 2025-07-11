'use client'
import Icon from "@m3/assets/icons/Icon";
import React from "react";
import {usePathname} from "next/navigation";
import SegmentedButton from "@m3/segmented_buttons/SegmentedButton";

export default function PageTemplateSegmentedButton(props) {
    const pathName= usePathname()
    const items = [
        {
            title:"All",
            link:"/admin/layouts"
        },
        {
            title:"Pages",
            link:"/admin/layouts/pages"
        },
        {
            title:"Templates",
            link:"/admin/layouts/templates"
        }
    ]
    return (
       <SegmentedButton withLink selectedIndex={items.findIndex(item=>item.link===pathName)} items={items}/>
    )
}