'use client'
import {Dialog, Transition} from "@headlessui/react";
import {useState, Fragment, useRef, useEffect} from "react";
import Icon from "@m3/assets/icons/Icon";
import IconButton from "@m3/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";
import Components from "@/Components.json";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";

function ItemView({item, viewMode,dragFunc,onDragEnd}) {
	return (
		<div onDragEnd={()=>{
			onDragEnd()
			// document.getElementById("search-component-dialog").style.visibility = "visible"
		}} id={item.uid} onDragStart={(e) => {
			dragFunc(e)

		}} draggable={true}
		     className={`${viewMode === "grid" ? "block py-4 rounded-[12px] overflow-hidden px-0 *:text-center *:flex *:justify-center *:mx-auto" : "px-4 flex items-center h-[56px]"} cursor-grab relative after:absolute after:inset-0 after:opacity-0 hover:after:opacity-[8%] focus:after:opacity-10 active:after:opacity-10 after:bg-on-surface-light dark:after:bg-on-surface-dark `}>
			<Icon weight={500} size={24} fill={1}
			      className={`${viewMode === "grid" ? "mb-2" : ""} text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
				{item.icon}
			</Icon>
			<div
				className={`${viewMode === "grid" ? "text-label-medium" : "text-body-large ml-4 flex-1"}    text-on-surface-light dark:text-on-surface-dark`}>
				{item.label}
			</div>
		</div>
	)
}

function GroupView({groupName, components, viewMode, searchText,dragFunc,onDragEnd}) {
	const [isMinimise, setIsMinimise] = useState(true)
	return (
		<div>
			<div className={`${viewMode === "grid" ? "px-6" : "px-4"} flex items-center  pt-3 pb-2 justify-between`}>
				<h2 className="text-on-surface-light text-label-large font-medium ">{groupName}</h2>
				{components.filter(item=>item?.icon).length>=5&&<>
					{isMinimise ? <button onClick={() => setIsMinimise(!isMinimise)}
					                      className={"flex items-center font-medium text-label-large text-primary-light dark:text-primary-dark"}>
						<Icon className={"mr-1"} size={20}>
							add
						</Icon>
						Show More
					</button> : <button onClick={() => setIsMinimise(!isMinimise)}
					                    className={"flex items-center font-medium text-label-large text-primary-light dark:text-primary-dark"}>
						<Icon className={"mr-1"} size={20}>
							check_indeterminate_small
						</Icon>
						Show Less
					</button>
					}
				</>}
			</div>
			<div className={viewMode === "grid" ? "grid grid-cols-5 gap-4 px-4" : ""}>
				{components.filter(item => item.label && item?.label.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => item.icon &&
					((isMinimise && index < 5) || (!isMinimise)) &&
					<ItemView onDragEnd={onDragEnd} dragFunc={dragFunc} viewMode={viewMode} key={index} item={item}/>
				)}
			</div>
		</div>
	)
}

export default function ComponentDrawer({dragFunc}) {
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false)
	// const handleSearchMenuOpen = (v) => {
	// 	setIsSearchMenuOpen(v)
	// 	setIsOpen(v)
	// }
	const [searchText, setSearchText] = useState("")
	const [viewMode, setViewMode] = useState("grid")
	const searchDialogWrapperRef = useRef()
	const searchComponentDialogRef = useRef(null)
	const dragFuncHandler = (e) => {
		dragFunc(e)
		// document.getElementById("search-component-dialog").style.visibility = "hidden"
	}
	const onDragEnd = () =>{
		setIsSearchMenuOpen(false)
		setSearchText("")
	}



	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

	}, []);
	const handleClickOutside = (event) => {
		if (searchDialogWrapperRef.current && !searchDialogWrapperRef.current.contains(event.target)) {
			setIsSearchMenuOpen(false)
			setSearchText("")
		}
	};
	const groupedComponents = Components.components.reduce((acc, component) => {
		const groupName = component.group.groupName;
		if (!acc[groupName]) {
			acc[groupName] = [];
		}
		acc[groupName].push(component);
		return acc;
	}, {});
	console.log(groupedComponents)

	return (
		<>
			<div ref={searchDialogWrapperRef} onClick={() => !isSearchMenuOpen && setIsSearchMenuOpen(true)}
			     className={`${isSearchMenuOpen ? "" : "rounded-full after:absolute after:inset-0 after:opacity-0 hover:after:opacity-[8%] focus:after:opacity-10 active:after:opacity-10 after:rounded-full"} relative   after:z-20   after:bg-on-surface-light dark:after:bg-on-surface-dark  w-6/12 h-[56px] max-w-[720px] min-w-[360px]`}>
				<Icon
					className={"absolute z-10 left-4 text-on-surface-light dark:text-on-surface-dark top-1/2 transform -translate-y-1/2"}>
					search
				</Icon>
				<input onChange={(e) => setSearchText(e.target.value)}
				       placeholder={"Search Component ..."}
				       className={`bg-surface-container-high-light ${isSearchMenuOpen ? " rounded-t-[16px]" : "rounded-full"} px-[56px] text-body-large text-on-surface-light dark:text-on-surface-dark placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark  border-0 w-full  h-full dark:bg-surface-container-high-dark`}/>
				<div
				     className={"flex items-center absolute z-10 right-0  top-1/2 transform -translate-y-1/2"}>
					{!isSearchMenuOpen?<IconButton
						onClick={() => setIsSearchMenuOpen(false)}
						className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
						{isSearchMenuOpen ? "arrow_drop_up" : "arrow_drop_down"}
					</IconButton>:<IconButton className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}
						onClick={() => setViewMode(viewMode==="grid"?"list":"grid")}>
						{viewMode==="grid" ? "grid_view" : "table_rows"}
					</IconButton>}
					{/*<IconButton*/}
					{/*	className={""}>*/}
					{/*	{isSearchMenuOpen ? "arrow_drop_up" : "arrow_drop_down"}*/}
					{/*</IconButton>*/}
				</div>

				{isSearchMenuOpen &&
					<div id={"search-component-dialog"} className={` bg-surface-container-high-light rounded-b-[16px] pb-4 h-[340px] overflow-hidden`}>
						<div className={"h-full w-full overflow-scroll"}>
							{Object.entries(groupedComponents).map(([groupName, components]) => (
								<GroupView onDragEnd={onDragEnd} dragFunc={dragFuncHandler} searchText={searchText} viewMode={viewMode} key={groupName}
								           groupName={groupName} components={components}/>
							))}

						</div>
					</div>}
			</div>
		</>
	)
}