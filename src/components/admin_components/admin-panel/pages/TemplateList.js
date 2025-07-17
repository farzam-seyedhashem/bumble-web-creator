'use client';
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import FAB from "@m3/floating_action_buttons/FAB";
import {Dialog, DialogPanel} from "@headlessui/react";
import {useRef, useState} from "react";
import Button from "@m3/buttons/Button";
import TextField from "@m3/text_fields/TextField";
// import {StyleToTailwind} from "@frontend/_helper/StyleToTailwind";
import FilledSelect from "@m3/text_fields/FilledSelect";
import AutoSelect from "@m3/auto_complete/AutoSelect";
import ListItem from "@m3/lists/ListItem";
import SegmentedButton from "@m3/segmented_buttons/SegmentedButton";
import Select from "@m3/text_fields/Select";
import {deletePage} from "@backend/server_action/Pages";
import {deleteTemplate} from "@backend/server_action/Templates";

export default function TemplateList({data, showDefaultPages, showDefaultTemplate}) {
	const [isOpen, setIsOpen] = useState(false);
	const [newPageData, setNewPageData] = useState({})
	const [selectedIndexType, setSelectedIndexType] = useState(showDefaultPages ? 0 : 1);
	const [isCustomTemplateId,setIsCustomTemplateId] = useState(false)
	const items = [
		{title: "Page"},
		{title: "Template"},
	]
	// const defaultPages = [
		// {title:"Inventory List Page",slug:"/inventories",adminLink:"/admin/edit-inventory-list-page"},
		// {title:"Single Inventory Page",slug:"/post/[slug]",adminLink:"/admin/edit-inventory-page"},
		// {title:"Single Post Page",slug:"/inventory/[slug]",adminLink:"/admin/edit-post-page"},
	// ]
	// const defaultComponent = [
	// 	// {title:"Inventory Card",slug:"",adminLink:"/admin/edit-inventory-card"},
	// 	{title: "Post Card", slug: "/post/[slug]", adminLink: "/admin/edit-post-card"},
	// ]
	const CreateNewTemplate = () => {
		try {
			fetch("/api/template", {
				method: 'POST',
				body: JSON.stringify(newPageData)
			}).then(response =>
				setIsOpen(true)
			).then(data => alert(data));
		} catch (error) {
			alert('An error occurred!');
		}
	}
	const CreateNewPage = () => {
		try {
			fetch("/api/page", {
				method: 'POST',
				body: JSON.stringify(newPageData)
			}).then(response =>
				setIsOpen(true)
			).then(data => alert(data));
		} catch (error) {
			alert('An error occurred!');
		}
	}
	const updateNewPageData = (id, value) => {
		setNewPageData({...newPageData, [id]: value})
		console.log(newPageData)
	}
	const submitNewOne = () => {
		selectedIndexType === 0 ? CreateNewPage() : CreateNewTemplate()
	}
const TemplateId = [
	{id:"post-card",label:"Post Card"},
	{id:"header",label:"Header Menu"},
	{id:"footer",label:"Footer"},
	{id:"custom-id",label:"Custom Id"},

]

	return (
		<>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
				<div className="fixed bg-black/[45%] inset-0 flex w-screen items-center justify-center p-4">
					<DialogPanel
						className="p-6 pb-0 w-[560px] rounded-[28px] bg-surface-container-high-light dark:bg-surface-container-high-dark">
						{/*<DialogTitle className="font-bold">Deactivate account</DialogTitle>*/}
						{/*<Description>This will permanently deactivate your account</Description>*/}
						<h2 className={"mb-4 text-center font-normal text-headline-small text-on-surface-light dark:text-on-surface-dark"}>
							Create New Website Part
						</h2>
						<p className={"mb-6 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							Please choose between which one do you prefer (Page or Template). Page have link and add
							directly to your website, but Template used for parts of page or website you can make
							template and used it in your all pages.
						</p>
						<div className={"space-y-3"}>
							<SegmentedButton className={"!max-w-full w-full"}
							                 onChangeSelectedIndex={setSelectedIndexType}
							                 selectedIndex={selectedIndexType} items={items}>
								{items}
							</SegmentedButton>
							<TextField onChange={(e) => updateNewPageData("title", e.target.value)} label={"Title"}/>
							{selectedIndexType === 0 &&
								<TextField defaultValue={newPageData.slug}
								           onChange={(e) => updateNewPageData("slug", e.target.value)} label={"Link"}/>}
							{/*{selectedIndexType === 0 &&*/}
							{/*    <div className={"w-full inline-flex"} ref={link} aria-placeholder={"Page Link"}>*/}
							{/*        {slugs.map((slug,index)=>*/}
							{/*            <div key={index}>*/}
							{/*                {slug}*/}
							{/*            </div>*/}
							{/*        )}*/}
							{/*        <div className={"w-fit"}>*/}
							{/*            <input onKeyDown={onLinkChange}*/}
							{/*                   className={"bg-transparent flex w-full border-0 !p-0"}*/}
							{/*                   placeholder={"Page Link"}/>*/}
							{/*        </div>*/}
							{/*    </div>}*/}
							{selectedIndexType === 1 && <Select value={newPageData.type} label={"Template type"}>
								<ListItem onClick={() => updateNewPageData("type", "page")} headline={"Page"}/>
								<ListItem headline={"Custom Component"}
								          onClick={() => updateNewPageData("type", "custom")}/>
								<ListItem headline={"Loop Component"}
								          onClick={() => updateNewPageData("type", "loop")}/>
								<ListItem headline={"Fixed Component"}
								          onClick={() => updateNewPageData("type", "fixed")}/>
							</Select>}
							{selectedIndexType===1 && newPageData.type !== "custom" && newPageData.type !== "page" && <Select value={TemplateId.find(item=>item.id===newPageData.templateId)?.label || "Custom Id"} label={"Template Id"}>
								{newPageData.type === "loop" && <ListItem headline={"Post Card"}
								           onClick={() => {
									           updateNewPageData("templateId", "post-card")
									           setIsCustomTemplateId(false)
								           }}/>}
								{/*{newPageData.type === "loop" && <ListItem headline={"Inventory Card"}*/}
								{/*                                          onClick={() => updateNewPageData("templateId", "inventory-card")}/>}*/}
								{newPageData.type === "fixed" && <ListItem headline={"Header Menu"}
								                                          onClick={() => {
									                                          updateNewPageData("templateId", "header")
									                                          setIsCustomTemplateId(false)
								                                          }}/>}
								{newPageData.type === "fixed" && <ListItem headline={"Footer"}
								                                          onClick={() => {
									                                          updateNewPageData("templateId", "footer")
									                                          setIsCustomTemplateId(false)
								                                          }}/>}
								<ListItem headline={"Custom Id"}
								          onClick={() => setIsCustomTemplateId(true)}/>
							</Select>}
							{selectedIndexType===1 && isCustomTemplateId &&<TextField onChange={(e)=>updateNewPageData("templateId", e.target.value)} label={"Custom Template Id"} /> }

						</div>
						<div className="py-6 flex justify-end">
							<Button onClick={() => setIsOpen(false)}>Cancel</Button>
							<Button type={"filled"} onClick={submitNewOne}>Submit</Button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
			<div className="h-full w-full flex pt-0 px-0 justify-center">

				<FAB onClick={() => setIsOpen(true)} label={"Add New"} color={"primary"}
				     className={"fixed bottom-6 right-6"} isExtended={true}>
					add
				</FAB>
				<div className={"w-full"}>
					<div
						className={"overflow-hidden rounded-[0px]  dark:border-outline-dark border-outline-light"}>
						<table
							className={" w-full mt-2  border-collapse"}>
							<thead className={" *:border-b *:border-outline-variant-light"}>
							<tr className={"text-left *:font-medium *:text-title-small *:text-on-surface-variant-light dark:*:text-on-surface-variant-dark *:px-4 *:h-[48px] bg-surface-light dark:bg-surface-dark"}>
								<th>Name</th>
								<th>

									{!showDefaultTemplate&& "Page Slug"}
									{!showDefaultPages&& "Template ID"}
									{showDefaultTemplate&&showDefaultPages &&"Page Slug or Template ID"}
								</th>
								<th>Type</th>
								<th>Created At</th>
								<th>Update At</th>
								<th></th>
							</tr>
							</thead>
							<tbody
								className={"*:text-on-surface-variant-light dark:*:text-on-surface-variant-dark dark:hover:*:text-on-surface-dark hover:*:text-on-surface-light dark:hover:*:bg-on-surface-dark/[8%] hover:*:bg-on-surface-light/[8%]  *:border-b dark:*:border-outline-variant-dark *:border-outline-variant-light"}>
							{/*{showDefaultPages && defaultPages.map((item, index) => (*/}
							{/*	<tr key={index} className={"*:px-4 *:h-[56px] "}>*/}
							{/*		<td className={"font-medium"}>{item.title}</td>*/}
							{/*		<td>{item.slug}</td>*/}
							{/*		<td>*/}
							{/*			<div*/}
							{/*				className={"h-[32px] px-3 w-fit text-label-large font-medium flex justify-center items-center rounded-[8px] text-on-tertiary-container-light dark:text-on-tertiary-container-dark bg-tertiary-container-light dark:bg-tertiary-container-dark"}>*/}
							{/*				Base Page*/}
							{/*			</div>*/}
							{/*		</td>*/}
							{/*		<td>-</td>*/}
							{/*		<td>-</td>*/}
							{/*		<td>*/}
							{/*			<div className={"flex items-center space-x-1 justify-end"}>*/}
							{/*				<Link*/}
							{/*					href={item?.adminLink}>*/}
							{/*					<IconButton>*/}
							{/*						edit*/}
							{/*					</IconButton>*/}
							{/*				</Link>*/}
							{/*			</div>*/}
							{/*		</td>*/}
							{/*	</tr>*/}
							{/*))}*/}
							{/*{showDefaultTemplate && defaultComponent.map((item, index) => (*/}
							{/*	<tr key={index} className={"*:px-4 *:h-[56px] "}>*/}
							{/*		<td className={"font-medium"}>{item.title}</td>*/}
							{/*		<td>{""}</td>*/}
							{/*		<td>*/}
							{/*			<div*/}
							{/*				className={"h-[32px] px-3 w-fit text-label-large font-medium flex justify-center items-center rounded-[8px] text-on-tertiary-container-light dark:text-on-tertiary-container-dark bg-tertiary-container-light dark:bg-tertiary-container-dark"}>*/}
							{/*				Base Component*/}
							{/*			</div>*/}
							{/*		</td>*/}
							{/*		<td>-</td>*/}
							{/*		<td>-</td>*/}
							{/*		<td>*/}
							{/*			<div className={"flex items-center space-x-1 justify-end"}>*/}
							{/*				<Link*/}
							{/*					href={item?.adminLink}>*/}
							{/*					<IconButton>*/}
							{/*						edit*/}
							{/*					</IconButton>*/}
							{/*				</Link>*/}
							{/*			</div>*/}
							{/*		</td>*/}
							{/*	</tr>*/}
							{/*))}*/}
							{data.map(page => <tr key={page._id} className={"*:px-4 *:h-[56px] "}>
								<td className={"font-medium"}>{page.title}</td>
								<td>{page.slug?page.slug:page.templateId}</td>
								<td>
									<div
										className={`${page.slug?"text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark":"bg-tertiary-container-light dark:bg-tertiary-container-dark text-on-tertiary-container-light dark:text-on-tertiary-container-dark"} h-[32px] px-3 w-fit text-label-large font-medium flex justify-center items-center rounded-[8px] `}>
										{page.slug ? "page" : page.type + " template"}
									</div>
								</td>
								<td>{new Date(page.createdAt).toLocaleString("us")}</td>
								<td>{new Date(page.updatedAt).toLocaleString("us")}</td>
								<td>
									<div className={"flex items-center space-x-1 justify-end"}>
										<Link
											href={`/admin/${page.slug ? "page-builder" : "template-builder"}/${page._id}`}>
											<IconButton>
												edit
											</IconButton>
										</Link>

										<IconButton onClick={async () => {
											page.slug ? await deletePage(page._id) : await deleteTemplate(page._id)
										}} className={"text-error-light dark:text-error-dark"}>
											delete
										</IconButton>

									</div>
								</td>
							</tr>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}