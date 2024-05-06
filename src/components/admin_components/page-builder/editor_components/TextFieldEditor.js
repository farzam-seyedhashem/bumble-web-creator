import {useEffect, useState} from "react";

export default function TextFieldEditor({defValue,onChange,id}) {
    let [type,setType] = useState(defValue.indexOf("px")>-1 ? "px" : defValue.indexOf("%")>-1 ? "%" : "")

    const [value,setValue] = useState(defValue)
    useEffect(() => {
        setType(defValue.indexOf("px")>-1 ? "px" : defValue.indexOf("%")>-1 ? "%" : "")
        setValue(defValue)
    }, [defValue]);
    const onChangeHandler = (id,v)=>{
        console.log(id,v)
        setValue(v)
        onChange(id,v)
    }
    const checkIsNumber = (value) => {
         return value.match("^\\d+$") && parseInt(value) >= 0

    }
    return (

        <div className={"relative"}>
            <input
                onChange={(e) => checkIsNumber(e.target.value) ? onChangeHandler(id, parseInt(e.target.value) + type) : (e.target.value===null || e.target.value === "") ? onChangeHandler(id, "auto") :  ""}
                type={"text"}
                value={value === "auto" ? "auto" : value.replace("px", "").replace("%","")}
                className={"text-center text-body-large pr-8 bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>
            {value !== "auto" && <select value={type} onChange={(e) => {
                onChangeHandler(id, value.replace(type, "") + e.target.value)
                setType(e.target.value)
            }}
                                           className={"px-2 bg-transparent active:outline-0 focus:outline-0 focus-within:outline-0 outline-0 border-l border-outline-variant-dark font-medium text-label-large text-on-surface-variant-dark absolute top-1/2 transform -translate-y-1/2 right-1"}>
                <option value={"px"}>
                    PX
                </option>
                <option value={"%"}>
                    %
                </option>
            </select>}
        </div>

    )
}