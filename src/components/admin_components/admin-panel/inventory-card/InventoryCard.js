import Typography from "@m3/assets/typography/Typography";
import Image from "next/legacy/image";
import Divider from "@m3/dividers/Divider";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";

export default function InventoryCard({type, inventoryCard, inventoryInfoSelected}) {

    {/*"exterior","Body Type","Trim","Fuel Type"*/
    }
    return (
        <div>

            {type === 0 && <div
                className={"w-full h-fit p-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={"flex pb-3"}>
                    <div className={`flex-1`}>
                        <Typography type={"h4"}
                                    className="mr-6 !text-title-medium italic font-medium text-on-surface-light dark:text-on-surface-dark ">
                            Vehicle Name
                        </Typography>
                        <p
                            className={"text-body-medium font-medium flex items-center w-fit px-3 py-1 rounded-[8px] bg-tertiary-container-light dark:bg-tertiary-container-dark  mt-2  whitespace-normal text-on-tertiary-container-light dark:text-on-tertiary-container-dark"}>
                            {/*<Icon size={18} className={"text-on-tertiary-container-light mr-1 dark:text-on-tertiary-container-dark"} type={"outline"}>*/}
                            {/*    monetization_on*/}
                            {/*</Icon>*/}
                            <span className={"mr-1"}>
                                $
                            </span>
                            {40000}
                        </p>
                    </div>
                    <div className={"h-[100px] w-[100px]"}>

                        <Image quality={100} layout={'responsive'} width={720} height={720}
                               className="rounded-[12px] w-full object-cover"
                               src={"/bg.webp"} alt=""/>

                    </div>
                </div>
                {inventoryCard.showVehicleInfo&&<div className={"flex justify-between"}>
                    <div
                        className={`w-fit h-[40px] items-center px-4 rounded-[12px] dark:bg-surface-container-high-dark bg-surface-container-light flex  gap-0`}>
                        {inventoryInfoSelected.indexOf("miles") !== -1 && <div className={` flex mr-2 items-center`}>
                            <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Miles:
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                {100}k
                            </p>
                        </div>}
                        {inventoryInfoSelected.indexOf("interior") !== -1 && <div className={` flex mr-2 `}>
                            <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Interior:
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                Black
                            </p>
                        </div>}
                        {inventoryInfoSelected.indexOf("est") !== -1 && <div className={"flex items-center"}>
                            <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Est. payment:
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                ${400} /mo
                            </p>
                        </div>}
                        {inventoryInfoSelected.indexOf("exterior") !== -1 && <div className={"flex items-center"}>
                            <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Exterior
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                Black
                            </p>
                        </div>}
                        {inventoryInfoSelected.indexOf("body_type") !== -1 && <div className={"flex items-center"}>
                            <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Body Type
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                Coupe
                            </p>
                        </div>}
                        {inventoryInfoSelected.indexOf("trim") !== -1 && <div className={"flex items-center"}>
                            <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Trim
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                Gasoline
                            </p>
                        </div>}
                        {inventoryInfoSelected.indexOf("fuel_type") !== -1 && <div className={"flex items-center"}>
                            <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Fuel Type
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                R/T Coupe 2D
                            </p>
                        </div>}

                    </div>
                    {/*<div className={"flex justify-end"}>*/}
                    {/*    <IconButton*/}
                    {/*        className={"w-10 h-10 !bg-surface-container-high-light dark:!bg-surface-container-high-dark"}>*/}
                    {/*        more_horiz*/}
                    {/*    </IconButton>*/}
                    {/*</div>*/}
                </div>}
            </div>
            }
            {type === 1 && <div
                className={"col-span-4 w-full h-fit pt-8 px-4 pb-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={" pb-4"}>
                    <div className={`flex-1 mb-8`}>
                        <Typography type={"h4"}
                                    className="!font-medium !text-headline-medium  text-on-surface-light dark:text-on-surface-dark ">
                            Vehicle Name
                        </Typography>
                        {inventoryCard.showVehicleInfo&&<div className={"flex mt-1"}>
                            {inventoryInfoSelected.indexOf("miles") !== -1 &&
                                <div className={` flex mr-2 items-center`}>
                                    <p className={`text-body-large sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                        Miles:
                                    </p>
                                    <p className={`text-body-large sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                        {100}k
                                    </p>
                                </div>}
                            {inventoryInfoSelected.indexOf("interior") !== -1 && <div className={` flex mr-2 `}>
                                <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Interior:
                                </p>
                                <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    Black
                                </p>
                            </div>}
                            {inventoryInfoSelected.indexOf("est") !== -1 && <div className={"flex items-center"}>
                                <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Est. payment:
                                </p>
                                <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    ${400} /mo
                                </p>
                            </div>}


                            {inventoryInfoSelected.indexOf("exterior") !== -1 && <div className={"flex items-center"}>
                                <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Exterior
                                </p>
                                <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    Black
                                </p>
                            </div>}
                            {inventoryInfoSelected.indexOf("body_type") !== -1 && <div className={"flex items-center"}>
                                <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Body Type
                                </p>
                                <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    Coupe
                                </p>
                            </div>}
                            {inventoryInfoSelected.indexOf("trim") !== -1 && <div className={"flex items-center"}>
                                <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Trim
                                </p>
                                <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    Gasoline
                                </p>
                            </div>}
                            {inventoryInfoSelected.indexOf("fuel_type") !== -1 && <div className={"flex items-center"}>
                                <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Fuel Type
                                </p>
                                <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    R/T Coupe 2D
                                </p>
                            </div>}

                        </div>}
                    </div>
                    <div className={"rounded-full w-full"}>

                        <Image quality={100} objectFit={"cover"} layout={'responsive'}
                               width={1920}
                               height={1080}
                               className="rounded-full"
                               src={"/bg.webp"} alt=""/>

                    </div>
                </div>
                <Divider/>
                <div className={"flex items-center mt-4 justify-end space-x-2"}>
                    <label
                        className={"px-6 text-body-large font-medium text-primary-light dark:text-primary-dark"}>
                                 <span className={"mr-1"}>
                                $
                            </span>
                        {40000}
                    </label>
                    <Button type={"filled"}>
                        Read More
                    </Button>
                </div>


            </div>
            }
            {type === 2 && <div
                className={"col-span-3 w-full h-fit   pb-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={"rounded-[12px] w-full"}>

                    <Image quality={100} objectFit={"cover"} layout={'responsive'} width={1920}
                           height={1080}
                           className="rounded-[12px]"
                           src={"/bg.webp"} alt=""/>

                </div>
                <div className={"px-4 py-4"}>
                    <div className={`flex-1 `}>
                        <Typography type={"h4"}
                                    className="!font-bold text-center !text-title-large  text-on-surface-light dark:text-on-surface-dark ">
                            Vehicle Name
                        </Typography>
                        {inventoryCard.showVehicleInfo&&<div className={" text-center mt-1"}>
                            {inventoryInfoSelected.indexOf("miles") !== -1 &&
                                <div className={` inline-flex mr-2 items-center`}>
                                    <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                        Miles:
                                    </p>
                                    <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                        {100}k
                                    </p>
                                </div>}
                            {inventoryInfoSelected.indexOf("interior") !== -1 && <div className={` inline-flex mr-2 `}>
                                <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Interior:
                                </p>
                                <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    Black
                                </p>
                            </div>}
                            {inventoryInfoSelected.indexOf("est") !== -1 && <div className={"inline-flex items-center"}>
                                <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Est. payment:
                                </p>
                                <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    ${400} /mo
                                </p>
                            </div>}


                            {inventoryInfoSelected.indexOf("exterior") !== -1 &&
                                <div className={"inline-flex items-center"}>
                                    <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}> Exterior
                                    </p>
                                    <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                        Black
                                    </p>
                                </div>}
                            {inventoryInfoSelected.indexOf("body_type") !== -1 &&
                                <div className={"inline-flex items-center"}>
                                    <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}> Body
                                        Type
                                    </p>
                                    <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                        Coupe
                                    </p>
                                </div>}
                            {inventoryInfoSelected.indexOf("trim") !== -1 &&
                                <div className={"inline-flex items-center"}>
                                    <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}> Trim
                                    </p>
                                    <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                        Gasoline
                                    </p>
                                </div>}
                            {inventoryInfoSelected.indexOf("fuel_type") !== -1 &&
                                <div className={"inline-flex items-center"}>
                                    <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}> Fuel
                                        Type
                                    </p>
                                    <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                        R/T Coupe 2D
                                    </p>
                                </div>}

                        </div>}
                    </div>

                </div>
                <Divider/>
                <div className={"flex justify-center items-center mt-4  space-x-2"}>
                    <label
                        className={"px-6 text-body-large font-medium text-primary-light dark:text-primary-dark"}>
                                 <span className={"mr-1"}>
                                $
                            </span>
                        {40000}
                    </label>
                    <Button type={"filled"}>
                        Read More
                    </Button>
                </div>


            </div>}
            {type === 3 && <div
                className={"col-span-3 w-full h-fit   pb-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={"rounded-[12px] w-full"}>

                    <Image quality={100} objectFit={"cover"} layout={'responsive'} width={1920}
                           height={1080}
                           className="rounded-[12px]"
                           src={"/bg.webp"} alt=""/>

                </div>
                <div className={"px-4 py-4"}>
                    <div className={`flex-1 `}>
                        <div className={"flex  justify-between"}>
                            <div className={"flex-1"}>
                                <Typography type={"h4"}
                                            className="!font-bold  !text-body-large  text-on-surface-light dark:text-on-surface-dark ">
                                    Vehicle Name
                                </Typography>
                                <label
                                    className={"text-body-large font-bold text-primary-light dark:text-primary-dark"}>
                                 <span className={"mr-1"}>
                                $
                            </span>
                                    {40000}
                                </label>
                                <div className={"  mt-1"}>
                                    <div className={` inline-flex mr-2 items-center`}>
                                        <p className={`text-label-large font-normal sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Miles:
                                        </p>
                                        <p className={`text-label-large font-normal sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                            {100}k
                                        </p>
                                    </div>
                                    {<div className={` inline-flex mr-2 `}>
                                        <p className={`text-label-large font-normal sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Interior:
                                        </p>
                                        <p className={`text-label-large font-normal sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                            Black
                                        </p>
                                    </div>}
                                    {<div className={"inline-flex items-center"}>
                                        <p className={`text-label-large font-normal sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Est. payment:
                                        </p>
                                        <p className={`text-label-large font-normal sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                            ${400} /mo
                                        </p>
                                    </div>}

                                </div>
                            </div>
                            <Button type={"tonal"}>
                                Read More
                            </Button>
                        </div>

                    </div>

                </div>


            </div>}

            {type === 4 && <div
                className={"col-span-4 w-full h-fit px-4 py-4  pb-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={"grid grid-cols-2 gap-2 grid-rows-2"}>
                    <div className={"col-span-1 relative row-span-2 rounded-[24px] w-full"}>

                        <Image quality={100} objectFit={"cover"} layout={'fill'} width={1920}
                               height={1080}
                               className="rounded-[24px]"
                               src={"/bg.webp"} alt=""/>

                    </div>
                    <div className={"col-span-1 row-span-1 rounded-[12px] w-full"}>

                        <Image quality={100} objectFit={"cover"} layout={'responsive'}
                               width={1920}
                               height={1080}
                               className="rounded-[12px]"
                               src={"/bg.webp"} alt=""/>

                    </div>
                    <div className={"col-span-1 row-span-1 rounded-[12px] w-full"}>

                        <Image quality={100} objectFit={"cover"} layout={'responsive'}
                               width={1920}
                               height={1080}
                               className="rounded-[12px]"
                               src={"/bg.webp"} alt=""/>

                    </div>
                </div>
                <div className={"px-4 py-4"}>
                    <div className={`flex-1 `}>
                        <Typography type={"h4"}
                                    className="!font-bold text-center !text-headline-medium  text-on-surface-light dark:text-on-surface-dark ">
                            Vehicle Name
                        </Typography>
                        <div className={" text-center mt-1"}>
                            <div className={` inline-flex mr-2 items-center`}>
                                <p className={`text-label-large font-normal sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Miles:
                                </p>
                                <p className={`text-label-large font-normal sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    {100}k
                                </p>
                            </div>
                            {<div className={` inline-flex mr-2 `}>
                                <p className={`text-label-large font-normal sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Interior:
                                </p>
                                <p className={`text-label-large font-normal sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    Black
                                </p>
                            </div>}
                            {<div className={"inline-flex items-center"}>
                                <p className={`text-label-large font-normal sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Est. payment:
                                </p>
                                <p className={`text-label-large font-normal sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                    ${400} /mo
                                </p>
                            </div>}

                        </div>
                    </div>

                </div>
                <Divider/>
                <div className={"flex justify-center items-center mt-4  space-x-2"}>
                    <label
                        className={"px-6 text-body-large font-medium text-primary-light dark:text-primary-dark"}>
                                 <span className={"mr-1"}>
                                $
                            </span>
                        {40000}
                    </label>
                    <Button type={"filled"}>
                        Read More
                    </Button>
                </div>
            </div>}
            {type === 5 && <div
                className={"col-span-3 w-full h-fit   pb-4 relative  rounded-[12px] overflow-hidden"}>
                <div className={"rounded-[16px] w-full"}>

                    <Image quality={100} objectFit={"cover"} layout={'responsive'} width={1920}
                           height={1080}
                           className="rounded-[12px]"
                           src={"/bg.webp"} alt=""/>

                </div>
                <div className={"pt-4"}>
                    <div className={`flex-1 `}>
                        <div className={"flex items-center justify-between"}>
                            <Typography type={"h4"}
                                        className="!font-bold text-center !text-title-medium  text-on-surface-light dark:text-on-surface-dark ">
                                Vehicle Name
                            </Typography>
                            <label
                                className={"bg-tertiary-container-light dark:bg-tertiary-container-dark px-2 py-[2px] text-label-large rounded-[6px] text-on-tertiary-container-light dark:text-on-tertiary-container-dark text-body-large font-medium "}>
                                 <span className={"mr-1"}>
                                $
                            </span>
                                {40000}
                            </label>
                        </div>
                        <div className={"mt-1  "}>
                            <div className={` inline-flex mr-2 items-center`}>
                                <p className={`text-label-large font-normal sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Miles:
                                </p>
                                <p className={`text-label-large font-normal sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                    {100}k
                                </p>
                            </div>
                            {<div className={` inline-flex mr-2 `}>
                                <p className={`text-label-large font-normal sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Interior:
                                </p>
                                <p className={`text-label-large font-normal sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                    Black
                                </p>
                            </div>}
                            {<div className={"inline-flex items-center"}>
                                <p className={`text-label-large font-normal sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Est. payment:
                                </p>
                                <p className={`text-label-large font-normal sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                    ${400} /mo
                                </p>
                            </div>}

                        </div>
                    </div>

                </div>
                <a className={"text-primary-light text-label-large dark:text-primary-dark flex items-center mt-3"}>
                    Read More
                    <Icon className={"text-[16px] font-medium ml-2"} weight={500} size={16}>
                        arrow_forward
                    </Icon>
                </a>


            </div>}


        </div>
    )
}