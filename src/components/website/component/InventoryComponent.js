import {useState,useEffect} from "react";
import Typography from "@m3/assets/typography/Typography";
import Image from "next/legacy/image";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";

export default function InventoryComponent({isDesktop,item, editItem,removeItemFunc,dragFunc}) {
    // const [gridNumber, setGridNumber] = useState(item.options.gridNumber)
    // const [numberOfBlog, setNumberOfBlog] = useState(item.options.numberOfBlog)
    const [inventoryInfoSelected, setInventoryInfoSelected] = useState(["miles", "interior", "est"])
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
    const [inventoryCard, setInventoryCard] = useState({
        showReadMoreButton: true,
        showInventoryInfo: true,
        buttonType: 0,
        titleType: "h3",
        readMore: true,
        showVehicleInfo: true,
        cardColor:"#fafafa",
        titleColor:"#212121",
        priceColor:"#28a348",
        priceBgColor:"#ededed",
        inventoryInfoColor:"#212121",
        inventoryInfoBgColor:"#fafafa",
        inventoryBgInfoColor:"#f2f2f2",
        buttonColor:"#ffffff",
        buttonBgColor:"#212121",

    });
    const [cardShape, setCardShape] = useState(item.cardShape)
    let [isSelected, setIsSelected] = useState(false)

    return (
        <div className={`relative group/blog grid grid-cols-${options.gridNumber} gap-4`}>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((item,index)=>item<options.numberOfBlog&&
                    // eslint-disable-next-line react/jsx-key
            <InventoryCard inventoryInfoSelected={inventoryInfoSelected} inventoryCard={inventoryCard} type={0}/>
            )}
            <div
                className={"absolute hidden group-hover/blog:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                <div
                    className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-tertiary-container-dark bg-tertiary-container-light"}>
                    <button onClick={() => setIsSelected(true)}
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark"}>
                        <Icon size={16}
                              className={"dark:!text-on-tertiary-container-dark !text-on-tertiary-container-light text-[20px]"}>
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
            <EditorDialog isOpen={isSelected} setIsOpen={setIsSelected}>
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
                                key={index} onClick={() => handleOptionChange("gridNumber",m)}>
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