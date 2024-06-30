import {notFound} from "next/navigation";
import FAB from "@m3/floating_action_buttons/FAB";

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
        <div className={"px-6 py-6 flex bg-surface-light dark:bg-surface-dark w-full min-h-screen"}>
            <FAB className={"fixed bottom-6 right-6"} isExtended label={"Add New Post"}>
                add
            </FAB>
            <ul>
            {/*{data.map((item, index) =>*/}
            {/*    <li key={index}>*/}

            {/*    </li>*/}
            {/*)}*/}
            </ul>
        </div>
    )
}