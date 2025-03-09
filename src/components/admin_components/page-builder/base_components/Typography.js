'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Dialog, Transition} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {StyleToTailwind} from "@frontend/_helper/StyleToTailwind";
import {StyleToClass} from "@frontend/_helper/StyleToClass";
import {rgbaObjToRgba} from '@frontend/_helper/rgbaObjtoRgba'
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";

export default function TextComponents({editDialogOpenComponentId,setEditDialogOpenComponentId,color, dragFunc, removeItemFunc, isDesktop, editItem, item, key}) {
	let [Component, setComponent] = useState(item.type)
	let [isSelected, setIsSelected] = useState(false)
	let [value, setValue] = useState(item.value || item.idType)
	let [styles, setStyles] = useState(item?.styles)
	const [editMode, setEditMode] = useState("value")
	const valueChangeHandler = (value) => {
		setValue(value)
		editItem("value", value, item.uniqueId)
	}
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	const changeTypeHandler = (type) => [
		setComponent(type),
		editItem("type", type)
	]
	useEffect(() => {
		// setEditDialogOpenComponentId(item.uniqueId)
		// console.log(editDialogOpenComponentId)
		console.log("lweknfklw",editDialogOpenComponentId)
	},[editDialogOpenComponentId])

	return (
		<>
			<Component id={key}
			           className={`${isSelected ? "outline outline-primary-light" : "hover:outline hover:outline-primary-light/[50%]"}  rounded-[4px] relative group/typography`}
			           style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}>
				{value}
				<div
					className={"absolute hidden group-hover/typography:block z-[888]   -top-[32px] right-0  transform "}>
					<div
						className={"px-4 py-1 space-x-3 rounded-t-[8px] flex dark:bg-primary-dark bg-primary-light"}>
						<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								edit
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

			</Component>
			<EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false} setIsOpen={()=>setEditDialogOpenComponentId(null)}>
				<div
					className={" flex border-b border-outline-variant-light dark:border-outline-variant-dark items-center h-[48px]"}>
					<div onClick={() => setEditMode("value")}
					     className={`${editMode === "value" ? "text-primary-light dark:text-primary-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"} w-6/12 relative flex justify-center items-center h-full`}>
						<Icon className={"mr-2"}>
							Title
						</Icon>
						Value
						{editMode === "value" && <div
							className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}
					</div>
					<div onClick={() => setEditMode("style")}
					     className={`${editMode === "style" ? "text-primary-light dark:text-primary-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"} relative w-6/12 flex justify-center items-center h-full`}>
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
				{editMode === "value" && <div className={"mt-4 "}>
					<div className={"px-4"}>
					<TextField label={"Text"} onChange={(e) => valueChangeHandler(e.target.value)}
					           defaultValue={value}/>
					</div>
					<div className={" mt-3 justify-end"}>
						<label
							className={"px-4 text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
							Headline Type
						</label>
						<div
							className={"py-2 w-full"}>
							<ul>
								<li onClick={() => changeTypeHandler("h1")}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${Component === "h1" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{Component === "h1" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Headline 1
								</li>
								<li onClick={() => changeTypeHandler("h2")}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${Component === "h2" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{Component === "h2" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Headline 2
								</li>
								<li onClick={() => changeTypeHandler("h3")}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${Component === "h3" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{Component === "h3" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Headline 3
								</li>
								<li onClick={() => changeTypeHandler("h4")}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${Component === "h4" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{Component === "h4" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Headline 4
								</li>
								<li onClick={() => changeTypeHandler("h5")}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${Component === "h5" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{Component === "h5" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Headline 5
								</li>
								<li onClick={() => changeTypeHandler("h6")}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${Component === "h6" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{Component === "h6" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Headline 6
								</li>
							</ul>
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