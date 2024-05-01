'use client'
import Image from 'next/legacy/image'
import {useState} from "react";
import Typography from "@m3/assets/typography/Typography";
import Icon from "@m3/assets/icons/Icon";
import Button from "@m3/buttons/Button";
import AssistChips from "@m3/chips/AssistChips";
import Divider from "@m3/dividers/Divider";
import TextField from "@m3/text_fields/TextField";
import TextArea from "@m3/TextArea";

export default function Home() {
    const devices = [
        {label: "Mobile", icon: "smartphone", id: 0},
        {
            label: "Desktop", icon: "desktop_windows", id: 1
        }
    ]
    const [device, setDevice] = useState(0)
    return (
        <div className={"flex min-h-screen bg-surface-container-lowest-light dark:bg-surface-container-lowest-dark"}>
            <div className={"container mx-auto px-6 py-6 "}>
                <h1 className={"text-display-large font-black text-on-surface-dark"}>
                    Material Components
                </h1>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Typography
                </h2>
                <div className={"border border-outline-dark gap-4 rounded-[24px] px-6 py-6 mt-4"}>
                    <div className={"text-display-large text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-display-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-display-small text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-headline-large mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-headline-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-headline-small text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-title-large mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-title-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-title-small text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-body-large mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-body-small text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-label-large mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-label-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>
                    <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                        Lorem Ipsum
                    </div>

                </div>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Buttons
                </h2>
                <div
                    className={"border max-w-4xl grid grid-cols-4 border-outline-dark gap-4 rounded-[24px] px-6 py-6 mt-4"}>
                    <Button>
                        Standard
                    </Button>
                    <Button type={"outlined"}>
                        Outlined
                    </Button>
                    <Button type={"tonal"}>
                        tonal
                    </Button>
                    <Button type={"filled"}>
                        Filled
                    </Button>
                    <Button icon={"person"}>
                        Standard
                    </Button>
                    <Button icon={"person"} type={"outlined"}>
                        Outlined
                    </Button>
                    <Button icon={"person"} type={"tonal"}>
                        tonal
                    </Button>
                    <Button icon={"person"} type={"filled"}>
                        Filled
                    </Button>
                </div>

                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Blog Cards
                </h2>
                <div className={"border grid grid-cols-12 border-outline-dark gap-4 rounded-[24px] px-6 py-6 mt-4"}>
                    <div
                        className={"col-span-4 w-full h-fit p-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                        <div className={"flex pb-3"}>
                            <div className={`flex-1`}>
                                <Typography type={"h4"}
                                            className="mr-6  !text-title-medium  font-bold text-on-surface-light dark:text-on-surface-dark ">
                                    Post Title
                                </Typography>
                                <p
                                    className={"text-body-medium font-medium flex items-center w-fit py-1 rounded-[8px]  mt-2  whitespace-normal dark:text-on-surface-variant-dark text-on-surface-variant-light"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl
                                    nisi


                                </p>
                            </div>
                            <div className={"h-[100px] w-[100px]"}>

                                <Image quality={100} layout={'responsive'} width={720} height={720}
                                       className="rounded-[12px] w-full object-cover"
                                       src={"/bg.webp"} alt=""/>

                            </div>
                        </div>
                        <div className={"flex justify-between"}>
                            <div
                                className={`w-fit py-2 items-center px-4 rounded-[12px] dark:bg-surface-container-high-dark bg-surface-container-light flex  gap-0`}>
                                <div className={`   mr-2 items-center`}>
                                    <p className={` inline-flex items-center text-label-small sm:text-label-medium mr-2 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                        Tags:
                                    </p>
                                    <p className={`mr-1 inline-flex text-primary-light dark:text-primary-dark items-center text-label-small sm:text-label-medium `}>

                                        <a href={"#"} className={"text-primary-light dark:text-primary-dark"}>

                                            lorem_ipsum
                                        </a>
                                    </p>
                                    <p className={`mr-2 inline-flex text-primary-light dark:text-primary-dark items-center text-label-small sm:text-label-medium `}>

                                        <a href={"#"} className={"text-primary-light dark:text-primary-dark"}>

                                            lorem_ipsum
                                        </a>
                                    </p>
                                    <p className={`mr-2 inline-flex text-primary-light dark:text-primary-dark items-center text-label-small sm:text-label-medium `}>

                                        <a href={"#"} className={"text-primary-light dark:text-primary-dark"}>

                                            lorem_ipsum
                                        </a>
                                    </p>


                                </div>

                            </div>
                            {/*<div className={"flex justify-end"}>*/}
                            {/*    <IconButton*/}
                            {/*        className={"w-10 h-10 !bg-surface-container-high-light dark:!bg-surface-container-high-dark"}>*/}
                            {/*        more_horiz*/}
                            {/*    </IconButton>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div
                        className={"col-span-4 border bg-surface-light dark:bg-surface-dark rounded-[12px] border-outline-variant-light dark:border-outline-variant-dark"}>
                        <div className={"rounded-[12px] overflow-hidden relative"}>
                            <Image layout={"responsive"} width={1920} height={1080} alt={"img"} src={"/bg.webp"}/>
                        </div>
                        <div className={"p-4"}>
                            <h3 className={"font-bold text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                Post Title
                            </h3>
                            <h4 className={"truncate text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>

                            </h4>
                            <p className={"my-8 text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                            <div className={"flex justify-end"}>
                                <Button type={"filled"}>
                                    Read More
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div
                        className={"col-span-4 bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] "}>
                        <div className={"rounded-[12px] overflow-hidden relative"}>
                            <Image layout={"responsive"} width={1920} height={1080} alt={"img"} src={"/bg.webp"}/>
                        </div>
                        <div className={"p-4"}>
                            <h3 className={"font-bold text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                Post Title
                            </h3>
                            <h4 className={"truncate text-on-surface-variant-light text-on-surface-variant-dark"}>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    lorem_ipsum
                                </a>
                            </h4>
                            <p className={"my-8 text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                            <div className={"flex justify-end"}>
                                <Button type={"filled"}>
                                    Read More
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className={"col-span-6 flex space-x-4"}>
                        <div className={"w-4/12 overflow-hidden rounded-[12px] relative"}>
                            <Image className={"rounded-[12px]"} objectFit={"cover"} width={1920} height={1920}
                                   layout={"responsive"} src={"/bg.webp"}/>
                        </div>
                        <div className={"w-8/12  relative"}>
                            <div className={"flex mb-2 items-center"}>
                                <label
                                    className={"text-label-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Mar 16, 2020
                                </label>
                                <div className={"bg-surface-container-high-light rounded-[8px]"}>

                                </div>
                            </div>
                            <h3 className={"font-bold text-title-large text-on-surface-light dark:text-on-surface-dark "}>
                                Post Title
                            </h3>
                            <p className={"mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                            <h4 className={"mt-1 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    #lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    #lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    #lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    #lorem_ipsum
                                </a>

                            </h4>

                        </div>
                    </div>
                    <div className={"col-span-3 overflow-hidden h-[470px] relative rounded-[12px]"}>

                        <Image layout={"fill"} objectFit={"cover"} src={"/bg.webp"}/>
                        <div
                            className={"absolute inset-0 bg-gradient-to-b from-black/[20%] via-black/[80%] to-black/[90%]"}/>
                        <div className={"px-4 absolute bottom-4"}>

                            <div className={"flex mb-1 items-center"}>
                                <label
                                    className={"text-label-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Mar 16, 2020
                                </label>
                                <div className={"bg-surface-container-high-light rounded-[8px]"}>

                                </div>
                            </div>
                            <h3 className={"font-bold text-title-medium text-on-surface-light dark:text-on-surface-dark "}>
                                Post Title
                            </h3>
                            <h4 className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    #lorem_ipsum
                                </a>
                                <a className={"mr-2 inline-flex text-body-medium text-primary-light dark:text-primary-dark"}>
                                    #lorem_ipsum
                                </a>
                            </h4>
                            <p className={"mt-2 mb-4 text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                            <Button type={"tonal"}>
                                Read More
                            </Button>


                        </div>

                    </div>
                </div>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Inventory Cards
                </h2>
                <div className={"border grid grid-cols-12 border-outline-dark gap-4 rounded-[24px] px-6 py-6 mt-4"}>
                    <div
                        className={"col-span-4 w-full h-fit p-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
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
                        <div className={"flex justify-between"}>
                            <div
                                className={`w-fit h-[40px] items-center px-4 rounded-[12px] dark:bg-surface-container-high-dark bg-surface-container-light flex  gap-0`}>
                                <div className={` flex mr-2 items-center`}>
                                    <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                        Miles:
                                    </p>
                                    <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                        {100}k
                                    </p>
                                </div>
                                {<div className={` flex mr-2 `}>
                                    <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                        Interior:
                                    </p>
                                    <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                        Black
                                    </p>
                                </div>}
                                {<div className={"flex items-center"}>
                                    <p className={`text-label-small sm:text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                        Est. payment:
                                    </p>
                                    <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                        ${400} /mo
                                    </p>
                                </div>}

                            </div>
                            {/*<div className={"flex justify-end"}>*/}
                            {/*    <IconButton*/}
                            {/*        className={"w-10 h-10 !bg-surface-container-high-light dark:!bg-surface-container-high-dark"}>*/}
                            {/*        more_horiz*/}
                            {/*    </IconButton>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div
                        className={"col-span-4 w-full h-fit pt-8 px-4 pb-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                        <div className={" pb-4"}>
                            <div className={`flex-1 mb-8`}>
                                <Typography type={"h4"}
                                            className="!font-medium !text-headline-medium  text-on-surface-light dark:text-on-surface-dark ">
                                    Vehicle Name
                                </Typography>
                                <div className={"flex mt-1"}>
                                    <div className={` flex mr-2 items-center`}>
                                        <p className={`text-body-large sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Miles:
                                        </p>
                                        <p className={`text-body-large sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                            {100}k
                                        </p>
                                    </div>
                                    {<div className={` flex mr-2 `}>
                                        <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Interior:
                                        </p>
                                        <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                            Black
                                        </p>
                                    </div>}
                                    {<div className={"flex items-center"}>
                                        <p className={`text-body-large sm:text-body-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Est. payment:
                                        </p>
                                        <p className={`text-body-large sm:text-body-large  text-on-surface-light dark:text-on-surface-dark`}>
                                            ${400} /mo
                                        </p>
                                    </div>}

                                </div>
                            </div>
                            <div className={"rounded-full w-full"}>

                                <Image quality={100} objectFit={"cover"} layout={'responsive'} width={1920}
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

                    <div
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
                                <div className={" text-center mt-1"}>
                                    <div className={` inline-flex mr-2 items-center`}>
                                        <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Miles:
                                        </p>
                                        <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                            {100}k
                                        </p>
                                    </div>
                                    {<div className={` inline-flex mr-2 `}>
                                        <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Interior:
                                        </p>
                                        <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
                                            Black
                                        </p>
                                    </div>}
                                    {<div className={"inline-flex items-center"}>
                                        <p className={`text-label-large font-normal sm:text-label-large mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                            Est. payment:
                                        </p>
                                        <p className={`text-label-large font-normal sm:text-label-large  text-on-surface-light dark:text-on-surface-dark`}>
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


                    </div>
                    <div
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



                    </div>

                    <div
                        className={"col-span-4 w-full h-fit px-4 py-4  pb-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                        <div className={"grid grid-cols-2 gap-2 grid-rows-2"}>
                            <div className={"col-span-1 relative row-span-2 rounded-[24px] w-full"}>

                                <Image quality={100} objectFit={"cover"} layout={'fill'} width={1920}
                                       height={1080}
                                       className="rounded-[24px]"
                                       src={"/bg.webp"} alt=""/>

                            </div>
                            <div className={"col-span-1 row-span-1 rounded-[12px] w-full"}>

                                <Image quality={100} objectFit={"cover"} layout={'responsive'} width={1920}
                                       height={1080}
                                       className="rounded-[12px]"
                                       src={"/bg.webp"} alt=""/>

                            </div>
                            <div className={"col-span-1 row-span-1 rounded-[12px] w-full"}>

                                <Image quality={100} objectFit={"cover"} layout={'responsive'} width={1920}
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
                    </div>
                    <div
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


                    </div>

                </div>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Slider
                </h2>
                <div className={"border grid grid-cols-3 border-outline-dark gap-4 rounded-[24px] px-6 py-6 mt-4"}>

                </div>

                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Hero Section
                </h2>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    CTA Section
                </h2>


                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Feature Section
                </h2>
                <div className={"border grid grid-cols-3 border-outline-dark gap-4 rounded-[24px] px-6 py-6 mt-4"}>
                    <dl>

                        <div
                            className="relative group flex rounded-[32px] hover:rounded-2xl transition-all duration-300 ease-in-out dark:hover:bg-surface-container-highest-dark hover:bg-surface-container-highest-light bg-surface-container-light dark:bg-surface-container-dark py-4 px-8">

                            <dt>
                                <h6 className="mt-4 text-primary-light dark:text-primary-dark mb-2 text-2xl leading-[40px] font-bold"> Lorem
                                    Ipsum</h6>
                                <div className="mb-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl
                                    nisi

                                </div>
                            </dt>

                            <div
                                className="h-12 w-12 mt-1 mr-1 flex justify-center items-center group-hover:text-secondary-light group-hover:dark:text-secondary-dark text-surface-variant-light dark:text-surface-variant-dark">
                                <svg width="40px" height="40px" viewBox="0 0 40 40"
                                     fill="none" xmlns="http://www.w3.org/2000/svg" className="clover">
                                    <path
                                        d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
                                        fill="currentColor"></path>
                                </svg>
                                <Icon
                                    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark group-hover:text-on-secondary-light group-hover:dark:text-on-secondary-dark w-6 h-6 absolute group-hover:scale-110 transition duration-300"}>
                                    person
                                </Icon>
                            </div>

                        </div>


                    </dl>
                    <dl className={"flex"}>
                        <Icon className={"text-primary-light dark:text-primary-dark mr-4"}>
                            person
                        </Icon>
                        <div>
                            <h3 className={"font-bold mb-1 text-on-surface-light dark:text-on-surface-dark"}>
                                Lorem Ipsum
                            </h3>
                            <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                        </div>
                    </dl>
                    <dl>
                        <div
                            className={"flex items-center justify-center rounded-[8px] h-[48px] w-[48px] bg-primary-light dark:bg-primary-dark"}>
                            <Icon className={"text-on-primary-light dark:text-on-primary-dark"}>
                                person
                            </Icon>
                        </div>
                        <div className={"mt-3"}>
                            <h3 className={"font-bold mb-1 text-on-surface-light dark:text-on-surface-dark"}>
                                Lorem Ipsum
                            </h3>
                            <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                        </div>
                    </dl>

                </div>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Form
                </h2>
                <div className={"border grid grid-cols-12 border-outline-dark gap-4 rounded-[24px] px-6 py-6 mt-4"}>
                    <div className={"col-span-4"}>
                        <TextField label={"Sample"}/>
                    </div>
                    <div className={"col-span-3"}>
                        <label className={"text-on-surface-light dark:text-on-surface-dark block mb-1 px-1"}>sample : </label>
                      <input placeholder={"sample"} className={"w-full border-0 outline-0 placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark dark:text-on-surface-dark text-on-surface-light bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[8px] py-2"}/>
                    </div>
                    <div className={"col-span-5 flex space-x-4 "}>
                        <div className={"flex items-center justify-center w-[150px] h-[150px] bg-secondary-container-light dark:bg-secondary-container-dark rounded-[14px]"}>
                            <Icon size={40} className={"text-[40px] text-on-secondary-container-light dark:text-on-secondary-container-dark"}>
                               upload
                            </Icon>
                        </div>
                        <div className={"flex-1"}>
                            <h4 className={"font-bold text-title-large text-on-surface-light dark:text-on-surface-dark"}>
                            Upload Your Image
                            </h4>
                            <p className={"text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                        </div>

                    </div>
                    <div className={"col-span-4"}>
                        <TextArea label={"Text Area"}/>
                    </div>
                </div>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Blog Page
                </h2>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Inventory Page
                </h2>
                <h2 className={"mt-8 text-on-surface-dark text-title-small"}>
                    Inventory Card
                </h2>
            </div>
        </div>
    )
}
