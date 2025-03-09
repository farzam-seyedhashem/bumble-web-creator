'use client'
import {useState} from "react";
import InventoryCardEditor from "@admin/admin-panel/pages/InventoryCardEditor";
import InventoryPageEditor from "@admin/admin-panel/pages/InventoryPageEditor";

export default function InventoryEditor({inventorySetting,siteSetting}) {
    const [selected, setSelected] = useState("inventoryCardEditor")
    const {color} = siteSetting
    return (
        <>
            {selected === "inventoryCardEditor" && <InventoryCardEditor inventorySetting={inventorySetting} color={color}/>}
        </>
    )
}