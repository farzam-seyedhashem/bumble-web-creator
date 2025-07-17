import {update, getBySlug, destroy, getByTemplateId} from '@controller/TemplateController'
import {revalidateTag} from "next/cache";
export async function GET(req,{params}) {
    const template = await getByTemplateId(params.id)
    if (template === null || typeof template === 'undefined') {
        // console.error("-------","page not found")
        return  Response.json({ error: 'Not Found!' }, { status: 404 })
    }
// console.log("pageppp",page)
    return Response.json(template)
}