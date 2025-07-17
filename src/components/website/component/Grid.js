
import React from 'react'
import WebComponentGenerator from "@website//WebComponentGenerator";
import {StyleToClass} from "@/_helper/StyleToClass";

function Column({columnSizeDesktop, columnSizeMobile, item, Style,post,siteSetting}) {

	return (
		<>
			<style>
				{`
                   ${item.addedItems.map((item, index) => {
					if (item.styles) {
						const mobileStyles = item.styles.mobile
						const desktopStyles = item.styles.desktop
						const globalStyles = item.styles.global
						const mc = StyleToClass(desktopStyles, true, item.uniqueId)
						const dc = StyleToClass(mobileStyles, false, item.uniqueId)
						const gc = StyleToClass(globalStyles, false, item.uniqueId)
						return gc + dc + mc
					}
				}).join("")}
                `}
			</style>
			<div key={item.uniqueId + "-gridm"}
			     className={`${item.uniqueId} z-[100] md:col-span-${columnSizeDesktop} col-span-${columnSizeMobile}`}>
				{item.addedItems.map((l, i) =>
					<WebComponentGenerator siteSetting={siteSetting} post={post || {}} Style={Style} key={i} item={l}/>
				)}

			</div>
		</>
	)
}

function Grid({item, Style,post,siteSetting}) {
	// const baseClass = `  w-full`
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
			<div style={{alignItems: item.styles.alignItems, gap: item.gapDesktop + "px"}} className={`${"grid grid-cols-12 w-full"} ${item.uniqueId}`}>
				{item.addedItems.map((m, i) =>
					(i!==item.addedItems.length - 1) && <Column siteSetting={siteSetting} post={post||{}} Style={Style} columnSizeDesktop={item.columnSizeDesktop[i]}
					        columnSizeMobile={item.columnSizeMobile[i]} id={item.uniqueId}
					        key={item.uniqueId + i + "-grid"}
					        idNumber={i}
					        item={m}/>
				)}
			</div>
		</>
	)
}

export default Grid