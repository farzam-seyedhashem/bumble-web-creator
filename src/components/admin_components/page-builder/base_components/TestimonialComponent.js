'use client';
import React, {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Dialog, Transition} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {StyleToTailwind} from "@/_helper/StyleToTailwind";
import {StyleToClass} from "@/_helper/StyleToClass";
import {rgbaObjToRgba} from '@/_helper/rgbaObjtoRgba'
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import useSWR from 'swr'
import {Swiper, SwiperSlide} from "swiper/react";


const fetcher = (url) => fetch(url,{cache:'no-cache'}).then((r) => r.json())

export default function TestimonialComponents({
	                                              fields,
	                                              editDialogOpenComponentId,
	                                              setEditDialogOpenComponentId,
	                                              color,
	                                              dragFunc,
	                                              removeItemFunc,
	                                              isDesktop,
	                                              editItem,
	                                              item
                                              }) {

	const [localItem, setLocalItem] = useState(item)
	const {data, error, isLoading, mutate} = useSWR(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/testimonials?per_page=${localItem.numberLoad}`,
		fetcher
	)
	// useEffect(() => {
	// 	// mutate()
	// 	mutate()
	// },[localItem.numberLoad])
	// const
	let onChange = (key, value) => {
		setLocalItem({...localItem, [key]: value})
		editItem(key, value, item.uniqueId)
	}

	useEffect(() => {
		// setEditDialogOpenComponentId(item.uniqueId)
		// console.log(editDialogOpenComponentId)
		console.log("lweknfklw", editDialogOpenComponentId)
	}, [editDialogOpenComponentId])
	const copyToClipboard = () => {
		localStorage.setItem("clipboard", JSON.stringify(item))
	}
	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	return (
		<>
			<style>{`
				.${item.uniqueId}:hover .${item.uniqueId}-panel{
				display: block;
			}
			`}</style>
			<div className={`${item.uniqueId} hover:outline hover:outline-primary-light/[50%]  rounded-[4px] relative`}>
				<div className={"w-full"}>
					{localItem.type === 1 && <Swiper className={" w-full"}>
						{data.data.map((item) => <SwiperSlide key={item._id}>
							<div style={{backgroundColor: localItem.backgroundColor}}
							     className={"rounded-[24px] px-[80px] py-[80px]"}>
								<div style={{color: localItem.primaryTextColor}}
								     className={"text-headline-large font-black"}>
									“
									{item.description}
									”
								</div>
								<div style={{color: localItem.primaryTextColor}}
								     className={"text-title-large font-bold mt-10"}>
									{item.name}
								</div>
								<div style={{color: localItem.variantTextColor}}
								     className={"text-title-medium font-medium"}>
									{item.job} / {item.company}
								</div>
							</div>
						</SwiperSlide>)}
					</Swiper>}
					{localItem.type === 2 && <div
						className={`${isDesktop ? `grid-cols-${localItem.desktopColumn}` : `grid-cols-${localItem.mobileColumn}`} grid  gap-4`}>
						{data.data.map((item) => <div key={item._id} className={"h-full"}>
							<div style={{backgroundColor: localItem.backgroundColor}}
							     className={"rounded-[24px] h-full px-[40px] py-[40px]"}>
								<div style={{color: localItem.primaryTextColor}}
								     className={" text-title-large font-extrabold"}>
									“
									{item.description}
									{/*With Tarro, I don’t have to worry about employees taking sick days or vacations.*/}
									”
								</div>
								<div style={{color: localItem.primaryTextColor}}
								     className={"text-title-medium font-bold mt-10"}>
									{item.name}
								</div>
								<div style={{color: localItem.variantTextColor}}
								     className={"text-title-small font-medium"}>
									{item.job} / {item.company}
								</div>
							</div>
						</div>)}
					</div>}
				</div>
				<div
					className={`absolute hidden ${item.uniqueId}-panel z-[888]   -top-[32px] right-0  transform `}>
					<div
						className={"px-4 py-1 space-x-3 rounded-t-[8px] flex dark:bg-primary-dark bg-primary-light"}>

						<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								edit
							</Icon>
						</button>
						<button onClick={() => copyToClipboard()}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								content_copy
							</Icon>
						</button>
						<button onDragOver={(event) => {
							event.preventDefault();
							removeItemFunc()
						}} onDragStartCapture={(e) => dragFunc(e)} draggable={true}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={`${item.uniqueId} !text-on-primary-light dark:!text-on-primary-dark text-[20px]`}>
								drag_indicator
							</Icon>
						</button>
						<button
							className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  "}>
							<Icon onClick={removeItemFunc} size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								delete
							</Icon>
						</button>
					</div>
				</div>

			</div>
			<EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false}
			              setIsOpen={() => setEditDialogOpenComponentId(null)}>
				<h3 className={"px-4 pt-3 pb-2 mt-6  border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
					Style
				</h3>
				<div className={"px-4"}>
					<div
						className={" bg-surface-container-light flex items-center dark:bg-surface-container-dark rounded-full p-1"}>
						<div
							className={`rounded-full w-6/12 text-center px-4 py-2 ${localItem.type === 1 ? "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}
							onClick={() => onChange("type", 1)}>
							Slide
						</div>
						<div
							className={`rounded-full w-6/12 text-center px-4 py-2 ${localItem.type === 2 ? "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}
							onClick={() => onChange("type", 2)}>
							Grid
						</div>
					</div>
				</div>
				{<>
					<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Testimonial Setting
					</h3>
					<div className={"flex px-4 mt-2 justify-between items-center h-[64px]"}>
						<label
							className={" text-body-large font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							Number of data
						</label>
						<div className={"flex mt-0 justify-end"}>
							<input onChange={(e) => onChange("numberLoad", e.target.value)} type={"text"}
							       value={localItem?.numberLoad}
							       className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-[120px] border border-outline-light dark:border-outline-dark "}/>
						</div>
					</div>
				</>}
				<>
					<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Style
					</h3>
					<div
						className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
						<label
							className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
							Card Background Color
						</label>
						<ColorPicker onChange={(value) => onChange("backgroundColor", value)}
						             value={localItem["backgroundColor"]}/>
					</div>
					<div
						className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
						<label
							className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
							Arrow Background Color
						</label>
						<ColorPicker onChange={(value) => onChange("arrowBackgroundColor", value)}
						             value={localItem["arrowBackgroundColor"]}/>
					</div>
					<div
						className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
						<label
							className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
							Arrow Color
						</label>
						<ColorPicker onChange={(value) => onChange("arrowColor", value)}
						             value={localItem["arrowColor"]}/>
					</div>
					<div
						className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
						<label
							className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
							Primary Text Color
						</label>
						<ColorPicker onChange={(value) => onChange("primaryTextColor", value)}
						             value={localItem["primaryTextColor"]}/>
					</div>
					<div
						className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
						<label
							className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
							Variant Text Color
						</label>
						<ColorPicker onChange={(value) => onChange("variantTextColor", value)}
						             value={localItem["variantTextColor"]}/>
					</div>
				</>
				{localItem.type === 2 && <div>
					<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Number of column in desktop
					</h3>
					<div className={"px-4 flex justify-end"}>
						<div
							className={"flex rounded-full justify-between bg-surface-container-light dark:bg-surface-container-dark p-1 "}>
							{Array.from({length: 6}, (_, index) => index + 1).map(item => <div key={item}
							                                                                   onClick={() => onChange("desktopColumn", item)}
							                                                                   className={`h-[32px] flex items-center justify-center w-[32px] rounded-full text-label-large font-medium ${localItem.desktopColumn === item ? "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light  dark:text-on-surface-variant-dark"}`}>
								{item}
							</div>)}
						</div>
					</div>
					<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Number of column in mobile
					</h3>
					<div className={"px-4 flex justify-end"}>
						<div
							className={"flex rounded-full justify-between bg-surface-container-light dark:bg-surface-container-dark p-1 "}>
							{Array.from({length: 2}, (_, index) => index + 1).map(item => <div key={item}
							                                                                   onClick={() => onChange("mobileColumn", item)}
							                                                                   className={`h-[32px] flex items-center justify-center w-[32px] rounded-full text-label-large font-medium ${localItem.mobileColumn === item ? "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light  dark:text-on-surface-variant-dark"}`}>
								{item}
							</div>)}
						</div>
					</div>
				</div>}

				{/*<div className={"block items-center justify-between py-2"}>*/}
				{/*    <label*/}
				{/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*        Padding*/}
				{/*    </label>*/}
				{/*    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingTop"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.paddingTop : mobileRenderStyles.paddingTop}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Top*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingRight"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.paddingRight : mobileRenderStyles.paddingRight}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Right*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingBottom"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.paddingBottom : mobileRenderStyles.paddingBottom}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Bottom*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingLeft"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.paddingLeft : mobileRenderStyles.paddingLeft}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Left*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*</div>*/}
				{/*<div className={"block items-center justify-between py-2"}>*/}
				{/*    <label*/}
				{/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*        Margin*/}
				{/*    </label>*/}
				{/*    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"marginTop"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.marginTop : mobileRenderStyles.marginTop}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Top*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"marginRight"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.marginRight : mobileRenderStyles.marginRight}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Right*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"marginBottom"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.marginBottom : mobileRenderStyles.marginBottom}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Bottom*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"marginLeft"} onChange={onChange}*/}
				{/*                                 defValue={isDesktop ? desktopRenderStyles.marginLeft : mobileRenderStyles.marginLeft}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Left*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*</div>*/}
				{/*<div className={"block items-center justify-between py-2"}>*/}
				{/*    <label*/}
				{/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*        Border*/}
				{/*    </label>*/}
				{/*    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"borderTop"} onChange={onChange}*/}
				{/*                                 defValue={globalRenderStyles.borderTop}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Top*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"borderRight"} onChange={onChange}*/}
				{/*                                 defValue={globalRenderStyles.borderRight}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Right*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"borderBottom"} onChange={onChange}*/}
				{/*                                 defValue={globalRenderStyles.borderBottom}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Bottom*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"borderLeft"} onChange={onChange}*/}
				{/*                                 defValue={globalRenderStyles.borderLeft}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Left*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"col-span-2"}>*/}
				{/*            /!*<div className={"w-full justify-between items-center "}>*!/*/}
				{/*            /!*    <label*!/*/}
				{/*            /!*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*!/*/}
				{/*            /!*        Border Style*!/*/}
				{/*            /!*    </label>*!/*/}
				{/*            /!*    <div className={"w-full mt-2 justify-end"}>*!/*/}
				{/*            /!*        <select*!/*/}
				{/*            /!*            onChange={(e) => onChange("borderStyle", `${e.target.value} ${e.target.value} ${e.target.value} ${e.target.value}`)}*!/*/}
				{/*            /!*            value={renderStyles.borderStyle.split(" ")[0]}*!/*/}
				{/*            /!*            className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark border border-outline-light dark:border-outline-dark "}>*!/*/}
				{/*            /!*            <option label={"Solid"} value={"solid"}/>*!/*/}
				{/*            /!*            <option label={"Doted"} value={"dotted"}/>*!/*/}
				{/*            /!*            <option label={"Dashed"} value={"dashed"}/>*!/*/}
				{/*            /!*        </select>*!/*/}
				{/*            /!*    </div>*!/*/}
				{/*            /!*</div>*!/*/}
				{/*            <div className={"flex justify-between items-center pt-4 pb-2"}>*/}
				{/*                <label*/}
				{/*                    className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*                    Border color*/}
				{/*                </label>*/}
				{/*                <ColorPicker*/}
				{/*                    onChange={(value) => onChange("borderColor", value)}*/}
				{/*                    value={renderStyles.borderColor}/>*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*</div>*/}


			</EditorDialog>

		</>
	)
}