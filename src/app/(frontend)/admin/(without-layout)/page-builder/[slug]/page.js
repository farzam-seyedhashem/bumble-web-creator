import PageBuilder from "@page_builder/PageBuilder";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getPostBySlug, getPosts} from "@controller/PostController";
import {getPageById} from "@controller/PageController";

export default async function page({params}) {

    const data = JSON.stringify(await getPageById(params.slug))
    const siteSetting = await getSiteSetting()
    let lastPost =JSON.stringify(await getPosts(1,1))
    // console.log("data",data)
    // if (data.slug==="post") {
    //     lastPost =
    // }
    return (
        <PageBuilder  lastPost={JSON.parse(lastPost)} type={"page"} siteSetting={JSON.parse(siteSetting)} slug={params.slug} data={JSON.parse(data)}/>
    )
}