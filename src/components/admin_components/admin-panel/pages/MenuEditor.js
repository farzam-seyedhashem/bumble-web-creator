'use client'
import Switch from "@m3/switch/Switch";
import {useState} from "react";
import Link from "next/link";
import Divider from "@m3/dividers/Divider";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
import IconButton from "@m3/icon_buttons/IconButton";

export default function MenuEditor({siteSetting}) {
    const color = siteSetting.color
    const [items, setItems] = useState({
        showLogo: true,
        logoCenter: false,
        menuRight: false,
        isSearchbarInput: true,
        backgroundColor: rgbaObjToRgba(color.surface),
        itemColor: rgbaObjToRgba(color.onSurfaceVariant),
        selectedItemColor: rgbaObjToRgba(color.primary),

    });

    const handleOnChangeValues = (key, value) => {
        console.log(value)
        setItems({...items, [key]: value})
    }
    return (
        <div className={"container mx-auto py-8 "}>
            <h2 className={"mb-4 px-4 text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>
                Desktop
            </h2>
            <div className={"space-x-4 flex "}>
                <div className={"w-8/12 space-y-4"}>
                    <div
                        className={" relative rounded-[24px] h-[400px] flex items-center px-6 bg-surface-container-light dark:bg-surface-container-dark"}>

                        {/*<div*/}
                        {/*    className={"w-full border-b border-outline-variant-light dark:border-outline-variant-dark items-center px-6 flex bg-surface-light dark:bg-surface-dark h-[64px] "}>*/}
                        {/*    <h1 className={"mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>*/}
                        {/*        Logo*/}
                        {/*    </h1>*/}
                        {/*    <ul className={" *:px-4 *:relative *:h-full flex items-center"}>*/}
                        {/*        <li className={"text-primary-light dark:text-primary-dark"}>*/}
                        {/*            Home*/}
                        {/*           <div className={"absolute w-[calc(100%_-_32px)] -bottom-[20px] left-1/2 transform -translate-x-1/2 h-[3px] bg-primary-light dark:bg-primary-dark rounded-t-[3px]"}/>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            Inventory*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={"w-full border-outline-variant-light dark:border-outline-variant-dark items-center px-6 flex bg-surface-light dark:bg-surface-dark h-[64px] "}>*/}
                        {/*    <h1 className={"mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>*/}
                        {/*        Logo*/}
                        {/*    </h1>*/}
                        {/*    <ul className={" *:px-4 *:relative *:h-full flex items-center"}>*/}
                        {/*        <li className={"font-bold py-2 rounded-[4px] bg-surface-container-high-light dark:bg-surface-container-high-dark text-primary-light dark:text-primary-dark"}>*/}
                        {/*            Home*/}
                        {/*        </li>*/}
                        {/*        <li className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                        {/*            Inventory*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
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
                            </div> : <div className={"ml-auto"}><IconButton>
                                search
                            </IconButton></div> : ""}
                            {items.logoCenter && <h1
                                className={"absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex-grow mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>
                                Logo
                            </h1>}
                        </div>
                    </div>
                    <div className={"flex space-x-4 items-center"}>
                        <div
                            className={"w-6/12 relative rounded-[24px] h-[400px] flex items-center px-6 py-6 bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            {items.isSearchbarInput ? <div className={"w-full"}>
                                <div className={"relative w-full"}>
                                    <Icon
                                        className={"absolute text-on-surface-light dark:text-on-surface-dark left-4 top-1/2 transform -translate-y-1/2"}>
                                        search
                                    </Icon>
                                    <input value={"in search mode"} placeholder="Search..."
                                           className={"placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark text-body-large px-[56px] border-0 h-[56px] w-full rounded-t-[16px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}/>
                                    <Icon
                                        className={"text-on-surface-variant-light dark:text-on-surface-variant-dark absolute right-4 top-1/2 transform -translate-y-1/2"}>
                                        close
                                    </Icon>
                                </div>
                                <div
                                    className={"rounded-b-[16px] pb-4 border-t border-outline-light dark:border-outline-dark w-full h-[240px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>

                                </div>
                            </div> : <div className={"rounded-[8px] overflow-hidden  w-full h-full flex justify-center items-center"}>
                                <div className={"relative w-full h-full"}>
                                    <div className={"relative py-2 px-2 bg-surface-container-highest-light h-full"}>
                                        <Icon
                                            className={"absolute text-on-surface-light dark:text-on-surface-dark left-6 top-6"}>
                                            search
                                        </Icon>
                                        <input value={"in search mode"} placeholder="Search..."
                                               className={"rounded-full placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark text-body-large px-[56px] border-0 h-[56px] w-full bg-surface-container-low-light dark:bg-surface-container-low-dark"}/>

                                    </div>
                                </div>

                            </div>
                            }
                        </div>
                        <div
                            className={"w-6/12 relative rounded-[24px] h-[400px] flex items-center px-6 bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div style={{backgroundColor: items.backgroundColor}}
                                 className={"w-full border-outline-variant-light dark:border-outline-variant-dark items-center px-6 flex h-[64px] "}>
                                <h1 className={"mr-4 font-black text-[24px] text-on-surface-light dark:text-on-surface-dark"}>
                                    Logo
                                </h1>
                                <ul className={" *:px-4 *:relative *:h-full flex items-center"}>
                                    <li className={"relative text-on-surface-light dark:text-on-surface-dark"}>
                                        Inventory
                                        <div className={"absolute top-[48px]"}>
                                            <ul style={{backgroundColor: items.backgroundColor}}
                                                className={"shadow-lg w-[200px] rounded-[16px] py-2 bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                                                <li className={"text-title-small text-on-surface-light dark:text-on-surface-dark px-4 flex items-center"}>
                                                    Inventory
                                                    <Icon className={"ml-1"} size={16}>
                                                        chevron_right
                                                    </Icon>
                                                </li>
                                                <li className={"h-[56px] text-on-surface-variant-light dark:text-on-surface-variant-dark px-4 py-2 flex items-center"}>more
                                                    item
                                                </li>
                                                <li className={"h-[56px] text-on-surface-variant-light dark:text-on-surface-variant-dark px-4 py-2 flex items-center"}>more
                                                    item
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-4/12 py-4"}>
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
                                    searchbar can show with 2 different style. first with icon and full screen modal or with input and popup
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
                                    Make logo center
                                </label>
                                {/*<p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*/}
                                {/*    Do you have show your Logo in menu. you can add your logo from <Link*/}
                                {/*    className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}*/}
                                {/*    href={"/admin/setting"}>here</Link>*/}
                                {/*</p>*/}
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("", v)}
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
            <h2 className={"mb-4 px-4 text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>
                Mobile
            </h2>
            <div className={"w-8/12"}>
                <div
                    className={"w-7/12 relative rounded-[24px] h-[400px] flex items-center px-6 bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                    <div className={"w-full bg-surface-light dark:bg-surface-dark h-[64px] "}>

                    </div>
                </div>
            </div>


        </div>
    )
}