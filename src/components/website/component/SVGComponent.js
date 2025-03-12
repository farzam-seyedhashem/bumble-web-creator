'use client';
import {useEffect, useState, Fragment, useRef} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import {Transition, Dialog} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import {UploadFile} from "@frontend/client_action/File";
import {StoreFile} from "@backend/server_action/Files";
import TextArea from "@m3/TextArea";
// import {json} from "next/dist/client/components/react-dev-overlay/server/shared";

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