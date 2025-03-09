'use client'
import Switch from "@m3/switch/Switch";
import {useState} from "react";
import Link from "next/link";
import Divider from "@m3/dividers/Divider";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
import IconButton from "@m3/icon_buttons/IconButton";
import NavigationBar from "@m3/navigation_bars/NavigationBar";
import placeholder from "lodash/fp/placeholder";
import Button from "@m3/buttons/Button";
import BasicDialog from "@m3/dialogs/BasicDialog";
import FilledTextField from "@m3/text_fields/FilledTextField";
import IconPicker from "@page_builder/editor_components/IconPicker";
import FilledSelect from "@m3/text_fields/FilledSelect";
import MenuItemEditor from "@admin/admin-panel/pages/MenuItemEditor";

function MakeMenuDialog({isOpen, onClose, pagesData, handleSubmit}) {
    // const [iconSelected,setIconSelected] = useState("home");
    const [data, setData] = useState({title: "", page: "", icon: "home"});
    const handleChangeData = (key, value) => {
        setData({...data, [key]: value});
    }
    let pages = pagesData.data.map((page) => {
        return ({title: page.title, value: page._id})
    })
    // console.log(pages)
    return (
        <BasicDialog cancelButton={{label: "cancel", action: onClose}}
                     submitButton={{label: "Submit", type: "filled", action: () => handleSubmit(data)}}
                     description={"Add new menu item to the menu list of desktop"} className={"w-[480px]"}
                     onClose={onClose} isOpen={isOpen} title={"Add desktop menu items"}>
            <Divider/>
            <div className={"py-2 grid grid-cols-1 gap-4"}>
                <IconPicker onIconSelect={(v) => handleChangeData("icon", v)} defValue={data.icon} label={"Menu Icon"}/>
                <FilledTextField onChange={(e) => handleChangeData("title", e.target.value)} value={data.title}
                                 label={"title"}/>
                <div className={"col-span-1"}>
                    <FilledSelect options={pages} onChange={(e) => handleChangeData("page", e.target.value)}
                                  value={data.page} label={"page"}/>
                </div>
            </div>
            <Divider/>
        </BasicDialog>
    )
}

export default function MenuEditor({menuSetting, siteSetting, data}) {
    const color = siteSetting.color
    const [menuListItems, setMenuListItems] = useState({drawer: [], mobile: [], desktop: []})
    const [addListDrawerOpen, setAddListDrawerOpen] = useState(null)
    // const defaultMenuItems = [
    //     {
    //         title: "Home",
    //         icon: "home",
    //         link: "/",
    //         priority: 1,
    //         isShowOnDesktop: true,
    //         isShowOnMobile: true,
    //         isShowOnBottomNavigation: true,
    //         isDisabled: true
    //     },
    //     {
    //         title: "Inventor",
    //         icon: "inventory",
    //         link: "/inventory",
    //         priority: 1,
    //         isShowOnDesktop: true,
    //         isShowOnMobile: true,
    //         isShowOnBottomNavigation: true,
    //         isDisabled: true
    //     },
    //     {
    //         title: "About us",
    //         icon: "about",
    //         link: "/about-us",
    //         priority: 1,
    //         isShowOnDesktop: true,
    //         isShowOnMobile: true,
    //         isShowOnBottomNavigation: true,
    //         isDisabled: true
    //     },
    //     {
    //         title: "Contact US",
    //         icon: "about",
    //         link: "/contact-us",
    //         priority: 1,
    //         isShowOnDesktop: true,
    //         isShowOnMobile: true,
    //         isShowOnBottomNavigation: true,
    //         isDisabled: true
    //     }
    // ]
    // const [menuItems, setMenuItems] = useState([...defaultMenuItems])
    // const [mobileMenuListItems,setMobileMenuListItems] = useState([])
    const [items, setItems] = useState({
        showLogo: menuSetting.showLogo || true,
        logoCenter: false,
        menuRight: false,
        isSearchbarInput: true,
        backgroundColor: rgbaObjToRgba(color.surfaceContainer),
        itemColor: rgbaObjToRgba(color.onSurfaceVariant),
        selectedItemColor: rgbaObjToRgba(color.primary),
        searchBarBackground: rgbaObjToRgba(color.surfaceContainerHigh),
        searchBarPlaceholderColor: rgbaObjToRgba(color.onSurfaceVariant),
        searchBarInputColor: rgbaObjToRgba(color.onSurface),
        searchBarIconColor: rgbaObjToRgba(color.onSurfaceVariant),
        searchBarPrimaryIconColor: rgbaObjToRgba(color.onSurface),

    });
    const [mobileMenuItems, setMobileMenuItems] = useState({
        // appbarBackgroundColor: rgbaObjToRgba(color.surfaceContainer),
        // appbarBackgroundColor: rgbaObjToRgba(color.surfaceContainer),
        showDrawer: true,
        showBottomSheet: true,
        showSearchBarFull: false,

        // bottom sheet colors
        bottomSheetBackground: rgbaObjToRgba(color.surfaceContainer),
        bottomSheetSelectBackground: rgbaObjToRgba(color.secondaryContainer),
        bottomSheetSelectIconColor: rgbaObjToRgba(color.onSecondaryContainer),
        bottomSheetSelectTextColor: rgbaObjToRgba(color.onSurface),
        bottomSheetUnSelectColor: rgbaObjToRgba(color.onSurfaceVariant),
        // top appbar colors
        topAppbarBackground: rgbaObjToRgba(color.surfaceContainer),
        topAppbarTextColor: rgbaObjToRgba(color.onSurface),
        topAppbarVariantTextColor: rgbaObjToRgba(color.onSurfaceVariant),

        searchBarBackground: rgbaObjToRgba(color.surfaceContainerHigh),
        searchBarPlaceholderColor: rgbaObjToRgba(color.onSurfaceVariant),
        searchBarInputColor: rgbaObjToRgba(color.onSurface),
        searchBarIconColor: rgbaObjToRgba(color.onSurfaceVariant),
        searchBarPrimaryIconColor: rgbaObjToRgba(color.onSurface),

    });

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

    const saveData = async () => {
        // console.log("weknflk",  checkColorIsCustom(color, mobileMenuItems.bottomSheetBackground))
        const data = {
            showLogo: items.showLogo,
            logoCenter: items.logoCenter,
            menuRight: items.menuRight,
            isSearchbarInput: items.isSearchbarInput,
            showDrawer: mobileMenuItems.showDrawer,
            showBottomSheet: mobileMenuItems.showBottomSheet,
            showSearchBarFull: mobileMenuItems.showSearchBarFull,
            mobileMenuColors: {
                bottomSheetBackground: checkColorIsCustom(color, mobileMenuItems.bottomSheetBackground),
                bottomSheetSelectBackground: checkColorIsCustom(color, mobileMenuItems.bottomSheetSelectBackground),
                bottomSheetSelectIconColor: checkColorIsCustom(color, mobileMenuItems.bottomSheetSelectIconColor),
                bottomSheetSelectTextColor: checkColorIsCustom(color, mobileMenuItems.bottomSheetSelectTextColor),
                bottomSheetUnSelectColor: checkColorIsCustom(color, mobileMenuItems.bottomSheetUnSelectColor),
                topAppbarBackground: checkColorIsCustom(color, mobileMenuItems.topAppbarBackground),
                topAppbarTextColor: checkColorIsCustom(color, mobileMenuItems.topAppbarTextColor),
                topAppbarVariantTextColor: checkColorIsCustom(color, mobileMenuItems.topAppbarVariantTextColor),
                searchBarBackground: checkColorIsCustom(color, mobileMenuItems.searchBarBackground),
                searchBarPlaceholderColor: checkColorIsCustom(color, mobileMenuItems.searchBarPlaceholderColor),
                searchBarInputColor: checkColorIsCustom(color, mobileMenuItems.searchBarInputColor),
                searchBarIconColor: checkColorIsCustom(color, mobileMenuItems.searchBarIconColor),
                searchBarPrimaryIconColor: checkColorIsCustom(color, mobileMenuItems.searchBarPrimaryIconColor),
            },
            desktopMenuColors: {
                backgroundColor: checkColorIsCustom(color, items.backgroundColor),
                itemColor: checkColorIsCustom(color, items.itemColor),
                selectedItemColor: checkColorIsCustom(color, items.selectedItemColor),
                searchBarBackground: checkColorIsCustom(color, items.searchBarBackground),
                searchBarPlaceholderColor: checkColorIsCustom(color, items.searchBarPlaceholderColor),
                searchBarInputColor: checkColorIsCustom(color, items.searchBarInputColor),
                searchBarIconColor: checkColorIsCustom(color, items.searchBarIconColor),
                searchBarPrimaryIconColor: checkColorIsCustom(color, items.searchBarPrimaryIconColor),
            }
        }
        try {
            fetch(`/api/menu/${menuSetting._id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }).then(response =>
                    console.log("")

                // setIsOpen(true)
            ).then(menuSetting => alert(menuSetting));
        } catch (error) {
            alert('An error occurred!');
        }
    }
    const handleOnChangeValues = (key, value) => {
        setItems({...items, [key]: value})
    }
    const handleOnChangeMobileValues = (key, value) => {
        setMobileMenuItems({...mobileMenuItems, [key]: value})
    }
    const handleChangeMenuList = (key, value) => {
        let newMenuList = {...menuListItems}
        newMenuList[key].push(value)
        setMenuListItems(newMenuList)
        // console.log("ewklnfklw", newMenuList)
        setAddListDrawerOpen(null)

    }
    return (
        <>
            <div
                className={"py-4 z-999 sticky top-[0px] container mx-auto  bg-surface-container-high-light dark:bg-surface-container-high-dark flex items-center justify-between"}>
                <h1 className={" px-4 text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>
                    Menu Setting
                </h1>
                <Button onClick={() => saveData()} type="filled" icon={"save"}>
                    Save
                </Button>
            </div>
            <div className={"container mx-auto pb-8 pt-6 "}>
                <MakeMenuDialog handleSubmit={(v) => handleChangeMenuList(addListDrawerOpen, v)} pagesData={data}
                                onClose={() => setAddListDrawerOpen(null)} isOpen={addListDrawerOpen !== null}/>

                <h2 className={"mb-4 px-4 text-headline-small font-black  text-on-surface-light dark:text-on-surface-dark"}>
                    Desktop
                </h2>
                <div className={"space-x-4 flex "}>
                    <div className={"w-8/12 space-y-4"}>
                        <div
                            className={" relative rounded-[24px] h-[700px] flex items-center px-6 bg-surface-container-light dark:bg-surface-container-dark"}>
                            <div style={{background: rgbaObjToRgba(color.surface)}}
                                 className={"h-[600px] border-[6px] border-outline-light dark:border-outline-dark w-full rounded-[16px] overflow-hidden"}>
                                <div style={{backgroundColor: items.backgroundColor}}
                                     className={"relative w-full border-outline-variant-light dark:border-outline-variant-dark items-center px-6 flex h-[64px] "}>

                                    {!items.logoCenter && <h1
                                        className={"mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>
                                        Logo
                                    </h1>}
                                    {items.menuRight ? items.isSearchbarInput ?
                                        <div className={`${!items.logoCenter && "ml-2"} mr-auto w-4/12`}>
                                            <div className={"relative w-full"}>
                                                <Icon
                                                    className={"absolute text-on-surface-light dark:text-on-surface-dark left-4 top-1/2 transform -translate-y-1/2"}>
                                                    search
                                                </Icon>
                                                <input placeholder="Search..."
                                                       className={"placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark text-body-large px-[56px] border-0 h-[56px] w-full rounded-full bg-surface-container-high-light dark:bg-surface-container-high-dark"}/>
                                                {/*<Icon*/}
                                                {/*    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark absolute right-4 top-1/2 transform -translate-y-1/2"}>*/}
                                                {/*    close*/}
                                                {/*</Icon>*/}
                                            </div>
                                        </div> : <div className={`${!items.logoCenter && "ml-2"} mr-auto`}><IconButton>
                                            search
                                        </IconButton></div> : ""}
                                    <ul className={`${items.menuRight && "ml-auto"} *:px-4 *:relative *:h-full flex items-center`}>
                                        <li style={{color: items.selectedItemColor}}
                                            className={"font-bold py-2 text-primary-light dark:text-primary-dark"}>
                                            Home
                                        </li>
                                        <li style={{color: items.itemColor}}
                                            className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                            Inventory
                                        </li>
                                    </ul>
                                    {!items.menuRight ? items.isSearchbarInput ? <div className={`ml-auto w-4/12`}>
                                        <div className={"relative w-full"}>
                                            <Icon style={{color: items.searchBarPrimaryIconColor}}
                                                  className={"absolute left-4 top-1/2 transform -translate-y-1/2"}>
                                                search
                                            </Icon>
                                            <input style={{
                                                background: items.searchBarBackground,
                                                color: items.searchBarInputColor
                                            }} placeholder="Search..."
                                                   className={"searchInputD text-body-large px-[56px] border-0 h-[56px] w-full rounded-full"}/>
                                            <style>
                                                {/*searchBarVariantColor*/}
                                                {` 
                    .searchInputD::placeholder { 
                        color: ${items.searchBarPlaceholderColor}; 
                    }`
                                                }
                                            </style>
                                            {/*<Icon*/}
                                            {/*    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark absolute right-4 top-1/2 transform -translate-y-1/2"}>*/}
                                            {/*    close*/}
                                            {/*</Icon>*/}
                                        </div>
                                    </div> : <div className={"ml-auto"}><IconButton>
                                        search
                                    </IconButton></div> : ""}
                                    {items.logoCenter && <h1
                                        className={"absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex-grow mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>
                                        Logo
                                    </h1>}
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
                    <div className={"w-4/12"}>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Basic Menu Setting
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit website menu design and items for desktop version
                            </p>
                        </div>
                        <ul className={"py-2"}>
                            <li className={"flex justify-between  px-4 py-3 h-[88px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Show Logo
                                    </label>
                                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                        Do you have show your Logo in menu. you can add your logo from <Link
                                        className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}
                                        href={"/admin/setting"}>here</Link>
                                    </p>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeValues("showLogo", v)}
                                            isCheck={items.showLogo}/>
                                </div>
                            </li>
                            {/*<Divider type={"inset-middle"}/>*/}
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Make logo center
                                    </label>
                                    {/*<p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*/}
                                    {/*    Do you have show your Logo in menu. you can add your logo from <Link*/}
                                    {/*    className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}*/}
                                    {/*    href={"/admin/setting"}>here</Link>*/}
                                    {/*</p>*/}
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeValues("logoCenter", v)}
                                            isCheck={items.logoCenter}/>
                                </div>
                            </li>
                            {/*<Divider type={"inset-middle"}/>*/}
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Make menu items right
                                    </label>
                                    {/*<p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*/}
                                    {/*    Do you have show your Logo in menu. you can add your logo from <Link*/}
                                    {/*    className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}*/}
                                    {/*    href={"/admin/setting"}>here</Link>*/}
                                    {/*</p>*/}
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeValues("menuRight", v)}
                                            isCheck={items.menuRight}/>
                                </div>
                            </li>
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Background Color
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker onChange={(v) => handleOnChangeValues("backgroundColor", v)}
                                                 value={items.backgroundColor}/>
                                </div>
                            </li>
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Selected menu color
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker onChange={(v) => handleOnChangeValues("selectedItemColor", v)}
                                                 value={items.selectedItemColor}/>
                                </div>
                            </li>
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Menu item color
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker onChange={(v) => handleOnChangeValues("itemColor", v)}
                                                 value={items.itemColor}/>
                                </div>
                            </li>
                        </ul>
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>

                            <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                                Searchbar
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit menu search bar design and items for desktop version
                            </p>
                        </div>
                        <ul className={"py-2"}>
                            <li className={"flex justify-between  px-4 py-3 h-[88px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Show Searchbar with input & popup
                                    </label>
                                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                        searchbar can show with 2 different style. first with icon and full screen modal
                                        or
                                        with input and popup
                                    </p>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeValues("isSearchbarInput", v)}
                                            isCheck={items.isSearchbarInput}/>
                                </div>
                            </li>
                            {/*<Divider type={"inset-middle"}/>*/}
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Searchbar background color
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker onChange={(v) => handleOnChangeValues("searchBarBackgroundColor", v)}
                                                 value={items.searchBarBackground}/>
                                </div>
                            </li>
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Searchbar icon color
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker onChange={(v) => handleOnChangeValues("", v)}
                                                 value={items.searchBarIconColor}/>
                                </div>
                            </li>
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Searchbar text color
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker onChange={(v) => handleOnChangeValues("", v)}
                                                 value={items.searchBarInputColor}/>
                                </div>
                            </li>
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Searchbar placeholder color
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker onChange={(v) => handleOnChangeValues("", v)}
                                                 value={items.searchBarPlaceholderColor}/>
                                </div>
                            </li>
                        </ul>
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>

                            <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                                Popup
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit popup submenu design and items for desktop version
                            </p>
                        </div>
                        <ul className={"py-2"}>
                            <li className={"flex justify-between  px-4 py-3 h-[88px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Show Logo
                                    </label>
                                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                        Do you have show your Logo in menu. you can add your logo from <Link
                                        className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}
                                        href={"/admin/setting"}>here</Link>
                                    </p>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeValues("showLogo", v)}
                                            isCheck={items.showLogo}/>
                                </div>
                            </li>
                            {/*<Divider type={"inset-middle"}/>*/}
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Make logo center
                                    </label>
                                    {/*<p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*/}
                                    {/*    Do you have show your Logo in menu. you can add your logo from <Link*/}
                                    {/*    className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}*/}
                                    {/*    href={"/admin/setting"}>here</Link>*/}
                                    {/*</p>*/}
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeValues("logoCenter", v)}
                                            isCheck={items.logoCenter}/>
                                </div>
                            </li>
                            {/*<Divider type={"inset-middle"}/>*/}
                            <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Make menu items right
                                    </label>
                                    {/*<p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*/}
                                    {/*    Do you have show your Logo in menu. you can add your logo from <Link*/}
                                    {/*    className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}*/}
                                    {/*    href={"/admin/setting"}>here</Link>*/}
                                    {/*</p>*/}
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeValues("menuRight", v)}
                                            isCheck={items.menuRight}/>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className={"pb-8 pt-2"}>
                    <Divider className={"!border-outline-light dark:!border-outline-dark"}/>
                </div>
                <h2 className={"mb-4 px-4 text-headline-small font-black  text-on-surface-light dark:text-on-surface-dark"}>
                    Mobile
                </h2>
                <div className={"space-x-4 flex"}>
                    <div className={"w-8/12 h-fit"}>
                        <div
                            className={"relative rounded-[24px] h-[700px] max-h-[calc(100vh_-_120px)] flex items-center py-6 px-6 bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div
                                className={"border-[6px] relative overflow-hidden border-outline-light dark:border-outline-dark rounded-[16px] bg-surface-light h-full w-[350px] mx-auto"}>
                                {/*<div className={"w-full bg-surface-light dark:bg-surface-dark h-[64px] "}>*/}
                                {mobileMenuItems.showSearchBarFull ?
                                    <div className={"absolute px-2 top-2 left-0 w-full"}>
                                        <div style={{background: mobileMenuItems.searchBarBackground}}
                                             className={"flex relative h-[56px] rounded-full"}>
                                            {!mobileMenuItems.showDrawer ?
                                                <Icon style={{color: mobileMenuItems.searchBarPrimaryIconColor}}
                                                      className={"left-4 absolute top-1/2 transform -translate-y-1/2"}>
                                                    search
                                                </Icon> :
                                                <Icon style={{color: mobileMenuItems.searchBarPrimaryIconColor}}
                                                      className={"left-4 absolute top-1/2 transform -translate-y-1/2 text-on-surface-light dark:text-on-surface-dark"}>
                                                    menu
                                                </Icon>}
                                            <input style={{color: mobileMenuItems.searchBarInputColor}}
                                                   placeholder={"search"}
                                                   className={"searchInput pl-14 text-body-large text-on-surface-light dark:text-on-surface-dark appearance-none h-full w-full border-0 bg-transparent"}/>
                                            <style>
                                                {/*searchBarVariantColor*/}
                                                {` 
                    .searchInput::placeholder { 
                        color: ${mobileMenuItems.searchBarPlaceholderColor}; 
                    }`
                                                }
                                            </style>
                                            {mobileMenuItems.showDrawer &&
                                                <Icon style={{color: mobileMenuItems.searchBarIconColor}}
                                                      className={"right-4 absolute top-1/2 transform -translate-y-1/2 !text-on-surface-variant-light dark:!text-on-surface-variant-dark"}>
                                                    search
                                                </Icon>}
                                        </div>
                                    </div> : <div style={{background: mobileMenuItems.topAppbarBackground}}
                                                  className={"px-4 flex items-center h-[64px]"}>
                                        {mobileMenuItems.showDrawer &&
                                            <Icon style={{color: mobileMenuItems.topAppbarTextColor}}
                                                  className={"left-4 mr-6"}>
                                                menu
                                            </Icon>}
                                        <h2 className={"flex-1 text-title-large text-on-surface-light dark:text-on-surface-dark font-black"}>
                                            Logo
                                        </h2>
                                        <Icon style={{color: mobileMenuItems.topAppbarVariantTextColor}}
                                              className={"  !text-on-surface-variant-light dark:!text-on-surface-variant-dark"}>
                                            search
                                        </Icon>
                                    </div>}
                                <div style={{background: rgbaObjToRgba(color.surface)}} className={"h-full"}>
                                </div>
                                {mobileMenuItems.showBottomSheet &&
                                    <div style={{background: mobileMenuItems.bottomSheetBackground}}
                                         className={"px-2 absolute bottom-0 left-0 space-x-2 h-[80px] w-full flex "}>
                                        <button className={" pt-3 pb-4 w-full"}>
                                            <div style={{
                                                background: mobileMenuItems.bottomSheetSelectBackground,
                                                color: mobileMenuItems.bottomSheetSelectIconColor
                                            }}
                                                 className={"mx-auto rounded-full h-[32px] w-[64px] flex items-center justify-center mb-1"}>
                                                <Icon fill={1}>
                                                    home
                                                </Icon>
                                            </div>
                                            <label style={{color: mobileMenuItems.bottomSheetSelectTextColor}}
                                                   className={"text-label-medium font-medium text-center"}>
                                                Label
                                            </label>
                                        </button>
                                        <button className={" w-full"}>
                                            <div style={{color: mobileMenuItems.bottomSheetUnSelectColor}}
                                                 className={" mx-auto rounded-full h-[32px] w-[64px] flex items-center justify-center mb-1"}>
                                                <Icon fill={0}>
                                                    post
                                                </Icon>
                                            </div>
                                            <label style={{color: mobileMenuItems.bottomSheetUnSelectColor}}
                                                   className={"text-center text-label-medium font-medium "}>
                                                Label
                                            </label>
                                        </button>
                                    </div>}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className={"w-4/12 "}>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Bottom Menu Setting
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Add Bottom menu to show your website like application in mobile
                            </p>
                        </div>
                        <ul className={"py-2"}>
                            <li className={"flex justify-between  px-4 py-3 h-[88px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Mobile app design
                                    </label>
                                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                        You can turn it on to show your website menu such mobile app.
                                    </p>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeMobileValues("showBottomSheet", v)}
                                            isCheck={mobileMenuItems.showBottomSheet}/>
                                </div>
                            </li>
                            {mobileMenuItems.showBottomSheet &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Bottom menu background
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("bottomSheetBackground", v)}
                                            value={mobileMenuItems.bottomSheetBackground}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showBottomSheet &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Bottom menu selected background color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("bottomSheetSelectBackground", v)}
                                            value={mobileMenuItems.bottomSheetSelectBackground}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showBottomSheet &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Bottom menu selected icon color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("bottomSheetSelectIconColor", v)}
                                            value={mobileMenuItems.bottomSheetSelectIconColor}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showBottomSheet &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Bottom menu selected text color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("bottomSheetSelectTextColor", v)}
                                            value={mobileMenuItems.bottomSheetSelectTextColor}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showBottomSheet &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Bottom menu unselected color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("bottomSheetUnSelectColor", v)}
                                            value={mobileMenuItems.bottomSheetUnSelectColor}/>
                                    </div>
                                </li>
                            }
                        </ul>
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                                Appbar
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Make change top appbar setting
                            </p>
                        </div>
                        <ul className={"py-2"}>
                            <li className={"flex justify-between  px-4 py-3 h-[88px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Show Drawer
                                    </label>
                                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                        You can turn it on to show your website menu such mobile app.
                                    </p>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeMobileValues("showDrawer", v)}
                                            isCheck={mobileMenuItems.showDrawer}/>
                                </div>
                            </li>
                            {!mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Menu Background
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("topAppbarBackground", v)}
                                            value={mobileMenuItems.topAppbarBackground}/>
                                    </div>
                                </li>
                            }
                            {!mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Primary Color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("topAppbarTextColor", v)}
                                            value={mobileMenuItems.topAppbarTextColor}/>
                                    </div>
                                </li>
                            }
                            {!mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Variant Color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("topAppbarVariantTextColor", v)}
                                            value={mobileMenuItems.topAppbarVariantTextColor}/>
                                    </div>
                                </li>
                            }
                        </ul>
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>

                            <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                                Searchbar
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit menu search bar design and items for desktop version
                            </p>
                        </div>
                        <ul className={"py-2"}>
                            <li className={"flex justify-between  px-4 py-3 h-[88px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        Search bar extended
                                    </label>
                                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                        You can not show searchbar extended and top appbar in the same time.
                                    </p>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch setIsCheck={(v) => handleOnChangeMobileValues("showSearchBarFull", v)}
                                            isCheck={mobileMenuItems.showSearchBarFull}/>
                                </div>
                            </li>
                            {mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Searchbar Background
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("searchBarBackground", v)}
                                            value={mobileMenuItems.searchBarBackground}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Searchbar primary icon color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("searchBarPrimaryIconColor", v)}
                                            value={mobileMenuItems.searchBarPrimaryIconColor}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Searchbar icon color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("searchBarIconColor", v)}
                                            value={mobileMenuItems.searchBarIconColor}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Searchbar placeholder color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("searchBarPlaceholderColor", v)}
                                            value={mobileMenuItems.searchBarPlaceholderColor}/>
                                    </div>
                                </li>
                            }
                            {mobileMenuItems.showSearchBarFull &&
                                <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            Searchbar input color
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <ColorPicker
                                            onChange={(v) => handleOnChangeMobileValues("searchBarInputColor", v)}
                                            value={mobileMenuItems.searchBarInputColor}/>
                                    </div>
                                </li>
                            }
                        </ul>


                    </div>
                </div>

                <div className={"pb-8 pt-8"}>
                    <Divider className={"!border-outline-light dark:!border-outline-dark"}/>
                </div>
              <MenuItemEditor  menuSetting={menuSetting} color={color} pages={data} menuItems={""}/>
            </div>
        </>
    )
}