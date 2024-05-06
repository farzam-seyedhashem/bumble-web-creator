import Icon from "@m3/assets/icons/Icon";
import {useEffect, useState} from "react";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import TextField from "@m3/text_fields/TextField";
import TextArea from "@m3/TextArea";
import IconPicker from "@page_builder/editor_components/IconPicker";
import Button from "@m3/buttons/Button";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";

export default function FeatureSection({item, editItem,isDesktop,removeItemFunc,dragFunc}) {
    // const [cardShape, setCardShape] = useState(item)
    const [isSelected, setIsSelected] = useState(false)
    const [featuredSections, setFeaturedSections] = useState(item?.featuredSections)
    const [selectedTab,setSelectedTab] = useState(0)
    const [options,setOptions] = useState(isDesktop?{...item.globalOptions,...item.desktopOptions}:{...item.globalOptions,...item.mobileOptions})
   const [globalOptions,setGlobalOptions] = useState(item.globalOptions)
   const [deviceOptions,setDeviceOptions] = useState(isDesktop?item.desktopOptions:item.mobileOptions)
    useEffect(() => {
        setOptions(isDesktop?{...item.globalOptions,...item.desktopOptions}:{...item.globalOptions,...item.mobileOptions})
        setDeviceOptions(isDesktop?item.desktopOptions:item.mobileOptions)
    },[isDesktop])
    const handleAddItem = (index, name, value) => {
        let featuredSectionsC = [...featuredSections]
        featuredSectionsC[index][name] = value
        setFeaturedSections(featuredSectionsC)
        editItem("featuredSections", featuredSectionsC)
    }
    const addNewFeatureSection = () => {
        let newFeatruedSections = [...featuredSections]
        newFeatruedSections = [...newFeatruedSections, {
            "title": "Lorem Ipsum",
            "paragraph": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi",
            "icon": {
                "name": "star",
                "type": "",
                "isFilled": true
            }
        }]
        setFeaturedSections(newFeatruedSections)
        console.log("welknf", newFeatruedSections)
        editItem("featuredSections", newFeatruedSections)
    }
    const editOptions = (name,value) => {
        let newOptions = {...options,[name]:value}
        if (deviceOptions[name]) {
            setDeviceOptions({...deviceOptions,[name]:value})
            editItem(isDesktop?"desktopOptions":"mobileOptions",{...deviceOptions,[name]:value})
        }else{
            setGlobalOptions({...globalOptions,[name]:value})
            editItem("globalOptions",{...globalOptions,[name]:value})
        }
        setOptions(newOptions)

    }
    const removeFeaturedSections = (index) => {
        let newFeatruedSections = [...featuredSections]
        newFeatruedSections.splice(index, 1)
        setFeaturedSections(newFeatruedSections)
        editItem("featuredSections", newFeatruedSections)
    }
    return (
        <>
            <div className={`relative group/featured-section`}>
                <div className={`grid grid-cols-${options.gridNumber} gap-4`}>
                    {/*    "options": {*/}
                    {/*    "iconColor": "#ffffff",*/}
                    {/*    "iconBgColor": "#000000",*/}
                    {/*    "cardColor": "#fafafa",*/}
                    {/*    "paragraphColor": "#212121",*/}
                    {/*    "titleColor": "#000000",*/}
                    {/*    "titleFontSize": "24px",*/}
                    {/*    "titleFontWeight": "900",*/}
                    {/*    "paragraphFontSize": "24px",*/}
                    {/*    "paragraphFontWeight": "24px",*/}
                    {/*    "cardRounded": "12px",*/}
                    {/*},*/}
                    {featuredSections.map((item, index) => options.cardShape === 1 ? <div key={index}>

                        <div style={{backgroundColor:options.cardColor}}
                            className="relative group flex rounded-[32px] hover:rounded-2xl transition-all duration-300 ease-in-out dark:hover:bg-surface-container-highest-dark hover:bg-surface-container-highest-light bg-surface-container-light dark:bg-surface-container-dark py-4 px-8">

                            <dt>
                                <options.titleType style={{color:options.titleColor,fontSize:options.titleFontSize,fontWeight:options.titleFontWeight}} className="mt-4 text-primary-light dark:text-primary-dark mb-2 text-2xl leading-[40px] font-bold">{item.title}</options.titleType>
                                <p style={{color:options.paragraphColor,fontSize:options.paragraphFontSize,fontWeight:options.paragraphFontWeight}}  className="mb-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">

                                    {item.paragraph}

                                </p>
                            </dt>

                            <div
                                className="h-12 w-12 mt-1 mr-1 flex justify-center items-center">
                                <svg style={{color: options.iconBgColor}} width="40px" height="40px" viewBox="0 0 40 40"
                                     fill="none" xmlns="http://www.w3.org/2000/svg" className="clover">
                                    <path
                                        d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
                                        fill="currentColor"></path>
                                </svg>
                                <Icon style={{color: options.iconColor}} fill={item.icon.isFilled ? 1 : 0} weight={400} size={24}
                                      className={"w-6 h-6 absolute group-hover:scale-110 transition duration-300"}>
                                    {item.icon.name}
                                </Icon>
                            </div>

                        </div>


                    </div> : options.cardShape === 2 ? <div className={"flex"}>
                        <Icon style={{color: options.iconColor}} weight={400} size={24} fill={item.icon.isFilled ? 1 : 0}
                              className={"text-primary-light dark:text-primary-dark mr-4"}>
                            {item.icon.name}
                        </Icon>
                        <div>
                            <options.titleType style={{color:options.titleColor,fontSize:options.titleFontSize,fontWeight:options.titleFontWeight}} className={"font-bold mb-1 text-on-surface-light dark:text-on-surface-dark"}>
                                {item.title}
                            </options.titleType>
                            <p style={{color:options.paragraphColor,fontSize:options.paragraphFontSize,fontWeight:options.paragraphFontWeight}} className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                {item.paragraph}
                            </p>
                        </div>
                    </div> : <div>
                        <div style={{backgroundColor: options.iconBgColor}}
                            className={"flex items-center justify-center rounded-[8px] h-[48px] w-[48px]"}>
                            <Icon style={{color: options.iconColor}} weight={400} size={24} fill={item.icon.isFilled ? 1 : 0}
                                  className={"text-on-primary-light dark:text-on-primary-dark"}>
                                {item.icon.name}
                            </Icon>
                        </div>
                        <div className={"mt-3"}>
                            <options.titleType style={{color:options.titleColor,fontSize:options.titleFontSize,fontWeight:options.titleFontWeight}} className={"font-bold mb-1 text-on-surface-light dark:text-on-surface-dark"}>
                                {item.title}
                            </options.titleType>
                            <p style={{color:options.paragraphColor,fontSize:options.paragraphFontSize,fontWeight:options.paragraphFontWeight}} className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                {item.paragraph}
                            </p>
                        </div>
                    </div>)}

                </div>

                <div
                    className={`absolute z-[888] hidden group-hover/featured-section:block  -top-[24px] left-1/2 -translate-x-1/2 transform `}>
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
            <EditorDialog isOpen={isSelected} setIsOpen={setIsSelected}>
                <div className={"flex items-center justify-center"}>
                    <div
                        className={`w-6/12 h-[40px] flex items-center justify-center  ${selectedTab === 0 ? "border-b-2 border-primary-light dark:border-primary-dark" : "border-b border-outline-variant-light dark:border-outline-variant-dark"} `}
                        onClick={() => setSelectedTab(0)}>
                        Content
                    </div>
                    <div
                        className={`w-6/12 h-[40px] flex items-center justify-center ${selectedTab === 1 ? "border-b-2 border-primary-light dark:border-primary-dark" : "border-b border-outline-variant-light dark:border-outline-variant-dark"} `}
                        onClick={() => setSelectedTab(1)}>
                        Styles
                    </div>
                </div>
                <div className={`p-4 ${selectedTab === 0 ? "block" : "hidden"}`}>
                    <label
                        className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
                        Add Item
                    </label>
                    <div className={"space-y-2"}>
                        {featuredSections.map((item, index) => (
                            <div className={"space-y-2"} key={index}>
                                <TextField label={"Title"} defaultValue={item.title}
                                           onChange={(e) => handleAddItem(index, "title", e.target.value)}/>
                                <TextArea label={"Description"} defaultValue={item.paragraph}
                                          onChange={(e) => handleAddItem(index, "paragraph", e.target.value)}/>
                                <IconPicker label={"Icon"} isFill={item.icon.isFilled} defValue={item.icon.name}
                                            onIconSelect={(v, isFilled) => handleAddItem(index, "icon", {
                                                "name": v,
                                                "isFilled": isFilled
                                            })}/>
                                <div className={"flex justify-end"}>
                                <button className={"flex items-center text-error-light dark:text-error-dark"} onClick={() => removeFeaturedSections(index)}>
                                    <Icon size={20} className={"mr-1 text-error-light dark:text-error-dark"}>
                                        delete
                                    </Icon>
                                    remove item
                                </button>
                                </div>
                                {/*<TextArea label={"description"} value={item.paragraph} onChange={(e)=>handleAddItem(index,"paragraph",e.target.value)} />*/}
                            </div>
                        ))}
                        <div className={"flex pt-2 justify-center"}>
                            <Button icon={"add"} onClick={addNewFeatureSection} type="tonal">

                                Add New Item
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={` ${selectedTab === 1 ? "block" : "hidden"}`}>

                    <div className={"flex justify-between items-center pt-4 pb-2"}>
                        <label
                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Title Color
                        </label>
                        <ColorPicker onChange={(value) => editOptions("titleColor", value)}
                                     value={options.titleColor}/>

                    </div>
                    <div className={"flex justify-between items-center pt-4 pb-2"}>
                        <label
                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Description Color
                        </label>
                        <ColorPicker onChange={(value) => editOptions("paragraphColor", value)}
                                     value={options.paragraphColor}/>

                    </div>
                    <div className={"flex justify-between items-center pt-4 pb-2"}>
                        <label
                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Card Color
                        </label>
                        <ColorPicker onChange={(value) => editOptions("cardColor", value)}
                                     value={options.cardColor}/>

                    </div>
                    <div className={"flex justify-between items-center pt-4 pb-2"}>
                        <label
                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Icon Background Color
                        </label>
                        <ColorPicker onChange={(value) => editOptions("iconBgColor", value)}
                                     value={options.iconBgColor}/>

                    </div>
                    <div className={"flex justify-between items-center pt-4 pb-2"}>
                        <label
                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Icon color
                        </label>
                        <ColorPicker onChange={(value) => editOptions("iconColor", value)}
                                     value={options.iconColor}/>

                    </div>


                    <div className={" mt-2 justify-end"}>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Title Type
                        </label>
                        <div
                            className={"flex w-fit ml-auto mt-2  border border-primary-light dark:border-primary-dark rounded-full"}>
                            <button onClick={() => editOptions("titleType", "h1")}
                                    className={`${options.titleType === "h1" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                H1
                            </button>
                            <button onClick={() => editOptions("titleType", "h2")}
                                    className={`${options.titleType === "h2" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                H2
                            </button>
                            <button onClick={() => editOptions("titleType", "h3")}
                                    className={`${options.titleType === "h3" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                H3
                            </button>
                            <button onClick={() => editOptions("titleType", "h4")}
                                    className={`${options.titleType === "h4" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                H4
                            </button>
                            <button onClick={() => editOptions("titleType", "h5")}
                                    className={`${options.titleType === "h5" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                H5
                            </button>
                            <button onClick={() => editOptions("titleType", "h6")}
                                    className={`${options.titleType === "h6" ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} px-2 py-1 rounded-full text-label-large`}>
                                H6
                            </button>
                        </div>
                    </div>

                    <div className={"grid grid-cols-12 gap-4 py-2"}>
                        <div className={"col-span-7 justify-between items-center "}>
                            <label
                                className={" text-label-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Title Font Weight
                            </label>
                            <div className={"w-full mt-2 justify-end"}>
                                <select onChange={(e) => editOptions("titleFontWeight", e.target.value)}
                                        type={"text"}
                                        value={options.titleFontWeight}
                                        className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>
                                    <option label={"light"} value={"300"}/>
                                    <option label={"normal"} value={"400"}/>
                                    <option label={"medium"} value={"500"}/>
                                    <option label={"bold"} value={"700"}/>
                                    <option label={"black"} value={"900"}/>
                                </select>
                            </div>
                        </div>
                        <div className={"col-span-5 justify-between items-center"}>
                            <label
                                className={" text-label-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Title Font Size
                            </label>
                            {/*<div className={"w-full relative mt-2 justify-end"}>*/}
                            {/*    <input*/}
                            {/*        onChange={(e) => checkPX(e.target.value) ? onChange("fontSize", e.target.value + "px") : ""}*/}
                            {/*        type={"text"}*/}
                            {/*        value={renderStyles.fontSize.replace("px", "")}*/}
                            {/*        className={"text-center text-body-large pr-8 bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>*/}
                            {/*    <label*/}
                            {/*        className={"font-medium text-label-large text-on-surface-variant-dark absolute top-1/2 transform -translate-y-1/2 right-3"}>*/}
                            {/*        PX*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"titleFontSize"} onChange={editOptions}
                                                 defValue={options.titleFontSize}/>
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-12 gap-4 py-2"}>
                        <div className={"col-span-7 justify-between items-center "}>
                            <label
                                className={" text-label-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Description Font Weight
                            </label>
                            <div className={"w-full mt-2 justify-end"}>
                                <select onChange={(e) => editOptions("paragraphFontWeight", e.target.value)}
                                        type={"text"}
                                        value={options.paragraphFontWeight}
                                        className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>
                                    <option label={"light"} value={"300"}/>
                                    <option label={"normal"} value={"400"}/>
                                    <option label={"medium"} value={"500"}/>
                                    <option label={"bold"} value={"700"}/>
                                    <option label={"black"} value={"900"}/>
                                </select>
                            </div>
                        </div>
                        <div className={"col-span-5 justify-between items-center"}>
                            <label
                                className={" text-label-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Description Font Size
                            </label>
                            {/*<div className={"w-full relative mt-2 justify-end"}>*/}
                            {/*    <input*/}
                            {/*        onChange={(e) => checkPX(e.target.value) ? onChange("fontSize", e.target.value + "px") : ""}*/}
                            {/*        type={"text"}*/}
                            {/*        value={renderStyles.fontSize.replace("px", "")}*/}
                            {/*        className={"text-center text-body-large pr-8 bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>*/}
                            {/*    <label*/}
                            {/*        className={"font-medium text-label-large text-on-surface-variant-dark absolute top-1/2 transform -translate-y-1/2 right-3"}>*/}
                            {/*        PX*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            <div className={"mt-2"}>
                                <TextFieldEditor id={"paragraphFontSize"} onChange={editOptions}
                                                 defValue={options.paragraphFontSize}/>
                            </div>
                        </div>
                        <div className={"col-span-7 justify-between items-center "}>
                            <label
                                className={" text-label-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Column number in one row
                            </label>
                            <div className={"w-full mt-2 justify-end"}>
                                <select onChange={(e) => editOptions("gridNumber", e.target.value)}
                                        type={"text"}
                                        value={options.gridNumber}
                                        className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>
                                    <option label={"1"} value={"1"}/>
                                    <option label={"2"} value={"2"}/>
                                    <option label={"3"} value={"3"}/>
                                    <option label={"4"} value={"4"}/>
                                    <option label={"5"} value={"5"}/>
                                    <option label={"6"} value={"6"}/>
                                    <option label={"7"} value={"7"}/>
                                    <option label={"8"} value={"8"}/>
                                    <option label={"9"} value={"9"}/>
                                    <option label={"10"} value={"10"}/>
                                    <option label={"11"} value={"11"}/>
                                    <option label={"12"} value={"12"}/>
                                </select>
                            </div>
                        </div>
                        <div className={"col-span-5 justify-between items-center "}>
                            <label
                                className={" text-label-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Card Type
                            </label>
                            <div className={"w-full mt-2 justify-end"}>
                                <select onChange={(e) => editOptions("cardShape", parseInt(e.target.value))}
                                        type={"text"}
                                        value={options.cardShape}
                                        className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>
                                    <option label={"Shape One"} value={1}/>
                                    <option label={"Shape Two"} value={2}/>
                                    <option label={"Shape Three"} value={3}/>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </EditorDialog>
        </>
    )
}