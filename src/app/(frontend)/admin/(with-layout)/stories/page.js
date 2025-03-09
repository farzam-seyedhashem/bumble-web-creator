'use client'
import FAB from "@m3/floating_action_buttons/FAB";
import Button from "@m3/buttons/Button";
import IconButton from "@m3/icon_buttons/IconButton";
import react, {useEffect, useState} from "react";
import Icon from "@m3/assets/icons/Icon";

export default function WithLayout() {
	const [storyType, setStoryType] = useState("text");
	const [showStoryUploadButton, setShowStoryUploadButton] = useState(false);
	const [storyContent, setStoryContent] = useState(null);
	const [isTextEditorOpen, setIsTextEditorOpen] = useState(true);
	// const [change, setIsTextEditorOpen] = useState(true);
	useEffect(() => {
		if (storyContent) {
			setShowStoryUploadButton(true)
		}
	}, [storyContent])
	const addTextToStoryContent = () => {
		const texts = storyContent.texts
		texts.push({
			value: "Type Text...",
			position: "0px 0px"
		})
		setStoryContent({...storyContent, "texts": texts})
	}
	const handleStoryContent = () => {

	}
	// const handle = () => {
	// 	if (storyType === "text") {
	// 		setShowStoryUploadButton(true)
	// 	}
	// }
	return (
		<div className={"px-6 py-6 dark:bg-surface-dark bg-surface-light min-h-screen"}>
			<div className={"flex items-center justify-between"}>
				<h1 className={"text-display-medium font-black"}>
					List of Stories
				</h1>
				<Button icon={"add"} type={"filled"}>
					Add New Story
				</Button>
			</div>
			<div className={"dark fixed inset-0 bg-black/[25%] flex items-center justify-center"}>
				<div style={{aspectRatio: 9 / 16}}
				     className={" relative overflow-hidden rounded-[24px] w-3/12  bg-surface-container-lowest-dark"}>
					<div>
						<Button>

						</Button>
					</div>
					<div className={"z-20 absolute flex justify-between px-2  w-full pt-4 pb-2 top-0 left-0"}>
						<IconButton>
							{showStoryUploadButton ? "arrow_back" : "close"}
						</IconButton>
						{showStoryUploadButton && <div className={"flex items-center"}>
							<IconButton onClick={addTextToStoryContent}>
								title
							</IconButton>
							<IconButton>
								filter
							</IconButton>
							<IconButton>
								gradient
							</IconButton>
							<IconButton>
								download
							</IconButton>
						</div>}
					</div>
					{isTextEditorOpen && <div
						className={"flex space-x-2 px-4 items-center absolute z-30 bottom-0 left-0 pb-4 pt-3 w-full bg-surface-container-lowest-dark"}>
						<div className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon className={"text-on-surface-variant-dark"} type={"outline"}>
									format_color_text
								</Icon>
							</div>
							<p className={"text-label-medium font-medium text-center text-on-surface-variant-dark"}>
								Color
							</p>
						</div>
						<div className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon className={"text-on-surface-variant-dark"} type={"outline"}>
									format_paint
								</Icon>
							</div>
							<p className={"text-label-medium font-medium text-center text-on-surface-variant-dark"}>
								Background Color
							</p>
						</div>
						<div className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon className={"text-on-surface-variant-dark"} type={"outline"}>
									format_size
								</Icon>
							</div>
							<p className={"text-label-medium font-medium text-center text-on-surface-variant-dark"}>
								Size
							</p>
						</div>
					</div>}
					<div className={"absolute inset-0 z-10 flex items-center justify-center"}>
						{storyContent && <div className={"max-w-[80%]"}>
							{storyContent?.texts.map((item, index) =>
								<div onClick={() => setIsTextEditorOpen(true)} contentEditable={true}
								     className={"!outline-none px-2 py-2 rounded-[8px]"}
								     style={{color: item.color, backgroundColor: item.backgroundColor}} key={index}>
									{item.value}
								</div>
							)}
						</div>}
						{!storyContent && <div className={"px-10 text-center"}>
							<div
								className={"px-2 py-2 flex items-center justify-center bg-surface-container-high-dark w-fit mx-auto rounded-[16px] h-fit mb-1"}>
								<Icon fill={1} size={40} className={"text-[40px] font-bold  text-on-surface-dark"}
								      weight={700}>
									{storyType === "text" ? "match_case" : storyType === "image" ? "image" : "play_circle"}
								</Icon>
							</div>
							<p className={"mb-2 max-w-64 text-body-medium text-on-surface-dark"}>
								Your
								<span className={"text-primary-dark mx-1"}>
									{storyType === "text" ? "Text Story" : storyType === "image" ? "Image Story" : "Video Story"}
								</span>
								is empty click on button below to upload or change
								data
							</p>

							{storyType === "text" ?
								<Button onClick={() => {
									// setShowStoryUploadButton(true)
									setStoryContent({
										type: "text", texts: [{
											value: "Type Text...",
											position: "0px 0px",
											color: "rgba(0,0,0,1)",
											backgroundColor: "rgba(255,255,255,1)",
										}]
									})
								}} className={{stateLayer: " !pl-6 !pr-4"}}>
									Next Step
									<Icon className={"ml-2 !text-[18px] font-medium"} weight={500} size={20}>
										arrow_forward
									</Icon>
								</Button> : storyType === "image" ?
									<Button className={{stateLayer: " !pl-6 !pr-4"}}>Upload Image<Icon
										className={"ml-2 !text-[18px] font-medium"} size={20}>
										arrow_forward
									</Icon></Button> :
									<Button className={{stateLayer: " !pl-6 !pr-4"}}>Upload Video<Icon
										className={"ml-2 !text-[18px] font-medium"} size={20}>
										arrow_forward
									</Icon></Button>}


						</div>}
					</div>
					<div className={"z-20 absolute w-full flex items-center px-4 bottom-4"}>
						{showStoryUploadButton && <div className={" space-x-2 flex items-center justify-center"}>
							<Button icon={"upload"} type={"filled"}>
								Upload Story
							</Button>
							<Button type={"tonal"}>
								Save in draft
							</Button>
						</div>}
						{!showStoryUploadButton && <div className={"flex pb-2 px-2 items-center w-full space-x-4"}>
							<div onClick={() => setStoryType("text")}
							     className={`${storyType === "text" ? "outline outline-2 outline-offset-2 outline-primary-dark" : ""} w-[80px] rounded-[8px] text-on-surface-variant-dark flex items-center justify-center h-[100px] bg-surface-container-dark`}>
								<Icon size={40} type={"outlined"}>
									match_case
								</Icon>
							</div>
							<div onClick={() => setStoryType("image")}
							     className={` ${storyType === "image" ? "outline outline-2 outline-offset-2 outline-primary-dark" : ""} w-[80px] rounded-[8px] text-on-surface-variant-dark flex items-center justify-center h-[100px] bg-surface-container-dark`}>
								<Icon size={40} type={"outlined"}>
									image
								</Icon>
							</div>
							<div onClick={() => setStoryType("video")}
							     className={` ${storyType === "video" ? "outline outline-2 outline-offset-2 outline-primary-dark" : ""} w-[80px] rounded-[8px] text-on-surface-variant-dark flex items-center justify-center h-[100px] bg-surface-container-dark`}>
								<Icon size={40} type={"outlined"}>
									play_circle
								</Icon>
							</div>
						</div>}
					</div>
				</div>

			</div>
		</div>
	)
}