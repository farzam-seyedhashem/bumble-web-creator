import PostListPageEditor from "@admin/admin-panel/pages/PostListPageEditor";
import {getSiteSetting} from "@controller/SiteSettingController";


// async function getPostListPage(slug) {
// 	'use server'
// 	const res = await fetch('http://localhost:3000/api/post-list-page', {next: {tags: ['inventory-page']}})
// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data')
// 	}
// 	return res.json()
// }

export default async function page(props) {
	// const siteSetting = await getSiteSetting()
	// const postListPage = await getPostListPage();
	return (
		<div>
			{/*<PostListPageEditor siteSetting={siteSetting} postListPage={postListPage}/>*/}
		</div>
	)
}