'use client'
import {use, useState} from "react";
import FAB from "@m3/floating_action_buttons/FAB";
import MenuDialogComponent from "./MenuDialogComponent";
import MenuComponent from "@admin/admin-panel/pages/MenuComponent";






/**
 * Renders the MenuEditor component, which manages menu settings and provides functionalities to add or edit menus.
 *
 * @param {Object} params - Object containing all necessary input data and settings.
 * @param {Array} params.allMenus - An array of all menu objects to be displayed and edited.
 * @param {Object} params.menuSetting - Settings specific to the menus.
 * @param {Object} params.siteSetting - Site-wide settings, including theming properties such as color.
 * @param {Array} params.data - Additional data required for rendering menus or related components.
 * @return {JSX.Element} The rendered component representing the menu editor interface.
 */
export default function MenuEditor({allMenus, menuSetting, siteSetting, data}) {
	const color = siteSetting.color
	// const [isMenuItemDialogOpen, setIsMenuItemDialogOpen] = useState(false)
	const [selectedMenu, setSelectedMenu] = useState(-1)

	return (
		<div className={"bg-surface-container-light  dark:bg-surface-dark w-full min-h-screen"}>
			<div
				className={"px-6 py-6 bg-surface-container-light dark:bg-surface-dark border-b h-[64px] sticky top-0 left-0 border-outline-light dark:border-outline-dark flex items-center justify-between"}>
				<h2 className={"text-title-large text-on-surface-light dark:text-on-surface-dark font-extrabold "}>
					Menu Setting
				</h2>
			</div>
			<FAB onClick={() => {
				// setIsMenuDialogOpen(true)
				setSelectedMenu(0)
			}} className={"fixed bottom-4 right-4"} color={"secondary"} label={"Add New Menu"}>
				add
			</FAB>
			{selectedMenu === 0 && <MenuDialogComponent setMenuId={setSelectedMenu} menuId={selectedMenu}/>}
			<div className={"px-6 py-6"}>
				<div className={"grid grid-cols-3 gap-4"}>
					{allMenus.map((menu, index) => <MenuComponent pagesData={data} menu={menu}
					                                     key={index}/>)}
				</div>
			</div>
		</div>
	)
}