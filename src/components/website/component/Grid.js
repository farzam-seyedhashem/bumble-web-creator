'use server'
import React from 'react'
import WebComponentGenerator from "@website//WebComponentGenerator";

function Column({columnSizeDesktop, columnSizeMobile, item, Style}) {

    return (
        <div key={item.uniqueId + "-gridm"}
             className={`${Style[item.uniqueId] ? Style[item.uniqueId] : ""} z-[100] md:col-span-${columnSizeDesktop} col-span-${columnSizeMobile}`}>
            {item.addedItems.map((l, i) =>
                <WebComponentGenerator Style={Style} key={i} item={l}/>
            )}

        </div>
    )
}

function Grid({item, Style}) {
    const baseClass = `grid grid-cols-12 justify-end w-full`
    return (
        <div style={{justifyContent: "end",}} className={baseClass}>
            {item.addedItems.map((m, i) =>
                <Column Style={Style} columnSizeDesktop={item.columnSizeDesktop[i]}
                        columnSizeMobile={item.columnSizeMobile[i]} id={item.uniqueId} key={item.uniqueId + i + "-grid"}
                        idNumber={i}
                        item={m}/>
            )}
        </div>
    )
}

export default Grid