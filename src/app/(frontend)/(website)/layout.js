// import DesktopMenu from "@website/DesktopMenu";
import MobileMenu from "@admin/admin-panel/menu/Mobile";
import {revalidateTag} from "next/cache";
import {notFound} from "next/navigation";
import Icon from "@m3/assets/icons/Icon";
import IconButton from "@m3/icon_buttons/IconButton";
import WebsiteDesktopMenu from "@website/menu/WebsiteDesktopMenu";
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
import WebsiteMobileMenu from "@website/menu/WebsiteMobileMenu";
import WebsiteFooter from "@website/WebsiteFooter";
async function getSiteSetting(slug) {
    'use server'
    revalidateTag("page")
    const res = await fetch(`http://localhost:3000/api/site-setting`, {next: {tags: ['site-setting']}})
    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }
        throw new Error('Failed to fetch data')
    }
    // return res.json()
    return res.json()
}
async function getMenuSetting(slug) {
    'use server'
    revalidateTag("page")
    const res = await fetch(`http://localhost:3000/api/menu`, {next: {tags: ['menu']}})
    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }
        throw new Error('Failed to fetch data')
    }
    // return res.json()
    return res.json()
}
async function getFooterSetting(slug) {
    'use server'
    revalidateTag("page")
    const res = await fetch(`http://localhost:3000/api/footer`, {next: {tags: ['footer']}})
    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }
        throw new Error('Failed to fetch data')
    }
    // return res.json()
    return res.json()
}
export default async function layout({children}) {
    const siteSetting = await getSiteSetting()
    const menuSetting = await getMenuSetting()
    const footerSetting = await getFooterSetting()
    return (
        <>
            <style>
                {`
                .page-style{
                background:${rgbaObjToRgba(siteSetting.color.background)};
                }
                `}
            </style>
        <div className={" page-style min-h-screen"}>

            <WebsiteDesktopMenu menuSetting={menuSetting} siteSetting={siteSetting}/>

            <WebsiteMobileMenu menuSetting={menuSetting} siteSetting={siteSetting}/>
            <div className={"min-h-screen md:pt-[64px] md:pb-0 pb-[80px] pt-[64px]"}>
                {children}
            </div>
            <WebsiteFooter footerSetting={footerSetting} siteSetting={siteSetting}/>

        </div>
        </>
    )
}