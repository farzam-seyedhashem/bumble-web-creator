const styleCss = [
    {style:"paddingTop",cssStyle:"padding-top"},
    {style:"paddingBottom",cssStyle:"padding-bottom"},
    {style:"paddingLeft",cssStyle:"padding-left"},
    {style:"paddingRight",cssStyle:"padding-right"},
    {style:"marginTop",cssStyle:"margin-top"},
    {style:"marginBottom",cssStyle:"margin-bottom"},
    {style:"marginLeft",cssStyle:"margin-left"},
    {style:"marginRight",cssStyle:"margin-right"},
    {style:"color",cssStyle:"color"},
    {style:"backgroundColor",cssStyle:"background-color"},
    {style:"maxWidth",cssStyle:"max-width"},
    {style:"fontWeight",cssStyle:"font-weight"},
    {style:"fontSize",cssStyle:"font-size"},
    {style:"textAlign",cssStyle:"text-align"},
    {style:"width",cssStyle:"width"},
    {style:"height",cssStyle:"height"},
    {style:"objectFit",cssStyle:"object-fit"},
    {style:"borderRadius",cssStyle:"border-radius"},
    {style:"display",cssStyle:"display"},
    {style:"alignItems",cssStyle:"align-items"},
    {style:"justifyContent",cssStyle:"justify-content"},
    {style:"borderLeftWidth",cssStyle:"border-left-width"},
    {style:"borderRightWidth",cssStyle:"border-right-width"},
    {style:"borderBottomWidth",cssStyle:"border-bottom-width"},
    {style:"borderTopWidth",cssStyle:"border-top-width"},
    {style:"borderTop",cssStyle:"border-top-width"},
    {style:"borderColor",cssStyle:"border-color"},
    {style:"borderStyle",cssStyle:"border-style"},
]
export function StyleToClass(style,isLargeDevice,componentId) {
    if(typeof style === 'undefined'){
        return ""
        // throw new Error('styleToTailwind: device and style not defined');
    }
    const deviceType = isLargeDevice?"md:":""
    let classes = ""
    if(isLargeDevice){
        classes+="@media only screen and (min-width: 840px) {"
    }
    classes += `.${componentId}{`
    Object.keys(style).map(key=>
        classes += styleCss.find(sc=>sc.style === key)?.cssStyle + `:${style[key]};`
    )
    // classes += `.${componentId}${JSON.stringify(style).replaceAll(",",";").toString()}`
    classes+= isLargeDevice? "}}" : "}"
    return classes

}