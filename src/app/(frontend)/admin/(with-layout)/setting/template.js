'use client'
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Switch from "@m3/switch/Switch";
import {useThemeContext} from "@/app/theme-provider";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Appearance({children}) {
    // const {theme, setTheme} = useThemeContext();
    // let {isDark, colorSystem} = theme;
    // const pathName=usePathname()
    // const colors = [
    //     {
    //         name: "default",
    //         class: "default-theme-color"
    //     },
    //     {
    //         name: "green",
    //         class: "green-theme-color"
    //     },
    //     {
    //         name: "yellow",
    //         class: "yellow-theme-color"
    //     },
    //     {
    //         name: "orange",
    //         class: "orange-theme-color"
    //     },
    //     {
    //         name: "pink",
    //         class: "pink-theme-color"
    //     },
    //     {
    //         name: "purple",
    //         class: "purple-theme-color"
    //     }
    // ]
    return (
        <div className={"py-6 px-4 grid grid-cols-12 gap-6 h-screen"}>
            <div
                className={"h-full col-span-4 py-6 rounded-[16px]  bg-surface-container-light dark:bg-surface-container-dark"}>

                <h2 className={" text-on-surface-light dark:text-on-surface-dark px-4 font-extrabold text-title-small "}>
                    Website Setting
                </h2>
                <ul className={"pt-2"}>
                    <Link href={"/admin/setting/website-info"} className={` transition-all duration-300 ease-in-out hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] px-4 h-[72px] flex items-center `}>
                        <Icon weight={400}
                              className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            web_asset
                        </Icon>
                        <div className={"flex-grow"}>
                            <h2 className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                Title & Logo
                            </h2>
                            <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Change website title, fav icon, logo & more...
                            </p>
                        </div>
                        <Icon weight={400}
                              className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            chevron_right
                        </Icon>
                    </Link>

                    <Link href={"/admin/setting/seo"} className={"transition-all duration-300 ease-in-out hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] px-4 h-[72px] flex items-center "}>
                        <Icon weight={400}
                              className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            analytics
                        </Icon>
                        <div className={"flex-grow"}>
                            <h2 className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                SEO Setting
                            </h2>
                            <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Change website SEO setting
                            </p>
                        </div>
                        <Icon weight={400}
                              className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            chevron_right
                        </Icon>
                    </Link>
                    <Link href={"/admin/setting/website-color"} className={"transition-all duration-300 ease-in-out hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] px-4 h-[72px] flex items-center "}>
                        <Icon weight={400}
                              className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            data_object
                        </Icon>
                        <div className={"flex-grow"}>
                            <h2 className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                Add Script
                            </h2>
                            <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                               Add additional script such analysis
                            </p>
                        </div>
                        <Icon weight={400}
                              className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            chevron_right
                        </Icon>
                    </Link>

                    <Link href={"/admin/setting/website-color"} className={"transition-all duration-300 ease-in-out hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] px-4 h-[72px] flex items-center "}>
                        <Icon weight={400}
                              className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            palette
                        </Icon>
                        <div className={"flex-grow"}>
                            <h2 className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                Color
                            </h2>
                            <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Change Website Color
                            </p>
                        </div>
                        <Icon weight={400}
                              className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            chevron_right
                        </Icon>
                    </Link>
                    <Link href={"/admin/setting/font"} className={"transition-all duration-300 ease-in-out hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] px-4 h-[72px] flex items-center "}>
                        <Icon weight={400}
                              className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            text_fields
                        </Icon>
                        <div className={"flex-grow"}>
                            <h2 className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                Font
                            </h2>
                            <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Change Website Font
                            </p>
                        </div>
                        <Icon weight={400}
                              className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            chevron_right
                        </Icon>
                    </Link>
                </ul>

                <div className={"px-4"}>
                    <div className={" h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>
                <h2 className={"mt-4 text-on-surface-light dark:text-on-surface-dark px-4 font-extrabold text-title-small "}>
                    Admin Setting
                </h2>
                <ul className={"py-2"}>
                    <Link href={"/admin/setting/website-color"} className={"px-4 h-[72px] flex items-center "}>
                        <Icon weight={400}
                              className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            person
                        </Icon>
                        <div className={"flex-grow"}>
                            <h2 className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                User Management
                            </h2>
                            <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Add user to access Admin Panel
                            </p>
                        </div>
                        <Icon weight={400}
                              className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            chevron_right
                        </Icon>
                    </Link>
                    <Link href={"/admin/setting/website-color"} className={"px-4 h-[72px] flex items-center "}>
                        <Icon weight={400}
                              className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            admin_panel_settings
                        </Icon>
                        <div className={"flex-grow"}>
                            <h2 className={"text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                Role Management
                            </h2>
                            <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Add user to access Admin Panel
                            </p>
                        </div>
                        <Icon weight={400}
                              className={" text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                              size={24}>
                            chevron_right
                        </Icon>
                    </Link>
                </ul>
            </div>
            <div className={"col-span-8"}>

                {children}


            </div>
        </div>
    )
}