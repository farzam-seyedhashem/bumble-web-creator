

export default async function PostTitle({post, item}) {
	const Component = item.type
	console.log('ffff',post)
	return (

			<Component id={item.uniqueId} className={`${item.uniqueId}`}>
				{post.title}
			</Component>

	)
}