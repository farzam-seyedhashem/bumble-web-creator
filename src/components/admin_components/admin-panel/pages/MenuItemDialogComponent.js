import {useState} from "react";
import FilledTextField from "@m3/text_fields/FilledTextField";
import IconPicker from "@page_builder/editor_components/IconPicker";
import FilledSelect from "@m3/text_fields/FilledSelect";
import ListItem from "@m3/lists/ListItem";
import Button from "@m3/buttons/Button";

export default function MenuItemDialogComponent({defaultData,pagesData,handleMenuItemDialogChanges,onClose}) {
	const [data, setData] = useState(defaultData || {title: "", page: "", icon: "home"});
	console.log(data)
	const [isCustomURL,setIsCustomURL] = useState(false)

	const handleChangeData = (key, value) => {
		setData({...data, [key]: value});
	}

	let pages = pagesData.data.map((page) => {
		return ({title: page.title, value: page.slug,slug:page.slug})
	})
	pages.push({title: "Custom URL", value: "You_Custom_URL",slug:"You_Custom_URL"})
	return (
		<div className={"fixed inset-0 flex items-center justify-end px-4 py-4 bg-black/[20%] z-999"}>
			<div className={"bg-surface-light  dark:bg-surface-derk w-[400px] h-[calc(100vh_-_32px)] rounded-[24px]"}>
				<div className={"h-full relative  "}>
					<div className={"border-b border-outline-variant-light p-6"}>
						<h3 className={"text-title-large"}>
							Add New Menu Item
						</h3>
					</div>
					<div className={"px-6 py-6 space-y-4"}>
						<FilledTextField value={data.title} onChange={(e)=>handleChangeData('title',e.target.value)} label={"Label"}/>

						{/*<FilledTextField label={"Root Menu"}/>*/}
						{/*<FilledTextField label={"Icon"}/>*/}
						<IconPicker onIconSelect={(v) => handleChangeData("icon", v)} defValue={data.icon} label={"Menu Icon"}/>
						{/*<FilledTextField  onChange={(e) => handleChangeData("title", e.target.value)} value={data.title}*/}
						{/*                 label={"title"}/>*/}
						{/*<div className={"col-span-1"}>*/}
						<FilledSelect value={pages.findIndex(item=>item.slug===data.page)===-1?"Custom URL":pages.find(item=>item.slug===data.page)?.title} label={"URL"}>
							{pages.map((page,index)=><ListItem onClick={(e)=>{
								if (page.slug!=="You_Custom_URL"){
									handleChangeData("page", page.slug)
									setIsCustomURL(false)
								}else{
									setIsCustomURL(true)
								}

							}} headline={page.title} supportingText={"/ "+page.slug} key={index}/>)}
						</FilledSelect>
						{isCustomURL&&<FilledTextField value={pages.find(item=>item.value===data.page)?.title} onChange={(e)=>handleChangeData("page", e.target.value)} label={"URL"}/>}
						{/*</div>*/}
					</div>
					<div className={"absolute bottom-0 border-t border-outline-variant-light p-6 flex justify-end w-full"}>
						<Button onClick={onClose}>
							Cancel
						</Button>
						<Button onClick={()=>handleMenuItemDialogChanges(data)} type={"filled"}>
							Save
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
