'use strict';
import React from "react";
import PostCardEditor from "@admin/admin-panel/pages/PostCardEditor";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getPostCard} from "@controller/PostCardController";


export default async function Page({params}) {
	const {slug} = params
	// const selectedTab = slug
	// const data = await getData(slug);
	const siteSetting = JSON.parse(await getSiteSetting())

	// const templates = await getTemplates();
	// const menuSetting = await getMenu();
	const postCard = await getPostCard();
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
				{/*<div className={"border-b border-outline-light container mx-auto pt-6 pb-2 "}>*/}
				{/*	<h1 className={"text-display-small text-on-surface-light dark:text-on-surface-dark font-black"}>*/}
				{/*		Header & Footer*/}
				{/*	</h1>*/}
				{/*</div>*/}
				<PostCardEditor postCardSetting={postCard} color={siteSetting?.color}/>
				{/*<PostEditor siteSetting={siteSetting}/>*/}
			</div>
		</>

	)
}