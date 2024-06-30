'use client'
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import {useState, Fragment, useEffect} from "react";
import {Dialog, Transition} from "@headlessui/react";
import IconButton from "@m3/icon_buttons/IconButton";
import TextField from "@m3/text_fields/TextField";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import Icon from "@m3/assets/icons/Icon";
import Switch from "@m3/switch/Switch";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {StyleToClass} from "@frontend/_helper/StyleToClass";

export default function Container({siteSetting,item,isDesktop, editItem,removeItemFunc,dragFunc}) {
    const [addedItems, setAddedItems] = useState(item.addedItems)
    const [isSelected, setIsSelected] = useState(false)
    let [className, setClassName] = useState({})
    let [globalRenderStyles, setGlobalRenderStyles] = useState(item?.globalStyles)
    let [deviceStyle, setDeviceStyle] = useState(isDesktop ? item?.desktopStyles : item?.mobileStyles)
    useEffect(() => {
        setAddedItems(item.addedItems)
    },[item])
    useEffect(() => {
        setDeviceStyle(isDesktop ? item?.desktopStyles : item?.mobileStyles)
    }, [isDesktop]);
    useEffect(() => {

        const desktopClass = StyleToClass(deviceStyle, isDesktop, item.uniqueId)
        const globalClass = StyleToClass(globalRenderStyles, false, item.uniqueId)
        const classNames = globalClass + desktopClass
        editItem("className", classNames,item.uniqueId)

        // fs.writeFileSync()
    }, [deviceStyle, globalRenderStyles])
    let [isBox, setIsBox] = useState(item?.isBox)
    const handleAddedItems = (component, number) => {
        if (component.id === "container") {
            return alert("You can not add container in another container")
        }
        let items = addedItems
        if (number === 0) {
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
        editItem("addedItems", items)
    }
    const editItemC = (number, key, value,unique) => {
        if (key === "className") {
            let newClassName =  className
            newClassName[unique] = value
            setClassName(newClassName)
            editItem("className", Object.values(newClassName).toString().replaceAll(",",""),unique)
            console.log("-------",Object.values(newClassName).toString())
        }
        let items = addedItems
        // items[number][key] = value;
        items[number] = {...items[number], [key]: value}
        setAddedItems(items)
        editItem("addedItems", items)
    }
    let classGenerator = (newStyles) => {
        let classes = ""
        newStyles.fontWeight ? classes += `font-[${newStyles.fontWeight}] ` : ""
        newStyles.fontSize ? classes += `text-${newStyles.fontSize}px ` : ""
        newStyles.lineHeight ? classes += `text-${newStyles.lineHeight}px ` : ""
        newStyles.paddingTop ? classes += `text-${newStyles.paddingTop}px ` : ""
        newStyles.paddingBottom ? classes += `text-${newStyles.paddingBottom}px ` : ""
        newStyles.paddingLeft ? classes += `text-${newStyles.paddingLeft}px ` : ""
        newStyles.paddingRight ? classes += `text-${newStyles.paddingRight}px ` : ""
        newStyles.color ? classes += `text-[${newStyles.color}] ` : ""
        // newStyles.dark.color ? classes += `dark:text-[${styles.dark.color}] ` : ""
        // newStyles.general.fontSize ? classes += `text-${styles.general.fontSize}` : ""
        setClassName(classes)
        console.log(classes)
    }
    let onChangeGlobal = (name, value) => {
        let styles = {...globalRenderStyles, [name]: value}
        setGlobalRenderStyles(styles)
        editItem("globalStyles", styles)
    }
    let onChange = (name, value) => {

        let styles = {...deviceStyle, [name]: value}
        setDeviceStyle(styles)
        editItem(isDesktop ? "desktopStyles" : "mobileStyles", styles)


    }
    const removeItemFuncM =  (number) => {
        let items = [...addedItems]
        items.splice(number,1)
        setAddedItems(items)
        editItem("addedItems", items)
    }
    function drag(ev,id) {

        // console.log(addedItems[idNumber])
        if(typeof id !== undefined && typeof id === "number"){
            let item = addedItems[id]
            console.log(item,id)
            ev.dataTransfer.setData("text", item.uid);
            ev.dataTransfer.setData("item", JSON.stringify(item));
            // removeItemFunc()

            // if (cb){
            //     cb()
            // }
        }else {

            ev.dataTransfer.setData("text", ev.target.id);
        }
        // ev.dataTransfer.setData("item", null);
    }
    // let handleBoxChange = (value) => {
    //     setIsBox(value)
    //     editItem("isBox", value)
    // }
    return (
        <>
            <div style={{...deviceStyle,...globalRenderStyles}} className={`${item?.className} group/container relative ${isBox ? "" : "container mx-auto"}`}>
                {/*{addedItems.length!==0 && <div onClick={() => setIsSelected(true)}*/}
                {/*      className={"hidden group-hover:block absolute top-1/2 -translate-y-1/2 transform right-4 "}>*/}
                {/*    <button*/}
                {/*        className={"flex items-center h-[32px] w-[32px] justify-center rounded-full  !bg-tertiary-container-light "}>*/}
                {/*        <Icon size={16} className={"!text-on-tertiary-container-light text-[24px]"}>*/}
                {/*            edit*/}
                {/*        </Icon>*/}
                {/*    </button>*/}
                {/*</div>}*/}
                <div
                    className={"absolute  z-[888] hidden group-hover/container:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                    <div
                        className={"px-3 space-x-3 flex rounded-b-[8px] dark:bg-secondary-container-dark bg-secondary-container-light"}>
                        <button onClick={() => setIsSelected(true)}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full dark:!bg-secondary-container-dark !bg-secondary-container-light "}>
                            <Icon size={16}
                                  className={"!text-on-secondary-container-light dark:!text-on-secondary-container-dark text-[20px]"}>
                                edit
                            </Icon>
                        </button>
                        <button onDragEnterCapture={(event) => {

                            removeItemFunc()
                        }} onDragStart={(e) => dragFunc(e)} draggable={true}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light dark:!bg-secondary-container-dark "}>
                            <Icon size={16}
                                  className={"!text-on-secondary-container-light dark:!text-on-secondary-container-dark text-[20px]"}>
                                drag_indicator
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light dark:!bg-secondary-container-dark "}>
                            <Icon onClick={removeItemFunc} size={16}
                                  className={"!text-on-secondary-container-light dark:!text-on-secondary-container-dark text-[20px]"}>
                                delete
                            </Icon>
                        </button>
                    </div>
                </div>
                <div onClick={() => setIsSelected(true)} className={"z-10 absolute inset-0"}>

                </div>
                <div className={"w-full z-20"}>
                    {addedItems.map((l, i) =>
                        <div key={item.uniqueId + i + "-container"} className={"relative group"}>
                            <DropContainer idNumber={i} selected={addedItems}
                                           handleAddedItems={handleAddedItems}/>
                            <ComponentGenerator siteSetting={siteSetting} dragFunc={drag} removeItemFunc={removeItemFuncM} isDesktop={isDesktop}
                                                editItem={editItemC} idNumber={i} item={l}/>
                        </div>
                    )}
                    <div className={"relative"}>
                        <DropContainer idNumber={addedItems.length} selected={addedItems}
                                       handleAddedItems={handleAddedItems} key={item.uniqueId + "-container"}
                                       firstItem={addedItems.length === 0}/>
                    </div>
                </div>
            </div>
            <EditorDialog isOpen={isSelected} setIsOpen={setIsSelected}>
                <div
                    className="flex   flex-col gap-y-5 overflow-y-auto  px-6 ring-1 ring-white/10">

                    <div className={"flex justify-between items-center pt-4 pb-2"}>
                        <label
                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Background color
                        </label>
                        <ColorPicker onChange={(value) => onChangeGlobal("backgroundColor", value)}
                                     value={globalRenderStyles.backgroundColor}/>

                    </div>

                    <div className={"grid grid-cols-12 gap-4 py-2"}>
                        <div className={"col-span-4 justify-between items-center"}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Rounded
                            </label>
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"borderRadius"} onChange={onChangeGlobal}
                                                 defValue={globalRenderStyles.borderRadius}/>
                            </div>
                        </div>
                        <div className={"col-span-4 justify-between items-center"}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Width
                            </label>
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"width"} onChange={onChange}
                                                 defValue={deviceStyle.width}/>
                            </div>
                        </div>
                        <div className={"col-span-4 justify-between items-center"}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Height
                            </label>
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"height"} onChange={onChange}
                                                 defValue={deviceStyle.height}/>
                            </div>
                        </div>
                    </div>
                    <div className={"px-4 flex justify-between mt-4"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Is Box
                        </label>
                        <Switch setIsCheck={(value) => {
                            setIsBox(value)
                            editItem("isBox", value)
                        }}
                                isCheck={isBox}/>
                    </div>
                    <div className={"block items-center justify-between py-2"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Padding
                        </label>
                        <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"paddingTop"} onChange={onChange}
                                                     defValue={deviceStyle.paddingTop}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Top
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"paddingRight"} onChange={onChange}
                                                     defValue={deviceStyle.paddingRight}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Right
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"paddingBottom"} onChange={onChange}
                                                     defValue={deviceStyle.paddingBottom}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Bottom
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"paddingLeft"} onChange={onChange}
                                                     defValue={deviceStyle.paddingLeft}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"block items-center justify-between py-2"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Margin
                        </label>
                        <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"marginTop"} onChange={onChange}
                                                     defValue={deviceStyle.marginTop}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Top
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"marginRight"} onChange={onChange}
                                                     defValue={deviceStyle.marginRight}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Right
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"marginBottom"} onChange={onChange}
                                                     defValue={deviceStyle.marginBottom}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Bottom
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"marginLeft"} onChange={onChange}
                                                     defValue={deviceStyle.marginLeft}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Left
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </EditorDialog>
        </>
    )
}