'use server'
import {destroy} from "@controller/PageController";

export async function createPage() {

}
export async function updatePage(id) {

}
export async function deletePage(id) {
	console.log(id)
	await destroy(id)
	return ""
}