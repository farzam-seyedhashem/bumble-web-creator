'use client'
import {useEffect, useMemo, useRef, useState} from "react";
import {SketchPicker} from 'react-color';
import {Popover} from "@headlessui/react";
import Icon from "@m3/assets/icons/Icon";
import TextField from "@m3/text_fields/TextField";
import {ApiURL} from "@/config";


export default function ColorPicker({children, value, onChange, isLeft, jsonExp}) {
    const [color, setColor] = useState(value || "rgba(0,0,0,1)")
    const [colorJ, setColorJ] = useState(value || "rgba(0,0,0,1)")
    const el = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [presetColors, setPresetColors] = useState([])

    // useEffect(async () => {
    // const res = await fetch('http://localhost:3000/api/site-setting')
    // const responseValue = await res.json()

    // }, []);
    const rgbaObjToRgba = (obj) => {
        return `rgba(${obj.r}, ${obj.g}, ${obj.b}, ${obj.a})`
    }
    useMemo(async () => {
        const res = await fetch(`${ApiURL}/site-setting`)
        const responseValue = await res.json()
        const presetColorsArray = []
        Object.keys(responseValue.color).map((k,index)=>
            (index!== 24 && index!==25) && (index < 12 || index > 15) && presetColorsArray.push({color: rgbaObjToRgba(responseValue.color[k]),title:k})
        )
        setPresetColors(presetColorsArray)
    }, []);

    const defColors = [
        '#fc030b',
        '#fc5e03',
        '#fcba03',
        '#fc0352',
        '#03a5fc',
        '#3503fc',
        '#ca03fc',
        '#6b03fc',
        '#ffffff',
        '#eeeeee',
        '#f2f2f2',
        '#424242',
        '#323232',
        '#212121',
        '#1a1a1a',
        '#000000',
    ]

    function wc_hex_is_light(color) {
        const hex = color === "transparent" ? "transparent" : color.replace('#', '');
        const c_r = parseInt(hex.substring(0, 0 + 2), 16);
        const c_g = parseInt(hex.substring(2, 2 + 2), 16);
        const c_b = parseInt(hex.substring(4, 4 + 2), 16);
        const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
        return brightness > 155;
    }

    const colorChangeHandler = (colorHexCode) => {
        setColor(`rgba(${colorHexCode.r},${colorHexCode.g},${colorHexCode.b},${colorHexCode.a})`)
        setColorJ(colorHexCode)
        jsonExp ? onChange(colorHexCode) : onChange(`rgba(${colorHexCode.r},${colorHexCode.g},${colorHexCode.b},${colorHexCode.a})`)
    }

    return (
        <>
            <Popover className={`${children ? "w-full h-full" : "h-[24px] w-[24px]"}  relative`}>
                <Popover.Button className={"w-full h-full"} onClick={() => setIsOpen(true)}>
                    {children ? children : <div style={{backgroundColor: color}}
                                                className={"flex outline outline-2 outline-offset-2 outline-outline-dark rounded-full w-[24px] h-[24px]"}>

                    </div>}
                </Popover.Button>

                <Popover.Panel
                               className={`${isLeft ? "left-0" : "right-0"} overflow-hidden bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px]  w-[280px] absolute z-[999]`}>
                    {presetColors.length!==0&&<SketchPicker presetColors={presetColors} width={"250px"} color={colorJ} disableAlpha={false}
                                   onChangeComplete={(c) => colorChangeHandler(c.rgb)}/>
                    }
                </Popover.Panel>
            </Popover>
        </>
    )
}