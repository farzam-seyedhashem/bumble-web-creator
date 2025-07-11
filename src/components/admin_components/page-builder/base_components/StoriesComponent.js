'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import Image from 'next/image'

export default function TextComponents({
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
			<div>
				<div id={item.uniqueId} className={`${item.uniqueId} ${isSelected ? "outline outline-primary-light" : "hover:outline hover:outline-primary-light/[50%]"} `}>
					<div className={"flex items-center space-x-4"}>

						<div
							className={"h-[110px] w-[110px] border-4 overflow-hidden relative  border-outline-variant-light bg-surface-container-light rounded-full"}>
							<Image objectFit={"cover"} layout={"fill"} src={"/1.webp"}/>
						</div>
						<div
							className={"h-[110px] w-[110px] border-4 overflow-hidden relative  border-outline-variant-light bg-surface-container-light rounded-full"}>
							<Image objectFit={"cover"} layout={"fill"} src={"/1.webp"}/>
						</div>
						<div
							className={"h-[110px] w-[110px] border-4 overflow-hidden relative  border-outline-variant-light bg-surface-container-light rounded-[20%]"}>
							<Image objectFit={"cover"} layout={"fill"} src={"/1.webp"}/>
						</div>

					</div>
					{/*<div className={"flex items-center"}>*/}
					{/*	<div className={"h-[1px] bg-outline-variant-light w-full flex-1"}/>*/}
					{/*	<div className={"flex items-center px-2 text-label-large font-medium text-primary-light space-x-2 "}>*/}
					{/*		<Icon size={20}>*/}
					{/*			add*/}
					{/*		</Icon>*/}
					{/*		Show All*/}
					{/*	</div>*/}
					{/*	<div className={"h-[1px] bg-outline-variant-light w-full w-full flex-1"}/>*/}

					{/*</div>*/}
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
					onChange={onChangeStyles} isDesktop={isDesktop} styles={styles} key={item.uniqueId}
					field={field}/>)}
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


			</EditorDialog>

		</>
	)
}