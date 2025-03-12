import PageBuilder from "@page_builder/PageBuilder";
async function getData(slug) {
    'use server'

    const res = await fetch(`http://localhost:3000/api/template/${slug}`,{cache: "no-cache"})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    // console.log("res",await res.json())
    return await res.json()
}
async function getSiteSettingData(slug) {
    'use server'
    const res = await fetch(`http://localhost:3000/api/site-setting`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


export default async function page({params}) {
    const data = await getData(params.slug)
    const siteSetting = await getSiteSettingData(params.slug)
    return (
        <PageBuilder type={"template"} siteSetting={siteSetting} slug={params.slug} data={data}/>
    )
}