'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Dialog, Transition} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import IconPicker from "@page_builder/editor_components/IconPicker";

export default function IconComponent({editItem, item, key}) {
    let [isSelected, setIsSelected] = useState(false)
    let [value, setValue] = useState(item.value || "star")
    // const [styles, setStyles] = useState(item?.styles)
    let [className, setClassName] = useState(item?.className)
    let [renderStyles, setRenderStyles] = useState(item?.styles)
    let [isFill, setIsFill] = useState(item?.isFill)
    let [isIconPickerOpen, setIsIconPickerOpen] = useState(false)

    const valueChangeHandler = (value) => {
        setValue(value)
        editItem("value", value)
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
    let onIconSelect = (selectedIcon, isFilled) => {
        setValue(selectedIcon)
        setIsFill(isFilled)
        editItem("value", value)
        editItem("isFill", selectedIcon)
    }
    const changeTypeHandler = (type) => [
        setComponent(type),
        editItem("type", type)
    ]
    const checkPX = (value) => {
        return value.match("^\\d+$")
    }

    return (
        <>
            <Icon fill={isFill ? 1 : 0} weight={renderStyles.fontWeight} size={renderStyles.fontWeight} id={key}
                  className="relative group w-full" style={renderStyles}>
                {value}
                <div
                    className={"absolute hidden group-hover:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
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
            </Icon>
            <IconPicker onIconSelect={onIconSelect} setIsOpen={setIsIconPickerOpen} isOpen={isIconPickerOpen}/>
            <EditorDialog isOpen={isSelected} setIsOpen={setIsSelected}>


                <div className={"flex items-center justify-between pb-2"}>
                    <label
                        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Icon
                    </label>
                    <div onClick={() => setIsIconPickerOpen(true)}
                         className={"w-[40px] rounded-[8px] flex items-center justify-center h-[40px] bg-surface-container-highest-light dark:bg-surface-dark"}>
                        <Icon fill={isFill ? 1 : 0} weight={renderStyles.fontWeight} size={renderStyles.fontWeight}>
                            {value}
                        </Icon>
                    </div>
                </div>
                <div className={"flex justify-between items-center pt-4 pb-2"}>
                    <label
                        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Color
                    </label>
                    <ColorPicker onChange={(value) => onChange("color", value)}
                                 value={renderStyles.color}/>

                </div>
                <div className={"col-span-8 justify-between items-center "}>
                    <label
                        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Text Align
                    </label>
                    <div className={"mt-2 flex justify-end space-x-2"}>
                        <button onClick={(e) => onChange("textAlign", "left")}
                                className={`${renderStyles.textAlign === "left" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
                            <Icon className={"text-[24px]"}>
                                format_align_left
                            </Icon>
                        </button>
                        <button onClick={(e) => onChange("textAlign", "center")}
                                className={`${renderStyles.textAlign === "center" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
                            <Icon className={"text-[24px]"}>
                                format_align_center
                            </Icon>
                        </button>
                        <button onClick={(e) => onChange("textAlign", "right")}
                                className={`${renderStyles.textAlign === "right" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
                            <Icon className={"text-[24px]"}>
                                format_align_right
                            </Icon>
                        </button>
                    </div>
                </div>
                <div className={"grid grid-cols-12 gap-4 py-2"}>
                    <div className={"col-span-8 justify-between items-center "}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Font Weight
                        </label>
                        <div className={"w-full mt-2 justify-end"}>
                            <select onChange={(e) => onChange("fontWeight", e.target.value)}
                                    type={"text"}
                                    value={renderStyles.fontWeight}
                                    className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>
                                <option label={"Thin"} value={"100"}/>
                                <option label={"Extra Light"} value={"200"}/>
                                <option label={"Light"} value={"300"}/>
                                <option label={"Normal"} value={"400"}/>
                                <option label={"Medium"} value={"500"}/>
                                <option label={"Semi Bold"} value={"600"}/>
                                <option label={"Bold"} value={"700"}/>
                            </select>
                        </div>
                    </div>
                    <div className={"col-span-4 justify-between items-center"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Font Size
                        </label>
                        {/*<div className={"w-full relative mt-2 justify-end"}>*/}
                        {/*    <input*/}
                        {/*        onChange={(e) => checkPX(e.target.value) ? onChange("fontSize", e.target.value + "px") : ""}*/}
                        {/*        type={"text"}*/}
                        {/*        value={renderStyles.fontSize.replace("px", "")}*/}
                        {/*        className={"text-center text-body-large pr-8 bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>*/}
                        {/*    <label*/}
                        {/*        className={"font-medium text-label-large text-on-surface-variant-dark absolute top-1/2 transform -translate-y-1/2 right-3"}>*/}
                        {/*        PX*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                        <div className={"mt-2"}>
                            <TextFieldEditor id={"fontSize"} onChange={onChange}
                                             defValue={renderStyles.fontSize}/>
                        </div>
                    </div>
                </div>

                {/*<div className={"flex justify-between items-center py-2"}>*/}
                {/*    <label*/}
                {/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                {/*        Line Height*/}
                {/*    </label>*/}
                {/*    <div className={"flex mt-2 justify-end"}>*/}
                {/*        <input onChange={(e) => onChange("lineHeight", e.target.value)} type={"text"}*/}
                {/*               value={renderStyles.lineHeight}*/}
                {/*               className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}/>*/}
                {/*    </div>*/}

                {/*</div>*/}

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


            </EditorDialog>

        </>
    )
}