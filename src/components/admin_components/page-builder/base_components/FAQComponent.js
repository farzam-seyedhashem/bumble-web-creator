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
import TextArea from "@m3/TextArea";

// const fetcher = (url) => fetch(url).then((r) => r.json())
// function FaqList(){
// 	const [selectedIndex, setSelectedIndex] = useState(0);
// 	return (
//
// 	)
// }

export default function FAQComponent({
	                                     fields,
	                                     editDialogOpenComponentId,
	                                     setEditDialogOpenComponentId,
	                                     color,
	                                     dragFunc,
	                                     removeItemFunc,
	                                     isDesktop,
	                                     editItem,
	                                     item,
	                                     key
                                     }) {

	const [localItem, setLocalItem] = useState(item)
	const [addedItems, setAddedItems] = useState(item.addedItems)
	const [activeQuestion, setActiveQuestion] = useState(1)
	// const [faqLists,setFaqLists] = useState(item.faqLists)
	// useEffect(() => {
	// 	// mutate()
	// 	mutate()
	// },[localItem.numberLoad])
	// const
	let editItemC = (number, key, value) => {
		let items = [...addedItems]
		items[number] = {...items[number], [key]: value}
		setAddedItems(items)
		editItem("addedItems", items, item.uniqueId)
	}
	let onChange = (key, value) => {
		setLocalItem({...localItem, [key]: value})
		editItem(key, value, item.uniqueId)
	}
	const [selectedIndex, setSelectedIndex] = useState(-1)
	useEffect(() => {
		// setEditDialogOpenComponentId(item.uniqueId)
		// console.log(editDialogOpenComponentId)
		console.log("lweknfklw", editDialogOpenComponentId)
	}, [editDialogOpenComponentId])
	const copyToClipboard = () => {
		localStorage.setItem("clipboard", JSON.stringify(item))
	}
	const styles = [
		{title: "Background Color", id: "cardBackgroundColor"},
		{title: "Card Header Color", id: "cardHeaderColor", showIn: 2},
		{title: "Question Text Color", id: "titleColor"},
		{title: "Question Icon Color", id: "iconColor"},
		{title: "Answer Text Color", id: "descriptionColor"},
	]
	// "type": 1,

	// 	"closeIcon": "chevronDown",
	// 	"openIcon": "chevron_up",
	// 	"haveShadow": true,
	// 	"haveBorder": false,
	// 	"haveDivider": true,
	// if (isLoading) return <div>Loading...</div>
	// if (error) return <div>Error: {error.message}</div>
	return (
		<>
			<style>{`
				.${item.uniqueId}:hover .${item.uniqueId}-panel{
				display: block;
			}
			`}</style>
			<div className={`${item.uniqueId} hover:outline hover:outline-primary-light/[50%]  rounded-[4px] relative`}>
				<div className={"w-full"}>
					{localItem.type === 1 && <div>
						<ul>
							{addedItems.map((item, index) =>
								<li style={{backgroundColor: localItem.cardBackgroundColor}} className={""}
								    onClick={() => setSelectedIndex(selectedIndex === index ? -1 : index)} key={index}>
									<div style={{color: localItem.titleColor}}
									     className={`${selectedIndex === index ? "border-b border-black border-opacity-40" : ""} p-8 text-title-medium font-bold h-[56px] flex items-center justify-between`}>
										{item.title}
										<Icon>
											keyboard_arrow_up
										</Icon>
									</div>
									<div style={{color: localItem.descriptionColor}}
									     className={`${selectedIndex === index ? "block" : "hidden"} p-8 `}>
										{item.description}
									</div>
								</li>
							)}
						</ul>
					</div>}
					{localItem.type === 2 && <div
						className={`${isDesktop ? `grid-cols-${localItem.desktopColumn}` : `grid-cols-${localItem.mobileColumn}`} grid  gap-4`}>
						{addedItems.map((item) => <div key={item._id}
						                               className={"h-full bg-surface-container-high-light"}>
							<div style={{backgroundColor: localItem.cardBackgroundColor}}
							     className={""}>
								<div style={{backgroundColor: localItem.cardHeaderColor}}
								     className={"text-title-small p-6"}>
									{item.title}
								</div>
								<div style={{color: localItem.primaryTextColor}}
								     className={"text-body-large p-6"}>
									{item.description}
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
				{addedItems.map((item, index) => activeQuestion === index ?
					<li onClick={() => setActiveQuestion(index)} key={index}
					    className={"px-4"}>
						<div
							className={"px-4 py-4 rounded-[8px] bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
							<div className={"mb-2 flex items-center"}>
								<Icon className={"mr-2"}>
									drag_handle
								</Icon>
								Question {index + 1}
							</div>
							<div>
								<TextField label={"Question"}
								           onChange={(e) => editItemC(index, "title", e.target.value)}/>
								<TextArea label={"Answer"}
								          onChange={(e) => editItemC(index, "description", e.target.value)}/>

							</div>
						</div>

					</li> : <li onClick={() => setActiveQuestion(index)} key={index}
					            className={"hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[56px] px-4 flex items-center"}>
						<Icon className={"mr-2"}>
							drag_handle
						</Icon>
						Question {index + 1}

					</li>)}

				<h3 className={"px-4 pt-3 pb-2 mt-6  border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
					Style
				</h3>
				<div className={"px-4"}>
					<div
						className={" bg-surface-container-light flex items-center dark:bg-surface-container-dark rounded-full p-1"}>
						<div
							className={`rounded-full w-6/12 text-center px-4 py-2 ${localItem.type === 1 ? "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}
							onClick={() => onChange("type", 1)}>
							Accordion
						</div>
						<div
							className={`rounded-full w-6/12 text-center px-4 py-2 ${localItem.type === 2 ? "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}
							onClick={() => onChange("type", 2)}>
							Grid
						</div>
						{/*<div*/}
						{/*	className={`rounded-full w-4/12 text-center px-4 py-2 ${localItem.type === 3 ? "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}*/}
						{/*	onClick={() => onChange("type", 3)}>*/}
						{/*	Slide*/}
						{/*</div>*/}
					</div>
				</div>
				<>
					<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Style
					</h3>
					{styles.map((s, index) =>
							(s.showIn ? s.showIn === localItem.type : true) && <div key={index}
							                                                        className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
								<label
									className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
									{s.title}
								</label>
								<ColorPicker onChange={(value) => onChange(s.id, value)}
								             value={localItem[s.id]}/>
							</div>
					)}
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