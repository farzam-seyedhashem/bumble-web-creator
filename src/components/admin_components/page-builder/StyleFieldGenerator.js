import ColorPicker from "@m3/color_pricker/ColorPicker";
import {useEffect, useState} from "react";
import Icon from "@m3/assets/icons/Icon";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import TextField from "@m3/text_fields/TextField";
import FilledTextField from "@m3/text_fields/FilledTextField";
import FilledSelect from "@m3/text_fields/FilledSelect";
import Select from "@m3/text_fields/Select";
import Switch from "@m3/switch/Switch";
import {Tooltip} from "@m3/tooltips/Tooltip";

export default function StyleFieldGenerator({field, onChange, isDesktop, styles}) {
	const [style, setStyle] = useState(styles[field.onDeviceChange ? isDesktop ? "desktop" : "mobile" : "global"])
	useEffect(() => {
		setStyle(styles[field.onDeviceChange ? isDesktop ? "desktop" : "mobile" : "global"])
	}, [styles])
	const onChangeValue = (name, value) => {
		onChange(name, value, field.onDeviceChange ? isDesktop ? "desktop" : "mobile" : "global")
	}


	return (
		<div className={""}>
			{field.type === "title" &&
				<h3 className={"px-4 pt-3 pb-2 mt-6 border-t border-outline-variant-light dark:border-outline-variant-dark w-full text-title-medium font-bold text-on-surface-light dark:text-on-surface-dark "}>
					{field.value}
				</h3>}

			{field.type === "border" && <div className={"  space-x-0 items-center"}>
				{/*<div className={"w-5/12 justify-between items-center pt-4 pb-2"}>*/}
				{/*	<FilledTextField onChange={} label={"Border Size"}/>*/}
				{/*</div>*/}
				<div className={"h-[64px] px-4 flex  justify-between items-center"}>
					<label
						className={" text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
						Rounded
					</label>
					<div className={"mt-0 w-[120px]"}>
						<TextFieldEditor id={"borderRadius"} onChange={onChangeValue}
						                 defValue={style?.borderRadius || ""}/>
					</div>
				</div>
				<div className={"w-full flex  px-4 justify-between items-center "}>
					<label
						className={" text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
						Rounded
					</label>
					<div className={"w-[120px] appearance-none"}>
						<Select onChange={(e) => {
							onChangeValue("borderStyle", e.target.value)
						}} options={[
							// {title:"",value:""},
							{title: "Solid", value: ""},
							{title: "Dot", value: "dotted"},
							{title: "Dash", value: "dashed"},
						]} label={"Border Style"}/>
					</div>
				</div>
				<div
					className={"px-4 mt-2 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
					<label
						className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
						Color
					</label>
					<ColorPicker onChange={(value) => onChangeValue("borderColor", value)}
					             value={style ? style[field.type] ? style[field.type] : "" : ""}/>
				</div>
			</div>}
			{field.type === "boxModel" &&
				<div className={"px-4"}>

					<div
						className={"mx-auto mt-3 flex justify-center items-center w-full"}>
						<div
							className={"relative w-[320px] rounded-[8px] h-[320px] flex items-center justify-center border border-outline-light dark:border-outline-dark"}>
							<label
								className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-small font-medium top-2 absolute left-2"}>Margin</label>

							<input value={style ? style?.marginLeft ? style?.marginLeft.replace("px", "") : "" : ""}
							       onChange={(e) => onChangeValue("marginLeft", e.target.value === "auto" ? e.target.value : (e.target.value + "px"))}
							       className={"outline-none text-on-surface-light absolute text-label-large transform top-1/2 -translate-y-1/2 left-1 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
							<input value={style ? style?.marginRight ? style?.marginRight.replace("px", "") : "" : ""}
							       onChange={(e) => onChangeValue("marginRight", e.target.value === "auto" ? e.target.value : (e.target.value + "px"))}
							       className={"outline-none text-on-surface-light  absolute text-label-large transform top-1/2 -translate-y-1/2 right-1 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
							<input value={style ? style?.marginTop ? style?.marginTop.replace("px", "") : "" : ""}
							       onChange={(e) => onChangeValue("marginTop", e.target.value === "auto" ? e.target.value : (e.target.value + "px"))}
							       className={"outline-none text-on-surface-light  absolute text-label-large transform top-[4px] -translate-x-1/2 left-1/2 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
							<input value={style ? style?.marginBottom ? style?.marginBottom.replace("px", "") : "" : ""}
							       onChange={(e) => onChangeValue("marginBottom", e.target.value === "auto" ? e.target.value : (e.target.value + "px"))}
							       className={"outline-none text-on-surface-light  absolute text-label-large transform bottom-[4px] -translate-x-1/2 left-1/2 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>

							<div
								className={"relative w-[240px] rounded-[8px] h-[240px] flex items-center justify-center border border-outline-light dark:border-outline-dark"}>
								<label
									className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-small font-medium top-2 absolute left-2"}>Border</label>

								<input value={style?.borderLeft?.replace("px", "")}
								       onChange={(e) => {
									       onChangeValue("borderLeft", e.target.value + "px")
									       // onChangeValue("borderStyle", "solid")
								       }}
								       className={"text-on-surface-light  outline-none absolute text-label-large transform top-1/2 -translate-y-1/2 left-1 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
								<input value={style?.borderRight?.replace("px", "")}
								       onChange={(e) => {
									       onChangeValue("borderRight", e.target.value + "px")
								       }}
								       className={"text-on-surface-light  outline-none absolute text-label-large transform top-1/2 -translate-y-1/2 right-1 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
								<input value={style?.borderTop?.replace("px", "")}
								       onChange={(e) => {
									       onChangeValue("borderTop", e.target.value + "px")
								       }}
								       className={"text-on-surface-light outline-none absolute text-label-large transform top-[4px] -translate-x-1/2 left-1/2 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
								<input value={style?.borderBottom?.replace("px", "")}
								       onChange={(e) => {
									       onChangeValue("borderBottom", e.target.value + "px")
								       }}
								       className={"text-on-surface-light outline-none absolute text-label-large transform bottom-[4px] -translate-x-1/2 left-1/2 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>

								<div
									className={"w-[160px] bg-surface-variant-light dark:bg-surface-variant-dark relative rounded-[8px] h-[160px] flex items-center justify-center border border-outline-light dark:border-outline-dark"}>
									<label
										className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-label-small font-medium top-2 absolute left-2"}>Padding</label>

									<input
										value={style ? style?.paddingLeft ? style?.paddingLeft.replace("px", "") : "" : ""}
										onChange={(e) => onChangeValue("paddingLeft", e.target.value + "px")}
										className={"text-on-surface-light outline-none absolute text-label-large transform top-1/2 -translate-y-1/2 left-1 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
									<input
										value={style ? style?.paddingRight ? style?.paddingRight.replace("px", "") : "" : ""}
										onChange={(e) => onChangeValue("paddingRight", e.target.value + "px")}
										className={"text-on-surface-light outline-none absolute text-label-large transform top-1/2 -translate-y-1/2 right-1 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
									<input
										value={style ? style?.paddingTop ? style?.paddingTop.replace("px", "") : "" : ""}
										onChange={(e) => onChangeValue("paddingTop", e.target.value + "px")}
										className={"text-on-surface-light outline-none absolute text-label-large transform top-[4px] -translate-x-1/2 left-1/2 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>
									<input
										value={style ? style?.paddingBottom ? style?.paddingBottom.replace("px", "") : "" : ""}
										onChange={(e) => onChangeValue("paddingBottom", e.target.value + "px")}
										className={"text-on-surface-light outline-none absolute text-label-large transform bottom-[4px] -translate-x-1/2 left-1/2 h-[28px] w-[32px] rounded-[4px] bg-transparent px-1 text-center border border-outline-light dark:border-outline-dark"}/>

									<div
										className={"text-label-medium font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark bg-surface-variant-light dark:bg-surface-variant-dark w-[80px] rounded-[8px] h-[80px] flex items-center justify-center border border-outline-light dark:border-outline-dark"}>
										Component
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
			{field.type === "objectFit" && <div className={"block justify-between items-center "}>
				<div className={"py-0 "}>
					<ul>
						<li onClick={() => onChangeValue("objectFit", "cover")}
						    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
							<Icon
								className={`${style.objectFit === "cover" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
								{style.objectFit === "cover" ? "radio_button_checked" : "radio_button_unchecked"}
							</Icon>
							Cover
						</li>
						<li onClick={() => onChangeValue("objectFit", "contain")}
						    className={"px-4 h-[56px] flex items-center text-on-surface-light dark:text-on-surface-dark text-body-large hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%]"}>
							<Icon
								className={`${style.objectFit === "contain" ? "text-primary-light dark:text-primary-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} mr-2 text-primary-light`}>
								{style.objectFit === "contain" ? "radio_button_checked" : "radio_button_unchecked"}
							</Icon>
							Contain
						</li>
					</ul>
				</div>
			</div>}
			{field.type === "width" && <div className={"flex px-4 h-[64px] justify-between items-center"}>
				<label
					className={" text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
					Width
				</label>
				<div className={"mt-0 w-[120px]"}>
					<TextFieldEditor id={"width"} onChange={onChangeValue}
					                 defValue={style?.width || ""}/>
				</div>
			</div>}
			{field.type === "visibility" && <div className={"flex px-4 h-[64px] justify-between items-center"}>
				<label
					className={" text-body-large  font-normal text-on-surface-light dark:text-on-surface-dark"}>
					Is Component Hide ?
				</label>
				<div className={"mt-0 "}>
					<Switch setIsCheck={(e)=>onChangeValue("display",e?"none":"block")}
					                 isCheck={style?.display==="none"}/>
				</div>
			</div>}
			{field.type === "maxWidth" && <div className={"flex px-4 h-[64px] justify-between items-center"}>
				<label
					className={" text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
					Max Width
				</label>
				<div className={"mt-0 w-[120px]"}>
					<TextFieldEditor id={"maxWidth"} onChange={onChangeValue}
					                 defValue={style?.maxWidth || ""}/>
				</div>
			</div>}
			{field.type === "height" && <div className={"flex px-4 h-[64px] justify-between items-center"}>
				<label
					className={" text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
					Height
				</label>
				<div className={"mt-0 w-[120px]"}>
					<TextFieldEditor id={"height"} onChange={onChangeValue}
					                 defValue={style?.height || ""}/>
				</div>
			</div>}

			{field.type === "font" &&
				<div className={"px-4"}>

					<div className={"  items-center py-0"}>
						<div className={"h-[64px] flex justify-between items-center "}>
							<label
								className={" text-body-large font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								Font Weight
							</label>
							<div className={"w-[120px] relative  justify-end"}>
								<select onChange={(e) => onChangeValue("fontWeight", e.target.value)}
								        type={"text"}
								        value={style?.fontWeight}
								        className={"w-full relative appearance-none py-2 px-4 text-center bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark  border border-outline-light dark:border-outline-dark "}>
									<option label={"light"} value={"300"}/>
									<option label={"normal"} value={"400"}/>
									<option label={"medium"} value={"500"}/>
									<option label={"bold"} value={"700"}/>
									<option label={"black"} value={"900"}/>

								</select>
								<Icon className={"absolute top-[10px] z-10 right-2 text-on-surface-variant-light"}>
									arrow_drop_down
								</Icon>
							</div>
						</div>
						<div className={"h-[64px] flex justify-between items-center"}>
							<label
								className={" text-body-large font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
								Font Size
							</label>
							<div className={"w-[120px]"}>
								<TextFieldEditor id={"fontSize"} onChange={onChangeValue}
								                 defValue={style?.fontSize || ""}/>
							</div>
						</div>

					</div>
					<div className={"flex mt-2 justify-between items-center h-[64px]"}>
						<label
							className={" text-body-large font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							Line Height
						</label>
						<div className={"flex mt-0 justify-end"}>
							<input onChange={(e) => onChangeValue("lineHeight", e.target.value)} type={"text"}
							       value={style?.lineHeight}
							       className={"text-center h-[46px] bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-[120px] border border-outline-variant-light focus:border-outline-light "}/>
						</div>

					</div>
				</div>
			}
			{field.type === "display" && <div>
				<div className={"px-4 h-[64px] flex justify-between items-center "}>
					<label
						className={" text-title-small font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
						Display
					</label>
					<div className={"mt-1 flex justify-end space-x-1"}>
						{field.enum.findIndex(item => item === "hidden") !== -1 &&
							<button  onClick={(e) => onChangeValue("display", "none")}
							        className={`group relative ${(style && style[field.type] && style[field.type] === "none") ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									block
								</Icon>
								<Tooltip className={"group-hover:flex"} position={["top","left"]} label={"Hide"}/>

							</button>}
						{field.enum.findIndex(item => item === "flex") !== -1 &&
							<button onClick={(e) => onChangeValue("display", "flex")}
							        className={`relative group ${(style && style[field.type] && style[field.type] === "flex") ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									arrow_right_alt
								</Icon>
								<Tooltip className={"group-hover:flex"} position={["top","center"]} label={"Display Flex"}/>

							</button>}
						{field.enum.findIndex(item => item === "block") !== -1 &&
							<button onClick={(e) => onChangeValue("display", "block")}
							        className={`relative group ${(style && style[field.type] && style[field.type] === "block") ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									arrow_downward_alt
								</Icon>
								<Tooltip className={"group-hover:flex"} position={["top","right"]} label={"Display Block"}/>

							</button>}
					</div>
				</div>
				{(style && style[field.type] && style[field.type] === "flex") && <>
					<div className={"px-4 h-[64px] flex justify-between items-center "}>
						<label
							className={" text-title-small font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							Alignment
						</label>
						<div className={"mt-1 flex justify-end space-x-1"}>
							<button onClick={(e) => onChangeValue("alignItems", "flex-start")}
							        className={`${style["alignItems"] === "flex-start" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_flex_start
								</Icon>
							</button>
							<button onClick={(e) => onChangeValue("alignItems", "center")}
							        className={`${style["alignItems"] === "center" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_flex_center
								</Icon>
							</button>
							<button onClick={(e) => onChangeValue("alignItems", "flex-end")}
							        className={`${style["alignItems"] === "flex-end" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_flex_end
								</Icon>
							</button>
						</div>
					</div>
					<div className={"px-4 h-[64px] flex justify-between items-center "}>
						<label
							className={" text-title-small font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
							Justify
						</label>
						<div className={"mt-1 flex justify-end space-x-1"}>
							<button onClick={(e) => onChangeValue("justifyContent", "flex-start")}
							        className={`${style["justifyContent"] === "flex-start" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_flex_start
								</Icon>
							</button>
							<button onClick={(e) => onChangeValue("justifyContent", "center")}
							        className={`${style["justifyContent"] === "center" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_center
								</Icon>
							</button>
							<button onClick={(e) => onChangeValue("justifyContent", "space-between")}
							        className={`${style["justifyContent"] === "space-between" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_space_between
								</Icon>
							</button>
							<button onClick={(e) => onChangeValue("justifyContent", "space-around")}
							        className={`${style["justifyContent"] === "space-around" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_space_around
								</Icon>
							</button>
							<button onClick={(e) => onChangeValue("justifyContent", "flex-end")}
							        className={`${style["justifyContent"] === "flex-end" ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
								<Icon className={"text-[24px]"}>
									align_justify_flex_start
								</Icon>
							</button>
						</div>
					</div>
				</>}
			</div>}

			{field.type === "textAlign" && <div className={"px-4 h-[64px] flex justify-between items-center "}>
				<label
					className={" text-title-small font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
					Text Align
				</label>
				<div className={"mt-1 flex justify-end space-x-1"}>
					<button onClick={(e) => onChangeValue("textAlign", "left")}
					        className={`group relative ${(style && style[field.type] && style[field.type] === "left") ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
						<Icon className={"text-[24px]"}>
							format_align_left
						</Icon>
						<Tooltip className={"group-hover:flex"} position={["top","left"]} label={"Align Left"}/>
					</button>
					<button onClick={(e) => onChangeValue("textAlign", "center")}
					        className={`group relative ${(style && style[field.type] && style[field.type] === "center") ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
						<Icon className={"text-[24px]"}>
							format_align_center
						</Icon>
						<Tooltip className={"group-hover:flex"} position={["top","center"]} label={"Align Center"}/>

					</button>
					<button onClick={(e) => onChangeValue("textAlign", "right")}
					        className={`group relative ${(style && style[field.type] && style[field.type] === "right") ? "border-primary-light bg-primary-container-light/[12%] text-primary-light dark:border-primary-dark dark:bg-primary-container-dark/[12%] dark:text-primary-dark" : "text-on-surface-variant-light border-outline-variant-light dark:text-on-surface-variant-dark dark:border-outline-variant-dark bg-transparent"} flex items-center justify-center rounded-[8px] border  h-[40px] w-[40px]`}>
						<Icon className={"text-[24px]"}>
							format_align_right
						</Icon>
						<Tooltip className={"group-hover:flex"} position={["top","right"]} label={"Align Right"}/>

					</button>
				</div>
			</div>}
			{field.type === "color" && <div
				className={"px-4 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
				<label
					className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
					Color
				</label>
				<ColorPicker onChange={(value) => onChangeValue("color", value)}
				             value={style ? style[field.type] ? style[field.type] : "" : ""}/>
			</div>}
			{field.type === "fill" && <div
				className={"px-4 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
				<label
					className={"text-body-large  text-on-surface-light dark:text-on-surface-dark"}>
					Fill
				</label>
				<ColorPicker onChange={(value) => onChangeValue("fill", value)}
				             value={style ? style[field.type] ? style[field.type] : "" : ""}/>
			</div>}

			{field.type === "backgroundColor" && <div
				className={"px-4 hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] h-[64px] flex justify-between items-center "}>
				<label
					className={"text-body-large  font-normal text-on-surface-light dark:text-on-surface-dark"}>
					Background Color
				</label>
				<ColorPicker onChange={(value) => onChangeValue("backgroundColor", value)}
				             value={style ? style[field.type] ? style[field.type] : "" : ""}/>
			</div>}


		</div>
	)
}