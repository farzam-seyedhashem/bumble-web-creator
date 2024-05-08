'use client'
import React, {useContext, useEffect, useState} from "react";
import Data from '../../../Components.json'
import {v4 as uuidv4} from 'uuid';
import {useDrop} from "react-dnd";
// import fs from 'fs';

// const DropZone = styled(MuiBox, {
//     shouldForwardProp: (prop) => prop !== 'firstItem' && prop !== 'onDrag',
// })(({theme, firstItem, onDrag}) => ({
//     ...(firstItem ? {
//         padding: '21px 0px',
//         color: 'rgba(0, 0, 0, 0.38)',
//         textAlign: 'center',
//         transition: 'all 300ms ease-in-out',
//         fontSize: 16,
//         lineHeight: 1.38,
//         backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)',
//     } : {
//         padding: '4px 0px',
//         color: 'rgba(0, 0, 0, 0.38)',
//         textAlign: 'center',
//         transition: 'all 300ms ease-in-out',
//         fontSize: 16,
//         lineHeight: 1.38,
//         backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.0)' : 'rgba(255, 255, 255, 0.0)',
//     }),
//     ...(onDrag && {
//         padding: '29px 0px',
//         textAlign: 'center',
//         fontSize: 16,
//         lineHeight: 1.38,
//         backgroundColor: alpha(theme.palette.primary.main, .1) + '!important',
//         color: theme.palette.primary.main + '!important',
//     })
// }))

function deepFreeze(object) {
    // // Retrieve the property names defined on object
    // const propNames = Object.getOwnPropertyNames(object);
    //
    // // Freeze properties before freezing self
    //
    // for (const name of propNames) {
    //     const value = object[name];
    //
    //     if (value && typeof value === "object") {
    //         deepFreeze(value);
    //     }
    // }
    //
    // return Object.freeze(object);
}

export default function DropContainer({handleAddedItems, firstItem, idNumber}) {
    // const file = await fs.readFile(process.cwd() + '/app/Components.json', 'utf8');
    // const Data = JSON.parse(file);

    const [onDrag, setOnDrag] = React.useState(false)
    const [onDrop, setOnDrop] = React.useState(false)
    const [data, setData] = useState()
    const [onDragStart, setOnDragStart] = React.useState(false)
    // const {components} = Data;
    useEffect(() => {
        // setData(Data)
    }, []);
    // const {t} = useTranslation('page-editor')
    const allowDrop = (ev) => {
        ev.preventDefault();

    }

    // const drop = (ev) => {

        // console.log(data)
        // setItems()
        // const item = Sections.sections[props.selectedTab].childes.find(item => item.id === data)
        // handleSelected(item, props.itemNumber)
    //
    // }

    const removeStyle = () => {

    }
    const onDragClass = "h-[64px] bg-secondary-container-light  text-on-secondary-container-light "
    const firstItemClasses = "bg-surface-container-high-light   text-on-surface-variant-light  h-[64px]"
    const normalClasses = "border-y border-outline-light dark:border-outline-dark bg-transparent h-[14px]  z-10 top-0 left-0 w-full text-on-surface-variant-light dark:text-on-surface-variant-dark "
    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: "components",
        drop: (drobj,monitor) => {
                let dragId = drobj.name
                let item = drobj?.item;
                if (!item) {

                    const componets = [...Data.components]
                    console.log(componets)
                    let component = componets.find(c => c.uid === dragId)
                    component.uniqueId = uuidv4()
                    if (component.idType === "grid") {
                        component.addedItems.map(item =>
                            item.uniqueId = uuidv4()
                        )
                    }
                    if (component) {
                        handleAddedItems(component, idNumber)
                    }
                }else{
                    const itemu =JSON.parse(item)
                    itemu.uniqueId = uuidv4()
                    handleAddedItems(itemu, idNumber)
                }
            }


        ,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    return (
        <>
            <div className={`${isActive?onDragClass:firstItem?firstItemClasses:normalClasses} transition-all border-outline-variant-light  text-center duration-300 ease-in-out flex items-center justify-center`} ref={drop} data-testid="drop-container">
                {isActive ? 'Drop item here' : firstItem?'Drag a box here':""}
            </div>
            {/*<div key={Date.now()}*/}
            {/*     className={`className transition-all border-outline-variant-light  text-center duration-300 ease-in-out flex items-center justify-center ${onDrag ? onDragClass : (firstItem && !onDrop) ? firstItemClasses : normalClasses}`}*/}
            {/*    // id={Math.random().toString()}*/}
            {/*    // key={Math.random()}*/}
            {/*     onDrop={(event) => {*/}
            {/*         drop(event)*/}
            {/*         setOnDrag(false)*/}
            {/*         setOnDrop(true)*/}
            {/*     }}*/}
            {/*     onDragLeave={() => setOnDrag(false)}*/}
            {/*     onDragOver={(event) => {*/}
            {/*         allowDrop(event)*/}
            {/*         setOnDrag(true)*/}
            {/*     }}*/}


            {/*    // onDrag={onDrag}*/}
            {/*>*/}
            {/*    {!(firstItem && !onDrop) && onDrag && <div>*/}
            {/*        {"Drop Item Here"}*/}
            {/*    </div>}*/}
            {/*    {firstItem && !onDrop && <div>*/}
            {/*        {"Drag and Drop item here"}*/}
            {/*    </div>}*/}
            {/*</div>*/}
        </>
    )
}
