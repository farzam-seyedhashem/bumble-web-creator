'use server'
import {destroy} from "@controller/TemplateController";
import {revalidateTag} from "next/cache";

export async function createTemplate() {

}
export async function updateTemplate(id) {

}
export async function deleteTemplate(id) {
	await destroy(id)
	revalidateTag("pages")
	return ""
}