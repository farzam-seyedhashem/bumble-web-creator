


export default function PostContentComponent({
	                                post,
	                                  item
                                  }) {

	return (
		<div className={`${item.uniqueId}`}>
			<div dangerouslySetInnerHTML={{__html: post?.content}}/>
		</div>
	)
}