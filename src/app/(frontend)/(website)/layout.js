import WebsiteDesktopMenu from "@website/menu/WebsiteDesktopMenu";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import WebsiteMobileMenu from "@website/menu/WebsiteMobileMenu";
import WebsiteFooter from "@website/WebsiteFooter";
import {getMenu} from "@controller/MenuController";
import {getFooter} from "@controller/FooterController";
import {getSiteSetting} from "@controller/SiteSettingController";



export default async function layout({children}) {
    const siteSetting = JSON.parse(await getSiteSetting());
    const menuSetting = JSON.stringify(await getMenu())
    const footerSetting = await getFooter()
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

            {/*<WebsiteDesktopMenu menuSetting={JSON.parse(menuSetting)} siteSetting={siteSetting}/>*/}

        {/*    <WebsiteMobileMenu menuSetting={menuSetting} siteSetting={siteSetting}/>*/}
            <div className={"min-h-screen md:pt-[64px] md:pb-0 pb-[80px] pt-[64px]"}>
                {children}
            </div>
            <WebsiteFooter footerSetting={JSON.stringify(footerSetting)} siteSetting={siteSetting}/>

        </div>
        </>
    )
}