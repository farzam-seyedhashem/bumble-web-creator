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
        const {editItem, item, idNumber,setComponentEditor} = this.props
        return (
            <div
                 className={"group relative  outline-tertiary-container-light dark:outline-tertiary-dark hover:outline hover:outline-2"}>

                {item.idType === "title" &&
                    <Typography key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} setComponentEditor={setComponentEditor} item={item}/>}

                {item.idType === "paragraph" && <Paragraph key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} setComponentEditor={setComponentEditor} item={item}/>}
                {
                    item.idType === "button" && <ButtonComponent editItem={(key,value)=>editItem(idNumber,key,value)} key={item.uniqueId} item={item}/>
                }
                {
                    item.idType === "image" && <ImageComponent editItem={(key,value)=>editItem(idNumber,key,value)} item={item}/>
                }
                {item.idType === "container" &&
                    <Container key={item.uniqueId} idNumber={idNumber} item={item} editItem={(key,value)=>editItem(idNumber,key,value)}/>}
                {item.idType === "grid" ?
                    <Grid key={item.uniqueId} idNumber={idNumber} item={item} editItem={(key,value)=>editItem(idNumber,key,value)}/> : ""}
                {/*{item.id === "grid" && <Grid key={item.uniqueId} item={item} editItem={editItem}/>}*/}
                {item.idType === "slider" && <SliderComponent key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} idNumber={idNumber} item={item} />}
                {item.idType === "featuredSection" && <FeatureSection key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} idNumber={idNumber} item={item} />}
                {item.idType === "iconPicker" && <IconComponent key={item.uniqueId} editItem={editItem} item={item} />}
                {item.idType === "blogPosts" && <BlogPostComponent key={item.uniqueId} editItem={editItem} item={item} />}
                {item.idType === "inventoryCard" && <InventoryComponent key={item.uniqueId} editItem={editItem} item={item} />}
                {/*{item.idType === "iconPicker" && <Paragraph />}*/}
            </div>
        )
    }
}

export default ComponentGenerator;