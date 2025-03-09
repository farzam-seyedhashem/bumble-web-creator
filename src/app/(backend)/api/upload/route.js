import {store} from '@backend/_controller/FileController';

export async function POST(request) {
    const formData = await request.formData()
    const file = await store(formData.getAll('file')[0])
    return Response.json(file)
}