import Button from "@m3/buttons/Button";
import React from "react";
import StoryUploader from "@admin/admin-panel/StoryUploader";
async function getSiteSettingData() {
	'use server'
	const res = await fetch(`http://localhost:3000/api/site-setting`)
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
export default async function StoryPage() {
	const siteSetting = await getSiteSettingData()
	return (
		<div>
			<div className={"flex items-center justify-between"}>
				<h1 className={"text-display-medium font-black"}>
					List of Stories
				</h1>
				<Button icon={"add"} type={"filled"}>
					Add New Story
				</Button>
			</div>
			<StoryUploader siteSetting={siteSetting}/>
		</div>
	)
}