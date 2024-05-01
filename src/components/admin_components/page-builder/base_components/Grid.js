'use client'
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import {useState} from "react";

export default function Container({item,id,editItem}) {
    const [addedItems,setAddedItems] = useState(item.addedItems)
    const handleAddedItemsToItem = async (component, number) => {
        await setAddedItems([
            ...addedItems.slice(0, number),
            component,
            ...addedItems.slice(number)
        ])
        editItem(id,"addedItems",addedItems)
    }
    const editItemC = async  (number,key,value) => {
        let items = addedItems
        items[number][key] = value;
        setAddedItems(items)
        // editItem(id,"addedItems",items)

    }
    return (
        <div className={item?.className}>
            {addedItems.map((l, i) =>
                <div key={id+i} className={"relative group"}>
                    <DropContainer id={i} selected={addedItems}
                                   handleAddedItems={handleAddedItemsToItem}/>
                    <ComponentGenerator editItem={editItemC} id={i} item={l}/>
                </div>
            )}
            <div className={"relative"}>
                <DropContainer id={addedItems.length} selected={addedItems}
                               handleAddedItems={handleAddedItemsToItem} key={'start'} firstItem={true}/>
            </div>
        </div>
    )
}