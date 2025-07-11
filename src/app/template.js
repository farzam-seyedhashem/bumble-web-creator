import {getSiteSetting} from "@controller/SiteSettingController";
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";

// import {eff} from "next/navigation";
function convertColorToTailwindRgb(obj) {
	return `${obj.r} ${obj.g} ${obj.b}`
}

export default async function Template({children}) {
	const siteSetting = JSON.parse(await getSiteSetting());
	console.log(await siteSetting.color)
	// primary: { r: 0, g: 108, b: 83, a: 255 },
	// onPrimary: { r: 255, g: 255, b: 255, a: 255 },
	// primaryContainer: { r: 129, g: 248, b: 208, a: 255 },
	// onPrimaryContainer: { r: 0, g: 33, b: 23, a: 255 },
	// secondary: { r: 76, g: 99, b: 90, a: 255 },
	// onSecondary: { r: 255, g: 255, b: 255, a: 255 },
	// secondaryContainer: { r: 206, g: 233, b: 220, a: 255 },
	// onSecondaryContainer: { r: 8, g: 32, b: 24, a: 255 },
	// tertiary: { r: 64, g: 99, b: 117, a: 255 },
	// onTertiary: { r: 255, g: 255, b: 255, a: 255 },
	// tertiaryContainer: { r: 195, g: 232, b: 254, a: 255 },
	// onTertiaryContainer: { r: 0, g: 30, b: 43, a: 255 },
	// error: { r: 186, g: 26, b: 26, a: 255 },
	// onError: { r: 255, g: 255, b: 255, a: 255 },
	// errorContainer: { r: 255, g: 218, b: 214, a: 255 },
	// onErrorContainer: { r: 65, g: 0, b: 2, a: 255 },
	// background: { r: 251, g: 253, b: 249, a: 255 },
	// onBackground: { r: 25, g: 28, b: 27, a: 255 },
	// surface: { r: 251, g: 253, b: 249, a: 255 },
	// onSurface: { r: 25, g: 28, b: 27, a: 255 },
	// surfaceVariant: { r: 219, g: 229, b: 223, a: 255 },
	// onSurfaceVariant: { r: 64, g: 73, b: 68, a: 255 },
	// outline: { r: 112, g: 121, b: 116, a: 255 },
	// outlineVariant: { r: 191, g: 201, b: 195, a: 255 },
	// shadow: { r: 0, g: 0, b: 0, a: 255 },
	// scrim: { r: 0, g: 0, b: 0, a: 255 },
	// inverseSurface: { r: 46, g: 49, b: 47, a: 255 },
	// inverseOnSurface: { r: 239, g: 241, b: 238, a: 255 },
	// inversePrimary: { r: 99, g: 219, b: 181, a: 255 },
	// surfaceContainerLowest: { r: 255, g: 255, b: 255, a: 255 },
	// surfaceContainerLow: { r: 242, g: 244, b: 241, a: 255 },
	// surfaceContainer: { r: 236, g: 238, b: 235, a: 255 },
	// surfaceContainerHigh: { r: 230, g: 233, b: 229, a: 255 },
	// surfaceContainerHighest: { r: 225, g: 227, b: 224, a: 255 }
	return (<>
		<style>
			{`
				:root {
					--primary-light: ${convertColorToTailwindRgb(siteSetting.color.primary)};
                    --on-primary-light: ${convertColorToTailwindRgb(siteSetting.color.onPrimary)};
                    --primary-container-light: ${convertColorToTailwindRgb(siteSetting.color.primaryContainer)};
                    --on-primary-container-light: ${convertColorToTailwindRgb(siteSetting.color.onPrimaryContainer)};
                    --primary-fixed-light: 213 227 255;
				    --on-primary-fixed-light: 0 27 59;
				    --primary-fixed-dim-light: 167 200 255;
				    --on-primary-fixed-variant-light: 0 71 136;
				
				    --secondary-light: ${convertColorToTailwindRgb(siteSetting.color.secondary)};
				    --on-secondary-light: ${convertColorToTailwindRgb(siteSetting.color.onSecondary)};
				    --secondary-container-light: ${convertColorToTailwindRgb(siteSetting.color.secondaryContainer)};
				    --on-secondary-container-light: ${convertColorToTailwindRgb(siteSetting.color.onSecondaryContainer)};
				    --secondary-fixed-light: 217 227 248;
				    --on-secondary-fixed-light: 18 28 43;
				    --secondary-fixed-dim-light: 189 199 220;
				    --on-secondary-fixed-variant-light: 61 71 88;
				
				    --tertiary-light: ${convertColorToTailwindRgb(siteSetting.color.tertiary)};
				    --on-tertiary-light: ${convertColorToTailwindRgb(siteSetting.color.onTertiary)};
				    --tertiary-container-light: ${convertColorToTailwindRgb(siteSetting.color.tertiaryContainer)};
				    --on-tertiary-container-light: ${convertColorToTailwindRgb(siteSetting.color.onTertiaryContainer)};
				    --tertiary-fixed-light: 248 216 254;
				    --on-tertiary-fixed-light: 39 19 47;
				    --tertiary-fixed-dim-light: 219 189 226;
				    --on-tertiary-fixed-variant-light: 85 62 93;
				
				    --error-light: ${convertColorToTailwindRgb(siteSetting.color.error)};
				    --on-error-light: ${convertColorToTailwindRgb(siteSetting.color.onError)};
				    --error-container-light: ${convertColorToTailwindRgb(siteSetting.color.errorContainer)};
				    --on-error-container-light: ${convertColorToTailwindRgb(siteSetting.color.onErrorContainer)};
				
				    --background-light: ${convertColorToTailwindRgb(siteSetting.color.background)};
				    --on-background-light: ${convertColorToTailwindRgb(siteSetting.color.onBackground)};
				
				    --outline-light: ${convertColorToTailwindRgb(siteSetting.color.outline)};
				    --outline-variant-light: ${convertColorToTailwindRgb(siteSetting.color.outlineVariant)};
				
				    --inverse-on-surface-light: ${convertColorToTailwindRgb(siteSetting.color.inverseOnSurface)};
				    --inverse-surface-light: ${convertColorToTailwindRgb(siteSetting.color.inverseSurface)};
				    --inverse-primary-light: ${convertColorToTailwindRgb(siteSetting.color.inversePrimary)};
				    --shadow-light: 0 0 0;
				    --surface-tint-light: 35 95 166;
				
				    --scrim-light: 0 0 0;
				    --surface-light: ${convertColorToTailwindRgb(siteSetting.color.surface)};
				    --on-surface-light: ${convertColorToTailwindRgb(siteSetting.color.onSurface)};
				    --surface-variant-light: ${convertColorToTailwindRgb(siteSetting.color.surfaceVariant)};
				    --on-surface-variant-light: ${convertColorToTailwindRgb(siteSetting.color.onSurfaceVariant)};
				    --surface-container-highest-light: ${convertColorToTailwindRgb(siteSetting.color.surfaceContainerHighest)};
				    --surface-container-high-light: ${convertColorToTailwindRgb(siteSetting.color.surfaceContainerHigh)};
				    --surface-container-light: ${convertColorToTailwindRgb(siteSetting.color.surfaceContainer)};
				    --surface-container-low-light: ${convertColorToTailwindRgb(siteSetting.color.surfaceContainerLow)};
				    --surface-container-lowest-light: ${convertColorToTailwindRgb(siteSetting.color.surfaceContainerLowest)};
				    --surface-dim-light: 218 217 221;
				    --surface-bright-light: 250 249 253;
					
				}
			`}
		</style>
		<div>{children}</div>
	</>)
}