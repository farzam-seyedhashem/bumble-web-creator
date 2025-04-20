'use client'
import React, {useEffect} from 'react';

import {useQuill} from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css';
// import Quill from "quill"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function QuillEditor({onChange, defaultValue}) {
	const {quill, quillRef} = useQuill();
	useEffect(() => {
		import('quill/ui/icons');
		// var icons = Quill.import('ui/icons');
		icons['bold'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_bold</span>';
		icons['italic'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_italic</span>';
		icons['underline'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_underlined</span>';
		icons['strike'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_strikethrough</span>';
		icons['link'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">link</span>';
		icons['image'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">image</span>';
		icons['video'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">movie</span>';
		icons['list']['ordered'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_list_bulleted</span>';
		icons['list']['bullet'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_list_numbered</span>';
		// icons['list']['check'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_strikethrough</span>';
		icons['indent']['+1'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_indent_increase</span>';
		icons['indent']['-1'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_indent_decrease</span>';
		icons['color'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_color_text</span>';
		icons['background'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_color_fill</span>';
		icons['direction'][''] = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path  d="M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm0-280v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80ZM680-80l-56-56 64-64H120v-80h568l-64-64 56-56 160 160L680-80Z"/></svg>';
		icons['direction']['rtl'] = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm-88 160 64 64-56 56-160-160 160-160 56 56-64 64h568v80H272Zm88-440v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80Z"/></svg>';
		icons['align'][''] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_left</span>';
		icons['align']['justify'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_justify</span>';
		icons['align']['center'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_center</span>';
		icons['align']['right'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_right</span>';
		icons['clean'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_clear</span>';

		// }
	}, [])
	React.useEffect(() => {
		if (quill) {

			if (defaultValue)
				quill.clipboard.dangerouslyPasteHTML(defaultValue);
			quill.on('text-change', (delta, oldDelta, source) => {
				// console.log('Text change!');
				// console.log(quill.getText()); // Get text only
				// console.log(quill.getContents()); // Get delta contents
				// console.log(); // Get innerHTML using quill
				onChange(quill.root.innerHTML)
				// console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
			});
		}
	}, [quill]);
	console.log(quill);    // undefined > Quill Object
	console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

	return (
		<div className={"w-full h-full"}>
			<div className={"px-0  !border-0 h-full w-full"} ref={quillRef}/>
		</div>
	);
};