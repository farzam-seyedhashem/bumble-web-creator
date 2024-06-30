import {update, getBySlug, destroy} from '@controller/PostController'
import {revalidateTag} from "next/cache";
export async function GET(req,{params}) {
    // console.log('ggggg',await getBySlug(params.slug))
    const page = await getBySlug(params.slug)

    console.log("----------------------------")
    console.log("------",page)
    if (page ===null || typeof page === 'undefined') {
        // console.error("-------","page not found")
        return  Response.json({ error: 'Not Found!' }, { status: 404 })
    }

    return Response.json(page)
}
export async function PUT(request,{params}) {
    const data = await request.json()
    revalidateTag("posts")
    return Response.json(await update(data,params.slug))
}
export async function DELETE() {

    const data = {message:"hello"}

    return Response.json({ data })
}