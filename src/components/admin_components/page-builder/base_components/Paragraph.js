'use client';
import {useEffect, useState, Fragment} from "react";
import TextArea from "@m3/TextArea";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import Components from '@/Components.json'
export default function Paragraph({
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
	return (
		<>
			<p className={`${isSelected ? "outline outline-primary-light" : "hover:outline hover:outline-primary-light/[50%]"}  min-h-[24px] relative group/paragraph`}
			   id={key} style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}
			   onClick={() => setIsSelected(true)}>
				{value}
				<div
					className={"absolute  z-[888] hidden group-hover/paragraph:block  -top-[32px] right-0  transform "}>
					<div
						className={"px-4 py-1 space-x-3 flex rounded-t-[8px] dark:bg-tertiary-container-dark bg-primary-light"}>
						<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								edit
							</Icon>
						</button>
						<button onDragOver={(event) => {
							event.preventDefault();
							removeItemFunc()
						}} onDragStart={(e) => dragFunc(e)} draggable={true}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
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

			</p>
			<EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false}
			              setIsOpen={() => setEditDialogOpenComponentId(null)}>
				<div
					className={"flex border-b border-outline-variant-light dark:border-outline-variant-dark items-center h-[48px]"}>
					<div onClick={() => setEditMode("value")}
					     className={`${editMode === "value" && "text-primary-light dark:text-primary-dark"} w-6/12 relative flex justify-center items-center h-full`}>
						Value
						{editMode === "value" && <div
							className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}
					</div>
					<div onClick={() => setEditMode("style")}
					     className={`${editMode === "style" && "text-primary-light dark:text-primary-dark"} relative w-6/12 flex justify-center items-center h-full`}>
						Style
						{editMode === "style" && <div
							className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}

					</div>
				</div>
				{editMode === "value" && <div className={"px-4"}><TextArea label={"Text"}
				                                                           onChange={(e) => valueChangeHandler(e.target.value)}
				                                                           defaultValue={value}/></div>}

				{(editMode === "style" && fields) && fields.map((field, index) => <StyleFieldGenerator
					onChange={onChangeStyles} isDesktop={isDesktop}
					styles={styles} key={index} field={field}/>)}


			</EditorDialog>

		</>
	)
}