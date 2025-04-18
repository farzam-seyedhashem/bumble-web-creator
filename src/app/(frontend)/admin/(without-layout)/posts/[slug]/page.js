import PostEdit from "@admin/admin-panel/post/PostEdit";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getPostBySlug} from '@controller/PostController'
import {getPostTags} from '@controller/PostTagController'
export default async function EditPostPage({params}) {
	const tags = await getPostTags()
	const siteSetting = JSON.parse(await getSiteSetting())
	const post = JSON.stringify(await getPostBySlug(params.slug))
	return (
		<div>
			<PostEdit post={JSON.parse(post)} siteSetting={siteSetting} tags={tags}/>
		</div>
	)
}