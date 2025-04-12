import PageBuilder from "@page_builder/PageBuilder";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getPosts} from "@controller/PostController";
import {getPageById} from "@controller/PageController";

export default async function page({params}) {
    const data = await getPageById(params.slug)
    const siteSetting = await getSiteSetting()
    let lastPost = []
    // console.log("data",data)
    if (data.slug==="post") {
        lastPost =  await getPosts(1,12)
    }
    return (
        <PageBuilder lastPost={lastPost} type={"page"} siteSetting={siteSetting} slug={params.slug} data={data}/>
    )
}