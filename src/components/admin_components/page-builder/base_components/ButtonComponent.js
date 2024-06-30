'use client';
import {useEffect, useState, Fragment, useMemo} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Transition, Dialog} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {StyleToClass} from "@frontend/_helper/StyleToClass";
import {rgbaObjToRgba} from '@frontend/_helper/rgbaObjtoRgba'
export default function ButtonComponent({color,isDesktop, item, editItem,removeItemFunc,dragFunc}) {
    // let [Component, setComponent] = useState(item.type)
    let [isSelected, setIsSelected] = useState(false)
    let [value, setValue] = useState(item.value || item.idType)
    let [link, setLink] = useState(item.link || "")
    // const [styles, setStyles] = useState(item?.styles)
    let [className, setClassName] = useState(item?.className)
    let [globalRenderStyles, setGlobalRenderStyles] = useState(item?.globalStyles)
    let [deviceStyle, setDeviceStyle] = useState(isDesktop ? item?.desktopStyles : item?.mobileStyles)

    useEffect(() => {
        if (!globalRenderStyles.color){
            onChangeGlobal('color',rgbaObjToRgba(color.onPrimary))
        }
        if (!globalRenderStyles.backgroundColor) {
            onChangeGlobal('backgroundColor',rgbaObjToRgba(color.primary))
        }
    }, [globalRenderStyles])
    useEffect(() => {
        const deviceClass = StyleToClass(deviceStyle,isDesktop,item.uniqueId)
        const globalClass = StyleToClass(globalRenderStyles,false,item.uniqueId)
        const classNames = globalClass+deviceClass
        editItem("className", classNames,item.usniqueId)
        // fs.writeFileSync()
    },[deviceStyle,globalRenderStyles])
    useEffect(() => {
        setDeviceStyle(isDesktop ? item?.desktopStyles : item?.mobileStyles)
    }, [isDesktop]);
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

    return (
        <>
            <div className={"flex relative group/button"}>
                <button style={{...globalRenderStyles,...deviceStyle}}>
                    {value}
                </button>
                <div
                    className={"absolute z-[888] hidden group-hover/button:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                    <div
                        className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-tertiary-container-dark bg-tertiary-container-light"}>
                        <button onClick={() => setIsSelected(true)}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
                            <Icon size={16}
                                  className={"dark:!text-on-tertiary-container-dark !text-on-tertiary-container-light text-[20px]"}>
                                edit
                            </Icon>
                        </button>
                        <button onDragOver={(event)=>{
                            event.preventDefault();
                              removeItemFunc()
                        }} onDragStart={(e) => dragFunc(e)} draggable={true}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
                            <Icon size={16}
                                  className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
                                drag_indicator
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
                            <Icon onClick={removeItemFunc} size={16}
                                  className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
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
                    <ColorPicker value={globalRenderStyles.color}
                                 onChange={(color) => onChangeGlobal("color", color)}/>
                </div>
                <div className={"flex justify-between items-center pt-4 pb-2"}>
                    <label
                        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Background Color
                    </label>
                    <ColorPicker value={globalRenderStyles.backgroundColor}
                                 onChange={(color) => onChangeGlobal("backgroundColor", color)}/>

                </div>
                <div className={"grid grid-cols-12 gap-4 py-2"}>
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

                    <div className={"col-span-4 justify-between items-center"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Rounded
                        </label>
                        <div className={"mt-2"}>
                            <TextFieldEditor id={"borderRadius"} onChange={onChange}
                                             defValue={globalRenderStyles.borderRadius}/>
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
                                    value={deviceStyle.fontWeight}
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
                                             defValue={deviceStyle.fontSize}/>
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


            </EditorDialog>

        </>
    )
}