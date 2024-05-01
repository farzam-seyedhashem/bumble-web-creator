'use client'
import DropContainer from "@admin/page-builder/DropContainer";
import ComponentGenerator from "@admin/page-builder/ComponentGenerator";
import {useState, Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";
import IconButton from "@m3/icon_buttons/IconButton";
import TextField from "@m3/text_fields/TextField";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import Icon from "@m3/assets/icons/Icon";
import Switch from "@m3/switch/Switch";
import EditorDialog from "@page_builder/editor_components/EditorDialog";

export default function Container({item, idNumber, editItem}) {
    const [addedItems, setAddedItems] = useState(item.addedItems)
    const [isSelected, setIsSelected] = useState(false)
    let [className, setClassName] = useState(item?.className)
    let [renderStyles, setRenderStyles] = useState(item?.styles)
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
        console.log(items, "container", idNumber)
        setAddedItems(items)
        editItem(idNumber, "addedItems", items)
    }
    const editItemC = (number, key, value) => {
        let items = addedItems
        // items[number][key] = value;
        items[number] = {...items[number], [key]: value}
        setAddedItems(items)
        editItem(idNumber, "addedItems", items)
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
    let onChange = (name, value) => {
        let styles = {...renderStyles, [name]: value}
        setRenderStyles(styles)
        classGenerator(styles)
        editItem("styles", styles)
        editItem("className", className)
    }
    // let handleBoxChange = (value) => {
    //     setIsBox(value)
    //     editItem("isBox", value)
    // }
    return (
        <>
            <div style={renderStyles} className={`${item?.className} group/container relative ${isBox ? "" : "container mx-auto"}`}>
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
                    className={"absolute hidden group-hover/container:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                    <div
                        className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-secondary-container-dark bg-secondary-container-light"}>
                        <button onClick={() => setIsSelected(true)}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full dark:!bg-secondary-container-dark !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                edit
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full dark:!bg-secondary-container-dark !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                drag_indicator
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full dark:!bg-secondary-container-dark !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
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
                            <ComponentGenerator editItem={editItemC} idNumber={i} item={l}/>
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
                        <ColorPicker onChange={(value) => onChange("backgroundColor", value)}
                                     value={renderStyles.backgroundColor}/>

                    </div>

                    <div className={"grid grid-cols-12 gap-4 py-2"}>
                        <div className={"col-span-4 justify-between items-center"}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Rounded
                            </label>
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"borderRadius"} onChange={onChange}
                                                 defValue={renderStyles.borderRadius}/>
                            </div>
                        </div>
                        <div className={"col-span-4 justify-between items-center"}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Width
                            </label>
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"width"} onChange={onChange}
                                                 defValue={renderStyles.width}/>
                            </div>
                        </div>
                        <div className={"col-span-4 justify-between items-center"}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Height
                            </label>
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"height"} onChange={onChange}
                                                 defValue={renderStyles.height}/>
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
                                                     defValue={renderStyles.paddingTop}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Top
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"paddingRight"} onChange={onChange}
                                                     defValue={renderStyles.paddingRight}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Right
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"paddingBottom"} onChange={onChange}
                                                     defValue={renderStyles.paddingBottom}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Bottom
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"paddingLeft"} onChange={onChange}
                                                     defValue={renderStyles.paddingLeft}/>
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
                                                     defValue={renderStyles.marginTop}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Top
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"marginRight"} onChange={onChange}
                                                     defValue={renderStyles.marginRight}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Right
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"marginBottom"} onChange={onChange}
                                                     defValue={renderStyles.marginBottom}/>
                                </div>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Bottom
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <div>
                                    <TextFieldEditor id={"marginLeft"} onChange={onChange}
                                                     defValue={renderStyles.marginLeft}/>
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