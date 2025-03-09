'use client'
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import {useState} from "react";

export default function Column({item,idNumber,editItem}) {
    const [addedItems,setAddedItems] = useState(item.addedItems)
    // useEffect(() => {
    // }, []);
    const handleAddedItemsToItem = (component, number) => {
        if (component.idType === "container" || component.idType === "grid"){
            return alert("You can not add container or grid in grid")
        }
        let items = addedItems
        if (number===0){
            items = [
                component,
                ...items
            ]
        } else {
            items = [
                ...addedItems.slice(0, number),
                component,
                ...addedItems.slice(number)
            ]
        }
        setAddedItems(items)
        editItem(idNumber,"addedItems",items)
        // editItem(idNumber,"addedItems",items)
    }
    const editItemC =  (number,key,value) => {
        let items = addedItems
        // items[number][key] = value;
        items[number] = {...items[number],[key]:value}
        setAddedItems(items)
        editItem(idNumber,"addedItems",items)
        // editItem(idNumber,"addedItems",items)
    }
    return (
        <div className={item?.widthNumber ?item.uniqueId + " " + `col-span-${item.widthNumber}`:item.uniqueId + " " +  "" + " " + item?.className}>
            {addedItems.map((l, i) =>
                <div key={item.uniqueId+i+"-g"} className={"relative group"}>
                    <DropContainer idNumber={i} handleAddedItems={handleAddedItemsToItem}/>
                    <ComponentGenerator idNumber={i} editItem={editItemC} item={l}/>
                </div>
            )}
            <div className={"relative"}>
                <DropContainer key={item.uniqueId+"-g"} idNumber={addedItems.length}
                               handleAddedItems={handleAddedItemsToItem} firstItem={addedItems.length===0}/>
            </div>
        </div>
    )
}