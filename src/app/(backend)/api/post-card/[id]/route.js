import {update, getBySlug, destroy} from '@controller/PostCardController'
import {revalidateTag} from "next/cache";
export async function GET(req,{params}) {
    const page = await getBySlug(params.id)

    if (page ===null || typeof page === 'undefined') {
        // console.error("-------","page not found")
        return  Response.json({ error: 'Not Found!' }, { status: 404 })
    }

    return Response.json(page)
}
export async function PUT(request,{params}) {
    const data = await request.json()
    return Response.json(await update(data,params.id))
}
export async function DELETE() {

    const data = {message:"hello"}

    return Response.json({ data })
}