import Button from "@m3/buttons/Button";
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import {useRef, useState} from "react";
import TextField from "@m3/text_fields/TextField";
import Checkbox from "@m3/checkboxes/Checkbox";
import Icon from "@m3/assets/icons/Icon";
import SegmentedButton from "@m3/segmented_buttons/SegmentedButton";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import Switch from "@m3/switch/Switch";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Divider from "@m3/dividers/Divider";
import AutoSelect from "@m3/auto_complete/AutoSelect";
import {v4 as uuidv4} from 'uuid';
import IconPicker from "@page_builder/editor_components/IconPicker";
import DragDropList from "@admin/admin-panel/drag-drop/DragDropList";

function checkColorIsCustom(colorSet, selectedColor) {
	let v = null
	Object.values(colorSet).map((color, index) => {
		// console.log(rgbaObjToRgba(color),selectedColor,Object.keys(colorSet),Object.keys(colorSet)[index])
		if (rgbaObjToRgba(color) === selectedColor) {
			// console.log("---------", Object.keys(colorSet)[index])
			v = Object.keys(colorSet)[index];

		}
	})

	return v ? v : selectedColor
}

function AddAndEditMenuItemDialog({menuListItems,onMenuItemChange,menuItems,editMenuItemType, editItem, pages, onItemChange, setIsDialogOpen}) {
	const [menuItemSelected, setMenuItemSelected] = useState(editItem !== -1 ? menuItems.find(item => item.id === editItem) : null)
	const [link, setLink] = useState(menuItemSelected?.slug || "")
	const [title, setTitle] = useState(menuItemSelected?.title || "")
	const [parentMenu, setParentMenu] = useState(menuItemSelected?.parent || "")
	const [icon,setIcon] = useState(menuItemSelected?.icon || "home")
	const onSave = () => {
		let data = {}
		if (editMenuItemType==="bottom-menu"){
			data = {slug: link,icon:icon, title: title, id: editItem !== -1 ? editItem : uuidv4(), parent: parentMenu}


		}else{
			 data = {slug: link, title: title, id: editItem !== -1 ? editItem : uuidv4(), parent: parentMenu}

		}
		console.log(data)
		onItemChange(data, editItem !== -1)

		onMenuItemChange(editMenuItemType,[...menuListItems,data])
	}

	return <div className={"fixed flex items-center justify-center inset-0 z-999 bg-black/[30%]"}>
		<div className={"w-[600px] px-6 bg-surface-light dark:bg-surface-dark rounded-[24px]"}>
			<h2 className={"mb-4 text-title-large font-black  pt-6"}>
				Add New items
			</h2>
			<div className={"grid grid-cols-2 gap-6"}>
				<TextField defaultValue={title} onChange={(e) => setTitle(e.target.value)} label={"Title"}/>
				<AutoSelect onChange={(e) => {
					setLink(e.target.value)
				}} value={link}
				            label={"Link"}>
					{pages.data.filter(item => link !== "" ? item.title.toLowerCase().includes(link.toLowerCase()) : item).map((item, index) =>
						<li onClick={() => {
							// setTeachingSubject(item.title)
							setLink(item.slug)
						}} key={index}
						    className={"space-x-4 flex items-center px-4 overflow-hidden relative before:hover:bg-on-surface-light/[8%] before:inset-0 before:absolute h-[72px]"}>
							<div>
								<p className={"text-body-large dark:text-on-surface-dark text-on-surface-light"}>
									{item.title}
								</p>
								<p className={"text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
									/{item.slug}
								</p>
							</div>
						</li>)}

				</AutoSelect>
				{menuItems.filter(item => item.parent === "").filter(item => link !== "" ? item.title.toLowerCase().includes(parentMenu.toLowerCase()) : item).length!==0 && <AutoSelect onChange={(e) => {
					setParentMenu(e.target.value)
				}} value={parentMenu}
				             label={"Sub Menu"}>

					{menuItems.filter(item => item.parent === "").filter(item => link !== "" ? item.title.toLowerCase().includes(parentMenu.toLowerCase()) : item).map((item, index) =>
						<li onClick={() => {
							// setTeachingSubject(item.title)
							setParentMenu(item.id)
						}} key={index}
						    className={"space-x-4 flex items-center px-4 overflow-hidden relative before:hover:bg-on-surface-light/[8%] before:inset-0 before:absolute h-[72px]"}>
							<div>
								<p className={"text-body-large dark:text-on-surface-dark text-on-surface-light"}>
									{item.title}
								</p>
							</div>
						</li>)}

				</AutoSelect>}
				<div className={"col-span-1"}>
				{editMenuItemType==="bottom-menu" && <IconPicker onIconSelect={(v)=>setIcon(v)} label={"Icon"} defValue={icon} onChange={(e) => setTitle(e.target.value)}/>}
				</div>
			</div>
			<div className={"flex justify-end py-6"}>
				<Button onClick={() => setIsDialogOpen(false)}>
					Close
				</Button>
				<Button onClick={() => onSave()} className={"ml-2"} type={"filled"}>
					Save
				</Button>
			</div>
		</div>
	</div>

}

export default function MenuItemEditor({menuListItems,onMenuItemChange,editMenuItemType,children, pages, color, menuSetting}) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	// const [selectedItem, setSelectedItem] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState(editMenuItemType==="desktop-menu"?0:editMenuItemType==="appbar-menu"?1:2);
	const [isEditMode, setIsEditMode] = useState(-1);
	console.log(menuListItems);
	const [menuItems, setMenuItems] = useState([...menuListItems]);
	const [onDragId,setOnDragId] = useState(-1);
	// const [mobileTopMenuItems, setMobileTopMenuItems] = useState([
	// 	// {id: 1, title: "Home", path: "/"}
	//
	// ]);
	// const [mobileBottomMenuItems, setMobileBottomMenuItems] = useState([
	// 	// {id: 1, title: "Home", path: "/"}
	//
	// ]);
	const [link, setLink] = useState({});
	// console.log(menuSetting)
	const itemsDesktop = menuSetting.desktopMenuColors

	const desktopMenu = {
		itemColor: checkColorIsCustom(color, itemsDesktop.bottomSheetBackground),
		selectedItemColor: checkColorIsCustom(color, itemsDesktop.bottomSheetBackground),
		backgroundColor: checkColorIsCustom(color, itemsDesktop.bottomSheetBackground),
	}
	const onChangeHandler = (data) => {
		const menuItemsn = [...menuItems]

		if (isEditMode !== -1) {
			const indexEdit = menuItemsn.findIndex(item => item.id === data.id)
			console.log(indexEdit)
			menuItemsn[indexEdit] = data
			setIsEditMode(-1)
		} else {
			menuItemsn.push(data)
		}
		setIsDialogOpen(false)
		setMenuItems(menuItemsn)
		// selectedIndex === 0 ?  : selectedIndex === 1 ? setMobileTopMenuItems(menuItems) : setMobileBottomMenuItems(menuItems)

	}
	const dragItem = useRef()
	const dragOverItem = useRef()
	const dragStart = (e) => {
		dragItem.current = e.target.id;
	}
	const dragEnter = (e) => {
		dragOverItem.current = e.currentTarget.id;
	}
	Array.prototype.move = function(from, to) {
		this.splice(to, 0, this.splice(from, 1)[0]);
	};
	const drop = () => {
		const copyListItem = [...menuItems]
		const di = menuItems.findIndex(item => item.id === dragItem.current)
		const doi = menuItems.findIndex(item => item.id === dragOverItem.current)
		console.log(di)
		console.log(doi)
		copyListItem.move(di,doi)
		// console.log(copyListItem,dragItem.current,dragOverItem.current)
		// console.log(menuItems)
		dragItem.current = null
		dragOverItem.current = null
		setMenuItems(copyListItem)
	}

	return (
		<div>
			{isDialogOpen && <AddAndEditMenuItemDialog menuListItems={menuListItems} onMenuItemChange={onMenuItemChange} editMenuItemType={editMenuItemType} editItem={isEditMode} setIsDialogOpen={setIsDialogOpen}
			                                           menuItems={menuItems}
			                                           onItemChange={onChangeHandler} pages={pages}/>}

			{/*{selectedIndex === 0 && menuItems.filter(item => item.parent === "").map((item, index) =>*/}
			{/*	<>*/}
			{/*		<li onClick={() => {*/}
			{/*			setIsEditMode(item.id)*/}
			{/*			setIsDialogOpen(true)*/}
			{/*		}}*/}
			{/*		    className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}*/}
			{/*		    key={item.id}>*/}
			{/*			<div className={"ml-0 flex-grow-0 w-8/12"}>*/}
			{/*				<p className={"text-body-large"}>*/}
			{/*					{item.title}*/}
			{/*				</p>*/}
			{/*				<p className={"text-body-medium"}>*/}
			{/*					path: {item.slug}*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</li>*/}
			{/*		{desktopMenuItems.filter(ch => ch.parent === item.id).map(ch => <li onClick={() => {*/}
			{/*			setIsEditMode(item.id)*/}
			{/*			setIsDialogOpen(true)*/}
			{/*		}}*/}
			{/*		                                                                    className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}*/}
			{/*		                                                                    key={ch.id}>*/}
			{/*			<div className={"ml-4 flex-grow-0 w-8/12"}>*/}
			{/*				<p className={"text-body-large"}>*/}
			{/*					{ch.title}*/}
			{/*				</p>*/}
			{/*				<p className={"text-body-medium"}>*/}
			{/*					path: {ch.slug}*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</li>)}*/}

			{/*	</>*/}
			{/*)}*/}
			{/*{selectedIndex === 1 && mobileTopMenuItems.filter(item => item.parent === "").map((item, index) =>*/}
			{/*	<>*/}
			{/*		<li onClick={() => {*/}
			{/*			setIsEditMode(item.id)*/}
			{/*			setIsDialogOpen(true)*/}
			{/*		}}*/}
			{/*		    className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}*/}
			{/*		    key={item.id}>*/}
			{/*			<div className={"ml-0 flex-grow-0 w-8/12"}>*/}
			{/*				<p className={"text-body-large"}>*/}
			{/*					{item.title}*/}
			{/*				</p>*/}
			{/*				<p className={"text-body-medium"}>*/}
			{/*					path: {item.slug}*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</li>*/}
			{/*		{desktopMenuItems.filter(ch => ch.parent === item.id).map(ch => <li onClick={() => {*/}
			{/*			setIsEditMode(item.id)*/}
			{/*			setIsDialogOpen(true)*/}
			{/*		}}*/}
			{/*		                                                                    className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}*/}
			{/*		                                                                    key={ch.id}>*/}
			{/*			<div className={"ml-4 flex-grow-0 w-8/12"}>*/}
			{/*				<p className={"text-body-large"}>*/}
			{/*					{ch.title}*/}
			{/*				</p>*/}
			{/*				<p className={"text-body-medium"}>*/}
			{/*					path: {ch.slug}*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</li>)}*/}

			{/*	</>*/}
			{/*)}*/}
			{ menuItems.filter(item => item.parent === "").map((item, index) =>
				<>
					<div
						className={`${onDragId === item.id ? "h-[20px] w-full bg-secondary-container-light dark:bg-secondary-container-dark" : "h-[1px]"}`}
						onDragLeave={() => setOnDragId(-1)} onDragEnter={() => setOnDragId(item.id)}/>

					<li id={item.id} draggable onDragEnd={drop} onDragEnter={dragEnter} onDragStart={dragStart}
					    onClick={() => {
						    setIsEditMode(item.id)
						    setIsDialogOpen(true)
					    }}
					    className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
					    key={item.id}>
						{item.icon && <Icon className={"mr-4"}>
							{item.icon}
						</Icon>}
						<div className={"ml-0 flex-grow-0 w-8/12"}>
							<p className={"text-body-large"}>
								{item.title}
							</p>
							<p className={"text-body-medium"}>
								path: {item.slug}
							</p>
						</div>
					</li>
					<div
						className={`${onDragId === item.id ? "h-[20px] w-full bg-secondary-container-light dark:bg-secondary-container-dark" : "h-[1px]"}`}
						onDragLeave={() => setOnDragId(-1)} onDragEnter={() => setOnDragId(item.id)}/>
					{menuItems.filter(ch => ch.parent === item.id).map(ch => <li onClick={() => {
						setIsEditMode(item.id)
						setIsDialogOpen(true)
					}}
					                                                             className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
					                                                             key={ch.id}>
						<div className={"ml-4 flex-grow-0 w-8/12"}>
							<p className={"text-body-large"}>
								{ch.title}
							</p>
							<p className={"text-body-medium"}>
								path: {ch.slug}
							</p>
						</div>
					</li>)}

				</>
			)}

			<li onClick={() => setIsDialogOpen(true)}
			    className={"px-4 flex h-[56px] items-center font-medium text-body-large text-primary-light dark:text-primary-dark hover:bg-primary-light/[8%] dark:hover:bg-primary-dark/[8%]"}>
				<Icon size={24} weight={500} className={"mr-2"}>
					edit
				</Icon>
				{children}
			</li>




		</div>
	)
}