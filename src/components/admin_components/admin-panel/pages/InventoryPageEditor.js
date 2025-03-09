'use client'
import FilterChips from "@m3/chips/FilterChips";
import Icon from "@m3/assets/icons/Icon";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";
import React, {useState} from "react";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Divider from "@m3/dividers/Divider";
import Switch from "@m3/switch/Switch";
import FAB from "@m3/floating_action_buttons/FAB";
import Button from "@m3/buttons/Button";
import Image from "next/image";
import {InventoryTypeOne} from "@page_builder/pages-list/InventoryTypeOne";
import {IFrame} from "@page_builder/Iframe";
import {InventoryTypeTwo} from "@page_builder/pages-list/InventoryTypeTwo";
import {index} from "@controller/FileController";
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
import {Dialog} from "@headlessui/react";
import IconButton from "@m3/icon_buttons/IconButton";
import Link from "next/link";
export default function InventoryPageEditor({color}) {
    const [isMobilePreview, setIsMobilePreview] = useState(false);

    const inventoryPageTypeList = [
        {
            title: "Minimal Design"
        },
        {
            title: "Fantasy Design"
        },
    ]
    const inventoryPageImageTypeList = [
        {
            title: "Slider"
        },
        {
            title: "Grid"
        },
    ]
    const inventoryPageFantasyTitleTypeList = [
        {
            title: "Simple"
        },
        {
            title: "Appbar"
        },
    ]
    const inventoryPageFantasyVehicleDetailTypeList = [
        {
            title: "Colorful"
        },
        {
            title: "Simple"
        },
    ]
    const inventoryPageMinimalVehicleDetailTypeList = [
        {
            title: "Simple grid"
        },
        {
            title: "Table"
        },
    ]
    const [inventoryPageOption, setInventoryPageOption] = useState({
        titleType: 0,
        imageType: 0,
        vehicleDetailType: 0,
        isPageExpended: true,
        isSlideShowMoreButton: true,
        showSaveButton: true,
        showShareButton: true,
        showCalculateButton: true,
        topSectionColor: rgbaObjToRgba(color.secondaryContainer),
        titleColor: rgbaObjToRgba(color.onSecondaryContainer),
        infoColor: rgbaObjToRgba(color.onSecondaryContainer),
        tagIconColor: rgbaObjToRgba(color.primary),
        tagTextColor: rgbaObjToRgba(color.onSurface),
        sectionsTextColor: rgbaObjToRgba(color.onSurface),
        showMoreIconColor: rgbaObjToRgba(color.onSurface),
        sectionsIconColor: rgbaObjToRgba(color.onSurfaceVariant),
        filledButtonsBgColor: rgbaObjToRgba(color.primary),
        filledButtonsTextColor: rgbaObjToRgba(color.onPrimary),
        outlinedButtonsBorderColor: rgbaObjToRgba(color.outline),
        outlinedButtonsTextColor: rgbaObjToRgba(color.primary),
        standardButtonsTextColor: rgbaObjToRgba(color.primary),
        tonalButtonsTextColor: rgbaObjToRgba(color.onSecondaryContainer),
        tonalButtonsBackgroundColor: rgbaObjToRgba(color.secondaryContainer),
        fabTextColor: rgbaObjToRgba(color.onSecondaryContainer),
        fabBgColor: rgbaObjToRgba(color.secondaryContainer),
        infoIconColor: rgbaObjToRgba(color.onSurfaceVariant),
        featuresIconColor: rgbaObjToRgba(color.onSurfaceVariant),
        infoTextColor: rgbaObjToRgba(color.onSurface),
        featuresTextColor: rgbaObjToRgba(color.onSurface),
        infoBodyTextColor: rgbaObjToRgba(color.onSurfaceVariant),
        // cardColor:"#f2f2f2"

    });
    const [selectedInventoryPageType, setSelectedInventoryPageType] = useState(0);
    const [inventoryInfoSelected, setInventoryInfoSelected] = useState(["miles", "interior", "est"])
    const [isFullScreenMode, setIsFullScreenMode] = useState(false)
    const updateInventoryPageOptions = (key, value) => {
        setInventoryPageOption({...inventoryPageOption, [key]: value})
    }
    const handleInventoryInfoSelected = (key) => {

        let is = [...inventoryInfoSelected]
        const l = inventoryInfoSelected.indexOf(key)
        if (l === -1) {
            if (inventoryInfoSelected.length < 3) {
                is.push(key)
                setInventoryInfoSelected(is)
            }
        } else {
            setInventoryInfoSelected(is.filter(item => item !== key))
        }


    }
    return (
        <>
            {<Dialog open={isFullScreenMode} onClose={() => setIsFullScreenMode(false)}
                     className={"fixed overflow-hidden  py-6 flex justify-center items-center inset-0 bg-black/[30%] z-999"}>
                <IconButton onClick={() => setIsFullScreenMode(false)} type={"filled"}
                            className={"absolute top-4 right-4 z-[800]"}>
                    close
                </IconButton>
                <div
                    className={`relative ${isMobilePreview ? "w-[380px]" : "w-8/12"}   flex justify-center rounded-[24px]  overflow-scroll  h-[800px]  `}>

                    <div className={"w-full h-full rounded-[24px] "}>
                        {selectedInventoryPageType === 0 &&
                            <InventoryTypeOne isMobilePreview={isMobilePreview} options={inventoryPageOption}
                                              className={""}/>}
                        {selectedInventoryPageType === 1 &&
                            <InventoryTypeTwo isMobilePreview={isMobilePreview} options={inventoryPageOption}
                                              className={""}/>}
                    </div>

                </div>
            </Dialog>}
            <div
                className={"border-b mb-6 flex justify-between border-outline-light container mx-auto h-[72px] items-center "}>
                <div className={"flex items-center"}>
                    <Link href={"/admin/page-builder"}>
                        <IconButton>
                            arrow_back
                        </IconButton>
                    </Link>
                    <h1 className={"ml-2 text-title-large text-on-surface-light dark:text-on-surface-dark font-bold"}>
                        Inventory Card Preview
                    </h1>
                </div>
                <Button  icon={"save"} type="filled">
                    Save
                </Button>
            </div>
            <div className={"container mx-auto py-4 "}>
                {/*<h2 className={"mb-4 px-4 text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>*/}
                {/*    Inventory Page Preview*/}
                {/*</h2>*/}

                <div className={"flex "}>
                    <div
                        className={"group relative  overflow-hidden bg-surface-container-high-light dark:bg-surface-container-high-dark h-fit  md:w-8/12 rounded-[16px]"}>
                        <div className={"absolute top-4 left-4"}>
                            <div className={" flex items-center justify-center"}>
                                <div onClick={() => setIsMobilePreview(false)}
                                     className={`rounded-l-[8px] flex items-center justify-center w-[40px] z-[888] h-[40px] ${isMobilePreview ? "border border-outline-light dark:border-outline-dark text-on-surface-light dark:text-on-surface-dark" : "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark"}`}>
                                    <Icon>
                                        desktop_windows
                                    </Icon>
                                </div>
                                <div onClick={() => setIsMobilePreview(true)}
                                     className={`rounded-r-[8px] flex items-center justify-center w-[40px] z-[888] h-[40px] ${!isMobilePreview ? "border border-outline-light dark:border-outline-dark text-on-surface-light dark:text-on-surface-dark" : "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark"}`}>
                                    <Icon type={"outlined"}>
                                        smartphone
                                    </Icon>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsFullScreenMode(true)}
                                className={"h-10 w-10 flex items-center justify-center rounded-[8px] absolute z-10 right-4 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] text-on-surface-light top-4"}>
                            <Icon>
                                fullscreen
                            </Icon>
                        </button>
                        <div
                            className={`${isMobilePreview ? " max-w-[380px]  w-[380px] h-[1080px]" : "w-[1280px] h-[1080px]"} relative left-1/2 transform  top-1/2 -translate-y-1/2 -translate-x-1/2  bg-transparent`}>
                            {selectedInventoryPageType === 0 &&
                                <InventoryTypeOne isMobilePreview={isMobilePreview} options={inventoryPageOption}
                                                  className={"transform scale-[.5] absolute top-1/2 -translate-y-1/2"}/>}
                            {selectedInventoryPageType === 1 &&
                                <InventoryTypeTwo isMobilePreview={isMobilePreview} options={inventoryPageOption}
                                                  className={"transform scale-[.5] absolute top-1/2 -translate-y-1/2"}/>}

                        </div>
                        {/*<div*/}
                        {/*    className={"group-hover:flex hidden text-primary-light dark:text-primary-dark  items-center justify-center absolute inset-0 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>*/}
                        {/*   */}
                        {/*</div>*/}

                    </div>
                    <div className={"xl:w-4/12 md:w-5/12"}>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Inventory Page Type
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Different designs depending on your taste
                            </p>
                        </div>
                        <ul className={"pt-2 px-2"}>
                            {inventoryPageTypeList.map((item, index) => <li key={item.title + index}
                                                                            onClick={(e) => setSelectedInventoryPageType(index)}>
                                <input className={"hidden"} type="radio" id={item.title + index} name="fav_language"/>
                                <label className={"flex items-center"} htmlFor={item.title + index}>
                                    <div
                                        className={`relative ${selectedInventoryPageType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                        {selectedInventoryPageType === index ? <Icon
                                                className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :
                                            <Icon
                                                className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}
                                    </div>
                                    <span
                                        className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>
                                   {item.title}
                                        </span>
                                </label>
                            </li>)}
                        </ul>
                        <ul className={"mt-0"}>
                            <li
                                className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        {"Make page expended"}
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch
                                        setIsCheck={(v) => updateInventoryPageOptions("isPageExpended", !inventoryPageOption.isPageExpended)}
                                        isCheck={inventoryPageOption.isPageExpended}/>

                                </div>
                            </li>
                        </ul>

                        {selectedInventoryPageType === 1 && <>
                            <div className={"w-full pt-2 pb-4"}>
                                <Divider type={"inset-middle"} className={""}/>
                            </div>
                            <div
                                className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                                <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                    Inventory title & information
                                </h3>
                                <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Select how show title in inventory page
                                </p>
                            </div>
                            <ul className={`${inventoryPageOption.titleType === 1 ? "pt-2" : "py-2"}  px-2`}>
                                {inventoryPageFantasyTitleTypeList.map((item, index) => <li key={item.title + index}
                                                                                            onClick={(e) => updateInventoryPageOptions("titleType", index)}>
                                    <input className={"hidden"} type="radio" id={item.title + index}
                                           name="fav_language"/>
                                    <label className={"flex items-center"} htmlFor={item.title + index}>
                                        <div
                                            className={`relative ${inventoryPageOption.titleType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                            {inventoryPageOption.titleType === index ? <Icon
                                                    className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :
                                                <Icon
                                                    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}
                                        </div>
                                        <span
                                            className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>
                                   {item.title}
                                        </span>
                                    </label>
                                </li>)}
                            </ul>
                            {inventoryPageOption.titleType === 1 && <ul className={"mt-0"}>
                                <li
                                    className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            {"Show save button"}
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <Switch
                                            setIsCheck={(v) => updateInventoryPageOptions("showSaveButton", !inventoryPageOption.showSaveButton)}
                                            isCheck={inventoryPageOption.showSaveButton}/>

                                    </div>
                                </li>
                                <li
                                    className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            {"Show share button"}
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <Switch
                                            setIsCheck={(v) => updateInventoryPageOptions("showShareButton", !inventoryPageOption.showShareButton)}
                                            isCheck={inventoryPageOption.showShareButton}/>

                                    </div>
                                </li>
                                <li
                                    className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            {"Show calculator button in appbar"}
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <Switch
                                            setIsCheck={(v) => updateInventoryPageOptions("showCalculatorButton", !inventoryPageOption.showCalculatorButton)}
                                            isCheck={inventoryPageOption.showCalculatorButton}/>

                                    </div>
                                </li>
                            </ul>}
                        </>}
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Inventory Images
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Select how show images in inventory page
                            </p>
                        </div>
                        <ul className={`${inventoryPageOption.imageType === 0 ? "pt-2" : "py-2"}  px-2`}>
                            {inventoryPageImageTypeList.map((item, index) => <li key={item.title + index}
                                                                                 onClick={(e) => updateInventoryPageOptions("imageType", index)}>
                                <input className={"hidden"} type="radio" id={item.title + index} name="fav_language"/>
                                <label className={"flex items-center"} htmlFor={item.title + index}>
                                    <div
                                        className={`relative ${inventoryPageOption.imageType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                        {inventoryPageOption.imageType === index ? <Icon
                                                className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :
                                            <Icon
                                                className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}
                                    </div>
                                    <span
                                        className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>
                                   {item.title}
                                        </span>
                                </label>
                            </li>)}
                        </ul>
                        {inventoryPageOption.imageType === 0 && <ul className={"mt-0"}>
                            <li
                                className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        {"Show more button"}
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch
                                        setIsCheck={(v) => updateInventoryPageOptions("isSlideShowMoreButton", !inventoryPageOption.isSlideShowMoreButton)}
                                        isCheck={inventoryPageOption.isSlideShowMoreButton}/>

                                </div>
                            </li>
                        </ul>}
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Vehicle information
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Select how show Vehicle information
                            </p>
                        </div>
                        {selectedInventoryPageType === 1 && <ul className={"py-2 px-2"}>
                            {inventoryPageFantasyVehicleDetailTypeList.map((item, index) => <li key={item.title + index}
                                                                                                onClick={(e) => updateInventoryPageOptions("vehicleDetailType", index)}>
                                <input className={"hidden"} type="radio" id={item.title + index} name="fav_language"/>
                                <label className={"flex items-center"} htmlFor={item + index}>
                                    <div
                                        className={`relative ${inventoryPageOption.vehicleDetailType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                        {inventoryPageOption.vehicleDetailType === index ? <Icon
                                                className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :
                                            <Icon
                                                className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}
                                    </div>
                                    <span
                                        className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>
                                   {item.title}
                                        </span>
                                </label>
                            </li>)}
                        </ul>}
                        {selectedInventoryPageType === 0 && <ul className={"py-2 px-2"}>
                            {inventoryPageMinimalVehicleDetailTypeList.map((item, index) => <li key={item.title + index}
                                                                                                onClick={(e) => updateInventoryPageOptions("vehicleDetailType", index)}>
                                <input className={"hidden"} type="radio" id={item.title + index} name="fav_language"/>
                                <label className={"flex items-center"} htmlFor={item + index}>
                                    <div
                                        className={`relative ${inventoryPageOption.vehicleDetailType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                        {inventoryPageOption.vehicleDetailType === index ? <Icon
                                                className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :
                                            <Icon
                                                className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}
                                    </div>
                                    <span
                                        className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>
                                   {item.title}
                                        </span>
                                </label>
                            </li>)}
                        </ul>}

                    </div>
                </div>
                {/*<div className={"flex space-x-4  justify-between "}>*/}
                {/*    <div*/}
                {/*        className={`sticky h-fit top-[56px] ${isMobilePreview ? "max-w-[380px]" : "max-w-full"} w-full bg-surface-container-low-light rounded-[24px]`}>*/}
                {/*        <div*/}
                {/*            style={{background: "repeating-linear-gradient(45deg,transparent,rgba(0,0,0,.04) 4px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 16px)"}}*/}
                {/*            className={"flex h-full items-center justify-center rounded-[24px] w-full p-4"}>*/}

                {/*          */}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}