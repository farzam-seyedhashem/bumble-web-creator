import {useState} from "react";
import Typography from "@m3/assets/typography/Typography";
import Image from "next/legacy/image";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";

export default function InventoryComponent({item, editItem}) {
    const [gridNumber, setGridNumber] = useState(item.options.gridNumber)
    const [numberOfBlog, setNumberOfBlog] = useState(item.options.numberOfBlog)
    const [inventoryInfoSelected, setInventoryInfoSelected] = useState(["miles", "interior", "est"])

    const [inventoryCard, setInventoryCard] = useState({
        showReadMoreButton: true,
        showInventoryInfo: true,
        buttonType: 0,
        titleType: "h3",
        readMore: true,
        showVehicleInfo:true,

    });
    const [cardShape, setCardShape] = useState(item.cardShape)
    let [isSelected, setIsSelected] = useState(false)

    return (
        <div className={`relative group/blog grid grid-cols-${gridNumber} gap-4`}>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((item,index)=>item<numberOfBlog&&
                    // eslint-disable-next-line react/jsx-key
            <InventoryCard inventoryInfoSelected={inventoryInfoSelected} inventoryCard={inventoryCard} type={0}/>
            )}
            <div
                className={"absolute hidden group-hover/blog:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                <div
                    className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-tertiary-container-dark bg-tertiary-container-light"}>
                    <button onClick={() => setIsSelected(true)}
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light "}>
                        <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                            edit
                        </Icon>
                    </button>
                    <button
                        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light "}>
                        <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                            drag_indicator
                        </Icon>
                    </button>
                    <button
                        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light "}>
                        <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
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
                                className={`${m === gridNumber ? "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light dark:text-on-surface-variant-dark"} h-[40px] cursor-pointer w-full flex justify-center items-center text-label-large rounded-full`}
                                key={index} onClick={() => setGridNumber(m)}>
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
                                className={`${m === numberOfBlog ? "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light dark:text-on-surface-variant-dark"} h-[40px] cursor-pointer w-full flex justify-center items-center text-label-large rounded-full`}
                                key={index} onClick={() => setNumberOfBlog(m)}>
                                {m}
                            </div>)}
                        </div>
                    </div>
                </div>
            </EditorDialog>
        </div>
    )
}