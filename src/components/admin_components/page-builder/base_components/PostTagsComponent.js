'use client';
import React, {useEffect, useState, Fragment} from "react";
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
import useSWR from 'swr'
import {Swiper, SwiperSlide} from "swiper/react";

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function PostTagsComponent({
	                                          fields,
	                                          editDialogOpenComponentId,
	                                          setEditDialogOpenComponentId,
	                                          color,
	                                          dragFunc,
	                                          removeItemFunc,
	                                          isDesktop,
	                                          editItem,
	lastPost,
	                                          item,

                                          }) {

	const [localItem, setLocalItem] = useState(item)
	// const {data, error, isLoading, mutate} = useSWR(
	// 	`http://localhost:3000/api/post-tags?per_page=100`,
	// 	fetcher
	// )
	let [styles, setStyles] = useState(item?.styles)
		let onChangeStyles = (name, value, type,pseudo) => {
		let nStyles = {...styles}
		let nStylesType = {...nStyles[type]}
		nStylesType[pseudo] = {...nStylesType[pseudo], [name]: value}
		nStyles[type]=nStylesType
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		editItem("styles", nStyles, item.uniqueId)
		setStyles(nStyles)
		console.log("styles", nStyles)
	}
	// useEffect(() => {
	// 	// mutate()
	// 	mutate()
	// },[localItem.numberLoad])
	// const
	let onChange = (key, value) => {
		setLocalItem({...localItem, [key]: value})
		editItem(key, value, item.uniqueId)
	}

	useEffect(() => {
		// setEditDialogOpenComponentId(item.uniqueId)
		// console.log(editDialogOpenComponentId)
		console.log("lweknfklw", editDialogOpenComponentId)
	}, [editDialogOpenComponentId])
	const copyToClipboard = () => {
		localStorage.setItem("clipboard", JSON.stringify(item))
	}
	// if (isLoading) return <div>Loading...</div>
	// if (error) return <div>Error: {error.message}</div>
	return (
		<>
			<style>{`
				.${item.uniqueId}:hover .${item.uniqueId}-panel{
				display: block;
			}
		
			`}</style>

			<div className={`${item.uniqueId} hover:outline hover:outline-primary-light/[50%]  rounded-[4px] relative`}>
				<div className={"w-full"}>
					{lastPost?.data[0].tags.map((item, index) =>
						<div style={isDesktop ? {...styles.global.base, ...styles.desktop.base} : {...styles.mobile.base, ...styles.global.base}} key={index} className={`inline-flex items-center justify-center`}>
							{item.title}
						</div>
					)}
					{/*{localItem.type === 2 && <div*/}
					{/*	className={`${isDesktop ? `grid-cols-${localItem.desktopColumn}` : `grid-cols-${localItem.mobileColumn}`} grid  gap-4`}>*/}
					{/*	{data.data.map((item) => <div key={item._id} className={"h-full"}>*/}
					{/*		<div style={{backgroundColor: localItem.backgroundColor}}*/}
					{/*		     className={"rounded-[24px] h-full px-[40px] py-[40px]"}>*/}
					{/*			<div style={{color: localItem.primaryTextColor}}*/}
					{/*			     className={" text-title-large font-extrabold"}>*/}
					{/*				“*/}
					{/*				{item.description}*/}
					{/*				/!*With Tarro, I don’t have to worry about employees taking sick days or vacations.*!/*/}
					{/*				”*/}
					{/*			</div>*/}
					{/*			<div style={{color: localItem.primaryTextColor}}*/}
					{/*			     className={"text-title-medium font-bold mt-10"}>*/}
					{/*				{item.name}*/}
					{/*			</div>*/}
					{/*			<div style={{color: localItem.variantTextColor}}*/}
					{/*			     className={"text-title-small font-medium"}>*/}
					{/*				{item.job} / {item.company}*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>)}*/}
					{/*</div>}*/}
				</div>
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
			<EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false}
			              setIsOpen={() => setEditDialogOpenComponentId(null)}>
				{/*<h3 className={"px-4 pt-3 pb-2 mt-6 border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>*/}
				{/*	Layout*/}
				{/*</h3>*/}
				{/*<div className={"grid grid-cols-2 gap-4"}>*/}
				{/*	<div className={"h-[120px]"}>*/}
				{/*		*/}
				{/*	</div>*/}
				{/*</div>*/}

				{(fields) && fields.map((field, index) => <StyleFieldGenerator
					onChange={onChangeStyles} isDesktop={isDesktop} styles={styles} key={index} field={field}/>)}


			</EditorDialog>

		</>
	)
}