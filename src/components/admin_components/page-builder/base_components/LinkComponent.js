'use client';
import {useEffect, useState, Fragment} from "react";
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
import {uniqueId} from "lodash/util";
import FilledTextArea from "@m3/text_area/FilledTextArea";
import FilledTextField from "@m3/text_fields/FilledTextField";
import useSWR from "swr";

export default function LinkComponent({
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
	// let [Component, setComponent] = useState(item.type)
	let [isSelected, setIsSelected] = useState(false)
	let [value, setValue] = useState(item.value || item.idType)
	let [link, setLink] = useState(item.link || "#")
	let [styles, setStyles] = useState(item?.styles)
	const [editMode, setEditMode] = useState("value")
	const valueChangeHandler = (value) => {
		setValue(value)
		editItem("value", value, item.uniqueId)
	}
	const linkChangeHandler = (link) => {
		setLink(link)
		editItem("link", link, item.uniqueId)
	}
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
	const changeTypeHandler = (type) => [
		setComponent(type),
		editItem("type", type)
	]
	useEffect(() => {
		console.log("lweknfklw", editDialogOpenComponentId)
	}, [editDialogOpenComponentId])
	const copyToClipboard = () => {
		localStorage.setItem("clipboard", JSON.stringify(item))
	}
	return (
		<>
			<style>{`
				.${item.uniqueId}:hover .${item.uniqueId}-panel{
				display: block;
			}
			`}</style>
			<div className={"w-full block"}>
				<div id={item.uniqueId}
				           className={`${isSelected ? "outline outline-primary-light" : "hover:outline hover:outline-primary-light/[50%]"}   rounded-[4px] relative ${item.uniqueId}`}
				           style={isDesktop ? {...styles.global['base'], ...styles.desktop['base']} : {...styles.mobile['base'], ...styles.global['base']}}>
					{value}
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
			</div>
			{/*<div className={"inset-0 fixed top-0 left-0 bg-white z-1001"}>*/}

			{/*</div>*/}
			<EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false}
			              setIsOpen={() => setEditDialogOpenComponentId(null)}>
				<div
					className={" flex border-b *:text-title-small *:font-medium border-outline-variant-light dark:border-outline-variant-dark items-center h-[48px]"}>
					<div onClick={() => setEditMode("value")}
					     className={`${editMode === "value" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} w-6/12 relative flex justify-center items-center h-full`}>
						<Icon className={"mr-2"}>
							Title
						</Icon>
						Value
						{editMode === "value" && <div
							className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}
					</div>
					<div onClick={() => setEditMode("style")}
					     className={`${editMode === "style" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} relative w-6/12 flex justify-center items-center h-full`}>
						<Icon className={"mr-2"}>
							style
						</Icon>
						Style
						{editMode === "style" && <div
							className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}

					</div>
				</div>
				{(editMode === "style" && fields) && fields.map((field, index) => <StyleFieldGenerator
					onChange={onChangeStyles} isDesktop={isDesktop} styles={styles} key={item.uniqueId+field.type+"style-field-generator"+index} field={field}/>)}
				{editMode === "value" && <div className={"mt-4 "}>
					<div className={"px-4"}>
						<FilledTextField label={"Text"} onChange={(e) => valueChangeHandler(e.target.value)}
						           value={value}/>
					</div>
					<div className={"px-4"}>
						<FilledTextField label={"Link"} onChange={(e) => linkChangeHandler(e.target.value)}
						                 value={link}/>
					</div>
				</div>}


			</EditorDialog>

		</>
	)
}