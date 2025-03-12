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
			idNumber,
			dragFunc,
			removeItemFunc
		} = this.props
		const components = ComponentsLib.components;
		return (
			<div className={"group relative"}>
				{item.idType === "title" &&
					<Typography fields={components.find(item=>item.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
					            setEditDialogOpenComponentId={(v) => setEditDialogOpenComponentId(v)}
					            color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					            removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					            key={item.uniqueId}
					            editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					            item={item}/>}

				{item.idType === "paragraph" && <Paragraph fields={components.find(item=>item.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
				                                           setEditDialogOpenComponentId={setEditDialogOpenComponentId}
				                                           color={siteSetting.color}
				                                           dragFunc={(e) => dragFunc(e, idNumber)}
				                                           removeItemFunc={() => removeItemFunc(idNumber)}
				                                           isDesktop={isDesktop} key={item.uniqueId}
				                                           editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
				                                           item={item}/>}
				{item.idType === "svg" && <SVGComponent fields={components.find(l=>l.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
				                                           setEditDialogOpenComponentId={setEditDialogOpenComponentId}
				                                           color={siteSetting.color}
				                                           dragFunc={(e) => dragFunc(e, idNumber)}
				                                           removeItemFunc={() => removeItemFunc(idNumber)}
				                                           isDesktop={isDesktop} key={item.uniqueId}
				                                           editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
				                                           item={item}/>}
				{
					item.idType === "button" && <ButtonComponent fields={components.find(item=>item.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
					                                             setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                                             color={siteSetting?.color}
					                                             dragFunc={(e) => dragFunc(e, idNumber)}
					                                             removeItemFunc={() => removeItemFunc(idNumber)}
					                                             isDesktop={isDesktop}
					                                             editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}
					                                             key={item.uniqueId} item={item}/>
				}
				{
					item.idType === "image" && <ImageComponent fields={components.find(item=>item.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
					                                           setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                                           dragFunc={(e) => dragFunc(e, idNumber)}
					                                           removeItemFunc={() => removeItemFunc(idNumber)}
					                                           isDesktop={isDesktop}
					                                           editItem={(key, value) => editItem(idNumber, key, value)}
					                                           item={item}/>
				}
				{item.idType === "container" &&
					<Container fields={components.find(l=>l.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
					           setEditDialogOpenComponentId={setEditDialogOpenComponentId} siteSetting={siteSetting}
					           dragFunc={(e) => dragFunc(e, idNumber)} removeItemFunc={() => removeItemFunc(idNumber)}
					           isDesktop={isDesktop} key={item.uniqueId} idNumber={idNumber} item={item}
					           editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}/>}
				{item.idType === "grid" &&
					<Grid editDialogOpenComponentId={editDialogOpenComponentId}
					      setEditDialogOpenComponentId={setEditDialogOpenComponentId} siteSetting={siteSetting}
					      dragFunc={(e) => dragFunc(e, idNumber)} removeItemFunc={() => removeItemFunc(idNumber)}
					      isDesktop={isDesktop} key={item.uniqueId} idNumber={idNumber} item={item}
					      editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)}/>}
				{item.idType === "slider" && <SliderComponent editDialogOpenComponentId={editDialogOpenComponentId}
				                                              setEditDialogOpenComponentId={setEditDialogOpenComponentId}
				                                              dragFunc={(e) => dragFunc(e, idNumber)}
				                                              removeItemFunc={() => removeItemFunc(idNumber)}
				                                              isDesktop={isDesktop} key={item.uniqueId}
				                                              editItem={(key, value) => editItem(idNumber, key, value)}
				                                              idNumber={idNumber} item={item}/>}
				{item.idType === "featuredSection" &&
					<FeatureSection editDialogOpenComponentId={editDialogOpenComponentId}
					                setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                color={siteSetting.color} dragFunc={(e) => dragFunc(e, idNumber)}
					                removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					                key={item.uniqueId} editItem={(key, value) => editItem(idNumber, key, value)}
					                idNumber={idNumber} item={item}/>}
				{item.idType === "iconPicker" && <IconComponent fields={components.find(item=>item.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
				                                                setEditDialogOpenComponentId={setEditDialogOpenComponentId}
				                                                color={siteSetting.color}
				                                                dragFunc={(e) => dragFunc(e, idNumber)}
				                                                removeItemFunc={() => removeItemFunc(idNumber)}
				                                                isDesktop={isDesktop} key={item.uniqueId}
				                                                editItem={(key, value) => editItem(idNumber, key, value)}
				                                                item={item}/>}
				{item.idType === "blogPosts" && <BlogPostComponent editDialogOpenComponentId={editDialogOpenComponentId}
				                                                   setEditDialogOpenComponentId={setEditDialogOpenComponentId}
				                                                   dragFunc={(e) => dragFunc(e, idNumber)}
				                                                   removeItemFunc={() => removeItemFunc(idNumber)}
				                                                   isDesktop={isDesktop} key={item.uniqueId}
				                                                   editItem={(key, value) => editItem(idNumber, key, value)}
				                                                   item={item}/>}
				{item.idType === "inventoryCard" &&
					<InventoryComponent editDialogOpenComponentId={editDialogOpenComponentId}
					                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                    dragFunc={(e) => dragFunc(e, idNumber)}
					                    removeItemFunc={() => removeItemFunc(idNumber)} isDesktop={isDesktop}
					                    key={item.uniqueId} editItem={(key, value) => editItem(idNumber, key, value)}
					                    item={item}/>}
				{item.idType === "map" &&
					<Map fields={components.find(item=>item.uid===item.uid)?.fields} editDialogOpenComponentId={editDialogOpenComponentId}
					     setEditDialogOpenComponentId={setEditDialogOpenComponentId} color={siteSetting.color}
					     dragFunc={(e) => dragFunc(e, idNumber)} removeItemFunc={() => removeItemFunc(idNumber)}
					     isDesktop={isDesktop} key={item.uniqueId}
					     editItem={(key, value, uniqueId) => editItem(idNumber, key, value, uniqueId)} item={item}/>}

				{/*{item.idType === "component" && <ComponentGenerator dragFunc={(e)=>dragFunc(e,idNumber)} removeItemFunc={()=>removeItemFunc(idNumber)} isDesktop={isDesktop} key={item.uniqueId} editItem={(key,value)=>editItem(idNumber,key,value)} item={item.addedItems} />}*/}
				{/*{item.idType === "iconPicker" && <Paragraph />}*/}
			</div>
		)
	}
}

export default ComponentGenerator;