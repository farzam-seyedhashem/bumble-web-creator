'use client'
import Button from "@m3/buttons/Button";
import IconButton from "@m3/icon_buttons/IconButton";
import {useEffect, useRef, useState} from "react";
import Icon from "@m3/assets/icons/Icon";
import {UploadFile} from "@controller/FileController";
import React from "react";
import Image from 'next/image'
import {Swiper, SwiperSlide} from "swiper/react";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";



export default function StoryUploader({siteSetting}) {
	const [storyType, setStoryType] = useState("text");
	const [showStoryUploadButton, setShowStoryUploadButton] = useState(false);
	const [storyContent, setStoryContent] = useState([]);
	const [isTextEditorOpen, setIsTextEditorOpen] = useState(true);
	const [changeTextFormat, setChangeTextFormat] = useState(false);
	const [storyFilter, setStoryFilter] = useState(0);
	const dialogRef = useRef(null);
	const [mediaURL, setMediaURL] = useState(null);
	const [selectedText, setSelectedText] = useState(null);
	const [editorOpen, setEditorOpen] = useState(null);
	// const [change, setIsTextEditorOpen] = useState(true);
	const [bgPresetColors, setBgPresetColors] = useState([]);
	const [presetColors, setPresetColors] = useState([]);
	const fileInputRef = useRef(null);

	useEffect(() => {
		const {color} = siteSetting;

		// console.log(color)
		// if (storyContent) {
		// 	setShowStoryUploadButton(true)
		const presetBgColorsArray = []
		// const presetColorsArray = []
		Object.keys(color).map((k, index) =>
			(index <= 18) && presetBgColorsArray.push({color: rgbaObjToRgba(color[k]), title: k})
		)
		console.log(presetBgColorsArray)
		// console.log(presetBgColorsArray,presetColorsArray)
		setBgPresetColors(presetBgColorsArray)
		// setPresetColors(presetColorsArray)
		// }
	}, [selectedText])
	const addTextToStoryContent = () => {
		storyContent.push(
			{
				value: "Type Text...",
				top: "center",
				left: "center",
				fontSize: 16,
				fontWeight: 400,
				fontStyle: "normal",
				color: "rgba(0,0,0,1)",
				backgroundColor: "rgba(255,255,255,1)",
			}
		)
		// const texts = storyContent.texts
		// texts.push({
		// 	value: "Type Text...",
		// 	position: "0px 0px"
		// })
		// setStoryContent({...storyContent, "texts": texts})
	}
	const addContentToStory = (item) => {


	}
	const handleStoryContent = () => {

	}
	const onChangeStoryContent = (index, key, value) => {
		const nStoryContent = [...storyContent]
		console.log(nStoryContent)
		nStoryContent[index] = {...nStoryContent[index], [key]: value}
		setStoryContent(nStoryContent)
	}
	// const handle = () => {
	// 	if (storyType === "text") {
	// 		setShowStoryUploadButton(true)
	// 	}
	// }
	return (
		<div className={"px-6 py-6 dark:bg-surface-dark bg-surface-light min-h-screen"}>
			<div ref={dialogRef} className={"dark fixed inset-0 bg-black/[25%] flex items-center justify-center"}>
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
					{editorOpen === "position" && <div
						className={"  px-4 items-center absolute z-30 bottom-[67px] left-0 pb-4 pt-3 w-full bg-surface-container-lowest-dark"}>
						<div className={"flex items-center space-x-2"}>
							<label className={"font-medium text-on-surface-variant-dark"}>
								Horizontal Position:
							</label>
							<button onClick={() => onChangeStoryContent(selectedText, "left", "left")}
							     className={"block text-center px-2 py-1"}>
								<div className={"mx-auto w-fit"}>
									<Icon
										className={`${storyContent[selectedText].left === "left" ? "text-primary-dark" : "text-on-surface-variant-dark"}`}
										type={"outline"}>
										border_left
									</Icon>
								</div>
							</button>
							<button onClick={() => onChangeStoryContent(selectedText, "left", "center")}
							     className={"block text-center px-2 py-1"}>

								<div className={"mx-auto w-fit"}>
									<Icon
										className={`${storyContent[selectedText].left === "center" ? "text-primary-dark" : "text-on-surface-variant-dark"}`}
										type={"outline"}>
										border_vertical
									</Icon>
								</div>
							</button>
							<button onClick={() => onChangeStoryContent(selectedText, "left", "right")}
							     className={"block text-center px-2 py-1"}>

								<div className={"mx-auto w-fit"}>
									<Icon
										className={`${storyContent[selectedText].left === "right" ? "text-primary-dark" : "text-on-surface-variant-dark"}`}
										type={"outline"}>
										border_right
									</Icon>
								</div>
							</button>

						</div>
						<div className={"flex items-center space-x-2"}>
							<label className={"font-medium text-on-surface-variant-dark"}>
								Vertical Position:
							</label>
							<button onClick={() => onChangeStoryContent(selectedText, "top", "top")}
							     className={`block text-center px-2 py-1`}>

								<div className={"mx-auto w-fit"}>
									<Icon
										className={`${storyContent[selectedText].top === "top" ? "text-primary-dark" : "text-on-surface-variant-dark"} text-on-surface-variant-dark`}
										type={"outline"}>
										border_top
									</Icon>
								</div>
							</button>
							<button onClick={() => onChangeStoryContent(selectedText, "top", "center")}
							     className={"block text-center px-2 py-1"}>

								<div className={"mx-auto w-fit"}>
									<Icon
										className={`${storyContent[selectedText].top === "center" ? "text-primary-dark" : "text-on-surface-variant-dark"}`}
										type={"outline"}>
										border_horizontal
									</Icon>
								</div>
							</button>
							<button onClick={() => onChangeStoryContent(selectedText, "top", "bottom")}
							     className={"block text-center px-2 py-1"}>

								<div className={"mx-auto w-fit"}>
									<Icon
										className={`${storyContent[selectedText].top === "bottom" ? "text-primary-dark" : "text-on-surface-variant-dark"}`}
										type={"outline"}>
										border_bottom
									</Icon>
								</div>
							</button>

						</div>
					</div>
					}
					{editorOpen === "background" && <div
						className={"*:border px-3 items-center absolute z-30 bottom-[67px] left-0 pb-4 pt-3 w-full bg-surface-container-lowest-dark"}>
						<label className={"!border-0 block text-label-medium  font-medium text-white mb-2"}>
							Text Background Color
						</label>
						{bgPresetColors.length !== 0 && bgPresetColors.map((bg, index) => <div
							onClick={() => onChangeStoryContent(selectedText, "backgroundColor", bg.color)}
							style={{backgroundColor: `${bg.color}`}} key={index}
							className={`mr-2 inline-block w-[28px] h-[28px] rounded-full`}>

						</div>)}
					</div>}
					{editorOpen === "color" && <div
						className={"*:border justify-between px-3 items-center absolute z-30 bottom-[67px] left-0 pb-4 pt-3 w-full bg-surface-container-lowest-dark"}>
						<label className={"!border-0 block text-label-medium  font-medium text-white mb-2"}>
							Text Color
						</label>
						{bgPresetColors.length !== 0 && bgPresetColors.map((bg, index) => <div
							onClick={() => onChangeStoryContent(selectedText, "color", bg.color)}
							style={{backgroundColor: `${bg.color}`}} key={index}
							className={`inline-block mr-2 w-[28px] h-[28px] rounded-full`}>

						</div>)}
					</div>}
					{editorOpen === "size" && <div
						className={"*:border flex  justify-between px-3 items-center absolute z-30 bottom-[67px] left-0 pb-4 pt-3 w-full bg-surface-container-lowest-dark"}>
						<div onClick={() => onChangeStoryContent(selectedText, "fontSize", 14)}
						     className={"text-white py-2 px-4 rounded-full"}>
							14px
						</div>
						<div onClick={() => onChangeStoryContent(selectedText, "fontSize", 16)}
						     className={"text-white py-2 px-4 rounded-full"}>
							16px
						</div>
						<div onClick={() => onChangeStoryContent(selectedText, "fontSize", 20)}
						     className={"text-white py-2 px-4 rounded-full"}>
							20px
						</div>
						<div onClick={() => onChangeStoryContent(selectedText, "fontSize", 24)}
						     className={"text-white py-2 px-4 rounded-full"}>
							24px
						</div>
						<div onClick={() => onChangeStoryContent(selectedText, "fontSize", 32)}
						     className={"text-white py-2 px-4 rounded-full"}>
							32px
						</div>
					</div>}
					{selectedText !== null && <div
						className={"flex space-x-2 px-4 items-center absolute z-30 bottom-0 left-0 pb-4 pt-3 w-full bg-surface-container-lowest-dark"}>
						<div onClick={() => setEditorOpen("position")}
						     className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon className={"text-on-surface-variant-dark"} type={"outline"}>
									picture_in_picture
								</Icon>
							</div>
						</div>
						<div onClick={() => setEditorOpen("color")}
						     className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon className={"text-on-surface-variant-dark"} type={"outline"}>
									palette
								</Icon>
							</div>
						</div>
						<div onClick={() => setEditorOpen("background")}
						     className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon className={"text-on-surface-variant-dark"} type={"outline"}>
									format_paint
								</Icon>
							</div>
						</div>
						<div onClick={() => setEditorOpen("size")}
						     className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon className={"text-on-surface-variant-dark"} type={"outline"}>
									format_size
								</Icon>
							</div>
						</div>
						<div
							onClick={() => onChangeStoryContent(selectedText, "fontWeight", storyContent[selectedText].fontWeight === 400 ? 700 : 400)}
							className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon
									className={`${storyContent[selectedText].fontWeight === 400 ? "text-on-surface-variant-dark" : "text-primary-dark"} `}
									type={"outline"}>

									format_bold
								</Icon>
							</div>
						</div>
						<div
							onClick={() => onChangeStoryContent(selectedText, "fontStyle", storyContent[selectedText].fontStyle === "italic" ? "normal" : "italic")}
							className={"block text-center px-2 py-1"}>
							<div className={"mx-auto w-fit"}>
								<Icon
									className={`${storyContent[selectedText].fontStyle === "italic" ? "text-primary-dark" : "text-on-surface-variant-dark"}`}
									type={"outline"}>

									format_italic
								</Icon>
							</div>
						</div>
					</div>}
					<div className={"absolute inset-0 z-10 flex items-center justify-center"}>
						{showStoryUploadButton && <div className={" w-full h-full relative"}>

							{storyContent.map((item, index) =>
								<div style={{
									top: item.top === "center" ? "50%" : item.top === "top" ? "24px" : "auto",
									bottom: item.top === "center" ? "auto" : item.top === "top" ? "auto" : "24px",
									left: item.left === "center" ? "50%" : item.left === "left" ? "24px" : "auto",
									right: item.left === "center" ? "auto" : item.left === "left" ? "auto" : "24px",
									fontSize: item.fontSize,
									fontWeight: item.fontWeight,
									fontStyle: item.fontStyle,
									zIndex: 30 + index,
									transform: `translate(${item.left === "center" ? "-50%" : "0"},${item.top === "center" ? "-50%" : "0"})`,
									backgroundColor: item.backgroundColor, color: item.color
								}}

								     className={`rounded-[20px] min-w-[60px] px-4 py-2 min-h-[40px] ${selectedText === index ? "outline outline-primary-light dark:outline-primary-dark" : ""} absolute top-1/2 left-1/2 transform bg-black text-white `}
								     onClick={() => setSelectedText(index)} key={index}>
									<div className={"!outline-none max-w-[90%]"}
									     aria-label={item.value}

									     defaultValue={item.value} key={index}
									     onChange={(e) => onChangeStoryContent(index, "value", e.target.value)}
									     contentEditable={true}/>
								</div>
							)}


							<Swiper onClick={() => {
								setSelectedText(null)
								setEditorOpen(null)
							}}
							        onSlideChange={(s) => setStoryFilter(s.activeIndex)}
							        effect={"creative"}
							        className={"z-20 !absolute inset-0"}>
								<SwiperSlide className={"w-full h-full relative"}>
									<div className={""}></div>
								</SwiperSlide>
								<SwiperSlide className={"w-full h-full relative"}>
									<div
										className={"w-full h-full backdrop-filter backdrop-brightness-95 backdrop-contrast-125 backdrop-saturate-[1.05]"}></div>
								</SwiperSlide>
								<SwiperSlide className={"w-full h-full relative"}>
									<div
										className={"w-full h-full backdrop-filter backdrop-grayscale"}></div>
								</SwiperSlide>
								<SwiperSlide className={"w-full h-full relative"}>
									<div
										className={"w-full h-full backdrop-filter backdrop-blur"}></div>
								</SwiperSlide>

							</Swiper>
							<div className={"w-full z-0 h-full relative"}>
								<Image objectFit={"cover"} layout={"fill"} src={mediaURL} alt={""}/>
							</div>

						</div>}
						{!showStoryUploadButton && <div className={"px-10 text-center"}>
							<div
								className={"px-2 py-2 flex items-center justify-center bg-surface-container-high-dark w-fit mx-auto rounded-[16px] h-fit mb-1"}>
								<Icon fill={1} size={40}
								      className={"text-[40px] font-bold  text-on-surface-dark"}
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
									setShowStoryUploadButton(true)
									// setStoryContent({
									// 	type: "text", texts: [{
									// 		value: "Type Text...",
									// 		position: "0px 0px",
									// 		color: "rgba(0,0,0,1)",
									// 		backgroundColor: "rgba(255,255,255,1)",
									// 	}]
									// })
								}} className={{stateLayer: " !pl-6 !pr-4"}}>
									Next Step
									<Icon className={"ml-2 !text-[18px] font-medium"} weight={500}
									      size={20}>
										arrow_forward
									</Icon>
								</Button> : storyType === "image" ?
									<>
										<div className={"mr-2"}>
											<input ref={fileInputRef} accept={"image/jpeg"}
											       name={"files"}
											       onChange={async (e) => {

												       const file = fileInputRef.current.files[0]
												       const res = await UploadFile(file)
												       setMediaURL(process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL+res)

												       setShowStoryUploadButton(true)
											       }}
											       id={"imageFile"} type={"file"}
											       className={"hidden w-0"}/>
										</div>
										<Button component={"label"} htmlFor={"imageFile"}
										        className={{stateLayer: " !pl-6 !pr-4"}}>Upload
											Image<Icon
												className={"ml-2 !text-[18px] font-medium"}
												size={20}>
												arrow_forward
											</Icon></Button></> :
									<Button className={{stateLayer: " !pl-6 !pr-4"}}>Upload
										Video<Icon
											className={"ml-2 !text-[18px] font-medium"} size={20}>
											arrow_forward
										</Icon></Button>}


						</div>}
					</div>
					<div className={"z-20 absolute w-full flex items-center px-4 bottom-4"}>
						{showStoryUploadButton &&
							<div className={" space-x-2 flex items-center justify-center"}>
								<Button icon={"upload"} type={"filled"}>
									Upload Story
								</Button>
								<Button type={"tonal"}>
									Save in draft
								</Button>
							</div>}
						{!showStoryUploadButton &&
							<div className={"flex pb-2 px-2 items-center w-full space-x-4"}>
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