'use client'
import IconButton from "@m3/icon_buttons/IconButton";
import TextField from "@m3/text_fields/TextField";
import FilledTextField from "@m3/text_fields/FilledTextField";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import Quill from "quill";
import {useEffect} from "react";
import "quill/dist/quill.snow.css"
import '@/app/editor.css'
import {useState} from 'react'

export default function AddNewPosts() {
    useEffect(() => {
        return () => {
            // hljs.registerLanguage('javascript', javascript);
            // const toolbarOptions = ['bold', 'italic', 'underline', 'strike'];
            const toolbarOptions = [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                // ['blockquote', 'code-block'],
                ['link', 'image', 'video'],

                // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{'list': 'ordered'}, {'list': 'bullet'}],
                // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                [{'direction': 'rtl'}],                         // text direction

                // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{'header': [1, 2, 3, 4, 5, 6, false]}],

                [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                // [{ 'font': [] }],
                [{'align': ['', 'center', 'right','justify'],}],

                ['clean']                                         // remove formatting button
            ];
            import('quill/ui/icons');
            var icons = Quill.import('ui/icons');
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

            const quill = new Quill('#editor', {
                debug: false,
                modules: {
                    toolbar: toolbarOptions
                },
                theme: 'snow',
            });
           // icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
            // icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
            // icons['image'] = '<i class="fa fa-picture-o" aria-hidden="true"></i>';
            // icons['code'] = '<i class="fa fa-code" aria-hidden="true"></i>';
        }
    }, []);
    const [editorState, setEditorState] = useState({})
    const handleChangeEditor = (key,value) => {
        setEditorState({...editorState,[key]:value})
    }
    return (
        <div className="pt-[64px] bg-surface-light dark:bg-surface-dark w-full min-h-screen">
            <div
                className={"z-999 fixed bg-surface-light dark:bg-surface-dark border-b border-outline-variant-light dark:border-outline-variant-dark flex items-center px-6 w-full left-0 top-0 h-[64px] "}>
                <IconButton className={"mr-2"}>
                    arrow_back
                </IconButton>
                <h1 className={"flex-1 font-black text-title-medium"}>
                    Add New Post
                </h1>
                <Button icon={"save"} type={"filled"}>
                    Save
                </Button>
            </div>
            <div className={"py-6 container mx-auto"}>
                <div className={"grid grid-cols-12 gap-6"}>
                    <div className={"col-span-4 "}>
                        <div className={"sticky top-[88px]"}>
                        <div
                            className={"bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
                            <h2 className={"font-black text-on-secondary-container-light dark:text-on-secondary-container-dark text-title-medium"}>
                                Blog Info
                            </h2>
                            <div className={"mt-3 grid grid-cols-1 gap-2"}>
                                <FilledTextField label={"title"}/>
                                <FilledTextField label={"slug"}/>
                            </div>
                        </div>

                        <div
                            className={"mt-6 bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
                            <div className={"flex items-center space-x-4"}>
                                <div
                                    className="flex justify-center items-center relative h-[150px] w-[150px] rounded-[24px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark">
                                    <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                                          size={36}>
                                        image
                                    </Icon>
                                </div>
                                <div>
                                    <h3 className={"text-title-small font-extrabold text-on-surface-light dark:text-on-surface-dark"}>
                                        Post Thumbnail
                                    </h3>
                                    <p className={"mb-2 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                        Upload your post primary image
                                    </p>
                                    <Button icon={"upload"} type={"tonal"}>
                                        upload
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"mt-4 bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
                            <h2 className={"font-black text-on-secondary-container-light dark:text-on-secondary-container-dark text-title-medium"}>
                                Tags
                            </h2>
                            <div className={"mt-3"}>
                                <div
                                    className={" font-medium text-on-surface-light h-[32px] text-label-medium inline-flex items-center rounded-full px-3 border border-outline-light dark:border-outline-dark border-dashed"}>
                                    <Icon className={"mr-1"} weight={500} size={20}>
                                        Add
                                    </Icon>
                                    Add New Tag
                                </div>
                            </div>
                        </div>
                        <div
                            className={"mt-6 bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
                            <h2 className={"font-black text-on-secondary-container-light dark:text-on-secondary-container-dark text-title-medium"}>
                                SEO Setting
                            </h2>
                            <div className={"mt-3 grid grid-cols-2 gap-2"}>
                                <FilledTextField label={"Meta Title"}/>
                                <FilledTextField label={"Meta Description"}/>
                                <FilledTextField className={"col-span-2"} label={"Meta Keywords"}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={"col-span-8"}>
                        <div
                            className={"h-full bg-surface-container-light dark:bg-surface-container-dark overflow-hidden rounded-[24px] py-0 px-0"}>
                            {/*<h2 className={"font-black text-title-medium"}>*/}
                            {/*    Blog Content*/}
                            {/*</h2>*/}
  {/*                          <div className={"toolbar"} id="toolbar-container">*/}
  {/*<span className="ql-formats">*/}
  {/*  <select  value={editorState?.font} onChange={(e)=>handleChangeEditor("font",e.target.value)} className="ql-font">*/}

  {/*  </select>*/}
  {/*  <select className="ql-size"></select>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <button className="ql-bold"></button>*/}
  {/*  <button className="ql-italic"></button>*/}
  {/*  <button className="ql-underline"></button>*/}
  {/*  <button className="ql-strike"></button>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <select className="ql-color"></select>*/}
  {/*  <select className="ql-background"></select>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <button className="ql-script" value="sub"></button>*/}
  {/*  <button className="ql-script" value="super"></button>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <button className="ql-header" value="1"></button>*/}
  {/*  <button className="ql-header" value="2"></button>*/}
  {/*  <button className="ql-blockquote"></button>*/}
  {/*  <button className="ql-code-block"></button>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <button className="ql-list" value="ordered"></button>*/}
  {/*  <button className="ql-list" value="bullet"></button>*/}
  {/*  <button className="ql-indent" value="-1"></button>*/}
  {/*  <button className="ql-indent" value="+1"></button>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <button className="ql-direction" value="rtl"></button>*/}
  {/*  <select className="ql-align"></select>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <button className="ql-link"></button>*/}
  {/*  <button className="ql-image"></button>*/}
  {/*  <button className="ql-video"></button>*/}
  {/*  <button className="ql-formula"></button>*/}
  {/*</span>*/}
  {/*                              <span className="ql-formats">*/}
  {/*  <button className="ql-clean"></button>*/}
  {/*</span>*/}
  {/*                          </div>*/}
                            <div className={" !border-0"} id={"editor"}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}