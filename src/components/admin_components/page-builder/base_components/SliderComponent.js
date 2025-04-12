'use client'
// import Column from "@admin/page-builder/base_components/Column";
import React, {useCallback, useEffect, useRef, useState} from "react";
import DropContainer from "@page_builder/DropContainer";
import ComponentGenerator from "@page_builder/ComponentGenerator";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";
import TextField from "@m3/text_fields/TextField";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import Image from 'next/image'
import Button from "@m3/buttons/Button";
import Switch from "@m3/switch/Switch";
// import Swiper from 'swiper'
import {
	Autoplay, EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFlip, Mousewheel, Navigation, Pagination
} from "swiper/modules";
import {UploadFile} from "@frontend/client_action/File";
import {StoreFile} from "@backend/server_action/Files";
import {hexFromArgb} from "@material/material-color-utilities";

// import {useSwiper} from "swiper/re";

function SlideImageUploadComponent({defValue, handleChange, keyUnique}) {
	const fileInputRef = useRef(keyUnique);
	const [value, setValue] = useState(defValue.imageURL || null);
	useEffect(() => {
		console.log(defValue)
		setValue(defValue.imageURL);
	}, [defValue]);
	const handleChangeValue = (value) => {
		const file = JSON.parse(value)
		setValue(file.url)
		handleChange(file.url)
	}
	return (<>
			<div key={keyUnique} className={"mr-2"}>
				<label className={"text-on-surface-light dark:text-on-surface-dark"}
				       htmlFor={"imageFile"}>
					{value ? <img className={"rounded-[4px] w-[40px] h-[40px]"}
					              src={value}/> : <div
						className={"rounded-[4px] dark:bg-surface-container-high-dark bg-surface-container-high-light flex justify-center items-center w-[64px] h-[64px]"}
					>
						<Icon
							className={"text-[24px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							image
						</Icon>
					</div>}
				</label>
				<input ref={fileInputRef} accept={"image/jpeg"}
				       name={"files"}
				       onChange={async (e) => {

					       const file = fileInputRef.current.files[0]
					       const res = await UploadFile(file)
					       handleChangeValue(await StoreFile(res))
				       }}
				       id={"imageFile"} type={"file"}
				       className={"hidden w-0"}/>
			</div>
		</>)
}

function Slide({
	               editDialogOpenComponentId,
	               height,
	               setEditDialogOpenComponentId,
	               siteSetting,
	               isDesktop, // columnSizeDesktop,
	               // columnSizeMobile,
	               item,
	               lastPost,
	               idNumber,
	               editItem,
	               removeColumnFunc
               }) {
	const [addedItems, setAddedItems] = useState(item.addedItems)
	let [className, setClassName] = useState({})
	const handleAddedItemsToItem = (component, number) => {
		let items = [...addedItems]
		if (number === 0) {
			items = [component, ...items]
		} else {
			items = [...items.slice(0, number), component, ...items.slice(number)]
		}
		setAddedItems(items)
		editItem(idNumber, "addedItems", items)
	}
	const editItemC = (number, key, value, unique) => {

		if (key === "className") {
			let newClassName = className
			newClassName[unique] = value
			setClassName(newClassName)
			editItem(number, "className", Object.values(newClassName).join(""), unique)
		}
		let items = [...addedItems]
		items[number] = {...items[number], [key]: value}
		setAddedItems(items)
		editItem(idNumber, "addedItems", items)
	}
	const removeItemFuncM = (number) => {
		let items = [...addedItems]
		items.splice(number, 1)
		setAddedItems(items)
		editItem(idNumber, "addedItems", items)
		if (items.length === 0) {
			removeColumnFunc()
		}
	}

	function drag(ev, id) {
		if (typeof id !== undefined && typeof id === "number") {
			let item = addedItems[id]
			ev.dataTransfer.setData("text", item.uid);
			ev.dataTransfer.setData("item", JSON.stringify(item));
		} else {

			ev.dataTransfer.setData("text", ev.target.id);
		}
	}

	return (<div style={{height: height}} key={item.uniqueId + "-gridm"}
	             className={"w-full z-[100] relative h-full " + item.uniqueId + " " + item?.className}>
			{item.imageURL ? <Image objectFit={"cover"} layout={"fill"} alt={""} src={item.imageURL}/> : <div
				className={"flex justify-center items-center absolute inset-0 bg-surface-variant-light dark:bg-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
				<Icon className={"text-[48px]"}>
					image
				</Icon></div>}

			<div className={"absolute inset-0 z-[150]"}>
				{addedItems.map((l, i) => <div key={item.uniqueId + i + "-g"} className={"relative group"}>
					<DropContainer idNumber={i} handleAddedItems={handleAddedItemsToItem}/>
					<ComponentGenerator lastPost={lastPost} editDialogOpenComponentId={editDialogOpenComponentId}
					                    setEditDialogOpenComponentId={setEditDialogOpenComponentId}
					                    siteSetting={siteSetting} dragFunc={drag} removeItemFunc={removeItemFuncM}
					                    isDesktop={isDesktop} idNumber={i} editItem={editItemC} item={l}/>
				</div>)}
				<div className={"relative"}>
					<DropContainer key={item.uniqueId + "-g"} idNumber={addedItems.length}
					               handleAddedItems={handleAddedItemsToItem} firstItem={false}/>
				</div>
			</div>
		</div>)
}

const SwiperButton = ({children, type, style, className}) => {
	const swiper = useSwiper();
	return <button style={style} className={`${className} rounded-full z-[100]`}
	               onClick={() => type === "prev" ? swiper.slidePrev() : swiper.slideNext()}>{children}</button>;
};
export default function SliderComponent(props) {
	const {isDesktop,lastPost} = props
	const [addedItems, setAddedItems] = useState([...props.item.addedItems],)
	const [className, setClassName] = useState({})
	const [editMode, setEditMode] = useState("slides")
	const [activeSlide, setActiveSlide] = useState(0)
	let [settings, setSettings] = useState({})
	const SwiperJ = useSwiper()
	// const [swiper,setSwiper] = useState()
	// useEffect(() => {
	// 	console.log(item.settings)
	// })
	useEffect(() => {
		setSettings(item?.settings[isDesktop ? "desktop" : "mobile"])
	}, [isDesktop])
	// const handleSlideChangeImage = (number,imageURL) => {
	// 	let items = [...addedItems]
	// 	items[number].imageURL = imageURL
	//
	// }
	const addNewSlide = (unique) => {
		let items = [...addedItems]
		items = [...items, {
			"imageURL": null, "addedItems": []
		}]
		setAddedItems(items)
		editItem("addedItems", items, unique)
		console.log(items)

	}
	const editItemC = (number, key, value, unique) => {
		if (key === "className") {

			let newClassName = className
			newClassName[unique] = value
			// this.setState({className: newClassName})
			setClassName(newClassName)
			// console.log(key,newClassName)
			editItem("className", Object.values(newClassName).join(""), unique)
		}

		// let columnSizesDesktop = [...this.state.columnSizeDesktop]
		// let columnSizesMobile = [...this.state.columnSizeMobile]

		// columnSizesDesktop.push(6);
		// columnSizesMobile.push(12);
		// if (items[items.length - 1]?.addedItems?.length !== 0) {
		// 	items = [...items, {
		// 		"addedItems": [],
		// 		"widthNumber": 1,
		//
		// 		"styles": {
		// 			"general": {
		// 				"padding": [
		// 					0,
		// 					0,
		// 					0,
		// 					0
		// 				],
		// 				"height": "auto",
		// 				"borderRadius": "0"
		// 			},
		// 			"light": {
		// 				"backgroundColor": "transparent"
		// 			},
		// 			"dark": {
		// 				"backgroundColor": "transparent"
		// 			}
		// 		}
		// 	}]
		// }
		// this.setState({addedItems: items})
		let items = [...addedItems]
		items[number] = {...items[number], [key]: value}
		setAddedItems(items)
		editItem("addedItems", items, unique)
		// this.setState({columnSizeDesktop: columnSizesDesktop})
		// this.setState({columnSizeMobile: columnSizesMobile})

		// this.props.editItem("columnSizeDesktop", columnSizesDesktop)
		// this.props.editItem("columnSizeMobile", columnSizesMobile)
		// this.props.editItem("addedItems", items)
	}


	let {
		editDialogOpenComponentId,
		setEditDialogOpenComponentId,
		item,
		idNumber,
		editItem,
		siteSetting,
		removeItemFunc,
		dragFunc
	} = props
	const animationList = [{name: "Fade", id: "fade", slidePerview: 6}, {
		name: "Coverflow",
		id: "coverflow",
		slidePerview: 6
	}, {name: "Flip", id: "flip", slidePerview: 1}, {name: "Cube", id: "cube", slidePerview: 1}, {
		name: "Cards",
		id: "cards",
		slidePerview: 1
	}, {name: "Creative", id: "creative", slidePerview: 6},]
	const swiperRef = useRef(item.uniqueId);


	// let {renderStyles} = state;
	const baseClass = `py-4 hover:outline hover:outline-primary-light/[50%]  w-full`
	// const setIsSelected = (v) => {
	//     this.setState({isSelected: v});
	// }
	// const changeColumnSizeHandler = (number, value) => {
	//     let columnSizes = isDesktop ? [...this.state.columnSizeDesktop] : [...this.state.columnSizeMobile]
	//     columnSizes[number] = value;
	//     if (isDesktop) {
	//         this.setState({columnSizeDesktop: columnSizes})
	//         editItem("columnSizeDesktop", columnSizes)
	//     } else {
	//         this.setState({columnSizeMobile: columnSizes})
	//         editItem("columnSizeMobile", columnSizes)
	//     }
	// }
	// const gapHandler = (value) => {
	//     isDesktop ? this.setState({gapDesktop: value}) : this.setState({gapMobile: value});
	//     isDesktop ? editItem("gapDesktop", value) : editItem("gapMobile", value)
	// }
	const removeColumnFunc = (number) => {
		let items = [...addedItems]
		// let columnSizesDesktop = [...this.state.columnSizeDesktop]
		// let columnSizesMobile = [...this.state.columnSizeMobile]
		items.splice(number, 1)
		// columnSizesDesktop.splice(number, 1)
		// columnSizesMobile.splice(number, 1)
		// this.setState({addedItems: items})
		setAddedItems(items)
		// this.setState({columnSizeDesktop: columnSizesDesktop})
		// this.setState({columnSizeMobile: columnSizesMobile})
		// this.props.editItem("columnSizeDesktop", columnSizesDesktop)
		// this.props.editItem("columnSizeMobile", columnSizesMobile)
		editItem("addedItems", items)
	}
	// let onChangeStyles = (name, value, type) => {
	// 	let nStyles = {...styles}
	// 	nStyles[type] = {...nStyles[type], [name]: value}
	// 	editItem("styles", nStyles, item.uniqueId)
	// 	setStyles(nStyles)
	// 	console.log("styles", nStyles)
	// }
	let onChangeSetting = (key, value) => {
		const nSettingBase = item.settings
		let nSettings = {...settings}
		const type = isDesktop ? "desktop" : "mobile"
		nSettings = {...nSettings, [key]: value}
		nSettingBase[type] = nSettings
		editItem("settings", nSettingBase, item.uniqueId)
		setSettings(nSettings)
	}
	const copyToClipboard = () => {
		localStorage.setItem("clipboard", JSON.stringify(item))
	}
	// useEffect(() => {
	// 	let swiperm =
	// 	setSwiper(swiperm)
	// },[])
	// useEffect(()=>{
	// 	new Swiper('.swiper', {
	// 		modules: [ Navigation, Pagination ],
	// 		pagination:{
	// 			el: '.swiper-pagination',
	// 			enabled:settings.paginationType!=="none",
	// 			type:settings.paginationType==="number"?"fraction":settings.paginationType==="dots"?"bullets":"progressbar"
	// 		},
	// 		// pagination:{
	// 		// 	el: '.swiper-pagination',
	// 		// 	enabled:true,
	// 		// 	type:"bullets"
	// 		// },
	// 		speed: 400,
	// 		// direction:settings.sliderType,
	// 		spaceBetween: 100,
	// 	})
	//
	//
	// },[settings])
	return (<>
			<style>{`
				.${item.uniqueId}:hover .${item.uniqueId}-panel{
				display: block;
			}
			`}</style>
			{/*settings.paginationType==="number"?"fraction":"bullets"*/}
			<div
				className={`relative ${settings.isInContainer ? "container mx-auto" : ""} ${baseClass} ${item.uniqueId}`}>
				<div className={` relative`}>
					{settings.slideButton === "arrowOnBorder" && <>
						<button onClick={()=>swiperRef.current.slidePrev()} style={{
							color: settings.navigationArrowColor,
							backgroundColor: settings.navigationBackgroundColor
						}}
						        className={`rounded-full z-[100] absolute ${
							        settings.slideButton === "arrowOnBorder" ? "border w-[48px] h-[48px] flex items-center justify-center -left-[24px] top-1/2 transform -translate-y-1/2" :
								        settings.slideButton === "arrowInSlide" ? "border w-[48px] h-[48px] flex items-center justify-center left-[24px] top-1/2 transform -translate-y-1/2" :
									        ""


						        } `} type={"prev"}>
							<Icon>
								chevron_left
							</Icon>
						</button>
						<button onClick={()=>swiperRef.current.slideNext()} style={{
							color: settings.navigationArrowColor,
							backgroundColor: settings.navigationBackgroundColor
						}}
						        className={`rounded-full z-[100] absolute ${
							        settings.slideButton === "arrowOnBorder" ? "border w-[48px] h-[48px] flex items-center justify-center -right-[24px] top-1/2 transform -translate-y-1/2" :
								        settings.slideButton === "arrowInSlide" ? "border w-[48px] h-[48px] flex items-center justify-center right-[24px] top-1/2 transform -translate-y-1/2" :
									        ""


						        } `} type={"next"}>
							<Icon>
								chevron_right
							</Icon>
						</button>
					</>}
					<Swiper onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}} style={{
						height: settings.slideHeight + "px",
						overflow: "hidden",
						borderRadius: settings.slideBorderRadius + "px"
					}} spaceBetween={settings.spaceBetweenSlides} slidesPerView={settings.slidePerView} navigation={{
						enabled: false,

					}} loop={settings.loop} key={JSON.stringify(settings)} autoplay={settings.autoSlideChange ? {
						delay: settings.autoSlideChangeTime || 1000, pauseOnMouseEnter: settings?.pauseOnMouseEnter,
					} : false} pagination={{
						enabled: settings.paginationType !== "none",
						type: settings.paginationType === "number" ? "fraction" : settings.paginationType === "dots" ? "bullets" : "progressbar",
						// bulletClass:settings.paginationType === "dots"?"":settings.paginationType === "number"?"":""
					}}
					        mousewheel={settings.mousewheel}
					        modules={[Mousewheel, Navigation, Pagination, Autoplay, EffectCards, EffectCoverflow, EffectCreative, EffectFlip, EffectCreative, EffectCube]}
					        effect={settings.effect || "creative"} className={"swiper"}>

						{addedItems.map((slide, i) => <SwiperSlide style={{height: settings.slideHeight + "px",}}
						                                           className={"swiper-slide"}
						                                           key={i}>
							<Slide lastPost={lastPost} height={settings.slideHeight + "px"}
							       editDialogOpenComponentId={editDialogOpenComponentId}
							       setEditDialogOpenComponentId={setEditDialogOpenComponentId}
							       siteSetting={siteSetting} removeColumnFunc={() => removeColumnFunc(i)}
							       isDesktop={isDesktop}
							       id={item.uniqueId}
							       key={item.uniqueId + i + "-slide"}
							       idNumber={i} editItem={editItemC}
							       item={slide}/>
						</SwiperSlide>)}
						{settings.slideButton === "arrowInSlide" && <>
							<button onClick={()=>swiperRef.current.slidePrev()} style={{
								color: settings.navigationArrowColor,
								backgroundColor: settings.navigationBackgroundColor
							}}
							              className={`rounded-full z-[100] absolute ${
											  settings.slideButton === "arrowOnBorder" ? "border w-[48px] h-[48px] flex items-center justify-center -left-[24px] top-1/2 transform -translate-y-1/2" :
								              settings.slideButton === "arrowInSlide" ? "border w-[48px] h-[48px] flex items-center justify-center left-[24px] top-1/2 transform -translate-y-1/2" :
									              ""


							              } `} type={"prev"}>
								<Icon>
									chevron_left
								</Icon>
							</button>
							<button onClick={()=>swiperRef.current.slideNext()} style={{
								color: settings.navigationArrowColor,
								backgroundColor: settings.navigationBackgroundColor
							}}
							              className={`rounded-full z-[100] absolute ${
								              settings.slideButton === "arrowOnBorder" ? "border w-[48px] h-[48px] flex items-center justify-center -right-[24px] top-1/2 transform -translate-y-1/2" :
									              settings.slideButton === "arrowInSlide" ? "border w-[48px] h-[48px] flex items-center justify-center right-[24px] top-1/2 transform -translate-y-1/2" :
										              ""


							              } `} type={"next"}>
								<Icon>
									chevron_right
								</Icon>
							</button>
						</>}
						{settings.slideButton === "arrowInBox" && <div className={"rounded-full z-[100] absolute bottom-4 right-4 z-[100] rounded-full h-[48px] space-x-1 flex items-center px-1"} style={{backgroundColor: settings.navigationBackgroundColor}}>
							<button onClick={()=>swiperRef.current.slidePrev()} style={{
								color: settings.navigationArrowColor,
								// backgroundColor:settings.navigationArrowColor/20,
							}}
							         className={"h-[40px] w-[40px] flex items-center justify-center"}      type={"prev"}>
								<Icon>
									chevron_left
								</Icon>
							</button>
							<button onClick={()=>swiperRef.current.slideNext()} style={{
								color: settings.navigationArrowColor,
							}}
							              className={"rounded-full z-[100] h-[40px] w-[40px] flex items-center justify-center"}     type={"next"}>
								<Icon>
									chevron_right
								</Icon>
							</button>
						</div>}

						{/*<div className="swiper-pagination"></div>*/}
					</Swiper>
				</div>
				{/*{this.state.addedItems.map((m, i) =>*/}

				{/*)}*/}
				<div
					className={`absolute  z-[999] hidden ${item.uniqueId}-panel  top-[0px] left-0 transform `}>
					<div
						className={"px-3  space-x-3 flex rounded-t-[0px] bg-primary-light dark:bg-primary-dark"}>
						<button onClick={() => setEditDialogOpenComponentId(item.uniqueId)}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								edit
							</Icon>
						</button>
						<button onClick={() => copyToClipboard()}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								content_copy
							</Icon>
						</button>
						<button onDragOver={(event) => {
							event.preventDefault();
							removeItemFunc()
						}} onDragStart={(e) => dragFunc(e)} draggable={true}
						        className={"flex items-center h-[24px] w-[24px] justify-center rounded-full   "}>
							<Icon size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								drag_indicator
							</Icon>
						</button>
						<button
							className={"flex items-center h-[24px] w-[24px] justify-center rounded-full "}>
							<Icon onClick={removeItemFunc} size={16}
							      className={"!text-on-primary-light dark:!text-on-primary-dark text-[20px]"}>
								delete
							</Icon>
						</button>
					</div>
				</div>
				<EditorDialog
					isOpen={editDialogOpenComponentId ? editDialogOpenComponentId === item.uniqueId : false}
					setIsOpen={() => setEditDialogOpenComponentId(null)}>
					<div
						className={" flex border-b border-outline-variant-light dark:border-outline-variant-dark items-center h-[48px]"}>
						<div onClick={() => setEditMode("slides")}
						     className={`${editMode === "slides" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} w-6/12 relative flex justify-center items-center h-full`}>
							<Icon className={"mr-2"}>
								reorder
							</Icon>
							Slides
							{editMode === "slides" && <div
								className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}
						</div>
						<div onClick={() => setEditMode("setting")}
						     className={`${editMode === "setting" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} relative w-6/12 flex justify-center items-center h-full`}>
							<Icon className={"mr-2"}>
								settings
							</Icon>
							Setting
							{editMode === "setting" && <div
								className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}

						</div>
						<div onClick={() => setEditMode("style")}
						     className={`${editMode === "style" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} relative w-6/12 flex justify-center items-center h-full`}>
							<Icon className={"mr-2"}>
								settings
							</Icon>
							Styles
							{editMode === "style" && <div
								className={"w-full absolute bottom-[-1px] h-[3px] bg-primary-light dark:bg-primary-dark "}/>}

						</div>
					</div>
					{editMode === "slides" && <div>
						<ul className={"py-2"}>
							<label
								className={"px-4 text-body-large mb-2 font-bold text-on-surface-light dark:text-on-surface-dark"}>
								Slides
							</label>
							{addedItems.map((item, index) => activeSlide === index ?
								<li onClick={() => setActiveSlide(index)} key={index}
								    className={"px-4"}>
									<div
										className={"px-4 py-4 rounded-[8px] bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
										<div className={"mb-2 flex items-center"}>
											<Icon className={"mr-2"}>
												drag_handle
											</Icon>
											Slide {index + 1}
										</div>
										<div>
											<SlideImageUploadComponent defValue={item} keyUnique={item.uniqueId + index}
											                           handleChange={(v) => editItemC(index, "imageURL", v, item.uniqueId)}/>
										</div>
									</div>

								</li> : <li onClick={() => setActiveSlide(index)} key={index}
								            className={"hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[56px] px-4 flex items-center"}>
									<Icon className={"mr-2"}>
										drag_handle
									</Icon>
									Slide {index + 1}

								</li>)}
						</ul>
						<div className={"flex items-center justify-center"}>
							<Button onClick={() => addNewSlide(item.uniqueId)} icon={"add"}>
								Add New Slide
							</Button>
						</div>
					</div>}
					{editMode === "setting" && <div className={"py-2"}>
						{/*<div className={""}>*/}
						{/*	<h3*/}
						{/*		className={"px-4 pt-3 pb-2 mt-6 border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>*/}
						{/*		Slider Style*/}
						{/*	</h3>*/}
						{/*	<div className={"px-4 mt-2 grid  grid-cols-2  gap-4"}>*/}
						{/*		<div onClick={() => onChangeSetting("sliderType", "horizontal")}*/}
						{/*		     className={`${settings.sliderType === "horizontal" ? "*:bg-on-primary-container-light/[50%] dark:*:bg-on-primary-container-dark/[50%] bg-primary-container-light dark:bg-primary-container-dark" : "*:bg-surface-container-highest-light dark:*:bg-surface-container-highest-dark bg-surface-container-light dark:bg-surface-container-dark"} py-4 h-[96px] flex rounded-[16px]  space-x-2 `}>*/}
						{/*			<div*/}
						{/*				className={" rounded-r-[12px]  w-2/12 h-full"}>*/}

						{/*			</div>*/}
						{/*			<div*/}
						{/*				className={"rounded-[12px]  w-8/12 h-full"}>*/}

						{/*			</div>*/}
						{/*			<div*/}
						{/*				className={" rounded-l-[12px]  w-2/12 h-full"}>*/}

						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div onClick={() => onChangeSetting("sliderType", "vertical")}*/}
						{/*		     className={`${settings.sliderType === "vertical" ? "*:bg-on-primary-container-light/[50%] dark:*:bg-on-primary-container-dark/[50%] bg-primary-container-light dark:bg-primary-container-dark" : "*:bg-surface-container-highest-light dark:*:bg-surface-container-highest-dark bg-surface-container-light dark:bg-surface-container-dark"} px-4 rounded-[16px] h-full`}>*/}
						{/*			<div*/}
						{/*				className={`  rounded-b-[12px]  w-full h-[20px]`}>*/}

						{/*			</div>*/}
						{/*			<div*/}
						{/*				className={" rounded-[12px]  w-full h-[40px] mt-2 mb-2"}>*/}

						{/*			</div>*/}
						{/*			<div*/}
						{/*				className={" rounded-t-[12px]  w-full h-[20px]"}>*/}

						{/*			</div>*/}
						{/*		</div>*/}

						{/*	</div>*/}
						{/*</div>*/}
						<div className={""}>
							<h3
								className={"px-4 pt-3 pb-2 mt-0 border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Slides Per View
							</h3>
							<div className={"px-4"}>
								<div
									className={"flex justify-between rounded-full items-center py-1 px-1 bg-surface-container-light dark:bg-surface-container-dark"}>
									<div onClick={() => onChangeSetting("slidePerView", 1)}
									     className={`${settings.slidePerView === 1 ? "bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} rounded-full flex items-center justify-center w-[32px] h-[32px]`}>
										1
									</div>
									<div onClick={() => onChangeSetting("slidePerView", 1.5)}
									     className={`${settings.slidePerView === 1.5 ? "bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} rounded-full flex items-center justify-center w-[32px] h-[32px]`}>
										1.5
									</div>
									<div onClick={() => onChangeSetting("slidePerView", 2)}
									     className={`${settings.slidePerView === 2 ? "bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} rounded-full flex items-center justify-center w-[32px] h-[32px]`}>
										2
									</div>
									<div onClick={() => onChangeSetting("slidePerView", 2.5)}
									     className={`${settings.slidePerView === 2.5 ? "bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} rounded-full flex items-center justify-center w-[32px] h-[32px]`}>
										2.5
									</div>
									<div onClick={() => onChangeSetting("slidePerView", 3)}
									     className={`${settings.slidePerView === 3 ? "bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} rounded-full flex items-center justify-center w-[32px] h-[32px]`}>
										3
									</div>
									<div onClick={() => onChangeSetting("slidePerView", 3.5)}
									     className={`${settings.slidePerView === 3.5 ? "bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} rounded-full flex items-center justify-center w-[32px] h-[32px]`}>
										3.5
									</div>
									<div onClick={() => onChangeSetting("slidePerView", 4)}
									     className={`${settings.slidePerView === 4 ? "bg-primary-container-light dark:bg-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} rounded-full flex items-center justify-center w-[32px] h-[32px]`}>
										4
									</div>

								</div>
							</div>
						</div>
						<div className={""}>
							<h3
								className={"px-4 pt-3 pb-2 mt-0 border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Space between slides
							</h3>

							<div className={"flex justify-end px-4 items-center"}>
								<input onChange={(e) => onChangeSetting("spaceBetweenSlides", e.target.value)}
								       defaultValue={settings.spaceBetweenSlides || 0}
								       className={"mr-2 w-4/12 bg-transparent border-outline-variant-light dark:border-outline-variant-dark rounded-[8px]  text-on-surface-light dark:text-on-surface-dark"}/>
								<label
									className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
									px
								</label>
							</div>

						</div>
						<div
							className={"w-full"}>
							<h3 className={"w-full px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Pagination Style
							</h3>
							<div className={"px-4 mt-2 grid  grid-cols-2  gap-4"}>
								<div onClick={() => onChangeSetting("paginationType", "none")}
								     className={`${settings.paginationType === "none" ? "text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light  dark:bg-primary-container-dark" : "text-on-surface-variant-light/[50%] dark:text-on-surface-variant-dark/[50%] bg-surface-container-light  dark:bg-surface-container-dark"} h-[96px] px-4 text-body-large font-medium flex items-center justify-center rounded-[16px] `}>
									None
								</div>
								<div onClick={() => onChangeSetting("paginationType", "dots")}
								     className={`${settings.paginationType === "dots" ? "bg-primary-container-light dark:bg-surface-container-dark *:bg-on-primary-container-light dark:*:bg-on-primary-container-dark" : "bg-surface-container-light  dark:bg-surface-container-dark *:bg-on-surface-variant-light dark:*:bg-on-surface-variant-dark"}px-4 h-[96px] flex justify-center items-center space-x-2 rounded-[16px] `}>
									<div
										className={"opacity-50 w-[16px] h-[16px] rounded-full"}>

									</div>
									<div
										className={"opacity-30 w-[16px] h-[16px] rounded-full"}>

									</div>
									<div
										className={"opacity-10 w-[16px] h-[16px] rounded-full"}>

									</div>
								</div>
								<div onClick={() => onChangeSetting("paginationType", "number")}
								     className={`${settings.paginationType === "number" ? "bg-primary-container-light  dark:bg-primary-container-dark *:bg-primary-light dark:*:bg-primary-dark text-on-primary-light dark:text-on-primary-dark" : "*:bg-surface-container-highest-light dark:*:bg-surface-container-highest-dark text-on-surface-variant-light/[50%] dark:text-on-surface-variant-dark/[50%] bg-surface-container-light  dark:bg-surface-container-dark"}px-4 h-[96px] flex justify-center items-center space-x-2 rounded-[16px] `}>
									<div
										className={"text-body-medium   flex justify-center items-center w-[56px] h-[24px] rounded-full"}>
										1 / 5
									</div>
								</div>
							</div>
						</div>
						{<div className={""}>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Effect type
							</h3>
							<div
								className={"px-4 "}>
								{animationList.map((an, i) => (an.slidePerview && an.slidePerview >= settings.slidePerView) &&
									<label onClick={() => onChangeSetting("effect", an.id)}
									       key={item.name} className={"flex items-center"}
									       htmlFor={item.name + i}>
										<div
											className={`relative ${settings.effect === an.id ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
											{settings.effect === an.id ? <Icon
													className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :
												<Icon
													className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}
										</div>
										<span
											className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>
                                   {an.name}
                                        </span>
									</label>)}

							</div>
						</div>}
						<div className={""}>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Scroll with Mouse Wheel
							</h3>
							<div className={"flex px-4 justify-between mb-4  items-center "}>
								<label
									className={"text-on-surface-light dark:text-on-surface-dark font-medium text-body-large"}>

								</label>
								<Switch setIsCheck={(v) => onChangeSetting("mousewheel", v)}
								        isCheck={settings.mousewheel}/>
							</div>
						</div>
						<div className={""}>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Loop
							</h3>
							<div className={"flex px-4 justify-between mb-4  items-center "}>
								<label
									className={"text-on-surface-light dark:text-on-surface-dark font-medium text-body-large"}>

								</label>
								<Switch setIsCheck={(v) => onChangeSetting("loop", v)}
								        isCheck={settings.loop}/>
							</div>
						</div>
						{<div className={""}>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Time
							</h3>
							<div className={"flex px-4 justify-between mb-4  items-center "}>
								<label
									className={"text-on-surface-light dark:text-on-surface-dark font-medium text-body-large"}>
									Auto Slide Change
								</label>
								<Switch setIsCheck={(v) => onChangeSetting("autoSlideChange", v)}
								        isCheck={settings.autoSlideChange}/>
							</div>
							{settings.autoSlideChange &&
								<div className={"flex px-4 justify-between mb-4  items-center "}>
									<label
										className={"text-on-surface-light dark:text-on-surface-dark font-medium text-body-large"}>
										Pause On Mouse Hover
									</label>
									<Switch setIsCheck={(v) => onChangeSetting("pauseOnMouseEnter", v)}
									        isCheck={settings.pauseOnMouseEnter}/>
								</div>}

							{settings.autoSlideChange && <div className={"flex justify-end px-4 items-center"}>
								<input onChange={(e) => onChangeSetting("autoSlideChangeTime", e.target.value)}
								       defaultValue={settings.autoSlideChangeTime}
								       className={"mr-2 w-4/12 bg-transparent border-outline-variant-light dark:border-outline-variant-dark rounded-[8px]  text-on-surface-light dark:text-on-surface-dark"}/>
								<label
									className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
									ms
								</label>
							</div>}
						</div>}
						<div
							className={""}>
							{/*slideButton*/}
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Navigation Type
							</h3>
							<div className={"px-4 mt-2 grid  grid-cols-2  gap-4"}>
								<div onClick={() => onChangeSetting("slideButton", "none")}
								     className={`${settings.slideButton === "none" ? " text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light  dark:bg-primary-container-dark" : " text-on-surface-variant-light/[50%] dark:text-on-surface-variant-dark/[50%] bg-surface-container-light  dark:bg-surface-container-dark"} h-[96px] px-4 text-body-large font-medium flex items-center justify-center rounded-[16px] `}>
									None
								</div>
								{settings.isInContainer &&
									<div onClick={() => onChangeSetting("slideButton", "arrowOnBorder")}
									     className={`relative ${settings.slideButton === "arrowOnBorder" ? "*:bg-on-primary-container-light dark:*:bg-on-primary-container-dark text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light  dark:bg-primary-container-dark" : "*:bg-on-surface-variant-light/[50%] dark:*:bg-on-surface-variant-dark/[50%] text-on-surface-variant-light/[50%] dark:text-on-surface-variant-dark/[50%] bg-surface-container-light  dark:bg-surface-container-dark"} space-x-1 h-[96px] px-4 text-body-large font-medium flex items-center justify-center  rounded-[16px] `}>
										<Icon
											className={`border ${settings.slideButton === "arrowOnBorder" ? "!bg-on-primary-container-light dark:!bg-on-primary-container-dark !border-primary-container-light dark:!border-primary-container-dark !text-primary-container-light dark:!text-primary-container-dark" : "!text-surface-container-light dark:!text-surface-container-dark !bg-on-surface-variant-light  dark:!bg-on-surface-variant-dark  border-surface-container-light dark:border-surface-container-light"}  absolute top-1/2 transform -translate-y-1/2 left-[12px]  rounded-full h-[24px] w-[24px]`}>
											chevron_left
										</Icon>
										<div className={"w-11/12 h-[48px] rounded-[12px]"}>

										</div>
										<Icon
											className={`border ${settings.slideButton === "arrowOnBorder" ? "!bg-on-primary-container-light dark:!bg-on-primary-container-dark !border-primary-container-light dark:!border-primary-container-dark !text-primary-container-light dark:!text-primary-container-dark" : "!text-surface-container-light dark:!text-surface-container-dark !bg-on-surface-variant-light  dark:!bg-on-surface-variant-dark border-surface-container-light dark:border-surface-container-light"}  absolute top-1/2 transform -translate-y-1/2 right-[12px]  rounded-full h-[24px] w-[24px]`}>
											chevron_right
										</Icon>
									</div>}
								<div onClick={() => onChangeSetting("slideButton", "arrowInSlide")}
								     className={`${settings.slideButton === "arrowInSlide" ? "*:bg-on-primary-container-light/[30%] dark:*:bg-on-primary-container-dark/[30%] text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light  dark:bg-primary-container-dark" : "*:bg-on-surface-variant-light/[30%] dark:*:bg-on-surface-variant-dark/[30%] text-on-surface-light/[70%] dark:text-on-surface-dark/[70%] bg-surface-container-light  dark:bg-surface-container-dark"} space-x-1 h-[96px] px-4 text-body-large font-medium flex items-center justify-center  rounded-[16px] `}>
									<div
										className={"w-8/12 flex justify-between items-center px-1 h-[48px] rounded-[12px]"}>
										<Icon className={"!bg-transparent"}>
											chevron_left
										</Icon>
										<Icon className={"!bg-transparent"}>
											chevron_right
										</Icon>
									</div>
								</div>
								<div onClick={() => onChangeSetting("slideButton", "arrowInBox")}
								     className={`${settings.slideButton === "arrowInBox" ? "*:bg-on-primary-container-light/[30%] dark:*:bg-on-primary-container-dark/[30%] text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light  dark:bg-primary-container-dark" : "*:bg-on-surface-variant-light/[30%] dark:*:bg-on-surface-variant-dark/[30%] text-on-surface-light/[70%] dark:text-on-surface-dark/[70%] bg-surface-container-light  dark:bg-surface-container-dark"} space-x-1 h-[96px] px-4 text-body-large font-medium flex items-center justify-center  rounded-[16px] `}>

									<div
										className={"w-10/12 relative flex justify-between items-center px-1 h-[64px] rounded-[12px]"}>
										<div
											className={`rounded-full h-fit absolute bottom-1 right-1 flex items-center justify-center ${settings.arrowStyle === 2 ? "bg-on-primary-container-light/[40%] dark:bg-on-primary-container-dark/[40%]" : "bg-on-surface-variant-light/[40%] dark:bg-on-surface-variant-dark/[40%]"}`}>
											<Icon className={"text-[20px] !bg-transparent"}>
												chevron_left
											</Icon>
											<Icon className={"text-[20px] !bg-transparent"}>
												chevron_right
											</Icon>
										</div>
									</div>

								</div>
								{/*<div onClick={() => onChangeSetting("slideButton", "auto")}*/}
								{/*     className={`${settings.slideButton === "auto" ? " text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light  dark:bg-primary-container-dark" : " text-on-surface-variant-light/[50%] dark:text-on-surface-variant-dark/[50%] bg-surface-container-light  dark:bg-surface-container-dark"} h-[96px] px-4 text-body-large font-medium flex items-center justify-center rounded-[16px] `}>*/}
								{/*	<Icon className={"mr-1"}>*/}
								{/*		schedule*/}
								{/*	</Icon>*/}
								{/*	Auto*/}
								{/*</div>*/}
							</div>
						</div>
						{settings.slideButton === "arrowIn" && <div
							className={""}>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Arrow Setting
							</h3>
							{settings.slideButton === "arrowIn" &&
								<div className={"px-4 mt-2 grid  grid-cols-2  gap-4"}>
									<div onClick={() => onChangeSetting("arrowStyle", 1)}
									     className={`${settings.arrowStyle === 1 ? "*:bg-on-primary-container-light/[30%] dark:*:bg-on-primary-container-dark/[30%] text-on-primary-container-light dark:text-on-primary-container-dark bg-primary-container-light  dark:bg-primary-container-dark" : "*:bg-on-surface-variant-light/[30%] dark:*:bg-on-surface-variant-dark/[30%] text-on-surface-light/[70%] dark:text-on-surface-dark/[70%] bg-surface-container-light  dark:bg-surface-container-dark"} space-x-1 h-[96px] px-4 text-body-large font-medium flex items-center justify-center  rounded-[16px] `}>

										<div
											className={"w-10/12 flex justify-between items-center px-1 h-[64px] rounded-[12px]"}>
											<Icon className={"!bg-transparent"}>
												chevron_left
											</Icon>
											<Icon className={"!bg-transparent"}>
												chevron_right
											</Icon>
										</div>

									</div>

								</div>}


						</div>}

					</div>}
					{editMode === "style" && <div className={"py-2"}>
						<div
							className={""}>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Slide
							</h3>
							<div className={"flex py-2 justify-end px-4 items-center"}>
								<label className={"text-body-large font-medium mr-auto"}>
									Rounded
								</label>
								<input onChange={(e) => onChangeSetting("slideBorderRadius", e.target.value)}
								       defaultValue={settings.slideBorderRadius}
								       className={"mr-2 w-4/12 bg-transparent border-outline-variant-light dark:border-outline-variant-dark rounded-[8px]  text-on-surface-light dark:text-on-surface-dark"}/>
								<label
									className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
									px
								</label>
							</div>
							<div className={"flex py-2 justify-end px-4 items-center"}>
								<label className={"text-body-large font-medium mr-auto"}>
									Height
								</label>
								<input onChange={(e) => onChangeSetting("slideHeight", e.target.value)}
								       defaultValue={settings.slideHeight}
								       className={"mr-2 w-4/12 bg-transparent border-outline-variant-light dark:border-outline-variant-dark rounded-[8px]  text-on-surface-light dark:text-on-surface-dark"}/>
								<label
									className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-medium"}>
									px
								</label>
							</div>
							<div className={"flex px-4 py-2 justify-between mb-4  items-center "}>
								<label
									className={"text-on-surface-light dark:text-on-surface-dark font-medium text-body-large"}>
									Container base
								</label>
								<Switch setIsCheck={(v) => onChangeSetting("isInContainer", v)}
								        isCheck={settings.isInContainer}/>
							</div>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Navigation Style
							</h3>
							<div
								className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
								<label
									className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
									Background Color
								</label>
								<ColorPicker onChange={(value) => onChangeSetting("navigationBackgroundColor", value)}
								             value={settings["navigationBackgroundColor"]}/>
							</div>
							<div
								className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
								<label
									className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
									Arrow Color
								</label>
								<ColorPicker onChange={(value) => onChangeSetting("navigationArrowColor", value)}
								             value={settings["navigationArrowColor"]}/>
							</div>
							<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
								Pagination Style
							</h3>
							<div
								className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
								<label
									className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
									Pagination Background Color
								</label>
								<ColorPicker onChange={(value) => onChangeSetting("paginationBackgroundColor", value)}
								             value={settings["paginationBackgroundColor"]}/>
							</div>
							<div
								className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
								<label
									className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
									Pagination Color
								</label>
								<ColorPicker onChange={(value) => onChangeSetting("paginationTextColor", value)}
								             value={settings["paginationTextColor"]}/>
							</div>

						</div>

						{/*"slideBorderRadius": "0px",*/}
						{/*"isInContainer": false,*/}
						{/*"slideHeight": 400,*/}
					</div>}
				</EditorDialog>
			</div>
		</>)

}

