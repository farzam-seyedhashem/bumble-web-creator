import React, {useContext, useState} from "react";
// import {makeStyles} from "@mui/styles";
// import clsx from "clsx";
// import {alpha, styled} from "@mui/material/styles";
// import Sections from '../editor_components/Sections'
// import MuiListItem from "@mui/material/ListItem";
// import {useTranslation} from "next-i18next";
// import MuiBox from '@mui/material/Box'


const DropZone = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'firstItem' && prop !== 'onDrag',
})(({theme, firstItem, onDrag}) => ({
    ...(firstItem ? {
        padding: '21px 0px',
        color: 'rgba(0, 0, 0, 0.38)',
        textAlign: 'center',
        transition: 'all 300ms ease-in-out',
        fontSize: 16,
        lineHeight: 1.38,
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)',
    } : {
        padding: '4px 0px',
        color: 'rgba(0, 0, 0, 0.38)',
        textAlign: 'center',
        transition: 'all 300ms ease-in-out',
        fontSize: 16,
        lineHeight: 1.38,
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.0)' : 'rgba(255, 255, 255, 0.0)',
    }),
    ...(onDrag && {
        padding: '29px 0px',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 1.38,
        backgroundColor: alpha(theme.palette.primary.main, .1) + '!important',
        color: theme.palette.primary.main + '!important',
    })
}))

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

export default function Home({firstItem,id,itemNumber,selectedTab,handleSelected}) {
    const [onDrag, setOnDrag] = React.useState(false)
    const [onDrop, setOnDrop] = React.useState(false)
    // const {t} = useTranslation('page-editor')
    const allowDrop = (ev) => {
        ev.preventDefault();
    }
    const drop = (ev) => {

        // removeStyle()
        // ev.preventDefault();
        // let newSec = Object.freeze(sections)
        // console.log(ThemeContext.currentValue)

        let data = ev.dataTransfer.getData("text");
        // const item = Sections.sections[selectedTab].childes.find(item => item.id === data)
        // handleSelected(item, itemNumber)
        return true;
    }
    // useState(()=>{
    //     setIsShow(true)
    // })
    const removeStyle = () => {

    }
    return (
        <>
            <div className={onDrag ? "py-6" : firstItem ? "" : ""} id={firstItem ? 'main-div' : id}
                 data-text={firstItem ? t('Drag Sections Here') : "   "}
                 onDrop={(event) => {
                     drop(event)
                     setOnDrag(false)
                     setOnDrop(true)
                 }}
                 onDragLeave={() => setOnDrag(false)}
                 onDragOver={(event) => {
                     allowDrop(event)
                     setOnDrag(true)
                 }}

                // onDrag={onDrag}
            >
                {/*{props?.firstItem && !onDrop &&<div>*/}
                {/*    بخش را به اینجا اضافه کنید*/}
                {/*</div>}*/}
            </div>
        </>
    )
}
