'use client'
import React, {useContext, useEffect, useRef, useState} from "react";
import Data from '../../../Components.json'
// import {v4 as uuidv4} from 'uuid';
import {UniqueCharOTP} from "unique-string-generator";
// import VanillaContextMenu from 'vanilla-context-menu';
import Icon from "@m3/assets/icons/Icon";
import {uniqueId} from "lodash/util";

// import fs from 'fs';

// const DropZone = styled(MuiBox, {
//     shouldForwardProp: (prop) => prop !== 'firstItem' && prop !== 'onDrag',
// })(({theme, firstItem, onDrag}) => ({
//     ...(firstItem ? {
//         padding: '21px 0px',
//         color: 'rgba(0, 0, 0, 0.38)',
//         textAlign: 'center',
//         transition: 'all 300ms ease-in-out',
//         fontSize: 16,
//         lineHeight: 1.38,
//         backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)',
//     } : {
//         padding: '4px 0px',
//         color: 'rgba(0, 0, 0, 0.38)',
//         textAlign: 'center',
//         transition: 'all 300ms ease-in-out',
//         fontSize: 16,
//         lineHeight: 1.38,
//         backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.0)' : 'rgba(255, 255, 255, 0.0)',
//     }),
//     ...(onDrag && {
//         padding: '29px 0px',
//         textAlign: 'center',
//         fontSize: 16,
//         lineHeight: 1.38,
//         backgroundColor: alpha(theme.palette.primary.main, .1) + '!important',
//         color: theme.palette.primary.main + '!important',
//     })
// }))

function deepFreeze(object) {
	// // Retrieve the property names defined on object
	// const propNames = Object.getOwnPropertyNames(object);
	//
	// // Freeze properties before freezing self
	//
	// for (const name of propNames) {
	//     const value = object[name];
	//
	//     if (value && typeof value === "object") {
	//         deepFreeze(value);
	//     }
	// }
	//
	// return Object.freeze(object);
}

export default function DropContainer({handleAddedItems, firstItem, idNumber}) {
	// const file = await fs.readFile(process.cwd() + '/app/Components.json', 'utf8');
	// const Data = JSON.parse(file);
	const [onDrag, setOnDrag] = React.useState(false)
	const [onDrop, setOnDrop] = React.useState(false)
	const [data, setData] = useState()
	const [onDragStart, setOnDragStart] = React.useState(false)
	const ref = useRef(UniqueCharOTP(24))
	// const {components} = Data;
	useEffect(() => {
// 		new VanillaContextMenu({
// 			scope: ref.current,
// 			customClass:"context-menu",
// 			menuItems: [
// 				// {
// 				// 	label: 'Copy',
// 				// 	callback: () => {
// 				// 		// your code here
// 				// 	},
// 				// },
// 				// 'hr',
// 				{
//
// 					iconHTML:`<span class="material-symbols-outlined">
// content_paste
// </span>`,
// 					label: 'Paste',
// 					callback: pasteFunction,
// 				},
//
// 			],
// 		})
	}, []);
	// const {t} = useTranslation('page-editor')
	const allowDrop = (ev) => {
		ev.preventDefault();

	}
	const recursiveUpdateUniqueId = (item) => {
		item.uniqueId =  UniqueCharOTP(24)
		if(item.addedItems){
			for (let i = 0; i < item.addedItems.length; i++) {
				recursiveUpdateUniqueId(item.addedItems[i])
			}
		}
		return item
	}
	const pasteFunction = () => {

		const item = JSON.parse(localStorage.getItem("clipboard"))
		const nI = recursiveUpdateUniqueId(item)
		// item.uniqueId = UniqueCharOTP(24)
		// if (item.idType === "container") {
		// 	item.addedItems.map(item =>
		// 		item.uniqueId = UniqueCharOTP(24)
		// 	)
		// }
		// if (item.idType === "grid") {
		// 	item.addedItems.map(item =>
		// 		item.uniqueId = UniqueCharOTP(24)
		// 	)
		// }
		handleAddedItems(nI, idNumber)

	}
	// const getData = () => {
	//     return Data.components
	// }
	const drop = (ev) => {
		let dragId = ev.dataTransfer.getData("text");

		let item = ev.dataTransfer.getData("item");
		if (!item) {
			const componets = [...Data.components]
			let component = componets.find(c => c.uid === dragId)


			if (component.idType === "grid" || component.idType === "container") {
				component = recursiveUpdateUniqueId(component)
			}else{
				component.uniqueId = UniqueCharOTP(24)
			}
			if (component) {
				handleAddedItems(component, idNumber)
			}
		} else {
			const itemu = JSON.parse(item)
			itemu.uniqueId = UniqueCharOTP(24)
			handleAddedItems(itemu, idNumber)
		}
		// setItems()
		// const item = Sections.sections[props.selectedTab].childes.find(item => item.id === data)
		// handleSelected(item, props.itemNumber)

	}
	// useState(()=>{
	//     setIsShow(true)
	// })
	const removeStyle = () => {

	}
	const handleContextMenu = () => {
		console.log("handleContextMenu")
	}
	const onDragClass = "h-[64px] bg-secondary-container-light  text-on-secondary-container-light "
	const firstItemClasses = "bg-surface-container-high-light   text-on-surface-variant-light  h-[64px]"
	const normalClasses = " bg-transparent h-[16px]  z-10 top-0 left-0 w-full text-on-surface-variant-light dark:text-on-surface-variant-dark "
	return (

		<div ref={ref} key={Date.now()}
		     className={`className transition-all border-outline-variant-light  text-center duration-300 ease-in-out flex items-center justify-center ${onDrag ? onDragClass : (firstItem) ? firstItemClasses : normalClasses}`}
			// id={Math.random().toString()}
			// key={Math.random()}
			 onContextMenu={handleContextMenu}
			 onDrop={(event) => {
				 drop(event)
				 setOnDrag(false)
				 setOnDrop(true)
			 }}
			 onDragLeave={() => setOnDrag(false)}
			 onDragOver={(event) => {
				 allowDrop(event)
				 setOnDrag(true)
			 }}


			// onDrag={onDrag}
		>
			{!(firstItem) && onDrag && <div>
				{"Drop Item Here"}
			</div>}
			{firstItem && <div>
				{"Drag and Drop item here"}
			</div>}
		</div>

	)
}
