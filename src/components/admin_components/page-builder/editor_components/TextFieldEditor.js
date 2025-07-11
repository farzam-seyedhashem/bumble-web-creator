import {useEffect, useState} from "react";

export default function TextFieldEditor({defValue,onChange,id}) {
    let [type,setType] = useState(defValue.indexOf("px") > -1 ? "px" : defValue.indexOf("%") > -1 ? "%" : "")

    const [value,setValue] = useState(defValue)
    useEffect(() => {
        setType(defValue.indexOf("px") > -1 ? "px" : defValue.indexOf("%")>-1 ? "%" : "")
        setValue(defValue)
    }, [defValue]);
    const onChangeHandler = (id,v)=>{
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

                className={"h-[46px] text-on-surface-light px-4 text-body-large  border border-outline-variant-light  bg-transparent w-full rounded-[8px]"}/>
            {value !== "auto" && <select style={{appearance: "none"}} value={type} onChange={(e) => {
                onChangeHandler(id, value.replace(type, "") + e.target.value)
                setType(e.target.value)
            }}
                                           className={"text-on-surface-variant-light rounded-none border-l active-option:border-outline-variant-light border-outline-light appearance-none px-2 bg-transparent outline-0 border-0 font-medium text-label-large  absolute top-1/2 transform -translate-y-1/2 right-1"}>
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