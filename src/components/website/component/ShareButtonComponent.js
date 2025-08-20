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

export default function ShareButtonComponent({

	                                        item,

                                        }) {
	let [isSelected, setIsSelected] = useState(false)
	const [localItem,setLocalItem] = useState(item)
	let [value, setValue] = useState(item.value || item.idType)
	let [link, setLink] = useState(item.link || "")
	let [justify, setJustify] = useState(item.justify || "start")
	let [styles, setStyles] = useState(item?.styles)
	const [editMode, setEditMode] = useState("value")
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
	// const socialIcons = [
	// 	{
	// 		label:"Facebook",
	// 		icon:"facebook",
	// 	},
	// 	{
	// 		label:"X (Twitter)",
	// 		icon:"x",
	// 	},
	// 	{
	// 		label:"X (Twitter)",
	// 		icon:"x",
	// 	}
	// ]
	return (
		<div>
			<button	className={`${item.uniqueId}`}	>
				<Icon className={"mr-2"} size={20}>
					Share
				</Icon>
				{value}
			</button>
		</div>
	)
}