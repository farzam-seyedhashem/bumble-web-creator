'use strict';
import React from "react";
import PostPageEditor from "@admin/admin-panel/post-page/PostPageEditor";
import {getSiteSetting} from "@controller/SiteSettingController";

// async function getPostPage(slug) {
// 	'use server'
// 	const res = await fetch('http://localhost:3000/api/post-list-page', {next: {tags: ['post-list-page']}})
// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data')
// 	}
// 	return res.json()
// }

export default async function Page({params}) {
	const {slug} = params
	const siteSetting = JSON.parse(await getSiteSetting())
	// const inventoryPage = await getPostPage(slug);



	return (
		<>

			<div className={"min-h-screen border-l border-outline-variant-light dark:border-outline-variant-dark"}>
				<PostPageEditor/>
			</div>
		</>

	)
}