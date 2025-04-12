'use client';
import React, {useEffect, useState, Fragment, useRef} from "react";
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
import Button from "@m3/buttons/Button";

export default function Map({
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
	let [isSelected, setIsSelected] = useState(false)
	let [value, setValue] = useState(item.addr)

	let [globalRenderStyles, setGlobalRenderStyles] = useState(item.styles["global"])
	const [editMode, setEditMode] = useState("value")
	let [styles, setStyles] = useState(item?.styles)
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	useEffect(() => {
		if (!globalRenderStyles.color) {
			onChangeGlobal('color', rgbaObjToRgba(color.onSurface))
		}
	}, [globalRenderStyles])
	const valueChangeHandler = (value) => {
		setValue(value)
		editItem("addr", value, item.uniqueId)

	}
	let onChangeGlobal = (name, value) => {
		let styles = {...globalRenderStyles, [name]: value}
		setGlobalRenderStyles(styles)
		editItem("globalStyles", styles, item.uniqueId)
	}
	let mapRaf = useRef(null)
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
			<div style={isDesktop ? {
				display: styles.desktop?.display || "block",
				alignItems: styles.desktop?.alignItems || "flex-start",
				justifyContent: styles.desktop?.justifyContent || "flex-start"
			} : {
				display: styles.mobile?.display || "block",
				alignItems: styles.mobile?.alignItems || "flex-start",
				justifyContent: styles.mobile?.justifyContent || "flex-start"
			}}>

				<div id={key}
				     className={`${isSelected ? "outline outline-primary-light" : "hover:outline hover:outline-primary-light/[50%]"}  rounded-[4px] relative ${item.uniqueId}`}
				     style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}>

					<iframe
						ref={mapRaf}

						width="100%"
						height="100%"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
						src={`https://maps.google.com/maps?&q=${value}&z=14&t=q&output=embed`}
					>
					</iframe>
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
				{editMode === "value" && <div className={"mt-6"}>
					<TextField label={"Text"} onChange={(e) => valueChangeHandler(e.target.value)}
					           defaultValue={value}/>
				</div>}
			</EditorDialog>

		</>
	)
}