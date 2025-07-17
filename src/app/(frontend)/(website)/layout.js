'use server'
import WebsiteDesktopMenu from "@website/menu/WebsiteDesktopMenu";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
import WebsiteMobileMenu from "@website/menu/WebsiteMobileMenu";
import WebsiteFooter from "@website/WebsiteFooter";
import {getMenu} from "@controller/MenuController";
import {getFooter} from "@controller/FooterController";
import {getSiteSetting} from "@controller/SiteSettingController";
import {getByTemplateId} from "@controller/TemplateController";
import {StyleToClass} from "@/_helper/StyleToClass";
import WebComponentGenerator from "@website/WebComponentGenerator";


export default async function layout({children}) {
	const siteSetting = JSON.parse(await getSiteSetting());
	const menuSetting = JSON.stringify(await getMenu())
	const footer = await getByTemplateId('footer')
	const footerSetting = await getFooter()
	return (
		<>
			<style>
				{`
                .page-style{
                background:${rgbaObjToRgba(siteSetting.color.background)};
                }
                `}

			</style>

			<div className={" page-style min-h-screen"}>

				<WebsiteDesktopMenu menuSetting={JSON.parse(menuSetting)} siteSetting={siteSetting}/>

				<WebsiteMobileMenu menuSetting={JSON.parse(menuSetting)} siteSetting={siteSetting}/>
				<div className={"min-h-screen md:pt-[64px] md:pb-0 pb-[80px] pt-[64px]"}>
					{children}
				</div>
				{/*<WebsiteFooter footerSetting={JSON.stringify(footerSetting)} siteSetting={siteSetting}/>*/}
				<style>
					{`
                   ${JSON.parse(footer.content).map((item, index) => {
						let desktopStyles = []
						let mobileStyles = []
						let mobileAlignItems = "flex-start"
						let mobileJustifyContent = "flex-start"
						let mobileDisplay = "block"
						let desktopAlignItems = "flex-start"
						let desktopJustifyContent = "flex-start"
						let desktopDisplay = "block"
						if (item.styles) {
							if (item.styles?.mobile?.display) {
								const {
									display: mobileDisplayx,
									alignItems: mobileAlignItemsx,
									justifyContent: mobileJustifyContentx,
									...other
								} = item.styles.mobile
								mobileAlignItems = mobileAlignItemsx;
								mobileJustifyContent = mobileJustifyContentx;
								mobileDisplay = mobileDisplayx;
								mobileStyles = other
							} else {

								mobileStyles = item.styles.mobile
							}
							if (item.styles.desktop?.display) {
								const {
									display: desktopDisplayx,
									alignItems: desktopAlignItemsx,
									justifyContent: desktopJustifyContentx,
									...other
								} = item.styles.desktop
								desktopStyles = other
								desktopAlignItems = desktopAlignItemsx;
								desktopJustifyContent = desktopJustifyContentx;
								desktopDisplay = desktopDisplayx;
							} else {
								desktopStyles = item.styles.desktop
							}

							// const mobileStyles = item.styles.mobile
							// const desktopStyles = item.styles.desktop
							const globalStyles = item.styles.global
							const mc = StyleToClass(desktopStyles, true, item.uniqueId)
							const dc = StyleToClass(mobileStyles, false, item.uniqueId)
							const gc = StyleToClass(globalStyles, false, item.uniqueId)
							return gc + dc + mc + `.${item.uniqueId}-content{
				align-items:${mobileAlignItems};
				justify-content:${mobileJustifyContent};
				display:${mobileDisplay};
				}
				@media only screen and (min-width: 840px) {
				.${item.uniqueId}-content{
				align-items:${desktopAlignItems};
				justify-content:${desktopJustifyContent};
				display:${desktopDisplay};
				}
				}`
						}
					}).join("")}
				
                `}
				</style>

				{footer.content !== null && JSON.parse(footer.content).map((item, index) =>
					<WebComponentGenerator siteSetting={siteSetting} key={index} item={item}/>
				)}
			</div>
		</>
	)
}