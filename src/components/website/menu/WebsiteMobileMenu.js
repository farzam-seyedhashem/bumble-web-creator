'use client'
import Icon from "@m3/assets/icons/Icon";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import Image from "next/image";

import Link from "next/link";
import {useState} from "react";

export default function WebsiteMobileMenu({siteSetting, menuSetting}) {
	const {color} = siteSetting;
	const mobileColor = menuSetting.mobileMenuColors
	const [open, setOpen] = useState(false);
	return (
		<div className="md:hidden block">

			<style>
				{`
                .searchbar-mobile {
                   background:${color[mobileColor?.searchBarBackground] ? rgbaObjToRgba(color[mobileColor?.searchBarBackground]) : mobileColor.searchBarBackground}
                }
                .searchbar-primary-icon{
                    color:${color[mobileColor?.searchBarPrimaryIconColor] ? rgbaObjToRgba(color[mobileColor?.searchBarPrimaryIconColor]) : mobileColor.searchBarPrimaryIconColor}
                }
              .searchbar-input{
                    color:${color[mobileColor?.searchBarInputColor] ? rgbaObjToRgba(color[mobileColor?.searchBarInputColor]) : mobileColor.searchBarInputColor}
                }
                .searchbar-input::placeholder{
                    color:${color[mobileColor?.searchBarPlaceholderColor] ? rgbaObjToRgba(color[mobileColor?.searchBarPlaceholderColor]) : mobileColor.searchBarPlaceholderColor}
                }
                .searchbar-icon{
                    color:${color[mobileColor?.searchBarIconColor] ? rgbaObjToRgba(color[mobileColor.searchBarIconColor]) : mobileColor.searchBarIconColor}
                }
               .mobile-top-appbar{
                  background:${color[mobileColor.topAppbarBackground] ? rgbaObjToRgba(color[mobileColor.topAppbarBackground]) : mobileColor.topAppbarBackground}
               }
               .mobile-top-appbar .appbar-primary-icon{
                    color:${color[mobileColor.topAppbarTextColor] ? rgbaObjToRgba(color[mobileColor.topAppbarTextColor]) : mobileColor.topAppbarTextColor}
               }
               .mobile-top-appbar .appbar-icon{
                    color:${color[mobileColor.topAppbarVariantTextColor] ? rgbaObjToRgba(color[mobileColor.topAppbarVariantTextColor]) : mobileColor.topAppbarVariantTextColor}
               }
               .mobile-bottom-navigation{
                  background:${color[mobileColor.bottomSheetBackground] ? rgbaObjToRgba(color[mobileColor.bottomSheetBackground]) : mobileColor.bottomSheetBackground}
               }
                .selected-bottom-navigation-item .selected-item-icon-container{
                  background:${color[mobileColor.bottomSheetSelectBackground] ? rgbaObjToRgba(color[mobileColor.bottomSheetSelectBackground]) : mobileColor.bottomSheetSelectBackground};
                  color:${color[mobileColor.bottomSheetSelectIconColor] ? rgbaObjToRgba(color[mobileColor.bottomSheetSelectIconColor]) : mobileColor.bottomSheetSelectIconColor}
               }
               .selected-item-label .selected-item-icon-container{
                  color:${color[mobileColor.bottomSheetSelectIconColor] ? rgbaObjToRgba(color[mobileColor.bottomSheetSelectIconColor]) : mobileColor.bottomSheetSelectIconColor}
               }
               .un-selected-bottom-navigation-item{
                  color:${color[mobileColor.bottomSheetUnSelectColor] ? rgbaObjToRgba(color[mobileColor.bottomSheetUnSelectColor]) : mobileColor.bottomSheetUnSelectColor}
               }
                `}
			</style>
			{open&&<div onClick={()=>setOpen(false)} className={"z-[100001] inset-0 fixed bg-black/[20%]"}>
				<div className={"w-[300px] h-full bg-surface-container-light dark:bg-surface-container-dark"}>
					{/*{menuSetting.menuItems.mobileAppbar.map((item, index) =>*/}
					{/*	<Link key={index} href={"/" + item.slug}>*/}
					{/*		<div className={"h-[56px] px-4 flex items-center"}>*/}
					{/*			{item.title}*/}
					{/*		</div>*/}
					{/*	</Link>*/}
					{/*)}*/}

				</div>
			</div>}
			{menuSetting.showSearchBarFull ?
				<div className={"z-[1001] fixed px-2 top-2 left-0 w-full"}>
					<div
						className={"searchbar-mobile  flex relative h-[56px] rounded-full"}>
						{!menuSetting.showDrawer ?
							<Icon
								className={"searchbar-primary-icon left-4 absolute top-1/2 transform -translate-y-1/2"}>
								search
							</Icon> :
							<Icon
								className={"searchbar-primary-icon left-4 absolute top-1/2 transform -translate-y-1/2 text-on-surface-light dark:text-on-surface-dark"}>
								menu
							</Icon>}
						<input
							placeholder={"search"}
							className={"searchbar-input pl-14 text-body-large text-on-surface-light dark:text-on-surface-dark appearance-none h-full w-full border-0 bg-transparent"}/>

						{menuSetting.showDrawer &&
							<Icon
								className={"searchbar-icon right-4 absolute top-1/2 transform -translate-y-1/2 !text-on-surface-variant-light dark:!text-on-surface-variant-dark"}>
								search
							</Icon>}
					</div>
				</div> : <div
					className={"z-[1001] fixed w-full top-0 left-0 px-4 flex items-center h-[64px] mobile-top-appbar"}>
					{menuSetting.showDrawer &&
						<Icon onClick={()=>setOpen(true)}
							className={"left-4 mr-6 appbar-primary-icon"}>
							menu
						</Icon>}
					<div className={" h-[40px] w-[80px] relative"}>
						{siteSetting?.logo?.name && <Image  alt={"logo"} layout={"fill"} objectFit={"contain"}
						                                   src={process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL + siteSetting.logo.name}/>}

						{/*<div className={"h-[24px] relative "}>*/}
						{/*    <Image quality={100} width={120} height={24} objectFit={"contain"}  src={process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL+siteSetting.logo.name} alt={"logo"}/>*/}

						{/*</div>*/}
					</div>
					{/*<Icon*/}
					{/*      className={"appbar-icon  !text-on-surface-variant-light dark:!text-on-surface-variant-dark"}>*/}
					{/*    search*/}
					{/*</Icon>*/}
				</div>}
			<div style={{background: rgbaObjToRgba(color.surface)}} className={"h-full"}>
			</div>
			{/*{menuSetting.showBottomSheet &&*/}
			{/*	<div*/}
			{/*		className={" z-[1001] mobile-bottom-navigation px-2 fixed bottom-0 left-0 space-x-2 h-[80px] w-full flex "}>*/}
			{/*		<button className={"selected-bottom-navigation-item pt-3 pb-4 w-full"}>*/}
			{/*			<div*/}
			{/*				className={"selected-item-icon-container mx-auto rounded-full h-[32px] w-[64px] flex items-center justify-center mb-1"}>*/}
			{/*				<Icon fill={1}>*/}
			{/*					home*/}
			{/*				</Icon>*/}
			{/*			</div>*/}
			{/*			<label*/}
			{/*				className={"selected-item-label text-label-medium font-medium text-center"}>*/}
			{/*				Label*/}
			{/*			</label>*/}
			{/*		</button>*/}
			{/*		<button className={"un-selected-bottom-navigation-item w-full"}>*/}
			{/*			<div*/}
			{/*				className={" mx-auto rounded-full h-[32px] w-[64px] flex items-center justify-center mb-1"}>*/}
			{/*				<Icon fill={0}>*/}
			{/*					post*/}
			{/*				</Icon>*/}
			{/*			</div>*/}
			{/*			<label*/}
			{/*				className={"text-center text-label-medium font-medium "}>*/}
			{/*				Label*/}
			{/*			</label>*/}
			{/*		</button>*/}
			{/*	</div>}*/}
		</div>
	)
}