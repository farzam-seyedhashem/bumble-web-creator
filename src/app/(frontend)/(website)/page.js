import {StyleToClass} from "@frontend/_helper/StyleToClass";
import WebComponentGenerator from "@website/WebComponentGenerator";
import React from "react";
import {revalidateTag} from "next/cache";
import {notFound} from "next/navigation";
async function getData() {
	'use server'
	revalidateTag("page")
	const res = await fetch(`http://localhost:3000/api/page/home`, {next: {tags: ['pages']}})
	if (!res.ok) {
		if (res.status === 404) {
			notFound()
		}
		throw new Error('Failed to fetch data')
	}
	// return res.json()
	return res.json()
}
export default async function Page() {
	const data = await getData()

	return (
		<div>
			<style>
				{`
                   ${data.content!==null && JSON.parse(data.content).map((item, index) => {
					if (item.idType === "title" || item.idType === "image" || item.idType === "paragraph" || item.idType === "button") {
						const mobileStyles = item.mobileStyles
						const desktopStyles = item.desktopStyles
						const globalStyles = item.globalStyles
						const mc = StyleToClass(desktopStyles, true, item.uniqueId)
						const dc = StyleToClass(mobileStyles, false, item.uniqueId)
						const gc = StyleToClass(globalStyles, false, item.uniqueId)
						return gc + dc + mc
					}
				}).join("")}
                `}
			</style>
			{data.content!==null && JSON.parse(data.content).map((item, index) =>
				<WebComponentGenerator key={index} item={item}/>
			)}
		</div>
	)
}