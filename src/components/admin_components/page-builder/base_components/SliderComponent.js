'use client';
import {useEffect, useState, Fragment} from "react";
import TextField from "@m3/text_fields/TextField";
import IconButton from "@m3/icon_buttons/IconButton";
import {Swiper, SwiperSlide} from "swiper/react";
import Checkbox from "@m3/checkboxes/Checkbox";
import Switch from "@m3/switch/Switch";
import {Transition, Dialog} from "@headlessui/react";
import TextFieldEditor from "@page_builder/editor_components/TextFieldEditor";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import EditorDialog from "@page_builder/editor_components/EditorDialog";


export default function SliderComponent({item, editItem,idNumber}) {
    const [isSelected, setIsSelected] = useState(false)
    const [options, setOptions] = useState(item?.options);

    const [sliderOptions, setSliderOptions] = useState(item.options || options)
    const slides = [
        {
            title: "Lorem ipsum dolor",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque",
            image: "https://random-image-pepebigotes.vercel.app/api/random-image",
           linkText:"Click here!",
            link: "/",
        },
        {
            title: "Lorem ipsum dolor",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque",
            image: "https://random-image-pepebigotes.vercel.app/api/random-image",
            linkText:"hi",
            link: "/",
        },
        {
            title: "Lorem ipsum dolor",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque",
            image: "https://random-image-pepebigotes.vercel.app/api/random-image",
            linkText:"custom",
            link: "/",
        },
        {
            title: "Lorem ipsum dolor",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque",
            image: "https://random-image-pepebigotes.vercel.app/api/random-image",

        },
        {
            title: "Lorem ipsum dolor",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque",
            image: "https://random-image-pepebigotes.vercel.app/api/random-image",
            linkText:"hello",
            link: "/",
        },
    ]

    const handleOptionChange = (key, value) => {
        let op = {...options, [key]: value}
        setOptions(op)
        editItem("options", op)
    }

    return (
        <>
            <div>
                <div
                    className={"absolute hidden group-hover:block  -top-[24px] left-1/2 -translate-x-1/2 transform "}>
                    <div
                        className={"px-3 space-x-3 flex rounded-t-[8px] dark:bg-secondary-container-dark bg-secondary-container-light"}>
                        <button onClick={() => setIsSelected(true)}
                                className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                edit
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                drag_indicator
                            </Icon>
                        </button>
                        <button
                            className={"flex items-center h-[24px] w-[24px] justify-center rounded-full  !bg-secondary-container-light "}>
                            <Icon size={16} className={"!text-on-tertiary-container-light text-[20px]"}>
                                delete
                            </Icon>
                        </button>
                    </div>
                </div>
                <Swiper style={{height: options.sliderHeight}} centeredSlides={options.isCenter} loop={options.isLoop}
                        className={" relative rounded-[0px]"}
                        spaceBetween={options.spaceBetween}
                        slidesPerView={options.sliderPerView}>
                    {slides.map((item, i) =>
                        options?.slideType === 0 ? <SwiperSlide style={{borderRadius: options.sliderRounded}} key={i}
                                                                 className={"z-20 w-full relative overflow-hidden rounded-[0px] h-screen"}>
                            <img className={"object-cover w-full h-full"} src={item.image}/>
                            <div style={{
                                borderRadius: parseInt(options.sliderRounded.replace("px", "").replace("%", "")) - 4,
                                backgroundColor: options.backgroundColor
                            }}
                                 className={"px-6 py-6 bg-white/80 backdrop-blur text-black w-full md:w-4/12 bottom-6 left-6 absolute"}>
                                {options.showTitle && <h3 style={{color: options.titleColor}}
                                                          className={"mb-2 text-title-large font-black"}>
                                    {item.title}
                                </h3>}
                                {options.showDescription &&
                                    <p style={{color: options.descriptionColor}} className={"text-body-large"}>
                                        {item.paragraph}
                                    </p>}
                                {(options.showLinkButton && item.link && true && item.link !== "") &&
                                    <Button className={"mt-2"} style={{
                                        color: options.linkButtonTextColor,
                                        backgroundColor: options.linkButtonBackgroundColor
                                    }}>
                                        Click Here
                                    </Button>}
                            </div>
                        </SwiperSlide> : options?.slideType === 1 ? <SwiperSlide
                            style={{borderRadius: parseInt(options.sliderRounded.replace("px", "").replace("%", ""))}}
                            key={i}
                            className={"overflow-hidden z-20 w-full relative  h-full"}>
                            <img className={"object-cover w-full h-full"} src={item.image}/>
                            <div style={{
                                borderRadius: parseInt(options.sliderRounded.replace("px", "").replace("%", "")),
                                backgroundColor: options.backgroundColor
                            }}
                                 className={"px-4 py-4 bg-secondary-container-light backdrop-blur text-black rounded-[12px] w-full bottom-0 left-0 absolute"}>
                                {options.showTitle && <h3 style={{color: options.titleColor}}
                                                          className={"mb-2 text-title-large font-black"}>
                                    {item.title}
                                </h3>}
                                {options.showDescription &&
                                    <p style={{color: options.descriptionColor}} className={"text-body-large"}>
                                        {item.paragraph}
                                    </p>}
                                {(options.showLinkButton && item.link && true && item.link !== "") &&
                                    <Button className={"mt-2"} style={{
                                        color: options.linkButtonTextColor,
                                        backgroundColor: options.linkButtonBackgroundColor
                                    }}>
                                        Click Here
                                    </Button>}
                            </div>
                        </SwiperSlide> : <SwiperSlide key={i}
                                                      className={"z-20  w-full  rounded-[0px] h-full"}>

                            <div style={{
                                borderRadius: parseInt(options.sliderRounded.replace("px", "").replace("%", "")),
                                backgroundColor: options.backgroundColor
                            }} className={"flex items-center justify-center h-full"}>
                                <div
                                    className={"px-4 flex items-center  backdrop-blur text-black rounded-[12px] h-full w-4/12 "}>
                                    <div>
                                        {options.showTitle && <h3 style={{color: options.titleColor}}
                                                                  className={"mb-2 text-title-large font-black"}>
                                            {item.title}
                                        </h3>}
                                        {options.showDescription &&
                                            <p style={{color: options.descriptionColor}} className={"text-body-large"}>
                                                {item.paragraph}
                                            </p>}
                                        {(options.showLinkButton && item.link && true && item.link !== "") &&
                                            <Button className={"mt-2"} style={{
                                                color: options.linkButtonTextColor,
                                                backgroundColor: options.linkButtonBackgroundColor
                                            }}>
                                                Click Here
                                            </Button>}
                                    </div>
                                </div>
                                <div
                                    style={{borderRadius: parseInt(options.sliderRounded.replace("px", "").replace("%", ""))}}
                                    className={"overflow-hidden w-8/12 h-full"}>
                                    <img className={"object-cover w-full h-full"} src={item.image}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>

            <EditorDialog isOpen={isSelected} setIsOpen={setIsSelected} >
                                    <div className={"px-4 "}>
                                        <div className={"flex justify-between items-center pt-4 pb-2"}>
                                            <label
                                                className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                                Title color
                                            </label>
                                            <ColorPicker onChange={(value) => handleOptionChange("titleColor", value)}
                                                         value={options.titleColor}/>

                                        </div>
                                        <div className={"flex justify-between items-center pt-4 pb-2"}>
                                            <label
                                                className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                                Description color
                                            </label>
                                            <ColorPicker
                                                onChange={(value) => handleOptionChange("descriptionColor", value)}
                                                value={options.descriptionColor}/>

                                        </div>
                                        <div className={"flex justify-between items-center pt-4 pb-2"}>
                                            <label
                                                className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                                Background color
                                            </label>
                                            <ColorPicker
                                                onChange={(value) => handleOptionChange("backgroundColor", value)}
                                                value={options.backgroundColor}/>

                                        </div>
                                        <div className={"flex justify-between items-center pt-4 pb-2"}>
                                            <label
                                                className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                                Link Button Text Color
                                            </label>
                                            <ColorPicker
                                                onChange={(value) => handleOptionChange("linkButtonBackgroundColor", value)}
                                                value={options.linkButtonBackgroundColor}/>

                                        </div>
                                        <div className={"flex justify-between items-center pt-4 pb-2"}>
                                            <label
                                                className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                                Link Button Background Color
                                            </label>
                                            <ColorPicker
                                                onChange={(value) => handleOptionChange("linkButtonTextColor", value)}
                                                value={options.linkButtonTextColor}/>

                                        </div>
                                    </div>
                                    <div className={"px-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Slider Per View
                                        </label>
                                        <div className={"w-full py-1 flex justify-end"}>
                                            <input value={options.sliderPerView}
                                                   onChange={(e) => handleOptionChange("sliderPerView", e.target.value)}
                                                   className={"text-center h-[40px]  bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-3/12 border border-outline-light dark:border-outline-dark "}/>
                                        </div>

                                    </div>
                                    <div className={"px-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Space Between Slides
                                        </label>
                                        <div className={"w-full py-1 flex justify-end"}>
                                            <input value={options.spaceBetween}
                                                   onChange={(e) => handleOptionChange("spaceBetween", e.target.value)}
                                                   className={"text-center h-[40px]  bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-3/12 border border-outline-light dark:border-outline-dark "}/>
                                        </div>

                                    </div>
                                    <div className={"px-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Slider Height
                                        </label>
                                        <div className={"w-full py-1 flex justify-end"}>
                                            <TextFieldEditor id={"sliderHeight"} defValue={options.sliderHeight}
                                                             onChange={handleOptionChange}/>
                                        </div>

                                    </div>
                                    <div className={"px-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Rounded
                                        </label>
                                        <div className={"w-full py-1 flex justify-end"}>
                                            <TextFieldEditor id={"sliderRounded"} defValue={options.sliderRounded}
                                                             onChange={handleOptionChange}/>
                                        </div>

                                    </div>
                                    <div className={"px-4 flex justify-between mt-4"}>
                                        <label
                                            className={" text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Slide Center
                                        </label>
                                        <Switch setIsCheck={(value) => handleOptionChange("isCenter", value)}
                                                isCheck={options.isCenter}/>
                                    </div>
                                    <div className={"px-4 flex justify-between mt-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Loop
                                        </label>
                                        <Switch setIsCheck={(value) => handleOptionChange("isLoop", value)}
                                                isCheck={options.isLoop}/>
                                    </div>
                                    <div className={"px-4 flex justify-between mt-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Show Title
                                        </label>
                                        <Switch setIsCheck={(value) => handleOptionChange("showTitle", value)}
                                                isCheck={options.showTitle}/>
                                    </div>
                                    <div className={"px-4 flex justify-between mt-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Show Description
                                        </label>
                                        <Switch setIsCheck={(value) => handleOptionChange("showDescription", value)}
                                                isCheck={options.showDescription}/>
                                    </div>
                                    <div className={"px-4 flex justify-between mt-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Show Link Button
                                        </label>
                                        <Switch setIsCheck={(value) => handleOptionChange("showLinkButton", value)}
                                                isCheck={options.showLinkButton}/>
                                    </div>
                                    <div className={"pb-6 px-4 mt-4"}>
                                        <label
                                            className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>
                                            Slide Ui
                                        </label>
                                        <div className={"mt-2 grid grid-cols-3 gap-4"}>
                                            <div onClick={() => handleOptionChange("slideType", 0)}
                                                 className={`w-full relative h-[64px] bg-secondary-container-dark rounded-[12px] ${options.slideType === 0 ? "outline outline-primary-dark outline-1 outline-offset-2" : ""}`}>
                                                <div
                                                    className={"absolute bottom-1 left-1 bg-secondary-dark w-7/12 h-[32px] rounded-[12px]"}>

                                                </div>
                                            </div>
                                            <div onClick={() => handleOptionChange("slideType", 1)}
                                                 className={`w-full relative h-[64px] bg-secondary-container-dark rounded-[12px] ${options.slideType === 1 ? "outline outline-primary-dark outline-1 outline-offset-2" : ""}`}>
                                                <div
                                                    className={"absolute bottom-0 left-0 bg-secondary-dark w-full h-[32px] rounded-[12px]"}>

                                                </div>
                                            </div>
                                            <div onClick={() => handleOptionChange("slideType", 2)}
                                                 className={`w-full relative h-[64px] bg-secondary-container-dark rounded-[12px] ${options.slideType === 2 ? "outline outline-primary-dark outline-1 outline-offset-2" : ""}`}>
                                                <div
                                                    className={"absolute bottom-0 left-0 h-full bg-secondary-dark w-6/12 rounded-[12px]"}>

                                                </div>
                                            </div>
                                            {/*<div onClick={() => setslideTypes(2)}*/}
                                            {/*     className={`w-full relative h-[64px]  rounded-[12px] ${slideTypes === 2 ? "outline outline-primary-dark outline-1 outline-offset-2" : ""}`}>*/}
                                            {/*   <div className={"inset-0 rounded-[12px] opacity-60 absolute bg-gradient-to-bl from-tertiary-dark to-primary-dark"}/>*/}
                                            {/*    <div*/}
                                            {/*        className={"absolute bottom-0 left-0 h-full flex items-center justify-center  w-full rounded-[12px]"}>*/}
                                            {/*        <div className={"w-6/12"}>*/}
                                            {/*        <div className={"h-[8px] rounded-full  bg-primary-dark opacity-60"}/>*/}
                                            {/*        <div className={"h-[24px] mt-1 rounded-[8px]  bg-primary-dark opacity-60"}/>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>

                                    {/*<Checkbox color={"primary"} label={"Slide Center"}/>*/}
                                    {/*<Checkbox color={"primary"} label={"Loop"}/>*/}
                                    {/*<div className={"px-4"}>*/}
                                    {/*    <label*/}
                                    {/*        className={"text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark"}>*/}
                                    {/*        Slider Per View*/}
                                    {/*    </label>*/}
                                    {/*    <inpit onChange={(e) => setSpaceBetween(e.target.value)}*/}
                                    {/*           className={"text-center  bg-transparent text-on-surface-light rounded-[8px] dark:text-on-surface-dark w-3/12 border border-outline-light dark:border-outline-dark "}>*/}
                                    {/*    </inpit>*/}

                                    {/*</div>*/}
            </EditorDialog>



        </>
    )
}