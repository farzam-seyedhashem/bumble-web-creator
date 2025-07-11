'use client';
import React, {useEffect, useState, Fragment} from "react";
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
import PostCard from "@website/component/PostCard";


const fetcher = (url) => fetch(url).then((r) => r.json())

export default function TestimonialComponents({
	                                              fields,
	                                              editDialogOpenComponentId,
	                                              setEditDialogOpenComponentId,
	                                              color,
	                                              dragFunc,
	                                              removeItemFunc,
	                                              isDesktop,

	                                              item,
	                                              key
                                              }) {

	const {data, error, isLoading, mutate} = useSWR(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/posts`,
		fetcher
	)
	const {data: postCardData, error: postCardErr, isLoading: postCardIsLoading, mutate: mutatePostCard} = useSWR(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/post-card`,
		fetcher
	)

	if (isLoading || postCardIsLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	const postCard = postCardData?.data
	return (

		<>
			<style>{`
                .blog-card{
                background-color: ${postCard.backgroundColor};
                padding: ${postCard.padding.join("px ") + "px"};
                border-radius: ${postCard.cardBorderRadius + "px"};
                height:100%;
                }
                .blog-card .image-container{
                border-radius: ${postCard.imageBorderRadius.join("px ") + "px"};
				margin: ${postCard.imageMargin.join("px ") + "px"};
                }
                 .blog-card .post-title{
               color: ${postCard.titleTextColor};
               margin: ${postCard.titleMargin.join("px ") + "px"};
                } 
                .blog-card .post-description{
                    color: ${postCard.descriptionTextColor};
					margin: ${postCard.descriptionMargin.join("px ") + "px"};
                }
                .blog-card .post-link{
					color: ${postCard.buttonTextColor};
					 margin: ${postCard.buttonMargin.join("px ") + "px"};
                }
                 .blog-card .post-button{
color: ${postCard.buttonTextColor};
background-color: ${postCard.buttonBackgroundColor};
margin: ${postCard.buttonMargin.join("px ") + "px"};
                }
            `}</style>
			<div className={`${item.uniqueId}   rounded-[4px] relative `}>
				<div className={"w-full"}>
					{item.type === 1 && <Swiper className={" w-full"}>
						{data.data.map((item) => <SwiperSlide key={item._id}>
							<PostCard item={item} postCard={postCardData?.data}/>
						</SwiperSlide>)}
					</Swiper>}
					{item.type === 2 && <div
						className={`grid md:grid-cols-${item.desktopColumn} grid-cols-${item.mobileColumn} gap-4`}>
						{data.data.map((item, index) =>
							<PostCard cardClass={item.uniqueId + "-card"} key={index} item={item}
							          postCard={postCardData?.data}/>
						)}
					</div>}
				</div>

			</div>
		</>
	)
}