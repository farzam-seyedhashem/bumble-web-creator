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
import Map from "@page_builder/base_components/Map";
import ComponentsLib from '@/Components.json'
import SVGComponent from "@page_builder/base_components/SVGComponent";
import WysiwygEditor from "@page_builder/base_components/WysiwygEditor ";
import TestimonialComponent from "@page_builder/base_components/TestimonialComponent";
import FAQComponent from "@page_builder/base_components/FAQComponent";
import VideoComponent from "@page_builder/base_components/VideoComponent";
import BlogTagsComponent from "@page_builder/base_components/BlogTagsComponent";
import BlogTitleComponent from "@page_builder/base_components/BlogTitleComponent";
import PostContentComponent from "@page_builder/base_components/PostContentComponent";
import PostThumbnailComponent from "@page_builder/base_components/PostThumbnailComponent";
// import PostInformationComponent from "@page_builder/base_components/PostInformationComponent";
import PostTagsComponent from "@page_builder/base_components/PostTagsComponent";
import PostDateUpdatedComponent from "@page_builder/base_components/PostDateUpdatedComponent";
import ShareButtonComponent from "@page_builder/base_components/ShareButtonComponent";
import PostDateAddedComponent from "@page_builder/base_components/PostDateAddedComponent";
import FormComponent from "@page_builder/base_components/FormComponent";
import LottieFileComponent from "@page_builder/base_components/LottieFileComponent";
import StoriesComponent from "@page_builder/base_components/StoriesComponent";

class ComponentGenerator extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const {
			editDialogOpenComponentId,
			setEditDialogOpenComponentId,
			editItem,
			siteSetting,
			isDesktop,
			item,
			lastPost,
			idNumber,
			dragFunc,
			removeItemFunc
		} = this.props
		const components = ComponentsLib.components;
		return (
			<div className={"group relative"}>
				{item.idType === "title" &&
					<Typography fields={components.find(c => c.uid === item.uid)?.fields}
					            editDialogOpenComponentId={editDialogOpenComponentId}
					            setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					            color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					            removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					           
					            editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					            item={item}/>}
				{item.idType === "story" &&
					<StoriesComponent fields={components.find(c => c.uid === item.uid)?.fields}
					            editDialogOpenComponentId={editDialogOpenComponentId}
					            setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					            color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					            removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}

					            editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					            item={item}/>}
				{item.idType === "lottie" &&
					<LottieFileComponent fields={components.find(c => c.uid === item.uid)?.fields}
					            editDialogOpenComponentId={editDialogOpenComponentId}
					            setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					            color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					            removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					            editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					            item={item}/>}
				{item.idType === "testimonial" &&
					<TestimonialComponent fields={components.find(c => c.uid === item.uid)?.fields}
					                      editDialogOpenComponentId={editDialogOpenComponentId}
					                      setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					                      color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					                      removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					                     
					                      editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                      item={item}/>}
				{item.idType === "faq" &&
					<FAQComponent fields={components.find(c => c.uid === item.uid)?.fields}
					              editDialogOpenComponentId={editDialogOpenComponentId}
					              setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					              color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					              removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					             
					              editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					              item={item}/>}
				{item.idType === "form" &&
					<FormComponent fields={components.find(c => c.uid === item.uid)?.fields}
					              editDialogOpenComponentId={editDialogOpenComponentId}
					              setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					              color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					              removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					             
					              editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					              item={item}/>}

				{item.idType === "paragraph" && <Paragraph fields={components.find(c => c.uid === item.uid)?.fields}
				                                           editDialogOpenComponentId={editDialogOpenComponentId}
				                                           setEditDialogOpenComponentId={setEditDialogOpenComponentId}
				                                           color={siteSetting.color}
				                                           dragFunc={(e) => dragFunc(e, idNumber)}
				                                           removeItemFunc={() => removeItemFunc(idNumber)}
				                                           isDesktop={isDesktop}
				                                           editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
				                                           item={item}/>}
				{item.idType === "svg" && <SVGComponent fields={components.find(c => c.uid === item.uid)?.fields}
				                                        editDialogOpenComponentId={editDialogOpenComponentId}
				                                        setEditDialogOpenComponentId={setEditDialogOpenComponentId}
				                                        color={siteSetting.color}
				                                        dragFunc={(e) => dragFunc(e, idNumber)}
				                                        removeItemFunc={() => removeItemFunc(idNumber)}
				                                        isDesktop={isDesktop}
				                                        editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
				                                        item={item}/>}
				{
					item.idType === "button" &&
					<ButtonComponent fields={components.find(c => c.uid === item.uid)?.fields}
					                 editDialogOpenComponentId={editDialogOpenComponentId}
					                 setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                 color={siteSetting?.color}
					                 dragFunc={(e) => dragFunc(e, idNumber)}
					                 removeItemFunc={() => removeItemFunc(idNumber)}
					                 isDesktop={isDesktop}
					                 editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                 item={item}/>
				}
				{
					item.idType === "wysiwygEditor" &&
					<WysiwygEditor fields={components.find(c => c.uid === item.uid)?.fields}
					               editDialogOpenComponentId={editDialogOpenComponentId}
					               setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					               color={siteSetting?.color}
					               dragFunc={(e) => dragFunc(e, idNumber)}
					               removeItemFunc={() => removeItemFunc(idNumber)}
					               isDesktop={isDesktop}
					               editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					               item={item}/>
				}
				{
					item.idType === "image" &&
					<ImageComponent fields={components.find(c => c.uid === item.uid)?.fields}
					                editDialogOpenComponentId={editDialogOpenComponentId}
					                setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                dragFunc={(e) => dragFunc(e, idNumber)}
					                removeItemFunc={() => removeItemFunc(idNumber)}
					                isDesktop={isDesktop}
					                editItem={(key, value) => editItem(idNumber, key, value)}
					                item={item}/>
				}
				{
					item.idType === "video" &&
					<VideoComponent fields={components.find(c => c.uid === item.uid)?.fields}
					                editDialogOpenComponentId={editDialogOpenComponentId}
					                setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                dragFunc={(e) => dragFunc(e, idNumber)}
					                removeItemFunc={() => removeItemFunc(idNumber)}
					                isDesktop={isDesktop}
					                editItem={(key, value) => editItem(idNumber, key, value)}
					                item={item}/>
				}
				{item.idType === "container" &&
					<Container lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}
					           editDialogOpenComponentId={editDialogOpenComponentId}
					           setEditDialogOpenComponentId={setEditDialogOpenComponentId} siteSetting={siteSetting}
					           dragFunc={(e) => dragFunc(e, idNumber)} removeItemFunc={() => removeItemFunc(idNumber)}
					           isDesktop={isDesktop} idNumber={idNumber} item={item}
					           editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}/>}
				{item.idType === "grid" &&
					<Grid fields={components.find(c => c.uid === item.uid)?.fields} lastPost={lastPost} editDialogOpenComponentId={editDialogOpenComponentId}
					      setEditDialogOpenComponentId={setEditDialogOpenComponentId} siteSetting={siteSetting}
					      dragFunc={(e) => dragFunc(e, idNumber)} removeItemFunc={() => removeItemFunc(idNumber)}
					      isDesktop={isDesktop} idNumber={idNumber} item={item}
					      editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}/>}
				{item.idType === "slider" &&
					<SliderComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}
					                 editDialogOpenComponentId={editDialogOpenComponentId}
					                 setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                 siteSetting={siteSetting}
					                 dragFunc={(e) => dragFunc(e, idNumber)}
					                 removeItemFunc={() => removeItemFunc(idNumber)}
					                 isDesktop={isDesktop}
					                 idNumber={idNumber} item={item}
					                 editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}/>}
				{/*{item.idType === "featuredSection" &&*/}
				{/*	<FeatureSection editDialogOpenComponentId={editDialogOpenComponentId}*/}
				{/*	                setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
				{/*	                color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}*/}
				{/*	                removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}*/}
				{/*	                editItem={(key, value) => editItem(idNumber, key, value)}*/}
				{/*	                idNumber={idNumber} item={item}/>}*/}
				{item.idType === "iconPicker" &&
					<IconComponent fields={components.find(c => c.uid === item.uid)?.fields}
					               editDialogOpenComponentId={editDialogOpenComponentId}
					               setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					               color={siteSetting.color}
					               dragFunc={(e) => dragFunc(e, idNumber)}
					               removeItemFunc={() => removeItemFunc(idNumber)}
					               isDesktop={isDesktop}
					               editItem={(key, value) => editItem(idNumber, key, value)}
					               item={item}/>}
				{item.idType === "blogPosts" &&
					<BlogPostComponent fields={components.find(c => c.uid === item.uid)?.fields}
					                   editDialogOpenComponentId={editDialogOpenComponentId}
					                   setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					                   color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					                   removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					                  
					                   editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                   item={item}/>}
				{/*{item.idType === "inventoryCard" &&*/}
				{/*	<InventoryComponent editDialogOpenComponentId={editDialogOpenComponentId}*/}
				{/*	                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}*/}
				{/*	                    dragFunc={(e) => dragFunc(e, idNumber)}*/}
				{/*	                    removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}*/}
				{/*	                    editItem={(key, value) => editItem(idNumber, key, value)}*/}
				{/*	                    item={item}/>}*/}

				{item.idType === "map" &&
					<Map fields={components.find(c => c.uid === item.uid)?.fields}
					     editDialogOpenComponentId={editDialogOpenComponentId}
					     setEditDialogOpenComponentId={setEditDialogOpenComponentId} color={siteSetting.color}
					     dragFunc={(e) => dragFunc(e, idNumber)} removeItemFunc={() => removeItemFunc(idNumber)}
					     isDesktop={isDesktop}
					     editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)} item={item}/>}
				{item.idType === "blogTags" &&
					<BlogTagsComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}
					                   editDialogOpenComponentId={editDialogOpenComponentId}
					                   setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                   color={siteSetting.color}
					                   dragFunc={(e) => dragFunc(e, idNumber)}
					                   removeItemFunc={() => removeItemFunc(idNumber)}
					                   isDesktop={isDesktop}
					                   editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                   item={item}/>}
				{item.idType === "postTitle" &&
					<BlogTitleComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}
					                    editDialogOpenComponentId={editDialogOpenComponentId}
					                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                    color={siteSetting.color}
					                    dragFunc={(e) => dragFunc(e, idNumber)}
					                    removeItemFunc={() => removeItemFunc(idNumber)}
					                    isDesktop={isDesktop}
					                    editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                    item={item}/>}
				{item.idType === "postDateAdded" &&
					<PostDateAddedComponent lastPost={lastPost}
					                        fields={components.find(c => c.uid === item.uid)?.fields}
					                        editDialogOpenComponentId={editDialogOpenComponentId}
					                        setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                        color={siteSetting.color}
					                        dragFunc={(e) => dragFunc(e, idNumber)}
					                        removeItemFunc={() => removeItemFunc(idNumber)}
					                        isDesktop={isDesktop}
					                        editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                        item={item}/>}
				{item.idType === "postContent" &&
					<PostContentComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}
					                      editDialogOpenComponentId={editDialogOpenComponentId}
					                      setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                      color={siteSetting.color}
					                      dragFunc={(e) => dragFunc(e, idNumber)}
					                      removeItemFunc={() => removeItemFunc(idNumber)}
					                      isDesktop={isDesktop}
					                      editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                      item={item}/>}
				{item.idType === "postThumbnail" &&
					<PostThumbnailComponent lastPost={lastPost}
					                        fields={components.find(c => c.uid === item.uid)?.fields}
					                        editDialogOpenComponentId={editDialogOpenComponentId}
					                        setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                        color={siteSetting.color}
					                        dragFunc={(e) => dragFunc(e, idNumber)}
					                        removeItemFunc={() => removeItemFunc(idNumber)}
					                        isDesktop={isDesktop}
					                        editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                        item={item}/>}

				{item.idType === "postDateUpdated" &&
					<PostDateUpdatedComponent lastPost={lastPost}
					                          fields={components.find(c => c.uid === item.uid)?.fields}
					                          editDialogOpenComponentId={editDialogOpenComponentId}
					                          setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                          color={siteSetting.color}
					                          dragFunc={(e) => dragFunc(e, idNumber)}
					                          removeItemFunc={() => removeItemFunc(idNumber)}
					                          isDesktop={isDesktop}
					                          editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                          item={item}/>}

				{item.idType === "postTags" &&
					<PostTagsComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}
					                   editDialogOpenComponentId={editDialogOpenComponentId}
					                   setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                   color={siteSetting.color}
					                   dragFunc={(e) => dragFunc(e, idNumber)}
					                   removeItemFunc={() => removeItemFunc(idNumber)}
					                   isDesktop={isDesktop}
					                   editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                   item={item}/>}
				{item.idType === "shareButton" &&
					<ShareButtonComponent lastPost={lastPost} fields={components.find(c => c.uid === item.uid)?.fields}
					                      editDialogOpenComponentId={editDialogOpenComponentId}
					                      setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                      color={siteSetting.color}
					                      dragFunc={(e) => dragFunc(e, idNumber)}
					                      removeItemFunc={() => removeItemFunc(idNumber)}
					                      isDesktop={isDesktop}
					                      editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                      item={item}/>}


				{/*{item.idType === "component" && <ComponentGenerator dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} editItem={(key,value)=>editItem(idNumber,key,value)} item={item.addedItems} />}*/}
				{/*{item.idType === "iconPicker" && <Paragraph />}*/}
			</div>
		)
	}
}

export default ComponentGenerator;