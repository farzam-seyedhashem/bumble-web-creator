'use server'
const fileUploadAPIURL = "http://localhost:3001/upload"
import {store} from "@controller/FileController"
export async function StoreFile(file) {
	// console.log(await store(file.file))
	return JSON.stringify(await store(file.file))
}





