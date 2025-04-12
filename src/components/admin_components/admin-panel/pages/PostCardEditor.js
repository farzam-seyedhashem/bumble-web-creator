'use client'
import Checkbox from "@m3/checkboxes/Checkbox";
import FilterChips from "@m3/chips/FilterChips";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";
import React, {useEffect, useState} from "react";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Divider from "@m3/dividers/Divider";
import PostCard from "@admin/admin-panel/post-card/PostCard";
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import Switch from "@m3/switch/Switch";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import FilledTextField from "@m3/text_fields/FilledTextField";
import TextField from "@m3/text_fields/TextField";

export default function PostCardEditor({postCardSetting, color}) {
	useEffect(() => {
		console.log(postCardSetting)
	})

	function checkColorIsCustom(colorSet, selectedColor) {
		let v = null
		Object.values(colorSet).map((color, index) => {
			// console.log(rgbaObjToRgba(color),selectedColor,Object.keys(colorSet),Object.keys(colorSet)[index])
			if (rgbaObjToRgba(color) === selectedColor) {
				v = Object.keys(colorSet)[index];

			}
		})

		return v ? v : selectedColor
	}

	const [postCard, setPostCard] = useState(postCardSetting.data[0]?.data ? postCardSetting.data[0].data : {
		cardType: 0,
		imageCenter: false,
		showMoreButton: true,
		showMoreButtonIcon: "chevron_right",
		showMoreButtonText: "Show More",
		postTitleType: "h3",
		padding: [8, 8, 8, 8],
		buttonType: "text",
		imageBorderRadius: [12, 12, 12, 12],
		titleMargin: [0, 0, 0, 0],
		imageMargin: [0, 0, 0, 0],
		descriptionMargin: [0, 0, 0, 0],
		buttonMargin: [0, 0, 0, 0],
		postTagsType: "withBorder",
		cardBorderRadius: 16,
		showPostTagsInCard: true,
		buttonDivider: false,
		dividerColor: "#000",
		postTagsTextColor: "#000",
		postTagsBackgroundColor: "#fff",
		postTagsBorderColor: "#000",
		backgroundColor: "#fff",
		titleTextColor: "#000",
		descriptionTextColor: "#000",
		buttonTextColor: "#000",
		buttonBackgroundColor: "#fff",

		// cardColor:"#f2f2f2"

	});
	const handleDataChange = (key, value) => {
		setPostCard({...postCard, [key]: value})
	}

	const saveData = () => {
		try {
			fetch(`/api/post-card/${postCardSetting.data[0]._id}`, {
				method: 'PUT',
				body: JSON.stringify({data:postCard})
			}).then(response =>
					console.log(response)

				// setIsOpen(true)
			);
		} catch (error) {
			alert('jhhhh');
		}
	}
	return (
		<>
			{/*<div*/}
			{/*    className={" bg-surface-container-light dark:bg-surface-container-dark  flex items-center justify-between px-4 h-[64px]"}>*/}
			{/*    <h1 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large"}>*/}
			{/*        Inventory*/}
			{/*    </h1>*/}
			{/*    <Button icon={"save"} type={"filled"}*/}
			{/*            className={""}>*/}
			{/*        Save*/}
			{/*    </Button>*/}
			{/*</div>*/}
			<div
				className={"border-b mb-6 flex justify-between border-outline-light container mx-auto h-[72px] items-center "}>
				<div className={"flex items-center"}>
					<Link href={"/admin/page-builder"}>
						<IconButton>
							arrow_back
						</IconButton>
					</Link>
					<h1 className={"ml-2 text-title-large text-on-surface-light dark:text-on-surface-dark font-bold"}>
						Inventory Card Preview
					</h1>
				</div>
				<Button onClick={() => saveData()} icon={"save"} type="filled">
					Save
				</Button>
			</div>
			<div className={"container mx-auto pb-4"}>
				<div className={"flex space-x-4 justify-between "}>
					<div
						className={"relative h-[700px]    md:w-7/12 xl:w-8/12 bg-surface-container-low-light rounded-[24px]"}>
						<div
							style={{background: "repeating-linear-gradient(45deg,transparent,rgba(0,0,0,.04) 4px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 16px)"}}
							className={" flex h-full items-center justify-center rounded-[24px] w-full py-6 px-6 "}>
							<div className={"w-[300px]"}>
								<PostCard postCard={postCard}/>
							</div>
						</div>
					</div>
					<div className={"xl:w-4/12 md:w-5/12"}>
						<div
							className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
							<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
								Card Elements
							</h3>
							<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								Edit elements in card
							</p>
						</div>
						<>
							<div className={"mt-4  px-4"}>
								<div className={"flex items-center space-x-2 mt-1 justify-between"}>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark font-bold text-label-large"}>
											Card Rounded
										</label>
										<div className={"flex items-center space-x-1"}>
											<input
												defaultValue={postCard.cardBorderRadius}
												onChange={(e) => handleDataChange("cardBorderRadius", e.target.value)}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
								</div>
							</div>
							<ul className={"pt-2"}>
								<li
									className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
									<div className={"mr-4"}>
										<label
											className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
											Card Background Color
										</label>
									</div>
									<div className={"w-fit"}>
										<ColorPicker value={postCard["backgroundColor"]}
										             onChange={(value) => handleDataChange("backgroundColor", value)}/>
									</div>
								</li>
							</ul>
							<div className={"py-3 px-4"}>
								<label
									className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
									Card padding
								</label>
								<div className={"flex items-center space-x-2 mt-1 justify-between"}>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											Top
										</label>
										<div className={"flex items-center space-x-1"}>
											<input
												defaultValue={postCard.padding[0]}

												onChange={(e) => handleDataChange("padding", [e.target.value, postCard.padding[1], postCard.padding[2], postCard.padding[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											right
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.padding[1]}
												onChange={(e) => handleDataChange("padding", [postCard.padding[0], e.target.value, postCard.padding[2], postCard.padding[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											bottom
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.padding[2]}
												onChange={(e) => handleDataChange("padding", [postCard.padding[0], postCard.padding[1], e.target.value, postCard.padding[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											left
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.padding[3]}
												onChange={(e) => handleDataChange("padding", [postCard.padding[0], postCard.padding[1], postCard.padding[2], e.target.value])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
								</div>
							</div>
						</>
						<div
							className={"pt-6 mt-4 border-t border-outline-variant-light dark:border-outline-variant-dark px-4"}>
							<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
								Action Button
							</h3>
							<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								Change action button design
							</p>
						</div>
						<>
							<div className={"pt-4 px-4"}>
								<div className={"flex items-center justify-between"}>
									<label
										className={"text-label-large font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
										Do you want your card have action button ?
									</label>
									<Switch isCheck={postCard.showMoreButton}
									        setIsCheck={(v) => handleDataChange("showMoreButton", v)}/>
								</div>
							</div>
							{postCard.showMoreButton && <>
								{<div className={"px-4 mt-4"}>
									<label
										className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
										Action Button Shape
									</label>
									<div className={"flex mt-1 items-center space-x-2"}>
										<div onClick={() => handleDataChange("buttonType", "text")}
										     className={`font-medium w-5/12 h-[100px] flex items-center justify-center rounded-[8px] ${postCard.buttonType === "text" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
											<a className={`flex text-label-large items-center space-x-2 ${postCard.buttonType === "text" ? "text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
												Show More
												<Icon>
													chevron_right
												</Icon>
											</a>
										</div>
										<div onClick={() => handleDataChange("buttonType", "button")}
										     className={`font-medium w-5/12 h-[100px] flex items-center justify-center rounded-[8px] ${postCard.buttonType === "button" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
											<a className={`flex items-center text-label-large pl-6 pr-4 space-x-2 rounded-full h-10 ${postCard.buttonType === "button" ? "bg-on-primary-container-light dark:bg-on-primary-container-dark text-primary-container-light dark:text-primary-container-dark" : "bg-on-surface-variant-light dark:bg-on-surface-variant-dark text-surface-container-light dark:text-surface-container-dark"}`}>
												Show More
												<Icon>
													chevron_right
												</Icon>
											</a>
										</div>
									</div>
								</div>}
								<ul className={"py-2"}>
									<li
										className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
										<div className={"mr-4"}>
											<label
												className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
												Action Button Text Color
											</label>
										</div>
										<div className={"w-fit"}>
											<ColorPicker value={postCard["buttonTextColor"]}
											             onChange={(value) => handleDataChange("buttonTextColor", value)}/>
										</div>
									</li>
									{postCard.buttonType === "button" && <li
										className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
										<div className={"mr-4"}>
											<label
												className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
												Action Button Background Color
											</label>
										</div>
										<div className={"w-fit"}>
											<ColorPicker value={postCard["buttonBackgroundColor"]}
											             onChange={(value) => handleDataChange("buttonBackgroundColor", value)}/>
										</div>
									</li>}
								</ul>
								{<div className={"py-2 px-4"}>
									<TextField defaultValue={postCard.showMoreButtonText}
									           onChange={(e) => handleDataChange("showMoreButtonText", e.target.value)}
									           label={"Action Button Text"}/>
									<div className={"mt-4"}>
										<label
											className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
											Action Button Icon
										</label>
										<div className={"flex mt-1 items-center space-x-2"}>
											<div onClick={() => handleDataChange("showMoreButtonIcon", "")}
											     className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.showMoreButtonIcon === "" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
												<Icon>
													block
												</Icon>
											</div>
											<div onClick={() => handleDataChange("showMoreButtonIcon", "chevron_right")}
											     className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.showMoreButtonIcon === "chevron_right" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
												<Icon>
													chevron_right
												</Icon>
											</div>
											<div onClick={() => handleDataChange("showMoreButtonIcon", "arrow_right")}
											     className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.showMoreButtonIcon === "arrow_right" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
												<Icon>
													arrow_right
												</Icon>
											</div>
											<div onClick={() => handleDataChange("showMoreButtonIcon", "arrow_forward")}
											     className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.showMoreButtonIcon === "arrow_forward" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
												<Icon>
													arrow_forward
												</Icon>
											</div>
											<div
												onClick={() => handleDataChange("showMoreButtonIcon", "arrow_forward_ios")}
												className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.showMoreButtonIcon === "arrow_forward_ios" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
												<Icon>
													arrow_forward_ios
												</Icon>
											</div>
										</div>

									</div>
									<div className={"py-3"}>
										<label
											className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
											Action Button Margin
										</label>
										<div className={"flex items-center space-x-2 mt-1 justify-between"}>
											<div className={"w-3/12"}>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													Top
												</label>
												<div className={"flex items-center space-x-1"}>
													<input
														defaultValue={postCard.buttonMargin[0]}
														onChange={(e) => handleDataChange("buttonMargin", [e.target.value, postCard.buttonMargin[1], postCard.buttonMargin[2], postCard.buttonMargin[3]])}
														className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
													<label
														className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
														px
													</label>
												</div>
											</div>
											<div className={"w-3/12"}>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													right
												</label>
												<div className={"flex items-center space-x-1"}>

													<input
														defaultValue={postCard.buttonMargin[1]}
														onChange={(e) => handleDataChange("buttonMargin", [postCard.buttonMargin[0], e.target.value, postCard.buttonMargin[2], postCard.buttonMargin[3]])}
														className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
													<label
														className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
														px
													</label>
												</div>
											</div>
											<div className={"w-3/12"}>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													bottom
												</label>
												<div className={"flex items-center space-x-1"}>

													<input
														defaultValue={postCard.buttonMargin[2]}
														onChange={(e) => handleDataChange("buttonMargin", [postCard.buttonMargin[0], postCard.buttonMargin[1], e.target.value, postCard.buttonMargin[3]])}
														className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
													<label
														className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
														px
													</label>
												</div>
											</div>
											<div className={"w-3/12"}>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													left
												</label>
												<div className={"flex items-center space-x-1"}>

													<input
														defaultValue={postCard.buttonMargin[3]}
														onChange={(e) => handleDataChange("buttonMargin", [postCard.buttonMargin[0], postCard.buttonMargin[1], postCard.buttonMargin[2], e.target.value])}
														className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
													<label
														className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
														px
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>}
							</>}
						</>
						<div
							className={"pt-6 mt-4 border-t border-outline-variant-light dark:border-outline-variant-dark px-4"}>
							<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
								Post Information
							</h3>
							<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								Change post title, description and image design
							</p>
						</div>
						<>
							<div className={"pt-4 px-4"}>
								<div className={"flex items-center justify-between"}>
									<label
										className={"text-label-large font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
										Show image in center of card
									</label>
									<Switch isCheck={postCard.imageCenter}
									        setIsCheck={(v) => handleDataChange("imageCenter", v)}/>
								</div>
							</div>
							<div className={"pt-4 px-4"}>
								<label
									className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
									Image Rounded
								</label>
								<div className={"flex items-center space-x-2 mt-1 justify-between"}>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											Top Left
										</label>
										<div className={"flex items-center space-x-1"}>
											<input
												defaultValue={postCard.imageBorderRadius[0]}
												onChange={(e) => handleDataChange("imageBorderRadius", [e.target.value, postCard.imageBorderRadius[1], postCard.imageBorderRadius[2], postCard.imageBorderRadius[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											Top Right
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.imageBorderRadius[1]}
												onChange={(e) => handleDataChange("imageBorderRadius", [postCard.imageBorderRadius[0], e.target.value, postCard.imageBorderRadius[2], postCard.imageBorderRadius[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											Bottom Right
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.imageBorderRadius[2]}
												onChange={(e) => handleDataChange("imageBorderRadius", [postCard.imageBorderRadius[0], postCard.imageBorderRadius[1], e.target.value, postCard.imageBorderRadius[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											Bottom Left
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.imageBorderRadius[3]}
												onChange={(e) => handleDataChange("imageBorderRadius", [postCard.imageBorderRadius[0], postCard.imageBorderRadius[1], postCard.imageBorderRadius[2], e.target.value])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className={"pt-4 px-4"}>
								<label
									className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
									Image margin
								</label>
								<div className={"flex items-center space-x-2 mt-1 justify-between"}>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											Top
										</label>
										<div className={"flex items-center space-x-1"}>
											<input
												defaultValue={postCard.imageMargin[0]}
												onChange={(e) => handleDataChange("imageMargin", [e.target.value, postCard.imageMargin[1], postCard.imageMargin[2], postCard.imageMargin[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											right
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.imageMargin[1]}
												onChange={(e) => handleDataChange("imageMargin", [postCard.imageMargin[0], e.target.value, postCard.imageMargin[2], postCard.imageMargin[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											bottom
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.imageMargin[2]}
												onChange={(e) => handleDataChange("imageMargin", [postCard.imageMargin[0], postCard.imageMargin[1], e.target.value, postCard.imageMargin[3]])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
									<div className={"w-3/12"}>
										<label
											className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
											left
										</label>
										<div className={"flex items-center space-x-1"}>

											<input
												defaultValue={postCard.imageMargin[3]}
												onChange={(e) => handleDataChange("imageMargin", [postCard.imageMargin[0], postCard.imageMargin[1], postCard.imageMargin[2], e.target.value])}
												className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												px
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className={"pt-4 px-4"}>
								<label
									className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
									Card title tag
								</label>
								<div className={"flex mt-1 items-center space-x-2"}>
									<div onClick={() => handleDataChange("postTitleType", "h1")}
									     className={`font-medium w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.postTitleType === "h1" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
										H1
									</div>
									<div onClick={() => handleDataChange("postTitleType", "h2")}
									     className={`font-medium w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.postTitleType === "h2" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
										H2
									</div>
									<div onClick={() => handleDataChange("postTitleType", "h3")}
									     className={`font-medium w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.postTitleType === "h3" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
										H3
									</div>
									<div onClick={() => handleDataChange("postTitleType", "h4")}
									     className={`font-medium w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.postTitleType === "h4" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
										H4
									</div>
									<div onClick={() => handleDataChange("postTitleType", "h5")}
									     className={`font-medium w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.postTitleType === "h5" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
										H5
									</div>
									<div onClick={() => handleDataChange("postTitleType", "h6")}
									     className={`font-medium w-10 h-10 flex items-center justify-center rounded-[8px] ${postCard.postTitleType === "h6" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
										H6
									</div>
								</div>
								<div className={"pt-4"}>
									<label
										className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
										Title margin
									</label>
									<div className={"flex items-center space-x-2 mt-1 justify-between"}>
										<div className={"w-3/12"}>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												Top
											</label>
											<div className={"flex items-center space-x-1"}>
												<input
													defaultValue={postCard.titleMargin[0]}
													onChange={(e) => handleDataChange("titleMargin", [e.target.value, postCard.titleMargin[1], postCard.titleMargin[2], postCard.titleMargin[3]])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
										<div className={"w-3/12"}>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												right
											</label>
											<div className={"flex items-center space-x-1"}>

												<input
													defaultValue={postCard.titleMargin[1]}
													onChange={(e) => handleDataChange("titleMargin", [postCard.titleMargin[0], e.target.value, postCard.titleMargin[2], postCard.titleMargin[3]])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
										<div className={"w-3/12"}>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												bottom
											</label>
											<div className={"flex items-center space-x-1"}>

												<input
													defaultValue={postCard.titleMargin[2]}
													onChange={(e) => handleDataChange("titleMargin", [postCard.titleMargin[0], postCard.titleMargin[1], e.target.value, postCard.titleMargin[3]])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
										<div className={"w-3/12"}>
											<label

												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												left
											</label>
											<div className={"flex items-center space-x-1"}>

												<input
													defaultValue={postCard.titleMargin[3]}
													onChange={(e) => handleDataChange("titleMargin", [postCard.titleMargin[0], postCard.titleMargin[1], postCard.titleMargin[2], e.target.value])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className={"pt-4"}>
									<label
										className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
										Description margin
									</label>
									<div className={"flex items-center space-x-2 mt-1 justify-between"}>
										<div className={"w-3/12"}>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												Top
											</label>
											<div className={"flex items-center space-x-1"}>
												<input
													defaultValue={postCard.descriptionMargin[0]}
													onChange={(e) => handleDataChange("descriptionMargin", [e.target.value, postCard.descriptionMargin[1], postCard.descriptionMargin[2], postCard.descriptionMargin[3]])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
										<div className={"w-3/12"}>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												right
											</label>
											<div className={"flex items-center space-x-1"}>

												<input
													defaultValue={postCard.descriptionMargin[1]}
													onChange={(e) => handleDataChange("descriptionMargin", [postCard.descriptionMargin[0], e.target.value, postCard.descriptionMargin[2], postCard.descriptionMargin[3]])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
										<div className={"w-3/12"}>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												bottom
											</label>
											<div className={"flex items-center space-x-1"}>

												<input
													defaultValue={postCard.descriptionMargin[2]}
													onChange={(e) => handleDataChange("descriptionMargin", [postCard.descriptionMargin[0], postCard.descriptionMargin[1], e.target.value, postCard.descriptionMargin[3]])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
										<div className={"w-3/12"}>
											<label
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
												left
											</label>
											<div className={"flex items-center space-x-1"}>

												<input
													defaultValue={postCard.descriptionMargin[3]}
													onChange={(e) => handleDataChange("descriptionMargin", [postCard.descriptionMargin[0], postCard.descriptionMargin[1], postCard.descriptionMargin[2], e.target.value])}
													className={"w-full border border-outline-variant-light dark:border-outline-variant-dark bg-transparent mt-1 rounded-[8px] outline-none"}/>
												<label
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
													px
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<ul className={"pt-4"}>
								<li
									className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
									<div className={"mr-4"}>
										<label
											className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
											Title Color
										</label>
									</div>
									<div className={"w-fit"}>
										<ColorPicker value={postCard["titleTextColor"]}
										             onChange={(value) => handleDataChange("titleTextColor", value)}/>
									</div>
								</li>
								<li
									className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
									<div className={"mr-4"}>
										<label
											className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
											Description Color
										</label>
									</div>
									<div className={"w-fit"}>
										<ColorPicker value={postCard["descriptionTextColor"]}
										             onChange={(value) => handleDataChange("descriptionTextColor", value)}/>
									</div>
								</li>
							</ul>

						</>
						<div
							className={"pt-6 mt-4 border-t border-outline-variant-light dark:border-outline-variant-dark px-4"}>
							<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
								Post Tags
							</h3>
							<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								Change post tags design
							</p>
						</div>
						<>
							<div className={"pt-4 px-4"}>
								<div className={"flex items-center justify-between"}>
									<label
										className={"text-label-large font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
										Do you want to show post tags in card ?
									</label>
									<Switch isCheck={postCard.showPostTagsInCard}
									        setIsCheck={(v) => handleDataChange("showPostTagsInCard", v)}/>
								</div>
							</div>
							{postCard.showPostTagsInCard && <>
								<ul className={"pt-4 px-4"}>
									<label
										className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
										Post Tags Shape
									</label>
									<div className={"flex mt-1 items-center space-x-2"}>
										<div onClick={() => handleDataChange("postTagsType", "text")}
										     className={`font-medium w-5/12 h-[100px] flex items-center justify-center rounded-[8px] ${postCard.postTagsType === "text" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
											<a className={`flex items-center text-label-large space-x-2 ${postCard.postTagsType === "text" ? "text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
												<Icon className={"mr-1"} size={20}>
													tag
												</Icon>
												tag_name
											</a>
										</div>
										<div onClick={() => handleDataChange("postTagsType", "filled")}
										     className={`font-medium w-5/12 h-[100px] flex items-center justify-center rounded-[8px] ${postCard.postTagsType === "filled" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
											<a className={`flex items-center px-3 text-label-large space-x-2 rounded-[8px] h-8 ${postCard.postTagsType === "filled" ? "bg-on-primary-container-light dark:bg-on-primary-container-dark text-primary-container-light dark:text-primary-container-dark" : "bg-on-surface-variant-light dark:bg-on-surface-variant-dark text-surface-container-light dark:text-surface-container-dark"}`}>
												<Icon className={"mr-1"} size={20}>
													tag
												</Icon>
												tag_name
											</a>
										</div>
										<div onClick={() => handleDataChange("postTagsType", "withBorder")}
										     className={`font-medium w-5/12 h-[100px] flex items-center justify-center rounded-[8px] ${postCard.postTagsType === "withBorder" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light dark:bg-primary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}>
											<a className={`border flex items-center px-3 text-label-large space-x-2 rounded-[8px] h-8 ${postCard.postTagsType === "withBorder" ? "border-on-primary-container-light dark:border-on-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "border-on-surface-variant-light dark:border-on-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
												<Icon className={"mr-1"} size={20}>
													tag
												</Icon>
												tag_name
											</a>
										</div>
									</div>
								</ul>
								<ul className={"pt-4"}>
									<li
										className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
										<div className={"mr-4"}>
											<label
												className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
												Post Tags Text Color
											</label>
										</div>
										<div className={"w-fit"}>
											<ColorPicker value={postCard["postTagsTextColor"]}
											             onChange={(value) => handleDataChange("postTagsTextColor", value)}/>
										</div>
									</li>
									{postCard.postTagsType === "filled" && <li
										className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
										<div className={"mr-4"}>
											<label
												className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
												Post Tags Background Color
											</label>
										</div>
										<div className={"w-fit"}>
											<ColorPicker value={postCard["postTagsBackgroundColor"]}
											             onChange={(value) => handleDataChange("postTagsBackgroundColor", value)}/>
										</div>
									</li>}
									{postCard.postTagsType === "withBorder" && <li
										className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
										<div className={"mr-4"}>
											<label
												className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
												Post Tags Border Color
											</label>
										</div>
										<div className={"w-fit"}>
											<ColorPicker value={postCard["postTagsBorderColor"]}
											             onChange={(value) => handleDataChange("postTagsBorderColor", value)}/>
										</div>
									</li>}
								</ul>
							</>}
						</>


						{/*	<ul className={"py-2 px-2"}>*/}
						{/*		{cardTypeList.map((item, index) => <li key={index} onClick={(e) => {*/}
						{/*			setInventoryCardType(index)*/}

						{/*		}}>*/}
						{/*			<input className={"hidden"} type="radio" id={index} name="fav_language"/>*/}
						{/*			<label className={"flex items-center"} htmlFor={index}>*/}
						{/*				<div*/}
						{/*					className={`relative ${inventoryCardType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>*/}
						{/*					{inventoryCardType === index ? <Icon*/}
						{/*							className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :*/}
						{/*						<Icon*/}
						{/*							className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}*/}
						{/*				</div>*/}
						{/*				<span*/}
						{/*					className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>*/}
						{/*               {item.title}*/}
						{/*                    </span>*/}
						{/*			</label>*/}
						{/*		</li>)}*/}
						{/*	</ul>*/}
						{/*	<div className={"w-full pt-2 pb-4"}>*/}
						{/*		<Divider type={"inset-middle"} className={""}/>*/}
						{/*	</div>*/}
						{/*	<div*/}
						{/*		className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
						{/*		<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
						{/*			Title*/}
						{/*		</h3>*/}
						{/*		<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
						{/*			Set title heading type*/}
						{/*		</p>*/}
						{/*	</div>*/}
						{/*	<div className={"py-2 px-4 max-w-xl grid grid-cols-6 gap-1"}>*/}
						{/*		{["h1", "h2", "h3", "h4", "h5", "h6"].map((item, index) => <div key={index}*/}
						{/*		                                                                onClick={() => updateInventoryCard("titleType", item)}*/}
						{/*		                                                                className={`relative overflow-hidden ${inventoryCard.titleType === item ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[64px] flex items-center justify-center `}>*/}
						{/*			<div*/}
						{/*				className={` ${inventoryCard.titleType === item ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-surface-container-light dark:text-surface-container-dark bg-on-surface-variant-light dark:bg-on-surface-variant-dark"} text-body-medium font-medium flex justify-center rounded-[8px] items-center w-[32px] h-[32px] `}>*/}
						{/*				{item.toUpperCase()}*/}
						{/*			</div>*/}
						{/*		</div>)}*/}
						{/*	</div>*/}
						{/*	<div className={"w-full pt-2 pb-4"}>*/}
						{/*		<Divider type={"inset-middle"} className={""}/>*/}
						{/*	</div>*/}
						{/*	<div*/}
						{/*		className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
						{/*		<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
						{/*			Inventory information*/}
						{/*		</h3>*/}
						{/*		<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
						{/*			Edit inventory information in card*/}
						{/*		</p>*/}
						{/*	</div>*/}
						{/*	<ul className={"mt-2"}>*/}
						{/*		<li*/}
						{/*			className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
						{/*			<div className={"mr-4"}>*/}
						{/*				<label*/}
						{/*					className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
						{/*					{"Show Vehicle More Info"}*/}
						{/*				</label>*/}
						{/*			</div>*/}
						{/*			<div className={"w-fit"}>*/}
						{/*				<Switch*/}
						{/*					setIsCheck={(v) => updateInventoryCard("showVehicleInfo", !inventoryCard.showVehicleInfo)}*/}
						{/*					isCheck={inventoryCard.showVehicleInfo}/>*/}

						{/*			</div>*/}
						{/*		</li>*/}
						{/*	</ul>*/}
						{/*	<div className={"px-4 mt-1 *:inline-flex max-w-xl *:mb-2 *:mr-2"}>*/}
						{/*		<FilterChips isChecked={inventoryInfoSelected.indexOf("miles") !== -1}*/}
						{/*		             onChange={() => handleInventoryInfoSelected("miles")}*/}
						{/*		             label="Miles"/>*/}
						{/*		<FilterChips isChecked={inventoryInfoSelected.indexOf("interior") !== -1}*/}
						{/*		             onChange={() => handleInventoryInfoSelected("interior")}*/}
						{/*		             label="Interior Color"/>*/}
						{/*		<FilterChips isChecked={inventoryInfoSelected.indexOf("est") !== -1}*/}
						{/*		             onChange={() => handleInventoryInfoSelected("est")}*/}
						{/*		             label="Est. payment"/>*/}
						{/*		<FilterChips isChecked={inventoryInfoSelected.indexOf("exterior") !== -1}*/}
						{/*		             onChange={() => handleInventoryInfoSelected("exterior")}*/}
						{/*		             label="Exterior Color"/>*/}
						{/*		<FilterChips isChecked={inventoryInfoSelected.indexOf("body_type") !== -1}*/}
						{/*		             onChange={() => handleInventoryInfoSelected("body_type")}*/}
						{/*		             label="Body Type"/>*/}
						{/*		<FilterChips isChecked={inventoryInfoSelected.indexOf("trim") !== -1}*/}
						{/*		             onChange={() => handleInventoryInfoSelected("trim")} label="Trim"/>*/}
						{/*		<FilterChips isChecked={inventoryInfoSelected.indexOf("fuel_type") !== -1}*/}
						{/*		             onChange={() => handleInventoryInfoSelected("fuel_type")}*/}
						{/*		             label="Fuel Type"/>*/}
						{/*	</div>*/}
						{/*	<div className={"w-full pt-2 pb-4"}>*/}
						{/*		<Divider type={"inset-middle"} className={""}/>*/}
						{/*	</div>*/}
						{/*	{inventoryCardType !== 0 && <div*/}
						{/*		className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
						{/*		<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
						{/*			Card Button*/}
						{/*		</h3>*/}
						{/*		<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
						{/*			Edit show more button*/}
						{/*		</p>*/}
						{/*	</div>}*/}
						{/*	{inventoryCardType !== 0 && <ul className={"py-2"}>*/}
						{/*		{inventoryCardType !== 0 &&*/}
						{/*			<li*/}
						{/*				className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
						{/*				<div className={"mr-4"}>*/}
						{/*					<label*/}
						{/*						className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
						{/*						{"'Read More' Button"}*/}
						{/*					</label>*/}
						{/*				</div>*/}
						{/*				<div className={"w-fit"}>*/}
						{/*					<Switch*/}
						{/*						setIsCheck={(v) => updateInventoryCard("showReadMoreButton", !inventoryCard.showReadMoreButton)}*/}
						{/*						isCheck={inventoryCard.showReadMoreButton}/>*/}

						{/*				</div>*/}
						{/*			</li>}*/}
						{/*		{inventoryCardType !== 0 &&*/}
						{/*			<li*/}
						{/*				className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
						{/*				<div className={"mr-4"}>*/}
						{/*					<label*/}
						{/*						className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
						{/*						{"Show button style like text"}*/}
						{/*					</label>*/}
						{/*				</div>*/}
						{/*				<div className={"w-fit"}>*/}
						{/*					<Switch*/}
						{/*						setIsCheck={(v) => updateInventoryCard("buttonType", inventoryCard.buttonType === 0 ? 1 : 0)}*/}
						{/*						isCheck={inventoryCard.buttonType === 1}/>*/}

						{/*				</div>*/}
						{/*			</li>}*/}
						{/*	</ul>}*/}
						{/*	<div className={"w-full pt-2 pb-4"}>*/}
						{/*		<Divider type={"inset-middle"} className={""}/>*/}
						{/*	</div>*/}
						{/*	<div*/}
						{/*		className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
						{/*		<h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
						{/*			Card Appearance*/}
						{/*		</h3>*/}
						{/*		<p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
						{/*			Edit website inventory card design*/}
						{/*		</p>*/}
						{/*	</div>*/}
						{/*	<ul className={"py-2"}>*/}
						{/*		{cardAppearanceList.map((item, index) => <li key={index}*/}
						{/*		                                             className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
						{/*			<div className={"mr-4"}>*/}
						{/*				<label*/}
						{/*					className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
						{/*					{item.title}*/}
						{/*				</label>*/}
						{/*			</div>*/}
						{/*			<div className={"w-fit"}>*/}
						{/*				<ColorPicker value={inventoryCard[item.key]}*/}
						{/*				             onChange={(value) => updateInventoryCard(item.key, value)}/>*/}
						{/*			</div>*/}
						{/*		</li>)}*/}
						{/*	</ul>*/}


					</div>


				</div>
			</div>
		</>
	)
}