import Image from "next/image";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";
import TruncText from "@/_helper/TruncText";
import {FileUploadStorageURL} from "@/config";
import Link from "next/link";

const {convert} = require('html-to-text');
export default function PostCard({postCard, item}) {
	const Component = postCard.postTitleType
	console.log(FileUploadStorageURL + item.thumbnail.name)
	return (
		<>
			<div className={`blog-card`}>
				{!postCard.imageCenter && <div
					className={"image-container aspect-w-16 aspect-h-8 overflow-hidden relative"}>
					<Image alt={""} objectFit={"cover"} layout={"fill"}
					       src={item.thumbnail ? FileUploadStorageURL + item.thumbnail.name : ""}/>
				</div>}
				<Link href={"/post/" + item.slug}>
					<Component
						className={"text-title-large font-bold mt-4 post-title"}>
						{item ? item.title : "Post Title"}
					</Component>
				</Link>
				{postCard.imageCenter &&
					<div className={"image-container aspect-w-16 aspect-h-8 overflow-hidden relative"}>
						<Image alt={""} objectFit={"cover"} layout={"fill"}
						       src={item ? item.thumbnail ? "" : "/bg.webp" : "/bg.webp"}/>
					</div>}
				{!postCard.withoutDescription && <p className={"post-description text-body-large flex-grow"}>
					<TruncText charNumber={250}>
						{item?.content ? convert(item.content) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi"}
					</TruncText>
				</p>}
				<Link href={"/post/" + item.slug}>
					{postCard.showMoreButton && postCard.buttonType === "text" ?
						<a
							className={"post-link flex items-center"}>
							{postCard.showMoreButtonText}
							<Icon>
								{postCard.showMoreButtonIcon}
							</Icon>
						</a> :
						<button className={"post-button text-label-large rounded-full px-6 h-[40px] flex items-center"}>
							{postCard.showMoreButtonText}
							<Icon size={20} className={"ml-2 text-[20px]"}>
								{postCard.showMoreButtonIcon}
							</Icon>
						</button>}
				</Link>


			</div>
		</>
	)
}