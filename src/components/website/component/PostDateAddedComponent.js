


export default function PostDateAddedComponent({
	                                post,
	                                  item,

                                  }) {

	return (
		<div className={`relative ${item.uniqueId}`}>
			{post.createdAt}

		</div>
	)
}