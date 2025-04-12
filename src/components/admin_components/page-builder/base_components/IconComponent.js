'use client';
import React, {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Dialog, Transition} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import IconPicker from "@page_builder/editor_components/IconPicker";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import {StyleToClass} from "@/_helper/StyleToClass";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";

export default function IconComponent({
	                                      editDialogOpenComponentId,
	                                      setEditDialogOpenComponentId,
	                                      color,
	                                      isDesktop,
	                                      editItem,
	                                      item,
	                                      key,
	                                      removeItemFunc,
	                                      dragFunc
                                      }) {
	let [isSelected, setIsSelected] = useState(false)
	let [value, setValue] = useState(item.value || "star")
	// const [styles, setStyles] = useState(item?.styles)
	let [className, setClassName] = useState(item?.className)
	let [isFill, setIsFill] = useState(item?.isFill)
	let [styles, setStyles] = useState(item?.styles)
	let [globalRenderStyles, setGlobalRenderStyles] = useState(item.styles["global"])
	const [editMode, setEditMode] = useState("value")

	useEffect(() => {
		if (!globalRenderStyles.color) {
			onChangeGlobal('color', rgbaObjToRgba(color.onSurfaceVariant))
		}
	}, [styles])
	let onChangeGlobal = (name, value) => {
		let styles = {...globalRenderStyles, [name]: value}
		setGlobalRenderStyles(styles)
		editItem("globalStyles", styles)
		editItem("className", className)
	}
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	let onIconSelect = (selectedIcon, isFilled) => {
		setValue(selectedIcon)
		setIsFill(isFilled)
		editItem("value", value)
		editItem("isFill", selectedIcon)
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
			<div style={isDesktop ? {
				display: styles.desktop?.display || "block",
				alignItems: styles.desktop?.alignItems || "flex-start",
				justifyContent: styles.desktop?.justifyContent || "flex-start"
			} : {
				display: styles.mobile?.display || "block",
				alignItems: styles.mobile?.alignItems || "flex-start",
				justifyContent: styles.mobile?.justifyContent || "flex-start"
			}}>

				<Icon fill={isFill ? 1 : 0} weight={styles[isDesktop ? "desktop" : "mobile"].fontWeight}
				      size={styles[isDesktop ? "desktop" : "mobile"].fontSize} id={key}
				      className={`relative ${item.uniqueId} w-full`}
				      style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}>
					{value}
					<div
						className={`absolute hidden ${item.uniqueId}-panel  -top-[24px] left-1/2 -translate-x-1/2 transform `}>
						<div
							className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-tertiary-container-dark bg-tertiary-container-light"}>
							<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
								<Icon size={16}
								      className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
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
							}} onDragStart={(e) => dragFunc(e)} draggable={true}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
								<Icon size={16}
								      className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
									drag_indicator
								</Icon>
							</button>
							<button
								className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
								<Icon onClick={removeItemFunc} size={16}
								      className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
									delete
								</Icon>
							</button>
						</div>
					</div>
				</Icon>
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
				{editMode === "style" && item.fields.map((field, index) => <StyleFieldGenerator
					onChange={onChangeStyles} isDesktop={isDesktop} styles={styles} key={index} field={field}/>)}
				{editMode === "value" && <div className={"h-[64px] px-4 mt-6"}>
					<IconPicker label={"Icon"} isFill={isFill} defValue={value}
					            onIconSelect={onIconSelect}/>
				</div>}
			</EditorDialog>

		</>
	)
}