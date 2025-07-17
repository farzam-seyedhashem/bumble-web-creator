/**
 * @type {{components: [{group: {groupName: string, groupId: string}, uid: string, idType: string, icon: string, label: string, value: null, type: string, fields: [{type: string, value: string},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},{type: string, value: string},null,null,null,null,null,null,null,null,null,null], styles: {mobile: {textAlign: string, paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, fontWeight: string, fontSize: string}, desktop: {textAlign: string, paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, fontWeight: string, fontSize: string}, global: {borderTopWidth: string, borderStyle: string, borderBottomWidth: string, borderLeftWidth: string, borderRightWidth: string, color: string, borderColor: string}}, className: string},{group: {groupName: string, groupId: string}, uid: string, idType: string, value: null, label: string, icon: string, fields: [{type: string, value: string},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},{type: string, value: string},null,null,null,null,null,null,null,null,null,null], styles: {mobile: {display: string, justify: string, alignItems: string, paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, fontWeight: string, fontSize: string}, desktop: {display: string, justify: string, alignItems: string, paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, objectFit: string, fontSize: string, width: string}, global: {textAlign: string}}, className: string},{group: {groupName: string, groupId: string}, uid: string, idType: string, value: null, icon: string, label: string, fields: [{type: string, value: string},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},{type: string, value: string},{type: string, onDeviceChange: boolean, enum: string[]},null,null,null,null,null], styles: {mobile: {paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, objectFit: string, width: string, height: string}, desktop: {paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, objectFit: string, width: string, height: string}, global: {borderRadius: string}}, className: string},{group: {groupName: string, groupId: string}, uid: string, idType: string, value: null, link: null, icon: string, label: string, fields: [{type: string, value: string},{type: string, onDeviceChange: boolean},{type: string, value: string},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},null,null,null,null,null,null,null,null,null,null,null], justify: string, styles: {mobile: {paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, fontWeight: string, height: string, width: string, fontSize: string}, desktop: {paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, fontWeight: string, height: string, width: string, fontSize: string}, global: {borderRadius: string, display: string, displayItems: string, justifyContent: string, alignItems: string}}, className: string},{group: {groupName: string, groupId: string}, uid: string, idType: string, icon: string, label: string, addedItems: *[], isBox: boolean, fields: [{type: string, value: string},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},{type: string, onDeviceChange: boolean},{type: string, value: string},null,null,null,null,null,null,null,null,null], styles: {mobile: {display: string, justifyContent: string, alignItems: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, width: string, height: string}, desktop: {display: string, justifyContent: string, alignItems: string, marginTop: string, marginBottom: string, marginLeft: string, marginRight: string, paddingTop: string, paddingBottom: string, paddingLeft: string, paddingRight: string, width: string, height: string}, global: {borderRadius: string, backgroundColor: string}}, backgroundImageURL: null, backgroundImageStyle: string, imageOverlay: boolean, imageOverlayColor: string, className: string},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}}
 * All page builder components
 * Todo add these components [website_logo, navigation, mobile_menu, inventory_card, inventory_single_elements]
 * Todo add these features [hover_focus_and_other_css_styles, meta_generator, json_ld_generator]
 */
module.exports = {
	"components": [
		/**
		 * Basic Components
		 * components[0] Title Component use for titles in pages
		 * components[1] Paragraph Component use for paragraph in pages
		 * components[2] WYSIWYG Editor Component use for add paragraph with HTML editor in pages
		 * components[3] Button Component use for add button in pages
		 * components[4] Container Component use for div and div_container in pages
		 * components[5] Grid Component use for add grid div in pages
		 * components[6] Link Component use for add link with href in pages
		 * components[7] Link Component use for add link with href in pages
		 */
		{
			"group": {
				"groupName": "Basic",
				"groupId": "basic"
			},
			"uid": "1",
			"idType": "title",
			"icon": "title",
			"label": "Title",
			"value": null,
			"type": "h1",
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "textAlign",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Margin & Padding"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"textAlign": "left",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "900",
					"fontSize": "57px"
				},
				"desktop": {
					"textAlign": "left",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "900",
					"fontSize": "57px"
				},
				"global": {

					"borderTopWidth": "0px",
					"borderStyle": "solid",
					"borderBottomWidth": "0px",
					"borderLeftWidth": "0px",
					"borderRightWidth": "0px",
					"color": "#000",
					"borderColor": "#000"
				}
			},
			"className": "font-black text-[57px] dark:text-[#fff]"
		},
		{
			"group": {
				"groupName": "Basic",
				"groupId": "basic"
			},
			"uid": "2",
			"idType": "paragraph",
			"value": null,
			"label": "Paragraph",
			"icon": "notes",
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "textAlign",
					"onDeviceChange": false
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"display": "block",
					"justify": "flex-start",
					"alignItems": "flex-start",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "400",
					"fontSize": "16px"
				},
				"desktop": {
					"display": "block",
					"justify": "flex-start",
					"alignItems": "flex-start",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"fontSize": "16px",
					"width": "100%"
				},
				"global": {
					"textAlign": "left"
				}
			},
			"className": " font-normal text-[16px]"
		},
		{
			"group": {
				"groupName": "Basic",
				"groupId": "basic"
			},
			"uid": "15",
			"idType": "wysiwygEditor",
			"value": null,
			"icon": "wysiwyg",
			"label": "WYSIWYG Editor",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		{
			"group": {
				"groupName": "Basic",
				"groupId": "basic"
			},
			"uid": "4",
			"idType": "button",
			"value": null,
			"link": null,
			"icon": "buttons_alt",
			"label": "button",
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Component Size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"justify": "flex-start",
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "24px",
					"paddingRight": "24px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "500",
					"height": "40px",
					"width": "auto",
					"fontSize": "14px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "24px",
					"paddingRight": "24px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "500",
					"height": "40px",
					"width": "auto",
					"fontSize": "14px"
				},
				"global": {
					"borderRadius": "24px",
					"display": "flex",
					"displayItems": "center",
					"justifyContent": "center",
					"alignItems": "center"
				}
			},
			"className": "px-6 h-[40px] w-fit flex items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white text-[14px] leading-[20px] font-medium"
		},
		{
			"group": {
				"groupName": "Basic",
				"groupId": "basic"
			},
			"uid": "5",
			"idType": "container",
			"icon": "crop_5_4",
			"label": "Container",
			"addedItems": [],
			"isBox": false,
			"fields": [
				{
					"type": "title",
					"value": "Component Size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block", "flex"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"display": "block",
					"justifyContent": "center",
					"alignItems": "center",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "auto",
					"marginRight": "auto",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "auto",
					"paddingRight": "auto",
					"width": "100%",
					"height": "auto"
				},
				"desktop": {
					"display": "block",
					"justifyContent": "center",
					"alignItems": "center",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "auto",
					"marginRight": "auto",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "auto",
					"paddingRight": "auto",
					"width": "100%",
					"height": "auto"
				},
				"global": {
					"borderRadius": "0px",
					"backgroundColor": "transparent"
				}
			},
			"backgroundImageURL": null,
			"backgroundImageStyle": "cover",
			"imageOverlay": false,
			"imageOverlayColor": "#000",
			"className": "h-auto"
		},
		{
			"group": {
				"groupName": "Basic",
				"groupId": "basic"
			},
			"uid": "6",
			"idType": "grid",
			"icon": "view_column",
			"label": "grid",
			"gridNumber": 12,
			"gapDesktop": 4,
			"gapMobile": 4,
			"uniqueId": 3,
			"fields": [
				{
					"type": "title",
					"value": "Component Size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"columnSizeDesktop": [
				6
			],
			"columnSizeMobile": [
				12
			],
			"styles": {
				"mobile": {
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "auto",
					"marginRight": "auto",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "auto",
					"paddingRight": "auto",
					"width": "100%",
					"height": "auto"
				},
				"desktop": {
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "auto",
					"marginRight": "auto",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "auto",
					"paddingRight": "auto",
					"width": "100%",
					"height": "auto"
				},
				"global": {
					"borderRadius": "0px",
					"justifyContent": "flex-start",
					"alignItems": "flex-start",
					"backgroundColor": "transparent"
				}
			},
			"className": "grid grid-cols-12 gap-4",
			"addedItems": [
				{
					"addedItems": [],
					"widthNumber": 1,
					"styles": {
						"general": {
							"padding": [
								0,
								0,
								0,
								0
							],
							"height": "auto",
							"borderRadius": "0"
						},
						"light": {
							"backgroundColor": "transparent"
						},
						"dark": {
							"backgroundColor": "transparent"
						}
					}
				}
			]
		},
		{
			"group": {
				"groupName": "Basic",
				"groupId": "basic"
			},
			"link": "#",
			"uid": "88",
			"idType": "link",
			"icon": "link",
			"label": "Link",
			"value": null,
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "textAlign",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Margin & Padding"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"textAlign": "left",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "400",
					"fontSize": "16px"
				},
				"desktop": {
					"textAlign": "left",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "400",
					"fontSize": "16px"
				},
				"global": {

					"borderTopWidth": "0px",
					"borderStyle": "solid",
					"borderBottomWidth": "0px",
					"borderLeftWidth": "0px",
					"borderRightWidth": "0px",
					"color": "#000",
					"borderColor": "#000"
				}
			},
			"className": "font-black text-[57px] dark:text-[#fff]"
		},
		/**
		 * Animation & Images
		 * component[0] Image Component use for upload images in pages
		 * component[1] Video Component use for upload video in pages
		 * component[2] Icon Component use for pick icon and add in pages from material design symbols
		 * component[3] Lottie Component use for add lottie files animations in pages
		 * component[4] Story Component use for add story component in pages
		 * component[5] SVG Component use for add svg code in pages
		 * component[6] Slider Component use for add swiper slider in pages
		 */
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "3",
			"idType": "image",
			"value": null,
			"icon": "image",
			"label": "Image",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Image style"
				},
				{
					"type": "objectFit",
					"onDeviceChange": true
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "borderRadius",
					"onDeviceChange": false
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "25",
			"idType": "video",
			"value": null,
			"loop": false,
			"controls": true,
			"imageCover": null,
			"icon": "play_circle",
			"label": "Video",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "borderRadius",
					"onDeviceChange": false
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "11",
			"idType": "iconPicker",
			"label": "Icon",
			"icon": "star",
			"value": "star",
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "textAlign",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Display"
				},

				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Margin & Padding"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": 400,
					"fontSize": "24px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": 400,
					"fontSize": "24px"
				},
				"global": {
					"textAlign": "left"
				}
			},
			"className": "font-black text-[57px] dark:text-[#fff]"
		},
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "41",
			"idType": "lottie",
			"value": null,
			"loop": false,
			"controls": true,
			"imageCover": null,
			"icon": "animation",
			"label": "Lottie File",

			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "66",
			"idType": "story",
			"listViewType": 1,
			"cardViewType": 1,
			"storyViewType": 1,
			"icon": "web_stories",
			"label": "Stories",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			}
		},
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "14",
			"idType": "svg",
			"value": null,
			"icon": "frame_source",
			"label": "svg",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "7",
			"idType": "slider",
			"type": 1,
			"icon": "transition_slide",
			"label": "Slider",
			"settings": {
				"desktop": {
					"loop": false,
					"navigationBackgroundColor": "#fff",
					"navigationArrowColor": "#000",
					"paginationBackgroundColor": "#fff",
					"paginationTextColor": "#000",
					"slideBorderRadius": "24px",
					"slideHeight": 400,
					"isInContainer": true,
					"mousewheel": false,
					"sliderType": "horizontal",
					"slidePerView": 1,
					"spaceBetweenSlides": 0,
					"arrowStyle": 1,
					"autoSlideChange": false,
					"autoSlideChangeTime": 1000,
					"pauseOnMouseEnter": false,
					"effect": "fade",
					"center": false,
					"paginationType": "none",
					"slideButton": "none"
				},
				"mobile": {
					"loop": false,
					"mousewheel": false,
					"sliderType": "horizontal",
					"navigationBackgroundColor": "#fff",
					"navigationArrowColor": "#000",
					"paginationBackgroundColor": "#fff",
					"paginationTextColor": "#000",
					"slideBorderRadius": "0px",
					"isInContainer": false,
					"slideHeight": 400,
					"effect": "fade",
					"slidePerView": 1,
					"spaceBetweenSlides": 0,
					"autoSlideChange": false,
					"autoSlideChangeTime": 1000,
					"pauseOnMouseEnter": false,
					"arrowStyle": 1,
					"center": false,
					"paginationType": "none",
					"slideButton": "none"
				}
			},
			"desktopOptions": {
				"sliderHeight": "600px",
				"sliderRounded": "0px",
				"spaceBetween": "0px",
				"slidesPerView": 1,
				"isLoop": true,
				"isCenter": false,
				"showDescription": true,
				"showTitle": true,
				"showLinkButton": true,
				"slideType": 0
			},
			"mobileOptions": {
				"sliderHeight": "600px",
				"sliderRounded": "0px",
				"spaceBetween": "0px",
				"slidesPerView": 1,
				"isLoop": true,
				"isCenter": false,
				"showDescription": true,
				"showTitle": true,
				"showLinkButton": true,
				"slideType": 0
			},
			"globalOptions": {
				"titleColor": "#000",
				"descriptionColor": "#525252",
				"backgroundColor": "#fff",
				"linkButtonBackgroundColor": "#000",
				"linkButtonTextColor": "#fff",
				"duration": "300ms"
			},
			"addedItems": [
				{
					"imageURL": null,
					"addedItems": []
				}
			]
		},
		{
			"group": {
				"groupName": "Animation & Icon",
				"groupId": "animation_image"
			},
			"uid": "99",
			"idType": "logo",
			"icon": "diamond",
			"label": "Website Logo",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Image style"
				},
				{
					"type": "objectFit",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		// {
		// 	"group": {
		// 		"groupName": "Animation & Icon",
		// 		"groupId": "animation_image"
		// 	},
		// 	"uid": "8",
		// 	"idType": "featuredSection",
		// 	"mobileOptions": {
		// 		"titleFontSize": "24px",
		// 		"titleFontWeight": "700",
		// 		"paragraphFontSize": "16px",
		// 		"gridNumber": "3",
		// 		"paragraphFontWeight": "400"
		// 	},
		// 	"desktopOptions": {
		// 		"titleFontSize": "24px",
		// 		"titleFontWeight": "700",
		// 		"paragraphFontSize": "16px",
		// 		"gridNumber": "3",
		// 		"paragraphFontWeight": "400"
		// 	},
		// 	"globalOptions": {
		// 		"iconColor": "#000",
		// 		"titleColor": "#000",
		// 		"paragraphColor": "#000",
		// 		"cardColor": "#fafafa",
		// 		"iconBgColor": "#f2f2f2",
		// 		"cardShape": 1,
		// 		"cardRounded": "12px",
		// 		"titleType": "h3"
		// 	},
		// 	"featuredSections": [
		// 		{
		// 			"title": "Lorem Ipsum",
		// 			"paragraph": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi",
		// 			"icon": {
		// 				"name": "star",
		// 				"type": "",
		// 				"isFilled": true
		// 			}
		// 		}
		// 	]
		// },
		// {
		// 	"group": {
		// 		"groupName": "Animation & Icon",
		// 		"groupId": "animation_image"
		// 	},
		// 	"uid": "10",
		// 	"idType": "inventoryCard",
		// 	"mobileOptions": {
		// 		"gridNumber": 3
		// 	},
		// 	"desktopOptions": {
		// 		"gridNumber": 3
		// 	},
		// 	"globalOptions": {
		// 		"cardShape": 1,
		// 		"numberOfBlog": 3
		// 	}
		// },
		/**
		 * Website Content
		 * Todo Testimonial slider not have arrow so should add and have diffrent arrow button and pagination
		 * component[0] Testimonial Component use for Show Testimonial in pages
		 * Todo Faq not work correct
		 * component[1] FAQ Component use for show faq in pages
		 * Todo Form component not have field generator and email sender
		 * component[2] Form Component use for show form in pages
		 * component[3] Map Component use for add map in pages
		 */
		{
			"group": {
				"groupName": "Website Content",
				"groupId": "content"
			},
			"uid": "20",
			"idType": "testimonial",
			"icon": "mode_comment",
			"label": "Testimonials",
			"type": 1,
			"numberLoad": 4,
			"desktopColumn": 4,
			"mobileColumn": 1,
			"arrowColor": "",
			"arrowBackgroundColor": "",
			"backgroundColor": "",
			"primaryTextColor": "",
			"variantTextColor": ""
		},
		{
			"group": {
				"groupName": "Website Content",
				"groupId": "content"
			},
			"uid": "24",
			"idType": "faq",
			"icon": "quiz",
			"label": "FAQ",
			"type": 1,
			"cardBackgroundColor": "#fff",
			"cardHeaderColor": "#fff",
			"titleColor": "#000",
			"iconColor": "#000",
			"descriptionColor": "#000",
			"closeIcon": "chevronDown",
			"openIcon": "chevron_up",
			"haveShadow": true,
			"haveBorder": false,
			"haveDivider": true,
			"addedItems": [
				{
					"title": "Example...",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet"
				}
			]
		},
		{
			"group": {
				"groupName": "Website Content",
				"groupId": "content"
			},
			"uid": "28",
			"idType": "form",
			"icon": "list_alt",
			"label": "Form",
			"type": 1,
			"fields": [
				{
					"type": "title",
					"value": "Component Size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "auto",
					"marginRight": "auto",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "auto",
					"paddingRight": "auto",
					"width": "100%",
					"height": "auto"
				},
				"desktop": {
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "auto",
					"marginRight": "auto",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "auto",
					"paddingRight": "auto",
					"width": "100%",
					"height": "auto"
				},
				"global": {
					"borderRadius": "0px",
					"display": "flex",
					"justifyContent": "center",
					"alignItems": "center",
					"backgroundColor": "transparent"
				}
			},
			"sendMail": "",
			"sendToUserMail": "",
			"userMailFieldName": "",
			"formId": "",
			"addedItems": [
				{
					"desktopColumn": 12,
					"mobileColumn": 12,
					"placeholder": "",
					"label": "Label",
					"defaultValue": "",
					"name": "",
					"filedType": "text",
					"id": "",
					"type": "text-field",
					"isRequired": false
				}
			]
		},
		{
			"group": {
				"groupName": "Website Content",
				"groupId": "content"
			},
			"uid": "12",
			"idType": "map",
			"icon": "Map",
			"label": "Map",
			"addr": "Bridger-Teton National Forest, Forest Rd 10199, Wyoming, Estados Unidos",
			"fields": [
				{
					"type": "title",
					"value": "Component Size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block"]
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"height": "400px",
					"width": "100%"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"height": "400px",
					"width": "100%"
				},
				"global": {
					"borderRadius": "0px",
					"display": "flex",
					"justifyContent": "center"
				}
			},
			"className": "font-black text-[57px] dark:text-[#fff]"
		},
		/**
		 * Blog & Post
		 * Todo use another sort way in Blog Posts
		 * component[0] List of Blog Posts sort with date added time
		 * Todo chack blog tags
		 * component[1] List of all Blog Tags
		 * component[2] Title of post in post loop or post page
		 * Todo add trunc to post content and chack correct in html decode
		 * component[3] Content of post in post loop or post page
		 * component[4] Thumbnail of post in post loop or post page
		 * Todo Check Post tags work correct
		 * component[5] Tags of post in post loop or post page
		 * component[6] Date Create of post in post loop or post page
		 * component[7] Date Create of post in post loop or post page
		 * component[8] Date Update of post in post loop or post page
		 */
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "9",
			"idType": "blogPosts",
			"icon": "post",
			"label": "Last Blog Post",
			"type": 1,
			"numberLoad": 4,
			"desktopColumn": 4,
			"mobileColumn": 1,
			"arrowColor": "",
			"arrowBackgroundColor": "",
			"backgroundColor": "",
			"primaryTextColor": "",
			"variantTextColor": ""
		},
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "29",
			"idType": "blogTags",
			"type": 1,
			"icon": "category_search",
			"label": "Blog Tags",
			"layout": "inline",
			"selectedBorderColor": "",
			"selectedTextColor": "",
			"selectedBackgroundColor": "",

			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "borderRadius",
					"onDeviceChange": false
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "16px",
					"paddingRight": "16px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "4px",
					"width": "auto",
					"height": "40px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "16px",
					"paddingRight": "16px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "4px",
					"width": "auto",
					"height": "40px"
				},
				"global": {
					"borderRadius": "20px",
					"backgroundColor": "#eee"
				}
			}
		},
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "31",
			"idType": "postTitle",
			"icon": "sticky_note",

			"label": "Post Title",
			"type": "h1",
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "textAlign",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Margin & Padding"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "900",
					"fontSize": "57px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "900",
					"fontSize": "57px"
				},
				"global": {
					"textAlign": "left",
					"borderTopWidth": "0px",
					"borderStyle": "solid",
					"borderBottomWidth": "0px",
					"borderLeftWidth": "0px",
					"borderRightWidth": "0px",
					"borderColor": "#000"
				}
			},
			"className": "font-black text-[57px]"
		},
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "32",
			"idType": "postContent",
			"value": null,
			"label": "Post Content",
			"icon": "description",
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "textAlign",
					"onDeviceChange": false
				},
				{
					"type": "maxWidth",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"display": "flex",
					"justify": "flex-start",
					"alignItems": "flex-start",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "400",
					"fontSize": "16px"
				},
				"desktop": {
					"display": "flex",
					"justify": "flex-start",
					"alignItems": "flex-start",
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"fontSize": "16px",
					"width": "100%"
				},
				"global": {
					"textAlign": "left"
				}
			},
			"className": " font-normal text-[16px]"
		},
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "33",
			"idType": "postThumbnail",
			"value": null,
			"icon": "gallery_thumbnail",
			"label": "Post Thumbnail",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Image style"
				},
				{
					"type": "objectFit",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "borderRadius",
					"onDeviceChange": false
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "34",
			"idType": "postTags",
			"type": 1,
			"icon": "tag",
			"label": "Post Tags",
			"layout": "inline",
			"selectedBorderColor": "",
			"selectedTextColor": "",
			"selectedBackgroundColor": "",

			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "borderRadius",
					"onDeviceChange": false
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "16px",
					"paddingRight": "16px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "4px",
					"width": "auto",
					"height": "40px"

				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "16px",
					"paddingRight": "16px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "4px",
					"width": "auto",
					"height": "40px"
				},
				"global": {
					"borderRadius": "20px",
					"backgroundColor": "#eee"
				}
			}
		},
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "35",
			"idType": "postDateAdded",
			"value": null,
			"icon": "event_available",
			"label": "Post Add Time",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Image style"
				},
				{
					"type": "objectFit",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "borderRadius",
					"onDeviceChange": false
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		{
			"group": {
				"groupName": "Blog & Post",
				"groupId": "post"
			},
			"uid": "36",
			"idType": "postDateUpdated",
			"value": null,
			"icon": "update",
			"label": "Post Update Time",
			"fields": [
				{
					"type": "title",
					"value": "Component size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Image style"
				},
				{
					"type": "objectFit",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "borderRadius",
					"onDeviceChange": false
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "0px",
					"paddingRight": "0px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"objectFit": "cover",
					"width": "100%",
					"height": "400px"
				},
				"global": {
					"borderRadius": "0px"
				}
			},
			"className": "w-full h-[400px]"
		},
		/**
		 * Share & Social
		 * component[0] Share this page in social
		 * component[1] Social Icon to add link
		 */
		{
			"group": {
				"groupName": "Share & Social",
				"groupId": "share_social"
			},
			"uid": "37",
			"idType": "shareButton",
			"layout": "icon",
			"value": null,
			"icon": "share",
			"label": "Share Button",
			"fields": [
				{
					"type": "title",
					"value": "Text"
				},
				{
					"type": "font",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Component Size"
				},
				{
					"type": "width",
					"onDeviceChange": true
				},
				{
					"type": "height",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Display"
				},
				{
					"type": "display",
					"onDeviceChange": true,
					"enum": ["hidden", "block", "flex"]
				},
				{
					"type": "title",
					"value": "Color"
				},
				{
					"type": "color",
					"onDeviceChange": false
				},
				{
					"type": "backgroundColor",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Padding & Margin"
				},
				{
					"type": "boxModel",
					"onDeviceChange": true
				},
				{
					"type": "title",
					"value": "Border"
				},
				{
					"type": "border",
					"onDeviceChange": false
				},
				{
					"type": "title",
					"value": "Visibility"
				},
				{
					"type": "visibility",
					"onDeviceChange": true
				}
			],
			"justify": "flex-start",
			"styles": {
				"mobile": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "24px",
					"paddingRight": "24px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "500",
					"height": "40px",
					"width": "auto",
					"fontSize": "14px"
				},
				"desktop": {
					"paddingTop": "0px",
					"paddingBottom": "0px",
					"paddingLeft": "24px",
					"paddingRight": "24px",
					"marginTop": "0px",
					"marginBottom": "0px",
					"marginLeft": "0px",
					"marginRight": "0px",
					"fontWeight": "500",
					"height": "40px",
					"width": "auto",
					"fontSize": "14px"
				},
				"global": {
					"borderRadius": "24px",
					"display": "flex",
					"displayItems": "center",
					"justifyContent": "center",
					"alignItems": "center"
				}
			},
			"className": "w-full h-[400px]"
		}
	]
}
