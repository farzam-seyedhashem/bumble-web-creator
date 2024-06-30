import {index,store} from '@controller/PageController'
import {revalidateTag} from "next/cache";
export async function GET(req) {
   console.log(await index(req))
    return Response.json(await index(req))

}
export async function POST(request) {

    const data = await request.json()

    return Response.json(await store(data))
    // return Response.json({ data })
}