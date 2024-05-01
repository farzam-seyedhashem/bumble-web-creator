'use client';
import {useEffect, useState} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";

export default function TextComponents({item}) {
    let [Component, setComponent] = useState(item.type)
    let [isSelected, setIsSelected] = useState(false)
    let [value, setValue] = useState(item.value || item.id)
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

        classGenerator(styles)
    }

    return (
        <>
            <Component style={renderStyles} onClick={() => setIsSelected(true)}>
                {value}
            </Component>
            {isSelected && <div
                className={"fixed   z-1001 h-[calc(100vh_-_124px)] bg-surface-container-high-light rounded-[24px] dark:bg-surface-container-high-dark right-6 top-1/2 transform -translate-y-1/2 w-[360px] "}>
                <div className={"flex px-4 justify-end border-b py-2 mb-4"}>
                    <IconButton onClick={()=>setIsSelected(false)}>
                        close
                    </IconButton>
                </div>
                <div className={"px-4"}>
                    <TextField label={"Text"} onChange={(e) => setValue(e.target.value)} defaultValue={value}/>
                    <div className={"flex justify-between items-center pt-4 pb-2"}>
                        <label
                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Light theme color
                        </label>
                        <div className={"flex relative w-[24px] h-[24px] overflow-hidden rounded-[8px]"}>
                            <label htmlFor="colorPicker" className={"absolute inset-0  "}
                                   style={{background: renderStyles.color}}
                            >
                            </label>
                            <input id={"colorPicker"} className={"invisible"}
                                   onChange={(e) => onChange("color", e.target.value)} type={"color"}/>
                        </div>

                    </div>
                    <div className={"flex justify-between items-center py-2"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Font Size
                        </label>
                        <div className={"flex mt-2 justify-end"}>
                            <input onChange={(e) => onChange("fontSize", e.target.value)} type={"text"}
                                   value={renderStyles.fontSize}
                                   className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}/>
                        </div>

                    </div>
                    <div className={"flex justify-between items-center py-2"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Line Height
                        </label>
                        <div className={"flex mt-2 justify-end"}>
                            <input onChange={(e) => onChange("lineHeight", e.target.value)} type={"text"}
                                   value={renderStyles.lineHeight}
                                   className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}/>
                        </div>

                    </div>
                    <div className={"block justify-between items-center py-2"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Font Weight
                        </label>
                        <div className={"flex mt-2 justify-end"}>
                            <div className={"flex  border border-primary-light dark:border-primary-dark rounded-full"}>
                                <button onClick={() => onChange("fontWeight", "300")}
                                        className={`${renderStyles.fontWeight === "300" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                    light
                                </button>
                                <button onClick={() => onChange("fontWeight", "400")}
                                        className={`${renderStyles.fontWeight === "400" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                    normal
                                </button>
                                <button onClick={() => onChange("fontWeight", "500")}
                                        className={`${renderStyles.fontWeight === "500" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                    medium
                                </button>
                                <button onClick={() => onChange("fontWeight", "700")}
                                        className={`${renderStyles.fontWeight === "700" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                    bold
                                </button>
                                <button onClick={() => onChange("fontWeight", "900")}
                                        className={`${renderStyles.fontWeight === "900" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                    black
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className={"block items-center justify-between py-2"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Padding
                        </label>
                        <div className={"grid mt-2  ml-auto grid-cols-4 gap-4 items-center"}>
                            <div className={"w-full"}>
                                <input onChange={(e) => onChange("paddingTop", e.target.value)} type={"text"}
                                       value={renderStyles.paddingTop}
                                       className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Top
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <input onChange={(e) => onChange("paddingRight", e.target.value)} type={"text"}
                                       value={renderStyles.paddingRight}
                                       className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Right
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <input onChange={(e) => onChange("paddingBottom", e.target.value)} type={"text"}
                                       value={renderStyles.paddingBottom}
                                       className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Bottom
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <input onChange={(e) => onChange("paddingLeft", e.target.value)} type={"text"}
                                       value={renderStyles.paddingLeft}
                                       className={"text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>
                                <div
                                    className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Left
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}

        </>
    )
}