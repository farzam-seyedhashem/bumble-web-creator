const styleCss = [
    {cssStyle:"paddingTop",twClass:"pt"},
    {cssStyle:"paddingBottom",twClass:"pb"},
    {cssStyle:"paddingLeft",twClass:"pl"},
    {cssStyle:"paddingRight",twClass:"pr"},
    {cssStyle:"marginTop",twClass:"mt"},
    {cssStyle:"marginBottom",twClass:"mb"},
    {cssStyle:"marginLeft",twClass:"ml"},
    {cssStyle:"marginRight",twClass:"mr"},
    {cssStyle:"color",twClass:"text"},
    {cssStyle:"backgroundColor",twClass:"bg"},
    {cssStyle:"fontWeight",twClass:"font"},
    {cssStyle:"fontSize",twClass:"text"},
    {cssStyle:"textAlign",twClass:"text"},
    {cssStyle:"width",twClass:"w"},
    {cssStyle:"height",twClass:"h"},
    {cssStyle:"objectFit",twClass:"object"},
    {cssStyle:"borderRadius",twClass:"rounded"},
    {cssStyle:"display",twClass:""},
    {cssStyle:"alignItems",twClass:"align"},
    {cssStyle:"justifyContent",twClass:"justify"},
    {cssStyle:"borderLeft",twClass:"border-l"},
    {cssStyle:"borderRight",twClass:"border-r"},
    {cssStyle:"borderBottom",twClass:"border-b"},
    {cssStyle:"borderTop",twClass:"border-t"},
    {cssStyle:"borderColor",twClass:"border"},
]
// function checkType(value) {
//     if (value.includes("px") || value.includes("%")) {
//         return value
//     }else{
//         value + "px"
//     }
// }
export function StyleToTailwind(style,isLargeDevice){
    if(typeof style === 'undefined'){
        throw new Error('styleToTailwind: device and style not defined');
    }
    const deviceType = isLargeDevice?"md:":""
    let classes = ""
    Object.keys(style).map(key=>
        classes += deviceType + styleCss.find(sc=>sc.cssStyle === key).twClass + `-[${style[key]}] `
    )
    return classes
}