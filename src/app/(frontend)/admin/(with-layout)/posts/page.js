
import {getPosts} from '@controller/PostController'
import PostList from "@admin/admin-panel/post/PostList";
export default async function PostPage() {
	const data = JSON.stringify(await getPosts())
	return (
		<PostList data={JSON.parse(data)}/>
	)
}