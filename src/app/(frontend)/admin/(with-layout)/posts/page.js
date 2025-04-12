import {notFound} from "next/navigation";
import FAB from "@m3/floating_action_buttons/FAB";
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import Image from "next/image";
import Icon from "@m3/assets/icons/Icon";

async function getData(slug) {
	'use server'
	const res = await fetch(`http://localhost:3000/api/posts`, {next: {tags: ['posts']}})
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
		<div className={"px-6 py-6  bg-surface-light dark:bg-surface-dark w-full min-h-screen"}>
			<Link href={"/admin/posts/addnew"}>
				<FAB className={"fixed bottom-6 right-6"} isExtended label={"Add New Post"}>
					add
				</FAB>
			</Link>
			<h1 className={"text-headline-large font-bold mb-2"}>
				List of Posts
			</h1>
			<table className={"w-full h-fit"}>
				<thead className={"w-full"}>
				<tr className={"h-[64px]"}>
					<td className={'w-1/12 '}>

					</td>
					<td className={"w-2/12"}>
						title
					</td>
					<td className={"w-1/12"}>
						slug
					</td>
					<td className={"w-2/12"}>
						tags
					</td>
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
							{item.thumbnail?<Image width={100} height={100} objectFit={"responsive"}
							        className={"w-[48px] h-[48px] rounded-full"} src={"http://localhost:3001/uploaded/"+ item.thumbnail.name}
							        alt={item.thumbnail.alt}/>:<div className={"flex items-center justify-center bg-surface-variant-light dark:bg-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark w-[48px] h-[48px] rounded-full"}>
								<Icon>
									image
								</Icon>
							</div>}
						</div>
					</td>
					<td className={"w-2/12"}>
						{item.title}
					</td>
					<td className={"w-1/12"}>
						{item.slug}
					</td>
					<td className={"w-2/12"}>
						{item.tags.map((tag, tagIndex) => <span key={tagIndex}>{tag.title}</span>)}
					</td>
					<td className={"w-2/12"}>
						{item.createdAt}
					</td>
					<td className={"w-2/12"}>
						{item.updatedAt}
					</td>
					<td className={"w-2/12"}>
						<div className={"flex items-center"}>
							<Link href={`/admin/posts/${item.slug}`}>
							<IconButton>
								edit
							</IconButton>
							</Link>
							<IconButton className={"text-error-light dark:text-error-dark"}>
								delete
							</IconButton>
						</div>
					</td>

				</tr>)}
				</tbody>

			</table>

		</div>
	)
}