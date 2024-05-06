import Checkbox from "@m3/checkboxes/Checkbox";
import FilterChips from "@m3/chips/FilterChips";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import InventoryCard from "@admin/admin-panel/inventory-card/InventoryCard";
import {useState} from "react";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import TextField from "@m3/text_fields/TextField";
import Divider from "@m3/dividers/Divider";

export default function InventoryEditor() {
    const [inventoryCard, setInventoryCard] = useState({
        showReadMoreButton: true,
        showInventoryInfo: true,
        buttonType: 0,
        titleType: "h3",
        readMore: true,
        showVehicleInfo: true,
        cardColor:"#fafafa",
        titleColor:"#212121",
        priceColor:"#28a348",
        priceBgColor:"#ededed",
        inventoryInfoColor:"#212121",
        inventoryInfoBgColor:"#fafafa",
        inventoryBgInfoColor:"#f2f2f2",
        buttonColor:"#ffffff",
        buttonBgColor:"#212121",
        // cardColor:"#f2f2f2"

    });
    const [inventoryCardType, setInventoryCardType] = useState(0);
    const [inventoryInfoSelected, setInventoryInfoSelected] = useState(["miles", "interior", "est"])
    const updateInventoryCard = (key, value) => {
        setInventoryCard({...inventoryCard, [key]: value})
    }
    const handleInventoryInfoSelected = (key) => {
        let is = [...inventoryInfoSelected]
        const l = inventoryInfoSelected.indexOf(key)
        if (l === -1) {
            is.push(key)
            setInventoryInfoSelected(is)
        } else {
            // console.log(is)
            // is = is.slice(l, 1)
            // console.log(is)
            setInventoryInfoSelected(is.filter(item => item !== key))
        }

    }
    return (
        <>
            <div
                className={" bg-surface-container-light dark:bg-surface-container-dark  flex items-center justify-between px-4 h-[64px]"}>
                <h1 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large"}>
                    Inventory
                </h1>
                <Button icon={"save"} type={"filled"}
                        className={""}>
                    Save
                </Button>
            </div>
            <div className={"flex space-x-4 h-[calc(100vh_-_64px)] justify-between "}>
                <div className={"space-y-4 md:w-6/12 xl:w-7/12 py-4 overflow-scroll"}>

                    <div className={"px-6  max-w-lg"}>
                        <div className="relative h-[56px]">
                            <select onChange={(e) => setInventoryCardType(parseInt(e.target.value))}
                                    value={inventoryCardType}
                                    className="outline-none peer h-full w-full rounded-[4px] border  border-outline-light dark:border-outline-dark border-t-transparent bg-transparent px-3 py-2.5 font-sans text-body-large font-normal text-on-surface-light dark:text-on-surface-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-light dark:placeholder-shown:border-primary-dark  placeholder-shown:border-t-primary-light dark:placeholder-shown:border-t-primary-dark empty:!bg-gray-900 focus:border-2 focus:border-primary-light dark:focus:border-primary-dark focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

                                <option label={"Type One"} value={0}/>
                                <option label={"Type Two"} value={1}/>
                                <option label={"Type Three"} value={2}/>
                                <option label={"Type Four"} value={3}/>
                                <option label={"Type Five"} value={4}/>
                                <option label={"Type Six"} value={5}/>

                            </select>
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-body-small font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-[4px] before:border-t before:border-l before:border-outline-light dark:before:border-outline-dark before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-[4px] after:border-t after:border-r after:border-outline-light dark:after:border-outline-dark after:transition-all peer-placeholder-shown:text-body-small peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-light dark:peer-placeholder-shown:text-primary-dark  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-body-small peer-focus:leading-tight dark:peer-focus:text-primary-dark peer-focus:text-primary-light peer-focus:before:border-t-2 peer-focus:before:border-l-2 dark:peer-focus:before:border-primary-dark peer-focus:before:border-primary-light peer-focus:after:border-t-2 peer-focus:after:border-r-2 dark:peer-focus:after:border-primary-dark peer-focus:after:border-primary-light peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ">
                                Select a City
                            </label>
                        </div>
                    </div>
                    <Divider type={"inset"}/>
                    <div className={"px-2"}>
                        {inventoryCardType !== 0 && <Checkbox label={"'Read More' Button"} color={"primary"}
                                                              onChange={(v) => updateInventoryCard("showReadMoreButton", !inventoryCard.showReadMoreButton)}
                                                              isCheck={inventoryCard.showReadMoreButton}/>}
                        <Checkbox
                            onChange={(v) => updateInventoryCard("showVehicleInfo", !inventoryCard.showVehicleInfo)}
                            label={"Show Vehicle More Info"} color={"primary"}
                            isCheck={inventoryCard.showVehicleInfo}/>
                    </div>
                    <Divider type={"inset"}/>
                    <div className={"px-6"}>
                        <label
                            className={"flex mb-2 items-center font-medium text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Inventory Info
                        </label>
                        <div className={"*:inline-flex max-w-xl space-y-2 *:mr-2"}>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("miles") !== -1}
                                         onChange={() => handleInventoryInfoSelected("miles")}
                                         label="Miles"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("interior") !== -1}
                                         onChange={() => handleInventoryInfoSelected("interior")}
                                         label="Interior Color"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("est") !== -1}
                                         onChange={() => handleInventoryInfoSelected("est")}
                                         label="Est. payment"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("exterior") !== -1}
                                         onChange={() => handleInventoryInfoSelected("exterior")}
                                         label="Exterior Color"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("body_type") !== -1}
                                         onChange={() => handleInventoryInfoSelected("body_type")}
                                         label="Body Type"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("trim") !== -1}
                                         onChange={() => handleInventoryInfoSelected("trim")} label="Trim"/>
                            <FilterChips isChecked={inventoryInfoSelected.indexOf("fuel_type") !== -1}
                                         onChange={() => handleInventoryInfoSelected("fuel_type")}
                                         label="Fuel Type"/>
                        </div>
                    </div>
                    <Divider type={"inset"}/>
                    {inventoryCardType!==5&&<div className={"px-6 space-y-4"}>
                        <label
                            className={" block text-title-small  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Card Styles
                        </label>
                        <div
                            className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div>
                                <ColorPicker value={inventoryCard.cardColor}
                                             onChange={(value) => updateInventoryCard("cardColor", value)} isLeft/>
                            </div>
                            <div className={"ml-4"}>
                                <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                    Background Color
                                </h3>
                                <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Change Inventory Card background Color
                                </p>
                            </div>

                        </div>
                    </div>}
                    <Divider type={"inset"}/>
                    <div className={"px-6 space-y-4"}>
                        <label
                            className={" block text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Title Styles
                        </label>
                        <div
                            className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div>
                                <ColorPicker value={inventoryCard.titleColor}
                                             onChange={(value) => updateInventoryCard("titleColor", value)} isLeft/>
                            </div>
                            <div className={"ml-4"}>
                                <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                    Color
                                </h3>
                                <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Change Inventory Name Color
                                </p>
                            </div>
                        </div>
                        {/*<div className={"w-6/12"}>*/}
                        {/*    <TextField defaultValue={"24px"} label={"Title Font Size"}/>*/}
                        {/*</div>*/}
                        <div className={" max-w-xl grid grid-cols-6 gap-4"}>
                            {["h1", "h2", "h3", "h4", "h5", "h6"].map((item, index) => <div key={index}
                                                                                            onClick={() => updateInventoryCard("titleType", item)}
                                                                                            className={`relative overflow-hidden ${inventoryCard.titleType === item ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[80px] flex items-center justify-center `}>
                                <div
                                    className={` ${inventoryCard.titleType === item ? "text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark" : "text-surface-container-light dark:text-surface-container-dark bg-on-surface-variant-light dark:bg-on-surface-variant-dark"} text-body-medium font-medium flex justify-center rounded-[8px] items-center w-[32px] h-[32px] `}>
                                    {item.toUpperCase()}
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <Divider type={"inset"}/>

                    <div className={"px-6 space-y-4"}>
                        <label
                            className={" block text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Inventory Info Styles
                        </label>

                        <div
                            className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div>
                                <ColorPicker value={inventoryCard.inventoryInfoColor}
                                             onChange={(value) => updateInventoryCard("inventoryInfoColor", value)}
                                             isLeft/>
                            </div>
                            <div className={"ml-4"}>
                                <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                    Color
                                </h3>
                                <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Change inventory info text color
                                </p>
                            </div>

                        </div>
                        {inventoryCardType===0&&<div
                            className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div>
                                <ColorPicker value={inventoryCard.inventoryBgInfoColor}
                                             onChange={(value) => updateInventoryCard("inventoryBgInfoColor", value)}
                                             isLeft/>
                            </div>
                            <div className={"ml-4"}>
                                <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                    Background Color
                                </h3>
                                <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Change inventory info background color
                                </p>
                            </div>

                        </div>}
                        {/*<div className={"w-6/12"}>*/}
                        {/*    <TextField defaultValue={"24px"} label={"Font Size"}/>*/}
                        {/*</div>*/}

                    </div>
                    <Divider type={"inset"}/>
                    <div className={"px-6 space-y-4"}>
                        <label
                            className={" block text-title-small  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Price Styles
                        </label>

                        <div
                            className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div>
                                <ColorPicker value={inventoryCard.priceColor}
                                             onChange={(value) => updateInventoryCard("priceColor", value)} isLeft/>
                            </div>
                            <div className={"ml-4"}>
                                <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                    Color
                                </h3>
                                <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Change inventory price text color
                                </p>
                            </div>

                        </div>
                        {inventoryCardType===0&&<div
                            className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            <div>
                                <ColorPicker value={inventoryCard.priceBgColor}
                                             onChange={(value) => updateInventoryCard("priceBgColor", value)} isLeft/>
                            </div>
                            <div className={"ml-4"}>
                                <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                    Background Color
                                </h3>
                                <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Change inventory price Background color
                                </p>
                            </div>

                        </div>}

                        {/*<div className={"w-6/12"}>*/}
                        {/*    <TextField defaultValue={"24px"} label={"Font Size"}/>*/}
                        {/*</div>*/}
                    </div>
                    {(inventoryCard.showReadMoreButton && inventoryCardType !== 0 && inventoryCardType !== 3)&&<Divider type={"inset"}/>}

                    {(inventoryCard.showReadMoreButton && inventoryCardType !== 0 && inventoryCardType !== 3) &&
                        <div className={"px-6 space-y-4"}>
                            <label
                                className={" block text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                Button Styles
                            </label>
                            <div className={" max-w-xl grid grid-cols-3 gap-4"}>
                                <div onClick={() => updateInventoryCard("buttonType", 0)}
                                     className={`relative overflow-hidden ${inventoryCard.buttonType === 0 ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[140px] flex items-center justify-center `}>
                                    <Button
                                        className={inventoryCard.buttonType !== 0 && "text-surface-container-light dark:text-surface-container-dark bg-on-surface-variant-light dark:bg-on-surface-variant-dark"}
                                        type={"filled"}>
                                        Read More
                                    </Button>
                                    <div className={"absolute inset-0"}/>
                                </div>
                                <div onClick={() => updateInventoryCard("buttonType", 1)}
                                     className={`relative overflow-hidden ${inventoryCard.buttonType === 1 ? "bg-secondary-container-light dark:bg-secondary-container-dark" : "bg-surface-container-light dark:bg-surface-container-dark"} w-full rounded-[12px] h-[140px] flex items-center justify-center `}>
                                    <a className={`relative ${inventoryCard.buttonType !== 1 ? "text-on-surface-variant-light dark:text-on-surface-variant-dark" : "text-primary-light dark:text-primary-dark"}  text-label-large flex items-center`}>
                                        Read More
                                        <Icon className={"text-[16px] font-medium ml-2"} weight={500}
                                              size={16}>
                                            arrow_forward
                                        </Icon>

                                    </a>
                                    <div className={"absolute inset-0"}/>
                                </div>

                            </div>

                            {inventoryCard.buttonType===0&&<div
                                className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                                <div>
                                    <ColorPicker value={inventoryCard.buttonColor}
                                                 onChange={(value) => updateInventoryCard("buttonColor", value)}
                                                 isLeft/>
                                </div>
                                <div className={"ml-4"}>
                                    <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                        Color
                                    </h3>
                                    <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                        Change inventory button text color
                                    </p>
                                </div>
                            </div>}
                            {inventoryCard.buttonType===0&&<div
                                className={"py-4 flex items-center px-4 rounded-[12px] max-w-xs  border border-outline-variant-light dark:border-outline-variant-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                                <div>
                                    <ColorPicker value={inventoryCard.buttonBgColor}
                                                 onChange={(value) => updateInventoryCard("buttonBgColor", value)}
                                                 isLeft/>
                                </div>
                                <div className={"ml-4"}>
                                    <h3 className={"text-title-small text-on-surface-light dark:text-on-surface-dark font-medium "}>
                                        Background Color
                                    </h3>
                                    <p className={"text-body-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                        Change inventory button background color
                                    </p>
                                </div>
                            </div>}
                             {/*<div className={"w-6/12"}>*/}
                            {/*    <TextField defaultValue={"24px"} label={"Font Size"}/>*/}
                            {/*</div>*/}

                        </div>}


                </div>

                <div
                    className={"mt-4 md:w-6/12 xl:w-5/12 h-[calc(100%_-_32px)] bg-surface-container-low-light rounded-[24px]"}>
                    <div
                        style={{background: "repeating-linear-gradient(45deg,transparent,rgba(0,0,0,.04) 4px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 8px,transparent 16px)"}}
                        className={"flex h-full items-center justify-center rounded-[24px] w-full py-6 px-6 "}>
                        <InventoryCard inventoryInfoSelected={inventoryInfoSelected}
                                       inventoryCard={inventoryCard} type={inventoryCardType}/>
                    </div>
                </div>
            </div>
        </>
    )
}