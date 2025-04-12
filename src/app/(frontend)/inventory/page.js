'use client'
import Image from 'next/image'
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import FAB from "@m3/floating_action_buttons/FAB";
import IconButton from "@m3/icon_buttons/IconButton";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";
import {Fragment, useMemo, useState} from "react";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import Checkbox from "@m3/checkboxes/Checkbox";
import {Dialog, Transition} from "@headlessui/react";



export default function InventoryPage() {
    const [inventoryInfoSelected, setInventoryInfoSelected] = useState(["miles", "interior", "est"])
    // const siteSettingData = getSiteSettingData()
    // const {color} = siteSettingData
    const [inventoryCard, setInventoryCard] = useState({
        showReadMoreButton: true,
        showInventoryInfo: true,
        buttonType: 0,
        titleType: "h3",
        readMore: true,
        showVehicleInfo: true,
        cardColor: "rgb(var(--surface-container-highest-light))",
        titleColor: "rgb(var(--on-surface-light))",
        priceColor: "rgb(var(--on-surface-light))",
        priceBgColor: "rgb(var(--background-light))",
        inventoryInfoColor: "rgb(var(--on-surface-variant-light))",
        inventoryInfoBgColor: "rgb(var(--surface-light))",
        inventoryBgInfoColor: "rgb(var(--surface-light))",
        buttonColor: "rgb(var(--on-primary-light))",
        buttonBgColor: "rgb(var(--primary-light))",

    });
    const [inventoryCardType, setInventoryCardType] = useState(3);
    const [isInventoryFilterDialogOpen, setIsInventoryFilterDialogOpen] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState({
        bodyStyle: 0
    });
    const listBodyStyles = [
        {id: 0, name: "Coupe", imagePrimary: ["/vehicles/Coupe/lexus.jpg", "/vehicles/Coupe/dodge.jpg.avif"]},
        {id: 1, name: "Hatchback", imagePrimary: []},
        {id: 2, name: "Convertible", imagePrimary: ["/vehicles/Convertible/lexus.jpg"]},
        {id: 3, name: "Sports Car", imagePrimary: ["/vehicles/sport-car/dodge.webp"]},
        {id: 4, name: "Sedan", imagePrimary: ["/vehicles/Sedan/dodge.jpg.avif","/vehicles/Sedan/lexus.jpg"]},
        {id: 5, name: "SUV", imagePrimary: ["/vehicles/SUV/dodge.jpg.avif","/vehicles/SUV/lexus.jpg"]},
        {id: 6, name: "Minivan", imagePrimary: ["/vehicles/minivan/dodge.jpg.avif"]},
        {id: 7, name: "Wagon", imagePrimary: ["/vehicles/coupe/lexus.jpg"]},
        {id: 8, name: "Pickup Truck", imagePrimary: ["/vehicles/pickup-truck/dodge.jpg.avif"]},
        {id: 9, name: "Crossover", imagePrimary: ["/vehicles/Crossover/lexus.jpg","/vehicles/Crossover/dodge.jpg.jpeg"]},
        {id: 10, name: "Cargo Van", imagePrimary: ["/vehicles/coupe/lexus.jpg"]},
        {id: 11, name: "Electric", imagePrimary: ["/vehicles/Electric/lexus.jpg"]},
        {id: 12, name: "Hybrid", imagePrimary: ["/vehicles/Hybrid/lexus.jpg"]},
        {id: 13, name: "Diesel", imagePrimary: ["/vehicles/Disel/lexus.jpg"]},
        {id: 14, name: "Luxury", imagePrimary: ["/vehicles/Luxury/lexus.jpg"]},
    ]
    const handleChangeFilter = (key, value) => {
        setSelectedFilter({...selectedFilter, [key]: value})
    }
    return (
        <>
            <Dialog open={isInventoryFilterDialogOpen} onClose={() => setIsInventoryFilterDialogOpen(false)}>
                <div className="z-999 fixed inset-0 bg-black/30" aria-hidden="true"/>

                {/* Full-screen container to center the panel */}
                <div className="fixed z-[1001] inset-0 flex w-screen items-center justify-center p-4">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel
                        className="w-7/12 relative mx-auto bg-surface-light dark:bg-surface-dark overflow-hidden rounded-[28px]">
                        <div className={"h-[600px] bg-surface-container-highest-light dark:bg-secondary-container-dark"}>
                            <div className="grid grid-cols-2 grid-rows-4 gap-4 px-4 py-4 h-[600px]">
                                <div className={"relative col-span-1 rounded-[24px]  overflow-hidden row-span-4"}>
                                    <Image alt={""} layout={"fill"}  objectFit={"cover"}
                                           src={listBodyStyles.find(item => item.id === selectedFilter.bodyStyle).imagePrimary[0]}/>
                                </div>
                                <div className={"relative col-span-1 rounded-[24px] overflow-hidden row-span-2"}>
                                    <Image alt={""} layout={"fill"}  objectFit={"cover"}
                                           src={listBodyStyles.find(item => item.id === selectedFilter.bodyStyle).imagePrimary[1]}/>

                                </div>
                                <div className={"relative col-span-1 rounded-[24px] overflow-hidden row-span-2"}>
                                    <Image alt={""} layout={"fill"} objectFit={"cover"}
                                           src={listBodyStyles.find(item => item.id === selectedFilter.bodyStyle).imagePrimary[0]}/>

                                </div>

                            </div>
                        </div>
                        <div className={"px-6 pt-6"}>
                            <h2 className={"text-title-large text-on-surface-light"}>
                                Select Your Body Style
                            </h2>
                            <div className={"space-x-2 space-y-2"}>
                                {listBodyStyles.map((item, index) => (
                                    <div onClick={() => handleChangeFilter("bodyStyle", item.id)}
                                         className={`${selectedFilter.bodyStyle === item.id ? "bg-secondary-container-light pr-4 pl-2 text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light px-4 border border-outline-variant-light dark:border-outline-variant-dark"} text-label-large cursor-pointer transition-all duration-300 ease-in-out items-center h-[32px] inline-flex  rounded-[8px] `}
                                         key={index}>
                                        {selectedFilter.bodyStyle === item.id ? <Icon size={20}
                                                                                      className="text-[18px]  mr-2 text-on-secondary-container-light dark:text-on-secondary-container-dark">
                                            check
                                        </Icon> : <div className={"h-[18px]"}>
                                        </div>}
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={"py-6 flex justify-end px-6"}>
                            <Button onClick={() => setPageNumber(pageNumber + 1)} type={"filled"}>
                                Letś Start
                            </Button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
            <div className={"min-h-screen bg-surface-light dark:bg-surface-dark py-6"}>

                <div className={"container mx-auto "}>
                    <div className={"flex items-center justify-between"}>
                        <h1 className={"text-headline-large font-black"}>
                            Inventory Page
                        </h1>
                        <div>
                            <IconButton>
                                filter_alt
                            </IconButton>
                        </div>
                    </div>
                    <div className={"grid grid-cols-12 gap-6 py-6"}>
                        {/*<div className={"col-span-3"}>*/}
                        {/*    <div*/}
                        {/*        className={"pt-6 bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[24px]"}>*/}
                        {/*        <h2 className={" text-title-large font-bold px-4"}>*/}
                        {/*            Filter Inventory*/}
                        {/*        </h2>*/}
                        {/*        <ul className={"py-2 "}>*/}
                        {/*            <div className={"h-[56px] flex items-center text-title-small font-medium px-4"}>*/}
                        {/*                Inventory Make*/}
                        {/*            </div>*/}
                        {/*            <Checkbox color={"primary"} label={"BMW"}/>*/}
                        {/*            <Checkbox color={"primary"} label={"Mercedes"}/>*/}
                        {/*            <Checkbox color={"primary"} label={"Dodge"}/>*/}
                        {/*        </ul>*/}
                        {/*        <ul className={"py-2 "}>*/}
                        {/*            <div className={"h-[56px] flex items-center text-title-small font-medium px-4"}>*/}
                        {/*                Body Style*/}
                        {/*            </div>*/}
                        {/*            <Checkbox color={"primary"} label={"Coupe"}/>*/}
                        {/*            <Checkbox color={"primary"} label={"SUV"}/>*/}
                        {/*            <Checkbox color={"primary"} label={"Pickup"}/>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={"grid col-span-9 grid-cols-3 gap-4 "}>
                            <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                           inventoryCard={inventoryCard}
                                           type={inventoryCardType}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}