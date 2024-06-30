'use client'
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Switch from "@m3/switch/Switch";
import isEqual from 'lodash/isEqual';
import {useEffect, useState} from 'react'
import {
    argbFromHex,
    argbFromRgba,
    hexFromArgb,
    rgbaFromArgb,
    themeFromSourceColor,
} from "@material/material-color-utilities";
import Button from "@m3/buttons/Button";

export default function Appearance({data}) {
    const [selectedColor, setSelectedColor] = useState(data?.color || {})
    const [colorGenerateType, setColorGenerateType] = useState(0)
    const [themeColors, setThemeColors] = useState({})
    const [color, setColor] = useState(data?.color.primary || {r: 255, g: 255, b: 255, a: 1})
    // const checkObjEquality = (obj1, obj2) => {
    //
    //
    //     let objEqual = false;
    //     const obj1Keys = Object.keys(obj1).sort();
    //     const obj2Keys = Object.keys(obj2).sort();
    //     if (obj1Keys.length !== obj2Keys.length) {
    //         return objEqual;
    //     } else {
    //         const areEqual = obj1Keys.every((key, index) => {
    //             const objValue1 = obj1[key];
    //             const objValue2 = obj2[obj2Keys[index]];
    //             // console.log(,);
    //             // console.log(objValue1, objValue2);
    //             return checkObjEquality(objValue1,objValue2)
    //         });
    //         console.log(areEqual)
    //         if (areEqual) {
    //             objEqual = true;
    //             return objEqual;
    //         } else {
    //             return objEqual;
    //         }
    //     }
    // }
    useEffect(() => {
        return () => {
            const theme = themeFromSourceColor(argbFromRgba(color));
            const themeLight = theme.schemes.light.props
            const themeLightRGBA = Object.fromEntries(Object.entries(themeLight).map(([k, v]) => [k, rgbaFromArgb(v)]))

            if (Object.keys(selectedColor).length === 0) {
                setSelectedColor(themeLightRGBA)
                setThemeColors(theme)
            } else {
                // console.log(checkObjEquality(selectedColor, themeLightRGBA))
                // checkObjEquality(selectedColor, themeLightRGBA) ? setColorGenerateType(0) : setColorGenerateType(1)
                setThemeColors(theme)
            }
        }
    }, []);
    const rgbaObjToRgba = (obj) => {
        return `rgba(${obj.r}, ${obj.g}, ${obj.b}, ${obj.a})`
    }
    const saveData = () => {
        try {
            fetch(`/api/site-setting/${data._id}`, {
                method: 'PUT',
                body: JSON.stringify({color: selectedColor})
            }).then(response =>
                    console.log(response)
                // setIsOpen(true)
            ).then(data => alert(data));
        } catch (error) {
            alert('An error occurred!');
        }
    }
    const generateColor = (value) => {
        const theme = themeFromSourceColor(argbFromRgba(value));
        setColor(rgbaObjToRgba(value))
        const themeLight = theme.schemes.light.props
        const themeLightRGBA = Object.fromEntries(Object.entries(themeLight).map(([k, v]) => [k, rgbaFromArgb(v)]))
        setSelectedColor(themeLightRGBA)
        setThemeColors(theme)
    }
    const onChangeSelectedTheme = (key, value) => {
        setSelectedColor({...selectedColor, [key]: value})
        console.log(selectedColor)
    }
    const generateHighContrastPlatteColor = (index) => {
        return Object.keys(selectedColor)[index % 2 === 0 ? index + 1 : index - 1]

    }

    return (
        <div className={"rounded-[16px] h-full w-full bg-surface-container-light dark:bg-surface-container-dark"}>
            <div className={"pb-6"}>
                <div className={"py-6 px-6 flex items-center justify-between"}>
                    <h2 className={"text-title-large text-on-surface-light dark:text-on-surface-dark font-extrabold "}>
                        Website Color
                    </h2>
                    <Button onClick={saveData} type={"filled"} icon={"save"}>
                        Save
                    </Button>

                </div>
                <div className={"px-6"}>
                    <div
                        className={"flex items-center overflow-hidden rounded-full bg-surface-container-lowest-light"}>
                        <div onClick={() => setColorGenerateType(0)}
                             className={`${colorGenerateType === 0 ? "bg-secondary-container-light text-on-secondary-container-light dark:text-on-secondary-container-dark dark:bg-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} font-medium rounded-full w-6/12 justify-center h-[48px] flex items-center`}>
                            Generate Automatic
                        </div>
                        <div onClick={() => setColorGenerateType(1)}
                             className={`${colorGenerateType === 1 ? "bg-secondary-container-light text-on-secondary-container-light dark:text-on-secondary-container-dark dark:bg-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} font-medium rounded-full w-6/12 justify-center h-[48px] flex items-center`}>
                            Manual Color
                        </div>
                    </div>
                </div>
                {colorGenerateType === 0 && <div className={"px-6"}>

                    <div
                        className={"flex mt-6 mb-4 items-center dark:bg-surface-container-highest-dark  bg-surface-container-highest-light w-full rounded-[12px] py-4 px-6"}>
                        {/*<input onChange={(e) => generateColor(e.target.value)} type={"color"}/>*/}
                        <ColorPicker jsonExp value={rgbaObjToRgba(color)}
                                     onChange={(value) => generateColor(value)} isLeft/>
                        <div className={"ml-4"}>
                            <h3 className={"font-bold text-title-small"}>
                                Choose your color
                            </h3>
                            <p className={"text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                We best color platte for your color
                            </p>
                        </div>
                    </div>
                    <h3 className={" font-black text-title-medium"}>
                        Light Theme Platte
                    </h3>
                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                        If you are using light theme in your website you can use these color to have most contrast.
                    </p>
                    {Object.keys(themeColors).length !== 0 &&
                        <div className={"mt-3 rounded-[24px] overflow-hidden"}>
                            <div className={"grid grid-cols-12 gap-y-2"}>
                                {/*{console.log(themeColors.schemes.light.props)}*/}
                                {Object.keys(themeColors.schemes.light.props).map((key, index) =>
                                    index < 24 && (index < 12 || index > 15) &&
                                    <div key={index} className={"col-span-3"}>
                                        <div
                                            style={{backgroundColor: hexFromArgb(themeColors.schemes.light[key])}}
                                            className={`w-full h-[50px] inline-block`}>
                                            <h3 style={{color: hexFromArgb(themeColors.schemes.light[Object.keys(themeColors.schemes.light.props)[index % 2 === 0 ? index + 1 : index - 1]])}}
                                                className={"px-4 text-label-large py-2 font-medium"}>
                                                {key}
                                            </h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>}
                    {/*<h3 className={"mt-4 font-black text-title-medium"}>*/}
                    {/*    Dark Theme Platte*/}
                    {/*</h3>*/}
                    {/*<p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*/}
                    {/*    If you are using dark theme in your website you can use these color to have most contrast.*/}
                    {/*</p>*/}
                    {/*{Object.keys(themeColors).length !== 0 &&*/}
                    {/*    <div className={"mt-3 rounded-[24px] overflow-hidden"}>*/}
                    {/*        <div className={"grid grid-cols-12 gap-y-2"}>*/}
                    {/*            /!*{console.log(themeColors.schemes.light.props)}*!/*/}
                    {/*            {Object.keys(themeColors.schemes.dark.props).map((key, index) =>*/}
                    {/*                index < 24 && (index < 12 || index > 15) &&*/}
                    {/*                <div key={index} className={"col-span-3"}>*/}
                    {/*                    <div*/}
                    {/*                        style={{backgroundColor: rgbaFromArgb(themeColors.schemes.dark[key])}}*/}
                    {/*                        className={`w-full h-[50px] inline-block`}>*/}
                    {/*                        <h3 style={{color: rgbaFromArgb(themeColors.schemes.dark[Object.keys(themeColors.schemes.dark.props)[index % 2 === 0 ? index + 1 : index - 1]])}}*/}
                    {/*                            className={"px-4 text-label-large py-2 font-medium"}>*/}
                    {/*                            {key}*/}
                    {/*                        </h3>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            )}*/}
                    {/*        </div>*/}
                    {/*    </div>}*/}

                </div>}
                {colorGenerateType === 1 && <div className={"px-6 mt-6"}>
                    <h3 className={" font-black text-title-medium"}>
                        Custom Platte
                    </h3>
                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                        You can create your website color platte. (we suggest use automatic generator to have most
                        contrast in your website)
                    </p>
                    {Object.keys(selectedColor).length !== 0 &&
                        <div className={"mt-3 rounded-[24px] "}>
                            <div className={"grid grid-cols-12 gap-y-2"}>
                                {/*{console.log(themeColors.schemes.light.props)}*/}
                                {Object.keys(selectedColor).map((key, index) =>
                                    index < 24 && (index < 12 || index > 15) &&
                                    <div key={index} className={"col-span-3"}>
                                        <ColorPicker jsonExp onChange={(v) => onChangeSelectedTheme(key, v)}>
                                            <div
                                                style={{backgroundColor: rgbaObjToRgba(selectedColor[key])}}
                                                className={`w-full h-[50px] inline-block`}>
                                                <h3 style={{
                                                    color: rgbaObjToRgba(selectedColor[generateHighContrastPlatteColor(index)])
                                                }}
                                                    className={"px-4 text-left text-label-large py-2 font-medium"}>
                                                    {key}
                                                </h3>
                                            </div>
                                        </ColorPicker>
                                    </div>
                                )}
                            </div>
                        </div>}

                </div>}
            </div>
        </div>

    )
}