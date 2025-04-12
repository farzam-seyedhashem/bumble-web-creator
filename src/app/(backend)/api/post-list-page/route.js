import {index,store} from '@controller/PostListPageController'
import {revalidateTag} from "next/cache";
export async function GET(req) {
    return Response.json(await index(req))
}
export async function POST(request) {

    const data = await request.json()
    revalidateTag("post-list-page")
    return Response.json(await store(data))
    // return Response.json({ data })
}