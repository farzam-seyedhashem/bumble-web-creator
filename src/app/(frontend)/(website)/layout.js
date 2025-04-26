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
    const color = siteSetting.color
    const desktopColors = JSON.parse(menuSetting).desktopMenuColors

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
            <style>
                {`
                .appbarStyle {
                   background:${color[desktopColors.backgroundColor] ? rgbaObjToRgba(color[desktopColors.backgroundColor]) : desktopColors.backgroundColor}
                }
                .selectedStyleItem{
                color:${color[desktopColors.selectedItemColor] ? rgbaObjToRgba(color[desktopColors.selectedItemColor]) : desktopColors.selectedItemColor}
                }
                .unSelectedStyleItem{
               
                color:${color[desktopColors.itemColor] ? rgbaObjToRgba(color[desktopColors.itemColor]) : desktopColors.itemColor}
                }
                .searchbar-primary-icon{
                color:${color[desktopColors.searchBarPrimaryIconColor] ? rgbaObjToRgba(color[desktopColors.searchBarPrimaryIconColor]) : desktopColors.searchBarPrimaryIconColor}
                
                }
                .searchbar{
             
                 color:${color[desktopColors.searchBarInputColor] ? rgbaObjToRgba(color[desktopColors.searchBarInputColor]) : desktopColors.searchBarInputColor};
                 background:${color[desktopColors.searchBarBackground] ? rgbaObjToRgba(color[desktopColors.searchBarBackground]) : desktopColors.searchBarBackground}
               }
            
               .searchbar::placeholder{
             
                 color:${color[desktopColors.searchBarPlaceholderColor] ? rgbaObjToRgba(color[desktopColors.searchBarPlaceholderColor]) : desktopColors.searchBarPlaceholderColor};
               }
                `}
            </style>
            <div className={" page-style min-h-screen"}>

                <WebsiteDesktopMenu menuSetting={JSON.parse(menuSetting)} siteSetting={siteSetting}/>

                {/*    <WebsiteMobileMenu menuSetting={menuSetting} siteSetting={siteSetting}/>*/}
                <div className={"min-h-screen md:pt-[64px] md:pb-0 pb-[80px] pt-[64px]"}>
                    {children}
                </div>
                <WebsiteFooter footerSetting={JSON.stringify(footerSetting)} siteSetting={siteSetting}/>

            </div>
        </>
    )
}