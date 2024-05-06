'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import {Transition, Dialog} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";

export default function ImageComponent({isDesktop,item,editItem,removeItemFunc,dragFunc}) {
    let [Component, setComponent] = useState(item.type)
    let [isSelected, setIsSelected] = useState(false)
    let [value, setValue] = useState(item.value)
    // const [styles, setStyles] = useState(item?.styles)
    let [className, setClassName] = useState(item?.className)
    let [globalRenderStyles, setGlobalRenderStyles] = useState(item?.globalStyles)
    let [deviceStyle, setDeviceStyle] = useState(isDesktop ? item?.desktopStyles : item?.mobileStyles)
    useEffect(() => {
        setDeviceStyle(isDesktop ? item?.desktopStyles : item?.mobileStyles)
    }, [isDesktop]);
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
    let onChangeGlobal = (name, value) => {
        let styles = {...globalRenderStyles, [name]: value}
        setGlobalRenderStyles(styles)
        editItem("globalStyles", styles)
        editItem("className", className)
    }
    let onChange = (name, value) => {

        let styles = {...deviceStyle, [name]: value}
        setDeviceStyle(styles)
        editItem(isDesktop ? "desktopStyles" : "mobileStyles", styles)


    }
    let handleChangeValue = (value) => {
        setValue(value)
        editItem("value", value)
    }
    const checkPX = (value) => {
        return value.match("^\\d+$")
    }

    return (
        <>
            <div className={"relative group"}>
                {value ?
                    <img className={"z-[1]"} style={{...deviceStyle,...globalRenderStyles}} onClick={() => setIsSelected(true)} src={value}/> :
                    <div  style={{...deviceStyle,...globalRenderStyles}} onClick={() => setIsSelected(true)}
                         className={"flex justify-center items-center bg-surface-variant-light dark:bg-surface-variant-dark " + item?.className}>
                        <Icon className={"text-[48px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            image
                        </Icon>
                    </div>
                }
                <div
                    className={"absolute  z-[888] hidden group-hover:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                    <div
                        className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-tertiary-container-dark bg-tertiary-container-light"}>
                        <button onClick={() => setIsSelected(true)}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-tertiary-container-light dark:!bg-tertiary-container-dark "}>
                            <Icon size={16}
                                  className={"!text-on-tertiary-container-light dark:!text-on-tertiary-container-dark text-[20px]"}>
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
                <div className={"grid grid-cols-12 gap-4 py-2"}>
                    <div className={"col-span-12 flex item justify-between items-center py-2"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Upload Image
                        </label>
                        <div className={""}>
                            <label className={"text-on-surface-light dark:text-on-surface-dark"}
                                   htmlFor={"imageFile"}>
                                {value ? <img className={"rounded-[4px] w-[40px] h-[40px]"}
                                              src={value}/>
                                    :
                                    <div
                                        className={"rounded-[4px] flex justify-center items-center w-[40px] h-[40px]"}
                                    >
                                        <Icon
                                            className={"text-[24px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                            image
                                        </Icon>
                                    </div>}
                            </label>
                            <input
                                onChange={(e) => handleChangeValue(URL.createObjectURL(e.target.files[0]))}
                                id={"imageFile"} type={"file"}
                                className={"hidden w-0"}/>
                        </div>
                    </div>
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

                <div className={"block justify-between items-center py-2"}>
                    <label
                        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                        Image Preview
                    </label>
                    <div className={"flex mt-2 justify-end"}>
                        <div
                            className={"flex  border border-primary-light dark:border-primary-dark rounded-full"}>
                            <button onClick={() => onChange("objectFit", "cover")}
                                    className={`${deviceStyle.objectFit === "cover" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                cover
                            </button>
                            <button onClick={() => onChange("objectFit", "contain")}
                                    className={`${deviceStyle.objectFit === "contain" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                contain
                            </button>
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