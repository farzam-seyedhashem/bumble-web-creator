import PageBuilder from "@page_builder/PageBuilder";
async function getData(slug) {
    'use server'
    const res = await fetch(`http://localhost:3000/api/page/${slug}`,{ next: { tags: ['pages'] }})
    const siteSettingRes = await fetch(`http://localhost:3000/api/page/${slug}`,{ next: { tags: ['site-setting'] }})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    if (!siteSettingRes.ok) {
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


export default async function page({params}) {
    const data = await getData(params.slug)
    const siteSetting = await getSiteSettingData(params.slug)
    return (
        <PageBuilder siteSetting={siteSetting} slug={params.slug} data={data}/>
    )
}