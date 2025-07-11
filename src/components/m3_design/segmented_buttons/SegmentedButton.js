'use client'
import Icon from "@m3/assets/icons/Icon";
import React, {useState} from "react";
import Link from "next/link";

export default function SegmentedButton({className,items,selectedIndex,withLink,onChangeSelectedIndex}){
    // const [selected,setSelected]=useState(selectedIndex || 0)
    return (
        <div style={{gridTemplateColumns: `repeat(${items.length},minmax(min-content, 1fr))`}}
             className={`${className} max-w-fit divide-x divide-outline-light dark:divide-outline-dark *:w-full grid overflow-hidden *:flex  *:items-center *:justify-center *:px-4  *:text-label-large  h-[40px] border border-outline-light dark:border-outline-dark rounded-full `}>
            {withLink?items.map((item,index)=><Link href={item?.link} className={`${selectedIndex===index?"bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light"} `} key={index}>
                {selectedIndex===index&&<Icon className={"mr-2"} size={20}>
                    check
                </Icon>}
                {item.title}
            </Link>):items.map((item,index)=><div onClick={()=>onChangeSelectedIndex(index)} className={`${selectedIndex===index?"bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light"} `} key={index}>
                {selectedIndex===index&&<Icon className={"mr-2"} size={20}>
                    check
                </Icon>}
                {item.title}
            </div>)}
        </div>

    )
}