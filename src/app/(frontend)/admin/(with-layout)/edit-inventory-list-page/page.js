'use strict';
import React from "react";
import {getSiteSetting} from "@controller/SiteSettingController";


// async function getInventoryPage(slug) {
// 	'use server'
// 	const res = await fetch('http://localhost:3000/api/inventory-page', {next: {tags: ['inventory-page']}})
// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data')
// 	}
// 	return res.json()
// }

export default async function Page({params}) {
	const {slug} = params
	// const selectedTab = slug
	// const data = await getData(slug);
	const siteSetting = JSON.parse(await getSiteSetting())
	// const templates = await getTemplates();
	// const menuSetting = await getMenu();
	// const inventoryPage = await getInventoryPage();
	// const footer = await getFooter();
	const tabs = [
		{
			icon: "menu",
			title: "Menu",
			id: "menu",
			link: "/admin/header-footer/menu",
			description: "Edit or Add Pages"
		},
		{
			icon: "footer",
			title: "Footer",
			id: "footer",
			link: "/admin/header-footer/footer",
			description: "Edit or Add Pages"
		},
		// {
		//     icon: "Inventory",
		//     title: "Inventory",
		//     id: "inventory",
		//     link: "/admin/pages/inventory",
		//     description: "Edit Inventory Card and Pages Styles"
		// },
		// {
		//     icon: "post",
		//     title: "Post",
		//     id: "post",
		//     link: "/admin/pages/post",
		//     description: "Edit Blog Card and Pages Styles"
		// },

	]

	return (
		<>

			<div className={"min-h-screen border-l border-outline-variant-light dark:border-outline-variant-dark"}>
				<div className={"border-b border-outline-light container mx-auto pt-6 pb-2 "}>
					<h1 className={"text-display-small text-on-surface-light dark:text-on-surface-dark font-black"}>
						Header & Footer
					</h1>
				</div>
			</div>
		</>

	)
}