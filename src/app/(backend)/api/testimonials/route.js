import {index,store} from '@controller/TestimonialsController'
import {revalidateTag} from "next/cache";
export async function GET(req) {
    // revalidateTag("testimonials")
    // const searchParams = req.nextUrl.searchParams
    // console.log("ffff",searchParams)
    return Response.json(await index(req))
}
export async function POST(request) {

    const data = await request.json()
    revalidateTag("testimonials")
    return Response.json(await store(data))
    // return Response.json({ data })
}