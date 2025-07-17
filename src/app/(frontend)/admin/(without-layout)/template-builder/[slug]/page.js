import PageBuilder from "@page_builder/PageBuilder";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getTemplateById} from "@controller/TemplateController";
import {getPosts} from "@controller/PostController";
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
    const data = JSON.stringify(await getTemplateById(params.slug))
    const siteSetting = await getSiteSetting()
    let lastPost =JSON.stringify(await getPosts(1,1))

    return (
        <PageBuilder lastPost={JSON.parse(lastPost)} type={"template"} siteSetting={JSON.parse(siteSetting)} slug={params.slug} data={JSON.parse(data)}/>
    )
}