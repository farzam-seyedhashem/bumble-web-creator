import PageBuilder from "@page_builder/PageBuilder";
async function getData(slug) {
    'use server'
    const res = await fetch(`http://localhost:3000/api/page/id/${slug}`,{ next: { tags: ['pages'] },cache:"no-cache"})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
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
async function getTemplateComponent(slug) {
    'use server'
    const res = await fetch(`http://localhost:3000/api/site-setting`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function getLastPost() {
    'use server'
    const res = await fetch(`http://localhost:3000/api/posts?per_page=1`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


export default async function page({params}) {
    const data = await getData(params.slug)
    const siteSetting = await getSiteSettingData(params.slug)
    let lastPost = []
    // console.log("data",data)
    if (data.slug==="post") {

        lastPost =  await getLastPost()
    }
    return (
        <PageBuilder lastPost={lastPost} type={"page"} siteSetting={siteSetting} slug={params.slug} data={data}/>
    )
}