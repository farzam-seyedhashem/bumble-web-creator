'use client';
import React, {useEffect, useState, Fragment} from "react";
import TextArea from "@m3/TextArea";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import StyleFieldGenerator from "@page_builder/StyleFieldGenerator";
import Components from '@/Components.js'

export default function PostDateUpdatedComponent({
	                                                 post,
	                                                 item,
                                                 }) {

	return (
		<>
			<div className={`relative ${post.uniqueId}`}>
				{post.updatedAt}
			</div>
		</>
	)
}