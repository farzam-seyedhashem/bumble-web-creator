import Icon from "@m3/assets/icons/Icon";
import Image from 'next/image'
import {FileUploadStorageURL} from "@/config";

export default function PostThumbnailComponent({
	                                               post,
	                                               item
                                               }) {


	return (
		<>
			<div className={`overflow-hidden relative ${item.uniqueId}`}>
				{post.thumbnail ?
					<Image layout={"fill"} objectFit={"cover"} className={"z-[1]"} src={FileUploadStorageURL + "/" + post.thumbnail.name}/> :
					<div

						className={"flex justify-center items-center bg-surface-variant-light dark:bg-surface-variant-dark " + item?.className}>
						<Icon
							className={"text-[48px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							image
						</Icon>
					</div>
				}
			</div>
		</>
	)
}