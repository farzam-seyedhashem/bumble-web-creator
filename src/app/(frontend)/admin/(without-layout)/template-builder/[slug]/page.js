import PageBuilder from "@page_builder/PageBuilder";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getTemplateById} from "@controller/TemplateController";
// async function getData(slug) {
//     'use server'
//
//     const res = await fetch(`http://localhost:3000/api/template/${slug}`,{cache: "no-cache"})
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//     // console.log("res",await res.json())
//     return await res.json()
// }


export default async function page({params}) {
    const data = await getTemplateById(params.slug)
    const siteSetting = JSON.parse(await getSiteSetting())
    return (
        <PageBuilder type={"template"} siteSetting={siteSetting} slug={params.slug} data={data}/>
    )
}