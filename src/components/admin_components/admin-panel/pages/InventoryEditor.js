'use client'
import {useState} from "react";
import InventoryCardEditor from "@admin/admin-panel/pages/InventoryCardEditor";

export default function InventoryEditor() {
    const [selected, setSelected] = useState("inventoryCardEditor")
    return (
        <>
            <div
                className={"flex justify-center items-center border-t border-outline-variant-light dark:border-outline-variant-dark h-[64px] bg-surface-container-light dark:bg-surface-container-dark"}>
                <div className={"flex *:text-title-small *:flex *:items-center *:h-full overflow-hidden *:justify-center *:font-medium *:px-6 items-center *:w-4/12 h-[48px] w-5/12 rounded-full  bg-surface-container-lowest-light "}>
                    <div onClick={()=>setSelected("inventoryCardEditor")} className={`!rounded-full ${selected==="inventoryCardEditor"?"!font-bold bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
                        Inventory Card
                    </div>
                    <div onClick={()=>setSelected("inventoryListPageEditor")} className={`!rounded-full ${selected==="inventoryListPageEditor"?"!font-bold bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
                        Inventory List Page
                    </div>
                    <div onClick={()=>setSelected("inventoryPageEditor")} className={`!rounded-full ${selected==="inventoryPageEditor"?"!font-bold bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
                        Inventory Page
                    </div>
                </div>
            </div>
            {selected === "inventoryCardEditor" && <InventoryCardEditor/>}
        </>
    )
}