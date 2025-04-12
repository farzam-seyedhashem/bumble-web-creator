'use client'
import {useRef} from "react";

export default function DragDropList({dragStart,dragEnter,drop,children,number}) {

	return(
		<li id={number} draggable onDragStart={dragStart} onDragEnter={dragEnter} onDragEnd={drop}>
			{children}
		</li>
	)
}