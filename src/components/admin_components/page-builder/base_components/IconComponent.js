'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Dialog, Transition} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";

export default function TextComponents({editItem, item, key}) {
    let [Component, setComponent] = useState(item.type)
    let [isSelected, setIsSelected] = useState(false)
    let [value, setValue] = useState(item.value || item.idType)
    // const [styles, setStyles] = useState(item?.styles)
    let [className, setClassName] = useState(item?.className)
    let [renderStyles, setRenderStyles] = useState(item?.styles)
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
    const changeTypeHandler = (type) => [
        setComponent(type),
        editItem("type", type)
    ]
    const checkPX = (value) => {
        return value.match("^\\d+$")
    }

    return (
        <>
            <Component id={key} className="relative group" style={renderStyles}>
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
            </Component>
            <EditorDialog isOpen={isSelected} setIsOpen={setIsSelected} >


                <TextField label={"Text"} onChange={(e) => valueChangeHandler(e.target.value)}
                           defaultValue={value}/>
                <div className={"flex justify-between items-center pt-4 pb-2"}>
                    <label
                        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Theme color
                    </label>
                    <ColorPicker onChange={(value) => onChange("color", value)}
                                 value={renderStyles.color}/>

                </div>
                <div className={" mt-2 justify-end"}>
                    <label
                        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Headline Type
                    </label>
                    <div
                        className={"flex w-fit ml-auto mt-2  border border-primary-light dark:border-primary-dark rounded-full"}>
                        <button onClick={() => changeTypeHandler("h1")}
                                className={`${Component === "h1" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                            H1
                        </button>
                        <button onClick={() => changeTypeHandler("h2")}
                                className={`${Component === "h2" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                            H2
                        </button>
                        <button onClick={() => changeTypeHandler("h3")}
                                className={`${Component === "h3" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                            H3
                        </button>
                        <button onClick={() => changeTypeHandler("h4")}
                                className={`${Component === "h4" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                            H4
                        </button>
                        <button onClick={() => changeTypeHandler("h5")}
                                className={`${Component === "h5" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                            H5
                        </button>
                        <button onClick={() => changeTypeHandler("h6")}
                                className={`${Component === "h6" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                            H6
                        </button>
                    </div>
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
                                <option label={"light"} value={"300"}/>
                                <option label={"normal"} value={"400"}/>
                                <option label={"medium"} value={"500"}/>
                                <option label={"bold"} value={"700"}/>
                                <option label={"black"} value={"900"}/>
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
                <div className={"block items-center justify-between py-2"}>
                    <label
                        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Border
                    </label>
                    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>
                        <div className={"w-full"}>
                            <div>
                                <TextFieldEditor id={"borderTop"} onChange={onChange}
                                                 defValue={renderStyles.borderTop}/>
                            </div>
                            <div
                                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Top
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <div>
                                <TextFieldEditor id={"borderRight"} onChange={onChange}
                                                 defValue={renderStyles.borderRight}/>
                            </div>
                            <div
                                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Right
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <div>
                                <TextFieldEditor id={"borderBottom"} onChange={onChange}
                                                 defValue={renderStyles.borderBottom}/>
                            </div>
                            <div
                                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Bottom
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <div>
                                <TextFieldEditor id={"borderLeft"} onChange={onChange}
                                                 defValue={renderStyles.borderLeft}/>
                            </div>
                            <div
                                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Left
                            </div>
                        </div>
                        <div className={"col-span-2"}>
                            {/*<div className={"w-full justify-between items-center "}>*/}
                            {/*    <label*/}
                            {/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                            {/*        Border Style*/}
                            {/*    </label>*/}
                            {/*    <div className={"w-full mt-2 justify-end"}>*/}
                            {/*        <select*/}
                            {/*            onChange={(e) => onChange("borderStyle", `${e.target.value} ${e.target.value} ${e.target.value} ${e.target.value}`)}*/}
                            {/*            value={renderStyles.borderStyle.split(" ")[0]}*/}
                            {/*            className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark border border-outline-light dark:border-outline-dark "}>*/}
                            {/*            <option label={"Solid"} value={"solid"}/>*/}
                            {/*            <option label={"Doted"} value={"dotted"}/>*/}
                            {/*            <option label={"Dashed"} value={"dashed"}/>*/}
                            {/*        </select>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className={"flex justify-between items-center pt-4 pb-2"}>
                                <label
                                    className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                    Border color
                                </label>
                                <ColorPicker
                                    onChange={(value) => onChange("borderColor", value)}
                                    value={renderStyles.borderColor}/>
                            </div>
                        </div>
                    </div>
                </div>


            </EditorDialog>

        </>
    )
}