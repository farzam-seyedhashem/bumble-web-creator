import PostEdit from "@admin/admin-panel/post/PostEdit";
async function getTags(slug) {
	'use server'
	const res = await fetch(`http://localhost:3000/api/post-tags`,{ next: { tags: ['post-tags'] }})
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
async function getSiteSettingData() {
	'use server'
	const res = await fetch('http://localhost:3000/api/site-setting', {next: {tags: ['site-setting']}})
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
async function getPostData(slug) {
	'use server'
	const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {next: {tags: ['posts']}})
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
export default async function EditPostPage({params}) {
	const tags = await getTags()
	const siteSetting = await getSiteSettingData()
	const post = await getPostData(params.slug)
	return (
		<div>
			<PostEdit post={post} siteSetting={siteSetting} tags={tags}/>
		</div>
	)
}