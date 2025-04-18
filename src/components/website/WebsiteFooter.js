'use client'
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import Icon from "@m3/assets/icons/Icon";
import SocialIcons from "@m3/assets/icons/SocialIcons";

function FooterOne({items, color}) {

    return (
        <>
            <style>
                {`
                .footer-container {
                   background:${color[items.backgroundColor] ? rgbaObjToRgba(color[items.backgroundColor]) : items.backgroundColor}
                }
                .link-header{
                  color:${color[items.linkHeaderColor] ? rgbaObjToRgba(color[items.linkHeaderColor]) : items.linkHeaderColor};
                }
                .link{
                 color:${color[items.linkColor] ? rgbaObjToRgba(color[items.linkColor]) : items.linkColor};
                }
                .link:hover{
                  color:${color[items.linkHoverColor] ? rgbaObjToRgba(color[items.linkHoverColor]) : items.linkHoverColor};
                }
                .footer-paragraph{
                   color:${color[items.paragraphColor] ? rgbaObjToRgba(color[items.paragraphColor]) : items.paragraphColor};
                }
                .footer-address-icon-color{
                   color:${color[items.addressIconColor] ? rgbaObjToRgba(color[items.addressIconColor]) : items.addressIconColor};

                }
                .footer-address-color{
                   color:${color[items.addressColor] ? rgbaObjToRgba(color[items.addressColor]) : items.addressColor};

                }
                .show-map-link-color{
                    color:${color[items.showMapLinkColor] ? rgbaObjToRgba(color[items.showMapLinkColor]) : items.showMapLinkColor};

                }
                .social-icon-color{
                    color:${color[items.socialIconColor] ? rgbaObjToRgba(color[items.socialIconColor]) : items.socialIconColor};

                }
               
         `}
            </style>
            <div className={`footer-container border-t border-outline-light `}>
                <div className={"container mx-auto"}>
                    <div className={"w-full grid grid-cols-12 gap-5 px-0 py-[64px]"}>
                        <div className={`col-span-12 md:col-span-6`}>
                            {items.showLogo && <h3 className={" text-on-surface-light text-title-large font-black"}>
                                Logo
                            </h3>}
                            {items.showParagraph &&
                                <p className={"footer-paragraph mt-6 text-body-large"}
                                   onClick={() => handler("about-addr")}>
                                    {items.customParagraph}
                                </p>}
                            {items.showAddress && <ul
                                className={"w-full  outline-1 outline-outline-light outline-offset-2"}>
                                {items.addrInfo.map((item, index) => <li key={index}>
                                    <h3
                                        className={`footer-address-icon-color flex items-center mb-1 mt-4 text-title-small font-medium `}>

                                   <span className={"footer-address-color"}>
                                    {item.title}
                                       </span>
                                    </h3>
                                    <a href={`tel:${item.phone}`}
                                       className={"flex items-center  text-label-large"}>
                                        <Icon className={"mr-2 footer-address-icon-color"} size={20}>
                                            call
                                        </Icon>
                                        <span className={"footer-address-color"}>
                                    {item.phone}
                                    </span>
                                    </a>
                                    <div className={""}>

                                        <p className={" mr-2 text-body-large text-on-surface-light dark:text-on-surface-dark"}>
                                            <Icon size={20} className={"mr-2 footer-address-icon-color"}>
                                                map
                                            </Icon>
                                            <span className={"footer-address-color "}>
                                            {item.addr}
                                            </span>
                                            <span
                                                className={"show-map-link-color block text-label-large font-medium"}>
                                            Show on map
                                        </span>
                                        </p>

                                    </div>
                                </li>)}

                            </ul>}
                            {items.showSocialIcons &&
                                <div onClick={() => handler("social")}
                                     className={" social-icon-color flex items-center space-x-2 mt-2"}>
                                    {items.facebookLink && <SocialIcons width={20} height={20} name={"facebook"}/>}
                                    {items.twitterLink && <SocialIcons width={20} height={20} name={"x"}/>}
                                    {items.instagramLink && <SocialIcons width={20} height={20} name={"instagram"}/>}
                                    {items.youtubeLink && <SocialIcons width={20} height={20} name={"youtube"}/>}
                                    {items.telegramLink && <SocialIcons width={20} height={20} name={"telegram"}/>}
                                </div>}
                        </div>
                        {items.links.map((columnLink, index) => <div key={index} onClick={() => handler("listOne")}
                                                                     className={` outline-1 outline-outline-light outline-offset-2 col-span-4 md:col-span-2`}>
                            <h3 className={"mt-6 mb-5 font-medium link-header text-title-small"}>
                                {columnLink.headline}
                            </h3>

                            <ul className={"space-y-5"}>
                                {columnLink.links.map((link, i) => <li key={i} className={"text-title-medium link"}>
                                    {link.linkTitle}
                                </li>)}
                            </ul>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

function FooterTwo({color,items}) {
    return (
        <>
            <style>
                {`
                .footer-container {
                   background:${color[items.backgroundColor] ? rgbaObjToRgba(color[items.backgroundColor]) : items.backgroundColor};
                   border-color:${color[items.borderColor] ? rgbaObjToRgba(color[items.borderColor]) : items.borderColor};
                }
                .link-header{
                  color:${color[items.linkHeaderColor] ? rgbaObjToRgba(color[items.linkHeaderColor]) : items.linkHeaderColor};
                }
                .link{
                 color:${color[items.linkColor] ? rgbaObjToRgba(color[items.linkColor]) : items.linkColor};
                }
                .link:hover{
                  color:${color[items.linkHoverColor] ? rgbaObjToRgba(color[items.linkHoverColor]) : items.linkHoverColor};
                }
                .footer-paragraph{
                   color:${color[items.paragraphColor] ? rgbaObjToRgba(color[items.paragraphColor]) : items.paragraphColor};
                }
                .footer-address-icon-color{
                   color:${color[items.addressIconColor] ? rgbaObjToRgba(color[items.addressIconColor]) : items.addressIconColor};

                }
                .footer-address-color{
                   color:${color[items.addressColor] ? rgbaObjToRgba(color[items.addressColor]) : items.addressColor};

                }
                .show-map-link-color{
                    color:${color[items.showMapLinkColor] ? rgbaObjToRgba(color[items.showMapLinkColor]) : items.showMapLinkColor};

                }
                .social-icon-color{
                    color:${color[items.socialIconColor] ? rgbaObjToRgba(color[items.socialIconColor]) : items.socialIconColor};

                }
               
         `}
            </style>
            <div className={"mb-2"}>
                <div className={"container mx-auto"}>
                    <div
                         className={"footer-container  border rounded-[24px] w-full grid grid-cols-12 gap-5 px-8 py-[64px]"}>
                        <div className={`col-span-12 md:col-span-6 `}>
                            {items.showLogo && <h3 className={" text-on-surface-light text-title-large font-black"}>
                                Logo
                            </h3>}
                            {items.showParagraph &&
                                <p className={"footer-paragraph mt-6 text-body-large"}>
                                    {items.customParagraph}
                                </p>}
                            {items.showAddress && <ul
                                className={"w-full  outline-1 outline-outline-light outline-offset-2"}>
                                {items.addrInfo.map((item, index) => <li key={index}>
                                    <h3
                                        className={`footer-address-icon-color flex items-center mb-1 mt-4 text-title-small font-medium `}>

                                   <span className="footer-address-color">
                                    {item.title}
                                       </span>
                                    </h3>
                                    <a href={`tel:${item.phone}`}
                                       className={"flex items-center  text-label-large"}>
                                        <Icon  className={"footer-address-icon-color mr-2"} size={20}>
                                            call
                                        </Icon>
                                        <span className={"footer-address-color"}>
                                    {item.phone}
                                    </span>
                                    </a>
                                    <div className={""}>

                                        <p className={" mr-2 text-body-large text-on-surface-light dark:text-on-surface-dark"}>
                                            <Icon size={20} className={"footer-address-icon-color mr-2"}>
                                                map
                                            </Icon>
                                            <span className={"footer-address-color"}>
                                            {item.addr}
                                            </span>
                                            <span
                                                  className={"show-map-link-color block text-label-large font-medium"}>
                                            Show on map
                                        </span>
                                        </p>

                                    </div>
                                </li>)}

                            </ul>}

                            {items.showSocialIcons &&
                                <div
                                     className={"social-icon-color flex items-center space-x-2 mt-2"}>
                                    {items.facebookLink && <SocialIcons width={20} height={20} name={"facebook"}/>}
                                    {items.twitterLink && <SocialIcons width={20} height={20} name={"x"}/>}
                                    {items.instagramLink && <SocialIcons width={20} height={20} name={"instagram"}/>}
                                    {items.youtubeLink && <SocialIcons width={20} height={20} name={"youtube"}/>}
                                    {items.telegramLink && <SocialIcons width={20} height={20} name={"telegram"}/>}
                                </div>}
                        </div>

                        {items.links.map((columnLink, index) => <div key={index} onClick={() => handler("listOne")}
                                                                     className={` outline-1 outline-outline-light outline-offset-2 col-span-4 md:col-span-2`}>
                            <h3 className={"mt-6 mb-5 font-medium link-header text-title-small"}>
                                {columnLink.headline}
                            </h3>

                            <ul className={"space-y-5"}>
                                {columnLink.links.map((link, i) => <li key={i} className={"text-title-medium link"}>
                                    {link.linkTitle}
                                </li>)}
                            </ul>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default function WebsiteFooter({siteSetting, footerSetting}) {
    const {color} = siteSetting;
    const nf = JSON.parse(footerSetting)
    return (
        <footer>
            {nf[0].footerType === 0 ?
                <FooterOne items={nf[0]} color={color}/>
                :
                <FooterTwo items={nf[0]} color={color}/>
            }
        </footer>
    )
}
