'use client'
import IconButton from "@m3/icon_buttons/IconButton";
import FilledTextField from "@m3/text_fields/FilledTextField";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
// import Quill from "quill";
import {useEffect, useMemo, useRef} from "react";
import "quill/dist/quill.snow.css"
import '@/app/editor.css'
import {useState} from 'react'
import {checkSlugRegex} from "@/_helper/checkSlugRegex";
import {convertToSlug} from "@/_helper/convertToSlug";
import Image from 'next/image'
import FilterChips from "@m3/chips/FilterChips";
import BasicDialog from "@m3/dialogs/BasicDialog";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import {UploadFile} from "@frontend/client_action/File";
import {StoreFile} from "@backend/server_action/Files";
import Link from "next/link";
// import ReactQuill from "react-quill";
import QuillEditor from "@admin/admin-panel/post/QuillEditor";
import {FileUploadStorageURL} from "@/config";

export default function PostEdit({post, siteSetting}) {
	const [data, setData] = useState(post || {})
	console.log(post)
	// const [quill, setQuill] = useState(null)
	const [openTagAddDialog, setOpenTagAddDialog] = useState(false);
	const handleChangeForm = (key, value) => {
		setData({...data, [key]: value})
	}
	// icons['bold'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_bold</span>';
	// icons['italic'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_italic</span>';
	// icons['underline'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_underlined</span>';
	// icons['strike'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_strikethrough</span>';
	// icons['link'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">link</span>';
	// icons['image'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">image</span>';
	// icons['video'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">movie</span>';
	// icons['list']['ordered'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_list_bulleted</span>';
	// icons['list']['bullet'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_list_numbered</span>';
	// // icons['list']['check'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_strikethrough</span>';
	// icons['indent']['+1'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_indent_increase</span>';
	// icons['indent']['-1'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_indent_decrease</span>';
	// icons['color'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_color_text</span>';
	// icons['background'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_color_fill</span>';
	// icons['direction'][''] = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path  d="M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm0-280v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80ZM680-80l-56-56 64-64H120v-80h568l-64-64 56-56 160 160L680-80Z"/></svg>';
	// icons['direction']['rtl'] = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm-88 160 64 64-56 56-160-160 160-160 56 56-64 64h568v80H272Zm88-440v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80Z"/></svg>';
	// icons['align'][''] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_left</span>';
	// icons['align']['justify'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_justify</span>';
	// icons['align']['center'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_center</span>';
	// icons['align']['right'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_align_right</span>';
	// icons['clean'] = '<span class="material-symbols-outlined font-vs-[0_500_0_24]">format_clear</span>';

	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],        // toggled buttons
			// ['blockquote', 'code-block'],
			['link', 'image', 'video'],

			// [{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{'list': 'ordered'}, {'list': 'bullet'}],
			// [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
			[{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
			[{'direction': 'rtl'}],                         // text direction

			[{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
			[{'header': [1, 2, 3, 4, 5, 6, false]}],

			[{'color': []}, {'background': []}],          // dropdown with defaults from theme
			// [{ 'font': [] }],
			[{'align': ['', 'center', 'right', 'justify'],}],

			['clean']
		],
	}

	// const formats = [
	//
	// 	'bold', 'italic', 'underline', 'strike', 'blockquote',
	// 	'list', 'bullet', 'indent',
	// 	'link'
	// ]
	useEffect(() => {
		return () => {
			const color = Object.values(siteSetting.color);
			// console.log(rgbaObjToRgba(siteSetting.color))
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

				[{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
				[{'header': [1, 2, 3, 4, 5, 6, false]}],

				[{'color': []}, {'background': []}],          // dropdown with defaults from theme
				// [{ 'font': [] }],
				[{'align': ['', 'center', 'right', 'justify'],}],

				['clean']                                         // remove formatting button
			];
			Object.keys(siteSetting.color).map((k, index) => {
				if ((index !== 24 && index !== 25) && (index < 12 || index > 15)) {
					toolbarOptions[7][0].color.push(rgbaObjToRgba(siteSetting.color[k]))
					toolbarOptions[7][1].background.push(rgbaObjToRgba(siteSetting.color[k]))
				}
			})

			// const quilln = new Quill('#editor', {
			// 	debug: false,
			// 	modules: {
			// 		toolbar: toolbarOptions
			// 	},
			//
			// 	theme: 'snow',
			//
			// });
			// console.log(JSON.parse(post.content).ops)
			// quilln.setContents(JSON.parse(post.content).ops)
			// setQuill(quilln)

			// icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
			// icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
			// icons['image'] = '<i class="fa fa-picture-o" aria-hidden="true"></i>';
			// icons['code'] = '<i class="fa fa-code" aria-hidden="true"></i>';
		}
	}, []);
	const imageInputRef = useRef()
	const [filterTag, setFilterTag] = useState('');
	const [image, setImage] = useState(post?.thumbnail ? {...post.thumbnail,url:FileUploadStorageURL+post.thumbnail.name} : null);
	const [tagData, setTagData] = useState({});
	const [postTags, setPostTags] = useState(post?.tags.map(item=>item._id) || []);
	const [tags, setTags] = useState(null)
	const getTags = async () => {
		const res = await fetch('http://localhost:3000/api/post-tags')
		setTags(await res.json())
	}
	useMemo(async () => {
		await getTags()
	}, []);
	const handleAddPostTag = (id) => {
		const index = postTags.findIndex(item => item === id)
		if (index === -1) {
			setPostTags([...postTags, id])
		} else {
			const newPostTag = [...postTags]
			newPostTag.splice(index, 1)
			setPostTags(newPostTag)
		}
	}
	const handleTagDataChange = (key, value) => {
		setTagData({...tagData, [key]: value})
	}
	useEffect(() => {
		if (!post) {
			data.title && setData({...data, "slug": convertToSlug(data.title)})
		}
	}, [data.title])
	const addTagSubmit = async () => {
		const res = await fetch("http://localhost:3000/api/post-tags", {
			method: "POST",
			body: JSON.stringify(tagData),
		})
		await res.json()
		await getTags()
		setOpenTagAddDialog(false)
	}
	const saveAction = async () => {
		// const delta = quill.getContents();
		// console.log(html);
		if (post) {
			const res = await fetch(`http://localhost:3000/api/posts/${post.slug}`, {
				method: "PUT",

				body: JSON.stringify({
					title: data.title,
					slug: data.slug,
					thumbnail: image._id,
					tags: postTags,
					content: data.content,
					metaTitle: data.metaTitle,
					metaDescription: data.metaDescription,
					metaKeywords: data.metaKeywords,
				}),
			})
			await res.json()
		}else{
			const res = await fetch(`http://localhost:3000/api/posts`, {
				method: "POST",

				body: JSON.stringify({
					title: data.title,
					slug: data.slug,
					thumbnail: image._id,
					tags: postTags,
					content: data.content,
					metaTitle: data.metaTitle,
					metaDescription: data.metaDescription,
					metaKeywords: data.metaKeywords,
				}),
			})
			await res.json()
		}

		// console.log(await res.json())
	}
	let handleChangeValue = (value) => {
		const file = JSON.parse(value)
		console.log(file)
		// console.log(file)
		// console.log(file)
		setImage(file)
	}
	return (
		<>
			<BasicDialog onClose={() => setOpenTagAddDialog(false)} isOpen={openTagAddDialog} className={"w-[480px]"}
			             icon={"tag"}
			             submitButton={{type: "filled", action: addTagSubmit, label: "submit"}}
			             cancelButton={{type: "", action: () => setOpenTagAddDialog(false), label: "cancel"}}
			             description={"Please select post tags and then click on submit button"} title={"Add new tag"}>
				{/*<Divider className={"mb-4 border-outline-light dark:border-outline-dark"}/>*/}
				<div className={"space-y-2"}>
					<FilledTextField onChange={(e) => handleTagDataChange("title", e.target.value)} label={"Tag name"}/>
					<FilledTextField onChange={(e) => handleTagDataChange("slug", e.target.value)} label={"Tag slug"}/>
				</div>
				{/*<Divider className={"mt-4 border-outline-light dark:border-outline-dark"}/>*/}
			</BasicDialog>
			<div className="pt-[64px] bg-surface-light dark:bg-surface-dark w-full min-h-screen">

				<div
					className={"z-999 fixed bg-surface-light dark:bg-surface-dark border-b border-outline-variant-light dark:border-outline-variant-dark flex items-center px-6 w-full left-0 top-0 h-[64px] "}>
					<Link href={"/admin/posts"}>
						<IconButton className={"mr-2"}>
							arrow_back
						</IconButton>
					</Link>
					<h1 className={"flex-1 font-black text-title-medium"}>
						Add New Post
					</h1>
					<Button onClick={() => saveAction()} icon={"save"} type={"filled"}>
						Save
					</Button>
				</div>
				<div className={"py-6 container mx-auto"}>
					<div className={"grid grid-cols-12 gap-6"}>
						<div className={"col-span-4 "}>
							<div className={"sticky top-[88px] overflow-scroll h-[calc(100vh_-_112px)]"}>
								<div
									className={"bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
									<h2 className={"font-black text-on-secondary-container-light dark:text-on-secondary-container-dark text-title-medium"}>
										Blog Info
									</h2>
									<div className={"mt-3 grid grid-cols-1 gap-2"}>
										<FilledTextField value={data.title}
										                 onChange={(e) => handleChangeForm("title", e.target.value)}
										                 label={"title"}/>
										<div>
											<FilledTextField value={data?.slug}
											                 onChange={(e) => handleChangeForm("slug", e.target.value)}
											                 label={"slug"}/>
											{!checkSlugRegex(data.slug) &&
												<label
													className={"text-label-small text-error-light dark:text-error-dark"}>
													Incorrect slug, slug should contain `-`, lowercase word and numbers
												</label>}
										</div>
									</div>
								</div>

								<div
									className={"mt-6 bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
									<div className={"flex items-center space-x-4"}>
										<div
											className="relative flex overflow-hidden justify-center items-center relative h-[150px] w-[150px] rounded-[24px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark">
											{image ? <Image layout={"fill"} objectFit={"cover"} alt={""}
											                src={`${image.url}`}/> : <Icon
												className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}
												size={36}>
												image
											</Icon>}
										</div>
										<div>
											<h3 className={"text-title-small font-extrabold text-on-surface-light dark:text-on-surface-dark"}>
												Post Thumbnail
											</h3>
											<p className={"mb-2 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
												Upload your post primary image
											</p>
											<input ref={imageInputRef} accept={"image/jpeg"}
											       name={"files"}
											       onChange={async (e) => {
												       const file = imageInputRef.current.files[0]
												       const res = await UploadFile(file)
												       handleChangeValue(await StoreFile(res))
											       }}
											       id={"thumbnail-upload-input"} type={"file"}
											       className={"hidden w-0"}/>
											{/*<input ref={imageInputRef} onChange={handleImagesUpload}*/}
											{/*       id={"thumbnail-upload-input"} className={"hidden"} type={"file"}/>*/}
											<Button className={"flex w-fit"} htmlFor={"thumbnail-upload-input"}
											        component={"label"} icon={"upload"} type={"tonal"}>
												upload
											</Button>
										</div>
									</div>
								</div>
								<div
									className={"mt-4 bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
									<div className={" flex justify-between items-center"}>
										<h2 className={"font-black text-on-secondary-container-light dark:text-on-secondary-container-dark text-title-medium"}>
											Tags
										</h2>
										<button onClick={() => setOpenTagAddDialog(true)}
										        className={"font-medium flex items-center  text-primary-light dark:text-primary-dark text-label-large"}>
											<Icon weight={500} size={20}>
												add
											</Icon>
											Add new tag
										</button>
										{/*<Button icon={"add"}>*/}
										{/*    Add new tag*/}
										{/*</Button>*/}
										{/*<IconButton type={"filled"} className={"mr-2"}>*/}
										{/*    add*/}
										{/*</IconButton>*/}
									</div>

									<div className={"mt-3"}>
										<FilledTextField value={filterTag}
										                 onChange={(e) => setFilterTag(e.target.value)}
										                 label={"Search in tags"}/>
										<div className={"mt-2 h-[200px] space-y-2 space-x-2"}>
											{tags && tags.data.filter(tag => (filterTag !== "" || filterTag !== null) && tag.title.toLowerCase().includes(filterTag.toLowerCase())).map(tag =>
												<div onClick={() => handleAddPostTag(tag._id)} key={tag._id}
												     className={"inline-flex"}>
													<FilterChips isChecked={postTags.includes(tag._id)}
													             label={tag.title}/>
												</div>)}
											{/*<div className={"inline-flex"}>*/}
											{/*    <FilterChips isChecked={false} label={"tagss"}/>*/}
											{/*</div>*/}
										</div>
										{/*<FilledAutoComplete label={"tags"}/>*/}

										{/*<AssistChips onClick={() => setOpenTagAddDialog(true)} icon={"add"}*/}
										{/*             label={"Add new tag"}/>*/}
										{/*<div*/}
										{/*    className={" font-medium text-on-surface-light h-[32px] text-label-medium inline-flex items-center rounded-full px-3 border border-outline-light dark:border-outline-dark border-dashed"}>*/}
										{/*    <Icon className={"mr-1"} weight={500} size={20}>*/}
										{/*        Add*/}
										{/*    </Icon>*/}
										{/*    Add New Tag*/}
										{/*</div>*/}
									</div>
								</div>
								<div
									className={"mt-6 bg-surface-container-light dark:bg-surface-container-dark rounded-[24px] py-6 px-6"}>
									<h2 className={"font-black text-on-secondary-container-light dark:text-on-secondary-container-dark text-title-medium"}>
										SEO Setting
									</h2>
									<div className={"mt-3 grid grid-cols-2 gap-2"}>
										<FilledTextField value={data?.metaTitle}
										                 onChange={(e) => handleChangeForm("metaTitle", e.target.value)}
										                 label={"Meta Title"}/>
										<FilledTextField value={data?.metaDescription}
										                 onChange={(e) => handleChangeForm("metaDescription", e.target.value)}
										                 label={"Meta Description"}/>
										<FilledTextField value={data?.metaKeywords}
										                 onChange={(e) => handleChangeForm("metaKeywords", e.target.value)}
										                 className={"col-span-2"} label={"Meta Keywords"}/>
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
								<div className={"px-0  *:border-0"}>
									<QuillEditor defaultValue={data.content} onChange={(v)=>handleChangeForm("content",v)}/>
									{/*<ReactQuill  className={"*:!border-0"} modules={modules}*/}
									{/*             theme="snow" value={""} onChange={(e) => handleTagDataChange("title", e.target.value)}/>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}