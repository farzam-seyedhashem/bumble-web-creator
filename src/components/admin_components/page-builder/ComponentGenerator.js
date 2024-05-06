import Container from "@admin/page-builder/base_components/Container";
import Grid from "@admin/page-builder/base_components/Grid";
import Icon from "@m3/assets/icons/Icon";
import Typography from "@page_builder/base_components/Typography";
import Paragraph from "@page_builder/base_components/Paragraph";
import ImageComponent from '@page_builder/base_components/ImageComponent'
import ButtonComponent from "@page_builder/base_components/ButtonComponent";
import React from 'react'
import SliderComponent from "@page_builder/base_components/SliderComponent";
import IconButton from "@m3/icon_buttons/IconButton";
import FeatureSection from "@page_builder/base_components/FeatureSection";
import IconPicker from "@page_builder/editor_components/IconPicker";
import IconComponent from "@page_builder/base_components/IconComponent";
import BlogPostComponent from "@page_builder/base_components/BlogPostComponent";
import InventoryComponent from "@page_builder/base_components/InventoryComponent";
class ComponentGenerator  extends React.Component {
    constructor(props) {
        super(props);

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //   this.shouldComponentUpdate(prevProps)
    // }


    render() {
        const {editItem,isDesktop, item, idNumber,dragFunc,setComponentEditor,removeItemFunc} = this.props
        return (
            <div
                 className={"group relative  outline-tertiary-container-light dark:outline-tertiary-container-dark hover:outline hover:outline-2"}>

                {item.idType === "title" &&
                    <Typography dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} setComponentEditor={setComponentEditor} item={item}/>}

                {item.idType === "paragraph" && <Paragraph dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} setComponentEditor={setComponentEditor} item={item}/>}
                {
                    item.idType === "button" && <ButtonComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} editItem={(key,value)=>editItem(idNumber,key,value)} key={item.uniqueId} item={item}/>
                }
                {
                    item.idType === "image" && <ImageComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} editItem={(key,value)=>editItem(idNumber,key,value)} item={item}/>
                }
                {item.idType === "container" &&
                    <Container dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} idNumber={idNumber} item={item} editItem={(key,value)=>editItem(idNumber,key,value)}/>}
                {item.idType === "grid" &&
                    <Grid dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} idNumber={idNumber} item={item} editItem={(key,value)=>editItem(idNumber,key,value)}/> }
                {/*{item.id === "grid" && <Grid key={item.uniqueId} item={item} editItem={editItem}/>}*/}
                {item.idType === "slider" && <SliderComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} idNumber={idNumber} item={item} />}
                {item.idType === "featuredSection" && <FeatureSection dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} idNumber={idNumber} item={item} />}
                {item.idType === "iconPicker" && <IconComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} item={item} />}
                {item.idType === "blogPosts" && <BlogPostComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} item={item} />}
                {item.idType === "inventoryCard" && <InventoryComponent dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} item={item} />}
                {/*{item.idType === "iconPicker" && <Paragraph />}*/}
            </div>
        )
    }
}

export default ComponentGenerator;