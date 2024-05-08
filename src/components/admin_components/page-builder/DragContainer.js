// import {Component} from "grapesjs";

import {useDrag} from "react-dnd";

export default function DragContainer({item,children,name,className}){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "components",
        item: {name},
        // end: (item, monitor) => {
        //     const dropResult = monitor.getDropResult()
        //     if (item && dropResult) {
        //         alert(`You dropped ${item.name} into ${dropResult.name}!`)
        //     }
        // },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    return <div className={className&&className} ref={drag}>{...children}</div>
}