'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {Dialog, Transition} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {StyleToTailwind} from "@/_helper/StyleToTailwind";
import {StyleToClass} from "@/_helper/StyleToClass";
import {rgbaObjToRgba} from '@/_helper/rgbaObjtoRgba'
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import {uniqueId} from "lodash/util";
import FilledTextArea from "@m3/text_area/FilledTextArea";
import FilledTextField from "@m3/text_fields/FilledTextField";
import useSWR from "swr";
import Link from "next/link";

export default function LinkComponent({
	                                      item, Style
                                      }) {

	return (
		<>
			<Link href={item.link} id={item.uniqueId} className={`block w-full ${item.uniqueId}`}>
				{item.value || item.idType}
			</Link>
		</>
	)
}