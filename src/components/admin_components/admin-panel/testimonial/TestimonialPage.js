'use client'
import {notFound} from "next/navigation";
import FAB from "@m3/floating_action_buttons/FAB";
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import Image from "next/image";
import {useState} from "react";
import FilledTextField from "@m3/text_fields/FilledTextField";
import FilledTextArea from "@m3/text_area/FilledTextArea";
import Button from "@m3/buttons/Button";
function TestimonialDialog({editObj,setAddDialogOpen,setEditObj}){
	const isEditMode = !!editObj
	const [data, setData] = useState(editObj?editObj:{});
	const handleChangeData = (key,value) => {
		setData({...data, [key]: value});
	}
	const saveAction = async () => {
		if(isEditMode){
			const res = await fetch(`http://localhost:3000/api/testimonials/${data._id}`, {
				method: "PUT",
				body: JSON.stringify(data),
			})
			await res.json()
		}else {
			const res = await fetch("http://localhost:3000/api/testimonials", {
				method: "POST",
				body: JSON.stringify(data),
			})
			await res.json()
		}
		setData({})
		setAddDialogOpen(false)
		setEditObj(null)
		// console.log(await res.json())
	}
	return (
		<div className={"z-999 fixed flex items-center justify-center bg-black/[20%] inset-0"}>
			<div
				className={"p-6   bg-surface-light w-4/12  rounded-[24px] dark:bg-surface-dark"}>
				<h1 className={"font-bold text-center mb-6 text-on-surface-light dark:text-on-surface-dark text-title-large"}>
					Add New Testimonial
				</h1>
				<div className={"grid grid-cols-2 gap-4"}>
					<FilledTextField value={data.name || ""} onChange={(e)=>handleChangeData("name",e.target.value)} label={"Name"}/>
					<FilledTextField value={data.job || ""} onChange={(e)=>handleChangeData("job",e.target.value)} label={"Job"}/>
					<FilledTextField value={data.company || ""} onChange={(e)=>handleChangeData("company",e.target.value)} label={"Company Name"}/>

					<div className={"col-span-2"}>
						<FilledTextArea value={data.description || ""} onChange={(e)=>handleChangeData("description",e.target.value)} label={"Comment"}/>
					</div>
				</div>
				<div className={"pt-6 flex items-center justify-end"}>
					<Button onClick={()=> {
						setData({})
						setAddDialogOpen(false)
						setEditObj(null)

					}}>
						Cancel
					</Button>
					<Button onClick={saveAction} type={"filled"}>
						Save
					</Button>

				</div>
			</div>
		</div>
	)
}

export default function TestimonialPage({data}) {
	const [addDialogOpen, setAddDialogOpen] = useState(false);
	const [editObj, setEditObj] = useState(null);
	return (
		<>
			{addDialogOpen &&
				<TestimonialDialog setEditObj={setEditObj} editObj={editObj} setAddDialogOpen={setAddDialogOpen}/>
			}
			<div className={"px-6 py-6  bg-surface-light dark:bg-surface-dark w-full min-h-screen"}>

				<FAB onClick={() => {
					setAddDialogOpen(true)

				}} className={"fixed bottom-6 right-6"} isExtended
				     label={"Add New Post"}>
					add
				</FAB>


				<h1 className={"text-headline-large font-bold mb-2"}>
					List of Posts
				</h1>
				<table className={"w-full h-fit"}>
					<thead className={"w-full"}>
					<tr className={"h-[64px]"}>
						<td className={'w-1/12 '}>

						</td>
						<td className={"w-2/12"}>
							content
						</td>
						{/*<td className={"w-1/12"}>*/}
						{/*    slug*/}
						{/*</td>*/}
						{/*<td className={"w-2/12"}>*/}
						{/*    tags*/}
						{/*</td>*/}
						<td className={"w-2/12"}>
							Created At
						</td>
						<td className={"w-2/12"}>
							Updated At
						</td>
						<td className={"w-2/12"}>

						</td>
					</tr>
					</thead>
					<tbody className={"w-full"}>
					{data.data.map((item, index) => <tr
						className={"h-[64px] border-t border-outline-variant-light dark:border-outline-dark w-full *:!p-0"}
						key={index}>
						<td className={"w-1/12"}>
							<div className={"flex items-center"}>
								{/*<Image width={100} height={100} objectFit={"responsive"}*/}
								{/*       className={"w-[48px] h-[48px] rounded-full"} src={"/files" + item.thumbnail.url}*/}
								{/*       alt={""}/>*/}
							</div>
						</td>
						<td className={"w-2/12"}>
							{item.description}
						</td>
						{/*<td className={"w-1/12"}>*/}
						{/*    {item.title}*/}
						{/*</td>*/}
						{/*<td className={"w-2/12"}>*/}
						{/*    {item.tags.map((tag, tagIndex) => <span key={tagIndex}>{tag.title}</span>)}*/}
						{/*</td>*/}
						<td className={"w-2/12"}>
							{new Date(item.createdAt).toLocaleDateString()}
						</td>
						<td className={"w-2/12"}>
							{new Date(item.updatedAt).toLocaleDateString()}
						</td>
						<td className={"w-2/12"}>
							<div className={"flex items-center"}>
								<IconButton onClick={()=> {
									setEditObj(item)
									setAddDialogOpen(true)
								}}>
									edit
								</IconButton>
								<IconButton className={"text-error-light dark:text-error-dark"}>
									delete
								</IconButton>
							</div>
						</td>

					</tr>)}
					</tbody>

				</table>

			</div>
		</>
	)
}