'use client';
import {Fragment} from "react";
export default function SVGComponent({
	                                     fields,
	                                     editDialogOpenComponentId,
	                                     setEditDialogOpenComponentId,
	                                     isDesktop,
	                                     item,
	                                     editItem,
	                                     removeItemFunc,
	                                     dragFunc
                                     }) {

	return (
		<>
			<div className={"relative group"}>
				{console.log(item)}
				<div className={item.uniqueId}
				     dangerouslySetInnerHTML={{__html: item.value}}>
				</div>

			</div>

		</>
	)
}