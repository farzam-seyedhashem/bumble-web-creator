import {useState} from "react";
import {storeMenu} from "@controller/MenuController";
import FilledTextField from "@m3/text_fields/FilledTextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Switch from "@m3/switch/Switch";
import Button from "@m3/buttons/Button";

/**
 * Renders the MenuDialogComponent, which allows users to add or edit menu information.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.menuId - The ID of the current menu. A value of 0 indicates a new menu.
 * @param {Function} props.setMenuId - Callback function to update the menu ID.
 * @return {JSX.Element} The MenuDialogComponent, comprising a form for menu details and save/close actions.
 */
export default function MenuDialogComponent({menuId, setMenuId}) {
	const [menuName, setMenuName] = useState("")
	const [newMenuId, setNewMenuId] = useState("")
	const [isPrimaryMenu, setIsPrimaryMenu] = useState(false)
	const onSave = async () => {
		await storeMenu(JSON.stringify({
			menuId: newMenuId,
			name: menuName,
			isPrimaryMenu: isPrimaryMenu
		}))
	}
	return (
		<div className={"fixed inset-0 flex items-center justify-center px-4 py-4 bg-black/[20%] z-999"}>
			<div className={"bg-surface-light  dark:bg-surface-derk w-[480px] h-[400px] rounded-[24px]"}>
				<div className={"h-full relative p-6"}>


					<h2 className={"text-on-surface-light text-ce] text-title-large"}>
						{menuId === 0 ? "Add new menu" : ""}
					</h2>
					<div className={"mt-6 grid grid-cols-1 gap-6"}>
						<FilledTextField onChange={(e) => setMenuName(e.target.value)} label={"Menu Name"}/>
						<div className={"relative"}>
							<FilledTextField onChange={(e) => setNewMenuId(e.target.value)} value={newMenuId}
							                 label={"Menu Id"}/>
							<IconButton
								onClick={() => setNewMenuId(menuName.toLowerCase().replace(/[^a-zA-Z ]/g, " ").replaceAll(" ", "-"))}
								rooClassName={"absolute right-0 top-1/2 transform -translate-y-1/2"}>
								add_notes
							</IconButton>
						</div>
						<div className={"flex items-center h-[56px] justify-between"}>
							<label>
								Is Primary Menu?
							</label>
							<Switch isCheck={isPrimaryMenu} setIsCheck={(e) => setIsPrimaryMenu(!isPrimaryMenu)}/>
						</div>
					</div>
					<div
						className={"py-6 px-6 justify-end flex absolute bottom-0 right-0 w-full border-t border-outline-variant-light"}>
						<Button onClick={() => setMenuId(-1)}>
							Close
						</Button>
						<Button onClick={async () => {
							await onSave()
						}} type={(menuName === "" || newMenuId === "") ? "disabled" : "filled"}>
							Save
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
