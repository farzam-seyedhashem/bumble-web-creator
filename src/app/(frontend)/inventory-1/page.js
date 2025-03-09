import Image from 'next/image'
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import FAB from "@m3/floating_action_buttons/FAB";
import IconButton from "@m3/icon_buttons/IconButton";

export default function InventoryPage() {
    const imageOptions = {
        style: 0
    }
    return (
        <div className={"py-6 bg-surface-light"}>
            <FAB className={"fixed bottom-6 right-6"} isExtended color={"primary"} label={"Calculator"}>
                calculate
            </FAB>
            <div className="bg-secondary-container-light rounded-[16px]  p-10 container mx-auto ">
                <div className={"grid grid-cols-12 gap-6"}>
                    <div className={"relative col-span-5"}>
                        <div>
                            <h1 className={"text-on-surface-light text-headline-large font-extrabold"}>
                                2013 Ford Edge Sport
                            </h1>
                            <div className={"flex mt-2 mb-4 items-center text-title-large font-medium"}>
                <span className={"text-on-surface-light "}>
                $13,998
                </span>
                                <div className={"bg-on-surface-light w-[1px] mx-4 h-[24px] "}/>
                                <span className={"text-on-surface-light "}>
                100K miles
                </span>
                            </div>
                            <div className={"flex items-center  space-x-2"}>
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
                        </div>
                        <div className={"grid grid-cols-4 gap-4 h-[300px] grid-rows-4 absolute bottom-0 "}>

                            <div
                                className={"col-span-4 relative p-4 bg-on-secondary-container-light/[8%] row-span-2 text-on-secondary-container-light  rounded-[24px]"}>
                                <div className={"mb-4 flex items-center "}>
                                    <Icon size={32}>
                                        lock_open
                                    </Icon>
                                    <p className={"ml-4 font-medium text-label-large "}>
                                        Special offers or seasonal promotions may include free maintenance, oil changes,
                                        tire
                                        rotations, etc.
                                    </p>
                                </div>
                                <div className={"absolute bottom-4 right-4 flex justify-end"}>
                                    <Button type={"filled"}>
                                        {"Unlock Manager's Special"}
                                    </Button>
                                </div>
                            </div>
                            <div
                                className={"relative col-span-2 p-4 bg-on-secondary-container-light/[8%] row-span-2 text-on-secondary-container-light rounded-[24px]"}>
                                <div className={"mb-4 flex items-center "}>
                                    <Icon size={32}>
                                        credit_card
                                    </Icon>
                                    <p className={"ml-4 font-medium text-label-large "}>

                                        Are You Looking for Financing Options for Your Car?

                                    </p>
                                </div>
                                <div className={"absolute bottom-4 right-4 flex justify-end"}>
                                    <Button type={"outlined"}>
                                        Get approved
                                    </Button>
                                </div>
                            </div>
                            <div
                                className={"col-span-2 relative  p-4 bg-on-secondary-container-light/[8%] row-span-2 justify-between text-on-secondary-container-light  rounded-[24px]"}>

                                <div className={" flex items-center "}>
                                    <Icon className={"text-on-surface-variant-light"} size={32}>
                                        schedule
                                    </Icon>
                                    <p className={"ml-4  font-medium text-label-large "}>
                                        Set Schedule for a test drive
                                    </p>
                                </div>
                                <div className={"absolute bottom-4 right-4 flex justify-end"}>
                                    <Button>
                                        Open Calender
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-7"}>
                        <div className={"grid grid-cols-12 grid-rows-4 h-[600px]  w-full gap-4"}>
                            <div
                                className={"row-span-3 col-span-12 rounded-[16px] overflow-hidden relative  h-full"}>
                                <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/1.webp"}/>
                            </div>
                            <div
                                className={"row-span-2 col-span-4 rounded-[16px] overflow-hidden relative h-full"}>
                                <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/2.webp"}/>
                            </div>
                            <div
                                className={"row-span-2 col-span-4 rounded-[16px] overflow-hidden relative h-full"}>
                                <Image objectFit={"cover"} quality={100} layout={"fill"} alt={""} src={"/2.webp"}/>
                            </div>


                            <div
                                className={"row-span-2 col-span-4  flex items-center justify-center text-primary-light bg-on-secondary-container-light/[10%] font-medium  rounded-[12px] overflow-hidden relative "}>
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
                <div className={"grid mt-5 grid-cols-3 max-w-6xl  gap-8"}>

                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            settings
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                2.5L I4 176hp 172ft. lbs.
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Engine
                            </p>
                        </div>
                    </div>
                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            directions_car
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                CrossOver
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Body Type
                            </p>
                        </div>
                    </div>
                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            local_gas_station
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                Gasoline
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Fuel Type
                            </p>
                        </div>
                    </div>
                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            auto_transmission
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                Automatic, 6-Spd
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Transmission
                            </p>
                        </div>
                    </div>
                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            palette
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                Purple
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Exterior Color
                            </p>
                        </div>
                    </div>
                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            bolt
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                176 hp
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Horsepower
                            </p>
                        </div>
                    </div>
                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            speed
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                172 lb-ft
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Torque
                            </p>
                        </div>
                    </div>
                    <div>
                        <Icon className={"mb-2 text-on-surface-variant-light text-[32px]"} size={32} fill={0}>
                            search_hands_free
                        </Icon>
                        <div className={"text-on-surface-light"}>
                            <p className={"text-body-large font-black"}>
                                AWD
                            </p>
                            <p className={"text-on-surface-variant-light text-title-medium font-medium"}>
                                Drivetrain
                            </p>
                        </div>
                    </div>
                    <div className={"flex col-span-3 justify-center mt-6 "}>
                        <Button type={"tonal"} icon={""}>
                            Show More Information
                        </Button>
                    </div>
                </div>

            </div>
            <div className={"container mt-12 mx-auto"}>
                <h2 className={" text-headline-small font-bold "}>
                    Key Features
                </h2>
                <div className={"max-w-6xl mt-5 divide-x divide-outline-light gap-8"}>
                    <div
                        className={"mb-2 mr-4 inline-flex    items-center text-on-surface-light  "}>
                        <Icon className={"text-on-surface-variant-light mr-2 "} size={24} fill={1}>
                            bluetooth
                        </Icon>
                        <p className={"text-body-large text-on-surface-light font-medium"}>
                            Bluetooth
                        </p>
                    </div>
                    <div
                        className={"mb-2 pl-4 mr-4 inline-flex    items-center text-on-surface-light  "}>
                        <Icon className={"text-on-surface-variant-light mr-2 "} size={24} fill={1}>
                            photo_camera
                        </Icon>
                        <p className={"text-body-large text-on-surface-light font-medium"}>
                            Backup Camera
                        </p>
                    </div>
                    <div
                        className={"mb-2 pl-4 mr-4 inline-flex    items-center text-on-surface-light  "}>
                        <Icon className={"text-on-surface-variant-light mr-2 "} size={24} fill={1}>
                            road
                        </Icon>
                        <p className={"text-body-large text-on-surface-light font-medium"}>
                            Lane departure warning
                        </p>
                    </div>
                    <div
                        className={"mb-2 pl-4 mr-4 inline-flex    items-center text-on-surface-light  "}>
                        <Icon className={"text-on-surface-variant-light mr-2 "} size={24} fill={1}>
                            speed
                        </Icon>
                        <p className={"text-body-large text-on-surface-light font-medium"}>
                            Adaptive cruise control
                        </p>
                    </div>
                    <div
                        className={"mb-2 pl-4 mr-4 inline-flex    items-center text-on-surface-light  "}>
                        <Icon className={"text-on-surface-variant-light mr-2 "} size={24} fill={1}>
                            taxi_alert
                        </Icon>
                        <p className={"text-body-large text-on-surface-light font-medium"}>
                            Collision warning
                        </p>
                    </div>
                    <div className={"flex col-span-3 justify-center mt-6 "}>
                        <Button icon={""}>
                            Show More Information
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}