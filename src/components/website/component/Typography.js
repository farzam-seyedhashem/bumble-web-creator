'use client'
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";

export default function Typography({item, key, Style}) {
    const Component = item.type
    // const desktopStyles = item.desktopStyles;
    // console.log(item)
    // const globalStyles = item.globalStyles;
    // const mobileStyles = item.mobileStyles;
    return (
        <div>
            <Component id={item.uniqueId} className={`${item.uniqueId}`}>
                {item.value || item.idType}
            </Component>

        </div>
    )
}