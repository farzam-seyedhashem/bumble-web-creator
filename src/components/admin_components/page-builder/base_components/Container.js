'use client'
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import {useState, Fragment, useEffect, useRef} from "react";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Icon from "@m3/assets/icons/Icon";
import Switch from "@m3/switch/Switch";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import Image from 'next/image'

import {UploadFile} from "@controller/FileController";

export default function Container({
	                                  fields,
	                                  editDialogOpenComponentId,
	                                  setEditDialogOpenComponentId,
	                                  siteSetting,
	                                  item,
	                                  isDesktop,
	                                  editItem,
	                                  removeItemFunc,
	                                  dragFunc,
	                                  lastPost
                                  }) {
	const [addedItems, setAddedItems] = useState(item.addedItems)
	const [isSelected, setIsSelected] = useState(false)
	let [className, setClassName] = useState({})
	let [styles, setStyles] = useState(item?.styles)
	const [imageURL, setImageURL] = useState(item?.backgroundImageURL)
	const [imageStyle, setImageStyle] = useState(item?.backgroundImageStyle)
	const [imageOverlay, setImageOverlay] = useState(item?.imageOverlay)
	const [imageOverlayColor, setImageOverlayColor] = useState(item?.imageOverlayColor)
	const [editMode, setEditMode] = useState("value");
	let [isBox, setIsBox] = useState(item?.isBox)
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	useEffect(() => {
		console.log(item, item.uniqueId)
	}, [])

	let handleChangeBackgroundImageURL = (value) => {
		// console.log("vvvvv", )
		setImageURL(value)
		editItem("backgroundImageURL", value)
	}
	let handleImageOverlay = (value) => {
		setImageOverlay(value)
		editItem("imageOverlay", value)
	}
	let handleImageOverlayColor = (value) => {
		setImageOverlayColor(value)
		editItem("imageOverlayColor", value)
	}

	let handleChangeBackgroundImageStyle = (value) => {
		setImageStyle(value)
		editItem("backgroundImageStyle", value)
	}
	useEffect(() => {
		setAddedItems(item.addedItems)
	}, [item])
	const handleAddedItems = (component, number) => {
		if (component.id === "container") {
			return alert("You can not add container in another container")
		}
		let items = addedItems
		if (number === 0) {
			items = [
				component,
				...items
			]
		} else {
			items = [
				...addedItems.slice(0, number),
				component,
				...addedItems.slice(number)
			]
		}
		setAddedItems(items)
		editItem("addedItems", items)
	}
	const editItemC = (number, key, value, unique) => {
		if (key === "className") {
			let newClassName = className
			newClassName[unique] = value
			setClassName(newClassName)
			editItem("className", Object.values(newClassName).join(""), unique)
		}
		let items = addedItems
		items[number] = {...items[number], [key]: value}
		setAddedItems(items)
		editItem("addedItems", items)
	}
	const removeItemFuncM = (number) => {
		let items = [...addedItems]
		items.splice(number, 1)
		setAddedItems(items)
		editItem("addedItems", items)
	}

	function drag(ev, id) {

		if (typeof id !== undefined && typeof id === "number") {
			let item = addedItems[id]
			ev.dataTransfer.setData("text", item.uid);
			ev.dataTransfer.setData("item", JSON.stringify(item));
		} else {

			ev.dataTransfer.setData("text", ev.target.id);
		}
	}

	const copyToClipboard = () => {
		localStorage.setItem("clipboard", JSON.stringify(item))
	}
	const fileInputRef = useRef(item.uniqueId)
	return (
		<>
			<style>{`
				.${item.uniqueId}:hover:not(:has(.${item.uniqueId + "-content"}:hover)) .${item.uniqueId}-panel {
					display: block;
				}
			
			`}</style>
			<div className={`${item.uniqueId} py-4  hover:outline hover:outline-primary-light/[50%]`}>
				<div
					className={`absolute  z-[888] hidden  ${item.uniqueId + "-panel"} top-0 left-0  transform `}>
					<div
						className={"px-4 py-0 space-x-3 flex rounded-t-[0px] bg-primary-light dark:bg-primary-dark"}>
						<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  "}>
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
						<button onDragEnterCapture={(event) => {
							removeItemFunc()
						}} onDragStart={(e) => dragFunc(e)} draggable={true}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								drag_indicator
							</Icon>
						</button>
						<button
							className={"flex items-center h-[24px] w-[24px] justify-center rounded-full"}>
							<Icon onClick={removeItemFunc} size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								delete
							</Icon>
						</button>
					</div>
				</div>
				<div style={isDesktop ? {...styles.global, ...styles.desktop} : {...styles.mobile, ...styles.global}}
				     className={`${item?.className}    relative ${isBox ? "" : "container mx-auto"}`}>
					{/*{item.uniqueId}*/}
					{imageOverlay &&
						<div style={{backgroundColor: imageOverlayColor}} className={"absolute inset-0 z-10"}/>}

					{imageURL &&
						<Image objectFit={imageStyle} alt={""} src={process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL + imageURL} layout="fill"/>}
					{/*<div onClick={() => setIsSelected(true)} className={"z-10 absolute inset-0"}>*/}

					{/*</div>*/}
					<div className={`${item.uniqueId + "-content"} w-full py-3 z-20`}>
						<div style={isDesktop ? {
							display: styles.desktop?.display || "block",
							alignItems: styles.desktop?.alignItems || "flex-start",
							justifyContent: styles.desktop?.justifyContent || "flex-start"
						} : {
							display: styles.mobile?.display || "block",
							alignItems: styles.mobile?.alignItems || "flex-start",
							justifyContent: styles.mobile?.justifyContent || "flex-start"
						}}>
							{addedItems.map((l, i) =>
								<div key={item.uniqueId + i + "-container"} className={"relative "}>
									<DropContainer idNumber={i} selected={addedItems}
									               handleAddedItems={handleAddedItems}/>
									<ComponentGenerator lastPost={lastPost}
									                    editDialogOpenComponentId={editDialogOpenComponentId}
									                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}
									                    siteSetting={siteSetting} dragFunc={drag}
									                    removeItemFunc={removeItemFuncM} isDesktop={isDesktop}
									                    editItem={editItemC} idNumber={i} item={l}/>
								</div>
							)}
						</div>
						<div className={"relative"}>
							<DropContainer idNumber={addedItems.length} selected={addedItems}
							               handleAddedItems={handleAddedItems} key={item.uniqueId + "-container"}
							               firstItem={addedItems.length === 0}/>
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
				{editMode === "value" && <div>
					<h3 className={"px-4 pt-3 pb-2 mt-6  border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Container Style
					</h3>
					<div className={"px-4 h-[64px] flex items-center justify-between mt-0"}>
						<label
							className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
							Is Box
						</label>
						<Switch setIsCheck={(value) => {
							setIsBox(value)
							editItem("isBox", value)
						}}
						        isCheck={isBox}/>
					</div>
					<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Background Image
					</h3>
					<div className={" px-4 grid grid-cols-12 gap-4 py-0"}>
						<div className={"col-span-12 flex item  items-center py-0"}>
							<div className={"mr-2"}>
								<label className={"text-on-surface-light dark:text-on-surface-dark"}
								       htmlFor={"imageFile"}>
									{imageURL ? <img className={"rounded-[4px] w-[64px] h-[64px]"}
									                 src={process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL + imageURL}/>
										:
										<div
											className={"rounded-[4px] dark:bg-surface-container-high-dark bg-surface-container-high-light flex justify-center items-center w-[64px] h-[64px]"}
										>
											<Icon
												className={"text-[24px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
												image
											</Icon>
										</div>}
								</label>
								<input ref={fileInputRef}
								       onChange={async (e) => {
									       const file = fileInputRef.current.files[0]
									       const res = await UploadFile(file)
									       handleChangeBackgroundImageURL(res.file.name)
								       }}
								       id={"imageFile"} type={"file"}
								       className={"hidden w-0"}/>
							</div>
							<label
								className={" text-body-large font-medium text-on-surface-light dark:text-on-surface-dark"}>
								Upload Image
							</label>
						</div>
					</div>
					<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
						Background Image Style
					</h3>
					<div className={"block justify-between items-center "}>
						<div className={"py-0 "}>
							<ul>
								<li onClick={() => handleChangeBackgroundImageStyle('cover')}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${imageStyle === "cover" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{imageStyle === "cover" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Cover
								</li>
								<li onClick={() => handleChangeBackgroundImageStyle('contain')}
								    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
									<Icon
										className={`${imageStyle === "contain" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
										{imageStyle === "contain" ? "radio_button_checked" : "radio_button_unchecked"}
									</Icon>
									Contain
								</li>
							</ul>
						</div>
					</div>
				</div>}
				<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
					Background Overlay
				</h3>
				<div className={"px-4 h-[64px] items-center flex justify-between mt-0"}>
					<label
						className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
						Image Overlay
					</label>
					<Switch setIsCheck={(value) => {
						handleImageOverlay(value)
					}}
					        isCheck={imageOverlay}/>
				</div>
				{imageOverlay && <div
					className={"px-4 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
					<label
						className={"text-body-large  font-normal text-on-surface-light dark:text-on-surface-dark"}>
						Background Color
					</label>
					<ColorPicker onChange={(value) => handleImageOverlayColor(value)}
					             value={imageOverlayColor}/>
				</div>}
			</EditorDialog>
		</>
	)
}