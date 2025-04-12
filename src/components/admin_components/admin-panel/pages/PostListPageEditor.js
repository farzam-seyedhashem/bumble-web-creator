'use client'
import {useState} from "react";
import Button from "@m3/buttons/Button";

export default function PostListPageEditor({siteSetting, postListPage}) {
	console.log(postListPage.data);
	const [data, setData] = useState(postListPage.data[0]?.data ? postListPage.data[0]?.data : {
		layout: "with-sidebar",
		colsNumber: "4",
		headerLayout: "container",
		headerTemplateId: "",
		sidebarTemplateId: "",
		tagLayout: "with-border",

		tagBorderColor:"",
		tagSelectedBorderColor:"",
		tagBackgroundColor:"",
		tagSelectedTextColor:"",
		tagTextColor:"",

		paginationTextColor:"",
		paginationSelectedTextColor:"",
		paginationBackgroundColor:"",
		paginationSelectedBackgroundColor:"",
		paginationBorderColor:"",
		paginationSelectedBorderColor:"",


	});
	const saveData = () => {
		try {
			fetch(`/api/post-card/${postListPage.data[0]._id}`, {
				method: 'PUT',
				body: JSON.stringify({data: data})
			}).then(response =>
					console.log(response)

				// setIsOpen(true)
			);
		} catch (error) {
			alert('jhhhh');
		}
	}
	return (
		<div className={"container mx-auto"}>
			<div className={"flex  py-6 px-4 items-center justify-between"}>
				<h2 className={"  text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>
					Post List Page
				</h2>
				<Button onClick={() => saveData()} icon={"save"} type="filled">
					Save
				</Button>
			</div>
			<div className={"min-h-screen flex w-full"}>
				<div
					className={"w-8/12 p-10 flex items-center justify-center h-[900px] rounded-[24px]  dark:bg-surface-container-high-dark bg-surface-container-high-light"}>
					<div
						className={"overflow-hidden w-full px-0 py-0 rounded-[16px] h-full bg-surface-light dark:bg-surface-dark"}>
						{<div className={`${data["headerLayout"]==="container"?"px-4 py-4":""}`}>
							<div
								className={`${data["headerLayout"]==="container"?"rounded-[12px]":""} flex items-center justify-center bg-surface-container-high-light h-[200px]`}>
								Header Template
							</div>
						</div>}
						<div className={"flex px-4 mt-4 space-x-4"}>
							{data["layout"] === "with-sidebar" && <div className={"w-3/12"}>
								<div className={"h-fit rounded-[8px]  border border-outline-variant-light p-4"}>
									<h2 className={"text-label-large font-bold"}>
										Tags
									</h2>
									<div className={"mt-3 "}>
										<div
										     style={{width: `calc((100%/12)*${5})`}}
										     className={"text-label-small items-center justify-center mr-1 mb-1 inline-flex rounded-full bg-secondary-container-light  px-4 h-[32px]"}>
										Tag
										</div>
										{Array.from([4, 5, 6]).map((item, index) => <div key={index}
										                                                    style={{width: `calc((100%/12)*${item})`}}
										                                                    className={"items-center justify-center text-on-surface-variant-light text-label-small mr-1 mb-1 inline-flex rounded-full bg-surface-container-high-light  px-4 h-[32px]"}>
												Tag
										</div>
										)}
									</div>
								</div>
								<div
									className={" h-[300px] flex items-center justify-center text-label-large mt-4 rounded-[8px] bg-surface-container-high-light p-4"}>
									Sidebar Template
								</div>
							</div>}
							<div className={`${data["layout"] === "with-sidebar" ? "w-9/12" : "w-full"}`}>
								{data["layout"] === "without-sidebar" && <div className={"w-full "}>
									{Array.from([1, 3, 2, 4, 1]).map((item, index) => <div
										style={{width: `calc((100%/12)*${item})`}} key={index}
										className={`rounded-full h-[32px] mr-2 bg-surface-container-high-light inline-flex`}>

									</div>)}
								</div>}

								<div className={` grid grid-cols-${data.colsNumber} gap-4`}>
									{Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8]).map(item => <div key={item}
									                                                          className={"bg-surface-container-high-light rounded-[8px] h-[130px] "}>

									</div>)}
								</div>
								<div className={"flex space-x-1 mt-4 justify-end"}>
									<div
										className={" rounded-full text-on-primary-light w-[24px] h-[24px] flex items-center justify-center dark:text-on-primary-dark text-label-large font-medium bg-primary-light dark:bg-primary-dark"}>
										1
									</div>
									<div
										className={"rounded-full  w-[24px] h-[24px] flex items-center justify-center text-label-large font-medium  dark:bg-primary-dark"}>
										2
									</div>
									<div
										className={"rounded-full  w-[24px] h-[24px] flex items-center justify-center  text-label-large font-medium  dark:bg-primary-dark"}>
										3
									</div>
								</div>

							</div>

						</div>
					</div>
				</div>
				<div
					className={"w-4/12 "}>

				</div>
			</div>
		</div>
	)
}