'use client'
import IconButton from "@m3/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";
import ComponentDrawer from "@admin/page-builder/ComponentDrawer";
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import Link from "next/link";

export default function PageBuilder({siteSetting,data, slug}) {
    const devices = [
        {label: "Mobile", icon: "smartphone", id: 0},
        {label: "Desktop", icon: "desktop_windows", id: 1}
    ]
    const [device, setDevice] = useState(1)
    const [isComponentDrawerOpen, setIsComponentDrawerOpen] = useState(false)
    const [addedItems, setAddedItems] = useState(JSON.parse(data.content) || [])
    const [className, setClassName] = useState({})
    console.log(data)
    const handleAddedItems = (component, number) => {
        let items = [...addedItems]
        console.log(addedItems)
        // console.log("main component",component)
        if (number === 0) {
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
    const editItem = (number, key, value, uniqueId) => {
        if (key === "className") {
            let newClassName = className
            newClassName[uniqueId] = value
            setClassName(newClassName)
        }
        console.log(className, key, number, value)
        let items = addedItems
        items[number] = {...items[number], [key]: value}
        setAddedItems(items)
    }
    const removeItemFunc = (number) => {
        let items = [...addedItems]
        items.splice(number, 1)
        setAddedItems(items)
    }

    function drag(ev, id) {

        // console.log(addedItems[idNumber])
        if (typeof id !== undefined && typeof id === "number") {
            let item = addedItems[id]
            console.log(item, id)
            ev.dataTransfer.setData("text", item.uid);
            ev.dataTransfer.setData("item", JSON.stringify(item));
            // removeItemFunc()

            // if (cb){
            //     cb()
            // }
        } else {

            ev.dataTransfer.setData("text", ev.target.id);
        }
        // ev.dataTransfer.setData("item", null);
    }

    const updatePage = () => {
        // fetch("http://localhost:3000/api/update-class",{method:"POST",body: {classes: newClasses}}).then(res=>{console.log(res)})
        console.log(className)
        const sendData = {
            content: JSON.stringify(addedItems),
            classes: Object.values(className).toString().replaceAll(",", ""),
        }
        try {
            fetch(`/api/page/${slug}`, {
                method: 'PUT',
                body: JSON.stringify(sendData)
            }).then(response =>
                    console.log(response)
                // setIsOpen(true)
            ).then(data => alert(data));
        } catch (error) {
            alert('An error occurred!');
        }
    }
    return (
        <div className={"flex  bg-surface-container-low-light dark:bg-surface-container-low-dark"}>

            <div
                className={"hidden  md:block md:w-[360px] sticky top-0 h-screen  bg-surface-light dark:bg-surface-dark "}>
                <div
                    className={"flex items-center px-4 relative justify-center top-0 left-0 w-full h-[64px] bg-surface-light dark:bg-surface-dark"}>
                    <Link href={"/admin/pages/page"} className={"absolute left-4 top-1/2  transform -translate-y-1/2"}>
                        <IconButton>
                            arrow_back
                        </IconButton>
                    </Link>
                    <h2 className={"text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark"}>
                        Page Components
                    </h2>
                </div>
                <ComponentDrawer dragFunc={drag} isOpen={isComponentDrawerOpen} setIsOpen={setIsComponentDrawerOpen}/>

            </div>
            <div
                className={"fixed z-999 px-4 items-center justify-between grid grid-cols-12 top-0 right-0 w-full md:w-[calc(100%_-_360px)] h-[64px] bg-surface-light dark:bg-surface-dark"}>
                <div className={"hidden md:block lg:col-span-4 xl:col-span-5"}/>
                <div
                    className={"md:flex hidden items-center lg:col-span-2 xl:col-span-2 text-title-medium text-on-surface-light dark:text-on-surface-dark font-medium"}>
                    {data.title + " Page"}
                    {/*<Icon>*/}
                    {/*    arrow_drop_down*/}
                    {/*</Icon>*/}
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
                    <Button onClick={() => {
                        updatePage()
                    }} icon={"publish"} type={"filled"}>
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
                className={`px-4 pb-4 pt-8 transition-all duration-300 mx-auto ease-in-out mt-[64px] w-full ${device === 0 ? "md:max-w-[490px] w-[490px] min-w-[490px]" : "md:w-[calc(100%_-_360px)] "} `}>
                <div className={"z-10 rounded-[16px] min-h-screen bg-white"}>
                    {/*<div className={"bg-white h-[4px] focus-within:h-[40px]"} id="div1" onDrop={(e) => drop(e)}*/}
                    {/*     onDragOver={(e) => allowDrop(e)}></div>*/}
                    {/*<div className={"dark:text-[#fff]"}/>*/}
                    {/*<ComponentGenerator*/}
                    {/*    item={{id: "title", value: "text", className: "font-bold text-[40px] text-red-600"}}/>*/}

                    {addedItems.map((item, i) =>
                        <div key={item.uniqueId + i + "-top"} className={"relative  group"}>
                            <DropContainer idNumber={i} handleAddedItems={handleAddedItems}/>
                            <ComponentGenerator siteSetting={siteSetting} dragFunc={drag} removeItemFunc={removeItemFunc} isDesktop={device === 1}
                                                editItem={editItem} idNumber={i}
                                                item={item}/>
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
