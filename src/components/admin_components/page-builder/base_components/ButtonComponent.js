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
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	useEffect(() => {
		if (!styles.global.color) {
			onChangeStyles('color', rgbaObjToRgba(color.onPrimary), 'global')
		}
		if (!styles.global.backgroundColor) {
			onChangeStyles('backgroundColor', rgbaObjToRgba(color.primary), 'global')
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
			<div style={isDesktop ? {
				display: styles.desktop?.display || "block",
				alignItems: styles.desktop?.alignItems || "flex-start",
				justifyContent: styles.desktop?.justifyContent || "flex-start"
			} : {
				display: styles.mobile?.display || "block",
				alignItems: styles.mobile?.alignItems || "flex-start",
				justifyContent: styles.mobile?.justifyContent || "flex-start"
			}}>

				<div className={`flex relative hover:outline hover:outline-tertiary-light ${item.uniqueId}`}>

					<button
						style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}>
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
				{(editMode === "style" && fields) && fields.map((field, index) => <StyleFieldGenerator
					onChange={onChangeStyles} isDesktop={isDesktop}
					styles={styles} key={index} field={field}/>)}


				{/*<div className={"flex justify-between items-center pt-4 pb-2"}>*/}
				{/*    <label*/}
				{/*        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*    Text Color*/}
				{/*    </label>*/}
				{/*    <ColorPicker value={globalRenderStyles.color}*/}
				{/*                 onChange={(color) => onChangeGlobal("color", color)}/>*/}
				{/*</div>*/}
				{/*<div className={"flex justify-between items-center pt-4 pb-2"}>*/}
				{/*    <label*/}
				{/*        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*        Background Color*/}
				{/*    </label>*/}
				{/*    <ColorPicker value={globalRenderStyles.backgroundColor}*/}
				{/*                 onChange={(color) => onChangeGlobal("backgroundColor", color)}/>*/}

				{/*</div>*/}
				{/*<div className={"grid grid-cols-12 gap-4 py-2"}>*/}
				{/*    <div className={"col-span-4 justify-between items-center"}>*/}
				{/*        <label*/}
				{/*            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*            Width*/}
				{/*        </label>*/}
				{/*        <div className={"mt-2"}>*/}
				{/*            <TextFieldEditor id={"width"} onChange={onChange}*/}
				{/*                             defValue={deviceStyle.width}/>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*    <div className={"col-span-4 justify-between items-center"}>*/}
				{/*        <label*/}
				{/*            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*            Height*/}
				{/*        </label>*/}
				{/*        <div className={"mt-2"}>*/}
				{/*            <TextFieldEditor id={"height"} onChange={onChange}*/}
				{/*                             defValue={deviceStyle.height}/>*/}
				{/*        </div>*/}
				{/*    </div>*/}

				{/*    <div className={"col-span-4 justify-between items-center"}>*/}
				{/*        <label*/}
				{/*            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*            Rounded*/}
				{/*        </label>*/}
				{/*        <div className={"mt-2"}>*/}
				{/*            <TextFieldEditor id={"borderRadius"} onChange={onChange}*/}
				{/*                             defValue={globalRenderStyles.borderRadius}/>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*    <div className={"col-span-8 justify-between items-center "}>*/}
				{/*        <label*/}
				{/*            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*            Font Weight*/}
				{/*        </label>*/}
				{/*        <div className={"w-full mt-2 justify-end"}>*/}
				{/*            <select onChange={(e) => onChange("fontWeight", e.target.value)}*/}
				{/*                    type={"text"}*/}
				{/*                    value={deviceStyle.fontWeight}*/}
				{/*                    className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>*/}
				{/*                <option label={"light"} value={"300"}/>*/}
				{/*                <option label={"normal"} value={"400"}/>*/}
				{/*                <option label={"medium"} value={"500"}/>*/}
				{/*                <option label={"bold"} value={"700"}/>*/}
				{/*                <option label={"black"} value={"900"}/>*/}
				{/*            </select>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*    <div className={"col-span-4 justify-between items-center"}>*/}
				{/*        <label*/}
				{/*            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*            Font Size*/}
				{/*        </label>*/}
				{/*        <div className={"mt-2"}>*/}
				{/*            <TextFieldEditor id={"fontSize"} onChange={onChange}*/}
				{/*                             defValue={deviceStyle.fontSize}/>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*</div>*/}
				{/*<div className={"block items-center justify-between py-2"}>*/}
				{/*    <label*/}
				{/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*        Padding*/}
				{/*    </label>*/}
				{/*    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingTop"} onChange={onChange}*/}
				{/*                                 defValue={deviceStyle.paddingTop}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Top*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingRight"} onChange={onChange}*/}
				{/*                                 defValue={deviceStyle.paddingRight}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Right*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingBottom"} onChange={onChange}*/}
				{/*                                 defValue={deviceStyle.paddingBottom}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Bottom*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"paddingLeft"} onChange={onChange}*/}
				{/*                                 defValue={deviceStyle.paddingLeft}/>*/}
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
				{/*                                 defValue={deviceStyle.marginTop}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Top*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"marginRight"} onChange={onChange}*/}
				{/*                                 defValue={deviceStyle.marginRight}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Right*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"marginBottom"} onChange={onChange}*/}
				{/*                                 defValue={deviceStyle.marginBottom}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Bottom*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*        <div className={"w-full"}>*/}
				{/*            <div>*/}
				{/*                <TextFieldEditor id={"marginLeft"} onChange={onChange}*/}
				{/*                                 defValue={deviceStyle.marginLeft}/>*/}
				{/*            </div>*/}
				{/*            <div*/}
				{/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*                Left*/}
				{/*            </div>*/}
				{/*        </div>*/}
				{/*    </div>*/}
				{/*</div>*/}


			</EditorDialog>

		</>
	)
}