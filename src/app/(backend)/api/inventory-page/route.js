import {index,store} from '@controller/InventoryPageController'
import {revalidateTag} from "next/cache";
export async function GET(req) {
    revalidateTag("inventory-page")
    return Response.json(await index(req))
}
export async function POST(request) {

    const data = await request.json()
    revalidateTag("menu")
    return Response.json(await store(data))
    // return Response.json({ data })
}