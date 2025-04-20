import {update, destroy} from '@controller/PageController'
import {revalidateTag} from "next/cache";

export async function GET(req, {params}) {
    // const page = await getById(params.id)
    // console.log(page)
    // if (page === null || typeof page === 'undefined') {
    //     // console.error("-------","page not found")
    //     return Response.json({error: 'Not Found!'}, {status: 404})
    // }
    //
    // return Response.json(page)
}
export async function PUT(request,{params}) {
    const data = await request.json()
    revalidateTag("pages")
    return Response.json(await update(data,params.id))
}
export async function DELETE() {

    const data = {message:"hello"}

    return Response.json({ data })
}
