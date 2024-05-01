'use client';
import React, {useState} from "react";
import IconButton from "@m3/icon_buttons/IconButton";
import FAB from "@m3/floating_action_buttons/FAB";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import {useThemeContext} from "@/app/theme-provider";
import Typography from "@m3/assets/typography/Typography";
import Image from "next/legacy/image";
import Divider from "@m3/dividers/Divider";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";
import Checkbox from "@m3/checkboxes/Checkbox";
import FilterChips from "@m3/chips/FilterChips";
import Link from "next/link";

export default function Page() {

    const [selectedSetting, setSelectedSetting] = useState(0);
    const [inventoryCardType, setInventoryCardType] = useState(0);

    const [inventoryCard, setInventoryCard] = useState({
        showReadMoreButton: true,
        showInventoryInfo: true,
        buttonType: 0,
        titleType: "h3",
        readMore: true,
        showVehicleInfo:true,

    });
    const [inventoryInfoSelected, setInventoryInfoSelected] = useState(["miles", "interior", "est"])
    const handleInventoryInfoSelected = (key) => {
        let is = [...inventoryInfoSelected]
        const l = inventoryInfoSelected.indexOf(key)
        if (l === -1) {
            is.push(key)
            setInventoryInfoSelected(is)
        } else {
            // console.log(is)
            // is = is.slice(l, 1)
            // console.log(is)
            setInventoryInfoSelected(is.filter(item => item !== key))
        }

    }
    const tabs = [
        {
            icon: "Pages",
            title: "Pages",
            description: "Edit or Add Pages"
        },
        {
            icon: "Inventory",
            title: "Inventory",
            description: "Edit Inventory Card and Pages Styles"
        },
        {
            icon: "post",
            title: "Blog",
            description: "Edit Blog Card and Pages Styles"
        },
        {
            icon: "space_dashboard",
            title: "Templates",
            description: "Add New Component and Template"
        },

    ]
    const updateInventoryCard = (key, value) => {
        setInventoryCard({...inventoryCard, [key]: value})
    }
    return (
        <div className={"grid grid-cols-12 h-[100vh]"}>

            <div
                className={"col-span-3  border-l-outline-light dark:border-l-outline-dark border-r border-outline-variant-light dark:border-outline-variant-dark h-full"}>
                <div
                    className={"border-b text-on-surface-light dark:text-on-surface-dark bg-surface-light dark:bg-surface-dark border-outline-variant-light dark:border-outline-variant-dark flex items-center justify-between px-4 h-[64px]"}>
                    <h1 className={"font-bold text-title-large"}>
                        Setting
                    </h1>
                </div>
                <ul>
                    {tabs.map((item, index) =>
                        <>
                            <li onClick={() => setSelectedSetting(index)}
                                className={`transition-all duration-300 ${selectedSetting === index ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "text-surface-light dark:text-surface-dark "} flex items-center h-[72px] py-2 px-4 `}
                                key={index}>
                                {<Icon
                                    className={"mr-4 text-on-secondary-container-light dark:text-on-secondary-container-dark"}>
                                    {item.icon}
                                </Icon>}
                                <div>
                                    <h3 className={`${selectedSetting === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark"} text-body-large  `}>
                                        {item.title}
                                    </h3>
                                    <p className={`${selectedSetting === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} text-body-medium `}>
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                            {selectedSetting !== index && <div className={"px-4"}>
                                <div className={"h-[1px] bg-surface-variant-light dark:bg-surface-variant-dark"}/>
                            </div>}
                        </>
                    )}
                </ul>
            </div>
            <div className={"col-span-9"}>
                <div className="border-l border-outline-variant-light dark:border-outline-variant-dark">
                    <div
                        className={" bg-surface-container-light dark:bg-surface-container-dark  flex items-center justify-between px-4 h-[64px]"}>
                        <h1 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large"}>
                            {tabs[selectedSetting].title}
                        </h1>
                        <Button icon={"add"} type={"filled"}
                                className={""}>
                            Add New {tabs[selectedSetting].title}
                        </Button>
                    </div>
                    {selectedSetting === 1 &&

                        <div className={"flex space-x-4 h-[calc(100vh_-_64px)] justify-between py-4"}>
                            <div className={"w-7/12 "}>

                                <label
                                    className={"px-4 block text-title-small py-4 text-on-surface-light dark:text-on-surface-dark"}>
                                    Component Type
                                </label>
                                <div className={"px-4 max-w-lg"}>
                                    <div className="relative h-[56px]">
                                        <select onChange={(e) => setInventoryCardType(parseInt(e.target.value))}
                                                value={inventoryCardType}
                                                className="outline-none peer h-full w-full rounded-[4px] border  border-outline-light dark:border-outline-dark border-t-transparent bg-transparent px-3 py-2.5 font-sans text-body-large font-normal text-on-surface-light dark:text-on-surface-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-light dark:placeholder-shown:border-primary-dark  placeholder-shown:border-t-primary-light dark:placeholder-shown:border-t-primary-dark empty:!bg-gray-900 focus:border-2 focus:border-primary-light dark:focus:border-primary-dark focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

                                            <option label={"Type One"} value={0}/>
                                            <option label={"Type Two"} value={1}/>
                                            <option label={"Type Three"} value={2}/>
                                            <option label={"Type Four"} value={3}/>
                                            <option label={"Type Five"} value={4}/>
                                            <option label={"Type Six"} value={5}/>

                                        </select>
                                        <label
                                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-body-small font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-[4px] before:border-t before:border-l before:border-outline-light dark:before:border-outline-dark before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-[4px] after:border-t after:border-r after:border-outline-light dark:after:border-outline-dark after:transition-all peer-placeholder-shown:text-body-small peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-light dark:peer-placeholder-shown:text-primary-dark  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-body-small peer-focus:leading-tight dark:peer-focus:text-primary-dark peer-focus:text-primary-light peer-focus:before:border-t-2 peer-focus:before:border-l-2 dark:peer-focus:before:border-primary-dark peer-focus:before:border-primary-light peer-focus:after:border-t-2 peer-focus:after:border-r-2 dark:peer-focus:after:border-primary-dark peer-focus:after:border-primary-light peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ">
                                            Select a City
                                        </label>
                                    </div>
                                </div>

                                <label
                                    className={"px-4 font-medium block text-title-small pt-4 text-on-surface-light dark:text-on-surface-dark"}>
                                    Card Items
                                </label>
                                {inventoryCardType!==0 && <Checkbox label={"'Read More' Button"} color={"primary"}
                                           onChange={(v) => updateInventoryCard("readMore", v)}
                                           isCheck={inventoryCard.readMore}/>}
                                <Checkbox onChange={(v)=>updateInventoryCard("showVehicleInfo",!inventoryCard.showVehicleInfo)} label={"Show Vehicle More Info"} color={"primary"} isCheck={inventoryCard.showVehicleInfo}/>
                                <label
                                    className={"px-4 font-medium block text-title-small py-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Inventory Info
                                </label>
                                <div className={"*:inline-flex max-w-xl px-4 space-y-2 *:mr-2"}>
                                    <FilterChips isChecked={inventoryInfoSelected.indexOf("miles") !== -1}
                                                 onChange={() => handleInventoryInfoSelected("miles")} label="Miles"/>
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
                                <label
                                    className={"font-medium px-4 block text-title-small pt-4 text-on-surface-light dark:text-on-surface-dark"}>
                                    Style
                                </label>
                                <label
                                    className={"mb-2 px-4 block text-title-small pt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Title Styles
                                </label>
                                <div className={"px-4  max-w-xl grid grid-cols-6 gap-4"}>
                                    {["h1", "h2", "h3", "h4", "h5", "h6"].map((item, index) => <div key={index}
                                                                                                    onClick={() => updateInventoryCard("titleType", item)}
                                                                                                    className={`relative overflow-hidden ${inventoryCard.titleType === item ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[80px] flex items-center justify-center `}>
                                        <div
                                            className={` ${inventoryCard.titleType === item ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-surface-container-light dark:text-surface-container-dark bg-on-surface-variant-light dark:bg-on-surface-variant-dark"} text-body-medium font-medium flex justify-center rounded-[8px] items-center w-[32px] h-[32px] `}>
                                            {item.toUpperCase()}
                                        </div>
                                    </div>)}
                                </div>
                                {(!inventoryCard.readMore && inventoryCardType!==0 && inventoryCardType!==3)&&<>
                                    <label
                                        className={"mb-2 px-4 block text-title-small pt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                        Button Styles
                                    </label>
                                    <div className={"px-4  max-w-xl grid grid-cols-3 gap-4"}>
                                        <div onClick={() => updateInventoryCard("buttonType", 0)}
                                             className={`relative overflow-hidden ${inventoryCard.buttonType === 0 ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[140px] flex items-center justify-center `}>
                                            <Button
                                                className={inventoryCard.buttonType !== 0 && "text-surface-container-light dark:text-surface-container-dark bg-on-surface-variant-light dark:bg-on-surface-variant-dark"}
                                                type={"filled"}>
                                                Read More
                                            </Button>
                                            <div className={"absolute inset-0"}/>
                                        </div>
                                        <div onClick={() => updateInventoryCard("buttonType", 1)}
                                             className={`relative overflow-hidden ${inventoryCard.buttonType === 1 ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[140px] flex items-center justify-center `}>
                                            <a className={`relative ${inventoryCard.buttonType !== 1 ? "text-on-surface-variant-light dark:text-on-surface-variant-dark" : "text-primary-light dark:text-primary-dark"}  text-label-large flex items-center`}>
                                                Read More
                                                <Icon className={"text-[16px] font-medium ml-2"} weight={500} size={16}>
                                                    arrow_forward
                                                </Icon>

                                            </a>
                                            <div className={"absolute inset-0"}/>
                                        </div>

                                    </div>
                                </>}


                            </div>
                            <div
                                className={"w-5/12 h-full bg-surface-container-low-light dark:bg-surface-container-low-dark rounded-[24px]"}>
                                <div
                                    style={{background: "repeating-linear-gradient(45deg,transparent,rgba(0,0,0,.014) 4px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 16px)"}}
                                    className={"flex h-full items-center justify-center rounded-[24px] w-full py-6 px-6 "}>
                                    <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                                   inventoryCard={inventoryCard} type={inventoryCardType}/>
                                </div>
                            </div>
                        </div>

                    }
                    {selectedSetting === 0 && <div className=" h-[100vh] w-full flex pt-0 px-0 justify-center">

                        <div className={"w-full"}>
                            <div
                                className={"overflow-hidden rounded-[0px]  dark:border-outline-dark border-outline-light"}>
                                <table
                                    className={" w-full mt-2  border-collapse"}>
                                    <thead className={" *:border-b *:border-outline-variant-light"}>
                                    <tr className={"text-left *:font-medium *:text-title-small *:text-on-surface-variant-light dark:*:text-on-surface-variant-dark *:px-4 *:h-[48px] bg-surface-light dark:bg-surface-dark"}>
                                        <th>Page Name</th>
                                        <th>Slug (link)</th>
                                        <th>Created At</th>
                                        <th>Update At</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody
                                        className={"*:text-on-surface-variant-light dark:*:text-on-surface-variant-dark dark:hover:*:text-on-secondary-container-dark hover:*:text-on-secondary-container-light dark:hover:*:bg-secondary-container-dark hover:*:bg-secondary-container-light  *:border-b dark:*:border-outline-variant-dark *:border-outline-variant-light"}>
                                    <tr className={"*:px-4 *:h-[56px] "}>
                                        <td className={"font-medium"}>Home</td>
                                        <td>/</td>
                                        <td>_</td>
                                        <td>3 april 2023</td>
                                        <td>
                                            <div className={"flex items-center space-x-1 justify-end"}>
                                               <Link href={"/page-builder"}>
                                                <IconButton>
                                                    edit
                                                </IconButton>
                                               </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={"!border-b-0 *:px-4 *:h-[56px] "}>
                                        <td className={"font-medium"}>Custom Page</td>
                                        <td>/custom</td>
                                        <td>3 april 2023</td>
                                        <td>3 april 2023</td>
                                        <td>
                                            <div className={"flex items-center space-x-1 justify-end"}>
                                                <IconButton>
                                                    edit
                                                </IconButton>
                                                <IconButton className={"text-error-light dark:text-error-dark"}>
                                                    delete
                                                </IconButton>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>

    )
}