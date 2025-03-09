import Button from "@m3/buttons/Button";
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import {useState} from "react";
import TextField from "@m3/text_fields/TextField";
import Checkbox from "@m3/checkboxes/Checkbox";
import Icon from "@m3/assets/icons/Icon";
import SegmentedButton from "@m3/segmented_buttons/SegmentedButton";
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
import Switch from "@m3/switch/Switch";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Divider from "@m3/dividers/Divider";
import AutoSelect from "@m3/auto_complete/AutoSelect";
import {v4 as uuidv4} from 'uuid';

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

function AddAndEditMenuItemDialog({menuItems,editItem, pages, onItemChange, setIsDialogOpen}) {
	const [menuItemSelected,setMenuItemSelected] = useState(editItem!==-1?menuItems.find(item=>item.id===editItem):null)

	const [link, setLink] = useState(menuItemSelected?.slug || "")
	const [title, setTitle] = useState(menuItemSelected?.title || "")
	const [parentMenu, setParentMenu] = useState(menuItemSelected?.parent || "")
	const onSave = () => {
		const data = {slug: link, title: title, id: editItem!==-1?editItem:uuidv4(), parent: parentMenu}
		console.log(data)
		onItemChange(data,editItem!==-1)
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
				<AutoSelect onChange={(e) => {
					setParentMenu(e.target.value)
				}} value={parentMenu}
				            label={"Link"}>

					{menuItems.filter(item=>item.parent==="").filter(item => link !== "" ? item.title.toLowerCase().includes(parentMenu.toLowerCase()) : item).map((item, index) =>
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

				</AutoSelect>
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

export default function MenuItemEditor({menuItems, pages, color, menuSetting}) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	// const [selectedItem, setSelectedItem] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [isEditMode, setIsEditMode] = useState(-1);
	const [desktopMenuItems, setDesktopMenuItems] = useState([]);
	const [mobileTopMenuItems, setMobileTopMenuItems] = useState([
		// {id: 1, title: "Home", path: "/"}

	]);
	const [mobileBottomMenuItems, setMobileBottomMenuItems] = useState([
		// {id: 1, title: "Home", path: "/"}

	]);
	const [link, setLink] = useState({});
	// console.log(menuSetting)
	const itemsDesktop = menuSetting.desktopMenuColors

	const desktopMenu = {
		itemColor: checkColorIsCustom(color, itemsDesktop.bottomSheetBackground),
		selectedItemColor: checkColorIsCustom(color, itemsDesktop.bottomSheetBackground),
		backgroundColor: checkColorIsCustom(color, itemsDesktop.bottomSheetBackground),
	}
	const onChangeHandler = (data) => {
		const menuItems = selectedIndex === 0 ? [...desktopMenuItems] : selectedIndex === 1 ? [...mobileTopMenuItems] : [...mobileBottomMenuItems]

		if (isEditMode!==-1) {
			const indexEdit = menuItems.findIndex(item=>item.id === data.id)
			console.log(indexEdit)
			menuItems[indexEdit] = data
			setIsEditMode(-1)
		} else {
			menuItems.push(data)
		}
		setIsDialogOpen(false)

		selectedIndex === 0 ? setDesktopMenuItems(menuItems) : selectedIndex === 1 ? setMobileTopMenuItems(menuItems) : setMobileBottomMenuItems(menuItems)

	}
	return (
		<div>
			{isDialogOpen && <AddAndEditMenuItemDialog editItem={isEditMode} setIsDialogOpen={setIsDialogOpen}
			                                           menuItems={selectedIndex === 0 ? desktopMenuItems : selectedIndex === 1 ? mobileTopMenuItems : mobileBottomMenuItems}
			                                           onItemChange={onChangeHandler} pages={pages}/>}
			<div className={"flex items-center justify-between"}>
				<h2 className={"mb-4 px-4 text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>
					Menu Items
				</h2>

			</div>
			<div className={"w-full"}>
				<div
					className={"overflow-hidden rounded-[0px]  dark:border-outline-dark border-outline-light"}>
					<div
						className={" w-full mt-2  border-collapse"}>
						<SegmentedButton length={3} className={"max-w-full w-full"}
						                 onChangeSelectedIndex={(index) => setSelectedIndex(index)}
						                 selectedIndex={selectedIndex} items={[{
							title: "Desktop Menu"
						}, {
							title: "Mobile Top Menu"
						}, {
							title: "Mobile Bottom Menu"
						}]}>
						</SegmentedButton>
						<div className={"grid mt-8 grid-cols-12 gap-6"}>
							<div className={"col-span-8 flex items-center justify-between"}>
								<div className={"w-full"}>
									<div className={"space-x-4 flex "}>
										<div className={"w-full space-y-4"}>
											<div
												className={" relative rounded-[24px] h-[700px] flex items-center px-6 bg-surface-container-light dark:bg-surface-container-dark"}>
												<div style={{background: rgbaObjToRgba(color.surface)}}
												     className={"h-[600px] border-[6px] border-outline-light dark:border-outline-dark w-full rounded-[16px] overflow-hidden"}>
													<div
													     className={` relative w-full border-outline-variant-light dark:border-outline-variant-dark items-center px-6 flex h-[64px] `}>

														<h1
															className={"mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>
															Logo
														</h1>

														<ul className={` *:px-4 *:relative *:h-full flex items-center`}>
															{desktopMenuItems.map((item)=><li key={item.id} style={{color: desktopMenu.selectedItemColor}}
															     className={"font-bold py-2 "}>
																{item.title}
															</li>)}

														</ul>
													</div>
												</div>
											</div>
											{/*<div className={"flex space-x-4 items-center"}>*/}
											{/*    <div*/}
											{/*        className={"w-6/12 relative rounded-[24px] h-[400px] flex items-center px-6 py-6 bg-surface-container-low-light dark:bg-surface-container-low-dark"}>*/}
											{/*        {items.isSearchbarInput ? <div className={"w-full"}>*/}
											{/*            <div className={"relative w-full"}>*/}
											{/*                <Icon*/}
											{/*                    className={"absolute text-on-surface-light dark:text-on-surface-dark left-4 top-1/2 transform -translate-y-1/2"}>*/}
											{/*                    search*/}
											{/*                </Icon>*/}
											{/*                <input value={"in search mode"} placeholder="Search..."*/}
											{/*                       className={"placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark text-body-large px-[56px] border-0 h-[56px] w-full rounded-t-[16px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}/>*/}
											{/*                <Icon*/}
											{/*                    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark absolute right-4 top-1/2 transform -translate-y-1/2"}>*/}
											{/*                    close*/}
											{/*                </Icon>*/}
											{/*            </div>*/}
											{/*            <div*/}
											{/*                className={"rounded-b-[16px] pb-4 border-t border-outline-light dark:border-outline-dark w-full h-[240px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>*/}

											{/*            </div>*/}
											{/*        </div> : <div*/}
											{/*            className={"rounded-[8px] overflow-hidden  w-full h-full flex justify-center items-center"}>*/}
											{/*            <div className={"relative w-full h-full"}>*/}
											{/*                <div className={"relative py-2 px-2 bg-surface-container-highest-light h-full"}>*/}
											{/*                    <Icon*/}
											{/*                        className={"absolute text-on-surface-light dark:text-on-surface-dark left-6 top-6"}>*/}
											{/*                        search*/}
											{/*                    </Icon>*/}
											{/*                    <input value={"in search mode"} placeholder="Search..."*/}
											{/*                           className={"rounded-full placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark text-body-large px-[56px] border-0 h-[56px] w-full bg-surface-container-low-light dark:bg-surface-container-low-dark"}/>*/}

											{/*                </div>*/}
											{/*            </div>*/}

											{/*        </div>*/}
											{/*        }*/}
											{/*    </div>*/}
											{/*    <div*/}
											{/*        className={"w-6/12 relative rounded-[24px] h-[400px] flex items-center px-6 bg-surface-container-low-light dark:bg-surface-container-low-dark"}>*/}
											{/*        <div style={{backgroundColor: items.backgroundColor}}*/}
											{/*             className={"w-full border-outline-variant-light dark:border-outline-variant-dark items-center px-6 flex h-[64px] "}>*/}
											{/*            <h1 className={"mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>*/}
											{/*                Logo*/}
											{/*            </h1>*/}
											{/*            <ul className={" *:px-4 *:relative *:h-full flex items-center"}>*/}
											{/*                <li className={"relative text-on-surface-light dark:text-on-surface-dark"}>*/}
											{/*                    Inventory*/}
											{/*                    <div className={"absolute top-[48px]"}>*/}
											{/*                        <ul style={{backgroundColor: items.backgroundColor}}*/}
											{/*                            className={"shadow-lg w-[200px] rounded-[16px] py-2 bg-surface-container-high-light dark:bg-surface-container-high-dark"}>*/}
											{/*                            <li className={"text-title-small text-on-surface-light dark:text-on-surface-dark px-4 flex items-center"}>*/}
											{/*                                Inventory*/}
											{/*                                <Icon className={"ml-1"} size={16}>*/}
											{/*                                    chevron_right*/}
											{/*                                </Icon>*/}
											{/*                            </li>*/}
											{/*                            <li className={"h-[56px] text-on-surface-variant-light dark:text-on-surface-variant-dark px-4 py-2 flex items-center"}>more*/}
											{/*                                item*/}
											{/*                            </li>*/}
											{/*                            <li className={"h-[56px] text-on-surface-variant-light dark:text-on-surface-variant-dark px-4 py-2 flex items-center"}>more*/}
											{/*                                item*/}
											{/*                            </li>*/}
											{/*                        </ul>*/}
											{/*                    </div>*/}
											{/*                </li>*/}
											{/*            </ul>*/}
											{/*        </div>*/}
											{/*    </div>*/}
											{/*</div>*/}
										</div>


									</div>
								</div>
							</div>
							<div
								className={"col-span-4"}>
								<div
									className={"h-full rounded-[24px] w-full bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
									<div className={"flex items-center justify-between pt-6 pb-4 px-6"}>
										<h2 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large "}>
											Menu Items
										</h2>
										<Button onClick={() => setIsDialogOpen(true)} icon={"add"} type={""}>
											Add New
										</Button>
									</div>
									{selectedIndex === 0 && desktopMenuItems.filter(item=>item.parent==="").map((item, index) =>
										<>
											<li onClick={()=> {
												setIsEditMode(item.id)
												setIsDialogOpen(true)
											}} className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
											    key={item.id}>
												<div className={"ml-0 flex-grow-0 w-8/12"}>
													<p className={"text-body-large"}>
														{item.title}
													</p>
													<p className={"text-body-medium"}>
														path: {item.slug}
													</p>
												</div>
											</li>
											{desktopMenuItems.filter(ch=>ch.parent === item.id).map(ch=><li onClick={()=> {
												setIsEditMode(item.id)
												setIsDialogOpen(true)
											}} className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
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
									{selectedIndex === 1 && mobileTopMenuItems.filter(item=>item.parent==="").map((item, index) =>
										<>
											<li onClick={()=> {
												setIsEditMode(item.id)
												setIsDialogOpen(true)
											}} className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
											    key={item.id}>
												<div className={"ml-0 flex-grow-0 w-8/12"}>
													<p className={"text-body-large"}>
														{item.title}
													</p>
													<p className={"text-body-medium"}>
														path: {item.slug}
													</p>
												</div>
											</li>
											{desktopMenuItems.filter(ch=>ch.parent === item.id).map(ch=><li onClick={()=> {
												setIsEditMode(item.id)
												setIsDialogOpen(true)
											}} className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
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
									{selectedIndex === 2 && mobileBottomMenuItems.filter(item=>item.parent==="").map((item, index) =>
										<>
											<li onClick={()=> {
												setIsEditMode(item.id)
												setIsDialogOpen(true)
											}} className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
											    key={item.id}>
												<div className={"ml-0 flex-grow-0 w-8/12"}>
													<p className={"text-body-large"}>
														{item.title}
													</p>
													<p className={"text-body-medium"}>
														path: {item.slug}
													</p>
												</div>
											</li>
											{desktopMenuItems.filter(ch=>ch.parent === item.id).map(ch=><li onClick={()=> {
												setIsEditMode(item.id)
												setIsDialogOpen(true)
											}} className={"h-[72px] flex hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]  items-center  px-6 text-on-surface-light dark:text-on-surface-dark"}
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
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}