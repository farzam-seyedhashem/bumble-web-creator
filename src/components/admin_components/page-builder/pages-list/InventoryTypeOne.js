import FAB from "@m3/floating_action_buttons/FAB";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import Image from "next/image";
import Divider from "@m3/dividers/Divider";
import Switch from "@m3/switch/Switch";
import FilterChips from "@m3/chips/FilterChips";
import ColorPicker from "@m3/color_pricker/ColorPicker";

export const InventoryTypeOne = ({options, isMobilePreview, className}) => {
    return (<>
        <div className={`w-full ${className} `}>
            <div className={"relative bg-surface-light"}>
                <FAB style={{backgroundColor: options.fabBgColor, color: options.fabTextColor}}
                     className={"absolute bottom-6 right-6"} isExtended color={"primary"}
                     label={"Calculator"}>
                    calculate
                </FAB>
                <div style={{backgroundColor: options.topSectionColor}}
                     className={` rounded-[16px] ${isMobilePreview ? "p-4" : "p-10"}  container mx-auto `}>
                    <div className={"grid grid-cols-12 gap-6"}>
                        <div className={`${isMobilePreview ? "col-span-12" : "col-span-5"} relative `}>
                            <div>
                                <h1 style={{color: options.titleColor}}
                                    className={" text-headline-large font-extrabold"}>
                                    2013 Ford Edge Sport
                                </h1>
                                <div style={{color: options.infoColor}}
                                     className={"flex mt-2 mb-4 items-center text-title-large font-medium"}>
                <span className={""}>
                $13,998
                </span>
                                    <div className={"bg-on-surface-light w-[1px] mx-4 h-[24px] "}/>
                                    <span className={""}>
                100K miles
                </span>
                                </div>
                                <div
                                    className={`${isMobilePreview ? "whitespace-nowrap overflow-scroll *:inline-flex" : "flex"}  items-center  space-x-2`}>
                                    <div
                                        className={"pr-4 pl-2 before:absolute before:inset-0 before:active:bg-on-surface-light/[10%] before:hover:bg-on-surface-light/[8%] relative w-fit flex items-center justify-center rounded-[8px] h-[32px] border overflow-hidden border-outline-light"}>
                                        <Icon style={{color: options.tagIconColor}} size={18} weight={500}
                                              className={"mr-2"}>
                                            content_copy
                                        </Icon>
                                        <span style={{color: options.tagTextColor}}
                                              className={"font-medium text-label-large "}>
                Stock
                25606356
                    </span>
                                    </div>
                                    <div
                                        className={"pr-4 pl-2 before:absolute before:inset-0 before:active:bg-on-surface-light/[10%] before:hover:bg-on-surface-light/[8%] relative w-fit flex items-center justify-center rounded-[8px] h-[32px] border overflow-hidden border-outline-light"}>
                                        <Icon style={{color: options.tagIconColor}} size={18} weight={500}
                                              className={"mr-2"}>
                                            content_copy
                                        </Icon>
                                        <span style={{color: options.tagTextColor}}
                                              className={"font-medium text-label-large "}>
                VIN
                2FMDK3AK3DBA95232
                    </span>
                                    </div>
                                </div>
                            </div>
                            {!isMobilePreview && <div
                                className={"grid grid-cols-4 gap-4 h-[300px] grid-rows-4 absolute bottom-0 "}>
                                <div
                                    className={"col-span-4 relative p-4 bg-black/[8%] row-span-2 text-on-secondary-container-light  rounded-[24px]"}>
                                    <div className={"mb-4 flex items-center "}>
                                        <Icon style={{color:options.sectionsIconColor}} size={32}>
                                            lock_open
                                        </Icon>
                                        <p style={{color:options.sectionsTextColor}} className={"ml-4 font-medium text-label-large "}>
                                            Special offers or seasonal promotions may include free
                                            maintenance, oil changes,
                                            tire
                                            rotations, etc.
                                        </p>
                                    </div>
                                    <div className={"absolute bottom-4 right-4 flex justify-end"}>
                                        <Button style={{
                                            backgroundColor: options.filledButtonsBgColor,
                                            color: options.filledButtonsTextColor
                                        }} type={"filled"}>
                                            {"Unlock Manager's Special"}
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className={"relative col-span-2 p-4 bg-black/[8%] row-span-2 text-on-secondary-container-light rounded-[24px]"}>
                                    <div className={"mb-4 flex items-center "}>
                                        <Icon style={{color:options.sectionsIconColor}} size={32}>
                                            credit_card
                                        </Icon>
                                        <p style={{color:options.sectionsTextColor}} className={"ml-4 font-medium text-label-large "}>

                                            Are You Looking for Financing Options for Your Car?

                                        </p>
                                    </div>
                                    <div className={"absolute bottom-4 right-4 flex justify-end"}>
                                        <Button style={{
                                            color: options.outlinedButtonsTextColor,
                                            borderColor: options.outlinedButtonsBorderColor
                                        }} type={"outlined"}>
                                            Get approved
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className={"col-span-2 relative  p-4 bg-black/[8%] row-span-2 justify-between text-on-secondary-container-light  rounded-[24px]"}>

                                    <div className={" flex items-center "}>
                                        <Icon style={{color:options.sectionsIconColor}} className={"text-on-surface-variant-light"} size={32}>
                                            schedule
                                        </Icon>
                                        <p style={{color:options.sectionsTextColor}} className={"ml-4  font-medium text-label-large "}>
                                            Set Schedule for a test drive
                                        </p>
                                    </div>
                                    <div className={"absolute bottom-4 right-4 flex justify-end"}>
                                        <Button style={{color: options.standardButtonsTextColor}}>
                                            Open Calender
                                        </Button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div
                            className={`hover:outline outline-1 outline-offset-white outline-outline-light outline-offset-8  ${isMobilePreview ? "col-span-12 h-[250px]" : "col-span-7 h-[600px]"} `}>
                            <div
                                className={` ${isMobilePreview ? "grid-rows-6 h-full gap-2" : "grid-rows-4 h-full gap-4"} grid grid-cols-12  w-full `}>
                                <div
                                    className={`${isMobilePreview ? " row-span-4 col-span-12" : " row-span-3 col-span-12"} rounded-[16px] overflow-hidden relative  h-full`}>
                                    <Image objectFit={"cover"} quality={100} layout={"fill"}
                                           alt={""} src={"/1.webp"}/>
                                </div>
                                <div
                                    className={`${isMobilePreview ? " row-span-2 col-span-4" : " row-span-2 col-span-4"}  rounded-[16px] overflow-hidden relative h-full`}>
                                    <Image objectFit={"cover"} quality={100} layout={"fill"}
                                           alt={""} src={"/2.webp"}/>
                                </div>
                                <div
                                    className={`${isMobilePreview ? " row-span-2 col-span-4" : " row-span-2 col-span-4"}  rounded-[16px] overflow-hidden relative h-full`}>
                                    <Image objectFit={"cover"} quality={100} layout={"fill"}
                                           alt={""} src={"/2.webp"}/>
                                </div>


                                <div style={{color: `${options.showMoreIconColor}`}}
                                     className={`${isMobilePreview ? " row-span-2 col-span-4" : " row-span-2 col-span-4"}  bg-black/[8%] flex items-center justify-center text-primary-light  font-medium  rounded-[12px] overflow-hidden relative `}>
                                    <div className={"text-center"}>
                                        <Icon className={"mr-2 text-center"}>
                                            more_horiz
                                        </Icon>
                                        <div className={"text-center"}>
                                            Show More
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container mt-12 mx-auto"}>
                    <h2 className={" text-headline-small font-bold "}>
                        VEHICLE DETAILS
                    </h2>
                    {options.vehicleDetailType === 0 && <div
                        className={`grid mt-5 ${isMobilePreview ? "grid-cols-2" : "grid-cols-3  max-w-6xl"}   gap-8`}>

                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                settings
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    2.5L I4 176hp 172ft. lbs.
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Engine
                                </p>
                            </div>
                        </div>
                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                directions_car
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    CrossOver
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Body Type
                                </p>
                            </div>
                        </div>
                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                local_gas_station
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    Gasoline
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Fuel Type
                                </p>
                            </div>
                        </div>
                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                auto_transmission
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    Automatic, 6-Spd
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Transmission
                                </p>
                            </div>
                        </div>
                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                palette
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    Purple
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Exterior Color
                                </p>
                            </div>
                        </div>
                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                bolt
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    176 hp
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Horsepower
                                </p>
                            </div>
                        </div>
                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                speed
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    172 lb-ft
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Torque
                                </p>
                            </div>
                        </div>
                        <div>
                            <Icon
                                style={{color: options.infoIconColor}}
                                className={`mb-2 text-on-surface-variant-light ${isMobilePreview ? "text-[24px]" : "text-[32px]"}`}
                                size={24} fill={0}>
                                search_hands_free
                            </Icon>
                            <div className={"text-on-surface-light"}>
                                <p style={{color: options.infoTextColor}} className={"text-body-large font-black"}>
                                    AWD
                                </p>
                                <p style={{color: options.infoBodyTextColor}}
                                   className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                    Drivetrain
                                </p>
                            </div>
                        </div>
                        <div
                            className={`flex ${isMobilePreview ? "col-span-2" : "col-span-3"}  justify-center mt-6 `}>
                            <Button style={{
                                backgroundColor: options.tonalButtonsBackgroundColor,
                                color: options.tonalButtonsTextColor
                            }} type={"tonal"} icon={""}>
                                Show More Information
                            </Button>
                        </div>
                    </div>}
                    {options.vehicleDetailType === 1 &&
                        <div
                            className={"mt-6 rounded-2xl overflow-hidden w-full  border border-surface-variant-light dark:border-surface-variant-dark md:max-w-3xl overflow-x-hidden"}>
                            <div className={"flex"}>
                                <table className={"w-full whitespace-normal"}>
                                    <thead className={""}>
                                    {/*<tr className={`bg-surface-light dark:bg-surface-dark dark:bg-surface-1-dark divide-x-reverse divide-x divide-surface-variant-light dark:divide-surface-variant-dark`}>*/}
                                    {/*    <th className={" md:px-6 px-4 py-4 text-on-surface-light dark:text-on-surface-dark font-medium"}>*/}

                                    {/*    </th>*/}
                                    {/*    <th className={"py-4 md:px-6 px-4  text-on-surface-light dark:text-on-surface-dark font-medium"}>*/}

                                    {/*    </th>*/}
                                    {/*</tr>*/}
                                    </thead>
                                    <tbody
                                        className={"text-body-small  md:text-body-large bg-surface-light dark:bg-surface-dark w-full text-left"}>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Engine
                                        </td>
                                        <td
                                            className={`md:px-6 px-4  font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4  text-on-surface-light dark:text-on-surface-dark`}>
                                            2.5L I4 176hp 172ft. lbs.
                                            {/*-*/}
                                            {/*<a dir={"ltr"} className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}*/}
                                            {/*   href={"tel:0216601967"}>*/}
                                            {/*    {"+21-6601967"}*/}
                                            {/*</a>*/}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Body Type
                                        </td>
                                        <td
                                            className={`md:px-6 px-4 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                            {"CrossOver"}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Fuel Type
                                        </td>
                                        <td
                                            className={`md:px-6 px-4 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                            {"Gasoline"}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Transmission
                                        </td>
                                        <td
                                            className={`md:px-6 px-4 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                            {"Automatic, 6-Spd"}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Exterior Color
                                        </td>
                                        <td
                                            className={`md:px-6 px-4 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                            {"Purple"}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Horsepower
                                        </td>
                                        <td
                                            className={`md:px-6 px-4 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                            {"176 hp"}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Torque
                                        </td>
                                        <td
                                            className={`md:px-6 px-4 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                            {"172 lb-ft"}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                            Drivetrain
                                        </td>
                                        <td
                                            className={`md:px-6 px-4 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                            {"AWD"}
                                        </td>

                                    </tr>


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    }

                </div>
                <div className={"container mt-12 mx-auto"}>
                    <h2 className={" text-headline-small font-bold "}>
                        Key Features
                    </h2>
                    <div
                        className={`${isMobilePreview ? "" : "max-w-6xl divide-x gap-8"} mt-5  divide-outline-light `}>
                        <div
                            className={`${isMobilePreview ? "mb-2 mr-4" : "mb-2 mr-4"} inline-flex items-center text-on-surface-light  `}>
                            <Icon style={{color: options.featuresIconColor}}
                                  className={"text-on-surface-variant-light mr-2 "} size={24}
                                  fill={1}>
                                bluetooth
                            </Icon>
                            <p style={{color: options.featuresTextColor}}
                               className={"text-body-large text-on-surface-light font-medium"}>
                                Bluetooth
                            </p>
                        </div>
                        <div
                            className={`${isMobilePreview ? "mb-2 mr-4" : "mb-2 pl-4 mr-4"} inline-flex items-center text-on-surface-light  `}>
                            <Icon style={{color: options.featuresIconColor}}
                                  className={"text-on-surface-variant-light mr-2 "} size={24}
                                  fill={1}>
                                photo_camera
                            </Icon>
                            <p style={{color: options.featuresTextColor}}
                               className={"text-body-large text-on-surface-light font-medium"}>
                                Backup Camera
                            </p>
                        </div>
                        <div
                            className={`${isMobilePreview ? "mb-2 mr-4" : "mb-2 pl-4 mr-4"} inline-flex    items-center text-on-surface-light  `}>
                            <Icon style={{color: options.featuresIconColor}}
                                  className={"text-on-surface-variant-light mr-2 "} size={24}
                                  fill={1}>
                                road
                            </Icon>
                            <p style={{color: options.featuresTextColor}}
                               className={"text-body-large text-on-surface-light font-medium"}>
                                Lane departure warning
                            </p>
                        </div>
                        <div
                            className={`${isMobilePreview ? "mb-2 mr-4" : "mb-2 pl-4 mr-4"} inline-flex    items-center text-on-surface-light  `}>
                            <Icon style={{color: options.featuresIconColor}}
                                  className={"text-on-surface-variant-light mr-2 "} size={24}
                                  fill={1}>
                                speed
                            </Icon>
                            <p style={{color: options.featuresTextColor}}
                               className={"text-body-large text-on-surface-light font-medium"}>
                                Adaptive cruise control
                            </p>
                        </div>
                        <div
                            className={`${isMobilePreview ? "mb-2 mr-4" : "mb-2 pl-4 mr-4"} inline-flex    items-center text-on-surface-light  `}>
                            <Icon style={{color: options.featuresIconColor}} className={" mr-2 "} size={24}
                                  fill={1}>
                                taxi_alert
                            </Icon>
                            <p style={{color: options.featuresTextColor}} className={"text-body-large  font-medium"}>
                                Collision warning
                            </p>
                        </div>

                    </div>
                    <div className={"flex w-full justify-center py-6"}>
                        <Button style={{color: options.standardButtonsTextColor}} icon={""}>
                            Show More Information
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}