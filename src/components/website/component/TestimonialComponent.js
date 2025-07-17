'use client';
import React, {useEffect, useState, Fragment, useRef} from "react";
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
import useSWR from 'swr'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";


const fetcher = (url) => fetch(url).then((r) => r.json())

export default function TestimonialComponents({
	                                              fields,
	                                              editDialogOpenComponentId,
	                                              setEditDialogOpenComponentId,
	                                              color,
	                                              dragFunc,
	                                              removeItemFunc,
	                                              isDesktop,
	                                              editItem,
	                                              item,
                                              }) {
	const slideRef = useRef(item.uniqueId);

	const {data, error, isLoading, mutate} = useSWR(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/testimonials?per_page=${item.numberLoad}`,
		fetcher
	)

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	return (
		<>
			<style>{`
				.testimonial-card{
				background-color:${item.backgroundColor};
				}
				.primary-text-color{
				color:${item.primaryTextColor};
				}
				.variant-text-color{
				color:${item.primaryTextColor};
				}
			`}</style>
			<div className={`${item.uniqueId}`}>
				<div className={"relative w-full flex items-center "}>

					{item.type === 1 &&
						<Swiper  navigation={{enabled: false}} modules={[Navigation]} onSwiper={(swiper) => {
							slideRef.current = swiper;
						}} className={"relative w-full"}>
							{data.data.map((item) => <SwiperSlide key={item._id}>
								<div
									className={"testimonial-card rounded-[24px] px-[80px] py-[80px]"}>
									<div
										className={"primary-text-color text-headline-large font-black"}>
										“
										{item.description}
										With Tarro, I don’t have to worry about employees taking sick days or vacations.
										”
									</div>
									<div
										className={"primary-text-color text-title-large font-bold mt-10"}>
										{item.name}
									</div>
									<div
										className={"variantTextColor text-title-medium font-medium"}>
										{item.job} / {item.company}
									</div>
								</div>
							</SwiperSlide>)}

							<button className={"z-999 absolute left-4 top-1/2 transform -translate-y-1/2 h-[40px] w-[40px]"} onClick={() => slideRef.current.slidePrev()}>
								<Icon size={40}>
									chevron_left
								</Icon>
							</button>
							<button className={"z-999 absolute right-4 top-1/2 transform -translate-y-1/2 h-[40px] w-[40px]"} onClick={() => slideRef.current.slideNext()}>
								<Icon size={40}>
									chevron_right
								</Icon>
							</button>
						</Swiper>}

					{item.type === 2 && <div
						className={`${isDesktop ? `grid-cols-${item.desktopColumn}` : `grid-cols-${item.mobileColumn}`} grid  gap-4`}>
						{data.data.map((item) => <div key={item._id} className={"h-full"}>
							<div style={{backgroundColor: item.backgroundColor}}
							     className={"rounded-[24px] h-full px-[40px] py-[40px]"}>
								<div style={{color: item.primaryTextColor}}
								     className={" text-title-large font-extrabold"}>
									“
									{item.description}
									{/*With Tarro, I don’t have to worry about employees taking sick days or vacations.*/}
									”
								</div>
								<div style={{color: item.primaryTextColor}}
								     className={"text-title-medium font-bold mt-10"}>
									{item.name}
								</div>
								<div style={{color: item.variantTextColor}}
								     className={"variant-text-color text-title-small font-medium"}>
									{item.job} / {item.company}
								</div>
							</div>
						</div>)}
					</div>}
				</div>
				<div
					className={`absolute hidden ${item.uniqueId}-panel z-[888]   -top-[32px] right-0  transform `}>
					<div
						className={"px-4 py-1 space-x-3 rounded-t-[8px] flex dark:bg-primary-dark bg-primary-light"}>

						<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								edit
							</Icon>
						</button>
						<button onClick={() => copyToClipboard()}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								content_copy
							</Icon>
						</button>
						<button onDragOver={(event) => {
							event.preventDefault();
							removeItemFunc()
						}} onDragStartCapture={(e) => dragFunc(e)} draggable={true}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={`${item.uniqueId} !text-on-primary-light dark:!text-on-primary-dark text-[20px]`}>
								drag_indicator
							</Icon>
						</button>
						<button
							className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  "}>
							<Icon onClick={removeItemFunc} size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								delete
							</Icon>
						</button>
					</div>
				</div>

			</div>

		</>
	)
}