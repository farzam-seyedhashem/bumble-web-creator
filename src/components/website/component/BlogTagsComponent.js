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
import Link from "next/link";
import {ApiURL} from "@/config";

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function BlogTagsComponent({
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

	const [localItem, setLocalItem] = useState(item)
	const {data, error, isLoading, mutate} = useSWR(
		`${ApiURL}/post-tags?per_page=100`,
		fetcher
	)
	let [styles, setStyles] = useState(item?.styles)
	let onChangeStyles = (name, value, type) => {
		let nStyles = {...styles}
		nStyles[type] = {...nStyles[type], [name]: value}
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
	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	return (
		<>
			{/*<style>{`*/}
			{/*	.${item.uniqueId}:hover .${item.uniqueId}-panel{*/}
			{/*	display: block;*/}
			{/*}*/}
			{/*`}</style>*/}
			<style>

			</style>
			{/*"selectedBorderColor": "",*/}
			{/*"selectedTextColor": "",*/}
			{/*"selectedBackgroundColor": "",*/}
			<div className={`h-fit`}>
				<div className={"w-full"}>
					{data.data.map((tag, index) =>
						<Link key={index} href={tag.slug} className={` ${item.uniqueId}  inline-flex items-center justify-center`}>
							<div  className={``}>
								{tag.title}
							</div>
						</Link>
					)}
				</div>

			</div>

		</>
	)
}