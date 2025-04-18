import Image from "next/image";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";
import TruncText from "@/_helper/TruncText";
const { convert } = require('html-to-text');
export default function PostCard({postCard, item}) {
	let [Component, setComponent] = useState(postCard?.postTitleType)

	return (
		<>
			<div style={{
				backgroundColor: postCard.backgroundColor,
				padding: postCard.padding.join("px ") + "px",
				borderRadius: postCard.cardBorderRadius + "px",
				height:"100%"
			}} className="">
				{!postCard.imageCenter && <div style={{borderRadius: postCard.imageBorderRadius.join("px ") + "px"}}
				                               className={"aspect-w-16 aspect-h-8 overflow-hidden relative"}>
					<Image alt={""} objectFit={"cover"} layout={"fill"}
					       src={item ? item.thumbnail ? "" : "/bg.webp" : "/bg.webp"}/>
				</div>}
				<Component style={{color: postCard.titleTextColor, margin: postCard.titleMargin.join("px ") + "px"}}
				           className={"text-title-large font-bold mt-4"}>
					{item ? item.title : "Post Title"}
				</Component>
				{postCard.imageCenter && <div style={{
					borderRadius: postCard.imageBorderRadius.join("px ") + "px",
					margin: postCard.imageMargin.join("px ") + "px"
				}} className={"aspect-w-16 aspect-h-8 overflow-hidden relative"}>
					<Image alt={""} objectFit={"cover"} layout={"fill"}
					       src={item ? item.thumbnail ? "" : "/bg.webp" : "/bg.webp"}/>
				</div>}
				{!postCard.withoutDescription && <p style={{
					color: postCard.descriptionTextColor,
					margin: postCard.descriptionMargin.join("px ") + "px"
				}} className={"text-body-large flex-grow"}>
					<TruncText charNumber={250}>
						{item?.content ? convert(item.content) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi"}
					</TruncText>
				</p>}
				{postCard.showMoreButton && postCard.buttonType === "text" ?
					<a style={{color: postCard.buttonTextColor, margin: postCard.buttonMargin.join("px ") + "px"}}
					   className={"flex items-center"}>
						{postCard.showMoreButtonText}
						<Icon>
							{postCard.showMoreButtonIcon}
						</Icon>
					</a> : <button style={{
						color: postCard.buttonTextColor,
						backgroundColor: postCard.buttonBackgroundColor,
						margin: postCard.buttonMargin.join("px ") + "px"
					}} className={"text-label-large rounded-full px-6 h-[40px] flex items-center"}>
						{postCard.showMoreButtonText}
						<Icon size={20} className={"ml-2 text-[20px]"}>
							{postCard.showMoreButtonIcon}
						</Icon>
					</button>}


			</div>
		</>
	)
}