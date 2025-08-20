import {useState} from "react";
import Button from "@m3/buttons/Button";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import MenuItemDialogComponent from "@admin/admin-panel/pages/MenuItemDialogComponent";
import MenuItemComponent from "@admin/admin-panel/pages/MenuItemComponent";
import {makeMenuItemsUpdate} from "@controller/MenuController";

/**
 * MenuComponent manages the rendering and functionality of a menu interface, including editing,
 * saving, and displaying menu items. It allows toggling between normal and edit modes, handles
 * interactions for adding, updating, and saving menu items, and integrates with various sub-components.
 *
 * @param {Object} props The properties object passed to the component.
 * @param {Object} props.menu The menu object containing details such as the menu ID, name, and the list of menu items.
 * @param {Array} props.pagesData The list of page data that can be associated with menu items.
 * @return {JSX.Element} The JSX rendering the menu interface, including menu items and controls for managing them.
 */
export default function MenuComponent({menu,pagesData}) {
	const [isMenuItemDialogOpen, setIsMenuItemDialogOpen] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [menuItems, setMenuItems] = useState(menu?.menuItems ? menu?.menuItems : [] )
	const [isInEditMode, setIsInEditMode] = useState(false)
	const [selectedMenuItem, setSelectedMenuItem] = useState(-2)
	const handleMenuItemDialogChanges = (data) => {
		if (selectedMenuItem === -1) {
			let newMenuItems = [...menuItems]
			newMenuItems.push(data)
			setMenuItems(newMenuItems)
		} else {
			let newMenuItems = [...menuItems]
			newMenuItems[selectedMenuItem] = data
			setMenuItems(newMenuItems)
		}
		setSelectedMenuItem(-2)
	}
	const onSave = async () => {
		await makeMenuItemsUpdate(menu._id,menuItems)
	}
	return (
		<div
			className={"w-full h-[400px]  bg-surface-bright-light border-outline-variant-light rounded-[24px]"}>
			<div className={"pl-4 pr-2 py-4 flex items-center border-b border-outline-variant-light"}>
				<div className={"flex-grow"}>
					<h3 className={"text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark"}>
						{menu.name}
					</h3>
					<h3 className={"text-title-medium font-medium text-on-surface-variant-light"}>
						{menu.menuId}
					</h3>
				</div>
				<div className={"relative"}>
					{isInEditMode ? <div className={"flex items-center space-x-2"}>
						{/*<Switch isCheck={isPrimaryMenu} setIsCheck={(e) => setIsPrimaryMenu(!isPrimaryMenu)}/>*/}

						<Button onClick={async () => {
							setIsInEditMode(false)

							await onSave()


						}} type={"tonal"}>
							Save
						</Button>
					</div> : <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
						more_vert
					</IconButton>}
					{isMenuOpen && <div
						className={"bg-surface-container-light dark:bg-surface-container-dark absolute top-[48px] z-999 right-0 w-[200px] py-2 rounded-[12px]"}>
						<div onClick={() => {
							setIsInEditMode(true)
							setIsMenuOpen(!isMenuOpen)
						}}
						     className={"h-[56px] text-on-surface-light dark:text-on-surface-dark text-body-large w-full after:absolute relative after:inset-0 after:bg-on-surface-light/[8%] after:hidden hover:after:block flex items-center px-4"}>
							<Icon className={"mr-2"}>
								edit
							</Icon>
							Edit Menu Items
						</div>
						<div
							className={"h-[56px] text-error-light dark:text-error-dark text-body-large w-full after:absolute relative after:inset-0 after:bg-error-light/[8%] after:hidden hover:after:block flex items-center px-4"}>
							<Icon className={"mr-2"}>
								delete
							</Icon>
							Delete Menu
						</div>
					</div>}
				</div>
			</div>
			{selectedMenuItem !== -2 && <MenuItemDialogComponent defaultData={selectedMenuItem===-1?null:menuItems[selectedMenuItem]} onClose={()=>setSelectedMenuItem(-2)} handleMenuItemDialogChanges={handleMenuItemDialogChanges} pagesData={pagesData}/>}

			<div className={"h-[calc(100%_-_72px)] overflow-y-auto"}>
				{menuItems.map((item,index)=><MenuItemComponent setIsInEdit={()=>setSelectedMenuItem(0)} menuItem={item} key={index} isInEditMode={isInEditMode}/>)}
				{isInEditMode && <button onClick={() => {
					// addMenuItemDialogOpen(true)
					setSelectedMenuItem(-1)
				}}
				                         className={"h-[56px] w-full px-4 flex items-center before:z-10  before:inset-0 before:bg-primary-light/[8%] before:absolute relative before:hidden hover:before:block text-primary-light  "}>
					<Icon className={"mr-2"}>
						add
					</Icon>
					Add New Item
				</button>}
			</div>
		</div>
	)
}
