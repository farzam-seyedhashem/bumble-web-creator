import {index,store} from '@controller/GlobalObjectController'
import {revalidateTag} from "next/cache";
export async function GET(req) {
    return Response.json(await index(req))
}
export async function POST(request) {

    const data = await request.json()
    revalidateTag("posts")
    return Response.json(await store(data))
    // return Response.json({ data })
}