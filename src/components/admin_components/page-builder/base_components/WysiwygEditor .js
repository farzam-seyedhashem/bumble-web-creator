'use client';
import React, {useEffect, useState, Fragment} from "react";
import TextArea from "@m3/TextArea";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function WysiwygEditor({
	                                      fields,
	                                      editDialogOpenComponentId,
	                                      setEditDialogOpenComponentId,
	                                      color,
	                                      isDesktop,
	                                      item,
	                                      key,
	                                      editItem,
	                                      removeItemFunc,
	                                      dragFunc
                                      }) {
	let [isSelected, setIsSelected] = useState(false)
	let [value, setValue] = useState(item.value || item.idType)
	let [styles, setStyles] = useState(item?.styles)
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	const [editMode, setEditMode] = useState("value")
	useEffect(() => {
		if (!styles.global.color) {
			onChangeStyles('color', rgbaObjToRgba(color.onSurfaceVariant), 'global')
		}
	}, [styles])
	const valueChangeHandler = (value) => {
		setValue(value)
		editItem("value", value)
	}
	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
			['link'],
			['clean']
		],
	}

	const formats = [
		'header',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'list', 'bullet', 'indent',
		'link'
	]
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

				<div
					className={`${isSelected ? "outline outline-primary-light" : "hover:outline hover:outline-primary-light/[50%]"}  min-h-[24px] relative ${item.uniqueId}`}
					id={key}
					style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}
					onClick={() => setIsSelected(true)}>
					<div dangerouslySetInnerHTML={{__html: value}}>

					</div>
					<div
						className={`absolute  z-[888] hidden ${item.uniqueId}-panel  -top-[32px] right-0  transform `}>
						<div
							className={"px-4 py-1 space-x-3 flex rounded-t-[8px]  bg-primary-light"}>
							<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  "}>
								<Icon size={16}
								      className={"!text-on-primary-light  text-[20px]"}>
									edit
								</Icon>
							</button>
							<button onClick={() => copyToClipboard()}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
								<Icon size={16}
								      className={"!text-on-primary-light text-[20px]"}>
									content_copy
								</Icon>
							</button>
							<button onDragOver={(event) => {
								event.preventDefault();
								removeItemFunc()
							}} onDragStart={(e) => dragFunc(e)} draggable={true}
							        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
								<Icon size={16}
								      className={"!text-on-primary-light  text-[20px]"}>
									drag_indicator
								</Icon>
							</button>
							<button
								className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  "}>
								<Icon onClick={removeItemFunc} size={16}
								      className={"!text-on-primary-light text-[20px]"}>
									delete
								</Icon>
							</button>
						</div>
					</div>

				</div>
			</div>
			<EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false}
			              setIsOpen={() => setEditDialogOpenComponentId(null)}>
				{/*<div*/}
				{/*	className={"flex border-b border-outline-variant-light dark:border-outline-variant-dark items-center h-[48px]"}>*/}
				{/*	<div onClick={() => setEditMode("value")}*/}
				{/*	     className={`${editMode === "value" && "text-primary-light dark:text-primary-dark"} w-6/12 relative flex justify-center items-center h-full`}>*/}
				{/*		Value*/}
				{/*		{editMode === "value" && <div*/}
				{/*			className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}*/}
				{/*	</div>*/}
				{/*	<div onClick={() => setEditMode("style")}*/}
				{/*	     className={`${editMode === "style" && "text-primary-light dark:text-primary-dark"} relative w-6/12 flex justify-center items-center h-full`}>*/}
				{/*		Style*/}
				{/*		{editMode === "style" && <div*/}
				{/*			className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}*/}

				{/*	</div>*/}
				{/*</div>*/}
				{editMode === "value" && <div className={"px-0  *:border-0"}>
					<ReactQuill className={"*:!border-0"} modules={modules}
					            formats={formats} theme="snow" value={value} onChange={setValue}/>
				</div>}

				{/*{(editMode === "style" && fields) && fields.map((field, index) => <StyleFieldGenerator*/}
				{/*	onChange={onChangeStyles} isDesktop={isDesktop}*/}
				{/*	styles={styles} key={index} field={field}/>)}*/}


			</EditorDialog>

		</>
	)
}