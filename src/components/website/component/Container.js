'use server'
import WebComponentGenerator from "@website/WebComponentGenerator";
import {StyleToClass} from "@/_helper/StyleToClass";
import Image from 'next/image'
import {FileUploadStorageURL} from "@/config";

export default async function Container({item, key, Style, post}) {

	return (
		<>

			<style>
				{`
                   ${item.addedItems.map((item, index) => {
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
				alignItems:${mobileAlignItems};
				justifyContent:${mobileJustifyContent};
				display:${mobileDisplay};
				}
				@media only screen and (min-width: 840px) {
				.${item.uniqueId}-content{
				alignItems:${desktopAlignItems};
				justifyContent:${desktopJustifyContent};
				display:${desktopDisplay};
				}
				}`
					}
				}).join("")}
				
                `}
			</style>

			<div id={key} className={`relative ${item.uniqueId} overflow-hidden h-fit`}>
				{/*{console.log("mmmm",item)}*/}
				{item?.backgroundImageURL && <Image layout={"fill"} objectFit={item.backgroundImageStyle}
				                                    src={FileUploadStorageURL + item.backgroundImageURL}
				                                    alt={item.alt}/>}
				{/*<div className={""}></div>*/}
				{item.imageOverlay &&
					<div style={{backgroundColor: item.imageOverlayColor}} className={"absolute inset-0"}/>}

				{/*"imageOverlay": false,*/}
				{/*"imageOverlayColor": "#000",*/}
				<div className={`${item.uniqueId}-content ${item.isBox ? "w-full " : "container mx-auto"} z-[100]`}>
					{/*{addedItems.length!==0 && <div onClick={() => setIsSelected(true)}*/}
					{/*      className={"hidden group-hover:block absolute top-1/2 -translate-y-1/2 transform right-4 "}>*/}
					{/*    <button*/}
					{/*        className={"flex items-center h-[32px] w-[32px] justify-center rounded-full  !bg-tertiary-container-light "}>*/}
					{/*        <Icon size={16} className={"!text-on-tertiary-container-light text-[24px]"}>*/}
					{/*            edit*/}
					{/*        </Icon>*/}
					{/*    </button>*/}
					{/*</div>}*/}

					{item.addedItems.map((l, i) =>
						<WebComponentGenerator post={post ? post : {}} Style={Style} key={i} item={l}/>
					)}
				</div>

			</div>

		</>
	)
}