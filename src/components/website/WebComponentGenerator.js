'use server'
import Typography from "@website/component/Typography";
import Paragraph from "@website/component/Paragraph";
import Button from "@website/component/ButtonComponent";
import Container from "@website/component/Container";
import BlogPostComponent from "@website/component/BlogPostComponent";
import Grid from "@website/component/Grid";
import IconComponent from "@website/component/IconComponent";
import ImageComponent from "@website/component/ImageComponent";
import FeatureSection from "@website/component/FeatureSection";
import SVGComponent from "@website/component/SVGComponent";
export default async function WebComponentGenerator({item}) {
    return(
        <>
        {item.idType === "title" &&
                <Typography key={item.uniqueId} item={item}/>}

    {item.idType === "paragraph" && <Paragraph key={item.uniqueId} item={item}/>}
    {item.idType === "button" && <Button key={item.uniqueId} item={item}/>}
    {item.idType === "container" && <Container key={item.uniqueId} item={item}/>}
    {item.idType === "grid" && <Grid key={item.uniqueId} item={item}/>}
    {item.idType === "svg" && <SVGComponent key={item.uniqueId} item={item}/>}
    {/*{item.idType === "iconPicker" && <IconComponent key={item.uniqueId} item={item}/>}*/}
    {/*{*/}
    {/*    item.idType === "button" && <ButtonComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} editItem={(key,value)=>editItem(idNumber,key,value)} key={item.uniqueId} item={item}/>*/}
    {/*}*/}
    {
        // item.idType === "image" && <ImageComponent key={item.uniqueId} item={item}/>
    }
    {/*{item.idType === "container" &&*/}
    {/*<Container dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} idNumber={idNumber} item={item} editItem={(key,value)=>editItem(idNumber,key,value)}/>}*/}
    {/*{item.idType === "grid" &&*/}
    {/*// <Grid dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} idNumber={idNumber} item={item} editItem={(key,value)=>editItem(idNumber,key,value)}/> }*/}
    {/*{item.id === "grid" && <Grid key={item.uniqueId} item={item} editItem={editItem}/>}*/}
    {/*{item.idType === "slider" && <SliderComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} idNumber={idNumber} item={item} />}*/}
    {/*{item.idType === "featuredSection" && <FeatureSection key={item.uniqueId} item={item} />}*/}
    {/*{item.idType === "iconPicker" && <IconComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} item={item} />}*/}
    {/*{item.idType === "blogPosts" && <BlogPostComponent key={item.uniqueId} item={item} />}*/}
    {/*{item.idType === "inventoryCard" && <InventoryComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} item={item} />}*/}
        </>
)
}