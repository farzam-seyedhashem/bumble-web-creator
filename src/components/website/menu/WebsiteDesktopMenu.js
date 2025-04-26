'use client'
import Icon from "@m3/assets/icons/Icon";
import IconButton from "@m3/icon_buttons/IconButton";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FileUploadStorageURL} from "@/config";
import Image from 'next/image'
export default function WebsiteDesktopMenu({siteSetting, menuSetting}) {
    const {color} = siteSetting;
    const desktopColors = menuSetting.desktopMenuColors
    const pathname = usePathname()
    // console.log(desktopColors);
    // const menuSetting = {...menuSettings,["menuItemsCenter"]:true}
    return (
        <div className="md:block hidden">
            {/*<style>*/}
            {/*    {`*/}
            {/*    .appbarStyle {*/}
            {/*       background:${color[desktopColors.backgroundColor] ? rgbaObjToRgba(color[desktopColors.backgroundColor]) : desktopColors.backgroundColor}*/}
            {/*    }*/}
            {/*    .selectedStyleItem{*/}
            {/*    color:${color[desktopColors.selectedItemColor] ? rgbaObjToRgba(color[desktopColors.selectedItemColor]) : desktopColors.selectedItemColor}*/}
            {/*    }*/}
            {/*    .unSelectedStyleItem{*/}
            {/*   */}
            {/*    color:${color[desktopColors.itemColor] ? rgbaObjToRgba(color[desktopColors.itemColor]) : desktopColors.itemColor}*/}
            {/*    }*/}
            {/*    .searchbar-primary-icon{*/}
            {/*    color:${color[desktopColors.searchBarPrimaryIconColor] ? rgbaObjToRgba(color[desktopColors.searchBarPrimaryIconColor]) : desktopColors.searchBarPrimaryIconColor}*/}
            {/*    */}
            {/*    }*/}
            {/*    .searchbar{*/}
            {/* */}
            {/*     color:${color[desktopColors.searchBarInputColor] ? rgbaObjToRgba(color[desktopColors.searchBarInputColor]) : desktopColors.searchBarInputColor};*/}
            {/*     background:${color[desktopColors.searchBarBackground] ? rgbaObjToRgba(color[desktopColors.searchBarBackground]) : desktopColors.searchBarBackground}*/}
            {/*   }*/}

            {/*   .searchbar::placeholder{*/}
            {/* */}
            {/*     color:${color[desktopColors.searchBarPlaceholderColor] ? rgbaObjToRgba(color[desktopColors.searchBarPlaceholderColor]) : desktopColors.searchBarPlaceholderColor};*/}
            {/*   }*/}
            {/*    `}*/}
            {/*</style>*/}
            <div
                className={"fixed appbarStyle z-[999] w-full border-outline-variant-light dark:border-outline-variant-dark items-center px-6 flex h-[64px] "}>

                {/*{!menuSetting.logoCenter && <div*/}
                {/*    className={"mr-4 h-[40px] w-[170px] relative font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>*/}
                {/*   <Image layout={"fill"} objectFit={"contain"}  src={FileUploadStorageURL+siteSetting.logo.name}/>*/}
                {/*</div>}*/}
                {menuSetting.menuRight ? menuSetting.isSearchbarInput ?
                    <div className={`${!menuSetting.logoCenter && "ml-2"} mr-auto 400px`}>
                        <div className={"relative w-full"}>
                            <Icon
                                className={"absolute text-on-surface-light dark:text-on-surface-dark left-4 top-1/2 transform -translate-y-1/2"}>
                                search
                            </Icon>
                            <input placeholder="Search..."
                                   className={"placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark text-body-large px-[56px] border-0 h-[56px] w-full rounded-full bg-surface-container-high-light dark:bg-surface-container-high-dark"}/>
                            {/*<Icon*/}
                            {/*    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark absolute right-4 top-1/2 transform -translate-y-1/2"}>*/}
                            {/*    close*/}
                            {/*</Icon>*/}
                        </div>
                    </div> : <div className={`${!menuSetting.logoCenter && "ml-2"} mr-auto`}><IconButton>
                        search
                    </IconButton></div> : ""}
                {/*{!menuSetting.menuCenter&&<ul className={`${menuSetting.menuRight && "ml-auto"} *:px-4 *:relative *:h-full flex items-center`}>*/}
                {/*    {menuSetting.menuItems.desktopAppbar.map((item, index) =>*/}
                {/*        <Link href={item.slug === "home" ? "/" : ("/" + item.slug)} key={index}>*/}
                {/*            <li*/}
                {/*                className={`${item.slug === "home" && pathname === "/" ? "selectedStyleItem font-bold" : "/" + item.slug === pathname ? "selectedStyleItem font-bold" : "unSelectedStyleItem font-normal"}  font-bold py-2 text-primary-light dark:text-primary-dark`}>*/}
                {/*                {item.title}*/}
                {/*            </li>*/}
                {/*        </Link>*/}
                {/*    )}*/}
                {/*</ul>}*/}
                {<ul className={`${menuSetting.menuRight && "ml-auto"} *:px-4 *:relative *:h-full flex items-center absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2`}>
                    {menuSetting.menuItems.desktopAppbar.map((item, index) =>
                        <Link href={item.slug === "home" ? "/" : ("/" + item.slug)} key={index}>
                            <li
                                className={`${item.slug === "home" && pathname === "/" ? "selectedStyleItem font-bold" : "/" + item.slug === pathname ? "selectedStyleItem font-bold" : "unSelectedStyleItem font-normal"}  font-bold py-2 text-primary-light dark:text-primary-dark`}>
                                {item.title}
                            </li>
                        </Link>
                    )}
                </ul>}
                {menuSetting?.showSearchbar ? !menuSetting.menuRight ? menuSetting.isSearchbarInput ? <div className={`ml-auto 400px`}>
                    <div className={"relative w-full"}>
                        <Icon
                              className={"searchbar-primary-icon absolute left-4 top-1/2 transform -translate-y-1/2"}>
                            search
                        </Icon>
                        <input placeholder="Search..."
                               className={"searchbar searchInputD text-body-large px-[56px] border-0 h-[56px] w-full rounded-full"}/>

                        {/*<Icon*/}
                        {/*    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark absolute right-4 top-1/2 transform -translate-y-1/2"}>*/}
                        {/*    close*/}
                        {/*</Icon>*/}
                    </div>
                </div> : <div className={"ml-auto"}><IconButton>
                    search
                </IconButton></div> : "" : <div className={"ml-auto"}/>}
                <button style={{backgroundColor:`${rgbaObjToRgba(color.primary)}`,color:`${rgbaObjToRgba(color.onPrimary)}`}} className={`px-6 h-[40px] ml-2 rounded-full`}>
                    Get in touch
                </button>
                {menuSetting.logoCenter && <h1
                    className={"absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex-grow mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>
                   <div className={"relative h-[40px] w-[170px]"}>
                    <Image layout={"fill"} objectFit={"contain"}  src={FileUploadStorageURL+siteSetting.logo.name}/>
                   </div>
                </h1>}
            </div>
        </div>
    )
}