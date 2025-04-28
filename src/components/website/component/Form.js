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
import FilledTextField from "@m3/text_fields/FilledTextField";
import FilledTextArea from "@m3/text_area/FilledTextArea";
import FilledSelect from "@m3/text_fields/FilledSelect";
import Select from "@m3/text_fields/Select";
import Button from "@m3/buttons/Button";
import Switch from "@m3/switch/Switch";

// const fetcher = (url) => fetch(url).then((r) => r.json())
// function FaqList(){
// 	const [selectedIndex, setSelectedIndex] = useState(0);
// 	return (
//
// 	)
// }

export default function Form({
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
	const [editMode, setEditMode] = useState('value')
	let [styles, setStyles] = useState(item?.styles)

	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
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
	const addNewField = () => {
		let items = [...addedItems]
		items.push({
			"desktopColumn": 12,
			"mobileColumn": 12,
			"placeholder": "",
			"label": "Label",
			"defaultValue": "",
			"name": "",
			"id": "",
			"filedType": "text",
			"type": "text-field",
			"isRequired": false,
		})
		setAddedItems(items)
		editItem("addedItems", items, item.uniqueId)
	}
	// const styles = [
	// 	{title: "Background Color", id: "cardBackgroundColor"},
	// 	{title: "Card Header Color", id: "cardHeaderColor", showIn: 2},
	// 	{title: "Question Text Color", id: "titleColor"},
	// 	{title: "Question Icon Color", id: "iconColor"},
	// 	{title: "Answer Text Color", id: "descriptionColor"},
	// ]
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
			<div
				className={`${item.uniqueId}`}>
				<form style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}>
					<div className={" w-full grid grid-cols-12 gap-4"}>
						{addedItems.map((item, index) => <div
								className={`${"md:col-span-" + item.desktopColumn + " col-span-" + item.mobileColumn}`}
								key={index}>
								{item.type === "text-field" && <div

									className={`bg-surface-container-highest-light  relative h-[56px] rounded-t-[4px] w-full min-w-[20px]`}>
									<input type={item.filedType ? item.filedType : "text"} onChange={onChange || null}
									       value={item.value}
									       placeholder={item.placeholder}
									       className="peer h-full w-full border-0 border-b border-on-surface-variant-light  bg-transparent px-4 pt-6 font-sans text-body-large font-normal text-on-surface-light outline outline-0 transition-all placeholder-shown:border-on-surface-variant-light   focus:border-on-surface-variant-light focus:outline-0 placeholder:opacity-0 "/>
									{/*transform top-1/2 -translate-y-1/2*/}
									{/*peer-focus:top-2 peer-focus:translate-y-0*/}
									<label
										className="peer-focus:top-2 peer-focus:translate-y-0 top-2 transform translate-y-0 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 left-4   after:content[''] pointer-events-none absolute  flex  w-full select-none !overflow-visible truncate text-body-small font-normal  text-on-surface-variant-light  transition-all after:absolute  after:block after:w-full after:scale-x-0   after:transition-transform after:duration-300 peer-placeholder-shown:text-body-large peer-placeholder-shown:text-on-surface-variant-light peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-primary-light  peer-focus:after:scale-x-100   peer-disabled:text-transparent">
										{item.label}
									</label>
									<legend
										className="left-0  -top-1.5 after:-bottom-1.5 peer-placeholder-shown:leading-[4.25] after:content[''] pointer-events-none absolute  flex h-full w-full select-none !overflow-visible truncate text-body-large font-normal  text-gray-500 transition-all after:absolute  after:block after:w-full after:scale-x-0 after:border-b-[2px] after:border-primary-light  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm  peer-placeholder-shown:text-blue-gray-500 peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-light peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
										<span></span>
									</legend>
								</div>
								}
								{item.type === "text-area" && <div
									className={`bg-surface-container-highest-light  h-[100px] relative pt-6 rounded-t-[4px] w-full min-w-[200px]`}>
            <textarea onChange={onChange || null} rows={3} value={item.value} placeholder={item.label}
                      className="h-full resize-none overflow-hidden peer w-full border-0 border-b border-on-surface-variant-light  bg-transparent px-4 font-sans text-body-large font-normal text-on-surface-light  outline outline-0 transition-all placeholder-shown:border-on-surface-variant-light  focus:border-on-surface-variant-light focus:outline-0 placeholder:opacity-0 "></textarea>
									{/*transform top-1/2 -translate-y-1/2*/}
									{/*peer-focus:top-2 peer-focus:translate-y-0*/}
									<label
										className="peer-focus:top-2 peer-focus:translate-y-0 top-2 transform translate-y-0 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 left-4   after:content[''] pointer-events-none absolute  flex  w-full select-none !overflow-visible truncate text-body-small font-normal  text-on-surface-variant-light  transition-all after:absolute  after:block after:w-full after:scale-x-0   after:transition-transform after:duration-300 peer-placeholder-shown:text-body-large  peer-placeholder-shown:text-on-surface-variant-light peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-primary-light  peer-focus:after:scale-x-100   peer-disabled:text-transparent">
										{item.label}
									</label>
									<legend
										className="left-0  -top-1.5 after:-bottom-1.5 peer-placeholder-shown:leading-[4.25] after:content[''] pointer-events-none absolute  flex h-full w-full select-none !overflow-visible truncate text-body-large font-normal  text-gray-500 transition-all after:absolute  after:block after:w-full after:scale-x-0 after:border-b-[2px] after:border-primary-light  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm  peer-placeholder-shown:text-blue-gray-500 peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-light  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
										<span></span>
									</legend>
								</div>}
								{/*{item.type === "text-area" && <FilledTextArea label={item.label} value={item.value}/>}*/}
								{item.type === "select" && <FilledSelect label={item.label} value={item.value}/>}
							</div>
						)}
					</div>
				</form>
			</div>

		</>
	)
}