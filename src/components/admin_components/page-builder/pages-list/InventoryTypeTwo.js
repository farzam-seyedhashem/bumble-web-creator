import FAB from "@m3/floating_action_buttons/FAB";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import Image from "next/image";

export const InventoryTypeTwo = ({options, isMobilePreview, className}) => {
    return (<>

        <div className={`${options.isPageExpended?"px-4":"container mx-auto"} w-full bg-surface-light ${className} `}>
            <FAB className={"absolute z-999 bottom-6 right-6"} isExtended color={"primary"} label={"Calculator"}>
                calculate
            </FAB>
            {options.titleType == 1 && <div className={" bg-surface-light  w-full z-999 top-0  "}>
                <div className={"h-[64px] flex items-center justify-between pt-5 px-4 "}>
                    <div>
                        <Icon>
                            arrow_back
                        </Icon>
                    </div>
                    <div className={" space-x-6"}>
                        {options.showSaveButton&&<Icon>
                            bookmark
                        </Icon>}
                        {options.showShareButton&&<Icon>
                            share
                        </Icon>}
                        {options.showCalculatorButton&&<Icon>
                            calculate
                        </Icon>}
                    </div>
                </div>
                <div className={"flex items-end h-[calc(152px_-_64px)] px-4 pb-[28px] "}>
                    <h1 className={"text-headline-medium text-on-surface-light font-medium"}>
                        2013 Ford Edge Sport
                    </h1>
                </div>
            </div>}

            {options.titleType == 0 && <div className=" pt-6 ">
                <h1 className={`${isMobilePreview?"text-headline-small":"text-headline-large"} text-on-surface-light  font-extrabold`}>
                    2013 Ford Edge Sport
                </h1>
                <div className={`${isMobilePreview?"text-body-large mt-2 mb-3":"text-title-large mt-4 mb-2"} flex  items-center  font-medium`}>
                <span className={"text-on-surface-light "}>
                $13,998
                </span>
                    <div className={"bg-on-surface-light w-[1px] mx-4 h-[24px] "}/>
                    <span className={"text-on-surface-light "}>
                100K miles
                </span>
                </div>


                <div className={`${isMobilePreview?"flex items-center overflow-scroll whitespace-nowrap space-x-2":"flex items-center  space-x-2"} `}>
                    <div
                        className={"pr-4 pl-2 before:absolute before:inset-0 before:active:bg-on-surface-light/[10%] before:hover:bg-on-surface-light/[8%] relative w-fit flex items-center justify-center rounded-[8px] h-[32px] border overflow-hidden border-outline-light"}>
                        <Icon size={18} weight={500} className={"mr-2 text-primary-light"}>
                            content_copy
                        </Icon>
                        <span className={"font-medium text-label-large text-on-surface-light"}>
                Stock
                25606356
                    </span>
                    </div>
                    <div
                        className={"pr-4 pl-2 before:absolute before:inset-0 before:active:bg-on-surface-light/[10%] before:hover:bg-on-surface-light/[8%] relative w-fit flex items-center justify-center rounded-[8px] h-[32px] border overflow-hidden border-outline-light"}>
                        <Icon size={18} weight={500} className={"mr-2 text-primary-light"}>
                            content_copy
                        </Icon>
                        <span className={"font-medium text-label-large text-on-surface-light"}>
                VIN
                2FMDK3AK3DBA95232
                    </span>
                    </div>


                </div>
            </div>}
            {/*<div className={"fixed bg-surface-light  w-full z-999 top-0  "}>*/}
            {/*    <div className={"h-[64px] flex items-center justify-between  px-4 "}>*/}
            {/*        <div className={"flex items-center "}>*/}
            {/*            <Icon>*/}
            {/*                arrow_back*/}
            {/*            </Icon>*/}
            {/*            <div className={"flex items-end px-4  "}>*/}
            {/*                <h1 className={"text-title-large text-on-surface-light font-medium"}>*/}
            {/*                    2013 Ford Edge Sport*/}
            {/*                </h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={" space-x-6"}>*/}
            {/*            <Icon>*/}
            {/*                favorite*/}
            {/*            </Icon>*/}
            {/*            <Icon>*/}
            {/*                contact_support*/}
            {/*            </Icon>*/}
            {/*            <Icon>*/}
            {/*                share*/}
            {/*            </Icon>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}


            {options.imageType === 0 && <div className=" pt-6">
                <div className={"flex justify-end mb-2"}>
                    {options.isSlideShowMoreButton&&<button
                        className={"font-medium hover:underline hover:text-on-primary-container-light text-label-large text-primary-light "}>
                        Show all
                    </button>}
                </div>
                <div className={`flex items-center ${isMobilePreview?"h-[200px]":"h-[400px]"}   gap-[8px]`}>
                    <div className={`${isMobilePreview?"w-full":"w-6/12"} rounded-[28px] overflow-hidden relative  h-full`}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>
                    </div>
                    {!isMobilePreview&&<div className={"rounded-[28px] overflow-hidden relative w-6/12 h-full"}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/2.webp"}/>
                    </div>}
                    {!isMobilePreview&&<div
                        className={`rounded-[28px] overflow-hidden ${isMobilePreview ? "w-4/12" : "w-2/12"} relative w-2/12 h-full`}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/3.webp"}/>
                    </div>}

                    <div className={`rounded-[28px] overflow-hidden relative ${isMobilePreview?"min-w-[48px] w-[48px]":"min-w-[56px] w-[56px]"}  h-full`}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/4.webp"}/>
                    </div>
                </div>
            </div>}
            {options.imageType === 1 &&
                <div className={` pt-6 grid grid-cols-12 gap-1  ${isMobilePreview?"":"grid-rows-2 h-[300px]"} `}>

                    <div className={`${isMobilePreview?"col-span-12 h-[160px]":"col-span-4 row-span-2 h-full"}   rounded-[12px] overflow-hidden relative w-full`}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>
                    </div>

                    <div className={`${isMobilePreview?"col-span-4 h-[80px]":"col-span-3  row-span-1 h-full"} rounded-[12px]  overflow-hidden relative w-full `}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>
                    </div>
                    <div className={`${isMobilePreview?"col-span-4 h-[80px]":"row-span-1 col-span-3  h-full"} rounded-[12px] overflow-hidden relative w-full `}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>
                    </div>
                    <div
                        className={`${isMobilePreview?"col-span-4 h-[80px] text-label-large":"row-span-2 col-span-2 h-full"} flex items-center justify-center rounded-[12px] bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark  overflow-hidden relative w-full`}>
                        Show More
                    </div>
                    <div className={`${isMobilePreview?"hidden":"block"} rounded-[12px] row-span-1 col-span-3 overflow-hidden relative w-full h-full`}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>
                    </div>
                    <div className={`${isMobilePreview?"hidden":"block"} rounded-[12px] row-span-1 col-span-3 overflow-hidden relative w-full h-full`}>
                        <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>
                    </div>


                </div>}
            {/*{options.imageType === 2 && <div className={"overflow-hidden h-fit w-full"}>*/}
            {/*    <div className={"pl-2 pt-6 gap-2 h-[300px] overflow-scroll whitespace-nowrap  flex "}>*/}
            {/*        <div className={"aspect-w-16 w-[600px] rounded-[12px] overflow-hidden relative inline-flex h-full"}>*/}
            {/*            <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>*/}
            {/*        </div>*/}
            {/*        <div className={"aspect-w-16 w-[300px] rounded-[12px] overflow-hidden relative inline-flex h-1/2"}>*/}
            {/*            <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>}*/}


            <div className={" py-10 grid grid-cols-12 gap-6"}>
                 <div className={`${isMobilePreview?"col-span-12":"col-span-8"} space-y-10`}>
                     <div>
                        <h2 className={`${isMobilePreview?"text-title-medium px-4":"text-headline-small px-6"}  font-bold `}>
                            VEHICLE DETAILS
                        </h2>
                        <div className={` ${isMobilePreview?"grid-cols-12":"grid-cols-12 h-[640px] grid-row-4"} grid mt-4 gap-2`}>
                            <div
                                className={`${options.vehicleDetailType===0?"md:bg-[#f5d9ff] text-[#2c0b3f]":"bg-primary-container-light text-on-primary-container-light"} ${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"rounded-[32px] py-4 row-span-4 col-span-7 flex space-x-4"}  py-10 justify-center px-6 items-center   `}>
                                <Icon className={`${options.vehicleDetailType===0?"text-[#735187]":"text-on-surface-variant-light"} ${isMobilePreview?"text-[24px]":"text-[90px]"}`} size={24} fill={1}>
                                    settings
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        2.5L I4 176hp 172ft. lbs.
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Engine
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`px-6 items-center   ${options.vehicleDetailType===0?"md:bg-[#e1dfff] text-[#13134a]":"bg-primary-container-light text-on-primary-container-light"} ${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"py-4 col-span-5 row-span-2 flex space-x-4 rounded-[32px]"}  `}>
                                <Icon className={`${options.vehicleDetailType===0?"text-[#585992]":"text-on-surface-variant-light"} ${isMobilePreview?"text-[24px]":"text-[90px] "}`} size={24} fill={1}>
                                    directions_car
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        CrossOver
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Body Type
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"py-4 col-span-5 row-span-2 flex space-x-4 rounded-[32px]"}  px-6 items-center  ${options.vehicleDetailType===0?"md:bg-[#ffd9df] text-[#3a0717]":"bg-primary-container-light text-on-primary-container-light"}  `}>
                                <Icon className={`${options.vehicleDetailType===0?"text-[#8e4958]":"text-on-surface-variant-light"} ${isMobilePreview?"text-[24px]":"text-[90px]"}`} size={24} fill={1}>
                                    local_gas_station
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        Gasoline
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Fuel Type
                                    </p>
                                </div>
                            </div>
                            {/*<div className={"rounded-[24px] bg-[#ffd9df] text-[#3a0717] row-span-2 col-span-2"}>*/}

                            {/*</div>*/}
                            <div
                                className={`   px-6   items-center ${options.vehicleDetailType===0?"md:bg-[#ffd8ea] text-[#370727]":"bg-primary-container-light text-on-primary-container-light"}  ${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"py-4 col-span-6 row-span-4 flex space-x-4 rounded-[32px]"}  `}>
                                <Icon className={`${options.vehicleDetailType===0?"text-[#874b6d]":"text-on-surface-variant-light"}  ${isMobilePreview?"text-[24px]":"text-[90px]"}`} size={24} fill={1}>
                                    auto_transmission
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        Automatic, 6-Spd
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Transmission
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`   px-6  items-center ${options.vehicleDetailType===0?"md:bg-[#ffdea4] text-[#261900]":"bg-primary-container-light text-on-primary-container-light"} ${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"py-4 col-span-6 row-span-4 flex space-x-4 rounded-[32px]"}`}>
                                <Icon className={`${options.vehicleDetailType===0?"text-[#79590c]":"text-on-surface-variant-light"}  ${isMobilePreview?"text-[24px]":"text-[90px]"}`} size={24} fill={1}>
                                    palette
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        Purple
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Exterior Color
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`   px-6  items-center ${options.vehicleDetailType===0?"md:bg-[#ffdbd2] text-[#3a0a01]":"bg-primary-container-light text-on-primary-container-light"} ${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"py-4 col-span-4 row-span-4 flex space-x-4 rounded-[32px]"} `}>
                                <Icon className={`${options.vehicleDetailType===0?"text-[#8f4b39]":"text-on-surface-variant-light"}  ${isMobilePreview?"text-[24px]":"text-[90px]"}`} size={24} fill={1}>
                                    bolt
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        176 hp
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Horsepower
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`   px-6 items-center ${options.vehicleDetailType===0?"md:bg-[#eee58c] text-[#1f1c00]":"bg-primary-container-light text-on-primary-container-light"} ${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"py-4 col-span-4 row-span-4 flex space-x-4 rounded-[32px]"} `}>
                                <Icon className={`${options.vehicleDetailType===0?"text-[#666014]":"text-on-surface-variant-light"}  ${isMobilePreview?"text-[24px]":"text-[90px]"}`} size={24} fill={1}>
                                    speed
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        172 lb-ft
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Torque
                                    </p>
                                </div>
                            </div>


                            <div
                                className={`  px-6 items-center ${options.vehicleDetailType===0?"md:bg-[#a8f2ce] text-[#002114]":"bg-primary-container-light text-on-primary-container-light"}   ${isMobilePreview?"col-span-6 py-6 rounded-[16px]":"py-4 col-span-4 row-span-4 flex rounded-[32px]"}`}>
                                <Icon className={` ${options.vehicleDetailType===0?"text-[#206a4e]":"text-on-surface-variant-light"}  ${isMobilePreview?"text-[24px]":"text-[90px]"}`} size={24} fill={1}>
                                    search_hands_free
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-title-medium":"text-headline-large"}  font-black`}>
                                        AWD
                                    </p>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-medium"}  font-medium`}>
                                        Drivetrain
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={"flex mt-6 justify-center"}>
                            <Button icon={"more_vert"} type={"filled"}>
                                Show More Information
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h2 className={"text-headline-medium font-extrabold"}>
                            Key Features
                        </h2>
                        <div className={`${isMobilePreview?"grid grid-cols-2 gap-4":""} mt-4 `}>
                            <div
                                className={`${isMobilePreview?"col-span-1 py-6 px-6 rounded-[24px]":"mb-2 mr-2 inline-flex  pl-6 pr-8  md:h-[160px] items-center rounded-[24px]"} text-on-surface-light bg-surface-container-light `}>
                                <Icon className={`${isMobilePreview?"text-[24px]":"text-[40px] mr-2"} text-outline-light  `} size={24} fill={1}>
                                    bluetooth
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-large"}  font-medium`}>
                                        Bluetooth
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${isMobilePreview?"col-span-1 py-6 px-6 rounded-[24px]":"mb-2 mr-2 inline-flex  pl-6 pr-8  md:h-[160px] items-center rounded-[24px]"} text-on-surface-light bg-surface-container-light `}>
                                <Icon className={`${isMobilePreview?"text-[24px]":"text-[40px] mr-2"} text-outline-light  `} size={24} fill={1}>
                                    photo_camera
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-large"}  font-medium`}>
                                        Backup Camera
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${isMobilePreview?"col-span-1 py-6 px-6 rounded-[24px]":"mb-2 mr-2 inline-flex  pl-6 pr-8  md:h-[160px] items-center rounded-[24px]"} text-on-surface-light bg-surface-container-light `}>
                                <Icon className={`${isMobilePreview?"text-[24px]":"text-[40px] mr-2"} text-outline-light  `} size={24} fill={1}>
                                    road
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-large"}  font-medium`}>
                                        Lane departure warning
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${isMobilePreview?"col-span-1 py-6 px-6 rounded-[24px]":"mb-2 mr-2 inline-flex  pl-6 pr-8  md:h-[160px] items-center rounded-[24px]"} text-on-surface-light bg-surface-container-light `}>
                                <Icon className={`${isMobilePreview?"text-[24px]":"text-[40px] mr-2"} text-outline-light  `} size={24} fill={1}>
                                    speed
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-large"}  font-medium`}>
                                        Adaptive cruise control
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${isMobilePreview?"col-span-1 py-6 px-6 rounded-[24px]":"mb-2 mr-2 inline-flex  pl-6 pr-8  md:h-[160px] items-center rounded-[24px]"} text-on-surface-light bg-surface-container-light `}>
                                <Icon className={`${isMobilePreview?"text-[24px]":"text-[40px] mr-2"} text-outline-light  `} size={24} fill={1}>
                                    taxi_alert
                                </Icon>
                                <div>
                                    <p className={`${isMobilePreview?"text-body-large":"text-title-large"}  font-medium`}>
                                        Collision warning
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"flex mt-6 justify-center"}>
                            <Button icon={"more_vert"}>
                                Show More Information
                            </Button>
                        </div>
                    </div>
                </div>

                {!isMobilePreview&&<div className={"col-span-4"}>
                    <div className={"sticky space-y-6 top-[0px] w-full py-6 "}>
                        <div
                            className={"text-on-secondary-container-light p-6 bg-secondary-container-light rounded-[24px]"}>
                            <div className={"mb-6 flex items-center "}>
                                <Icon size={32}>
                                    lock_open
                                </Icon>
                                <p className={"ml-4 font-medium text-label-large "}>
                                    Special offers or seasonal promotions may include free maintenance, oil changes,
                                    tire
                                    rotations, etc.
                                </p>
                            </div>
                            <div className={"flex justify-end"}>
                                <Button type={"filled"}>
                                    {"Unlock Manager's Special"}
                                </Button>
                            </div>
                        </div>
                        <div className={"p-6 bg-surface-container-light rounded-[24px]"}>
                            <div className={"mb-6 flex items-center "}>
                                <Icon size={32}>
                                    credit_card
                                </Icon>
                                <p className={"ml-4 font-medium text-label-large "}>

                                    Are You Looking for Financing Options for Your Car?

                                </p>
                            </div>
                            <div className={"flex justify-end"}>
                                <Button type={"tonal"}>
                                    Get approved
                                </Button>
                            </div>
                        </div>
                        <div
                            className={"p-6  justify-between text-on-surface-light bg-surface-container-light rounded-[24px]"}>
                            <div className={"mb-6 flex items-center "}>
                                <Icon className={"text-on-surface-variant-light"} size={32}>
                                    schedule
                                </Icon>
                                <p className={"ml-4  font-medium text-label-large "}>
                                    Set Schedule for a test drive
                                </p>
                            </div>
                            <div className={"flex justify-end"}>
                                <Button>
                                    Open Calender
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>}
            </div>
        </div>
        {/*<div className={"xl:w-3/12 hidden md:w-5/12"}>*/}
        {/*    <div*/}
        {/*        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
        {/*        <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
        {/*            Card Type*/}
        {/*        </h3>*/}
        {/*        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
        {/*            Edit website inventory card design*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*    <ul className={"py-2 px-2"}>*/}
        {/*        {cardTypeList.map((item, index) => <li key={index}*/}
        {/*                                               onClick={(e) => setInventoryCardType(index)}>*/}
        {/*            <input className={"hidden"} type="radio" id={index} name="fav_language"/>*/}
        {/*            <label className={"flex items-center"} htmlFor={index}>*/}
        {/*                <div*/}
        {/*                    className={`relative ${inventoryCardType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>*/}
        {/*                    {inventoryCardType === index ? <Icon*/}
        {/*                            className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :*/}
        {/*                        <Icon*/}
        {/*                            className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}*/}
        {/*                </div>*/}
        {/*                <span*/}
        {/*                    className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>*/}
        {/*                           {item.title}*/}
        {/*                                </span>*/}
        {/*            </label>*/}
        {/*        </li>)}*/}
        {/*    </ul>*/}
        {/*    <div className={"w-full pt-2 pb-4"}>*/}
        {/*        <Divider type={"inset-middle"} className={""}/>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
        {/*        <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
        {/*            Title*/}
        {/*        </h3>*/}
        {/*        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
        {/*            Set title heading type*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*    <div className={"py-2 px-4 max-w-xl grid grid-cols-6 gap-1"}>*/}
        {/*        {["h1", "h2", "h3", "h4", "h5", "h6"].map((item, index) => <div key={index}*/}
        {/*                                                                        onClick={() => updateInventoryCard("titleType", item)}*/}
        {/*                                                                        className={`relative overflow-hidden ${inventoryCard.titleType === item ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[64px] flex items-center justify-center `}>*/}
        {/*            <div*/}
        {/*                className={` ${inventoryCard.titleType === item ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-surface-container-light dark:text-surface-container-dark bg-on-surface-variant-light dark:bg-on-surface-variant-dark"} text-body-medium font-medium flex justify-center rounded-[8px] items-center w-[32px] h-[32px] `}>*/}
        {/*                {item.toUpperCase()}*/}
        {/*            </div>*/}
        {/*        </div>)}*/}
        {/*    </div>*/}
        {/*    <div className={"w-full pt-2 pb-4"}>*/}
        {/*        <Divider type={"inset-middle"} className={""}/>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
        {/*        <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
        {/*            Inventory information*/}
        {/*        </h3>*/}
        {/*        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
        {/*            Edit inventory information in card*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*    <ul className={"mt-2"}>*/}
        {/*        <li*/}
        {/*            className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
        {/*            <div className={"mr-4"}>*/}
        {/*                <label*/}
        {/*                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
        {/*                    {"Show Vehicle More Info"}*/}
        {/*                </label>*/}
        {/*            </div>*/}
        {/*            <div className={"w-fit"}>*/}
        {/*                <Switch*/}
        {/*                    setIsCheck={(v) => updateInventoryCard("showVehicleInfo", !inventoryCard.showVehicleInfo)}*/}
        {/*                    isCheck={inventoryCard.showVehicleInfo}/>*/}

        {/*            </div>*/}
        {/*        </li>*/}
        {/*    </ul>*/}
        {/*    <div className={"px-4 mt-1 *:inline-flex max-w-xl *:mb-2 *:mr-2"}>*/}
        {/*        <FilterChips isChecked={inventoryInfoSelected.indexOf("miles") !== -1}*/}
        {/*                     onChange={() => handleInventoryInfoSelected("miles")}*/}
        {/*                     label="Miles"/>*/}
        {/*        <FilterChips isChecked={inventoryInfoSelected.indexOf("interior") !== -1}*/}
        {/*                     onChange={() => handleInventoryInfoSelected("interior")}*/}
        {/*                     label="Interior Color"/>*/}
        {/*        <FilterChips isChecked={inventoryInfoSelected.indexOf("est") !== -1}*/}
        {/*                     onChange={() => handleInventoryInfoSelected("est")}*/}
        {/*                     label="Est. payment"/>*/}
        {/*        <FilterChips isChecked={inventoryInfoSelected.indexOf("exterior") !== -1}*/}
        {/*                     onChange={() => handleInventoryInfoSelected("exterior")}*/}
        {/*                     label="Exterior Color"/>*/}
        {/*        <FilterChips isChecked={inventoryInfoSelected.indexOf("body_type") !== -1}*/}
        {/*                     onChange={() => handleInventoryInfoSelected("body_type")}*/}
        {/*                     label="Body Type"/>*/}
        {/*        <FilterChips isChecked={inventoryInfoSelected.indexOf("trim") !== -1}*/}
        {/*                     onChange={() => handleInventoryInfoSelected("trim")} label="Trim"/>*/}
        {/*        <FilterChips isChecked={inventoryInfoSelected.indexOf("fuel_type") !== -1}*/}
        {/*                     onChange={() => handleInventoryInfoSelected("fuel_type")}*/}
        {/*                     label="Fuel Type"/>*/}
        {/*    </div>*/}
        {/*    <div className={"w-full pt-2 pb-4"}>*/}
        {/*        <Divider type={"inset-middle"} className={""}/>*/}
        {/*    </div>*/}
        {/*    {inventoryCardType !== 0 && <div*/}
        {/*        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
        {/*        <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
        {/*            Card Button*/}
        {/*        </h3>*/}
        {/*        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
        {/*            Edit show more button*/}
        {/*        </p>*/}
        {/*    </div>}*/}
        {/*    {inventoryCardType !== 0 && <ul className={"py-2"}>*/}
        {/*        {inventoryCardType !== 0 &&*/}
        {/*            <li*/}
        {/*                className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
        {/*                <div className={"mr-4"}>*/}
        {/*                    <label*/}
        {/*                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
        {/*                        {"'Read More' Button"}*/}
        {/*                    </label>*/}
        {/*                </div>*/}
        {/*                <div className={"w-fit"}>*/}
        {/*                    <Switch*/}
        {/*                        setIsCheck={(v) => updateInventoryCard("showReadMoreButton", !inventoryCard.showReadMoreButton)}*/}
        {/*                        isCheck={inventoryCard.showReadMoreButton}/>*/}

        {/*                </div>*/}
        {/*            </li>}*/}
        {/*        {inventoryCardType !== 0 &&*/}
        {/*            <li*/}
        {/*                className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
        {/*                <div className={"mr-4"}>*/}
        {/*                    <label*/}
        {/*                        className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
        {/*                        {"Show button style like text"}*/}
        {/*                    </label>*/}
        {/*                </div>*/}
        {/*                <div className={"w-fit"}>*/}
        {/*                    <Switch*/}
        {/*                        setIsCheck={(v) => updateInventoryCard("buttonType", inventoryCard.buttonType === 0 ? 1 : 0)}*/}
        {/*                        isCheck={inventoryCard.buttonType === 1}/>*/}

        {/*                </div>*/}
        {/*            </li>}*/}
        {/*    </ul>}*/}
        {/*    <div className={"w-full pt-2 pb-4"}>*/}
        {/*        <Divider type={"inset-middle"} className={""}/>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>*/}
        {/*        <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>*/}
        {/*            Card Appearance*/}
        {/*        </h3>*/}
        {/*        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
        {/*            Edit website inventory card design*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*    <ul className={"py-2"}>*/}
        {/*        {cardAppearanceList.map((item, index) => <li key={index}*/}
        {/*                                                     className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
        {/*            <div className={"mr-4"}>*/}
        {/*                <label*/}
        {/*                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
        {/*                    {item.title}*/}
        {/*                </label>*/}
        {/*            </div>*/}
        {/*            <div className={"w-fit"}>*/}
        {/*                <ColorPicker value={inventoryCard[item.key]}*/}
        {/*                             onChange={(value) => updateInventoryCard(item.key, value)}/>*/}
        {/*            </div>*/}
        {/*        </li>)}*/}
        {/*    </ul>*/}


        {/*</div>*/}
    </>)
}