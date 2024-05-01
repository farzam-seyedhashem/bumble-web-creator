'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Transition, Dialog} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";

export default function ButtonComponent({item,editItem}) {
    // let [Component, setComponent] = useState(item.type)
    let [isSelected, setIsSelected] = useState(false)
    let [value, setValue] = useState(item.value || item.idType)
    let [link, setLink] = useState(item.link || "")
    // const [styles, setStyles] = useState(item?.styles)
    let [className, setClassName] = useState(item?.className)
    let [renderStyles, setRenderStyles] = useState(item?.styles)
    let classGenerator = (newStyles) => {
        let classes = ""
        newStyles.fontWeight ? classes += `font-[${newStyles.fontWeight}] ` : ""
        newStyles.fontSize ? classes += `text-${newStyles.fontSize}px ` : ""
        newStyles.color ? classes += `text-[${newStyles.color}] ` : ""
        // newStyles.dark.color ? classes += `dark:text-[${styles.dark.color}] ` : ""
        // newStyles.general.fontSize ? classes += `text-${styles.general.fontSize}` : ""
        setClassName(classes)
        console.log(classes)

    }
    let onChange = (name, value) => {
        let styles = {...renderStyles, [name]: value}

        setRenderStyles(styles)
        editItem("styles", styles)
        classGenerator(styles)
    }

    return (
        <>
            <div className={"relative group/button"}>
                <button style={renderStyles}>
                    {value}
                </button>
                <div
                    className={"absolute hidden group-hover/button:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
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

            </div>
            <EditorDialog setIsOpen={setIsSelected} isOpen={isSelected}>

                <TextField id={"ef"} key={1} label={"Text"}
                           onChange={(e) => setValue(e.target.value)} defaultValue={value}/>
                <TextField id={"mm"} key={2} className={"mt-4"} label={"Link"}
                           onChange={(e) => setLink(e.target.value)} defaultValue={link}/>
                <div className={"flex justify-between items-center pt-4 pb-2"}>
                    <label
                        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Text Color
                    </label>
                    <ColorPicker value={renderStyles.color}
                                 onChange={(color) => onChange("color", color)}/>
                </div>
                <div className={"flex justify-between items-center pt-4 pb-2"}>
                    <label
                        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Background Color
                    </label>
                    <ColorPicker value={renderStyles.backgroundColor}
                                 onChange={(color) => onChange("backgroundColor", color)}/>

                </div>
                <div className={"grid grid-cols-12 gap-4 py-2"}>
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
                        <div className={"mt-2"}>
                            <TextFieldEditor id={"fontSize"} onChange={onChange}
                                             defValue={renderStyles.fontSize}/>
                        </div>
                    </div>
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


            </EditorDialog>

        </>
    )
}