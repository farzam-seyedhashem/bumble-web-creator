'use client'
// import Column from "@admin/page-builder/base_components/Column";
import React, {useCallback, useEffect, useState} from "react";
import DropContainer from "@page_builder/DropContainer";
import ComponentGenerator from "@page_builder/ComponentGenerator";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import TextField from "@m3/text_fields/TextField";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";

function Column({item, idNumber, editItem, columnSize}) {
    const [addedItems, setAddedItems] = useState(item.addedItems)

    useEffect(() => {
        // setAddedItems(item.addedItems)
        console.log("colsize", columnSize)

    }, []);
    const handleAddedItemsToItem = (component, number) => {
        if (component.idType === "container" || component.idType === "grid") {
            return alert("You can not add container or grid in grid")
        }
        let items = [...addedItems]
        console.log("main component", component)
        if (number === 0) {
            items = [
                component,
                ...items
            ]
        } else {
            items = [
                ...items.slice(0, number),
                component,
                ...items.slice(number)
            ]
        }
        setAddedItems(items)
        editItem(idNumber, "addedItems", items)
        // editItem(idNumber,"addedItems",items)
    }
    const editItemC = (number, key, value) => {
        let items = [...addedItems]
        // items[number][key] = value;
        items[number] = {...items[number], [key]: value}
        setAddedItems(items)
        editItem(idNumber, "addedItems", items)
        // editItem(idNumber,"addedItems",items)
    }
    // useCallback( editItem(idNumber,"addedItems",addedItems),[addedItems])
    return (
        <div key={item.uniqueId + "-gridm"}
             className={"z-[100]" + item?.widthNumber ? item.uniqueId + " " + `col-span-${columnSize}` : item.uniqueId + " " + "" + " " + item?.className}>
            {addedItems.map((l, i) =>
                <div key={item.uniqueId + i + "-g"} className={"relative group"}>
                    <DropContainer idNumber={i} handleAddedItems={handleAddedItemsToItem}/>
                    <ComponentGenerator idNumber={i} editItem={editItemC} item={l}/>
                </div>
            )}
            <div className={"relative"}>
                <DropContainer key={item.uniqueId + "-g"} idNumber={addedItems.length}
                               handleAddedItems={handleAddedItemsToItem} firstItem={addedItems.length === 0}/>
            </div>
        </div>
    )
}

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columnSize: [...this.props.item.columnsSize],
            addedItems: [...this.props.item.addedItems],
            renderStyles: this.props.item.styles,
            gap: this.props.item.gap,
            isSelected: false
        }
        this.editItemC = this.editItemC.bind(this);
    }


    // {item, idNumber, editItem}
    // const [addedItems, setAddedItems] = useState()
    editItemC = (number, key, value) => {
        let items = [...this.state.addedItems]
        let columnSizes = [...this.state.columnSize]
        items[number] = {...items[number], [key]: value}
        columnSizes.push(6);
        // setAddedItems(items)
        if (items[items.length - 1].addedItems.length !== 0) {
            items = [...items, {
                "addedItems": [],
                "widthNumber": 1,
                "styles": {
                    "general": {
                        "padding": [
                            0,
                            0,
                            0,
                            0
                        ],
                        "height": "auto",
                        "borderRadius": "0"
                    },
                    "light": {
                        "backgroundColor": "transparent"
                    },
                    "dark": {
                        "backgroundColor": "transparent"
                    }
                }
            }]
        }
        this.setState({addedItems: items})


        this.setState({columnSize: columnSizes});
        this.props.editItem("columnsSize", columnSizes)
        this.props.editItem("addedItems", items)
    }



    render() {
        let {item, idNumber, editItem} = this.props
        let {isSelected, renderStyles} = this.state;
        const baseClass = `grid grid-cols-${item?.gridNumber} justify-end w-full`
        const setIsSelected = (v) => {
            this.setState({isSelected: v});
        }
        const changeColumnSizeHandler = (number, value) => {
            let columnSizes = [...this.state.columnSize]
            columnSizes[number] = value;
            this.setState({columnSize: columnSizes});
            editItem("columnsSize", columnSizes)
        }
        const gapHandler = (value) => {
            this.setState({gap: value});
            editItem("gap", value)
        }
        const checkIsNumber = (value) => {
            return value.match("^\\d+$") && parseInt(value) >= 0

        }
        const setRenderStyles = (value) => {
            this.setState({renderStyles: value})
        }
        const onChange = (name, value) => {
            let styles = {...renderStyles, [name]: value}
            setRenderStyles(styles)
            // classGenerator(styles)
            console.log(styles)
            editItem("styles", styles)
            // editItem("className", className)
        }
        return (
            <div style={{justifyContent:"end",gridGap: this.state.gap + "px" , ...renderStyles}} className={baseClass}>
                {this.state.addedItems.map((m, i) =>
                    <Column columnSize={this.state.columnSize[i]} id={item.uniqueId} key={item.uniqueId + i + "-grid"}
                            idNumber={i} editItem={this.editItemC}
                            item={m}/>
                )}
                <div
                    className={"absolute hidden group-hover:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                    <div
                        className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-secondary-container-dark bg-secondary-container-light"}>
                        <button onClick={() => setIsSelected(true)}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                edit
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                drag_indicator
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                delete
                            </Icon>
                        </button>
                    </div>
                </div>
                <EditorDialog isOpen={isSelected} setIsOpen={setIsSelected}>
                    <div>
                        <label
                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                            Columns Gap
                            <span
                                className={"ml-1 text-label-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            (px)
                                </span>
                        </label>
                        <div
                            className={"w-4/12 mt-2 rounded-full ml-auto"}>
                            <input value={this.state.gap}
                                   onChange={(e) => checkIsNumber(e.target.value) ? gapHandler(e.target.value) : (e.target.value === null || e.target.value === "") ? gapHandler(0) : ""}
                                   className={"mt-2 text-center text-body-large px-4 bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark"}/>
                        </div>
                    </div>
                    <div className={"grid grid-cols-12 gap-4 py-2"}>
                        {/*<div className={"col-span-6 justify-between items-center "}>*/}
                        {/*    <label*/}
                        {/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                        {/*        Justify Content*/}
                        {/*    </label>*/}
                        {/*    <div className={"w-full mt-2 justify-end"}>*/}
                        {/*        <select onChange={(e) => onChange("justifyContent", e.target.value)}*/}
                        {/*                type={"text"}*/}
                        {/*                value={renderStyles.justifyContent}*/}
                        {/*                className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>*/}
                        {/*            <option label={"start"} value={"start"}/>*/}
                        {/*            <option label={"center"} value={"center"}/>*/}
                        {/*            <option label={"end"} value={"end"}/>*/}
                        {/*            <option label={"space between"} value={"space-between"}/>*/}
                        {/*            <option label={"space around"} value={"space-around"}/>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={"col-span-6 justify-between items-center "}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Align Items
                            </label>
                            <div className={"w-full mt-2 justify-end"}>
                                <select onChange={(e) => onChange("alignItems", e.target.value)}
                                        type={"text"}
                                        value={renderStyles.alignItems}
                                        className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-4/12 border border-outline-light dark:border-outline-dark "}>
                                    <option label={"start"} value={"start"}/>
                                    <option label={"center"} value={"center"}/>
                                    <option label={"end"} value={"end"}/>
                                </select>
                            </div>
                        </div>
                    </div>
                    {this.state.addedItems.map((item, i) =>
                        <div key={i}>
                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Column Number {i} Size is
                            </label>
                            <div
                                className={"w-11/12 mt-2 rounded-full ml-auto bg-surface-variant-light dark:bg-surface-variant-dark"}>
                                <div className={"grid grid-cols-12 gap-1 h-[40px]"}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, index) => <div
                                        className={`${m === this.state.columnSize[i] ? "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light dark:text-on-surface-variant-dark"} h-[40px] cursor-pointer w-full flex justify-center items-center text-label-large rounded-full`}
                                        key={index} onClick={() => changeColumnSizeHandler(i, m)}>
                                        {m}
                                    </div>)}
                                </div>
                                {/*<input value={} onChange={(e)=}*/}
                                {/*    className={"mt-2 text-center text-body-large px-4 bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark "}/>*/}
                            </div>
                        </div>
                    )}

                    {/*<div className={"block items-center justify-between py-2"}>*/}
                    {/*    <label*/}
                    {/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                    {/*        Padding*/}
                    {/*    </label>*/}
                    {/*    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"paddingTop"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.paddingTop}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Top*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"paddingRight"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.paddingRight}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Right*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"paddingBottom"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.paddingBottom}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Bottom*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"paddingLeft"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.paddingLeft}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Left*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={"block items-center justify-between py-2"}>*/}
                    {/*    <label*/}
                    {/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                    {/*        Margin*/}
                    {/*    </label>*/}
                    {/*    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"marginTop"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.marginTop}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Top*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"marginRight"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.marginRight}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Right*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"marginBottom"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.marginBottom}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Bottom*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"marginLeft"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.marginLeft}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Left*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={"block items-center justify-between py-2"}>*/}
                    {/*    <label*/}
                    {/*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                    {/*        Border*/}
                    {/*    </label>*/}
                    {/*    <div className={"grid mt-2  ml-auto grid-cols-2 gap-2 items-center"}>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"borderTop"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.borderTop}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Top*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"borderRight"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.borderRight}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Right*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"borderBottom"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.borderBottom}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Bottom*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"w-full"}>*/}
                    {/*            <div>*/}
                    {/*                <TextFieldEditor id={"borderLeft"} onChange={onChange}*/}
                    {/*                                 defValue={renderStyles.borderLeft}/>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className={"mt-1 text-label-small mx-auto !justify-center text-center w-full  text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                    {/*                Left*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"col-span-2"}>*/}
                    {/*            /!*<div className={"w-full justify-between items-center "}>*!/*/}
                    {/*            /!*    <label*!/*/}
                    {/*            /!*        className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*!/*/}
                    {/*            /!*        Border Style*!/*/}
                    {/*            /!*    </label>*!/*/}
                    {/*            /!*    <div className={"w-full mt-2 justify-end"}>*!/*/}
                    {/*            /!*        <select*!/*/}
                    {/*            /!*            onChange={(e) => onChange("borderStyle", `${e.target.value} ${e.target.value} ${e.target.value} ${e.target.value}`)}*!/*/}
                    {/*            /!*            value={renderStyles.borderStyle.split(" ")[0]}*!/*/}
                    {/*            /!*            className={"w-full text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark border border-outline-light dark:border-outline-dark "}>*!/*/}
                    {/*            /!*            <option label={"Solid"} value={"solid"}/>*!/*/}
                    {/*            /!*            <option label={"Doted"} value={"dotted"}/>*!/*/}
                    {/*            /!*            <option label={"Dashed"} value={"dashed"}/>*!/*/}
                    {/*            /!*        </select>*!/*/}
                    {/*            /!*    </div>*!/*/}
                    {/*            /!*</div>*!/*/}
                    {/*            <div className={"flex justify-between items-center pt-4 pb-2"}>*/}
                    {/*                <label*/}
                    {/*                    className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                    {/*                    Border color*/}
                    {/*                </label>*/}
                    {/*                <ColorPicker*/}
                    {/*                    onChange={(value) => onChange("borderColor", value)}*/}
                    {/*                    value={renderStyles.borderColor}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </EditorDialog>
                {/*<div className={" flex items-center h-[64px] justify-center w-full bg-surface-variant-light dark:bg-surface-variant-dark"}>*/}
                {/*    <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                {/*        add*/}
                {/*    </Icon>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Grid