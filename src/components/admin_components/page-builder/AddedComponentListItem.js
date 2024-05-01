import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";

export default function AddedComponentListItem({item,number}){
    const [isSelected,setIsSelected] = useState()
    return (
        <li
            className={"group relative justify-between py-2 px-4 h-[56px] text-body-large flex items-center text-on-surface-light dark:text-on-surface-dark bg-surface-light dark:bg-surface-dark"}>
            {item.id}
            <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                chevron_right
            </Icon>
            <div
                className={"hidden bg-on-surface-light/[8%] dark:bg-on-surface-dark/[8%] group-hover:block top-0 left-0 w-full absolute h-full "}/>
        </li>
    )
}