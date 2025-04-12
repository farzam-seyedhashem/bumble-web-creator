'use client'
import Checkbox from "@m3/checkboxes/Checkbox";
import FilterChips from "@m3/chips/FilterChips";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";
import React, {useEffect, useState} from "react";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Divider from "@m3/dividers/Divider";
import Link from "next/link";
import Switch from "@m3/switch/Switch";
import Appearance from "@admin/admin-panel/settings/Appearance";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import AOS from 'aos';
import {Dialog} from "@headlessui/react";
import IconButton from "@m3/icon_buttons/IconButton";

export default function InventoryCardEditor({inventorySetting, color}) {
    const [pageNumber, setPageNumber] = useState(0)
    const cardTypeList = [
        {
            title: "Simple card"
        },
        {
            title: "Curve image card"
        },
        {
            title: "Bottom button"
        },
        {
            title: "Inline button"
        },
        {
            title: "Multi image card"
        },
        {
            title: "Without background card"
        }

    ]
    const cardAppearanceList = [
        {
            key: "cardColor",
            title: "Card background color"
        },
        {
            key: "titleColor",
            title: "Title color"
        },
        {
            key: "inventoryInfoColor",
            title: "Card information text color",
        },
        {
            key: "inventoryInfoBgColor",
            title: "Card information background color",
        },
        {
            key: "priceColor",
            title: "Price color",
        },
        {
            key: "priceBgColor",
            title: "Price background color",
        },
        {
            key: "buttonColor",
            title: "Button text color",
        },
        {
            key: "buttonBgColor",
            title: "Button background color",
        }
    ]

    function checkColorIsCustom(colorSet, selectedColor) {
        let v = null
        Object.values(colorSet).map((color, index) => {
            // console.log(rgbaObjToRgba(color),selectedColor,Object.keys(colorSet),Object.keys(colorSet)[index])
            if (rgbaObjToRgba(color) === selectedColor) {
                v = Object.keys(colorSet)[index];

            }
        })

        return v ? v : selectedColor
    }

    const [inventoryCard, setInventoryCard] = useState({
        showReadMoreButton: true,
        showInventoryInfo: true,
        buttonType: 0,
        titleType: "h3",
        readMore: true,
        showVehicleInfo: true,
        cardColor: rgbaObjToRgba(color.surfaceContainerHighest),
        titleColor: rgbaObjToRgba(color.onSurface),
        priceColor: rgbaObjToRgba(color.onSurface),
        priceBgColor: rgbaObjToRgba(color.background),
        inventoryInfoColor: rgbaObjToRgba(color.onSurfaceVariant),
        inventoryInfoBgColor: rgbaObjToRgba(color.surface),
        inventoryBgInfoColor: rgbaObjToRgba(color.surface),
        buttonColor: rgbaObjToRgba(color.onPrimary),
        buttonBgColor: rgbaObjToRgba(color.primary),
        // cardColor:"#f2f2f2"

    });
    useEffect(() => {
        // AOS.init()
    }, []);
    const [inventoryCardType, setInventoryCardType] = useState(0);
    const [inventoryInfoSelected, setInventoryInfoSelected] = useState(["miles", "interior", "est"])
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const updateInventoryCard = (key, value) => {
        setInventoryCard({...inventoryCard, [key]: value})
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
    const saveData = () => {

        const data = {
            showReadMoreButton: inventoryCard.showReadMoreButton,
            showInventoryInfo: inventoryCard.showInventoryInfo,
            buttonType: inventoryCard.buttonType,
            titleType: inventoryCard.titleType,
            readMore: inventoryCard.readMore,
            showVehicleInfo: inventoryCard.showVehicleInfo,
            cardAppearance: {
                cardColor: checkColorIsCustom(color, inventoryCard.cardColor),
                titleColor: checkColorIsCustom(color, inventoryCard.titleColor),
                priceColor: checkColorIsCustom(color, inventoryCard.priceColor),
                priceBgColor: checkColorIsCustom(color, inventoryCard.priceBgColor),
                inventoryInfoColor: checkColorIsCustom(color, inventoryCard.inventoryInfoColor),
                inventoryInfoBgColor: checkColorIsCustom(color, inventoryCard.inventoryInfoBgColor),
                inventoryBgInfoColor: checkColorIsCustom(color, inventoryCard.inventoryBgInfoColor),
                buttonColor: checkColorIsCustom(color, inventoryCard.buttonColor),
                buttonBgColor: checkColorIsCustom(color, inventoryCard.buttonBgColor),
            }
        }
        console.log(inventorySetting)
        try {
            fetch(`/api/inventory-page/${inventorySetting._id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }).then(response =>
                    console.log(response)

                // setIsOpen(true)
            ).then(menuSetting => alert("ewkjnfkjwen"));
        } catch (error) {
            alert('jhhhh');
        }
    }
    return (
        <>
            <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
                <div className="z-999 fixed inset-0 bg-black/30" aria-hidden="true"/>

                {/* Full-screen container to center the panel */}
                <div className="fixed z-[1001] inset-0 flex w-screen items-center justify-center p-4">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel
                        className="w-7/12 relative mx-auto bg-surface-light dark:bg-surface-dark overflow-hidden rounded-[28px]">
                        {pageNumber === 0 && <>
                            <div className={" h-[400px] bg-secondary-container-light dark:bg-secondary-container-dark"}>

                                wef

                            </div>
                            <button
                                className={"h-10 w-10 rounded-full flex items-center justify-center text-on-surface-light dark:text-on-surface-dark bg-surface-light dark:bg-surface-dark z-999 absolute right-6 top-6"}>
                                <Icon>
                                    close
                                </Icon>
                            </button>
                            <div className={"px-6 mt-6"}>
                                <h1 className={"text-on-surface-light dark:text-on-surface-dark font-extrabold text-title-large"}>
                                    Edit inventory card
                                </h1>
                                <p className={"text-body-large  font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Edit and customize your website inventory cards with a few steps.
                                </p>
                                <p className={"text-title-small font-bold mt-1.5 text-on-surface-light dark:text-on-surface-dark"}>
                                    List of customization items list :
                                </p>
                                <ul className={"mt-1 text-label-large font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                    <li>
                                        Card shape type
                                    </li>
                                    <li>
                                        Headline Tag
                                    </li>
                                    <li>
                                        Information
                                    </li>
                                    <li>
                                        Button
                                    </li>
                                    <li>
                                        Color
                                    </li>
                                </ul>
                            </div>
                        </>}
                        {pageNumber !== 0 && <>
                            <div
                                className={"relative  overflow-hidden rounded-[24px]  h-[500px]  bg-secondary-container-light dark:bg-secondary-container-dark"}>
                                <div
                                    className={" absolute  scroll-up-animation -bottom-2 left-0 flex justify-center h-[500px] w-full "}>
                                    <div
                                        className={"  relative  h-[600px]   w-full  rounded-[24px]"}>

                                        <div
                                            className={"scale-[70%] relative border-[6px] border-outline-light dark:border-outline-dark overflow-hidden flex h-full items-center justify-center rounded-[24px] w-full"}>
                                            <div
                                                className={" py-6 border container mx-auto grid grid-cols-12 gap-6 absolute  h-full"}
                                                style={{
                                                    backgroundColor: rgbaObjToRgba(color.surface),
                                                    width: (inventoryCardType === 3 || inventoryCardType === 2 || inventoryCardType === 5 || inventoryCardType === 4) ? "1080px" : "1280px"
                                                }}>
                                                <div
                                                    className={"flex items-center col-span-12 border-b border-outline-variant-light dark:border-outline-variant-dark py-4"}>
                                                    <h1 className={"flex-1 font-black text-headline-large"}>
                                                        Inventory List
                                                    </h1>
                                                    <div className={" flex items-center"}>

                                                        <div
                                                            className={"*:w-4/12 w-[400px] border border-outline-variant-light dark:border-outline-variant-dark rounded-full"}>
                                                            <button style={{
                                                                color: rgbaObjToRgba(color.onSecondaryContainer),
                                                                backgroundColor: rgbaObjToRgba(color.secondaryContainer)
                                                            }}
                                                                    className={"rounded-l-full font-medium text-label-large px-6 h-[40px]"}>
                                                                Sort by A - Z
                                                            </button>
                                                            <button className={"px-6 h-[40px] text-label-large"}>
                                                                Sort by Z - A
                                                            </button>
                                                            <button className={"px-6 h-[40px] text-label-large"}>
                                                                Sort by Price
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<div className={"col-span-3 space-y-4"}>*/}
                                                {/*    <div style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}*/}
                                                {/*         className={"rounded-[16px] w-full h-[300px]"}>*/}

                                                {/*    </div>*/}
                                                {/*    <div style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}*/}
                                                {/*         className={"rounded-[16px] w-full h-[300px]"}>*/}

                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                <div className={` h-fit col-span-12 grid grid-cols-3 gap-4`}>
                                                    {[0].map(item =>
                                                        <div
                                                            className={" relative h-fit"} key={item}>
                                                            <div
                                                                style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}
                                                                className={" z-10 absolute flex inset-0"}/>
                                                            <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                                                           inventoryCard={inventoryCard}
                                                                           type={inventoryCardType}/>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                                                       inventoryCard={inventoryCard}
                                                                       type={inventoryCardType}/>
                                                    </div>
                                                    {[0, 1, 2, 3, 4, 5, 6].map(item =>
                                                        <div className={"relative h-fit"} key={item}>
                                                            <div
                                                                style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}
                                                                className={" z-10 absolute w-full h-full inset-0"}/>
                                                            <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                                                           inventoryCard={inventoryCard}
                                                                           type={inventoryCardType}/>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"px-2"}>
                                <div
                                    className={"h-[56px] rounded-full my-2   *:flex *:items-center *:justify-center *:w-4/12 flex bg-surface-container-light dark:bg-secondary-container-dark"}>
                                    <div onClick={() => setPageNumber(1)}
                                         className={`${pageNumber === 1 ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark font-medium" : "text-on-surface-light dark:text-on-surface-dark hover:before:bg-on-surface-dark/[12%]  dark:hover:before:bg-on-surface-light/[12%]"} text-title-medium  h-full overflow-hidden rounded-full relative before:absolute before:inset-0`}>
                                        Card shape type
                                    </div>
                                    <div onClick={() => setPageNumber(2)}
                                         className={`${pageNumber === 2 ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark font-medium" : "text-on-surface-light dark:text-on-surface-dark hover:before:bg-on-surface-dark/[12%]  dark:hover:before:bg-on-surface-light/[12%]"} text-title-medium  h-full overflow-hidden rounded-full relative before:absolute before:inset-0`}>
                                        Card headline
                                    </div>
                                    <div onClick={() => setPageNumber(3)}
                                         className={`${pageNumber === 3 ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark font-medium" : "text-on-surface-light dark:text-on-surface-dark hover:before:bg-on-surface-dark/[12%]  dark:hover:before:bg-on-surface-light/[12%]"} text-title-medium  h-full overflow-hidden rounded-full relative before:absolute before:inset-0`}>
                                        Card information
                                    </div>
                                    <div onClick={() => setPageNumber(4)}
                                         className={`${pageNumber === 4 ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark font-medium" : "text-on-surface-light dark:text-on-surface-dark hover:before:bg-on-surface-dark/[12%]  dark:hover:before:bg-on-surface-light/[12%]"} text-title-medium  h-full overflow-hidden rounded-full relative before:absolute before:inset-0`}>
                                        Card button
                                    </div>
                                </div>
                            </div>
                            <button
                                className={"h-10 w-10 rounded-full flex items-center justify-center text-on-surface-light dark:text-on-surface-dark bg-surface-light dark:bg-surface-dark z-999 absolute right-6 top-6"}>
                                <Icon>
                                    close
                                </Icon>
                            </button>
                            <div className={"px-2 mt-4"}>
                                <p className={"px-4 font-medium text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Choose your website inventory card shape from these items.
                                </p>
                                <ul className={"pb-2 px-2"}>
                                    {cardTypeList.map((item, index) => <li key={index} onClick={(e) => {
                                        setInventoryCardType(index)

                                    }}>
                                        <input className={"hidden"} type="radio" id={index} name="fav_language"/>
                                        <label className={"flex items-center"} htmlFor={index}>
                                            <div
                                                className={`relative ${inventoryCardType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                                {inventoryCardType === index ? <Icon
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
                            </div>
                        </>}
                        <div className={"py-6 flex justify-end px-6"}>
                            <Button onClick={() => setPageNumber(pageNumber + 1)} type={"filled"}>
                                Letś Start
                            </Button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
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
                <Button onClick={() => saveData()} icon={"save"} type="filled">
                    Save
                </Button>
            </div>
            <div className={"container mx-auto pb-4"}>
                {/*<div className={"flex mb-6 px-4 items-center justify-between"}>*/}
                {/*    <h2 className={"  text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>*/}
                {/*        Inventory Card Preview*/}
                {/*    </h2>*/}

                {/*</div>*/}

                <div className={"flex space-x-4 justify-between "}>

                    <div
                        className={"relative h-[700px]    md:w-7/12 xl:w-8/12 bg-surface-container-low-light rounded-[24px]"}>

                        <div
                            className={"relative border-[6px] border-outline-light dark:border-outline-dark overflow-hidden flex h-full items-center justify-center rounded-[24px] w-full py-20 px-4"}>
                            <div
                                className={"py-6 border container mx-auto grid grid-cols-12 gap-6 absolute  h-full"}
                                style={{
                                    backgroundColor: rgbaObjToRgba(color.surface),
                                    width: (inventoryCardType === 3 || inventoryCardType === 2 || inventoryCardType === 5 || inventoryCardType === 4) ? "1080px" : "1280px"
                                }}>
                                <div
                                    className={"flex items-center col-span-12 border-b border-outline-variant-light dark:border-outline-variant-dark py-4"}>
                                    <h1 className={"flex-1 font-black text-headline-large"}>
                                        Inventory List
                                    </h1>
                                    <div className={" flex items-center"}>

                                        <div
                                            className={"*:w-4/12 w-[400px] border border-outline-variant-light dark:border-outline-variant-dark rounded-full"}>
                                            <button style={{
                                                color: rgbaObjToRgba(color.onSecondaryContainer),
                                                backgroundColor: rgbaObjToRgba(color.secondaryContainer)
                                            }}
                                                    className={"rounded-l-full font-medium text-label-large px-6 h-[40px]"}>
                                                Sort by A - Z
                                            </button>
                                            <button className={"px-6 h-[40px] text-label-large"}>
                                                Sort by Z - A
                                            </button>
                                            <button className={"px-6 h-[40px] text-label-large"}>
                                                Sort by Price
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className={"col-span-3 space-y-4"}>*/}
                                {/*    <div style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}*/}
                                {/*         className={"rounded-[16px] w-full h-[300px]"}>*/}

                                {/*    </div>*/}
                                {/*    <div style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}*/}
                                {/*         className={"rounded-[16px] w-full h-[300px]"}>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className={`h-fit col-span-12 grid grid-cols-3 gap-4`}>
                                    {[0].map(item =>
                                        <div
                                            className={" relative h-fit"} key={item}>
                                            <div style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}
                                                 className={" z-10 absolute flex inset-0"}/>
                                            <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                                           inventoryCard={inventoryCard} type={inventoryCardType}/>
                                        </div>
                                    )}
                                    <div>
                                        <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                                       inventoryCard={inventoryCard} type={inventoryCardType}/>
                                    </div>
                                    {[0, 1, 2, 3, 4, 5, 6].map(item =>
                                        <div className={"relative h-fit"} key={item}>
                                            <div style={{backgroundColor: rgbaObjToRgba(color.surfaceVariant)}}
                                                 className={" z-10 absolute w-full h-full inset-0"}/>
                                            <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                                           inventoryCard={inventoryCard} type={inventoryCardType}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"xl:w-4/12 md:w-5/12"}>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Card Type
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit website inventory card design
                            </p>
                        </div>
                        <ul className={"py-2 px-2"}>
                            {cardTypeList.map((item, index) => <li key={index} onClick={(e) => {
                                setInventoryCardType(index)

                            }}>
                                <input className={"hidden"} type="radio" id={index} name="fav_language"/>
                                <label className={"flex items-center"} htmlFor={index}>
                                    <div
                                        className={`relative ${inventoryCardType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                        {inventoryCardType === index ? <Icon
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
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Title
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Set title heading type
                            </p>
                        </div>
                        <div className={"py-2 px-4 max-w-xl grid grid-cols-6 gap-1"}>
                            {["h1", "h2", "h3", "h4", "h5", "h6"].map((item, index) => <div key={index}
                                                                                            onClick={() => updateInventoryCard("titleType", item)}
                                                                                            className={`relative overflow-hidden ${inventoryCard.titleType === item ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[64px] flex items-center justify-center `}>
                                <div
                                    className={` ${inventoryCard.titleType === item ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-surface-container-light dark:text-surface-container-dark bg-on-surface-variant-light dark:bg-on-surface-variant-dark"} text-body-medium font-medium flex justify-center rounded-[8px] items-center w-[32px] h-[32px] `}>
                                    {item.toUpperCase()}
                                </div>
                            </div>)}
                        </div>
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Inventory information
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit inventory information in card
                            </p>
                        </div>
                        <ul className={"mt-2"}>
                            <li
                                className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        {"Show Vehicle More Info"}
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <Switch
                                        setIsCheck={(v) => updateInventoryCard("showVehicleInfo", !inventoryCard.showVehicleInfo)}
                                        isCheck={inventoryCard.showVehicleInfo}/>

                                </div>
                            </li>
                        </ul>
                        <div className={"px-4 mt-1 *:inline-flex max-w-xl *:mb-2 *:mr-2"}>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("miles") !== -1}
                                         onChange={() => handleInventoryInfoSelected("miles")}
                                         label="Miles"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("interior") !== -1}
                                         onChange={() => handleInventoryInfoSelected("interior")}
                                         label="Interior Color"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("est") !== -1}
                                         onChange={() => handleInventoryInfoSelected("est")}
                                         label="Est. payment"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("exterior") !== -1}
                                         onChange={() => handleInventoryInfoSelected("exterior")}
                                         label="Exterior Color"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("body_type") !== -1}
                                         onChange={() => handleInventoryInfoSelected("body_type")}
                                         label="Body Type"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("trim") !== -1}
                                         onChange={() => handleInventoryInfoSelected("trim")} label="Trim"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("fuel_type") !== -1}
                                         onChange={() => handleInventoryInfoSelected("fuel_type")}
                                         label="Fuel Type"/>
                        </div>
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        {inventoryCardType !== 0 && <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Card Button
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit show more button
                            </p>
                        </div>}
                        {inventoryCardType !== 0 && <ul className={"py-2"}>
                            {inventoryCardType !== 0 &&
                                <li
                                    className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            {"'Read More' Button"}
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <Switch
                                            setIsCheck={(v) => updateInventoryCard("showReadMoreButton", !inventoryCard.showReadMoreButton)}
                                            isCheck={inventoryCard.showReadMoreButton}/>

                                    </div>
                                </li>}
                            {inventoryCardType !== 0 &&
                                <li
                                    className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                    <div className={"mr-4"}>
                                        <label
                                            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                            {"Show button style like text"}
                                        </label>
                                    </div>
                                    <div className={"w-fit"}>
                                        <Switch
                                            setIsCheck={(v) => updateInventoryCard("buttonType", inventoryCard.buttonType === 0 ? 1 : 0)}
                                            isCheck={inventoryCard.buttonType === 1}/>

                                    </div>
                                </li>}
                        </ul>}
                        <div className={"w-full pt-2 pb-4"}>
                            <Divider type={"inset-middle"} className={""}/>
                        </div>
                        <div
                            className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                            <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                                Card Appearance
                            </h3>
                            <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Edit website inventory card design
                            </p>
                        </div>
                        <ul className={"py-2"}>
                            {cardAppearanceList.map((item, index) => <li key={index}
                                                                         className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                                <div className={"mr-4"}>
                                    <label
                                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                        {item.title}
                                    </label>
                                </div>
                                <div className={"w-fit"}>
                                    <ColorPicker value={inventoryCard[item.key]}
                                                 onChange={(value) => updateInventoryCard(item.key, value)}/>
                                </div>
                            </li>)}
                        </ul>


                    </div>
                </div>
            </div>
        </>
    )
}