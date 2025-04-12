'use strict';
import WebComponentGenerator from "@website/WebComponentGenerator";
import React from "react";
import {StyleToClass} from "@/_helper/StyleToClass";
import {getPageBySlug} from "@controller/PageController";
import {notFound} from "next/navigation";

// async function getData(slug) {
//     'use server'
//     revalidateTag("page")
//     const res = await fetch(`http://localhost:3000/api/page/${slug}`, {next: {tags: ['pages']}})
//     if (!res.ok) {
//         if (res.status === 404) {
//             notFound()
//         }
//         throw new Error('Failed to fetch data')
//     }
//     // return res.json()
//     return res.json()
// }

export default async function Page({params}) {
    const slug = params.slug
    const data = await getPageBySlug(slug)
    if (data===null){
        notFound()
    }
    // const Style = await import(`@/app/(styles)/${slug}.module.css`)

    return (
        <div>

            <style>
                {`
              
                   ${JSON.parse(data.content).map((item, index) => {
                    if (item.styles) {
                        const mobileStyles = item.styles.mobile
                        const desktopStyles = item.styles.desktop
                        const globalStyles = item.styles.global
                        const mc = StyleToClass(desktopStyles,true,item.uniqueId)
                        const dc = StyleToClass(mobileStyles,false,item.uniqueId)
                        const gc = StyleToClass(globalStyles,false,item.uniqueId)
                       return gc+dc+mc
                    }
                }).join("")}
                `}
            </style>
            {JSON.parse(data.content).map((item, index) =>
                <WebComponentGenerator key={index} item={item}/>
            )}
        </div>
    )
}