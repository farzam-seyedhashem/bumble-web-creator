'use strict';
import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getMenu} from "@controller/MenuController";
import {getPages} from "@controller/PageController";
// async function getData(slug) {
// 	'use server'
// 	const res = await fetch('http://localhost:3000/api/page', {next: {tags: ['pages']}})
// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data')
// 	}
// 	return res.json()
//
//
// }
// async function getMenu() {
// 	'use server'
// 	const res = await fetch('http://localhost:3000/api/menu', {next: {tags: ['menu']}})
// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data')
// 	}
// 	return res.json()
// }
export default async function Page() {
	const data = await getPages();
	const siteSetting = JSON.parse(await getSiteSetting())
	const menuSetting = await getMenu();

	return (
		<>

			<div className={" border-l border-outline-variant-light dark:border-outline-variant-dark"}>
				<MenuEditor menuSetting={menuSetting} data={data} siteSetting={siteSetting}/>
			</div>
		</>

	)
}