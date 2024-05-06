'use client'
import {useState} from "react";
import Icon from "@m3/assets/icons/Icon";
import FAB from "@m3/floating_action_buttons/FAB";
import Badge from "@m3/badges/Badge";
import AssistChips from "@m3/chips/AssistChips";
import IconButton from "@m3/icon_buttons/IconButton";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Switch from "@m3/switch/Switch";
import {ThemeContext, useThemeContext} from "@/app/theme-provider";

export default function Page({children}) {
    const [selectedSetting, setSelectedSetting] = useState(null);
    const {theme, setTheme} = useThemeContext();
    const [selectedFonts, setSelectedFonts] = useState(0);
    const {isDark, colorSystem} = theme;
    const fonts = [
        {name: "Roboto Flex"},
        {name: "Roboto Slab"},
        {name: "Roboto Serif"},
        {name: "Open Sans"},
        {name: "Inter"},
        {name: "Noto Sans"},
    ]
    const colors = [
        {
            name: "default",
            class: "default-theme-color"
        },
        {
            name: "green",
            class: "green-theme-color"
        },
        {
            name: "yellow",
            class: "yellow-theme-color"
        },
        {
            name: "orange",
            class: "orange-theme-color"
        },
        {
            name: "pink",
            class: "pink-theme-color"
        },
        {
            name: "purple",
            class: "purple-theme-color"
        }
    ]
    const SettingItems = [
        {
            icon: "monitoring",
            title: "SEO",
            description: "Edit global SEO settings"
        },

        {
            icon: "palette",
            title: "Appearance",
            description: "Edit theme, font, color and more..."
        },
        {
            icon: "person",
            title: "Users",
            description: "Add admin users and there role"

        },
        {
            icon: "web",
            title: "Website",
            description: "domain and logo settings"
        }
    ]
    return (
        <div>

            <div className={"grid grid-cols-12 h-[100vh]"}>

                <div
                    className={"md:col-span-4 col-span-12  border-l-outline-light dark:border-l-outline-dark border-r border-outline-variant-light dark:border-outline-variant-dark h-full"}>
                    <div
                        className={"border-b text-on-surface-light dark:text-on-surface-dark bg-surface-light dark:bg-surface-dark border-outline-variant-light dark:border-outline-variant-dark flex items-center justify-between px-4 h-[64px]"}>
                        <h1 className={"font-bold text-title-large"}>
                            Setting
                        </h1>
                    </div>
                    <ul>
                        {SettingItems.map((item, index) =>
                            <>
                                <li onClick={() => setSelectedSetting(index)}
                                    className={`transition-all duration-300 ${selectedSetting === index ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "text-surface-light dark:text-surface-dark "} flex items-center h-[72px] py-2 px-4 `}
                                    key={index}>
                                    {<Icon
                                        className={"mr-4 text-on-secondary-container-light dark:text-on-secondary-container-dark"}>
                                        {item.icon}
                                    </Icon>}
                                    <div>
                                        <h3 className={`${selectedSetting === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark"} text-body-large  `}>
                                            {item.title}
                                        </h3>
                                        <p className={`${selectedSetting === index ? "text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} text-body-medium `}>
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                                {selectedSetting !== index && <div className={"px-4"}>
                                    <div className={"h-[1px] bg-surface-variant-light dark:bg-surface-variant-dark"}/>
                                </div>}
                            </>
                        )}
                    </ul>
                </div>
                {selectedSetting !== null && <div className={"bg-surface-light dark:bg-surface-dark md:relative md:z-20 z-999 md:w-auto w-full fixed md:left-auto md:right-auto left-0 top-0 md:col-span-8"}>
                    <div
                        className={" bg-surface-container-high-light dark:bg-surface-container-high-dark border-outline-variant-light dark:border-outline-variant-dark flex items-center  px-2 h-[64px]"}>
                        <IconButton onClick={()=>setSelectedSetting(null)} className={"mr-2"}>
                            arrow_back
                        </IconButton>
                        <h1 className={"text-on-surface-light dark:text-on-surface-dark font-medium text-title-large"}>
                            {SettingItems[selectedSetting].title}
                        </h1>
                    </div>
                    {selectedSetting === 1 && <div className={"py-4"}>
                        <h2 className={"px-4 mb-2 font-medium flex items-center text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            <Icon weight={500}
                                  className={"mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                                  size={16}>
                                format_paint
                            </Icon>
                            Color

                        </h2>
                        <ul>
                            <li
                                className={` justify-between transition-all duration-300 "text-surface-light dark:text-surface-dark flex items-center h-[56px] py-2 px-4 `}>
                                <div>
                                    <h3 className={`text-on-surface-light dark:text-on-surface-dark text-body-large  `}>
                                        Admin Color
                                    </h3>
                                </div>
                                <div className={"flex  justify-end  w-[250px]"}>
                                    {colors.map((item, i) => <div key={i}
                                                                  className={"relative flex items-center justify-center   rounded-[12px] w-full"}>
                                        <div onClick={() => setTheme(isDark, item.class)}
                                             className={`${item.class} overflow-hidden h-[24px] w-[24px] grid grid-cols-2 rounded-full`}>
                                            <div
                                                className={"col-span-2 bg-primary-container-light dark:bg-primary-container-dark"}/>
                                            <div
                                                className={"col-span-1 bg-tertiary-container-light dark:bg-tertiary-container-dark"}/>
                                            <div
                                                className={"col-span-1 bg-secondary-container-light dark:bg-secondary-container-dark"}/>
                                        </div>
                                        {colorSystem === item.class && <div
                                            className={"flex justify-center items-center bg-primary-light rounded-full w-[16px] h-[16px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 dark:bg-primary-dark"}>
                                            <Icon size={16}
                                                  className={"text-on-primary-light dark:text-on-primary-dark"}
                                                  type={"outline"}>
                                                check
                                            </Icon>
                                        </div>}
                                    </div>)}
                                </div>
                            </li>
                            <div className={"px-4"}>
                                <div className={"h-[1px] bg-surface-variant-light dark:bg-surface-variant-dark"}/>
                            </div>
                            <li
                                className={` justify-between transition-all duration-300 "text-surface-light dark:text-surface-dark flex items-center h-[56px] py-2 px-4 `}>
                                <div>
                                    <h3 className={`text-on-surface-light dark:text-on-surface-dark text-body-large  `}>
                                        Website Primary Color
                                    </h3>
                                </div>
                                <ColorPicker/>
                            </li>
                            <div className={"px-4"}>
                                <div className={"h-[1px] bg-surface-variant-light dark:bg-surface-variant-dark"}/>
                            </div>
                            <li
                                className={` justify-between transition-all duration-300 "text-surface-light dark:text-surface-dark flex items-center h-[56px] py-2 px-4 `}>
                                <div>
                                    <h3 className={`text-on-surface-light dark:text-on-surface-dark text-body-large  `}>
                                        Admin Dark Mode
                                    </h3>
                                </div>
                                <Switch isCheck={isDark} setIsCheck={(v) => {
                                    setTheme(v, colorSystem)
                                }}/>
                            </li>
                        </ul>
                        <h2 className={"mt-4 mb-2 px-4 font-medium flex items-center text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            <Icon weight={500}
                                  className={"mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                                  size={16}>
                                text_fields
                            </Icon>
                            Fonts
                        </h2>
                        {fonts.map((item, i) => <div key={i}>
                            <div onClick={() => setSelectedFonts(i)} className={"text-on-surface-variant-light dark:text-on-surface-variant-dark group/radio flex w-fit cursor-pointer items-center"}>
                                <div className={`flex items-center justify-center w-[48px] h-[48px]`}>
                                    <div
                                        className={`${selectedFonts === i ? "dark:group-hover/radio:bg-primary-dark/[8%] group-hover/radio:bg-primary-light/[8%]" : "dark:group-hover/radio:bg-on-surface-dark/[8%] group-hover/radio:bg-on-surface-light/[8%]"} rounded-full w-[40px] h-[40px] flex items-center justify-center`}>
                                        {selectedFonts === i ? <Icon className={"text-primary-light dark:text-primary-dark"} size={20}>
                                            radio_button_checked
                                        </Icon> : <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"} size={20}>
                                            radio_button_unchecked
                                        </Icon>}
                                    </div>
                                </div>
                                {item.name}
                            </div>

                        </div>)}

                    </div>}
                </div>}
            </div>
        </div>
    )
}