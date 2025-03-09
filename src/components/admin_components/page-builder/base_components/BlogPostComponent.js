import {useState,useEffect} from "react";
import Typography from "@m3/assets/typography/Typography";
import Image from "next/legacy/image";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";

export default function BlogPostComponent({editDialogOpenComponentId,setEditDialogOpenComponentId,isDesktop,item, editItem,removeItemFunc,dragFunc}) {

    // const [gridNumber, setGridNumber] = useState(isDesktop?item.desktopOptions.gridNumber:item.mobileOptions.gridNumber)
    // const [numberOfBlog, setNumberOfBlog] = useState(item.options.numberOfBlog)

    const [cardShape, setCardShape] = useState(item.cardShape)
    let [isSelected, setIsSelected] = useState(false)
    const [options,setOptions] = useState(isDesktop?{...item.globalOptions,...item.desktopOptions}:{...item.globalOptions,...item.mobileOptions})
    const [globalOptions,setGlobalOptions] = useState(item.globalOptions)
    const [deviceOptions,setDeviceOptions] = useState(isDesktop?item.desktopOptions:item.mobileOptions)
    useEffect(() => {
        setOptions(isDesktop?{...item.globalOptions,...item.desktopOptions}:{...item.globalOptions,...item.mobileOptions})
        setDeviceOptions(isDesktop?item.desktopOptions:item.mobileOptions)
    },[isDesktop])
    const handleOptionChange = (key, value) => {
        let newOptions = {...options,[key]:value}
        if (deviceOptions[key]) {
            setDeviceOptions({...deviceOptions,[key]:value})
            editItem(isDesktop?"desktopOptions":"mobileOptions",{...deviceOptions,[key]:value})
        }else{
            setGlobalOptions({...globalOptions,[key]:value})
            editItem("globalOptions",{...globalOptions,[key]:value})
        }
        setOptions(newOptions)

    }
    return (
        <div className={`relative group/blog grid grid-cols-${options.gridNumber} gap-4`}>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((item,index)=>item<options.numberOfBlog&&<div key={index}
                className={" w-full h-fit p-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
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
            </div>)}
            <div
                className={"absolute hidden group-hover/blog:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                <div
                    className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-tertiary-container-dark bg-tertiary-container-light"}>
                    <button onClick={() => setIsSelected(true)}
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
                        <Icon size={16}
                              className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
                            edit
                        </Icon>
                    </button>
                    <button onDragEnterCapture={() => {
                        removeItemFunc()
                    }} onDragStart={(e) => dragFunc(e)} draggable={true}
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
                        <Icon size={16}
                              className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
                            drag_indicator
                        </Icon>
                    </button>
                    <button
                        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
                        <Icon onClick={removeItemFunc} size={16}
                              className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
                            delete
                        </Icon>
                    </button>
                </div>
            </div>
            <EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false} setIsOpen={()=>setEditDialogOpenComponentId(null)}>
                <div>
                    <label
                        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Column Number
                    </label>
                    <div
                        className={"w-11/12 mt-2 rounded-full ml-auto bg-surface-variant-light dark:bg-surface-variant-dark"}>
                        <div className={"grid grid-cols-12 gap-1 h-[40px]"}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, index) => <div
                                className={`${m === options.gridNumber ? "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light dark:text-on-surface-variant-dark"} h-[40px] cursor-pointer w-full flex justify-center items-center text-label-large rounded-full`}
                                key={index} onClick={() => handleOptionChange("gridNumber", m)}>
                                {m}
                            </div>)}
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Number of Post
                    </label>
                    <div
                        className={"w-11/12 mt-2 rounded-full ml-auto bg-surface-variant-light dark:bg-surface-variant-dark"}>
                        <div className={"grid grid-cols-12 gap-1 h-[40px]"}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, index) => <div
                                className={`${m === options.numberOfBlog ? "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light dark:text-on-surface-variant-dark"} h-[40px] cursor-pointer w-full flex justify-center items-center text-label-large rounded-full`}
                                key={index} onClick={() => handleOptionChange("numberOfBlog",m)}>
                                {m}
                            </div>)}
                        </div>
                    </div>
                </div>
            </EditorDialog>
        </div>
    )
}