import Button from "@m3/buttons/Button";
import React from "react";
import StoryUploader from "@admin/admin-panel/StoryUploader";
import {getSiteSetting} from "@controller/SiteSettingController";

export default async function StoryPage() {
	const siteSetting = JSON.parse(await getSiteSetting())
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