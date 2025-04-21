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

    // const Style = await import(`@/app/(styles)/${slug}.module.css`)

    return (
        <div>

            <style>
                {`
              
                  ${JSON.parse(data.content).map((item, index) => {
                    let desktopStyles = []
                    let mobileStyles = []
                    let mobileAlignItems="flex-start"
                    let mobileJustifyContent="flex-start"
                    let mobileDisplay="block"
                    let desktopAlignItems="flex-start"
                    let desktopJustifyContent="flex-start"
                    let desktopDisplay="block"
                    if (item.styles) {
                        if (item.styles?.mobile?.display) {
                            const {
                                display: mobileDisplayx,
                                alignItems: mobileAlignItemsx,
                                justifyContent: mobileJustifyContentx,
                                ...other
                            } = item.styles.mobile
                            mobileAlignItems = mobileAlignItemsx;
                            mobileJustifyContent = mobileJustifyContentx;
                            mobileDisplay = mobileDisplayx;
                            mobileStyles = other
                        }else{

                            mobileStyles = item.styles.mobile
                        }
                        if (item.styles.desktop?.display) {
                            const {
                                display: desktopDisplayx,
                                alignItems: desktopAlignItemsx,
                                justifyContent: desktopJustifyContentx,
                                ...other
                            } = item.styles.desktop
                            desktopStyles=other
                            desktopAlignItems = desktopAlignItemsx;
                            desktopJustifyContent = desktopJustifyContentx;
                            desktopDisplay = desktopDisplayx;
                        }else{
                            desktopStyles = item.styles.desktop
                        }

                        // const mobileStyles = item.styles.mobile
                        // const desktopStyles = item.styles.desktop
                        const globalStyles = item.styles.global
                        const mc = StyleToClass(desktopStyles, true, item.uniqueId)
                        const dc = StyleToClass(mobileStyles, false, item.uniqueId)
                        const gc = StyleToClass(globalStyles, false, item.uniqueId)
                        return gc + dc + mc + `.${item.uniqueId}-content{
				align-items:${mobileAlignItems};
				justify-content:${mobileJustifyContent};
				display:${mobileDisplay};
				}
				@media only screen and (min-width: 840px) {
				.${item.uniqueId}-content{
				align-items:${desktopAlignItems};
				justify-content:${desktopJustifyContent};
				display:${desktopDisplay};
				}
				}`
                    }
                }).join("")}
				
                `}
            </style>
            {JSON.parse(data.content).map((item, index) =>
                <WebComponentGenerator slug={'mmmm'} key={index} item={item}/>
            )}
        </div>
    )
}