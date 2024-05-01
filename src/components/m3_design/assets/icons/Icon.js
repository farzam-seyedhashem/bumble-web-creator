import {useState} from "react";

export default function Icon({type, size, weight, grade, children,className,onClick}) {
    let resTypeStyle;
    const [gradeV, setGradeV] = useState(grade ? grade : 0)
    const [sizeV, setSizeV] = useState(size ? size < 24 ? 24 : size : 24)
    const [weightV, setWeightV] = useState(weight ? weight : 400)
    const outline = `material-symbols-outlined font-vs-[0_${weightV}_${gradeV}_${sizeV}]`
    const fill = `material-symbols-outlined font-vs-[1_${weightV}_${gradeV}_${sizeV}]`
    const rounded = `material-symbols-rounded font-vs-[0_${weightV}_${gradeV}_${sizeV}]`
    const sharp = `material-symbols-sharp font-vs-[0_${weightV}_${gradeV}_${sizeV}]`
    switch (type) {
        case "outline":
            resTypeStyle = outline
            break;
        case "fill":
            resTypeStyle = fill
            break;
        case "rounded":
            resTypeStyle = rounded
            break;
        case "sharp":
            resTypeStyle = sharp
            break;
    }
    return (
        <i onClick={onClick&&onClick} className={`${resTypeStyle} text-[${size?size + "px":"24px"}] ${className?className:""}`}>
            {children}
        </i>
    )
}