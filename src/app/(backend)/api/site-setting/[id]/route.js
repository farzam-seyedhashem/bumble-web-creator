import {update, getBySlug, destroy} from '@controller/SiteSettingController'
import {revalidateTag} from "next/cache";
export async function GET(req,{params}) {
    // console.log('ggggg',await getBySlug(params.slug))
    const page = await getBySlug(params.id)

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
    revalidateTag("site-setting")
    return Response.json(await update(data,params.id))
}
export async function DELETE() {

    const data = {message:"hello"}

    return Response.json({ data })
}