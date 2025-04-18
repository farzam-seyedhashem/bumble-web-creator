'use client';
import React, {useEffect, useState, Fragment, useRef} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import {Transition, Dialog} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import {UploadFile} from "@frontend/client_action/File";
import {StoreFile} from "@backend/server_action/Files";
import {FileUploadStorageURL} from "@/config";
// import {json} from "next/dist/client/components/react-dev-overlay/server/shared";

export default function PostThumbnailComponent({
	                                       fields,
	                                       editDialogOpenComponentId,
	                                       setEditDialogOpenComponentId,
	                                       isDesktop,
	                                       item,
	                                               lastPost,
	                                       editItem,
	                                       removeItemFunc,
	                                       dragFunc
                                       }) {
	let [isSelected, setIsSelected] = useState(false)
	let [post, setPost] = useState(lastPost?.data[0])
	let [styles, setStyles] = useState(item?.styles)
	const [editMode, setEditMode] = useState("style")
	const fileInputRef = useRef(null);
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}

		nStyles[type] = {...nStyles[type], [name]: value}
		// setGlobalRenderStyles(styles)
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	let handleChangeValue = (value) => {
		const file = JSON.parse(value)
		// setValue(file.url)
		editItem("value", file.url)
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

				<div className={`relative hover:border hover:border-tertiary-light ${item.uniqueId}`}>
					{post.thumbnail ?
						<img className={"z-[1]"}
						     style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}
						     onClick={() => setIsSelected(true)} src={FileUploadStorageURL+post.thumbnail.name}/> :
						<div
							style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}
							onClick={() => setIsSelected(true)}
							className={"flex justify-center items-center bg-surface-variant-light dark:bg-surface-variant-dark " + item?.className}>
							<Icon
								className={"text-[48px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								image
							</Icon>
						</div>
					}
					<div
						className={`absolute  z-[888] hidden ${item.uniqueId}-panel  top-[0px] left-1/2 -translate-x-1/2 transform `}>
						<div
							className={"px-3 space-x-3 flex rounded-b-[8px] dark:bg-tertiary-dark bg-tertiary-light"}>
							<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   bg-tertiary-light "}>
								<Icon size={16}
								      className={"text-on-tertiary-light text-[20px]"}>
									edit
								</Icon>
							</button>
							<button onClick={() => copyToClipboard()}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full    bg-tertiary-light"}>
								<Icon size={16}
								      className={"text-on-tertiary-light text-[20px]"}>
									content_copy
								</Icon>
							</button>
							<button onDragOver={(event) => {
								event.preventDefault();
								removeItemFunc()
							}} onDragStart={(e) => dragFunc(e)} draggable={true}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  bg-tertiary-light "}>
								<Icon size={16}
								      className={"text-on-tertiary-light text-[20px]"}>
									drag_indicator
								</Icon>
							</button>
							<button
								className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   bg-tertiary-light "}>
								<Icon onClick={removeItemFunc} size={16}
								      className={"text-on-tertiary-light text-[20px]"}>
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
					onChange={onChangeStyles} isDesktop={isDesktop}
					styles={styles} key={index} field={field}/>)}

				{/*{editMode === "value" && <div className={"px-4 grid grid-cols-12 gap-4 py-2"}>*/}
				{/*	<div className={"col-span-12 flex item  items-center py-2"}>*/}
				{/*		<div className={"mr-2"}>*/}
				{/*			<label className={"text-on-surface-light dark:text-on-surface-dark"}*/}
				{/*			       htmlFor={"imageFile"}>*/}
				{/*				{value ? <img className={"rounded-[4px] w-[40px] h-[40px]"}*/}
				{/*				              src={value}/>*/}
				{/*					:*/}
				{/*					<div*/}
				{/*						className={"rounded-[4px] dark:bg-surface-container-high-dark bg-surface-container-high-light flex justify-center items-center w-[64px] h-[64px]"}*/}
				{/*					>*/}
				{/*						<Icon*/}
				{/*							className={"text-[24px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
				{/*							image*/}
				{/*						</Icon>*/}
				{/*					</div>}*/}
				{/*			</label>*/}
				{/*			<input ref={fileInputRef} accept={"image/jpeg"}*/}
				{/*			       name={"files"}*/}
				{/*			       onChange={async (e) => {*/}

				{/*				       const file = fileInputRef.current.files[0]*/}
				{/*				       const res = await UploadFile(file)*/}
				{/*				       handleChangeValue(await StoreFile(res))*/}
				{/*			       }}*/}
				{/*			       id={"imageFile"} type={"file"}*/}
				{/*			       className={"hidden w-0"}/>*/}
				{/*		</div>*/}
				{/*		<label*/}
				{/*			className={" text-body-large font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
				{/*			Upload Image*/}
				{/*		</label>*/}

				{/*	</div>*/}
				{/*	/!*<div className={"col-span-4 justify-between items-center"}>*!/*/}
				{/*	/!*    <label*!/*/}
				{/*	/!*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*!/*/}
				{/*	/!*        Rounded*!/*/}
				{/*	/!*    </label>*!/*/}
				{/*	/!*    <div className={"mt-2"}>*!/*/}
				{/*	/!*        <TextFieldEditor id={"borderRadius"} onChange={onChangeGlobal}*!/*/}
				{/*	/!*                         defValue={globalRenderStyles.borderRadius}/>*!/*/}
				{/*	/!*    </div>*!/*/}
				{/*	/!*</div>*!/*/}
				{/*	/!*<div className={"col-span-4 justify-between items-center"}>*!/*/}
				{/*	/!*    <label*!/*/}
				{/*	/!*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*!/*/}
				{/*	/!*        Width*!/*/}
				{/*	/!*    </label>*!/*/}
				{/*	/!*    <div className={"mt-2"}>*!/*/}
				{/*	/!*        <TextFieldEditor id={"width"} onChange={onChange}*!/*/}
				{/*	/!*                         defValue={deviceStyle.width}/>*!/*/}
				{/*	/!*    </div>*!/*/}
				{/*	/!*</div>*!/*/}
				{/*	/!*<div className={"col-span-4 justify-between items-center"}>*!/*/}
				{/*	/!*    <label*!/*/}
				{/*	/!*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*!/*/}
				{/*	/!*        Height*!/*/}
				{/*	/!*    </label>*!/*/}
				{/*	/!*    <div className={"mt-2"}>*!/*/}
				{/*	/!*        <TextFieldEditor id={"height"} onChange={onChange}*!/*/}
				{/*	/!*                         defValue={deviceStyle.height}/>*!/*/}
				{/*	/!*    </div>*!/*/}
				{/*	/!*</div>*!/*/}

				{/*</div>}*/}


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