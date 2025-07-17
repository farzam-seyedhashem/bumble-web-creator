'use client'
import WebComponentGenerator from "@website/WebComponentGenerator";
import {StyleToClass} from "@/_helper/StyleToClass";
import Image from 'next/image'


export default  function Container({siteSetting,item, post}) {

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

			<div id={item.uniqueId+"c"} className={`relative ${item.uniqueId} overflow-hidden h-fit`}>
				{/*{console.log("mmmm",item)}*/}
				{item?.backgroundImageURL && <Image layout={"fill"} objectFit={item.backgroundImageStyle}
				                                    src={process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL + item.backgroundImageURL}
				                                    alt={item.alt}/>}
				{/*<div className={""}></div>*/}
				{item.imageOverlay &&
					<div style={{backgroundColor: item.imageOverlayColor}} className={"absolute inset-0"}/>}

				{/*"imageOverlay": false,*/}
				{/*"imageOverlayColor": "#000",*/}
				<div className={`${item.uniqueId}-content ${item.isBox ? "w-full " : "container mx-auto"} z-[100]`}>
					{item?.addedItems.map((l, i) =>
						<WebComponentGenerator siteSetting={siteSetting} post={post? post : {}}  key={item.uniqueId+i+"cont"} item={l}/>
					)}
				</div>

			</div>

		</>
	)
}