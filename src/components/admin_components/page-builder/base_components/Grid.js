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

function Column({editDialogOpenComponentId,setEditDialogOpenComponentId,siteSetting,isDesktop,columnSizeDesktop,columnSizeMobile,item, idNumber, editItem,removeColumnFunc}) {
    const [addedItems, setAddedItems] = useState(item.addedItems)
    let [className, setClassName] = useState({})
    const handleAddedItemsToItem = (component, number) => {
        if (component.idType === "grid") {
            return alert("You can not add container or grid in grid")
        }
        let items = [...addedItems]
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
    }
    const editItemC = (number, key, value,unique) => {

        if (key === "className") {
            let newClassName =  className
            newClassName[unique] = value
            setClassName(newClassName)
            editItem(number,"className",  Object.values(newClassName).join(""),unique)
        }
        let items = [...addedItems]
        items[number] = {...items[number], [key]: value}
        setAddedItems(items)
        editItem(idNumber, "addedItems", items)
    }
    const removeItemFuncM =  (number) => {
        let items = [...addedItems]
        items.splice(number,1)
        setAddedItems(items)
        editItem(idNumber,"addedItems", items)
        if (items.length === 0) {
            removeColumnFunc()
        }
    }
    function drag(ev,id) {
        if(typeof id !== undefined && typeof id === "number"){
            let item = addedItems[id]
            ev.dataTransfer.setData("text", item.uid);
            ev.dataTransfer.setData("item", JSON.stringify(item));
        }else {

            ev.dataTransfer.setData("text", ev.target.id);
        }
    }
    return (
        <div key={item.uniqueId + "-gridm"}
             className={"z-[100]" + item?.widthNumber ? item.uniqueId + " " + `col-span-${isDesktop?columnSizeDesktop:columnSizeMobile}` : item.uniqueId + " " + "" + " " + item?.className}>
            {addedItems.map((l, i) =>
                <div key={item.uniqueId + i + "-g"} className={"relative group"}>
                    <DropContainer idNumber={i} handleAddedItems={handleAddedItemsToItem}/>
                    <ComponentGenerator editDialogOpenComponentId={editDialogOpenComponentId} setEditDialogOpenComponentId={setEditDialogOpenComponentId} siteSetting={siteSetting} dragFunc={drag} removeItemFunc={removeItemFuncM} isDesktop={isDesktop} idNumber={i} editItem={editItemC} item={l}/>
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
            columnSizeDesktop: [...this.props.item.columnSizeDesktop],
            columnSizeMobile: [...this.props.item.columnSizeMobile],
            addedItems: [...this.props.item.addedItems],
            renderStyles: this.props.item.styles,
            className:{},
            gapDesktop:  this.props.item.gapDesktop,
            gapMobile:  this.props.item.gapMobile,
            isSelected: false
        }
    }
    editItemC = (number, key, value,unique) => {

        if (key === "className") {

            let newClassName =  this.state.className
            newClassName[unique] = value
            this.setState({className: newClassName})
            // console.log(key,newClassName)
            this.props.editItem("className",  Object.values(newClassName).join(""),unique)
        }
        let items = [...this.state.addedItems]
        let columnSizesDesktop = [...this.state.columnSizeDesktop]
        let columnSizesMobile =  [...this.state.columnSizeMobile]
        items[number] = {...items[number], [key]: value}
        columnSizesDesktop.push(6);
        columnSizesMobile.push(12);
        if (items[items.length - 1]?.addedItems?.length !== 0) {
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
        this.setState({columnSizeDesktop: columnSizesDesktop})
        this.setState({columnSizeMobile: columnSizesMobile})

        this.props.editItem("columnSizeDesktop" , columnSizesDesktop)
        this.props.editItem( "columnSizeMobile", columnSizesMobile)
        this.props.editItem("addedItems", items)
    }


    render() {
        let {editDialogOpenComponentId,setEditDialogOpenComponentId,item, idNumber, editItem,removeItemFunc,dragFunc} = this.props
        let {isSelected, renderStyles} = this.state;
        const {isDesktop} = this.props;
        const baseClass = `p-4 hover:outline hover:outline-primary-light/[50%] group/grid grid grid-cols-12 justify-end w-full`
        const setIsSelected = (v) => {
            this.setState({isSelected: v});
        }
        const changeColumnSizeHandler = (number, value) => {
            let columnSizes = isDesktop ? [...this.state.columnSizeDesktop] : [...this.state.columnSizeMobile]
            columnSizes[number] = value;
            if (isDesktop){
                this.setState({columnSizeDesktop: columnSizes})
                editItem("columnSizeDesktop", columnSizes)
            }else{
                this.setState({columnSizeMobile: columnSizes})
                editItem("columnSizeMobile", columnSizes)
            }
        }
        const gapHandler = (value) => {
            isDesktop?this.setState({gapDesktop: value}) : this.setState({gapMobile: value});
            isDesktop?editItem("gapDesktop", value):editItem("gapMobile", value)
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
            editItem("styles", styles)
        }
        const removeColumnFunc = (number)=>{
            let items = [...this.state.addedItems]
            let columnSizesDesktop = [...this.state.columnSizeDesktop]
            let columnSizesMobile =  [...this.state.columnSizeMobile]
            items.splice(number, 1)
            columnSizesDesktop.splice(number, 1)
            columnSizesMobile.splice(number, 1)
            this.setState({addedItems: items})
            this.setState({columnSizeDesktop: columnSizesDesktop})
            this.setState({columnSizeMobile: columnSizesMobile})
            this.props.editItem("columnSizeDesktop" , columnSizesDesktop)
            this.props.editItem( "columnSizeMobile", columnSizesMobile)
            this.props.editItem("addedItems", items)
        }
        return (
            <div style={{justifyContent: "end", gridGap: this.state.gap + "px", ...renderStyles}} className={baseClass}>
                {this.state.addedItems.map((m, i) =>
                    <Column editDialogOpenComponentId={editDialogOpenComponentId} setEditDialogOpenComponentId={setEditDialogOpenComponentId} siteSetting={this.props.siteSetting} removeColumnFunc={()=>removeColumnFunc(i)} isDesktop={isDesktop} columnSizeDesktop={this.state.columnSizeDesktop[i]} columnSizeMobile={this.state.columnSizeMobile[i]} id={item.uniqueId} key={item.uniqueId + i + "-grid"}
                            idNumber={i} editItem={this.editItemC}
                            item={m}/>
                )}
                <div
                    className={"absolute  z-[999] hidden group-hover/grid:block  top-[0px] left-0 transform "}>
                    <div
                        className={"px-3  space-x-3 flex rounded-t-[0px] bg-primary-light dark:bg-primary-dark"}>
                        <button  onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
                            <Icon size={16}
                                  className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
                                edit
                            </Icon>
                        </button>
                        <button onDragOver={(event)=>{
                            event.preventDefault();
                              removeItemFunc()
                        }} onDragStart={(e) => dragFunc(e)} draggable={true}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
                            <Icon size={16}
                                  className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
                                drag_indicator
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full "}>
                            <Icon onClick={removeItemFunc} size={16}
                                  className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
                                delete
                            </Icon>
                        </button>
                    </div>
                </div>
                <EditorDialog isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false} setIsOpen={()=>setEditDialogOpenComponentId(null)}>
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
                            <input value={isDesktop?this.state.gapDesktop:this.state.gapMobile}
                                   onChange={(e) => checkIsNumber(e.target.value) ? gapHandler(e.target.value) : (e.target.value === null || e.target.value === "") ? gapHandler(0) : ""}
                                   className={"mt-2 text-center text-body-large px-4 bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-full border border-outline-light dark:border-outline-dark"}/>
                        </div>
                    </div>
                    <div className={"grid grid-cols-12 gap-4 py-2"}>
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

                        this.state.addedItems.length-1>i&&<div key={i}>

                            <label
                                className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                Column Number {i} Size is
                            </label>
                            <div
                                className={"w-11/12 mt-2 rounded-full ml-auto bg-surface-variant-light dark:bg-surface-variant-dark"}>
                                <div className={"grid grid-cols-12 gap-1 h-[40px]"}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, index) => <div
                                        className={`${(isDesktop?m === this.state.columnSizeDesktop[i]:m === this.state.columnSizeMobile[i]) ? "bg-primary-light text-on-primary-light dark:bg-primary-dark dark:text-on-primary-dark" : "bg-transparent text-on-surface-variant-light dark:text-on-surface-variant-dark"} h-[40px] cursor-pointer w-full flex justify-center items-center text-label-large rounded-full`}
                                        key={index} onClick={() => changeColumnSizeHandler(i, m)}>
                                        {m}
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    )}
                </EditorDialog>
            </div>
        )
    }
}

export default Grid