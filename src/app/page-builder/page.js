'use client'
import IconButton from "@m3/icon_buttons/IconButton";
import FAB from "@m3/floating_action_buttons/FAB";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";
import ComponentDrawer from "@admin/page-builder/ComponentDrawer";
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import AddedComponentListItem from "@admin/page-builder/AddedComponentListItem";
import IconPicker from "@page_builder/editor_components/IconPicker";

export default function Home() {
    const devices = [
        {label: "Mobile", icon: "smartphone", id: 0},
        {label: "Desktop", icon: "desktop_windows", id: 1}
    ]
    const [device, setDevice] = useState(1)
    const [isComponentDrawerOpen, setIsComponentDrawerOpen] = useState(false)
    const [addedItems, setAddedItems] = useState([])
    const [componentEditor,setComponentEditor] = useState(false)
    const handleAddedItems = (component, number) => {
        let items = [...addedItems]
        // console.log("main component",component)
        if (number===0){
            items = [
                component,
                ...items
            ]
            setAddedItems(items)
        } else {
            setAddedItems([
                ...items.slice(0, number),
                component,
                ...items.slice(number)
            ])
        }
        console.log(items)
    }
    const editItem =  (number, key, value) => {
        let items = addedItems
        // items[number][key] = value;
        items[number] = {...items[number],[key]:value}
        setAddedItems(items)
        console.log(items)
        // console.log('itemslist',items)
        // console.log(addedItems)

        // console.log(item)
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        // ev.dataTransfer.setData("item", null);
    }
    // function renderAddedItems (addedItems) {
    //     let items = ""
    //     {addedItems.map((item, i) =>
    //         items += `<li onClick={()=>setSelectedItem(i)} key={i}
    //             className={"group relative justify-between py-2 px-4 h-[56px] text-body-large flex items-center text-on-surface-light dark:text-on-surface-dark bg-surface-light dark:bg-surface-dark"}>
    //             {item.id}
    //             <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
    //                 chevron_right
    //             </Icon>
    //             <div
    //                 className={"hidden bg-on-surface-light/[8%] dark:bg-on-surface-dark/[8%] group-hover:block top-0 left-0 w-full absolute h-full "}/>
    //         </li>`
    //     )}
    //
    //
    // }

    return (
        <div className={"flex  bg-surface-container-low-light dark:bg-surface-container-low-dark"}>

            <div
                className={"hidden  md:block md:w-[360px] sticky top-0 h-screen  bg-surface-light dark:bg-surface-dark "}>
                <div
                    className={"flex items-center px-4 relative justify-center top-0 left-0 w-full h-[64px] bg-surface-light dark:bg-surface-dark"}>
                    <div className={"absolute left-4 top-1/2  transform -translate-y-1/2"}>
                        <IconButton>
                            arrow_back
                        </IconButton>
                    </div>
                    <h2 className={"text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark"}>
                        Page Components
                    </h2>
                </div>
                {/*<div>*/}
                {/*    <ul>*/}
                {/*        /!*{renderAddedItems(addedItems)}*!/*/}
                {/*        {addedItems.map((item, i) =>*/}
                {/*          <AddedComponentListItem key={i} item={item} number={i}/>*/}
                {/*        )}*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <ComponentDrawer dragFunc={drag} isOpen={isComponentDrawerOpen} setIsOpen={setIsComponentDrawerOpen}/>

            </div>
            <div
                className={"fixed z-999 px-4 items-center justify-between grid grid-cols-12 top-0 right-0 w-full md:w-[calc(100%_-_360px)] h-[64px] bg-surface-light dark:bg-surface-dark"}>
                <div className={"hidden md:block lg:col-span-4 xl:col-span-5"}/>
                <div
                    className={"md:flex hidden items-center lg:col-span-2 xl:col-span-2 text-title-medium text-on-surface-light dark:text-on-surface-dark font-medium"}>
                    Home Page
                    <Icon>
                        arrow_drop_down
                    </Icon>
                </div>

                <div className={"col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-5 flex items-center justify-end"}>
                    <div className={"md:flex hidden items-center h-[64px]"}>
                        {devices.map((item, i) =>
                            <button
                                className={`${item.id === device ? "dark:active:bg-primary-dark/[10%] active:bg-primary-light/[10%] dark:focus:bg-primary-dark/[10%] focus:bg-primary-light/[10%] dark:hover:bg-primary-dark/[8%] hover:bg-primary-light/[8%]" : "dark:active:bg-on-surface-dark/[10%] active:bg-on-surface-light/[10%] dark:focus:bg-on-surface-dark/[10%] focus:bg-on-surface-light/[10%] dark:hover:bg-on-surface-dark/[8%] hover:bg-on-surface-light/[8%]"} group w-[100px] relative h-full`}
                                key={i} onClick={() => setDevice(item.id)}>
                                <div className={"relative w-fit mx-auto h-full flex items-center"}>
                                    <div>
                                        <Icon
                                            className={`${item.id === device ? "text-primary-light dark:text-primary-dark" : "group-hover:text-on-surface-light dark:group-hover:text-on-surface-dark text-on-surface-variant-light dark:text-on-surface-variant-dark"} mx-auto w-1/2 block dark:text-on-surface-variant-dark`}>
                                            {item.icon}
                                        </Icon>
                                        <label
                                            className={`${item.id === device ? "text-primary-light dark:text-primary-dark" : "group-hover:text-on-surface-light dark:group-hover:text-on-surface-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark"} w-1/2 font-medium text-title-small`}>
                                            {item.label}
                                        </label>
                                    </div>
                                    {device === item.id && <div
                                        className={"absolute left-0  bottom-0 rounded-t-full h-[3px] w-full bg-primary-light dark:bg-primary-dark"}/>}
                                </div>
                            </button>
                        )}
                    </div>
                    <div
                        className={"md:block hidden h-[64px] mx-4 relative  w-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}>

                    </div>
                    <IconButton>
                        settings
                    </IconButton>
                    <Button type={"outlined"} className={"mx-2"}>
                        Draft
                    </Button>
                    <Button icon={"publish"} type={"filled"}>
                        Publish
                    </Button>
                </div>

            </div>
            {/*<FAB onClick={() => setIsComponentDrawerOpen(true)} className={"fixed bottom-4 left-4"} color={"primary"}*/}
            {/*     label={"Add New Component"} isExtended={true}>*/}
            {/*    add*/}
            {/*</FAB>*/}
            {/*<IconPicker/>*/}
            <div
                className={`px-4 pb-4 pt-8 transition-all duration-300 mx-auto ease-in-out mt-[64px] w-full ${device === 0 ? "md:max-w-[490px] w-full" : "md:w-[calc(100%_-_360px)] "} `}>
                <div className={"z-10 rounded-[16px] min-h-screen bg-white"}>
                    {/*<div className={"bg-white h-[4px] focus-within:h-[40px]"} id="div1" onDrop={(e) => drop(e)}*/}
                    {/*     onDragOver={(e) => allowDrop(e)}></div>*/}
                    {/*<div className={"dark:text-[#fff]"}/>*/}
                    {/*<ComponentGenerator*/}
                    {/*    item={{id: "title", value: "text", className: "font-bold text-[40px] text-red-600"}}/>*/}

                    {addedItems.map((item, i) =>
                        <div key={item.uniqueId + i + "-top"} className={"relative  group"}>
                            <DropContainer idNumber={i} handleAddedItems={handleAddedItems}/>
                            <ComponentGenerator setComponentEditor={setComponentEditor} editItem={editItem} idNumber={i} item={item}/>
                            {/*{(i!==addedItems.length-1)&&<DropContainer id={i} handleAddedItems={handleAddedItems}/>}*/}
                        </div>
                    )}

                    <div className={"relative"}>
                        <DropContainer idNumber={addedItems.length} selected={addedItems}
                                       handleAddedItems={handleAddedItems} key={"start"}
                                       firstItem={addedItems.length === 0}/>
                    </div>
                    {/*<pre style={{overflowWrap:"anywhere"}} className={"overflow-hidden !whitespace-nowrap  h-[800px]  w-[400px]"}>*/}

                    {/*    {JSON.stringify(addedItems)}*/}

                    {/*</pre>*/}
                    {/*<div className={"bg-red-600 h-40 w-40"} id="drag1" draggable={true} onDragStart={(e) => drag(e)}>*/}
                    {/*    flnf*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
