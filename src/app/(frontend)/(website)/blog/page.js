import {StyleToClass} from "@/_helper/StyleToClass";
import WebComponentGenerator from "@website/WebComponentGenerator";
import React from "react";
import {revalidateTag} from "next/cache";
import {notFound} from "next/navigation";
import Head from "next/head";
async function getData() {
	'use server'
	revalidateTag("page")
	const res = await fetch(`http://localhost:3000/api/page/blog`, {next: {tags: ['pages']}})
	if (!res.ok) {
		if (res.status === 404) {
			notFound()
		}
		throw new Error('Failed to fetch data')
	}
	// return res.json()
	return res.json()
}
async function getPosts() {
	'use server'
	const res = await fetch(`http://localhost:3000/api/posts`, {next: {tags: ['pages']}})
	if (!res.ok) {
		if (res.status === 404) {
			notFound()
		}
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
export default async function Blog() {
	const data = await getData()
	const posts = await getPosts()

	return (
		<div>

			<style>
				{`
              
                   ${JSON.parse(data.content).map((item, index) => {
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

			{data.content !== null && JSON.parse(data.content).map((item, index) =>
				<WebComponentGenerator key={index} item={item}/>
			)}
		</div>
	)
}