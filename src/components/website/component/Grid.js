'use server'
import React from 'react'
import WebComponentGenerator from "@website//WebComponentGenerator";
import {StyleToClass} from "@frontend/_helper/StyleToClass";

function Column({columnSizeDesktop, columnSizeMobile, item, Style}) {

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
					<WebComponentGenerator Style={Style} key={i} item={l}/>
				)}

			</div>
		</>
	)
}

function Grid({item, Style}) {
	const baseClass = `grid grid-cols-12 justify-end w-full`
	return (
		<div style={{justifyContent: "end",}} className={baseClass}>
			{item.addedItems.map((m, i) =>
				<Column Style={Style} columnSizeDesktop={item.columnSizeDesktop[i]}
				        columnSizeMobile={item.columnSizeMobile[i]} id={item.uniqueId} key={item.uniqueId + i + "-grid"}
				        idNumber={i}
				        item={m}/>
			)}
		</div>
	)
}

export default Grid