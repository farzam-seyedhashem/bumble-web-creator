'use client'
import Switch from "@m3/switch/Switch";
import {Fragment, useState} from "react";
import Link from "next/link";
import Divider from "@m3/dividers/Divider";
import Icon from "@m3/assets/icons/Icon";
import ColorPicker from "@m3/color_pricker/ColorPicker";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import IconButton from "@m3/icon_buttons/IconButton";
// import NavigationBar from "@m3/navigation_bars/NavigationBar";
// import placeholder from "lodash/fp/placeholder";
import SocialIcons from "@m3/assets/icons/SocialIcons";
import Button from "@m3/buttons/Button";
import {Transition} from "@headlessui/react";
import FilledTextField from "@m3/text_fields/FilledTextField";
import FilledTextArea from "@m3/text_area/FilledTextArea";

function Dialog({children, isOpen, onClose, headline}) {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <div as="div" className="absolute w-[400px] h-screen flex z-[999] overflow-hidden"
                 onClose={() => {
                 }}>
                <div
                    className={`fixed z-[999]  h-full w-[400px] justify-center transform bottom-0 right-0  `}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition duration-1000 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition transform duration-1000"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div
                            className={" border-l border-outline-light dark:border-outline-dark w-[400px] h-full overflow-hidden rounded-0 bg-surface-light dark:bg-surface-dark"}>
                            <div
                                className={"px-4 space-x-2 flex items-center justify-start border-none border-outline-light dark:border-outline-dark py-4 "}>
                                <h2 className={"flex-1 text-title-large text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                                    {headline}
                                </h2>
                                <IconButton onClick={() => onClose()}>
                                    close
                                </IconButton>
                            </div>
                            <div className={" h-[calc(100%_-_80px)] overflow-scroll"}>
                                {children}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition.Root>
    )
}

function FooterOne({isMobile, handler, items}) {
    return (
        <div style={{background: items.backgroundColor}} className={`border-t border-outline-light `}>
            <div className={"container mx-auto"}>
                <div className={"w-full grid grid-cols-12 gap-5 px-0 py-[64px]"}>
                    <div className={`${isMobile ? "col-span-12" : "col-span-6"} `}>
                        {items.showLogo && <h3 className={" text-on-surface-light text-title-large font-black"}>
                            Logo
                        </h3>}
                        {items.showParagraph &&
                            <p className={"mt-6  outline-1 outline-outline-light outline-offset-2 text-on-surface-variant-light text-body-large"}
                               onClick={() => handler("about-addr")}>
                                {items.customParagraph}
                            </p>}
                        {items.showAddress && <ul
                            className={"w-full  outline-1 outline-outline-light outline-offset-2"}>
                            {items.addrInfo.map((item, index) => <li key={index}>
                                <h3 style={{color: items.addressIconColor}}
                                    className={`flex items-center mb-1 mt-4 text-title-small font-medium `}>

                                   <span style={{color: items.addressColor}}>
                                    {item.title}
                                       </span>
                                </h3>
                                <a href={`tel:${item.phone}`}
                                   className={"flex items-center  text-label-large"}>
                                    <Icon style={{color: items.addressIconColor}} className={"mr-2"} size={20}>
                                        call
                                    </Icon>
                                    <span style={{color: items.addressColor}}>
                                    {item.phone}
                                    </span>
                                </a>
                                <div className={""}>

                                    <p className={" mr-2 text-body-large text-on-surface-light dark:text-on-surface-dark"}>
                                        <Icon size={20} className={"mr-2"}>
                                            map
                                        </Icon>
                                        {item.addr}
                                        <span style={{color: items.showMapLinkColor}}
                                              className={"block text-label-large font-medium"}>
                                            Show on map
                                        </span>
                                    </p>

                                </div>
                            </li>)}

                        </ul>}
                        {items.showSocialIcons &&
                            <div style={{color: items.socialIconColor}} onClick={() => handler("social")}
                                 className={" outline-1 outline-outline-light outline-offset-2 flex items-center space-x-2 mt-2"}>
                                {items.facebookLink && <SocialIcons width={20} height={20} name={"facebook"}/>}
                                {items.twitterLink && <SocialIcons width={20} height={20} name={"x"}/>}
                                {items.instagramLink && <SocialIcons width={20} height={20} name={"instagram"}/>}
                                {items.youtubeLink && <SocialIcons width={20} height={20} name={"youtube"}/>}
                                {items.telegramLink && <SocialIcons width={20} height={20} name={"telegram"}/>}
                            </div>}
                    </div>
                    <style>
                        {`
                            .link-header{
                            color:${items.linkHeaderColor};
                            }
                            .link{
                            color:${items.linkColor};
                            }
                            .link:hover{
                            color:${items.linkHoverColor};
                            }
                            `}
                    </style>
                    {items.links.map((columnLink,index)=><div key={index} onClick={() => handler("listOne")}
                          className={` outline-1 outline-outline-light outline-offset-2 ${isMobile ? "col-span-4" : "col-span-2"}`}>
                        <h3 className={"mt-6 mb-5 font-medium link-header text-title-small"}>
                            {columnLink.headline}
                        </h3>

                        <ul className={"space-y-5"}>
                            {columnLink.links.map((link,i)=><li key={i} className={"text-title-medium link"}>
                                {link.linkTitle}
                            </li>)}
                        </ul>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

function FooterTwo({isMobile, items}) {
    return (
        <div className={"mb-2"}>
            <div className={"px-2"}>
                <div style={{borderColor: items.borderColor, backgroundColor: items.backgroundColor}}
                     className={"border  rounded-[24px] w-full grid grid-cols-12 gap-5 px-8 py-[64px]"}>
                    <div className={`${isMobile ? "col-span-12" : "col-span-6"} `}>
                        {items.showLogo && <h3 className={" text-on-surface-light text-title-large font-black"}>
                            Logo
                        </h3>}
                        {items.showParagraph &&
                            <p style={{color: items.paragraphColor}} className={"mt-6 text-body-large"}>
                                {items.customParagraph}
                            </p>}
                        {items.showAddress && <ul
                            className={"w-full  outline-1 outline-outline-light outline-offset-2"}>
                            {items.addrInfo.map((item, index) => <li key={index}>
                                <h3 style={{color: items.addressIconColor}}
                                    className={`flex items-center mb-1 mt-4 text-title-small font-medium `}>

                                   <span style={{color: items.addressColor}}>
                                    {item.title}
                                       </span>
                                </h3>
                                <a href={`tel:${item.phone}`}
                                   className={"flex items-center  text-label-large"}>
                                    <Icon style={{color: items.addressIconColor}} className={"mr-2"} size={20}>
                                        call
                                    </Icon>
                                    <span style={{color: items.addressColor}}>
                                    {item.phone}
                                    </span>
                                </a>
                                <div className={""}>

                                    <p className={" mr-2 text-body-large text-on-surface-light dark:text-on-surface-dark"}>
                                        <Icon size={20} className={"mr-2"}>
                                            map
                                        </Icon>
                                        {item.addr}
                                        <span style={{color: items.showMapLinkColor}}
                                              className={"block text-label-large font-medium"}>
                                            Show on map
                                        </span>
                                    </p>

                                </div>
                            </li>)}

                        </ul>}

                        {items.showSocialIcons &&
                            <div style={{color: items.socialIconColor}} className={"flex items-center space-x-2 mt-2"}>
                                {items.facebookLink && <SocialIcons width={20} height={20} name={"facebook"}/>}
                                {items.twitterLink && <SocialIcons width={20} height={20} name={"x"}/>}
                                {items.instagramLink && <SocialIcons width={20} height={20} name={"instagram"}/>}
                                {items.youtubeLink && <SocialIcons width={20} height={20} name={"youtube"}/>}
                                {items.telegramLink && <SocialIcons width={20} height={20} name={"telegram"}/>}
                            </div>}
                    </div>
                    <style>
                        {`
                            .link-header{
                            color:${items.linkHeaderColor};
                            }
                            .link{
                            color:${items.linkColor};
                            }
                            .link:hover{
                            color:${items.linkHoverColor};
                            }
                            `}
                    </style>
                    {items.links.map((columnLink,index)=><div key={index} onClick={() => handler("listOne")}
                                                              className={` outline-1 outline-outline-light outline-offset-2 ${isMobile ? "col-span-4" : "col-span-2"}`}>
                        <h3 className={"mt-6 mb-5 font-medium link-header text-title-small"}>
                            {columnLink.headline}
                        </h3>

                        <ul className={"space-y-5"}>
                            {columnLink.links.map((link,i)=><li key={i} className={"text-title-medium link"}>
                                {link.linkTitle}
                            </li>)}
                        </ul>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default function FooterEditor({footerSetting,siteSetting}) {
    const color = siteSetting.color
    // const [editorDialogOpen, setEditorDialogOpen] = useState(false)
    const [editor, setEditor] = useState(null)
    const [items, setItems] = useState({
        paragraphType: "custom",
        customParagraph: "Material Design is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material Design streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.",
        paragraphColor: rgbaObjToRgba(color.onSurface),
        backgroundColor: rgbaObjToRgba(color.surfaceContainerHigh),
        linkColor: rgbaObjToRgba(color.primary),
        linkHeaderColor: rgbaObjToRgba(color.onSurfaceVariant),
        linkHoverColor: rgbaObjToRgba(color.onPrimaryContainer),
        socialIconColor: rgbaObjToRgba(color.onSurfaceVariant),
        addressColor: rgbaObjToRgba(color.onSurface),
        addressIconColor: rgbaObjToRgba(color.onSurfaceVariant),
        showMapLinkColor: rgbaObjToRgba(color.primary),
        borderColor: rgbaObjToRgba(color.outline),
        showLogo: true,
        showSocialIcons: true,
        showParagraph: true,
        showAddress: true,
        showMapLink: true,
        addrInfo: [
            {"title": "", "addr": "", "phone": ""}
        ],
        links: [
            {
                "headline": "", "links": [
                    {linkTitle: "", linkAddr: ""}
                ],
            }
        ],
        addrTitleColor: "",
        addrAddrColor: "",
        addrPhoneColor: "",
        facebookLink: null,
        linkedinLink: null,
        instagramLink: null,
        twitterLink: null,
        telegramLink: null,
        youtubeLink: null,
    });
    const [footerType, setFooterType] = useState(0)
    const footerTypeList = [
        {title: "Full"},
        {title: "Boxed"},
    ]
    function checkColorIsCustom(colorSet, selectedColor) {
        let v = null
        Object.values(colorSet).map((color, index) => {
            // console.log(rgbaObjToRgba(color),selectedColor,Object.keys(colorSet),Object.keys(colorSet)[index])
            if (rgbaObjToRgba(color) === selectedColor) {
                // console.log("---------", Object.keys(colorSet)[index])
                v = Object.keys(colorSet)[index];

            }
        })
        return v?v:selectedColor
    }
    const saveData = async () => {
        // console.log("weknflk",  checkColorIsCustom(color, mobileMenuItems.bottomSheetBackground))
        const data = {
            footerType:footerType,
            customParagraph: items.customParagraph,
            paragraphColor: checkColorIsCustom(color,items.paragraphColor),
            backgroundColor: checkColorIsCustom(color,items.backgroundColor),
            linkColor: checkColorIsCustom(color,items.linkColor),
            linkHeaderColor: checkColorIsCustom(color,items.linkHeaderColor),
            linkHoverColor: checkColorIsCustom(color,items.linkHoverColor),
            socialIconColor: checkColorIsCustom(color,items.socialIconColor),
            addressColor: checkColorIsCustom(color,items.addressColor),
            addressIconColor: checkColorIsCustom(color,items.addressIconColor),
            showMapLinkColor: checkColorIsCustom(color,items.showMapLinkColor),
            borderColor: checkColorIsCustom(color,items.borderColor),
            showLogo: items.showLogo,
            showSocialIcons: items.showSocialIcons,
            showParagraph: items.showParagraph,
            showAddress: items.showAddress,
            showMapLink: items.showMapLink,
            addrInfo: items.addrInfo,
            links: items.links,
            addrTitleColor: items.addrTitleColor,
            addrAddrColor: items.addrAddrColor,
            addrPhoneColor: items.addrPhoneColor,
            facebookLink: items.facebookLink,
            linkedinLink: items.linkedinLink,
            instagramLink: items.instagramLink,
            twitterLink: items.twitterLink,
            telegramLink: items.telegramLink,
            youtubeLink: items.youtubeLink,
        }
        try {
            fetch(`/api/footer/${footerSetting._id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            }).then(response =>
                    console.log("")

                // setIsOpen(true)
            ).then(menuSetting => alert(menuSetting));
        } catch (error) {
            alert('An error occurred!');
        }
    }
    const handleOnChangeValues = (key, value) => {
        setItems({...items, [key]: value})
    }
    const handleAddressChange = (key, value, index) => {
        const newAddr = items.addrInfo
        newAddr[index][key] = value
        setItems({...items, "addrInfo": newAddr})

    }
    const handleLinks = (key, value, columnIndex,linkIndex) => {
        const newLinksColumn = items.links
        newLinksColumn[columnIndex].links[linkIndex][key] = value
        // console.log(newLinksColumn)

        setItems({...items, "links": newLinksColumn})
    }
    const handleLinkHeadline = (index, value) => {
        const newLinksColumn = items.links
        newLinksColumn[index].headline = value
        setItems({...items, "links": newLinksColumn})
    }
    const handleSocialChanges = (key, value, index) => {

    }
    const addNewAdd = () => {
        if (items.addrInfo.length < 3) {
            const newAddr = items.addrInfo
            newAddr.push({"title": "", "addr": "", "phone": ""})

            setItems({...items, "addrInfo": newAddr})
        }
    }
    const addNewLinkColumn = () => {
        if (items.addrInfo.length < 3) {
            const newLinkColumn = items.links
            newLinkColumn.push({
                "headline": "", "links": [
                    {linkTitle: "", linkAddr: ""}
                ],
            })

            setItems({...items, "links": newLinkColumn})
        }
    }
    return (
        <div className={"container mx-auto py-8 "}>
            <div className={"flex mb-6 px-4 items-center justify-between"}>
                <h2 className={"  text-headline-medium font-black  text-on-surface-light dark:text-on-surface-dark"}>
                    Footer
                </h2>
                <Button onClick={()=>saveData()} icon={"save"} type="filled">
                    Save
                </Button>
            </div>
            <Dialog
                headline={editor === "addr" ? "Edit Address List" : editor === "paragraph" ? "Edit paragraph text" : ""}
                onClose={() => setEditor(null)}
                isOpen={editor !== null}>
                {editor === "addr" && <div>
                    <div className={"px-6"}>
                        <div className={"mt-4"}>

                            {items.addrInfo.map((item, index) =>
                                <div className={"mt-2 space-y-2"} key={index}>
                                    <h3 className={"font-bold text-title-small"}>
                                        Address {index + 1}
                                    </h3>
                                    <FilledTextField value={items.title}
                                                     onChange={(e) => handleAddressChange("title", e.target.value, index)}
                                                     label={"Title"}/>
                                    <FilledTextField value={items.title}
                                                     onChange={(e) => handleAddressChange("phone", e.target.value, index)}
                                                     label={"Phone"}/>
                                    <FilledTextField value={items.mapLink}
                                                     onChange={(e) => handleAddressChange("mapLink", e.target.value, index)}
                                                     label={"Map link"}/>
                                    <FilledTextArea value={items.title}
                                                    onChange={(e) => handleAddressChange("addr", e.target.value, index)}
                                                    label={"Address"}/>

                                </div>
                            )}
                            {
                                <div onClick={addNewAdd} className={"mt-4 flex justify-center"}>
                                    <Button icon={"add"} type={"elevated"}>
                                        Add new address
                                    </Button>
                                </div>}
                        </div>
                    </div>
                </div>}
                {editor === "socials" && <div className={"px-6"}>
                    <div className={" space-y-2"}>
                        {/*<h3 className={"font-bold text-title-small"}>*/}
                        {/*</h3>*/}
                        <FilledTextField value={items.facebookLink}
                                         onChange={(e) => handleOnChangeValues("facebookLink", e.target.value)}
                                         label={"Facebook"}/>
                        <FilledTextField value={items.twitterLink}
                                         onChange={(e) => handleOnChangeValues("twitterLink", e.target.value)}
                                         label={"X (Twitter)"}/>
                        <FilledTextField value={items.instagramLink}
                                         onChange={(e) => handleOnChangeValues("instagramLink", e.target.value)}
                                         label={"Instagram"}/>
                        <FilledTextField value={items.youtubeLink}
                                         onChange={(e) => handleOnChangeValues("youtubeLink", e.target.value)}
                                         label={"Youtube"}/>
                        <FilledTextField value={items.telegramLink}
                                         onChange={(e) => handleOnChangeValues("telegramLink", e.target.value)}
                                         label={"Telegram"}/>

                    </div>
                </div>}
                {editor === "paragraph" && <div className={"px-6"}>
                    <FilledTextArea className={"h-[400px]"} value={items.customParagraph}
                                    onChange={(e) => handleOnChangeValues("customParagraph", e.target.value)}
                                    label={"paragraph"}/>
                </div>}
                {editor === "links" && <div>
                    <div className={"px-6"}>
                        <div className={"mt-4"}>

                            {items.links.map((item, columnIndex) =>
                                <div className={"mt-2 space-y-2"} key={columnIndex}>
                                    <h3 className={"font-bold text-title-medium"}>
                                        Link column {columnIndex + 1}
                                    </h3>
                                    <FilledTextField value={item.headline}
                                                     onChange={(e) => handleLinkHeadline(columnIndex,e.target.value)}
                                                     label={"Headline"}/>
                                    <div className={"mt-2 space-y-2"} key={columnIndex}>
                                        <h3 className={"font-medium text-title-small"}>
                                            Links
                                        </h3>
                                        {item.links.map((link, linkIndex) =>
                                            <div className={"px-2"} key={linkIndex}>
                                                <FilledTextField  value={link.linkTitle}
                                                                  onChange={(e) => handleLinks("linkTitle", e.target.value,columnIndex, linkIndex)}
                                                                  label={"Title"}/>
                                                {item.links.length-1!==linkIndex && <div className={"flex items-center justify-center"}>
                                                    <FilledTextField value={link.linkAddr}
                                                                     onChange={(e) => handleLinks("linkAddr", e.target.value, columnIndex,linkIndex)}
                                                                     label={"Address"}/>
                                                </div>}
                                                {item.links.length-1===linkIndex && <div className={"flex items-center justify-center"}>
                                                    <FilledTextField value={link.linkAddr}
                                                                     onChange={(e) => handleLinks("linkAddr", e.target.value, columnIndex,linkIndex)}
                                                                     label={"Address"}/>
                                                    <IconButton onClick={()=>{

                                                        const newLinksColumn = items.links
                                                        newLinksColumn[columnIndex].links.push({linkTitle: "", linkAddr: ""})


                                                        setItems({...items, "links": newLinksColumn})
                                                    }} className={"ml-2"} selected={true}>
                                                        add_circle
                                                    </IconButton>
                                                </div>}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            )}
                            {items.links.length<3?<div onClick={addNewLinkColumn} className={"mt-4 flex justify-center"}>
                                <Button icon={"add"} type={"elevated"}>
                                    Add new link column
                                </Button>
                            </div>:<div className={"h-[48px]"}/>}
                        </div>
                    </div>
                </div>}
            </Dialog>

            <div className={"space-x-4 flex "}>
                <div className={"w-8/12 space-y-4"}>
                    <div
                        className={"pt-0 p-6 pb-12 rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                        <div
                            className={"w-full relative    flex items-start  "}>
                            <div style={{background: rgbaObjToRgba(color.surface)}}
                                 className={"relative border-t-0 rounded-t-none h-fit border-[6px] border-outline-light dark:border-outline-dark w-full rounded-[16px] overflow-hidden"}>
                                <div className={"pt-8 bottom-0 left-0 w-full"}>
                                    {footerType === 0 && <FooterOne items={items} handler={setEditor}/>}
                                    {footerType === 1 && <FooterTwo items={items} handler={setEditor}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"pt-0 p-6 pb-12 w-fit rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>

                        <div
                            className={"w-fit relative  flex items-start "}>
                            <div style={{background: rgbaObjToRgba(color.surface)}}
                                 className={"max-w-[350px] w-[350px] mx-auto relative border-t-0 rounded-t-none  border-[6px] border-outline-light dark:border-outline-dark  rounded-[16px] overflow-hidden"}>
                                <div className={"pt-8 bottom-0 left-0 w-full"}>
                                    {footerType === 0 && <FooterOne items={items} handler={setEditor} isMobile={true}/>}
                                    {footerType === 1 && <FooterTwo items={items} handler={setEditor} isMobile={true}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-4/12"}>
                    <div
                        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>
                        <h3 className={"text-title-medium text-on-surface-light dark:text-on-surface-dark font-bold"}>
                            Footer design setting
                        </h3>
                        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Edit your website footer color, types and shapes
                        </p>
                    </div>
                    <ul className={"py-2"}>
                        <ul className={"py-2 px-2"}>
                            {footerTypeList.map((item, index) => <li key={index} onClick={(e) => {
                                setFooterType(index)

                            }}>
                                <input className={"hidden"} type="radio" id={index} name="fav_language"/>
                                <label className={"flex items-center"} htmlFor={index}>
                                    <div
                                        className={`relative ${footerType === index ? " before:active:bg-primary-light/[10%] dark:before:active:bg-primary-dark/[10%] before:hover:bg-primary-light/[8%] dark:before:hover:bg-primary-dark/[8%]" : " before:active:bg-on-surface-light/[10%] dark:before:active:bg-on-surface-dark/[10%] before:hover:bg-on-surface-light/[8%] dark:before:hover:bg-on-surface-dark/[8%]"} overflow-hidden relative before:inset-0 before:absolute w-10 h-10 rounded-full flex  justify-center items-center`}>
                                        {footerType === index ? <Icon
                                                className={"text-primary-light dark:text-primary-dark"}>radio_button_checked</Icon> :
                                            <Icon
                                                className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>radio_button_unchecked</Icon>}
                                    </div>
                                    <span
                                        className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>
                                   {item.title}
                                        </span>
                                </label>
                            </li>)}
                        </ul>
                        <li className={"flex justify-between  px-4 py-3 h-[88px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Show Logo
                                </label>
                                <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                    Do you have show your Logo in menu. you can add your logo from <Link
                                    className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}
                                    href={"/admin/setting"}>here</Link>
                                </p>
                            </div>
                            <div className={"w-fit"}>
                                <Switch setIsCheck={(v) => handleOnChangeValues("showLogo", v)}
                                        isCheck={items.showLogo}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Border color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("borderColor", v)}
                                             value={items.borderColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Background color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("backgroundColor", v)}
                                             value={items.backgroundColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Link color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("linkColor", v)}
                                             value={items.linkColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Link hover color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("linkHoverColor", v)}
                                             value={items.linkHoverColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Link header color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("paragraphColor", v)}
                                             value={items.paragraphColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Paragraph color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("paragraphColor", v)}
                                             value={items.paragraphColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Social icon color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("socialIconColor", v)}
                                             value={items.socialIconColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Address color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("addressColor", v)}
                                             value={items.addressColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Address icon color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("addressIconColor", v)}
                                             value={items.addressIconColor}/>
                            </div>
                        </li>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Show map link color
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <ColorPicker onChange={(v) => handleOnChangeValues("showMapLinkColor", v)}
                                             value={items.showMapLinkColor}/>
                            </div>
                        </li>

                    </ul>
                    <div className={"w-full pt-2 pb-4"}>
                        <Divider type={"inset-middle"} className={""}/>
                    </div>
                    <div
                        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>

                        <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                            Footer paragraph
                        </h3>
                        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Edit footer paragraph
                        </p>
                    </div>
                    <ul className={"py-2"}>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Show description paragraph
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <Switch setIsCheck={(v) => handleOnChangeValues("showParagraph", v)}
                                        isCheck={items.showParagraph}/>
                            </div>
                        </li>
                        <li onClick={() => setEditor("paragraph")}
                            className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark text-primary-light dark:text-primary-dark "}>
                                    Edit paragraph
                                </label>
                            </div>
                        </li>

                    </ul>
                    <div className={"w-full pt-2 pb-4"}>
                        <Divider type={"inset-middle"} className={""}/>
                    </div>
                    <div
                        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>

                        <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                            Footer Address
                        </h3>
                        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Edit address and information of your store
                        </p>
                    </div>
                    <ul className={"py-2"}>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Show address
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <Switch setIsCheck={(v) => handleOnChangeValues("showAddress", v)}
                                        isCheck={items.showAddress}/>
                            </div>
                        </li>
                        <li onClick={() => setEditor("addr")}
                            className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark text-primary-light dark:text-primary-dark "}>
                                    Edit address list
                                </label>
                            </div>
                        </li>
                    </ul>
                    <div className={"w-full pt-2 pb-4"}>
                        <Divider type={"inset-middle"} className={""}/>
                    </div>
                    <div
                        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>

                        <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                            Footer social media
                        </h3>
                        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Edit social media links.
                        </p>
                    </div>

                    <ul className={"py-2"}>
                        <li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>
                                    Show social media links
                                </label>
                            </div>
                            <div className={"w-fit"}>
                                <Switch setIsCheck={(v) => handleOnChangeValues("showSocialIcons", v)}
                                        isCheck={items.showSocialIcons}/>
                            </div>
                        </li>
                        <li onClick={() => setEditor("socials")}
                            className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark text-primary-light dark:text-primary-dark "}>
                                    Edit social links
                                </label>
                            </div>
                        </li>
                    </ul>

                    <div className={"w-full pt-2 pb-4"}>
                        <Divider type={"inset-middle"} className={""}/>
                    </div>
                    <div
                        className={" px-4 border-outline-variant-light dark:border-outline-variant-dark"}>

                        <h3 className={"text-on-surface-light dark:text-on-surface-dark text-title-medium font-bold"}>
                            Footer Links
                        </h3>
                        <p className={"w-9/12 text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Edit text and link of pages show in footer
                        </p>
                    </div>

                    <ul className={"py-2"}>
                        {/*<li className={"flex justify-between items-center px-4 py-2 h-[56px]"}>*/}
                        {/*    <div className={"mr-4"}>*/}
                        {/*        <label*/}
                        {/*            className={"block text-body-large text-on-surface-light dark:text-on-surface-dark "}>*/}
                        {/*            Show social media links*/}
                        {/*        </label>*/}
                        {/*        /!*<p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*!/*/}
                        {/*        /!*    Do you have show your Logo in menu. you can add your logo from <Link*!/*/}
                        {/*        /!*    className={"inline text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}*!/*/}
                        {/*        /!*    href={"/admin/setting"}>here</Link>*!/*/}
                        {/*        /!*</p>*!/*/}
                        {/*    </div>*/}
                        {/*    <div className={"w-fit"}>*/}
                        {/*        <Switch setIsCheck={(v) => handleOnChangeValues("showSocialIcons", v)}*/}
                        {/*                isCheck={items.showSocialIcons}/>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        <li onClick={() => setEditor("links")}
                            className={"flex justify-between items-center px-4 py-2 h-[56px]"}>
                            <div className={"mr-4"}>
                                <label
                                    className={"block text-body-large hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark text-primary-light dark:text-primary-dark "}>
                                    Edit links
                                </label>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    )
}