'use client'
import IconButton from "@m3/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";
import ComponentDrawer from "@admin/page-builder/ComponentDrawer";
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import Link from "next/link";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import TextField from "@m3/text_fields/TextField";
import FilledTextField from "@m3/text_fields/FilledTextField";
import FilledTextArea from "@m3/text_area/FilledTextArea";
import PageComponentList from "@page_builder/editor_components/PageComponentList";

export default function PageBuilder({lastPost, type, siteSetting, data, slug}) {
	const devices = [
		{label: "Mobile", icon: "smartphone", id: 0},
		{label: "Desktop", icon: "desktop_windows", id: 1}
	]
	const [reservedPageKey, setReservedPageKey] = useState(data.displayAs)
	const reservedPageKeyLists = [
		{
			title: "Home",
			key: "home"
		},
		{
			title: "Post Archive",
			key: "post-archive"
		},
		{
			title: "Post Single",
			key: "post-single"
		},
		{
			title: "404",
			key: "not-found"
		},
		{
			title: "Other",
			key: "other"
		}
	]
	const [device, setDevice] = useState(1)
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false)
	const [isComponentDrawerOpen, setIsComponentDrawerOpen] = useState(false)
	const [addedItems, setAddedItems] = useState(JSON.parse(data.content) || [])
	const [className, setClassName] = useState({})
	const [editDialogOpenComponentId, setEditDialogOpenComponentId] = useState("wlkd")
	const [isSettingDialogOpen, setIsSettingDialogOpen] = useState(false)
	const handleAddedItems = (component, number) => {
		let items = [...addedItems]
		if (number === 0) {
			items = [
				component,
				...items
			]
			setAddedItems(items)
		} else {
			setAddedItems([
				...items.slice(0, number),
				component,
				...items.slice(number)
			])
		}
	}
	const editItem = (number, key, value, uniqueId) => {
		if (key === "className") {
			let newClassName = className
			newClassName[uniqueId] = value
			setClassName(newClassName)
		}
		let items = addedItems
		items[number] = {...items[number], [key]: value}
		setAddedItems(items)
	}
	const removeItemFunc = (number) => {
		let items = [...addedItems]
		items.splice(number, 1)
		setAddedItems(items)
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

	const updatePage = () => {
		const url = type === "template" ? `/api/template/${slug}` : `/api/page/id/${slug}`
		const newAddedItems = []
		const displayAs = reservedPageKey
		addedItems.map(item => {
			if (item.fields)
				delete item.fields
			newAddedItems.push(item)
		})
		const sendData = {
			displayAs,
			content: JSON.stringify(newAddedItems),
		}

		try {
			fetch(`${url}`, {
				method: 'PUT',
				body: JSON.stringify(sendData)
			}).then(response =>
					console.log("")
				// setIsOpen(true)
			).then(data => alert(data));
		} catch (error) {
			alert('An error occurred!');
		}
	}
	return (
		<div className={"bg-surface-light shadow"}>

			{/*<div*/}
			{/*	className={"hidden  md:block md:w-[360px] sticky top-0 h-screen  bg-surface-light dark:bg-surface-dark "}>*/}
			{/*	<div*/}
			{/*		className={"flex items-center px-4 relative justify-center top-0 left-0 w-full h-[64px] bg-surface-light dark:bg-surface-dark"}>*/}
			{/*		<Link href={type==="template"?"/admin/layouts/templates":"/admin/layouts/pages"}*/}
			{/*		      className={"absolute left-4 top-1/2  transform -translate-y-1/2"}>*/}
			{/*			<IconButton>*/}
			{/*				arrow_back*/}
			{/*			</IconButton>*/}
			{/*		</Link>*/}
			{/*		<h2 className={"text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark"}>*/}
			{/*			Page Components*/}
			{/*		</h2>*/}
			{/*	</div>*/}

			{/*</div>*/}

			<div
				className={"bg-surface-light sticky border-b border-outline-variant-light dark:border-outline-variant-dark top-0 w-full flex px-2  items-center justify-between z-[888] h-[64px] "}>
				{/*<div className={"hidden md:block lg:col-span-4 xl:col-span-5"}/>*/}
				<div className={"flex items-center space-x-2"}>
					<Link href={"/admin/layouts"}>
						<IconButton>
							arrow_back
						</IconButton>
					</Link>
					<h1
						className={"flex-1 font-medium text-title-large text-on-surface-light dark:text-on-surface-dark"}>
						{/*{data.title + }*/}
						{`${data.title} ${type==="template"?"Template":" Page"}`}
					</h1>
				</div>

				<ComponentDrawer isSearchMenuOpen={isSearchMenuOpen} setIsSearchMenuOpen={setIsSearchMenuOpen}
				                 siteSetting={siteSetting} dragFunc={drag} isOpen={isComponentDrawerOpen}
				                 setIsOpen={setIsComponentDrawerOpen}/>
				<div className={"flex items-center justify-end space-x-2"}>
					<button onClick={() => setDevice(device === 0 ? 1 : 0)}
					        className={"w-[40px] h-[40px] flex items-center justify-center relative text-on-surface-variant-light dark:text-on-surface-variant-dark rounded-full after:absolute hover:after:block after:hidden hover:after:opacity-[8%] active:after:opacity-[10%] focus:after:opacity-[10%] after:rounded-full  after:inset-0 after:bg-on-surface-light dark:after:bg-on-surface-dark "}>
						<Icon>
							{devices.find(item => item.id === device).icon}
						</Icon>
					</button>

					<PageComponentList addedItems={addedItems}/>
					<button onClick={() => setIsSettingDialogOpen(true)}
					        className={"w-[40px] h-[40px] flex items-center justify-center relative text-on-surface-variant-light dark:text-on-surface-variant-dark rounded-full after:absolute hover:after:block after:hidden hover:after:opacity-[8%] active:after:opacity-[10%] focus:after:opacity-[10%] after:rounded-full  after:inset-0 after:bg-on-surface-light dark:after:bg-on-surface-dark "}>
						<Icon>
							settings
						</Icon>
					</button>
					<Button onClick={updatePage} type={"filled"} icon={"save"}>
						Save
					</Button>
				</div>
				{/*<div className={"w-full flex items-center justify-end"}>*/}
				{/*<div className={"md:flex hidden items-center h-[64px]"}>*/}
				{/*	{devices.map((item, i) =>*/}
				{/*		<button*/}
				{/*			className={`${item.id === device ? "dark:active:bg-primary-dark/[10%] active:bg-primary-light/[10%] dark:focus:bg-primary-dark/[10%] focus:bg-primary-light/[10%] dark:hover:bg-primary-dark/[8%] hover:bg-primary-light/[8%]" : "dark:active:bg-on-surface-dark/[10%] active:bg-on-surface-light/[10%] dark:focus:bg-on-surface-dark/[10%] focus:bg-on-surface-light/[10%] dark:hover:bg-on-surface-dark/[8%] hover:bg-on-surface-light/[8%]"} group w-[100px] relative h-full`}*/}
				{/*			key={i} onClick={() => setDevice(item.id)}>*/}
				{/*			<div className={"relative w-fit mx-auto h-full flex items-center"}>*/}
				{/*				<div>*/}
				{/*					<Icon*/}
				{/*						className={`${item.id === device ? "text-primary-light dark:text-primary-dark" : "group-hover:text-on-surface-light dark:group-hover:text-on-surface-dark text-on-surface-variant-light dark:text-on-surface-variant-dark"} mx-auto w-1/2 block dark:text-on-surface-variant-dark`}>*/}
				{/*						{item.icon}*/}
				{/*					</Icon>*/}
				{/*					<label*/}
				{/*						className={`${item.id === device ? "text-primary-light dark:text-primary-dark" : "group-hover:text-on-surface-light dark:group-hover:text-on-surface-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark"} w-1/2 font-medium text-title-small`}>*/}
				{/*						{item.label}*/}
				{/*					</label>*/}
				{/*				</div>*/}
				{/*				{device === item.id && <div*/}
				{/*					className={"absolute left-0  bottom-0 rounded-t-full h-[3px] w-full bg-primary-light dark:bg-primary-dark"}/>}*/}
				{/*			</div>*/}
				{/*		</button>*/}
				{/*	)}*/}
				{/*</div>*/}
				{/*<div*/}
				{/*	className={"md:block hidden h-[64px] mx-4 relative  w-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}>*/}

				{/*</div>*/}
				{/*<IconButton>*/}
				{/*	settings*/}
				{/*</IconButton>*/}
				{/*<Button type={"outlined"} className={"mx-2"}>*/}
				{/*	Draft*/}
				{/*</Button>*/}
				{/*<Button onClick={() => {*/}
				{/*	updatePage()*/}
				{/*}} icon={"publish"} type={"filled"}>*/}
				{/*	Publish*/}
				{/*</Button>*/}
				{/*</div>*/}

			</div>

		{/*isSettingDialogOpen*/}
			{isSettingDialogOpen && <div
				className={"z-999 p-4 bg-black/[40%]  fixed top-0 h-[calc(100vh)] inset-0 flex items-center justify-end"}>
				<div
					className={"overflow-hidden  rounded-[16px] relative w-[380px] h-full bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
					<div
						className={"flex items-center justify-between  py-6 border-outline-variant-light dark:border-outline-variant-dark pl-4 pr-2 space-x-3"}>
						<h3 className={"text-title-large font-medium"}>
							Settings
						</h3>
						<IconButton onClick={() => setIsSettingDialogOpen(false)}>
							close
						</IconButton>
					</div>
					<div className={"px-4 h-[calc(100%_-_81px_-_96px)] space-y-4 "}>
						<div className={"space-y-3"}>
							<label
								className={"text-title-small font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								Meta Settings
							</label>
							<FilledTextField className={"mt-4"} label={"Title & Meta Title"}/>
							{/*<FilledTextField label={""}/>*/}
							<FilledTextArea label={"Meta Description"}/>

							<ul>

								<div className={"mb-2"}>
									Display Page as
								</div>
								{reservedPageKeyLists.map((item, index) => <li
									onClick={() => setReservedPageKey(item.key)} key={index}
									className={"flex cursor-pointer h-[56px] items-center"}>
									<div
										className={"h-fit flex items-center mr-2 text-primary-light dark:text-primary-dark"}>
										{item.key === reservedPageKey ? <Icon>
												radio_button_checked
											</Icon> :
											<Icon>
												radio_button_unchecked
											</Icon>}
									</div>
									<div className={"text-body-large text-on-surface-light dark:text-on-surface-dark"}>
										{item.title}
									</div>
								</li>)}
							</ul>

						</div>

					</div>
					<div
						className={"flex w-full bg-surface-container-low-light dark:bg-surface-container-low-dark items-center space-x-2 absolute bottom-0 pt-4 pb-6 px-4 border-t border-outline-light dark:border-outline-dark"}>
						<Button type={"filled"} icon={"save"}>
							Save Settings
						</Button>
						<Button type={"outlined"}>
							Close
						</Button>
					</div>

				</div>
			</div>
			}
			{console.log(data.type)}
			<div
				className={`  py-4 transition-all duration-300  ease-in-out w-full ${device === 0 ? "md:max-w-[490px] w-[490px] min-w-[490px] mx-auto" : ` ${data.type==="loop"?"md:max-w-[600px] w-[600px] min-w-[600px]":"md:w-[calc(100%)] mx-auto"}`} `}>
				<div
					className={"z-10 rounded-[16px] min-h-screen bg-surface-light"}>
					{addedItems.map((item, i) =>
						<div key={item.uniqueId + i + "-top"} className={"relative  group"}>
							<DropContainer setIsSearchMenuOpen={setIsSearchMenuOpen} idNumber={i}
							               handleAddedItems={handleAddedItems}/>
							<ComponentGenerator lastPost={lastPost}
							                    editDialogOpenComponentId={editDialogOpenComponentId}
							                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}
							                    siteSetting={siteSetting} dragFunc={drag}
							                    removeItemFunc={removeItemFunc} isDesktop={device === 1}
							                    editItem={editItem} idNumber={i}
							                    item={item}/>
						</div>
					)}

					<div className={"relative"}>
						<DropContainer setIsSearchMenuOpen={setIsSearchMenuOpen} idNumber={addedItems.length}
						               selected={addedItems}
						               handleAddedItems={handleAddedItems} key={"start"}
						               firstItem={addedItems.length === 0}/>
					</div>
				</div>
			</div>

		</div>
	)
}
