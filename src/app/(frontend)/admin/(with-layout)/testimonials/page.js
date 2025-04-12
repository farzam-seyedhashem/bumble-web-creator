import {notFound} from "next/navigation";
import FAB from "@m3/floating_action_buttons/FAB";
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import Image from "next/image";
import TestimonialPage from "@admin/admin-panel/testimonial/TestimonialPage";

async function getData(slug) {
	'use server'
	const res = await fetch(`http://localhost:3000/api/testimonials`, {next: {tags: ['testimonials']}})
	if (!res.ok) {
		if (res.status === 404) {
			notFound()
		}
		throw new Error('Failed to fetch data')
	}
	// return res.json()
	return res.json()
}

export default async function PostPage() {
	const data = await getData()
	return (
		<>
			<TestimonialPage data={data}/>
		</>
	)
}