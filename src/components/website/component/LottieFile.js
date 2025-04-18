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
import TextArea from "@m3/TextArea";
// import {json} from "next/dist/client/components/react-dev-overlay/server/shared";
import Lottie from 'react-lottie';

export default function LottieFile({
	                                     fields,
	                                     editDialogOpenComponentId,
	                                     setEditDialogOpenComponentId,
	                                     isDesktop,
	                                     item,
	                                     editItem,
	                                     removeItemFunc,
	                                     dragFunc
                                     }) {
	let [isSelected, setIsSelected] = useState(false)
	let [value, setValue] = useState(item.value)
	let [styles, setStyles] = useState(item?.styles)
	const [editMode, setEditMode] = useState("value")
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
		// const file = JSON.parse(value)
		setValue(value)
		editItem("value", value, item.uniqueId)
	}
	const copyToClipboard = () => {
		localStorage.setItem("clipboard", JSON.stringify(item))
	}
	return (
		<>
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData: JSON.parse( item.value),
					rendererSettings: {
						preserveAspectRatio: "xMidYMid slice"
					}
				}}
				height={400}
				width={400}
			/>
		</>
	)
}