'use client'
import React, {useRef, useState} from "react";
import {useClickOutside} from "@lib/CustomHook";
import Icon from "@m3/assets/icons/Icon";

export default function Select({children,value, onChange, label, className, options,id}) {
    const FocusLabelStyle = " group-focus-within:px-1 group-focus-within:left-3 group-focus-within:text-primary-light dark:group-focus-within:text-primary-dark group-focus-within:-top-[2px] group-focus-within:-translate-y-1/2 group-focus-within:text-primary-light dark:group-focus-within:text-primary-dark group-focus-within:leading-[.5] group-focus-within:text-body-small group-focus-within:leading-[16px]"
    const FocusFieldsetStyle = "dark:group-focus-within:border-primary-dark group-focus-within:border-primary-light"
    const ValueLabelStyle = "px-1 left-3 text-primary-light dark:text-primary-dark -top-[5px] -translate-y-1/2 !leading-[.5] text-body-small"
    const ValueFieldsetStyle = "dark:border-primary-dark border-primary-light"
    const LabelStyle = "text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark top-1/2 -mt-[3px] -translate-y-1/2 left-[16px]"
    const FieldsetStyle = "border-outline-light dark:border-outline-dark"
    const wrapperRef = useRef("menu");
    const [openMenu, setOpenMenu] = useState(false);
    useClickOutside(wrapperRef, () => {
        setOpenMenu(false);
    });
    return (
        <div ref={wrapperRef} className={"relative"}>
            <div onClick={()=>setOpenMenu(true)} className={`relative cursor-text group h-[56px] w-full group ${className}`}>
                <fieldset aria-hidden="true"
                          className={`${value !== "" ? ValueFieldsetStyle : FieldsetStyle + " " + FocusFieldsetStyle} border rounded-[4px] h-[56px] top-0 left-0 w-full absolute `}>

                    <legend
                        className="text-xs  relative h-[11px] invisible float-unset p-0 overflow-hidden ml-3 max-w-full w-fit leading-[16px] float-[unset] transition-[max-width_100ms_cubic-bezier(0.0,_0,_0.2,_1)_50ms]">
                        <span
                            className={`${value !== "" ? "block" : "group-focus-within:block hidden"} opacity-0 px-1 inline-block w-fit`}>{label}</span>
                    </legend>
                    {!children&&<select onChange={onChange || null} value={value} aria-invalid={"true"} id={id ? id : label}
                             className={"appearance-none relative h-[calc(100%_-_1px)] border-0 bg-transparent text-on-surface-light dark:text-on-surface-dark outline-none px-4 w-full caret-primary-light "}>
                        {!children && options && options.map((op, index) => <option value={op?.value} label={op?.title}
                                                                                    key={index}>

                        </option>)}

                    </select>}
                    {children&&<div  aria-invalid={"true"} id={id ? id : label}
                                       className={"relative flex items-center h-[calc(100%_-_1px)] border-0 bg-transparent text-on-surface-light dark:text-on-surface-dark outline-none px-4 w-full caret-primary-light "}>
                        {value}
                    </div>}
                    <label htmlFor={id ? id : label}
                           className={`${value !== "" ? ValueLabelStyle : LabelStyle + " " + FocusLabelStyle} z-10 cursor-text inline-block absolute transform transition-all duration-300 ease-in-out tracking-[.5px]`}>
                        {label}

                    </label>
                    <Icon className={"absolute text-on-surface-variant-light right-2 top-1/2 transform -translate-y-1/2"}>
                        arrow_drop_down
                    </Icon>

                </fieldset>
            </div>
            {(children && openMenu )&&<div onClick={()=>setOpenMenu(false)}  className={"absolute shadow-elevated-two-light  mt-1 top-[56px] rounded-[4px] z-20 py-2 bg-surface-container-light w-full"}>
               <ul className={"overflow-scroll  max-h-[280px]"}>
                {children}
               </ul>
            </div>}
        </div>
    )
}