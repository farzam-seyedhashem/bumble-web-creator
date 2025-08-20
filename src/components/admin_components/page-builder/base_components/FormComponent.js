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

export default function FormComponent({
	                                     fields,
	                                     editDialogOpenComponentId,
	                                     setEditDialogOpenComponentId,
	                                     color,
	                                     dragFunc,
	                                     removeItemFunc,
	                                     isDesktop,
	                                     editItem,
	                                     item,
                                     }) {

	const [localItem, setLocalItem] = useState(item)
	const [addedItems, setAddedItems] = useState(item.addedItems)
	const [activeQuestion, setActiveQuestion] = useState(1)
	const [editMode,setEditMode] = useState('value')
	let [styles, setStyles] = useState(item?.styles)
	let onChangeStyles = (name, value, type,pseudo) => {
		let nStyles = {...styles}
		let nStylesType = {...nStyles[type]}
		nStylesType[pseudo] = {...nStylesType[pseudo], [name]: value}
		nStyles[type]=nStylesType
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
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
	const addNewField=()=>{
		let items = [...addedItems]
		items.push( {
			"desktopColumn": 12,
			"mobileColumn": 12,
			"placeholder": "",
			"label": "Label",
			"defaultValue": "",
			"name": "",
			"id": "",
			"filedType":"text",
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
			<div className={`${item.uniqueId} w-full hover:outline hover:outline-primary-light/[50%]  rounded-[4px] relative`}>
				<form style={isDesktop ? {...styles.global.base, ...styles.desktop.base} : {...styles.mobile.base, ...styles.global.base}}>
				<div  className={"w-full grid grid-cols-12 gap-4"}>
					{addedItems.map((item,index)=> <div
						className={`${isDesktop ? ("col-span-" + item.desktopColumn) : ("col-span-" + item.mobileColumn)}`}
						key={index}>
						{item.type === "text-field" && <div

							className={`bg-surface-container-highest-light dark:bg-surface-container-highest-dark relative h-[56px] rounded-t-[4px] w-full min-w-[20px]`}>
							<input type={item.filedType?item.filedType:"text"} onChange={onChange || null} value={item.value}
							       placeholder={item.placeholder}
							       className="peer h-full w-full border-0 border-b border-on-surface-variant-light dark:border-on-surface-variant-dark bg-transparent px-4 pt-6 font-sans text-body-large font-normal text-on-surface-light dark:text-on-surface-dark outline outline-0 transition-all placeholder-shown:border-on-surface-variant-light dark:placeholder-shown:border-on-surface-variant-dark dark:focus:border-on-surface-variant-dark focus:border-on-surface-variant-light focus:outline-0 placeholder:opacity-0 "/>
							{/*transform top-1/2 -translate-y-1/2*/}
							{/*peer-focus:top-2 peer-focus:translate-y-0*/}
							<label
								className="peer-focus:top-2 peer-focus:translate-y-0 top-2 transform translate-y-0 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 left-4   after:content[''] pointer-events-none absolute  flex  w-full select-none !overflow-visible truncate text-body-small font-normal  text-on-surface-variant-light dark:text-on-surface-variant-dark transition-all after:absolute  after:block after:w-full after:scale-x-0   after:transition-transform after:duration-300 peer-placeholder-shown:text-body-large dark:peer-placeholder-shown:text-on-surface-variant-dark peer-placeholder-shown:text-on-surface-variant-light peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-primary-light dark:peer-focus:text-primary-dark peer-focus:after:scale-x-100   peer-disabled:text-transparent">
								{item.label}
							</label>
							<legend
								className="left-0  -top-1.5 after:-bottom-1.5 peer-placeholder-shown:leading-[4.25] after:content[''] pointer-events-none absolute  flex h-full w-full select-none !overflow-visible truncate text-body-large font-normal  text-gray-500 transition-all after:absolute  after:block after:w-full after:scale-x-0 after:border-b-[2px] after:border-primary-light dark:after:border-primary-dark after:transition-transform after:duration-300 peer-placeholder-shown:text-sm  peer-placeholder-shown:text-blue-gray-500 peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-light dark:peer-focus:after:border-primary-dark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								<span></span>
							</legend>
						</div>
						}
					{item.type === "text-area" && <FilledTextArea label={item.label} value={item.value}/>}
					{item.type === "select" && <FilledSelect label={item.label} value={item.value}/>}
				</div>
					)}
			</div>
		</form>
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
		<div
			className={" flex border-b border-outline-variant-light dark:border-outline-variant-dark items-center h-[48px]"}>
			<div onClick={() => setEditMode("value")}
			     className={`${editMode === "value" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} w-6/12 relative flex justify-center items-center h-full`}>
				<Icon className={"mr-2"}>
					Title
				</Icon>
				Value
				{editMode === "value" && <div
					className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}
			</div>
			<div onClick={() => setEditMode("style")}
			     className={`${editMode === "style" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} relative w-6/12 flex justify-center items-center h-full`}>
						<Icon className={"mr-2"}>
							style
						</Icon>
						Style
						{editMode === "style" && <div
							className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}

					</div>
				</div>
				{(editMode === "style" && fields) && fields.map((field, index) => <StyleFieldGenerator
					onChange={onChangeStyles} isDesktop={isDesktop} styles={styles} key={index} field={field}/>)}

				{editMode === "value" && addedItems.map((item, index) => activeQuestion === index ?
					<li onClick={() => setActiveQuestion(index)} key={index}
					    className={"px-4"}>
						<div
							className={"px-4 py-4 rounded-[8px] bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
							<div className={"mb-2 flex items-center"}>
								<Icon className={"mr-2"}>
									drag_handle
								</Icon>
								Field {index + 1}
							</div>
							<div className={"space-y-4"}>
								<Select label={"Type"} onChange={(e) => editItemC(index, "type", e.target.value)}
								        options={[{title: "Text Filed", value: "text-field"}, {
									        title: "Text Area",
									        value: "text-area"
								        }, {title: "Select", value: "select"}]}/>
								{item.type==="text-field"&&<Select label={"Text Filed Type"} onChange={(e) => editItemC(index, "filedType", e.target.value)}
								         options={[{title: "Text", value: "text"}, {
									         title: "Email",
									         value: "email"
								         }, {title: "Tel", value: "tel"},{title: "Password", value: "password"}]}/>}
								<TextField label={"Label"}
								           onChange={(e) => editItemC(index, "label", e.target.value)}/>
								<TextField label={"Name"}
								           onChange={(e) => editItemC(index, "name", e.target.value)}/>
								<TextField label={"Id"}
								           onChange={(e) => editItemC(index, "description", e.target.value)}/>

								<TextField label={"Default Value"}
								           onChange={(e) => editItemC(index, "defaultValue", e.target.value)}/>
								<Switch  setIsCheck={()=>editItemC(index, "isRequired", !item.isRequired)} isCheck={item.isRequired}/>
								<div
									className={"w-11/12 mt-2 rounded-full ml-auto bg-surface-variant-light dark:bg-surface-variant-dark"}>
									<div className={"grid grid-cols-12 gap-1 h-[40px]"}>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, i) => <div
											className={`${(isDesktop ? m === item.desktopColumn : m === item.mobileColumn) ? "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light dark:text-on-surface-variant-dark"} h-[40px] cursor-pointer w-full flex justify-center items-center text-label-large rounded-full`}
											key={index}
											onClick={() => editItemC(index, (isDesktop ? "desktopColumn" : "mobileColumn"), m)}>
											{m}
										</div>)}
									</div>
								</div>
							</div>
						</div>

					</li> : <li onClick={() => setActiveQuestion(index)} key={index}
					            className={"hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[56px] px-4 flex items-center"}>
						<Icon className={"mr-2"}>
							drag_handle
						</Icon>
						Field {index + 1}

					</li>)}
				<Button onClick={()=>addNewField()} icon={"add"}>
					Add New Field
				</Button>

			</EditorDialog>

		</>
	)
}