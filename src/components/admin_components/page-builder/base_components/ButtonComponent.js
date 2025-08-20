'use client';
import React, {useEffect, useState, Fragment, useMemo} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Transition, Dialog} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {StyleToClass} from "@/_helper/StyleToClass";
import {rgbaObjToRgba} from '@/_helper/rgbaObjtoRgba'
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";

export default function ButtonComponent({
	                                        fields,
	                                        editDialogOpenComponentId,
	                                        setEditDialogOpenComponentId,
	                                        color,
	                                        isDesktop,
	                                        item,
	                                        editItem,
	                                        removeItemFunc,
	                                        dragFunc
                                        }) {
	let [isSelected, setIsSelected] = useState(false)
	let [value, setValue] = useState(item.value || item.idType)
	let [link, setLink] = useState(item.link || "")
	let [justify, setJustify] = useState(item.justify || "start")
	let [styles, setStyles] = useState(item?.styles)
	const [editMode, setEditMode] = useState("value")
	let onChangeStyles = (name, value, type, pseudo, fieldId) => {
		let nStyles = {...styles}
		let nStylesField = {...nStyles[fieldId]}
		let nStylesType = {...nStylesField[type]}
		nStylesType[pseudo] = {...nStylesType[pseudo], [name]: value}
		nStylesField[type] = nStylesType
		nStyles[fieldId] = nStylesField
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	useEffect(() => {
		if (!styles.basic.global.base.color) {
			onChangeStyles('color', rgbaObjToRgba(color.onPrimary), 'global','base','basic')
		}
		if (!styles.basic.global.base.backgroundColor) {
			onChangeStyles('backgroundColor', rgbaObjToRgba(color.primary), 'global','base','basic')
		}
	}, [styles])
	const changeHandler = (key, value) => {
		editItem(key, value)
	}
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
			<div>

				<div className={`flex relative hover:outline hover:outline-tertiary-light ${item.uniqueId}`}>

					<button
						style={isDesktop ? {...styles.basic.global.base, ...styles.basic.desktop.base} : {...styles.basic.mobile.base, ...styles.basic.global.base}}>
						{value}
					</button>

					<div
						className={`absolute z-[888] hidden ${item.uniqueId}-panel  -top-[24px] left-1/2 -translate-x-1/2 transform `}>
						<div
							className={"px-3 space-x-3 flex rounded-t-[8px] bg-tertiary-light"}>
							<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  bg-tertiary-light "}>
								<Icon size={16}
								      className={" !text-on-tertiary-light text-[20px]"}>
									edit
								</Icon>
							</button>
							<button onClick={() => copyToClipboard()}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
								<Icon size={16}
								      className={"!text-on-tertiary-light text-[20px]"}>
									content_copy
								</Icon>
							</button>
							<button onDragOver={(event) => {
								event.preventDefault();
								removeItemFunc()
							}} onDragStart={(e) => dragFunc(e)} draggable={true}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
								<Icon size={16}
								      className={"!text-on-tertiary-light text-[20px]"}>
									drag_indicator
								</Icon>
							</button>
							<button
								className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  "}>
								<Icon onClick={removeItemFunc} size={16}
								      className={"!text-on-tertiary-light text-[20px]"}>
									delete
								</Icon>
							</button>
						</div>
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
					{fields.map((fieldsCat, i) =>
						<div key={i} onClick={() => {
							setEditMode(fieldsCat.id)
						}}
						     className={`${editMode === fieldsCat.id ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} relative w-6/12 flex justify-center items-center h-full`}>
							{fieldsCat.name}
							{editMode === fieldsCat.id && <div
								className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}

						</div>
					)}
				</div>
				{editMode === "value" && <div className={"px-4 mt-6"}>
					<TextField id={"ef"} key={1} label={"Text"}
					           onChange={(e) => {
						           changeHandler("value", e.target.value)
						           setValue(e.target.value)
					           }} defaultValue={value}/>
					<TextField id={"mm"} key={2} className={"mt-4"} label={"Link"}
					           onChange={(e) => {
						           changeHandler("link", e.target.value)
						           setLink(e.target.value)
					           }}
					           defaultValue={link}/>
					<div className={"px-4 h-[64px] flex justify-between items-center "}>
						<label
							className={" text-title-small font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							Justify
						</label>
						<div className={"mt-1 flex justify-end space-x-1"}>
							<button onClick={(e) => {
								changeHandler("justify", "flex-start")
								setJustify("flex-start")
							}}
							        className={`${justify === "flex-start" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_flex_start
								</Icon>
							</button>
							<button onClick={(e) => {
								changeHandler("justify", "center")
								setJustify("center")
							}}
							        className={`${justify === "center" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_center
								</Icon>
							</button>
							<button onClick={(e) => {
								changeHandler("justify", "flex-end")
								setJustify("flex-end")
							}}
							        className={`${justify === "flex-end" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_flex_end
								</Icon>
							</button>
						</div>
					</div>
				</div>}
				{fields.map((fieldCat, i) =>
					(editMode === fieldCat.id && fieldCat.fields) && fieldCat.fields.map((field, index) =>
						<StyleFieldGenerator
							onChange={(name, value, type, pseudo) => onChangeStyles(name, value, type, pseudo, fieldCat.id)}
							isDesktop={isDesktop} styles={styles[fieldCat.id]}
							key={item.uniqueId + fieldCat.id + field.type + "style-field-generator" + index} field={field}/>)
				)}
			</EditorDialog>

		</>
	)
}