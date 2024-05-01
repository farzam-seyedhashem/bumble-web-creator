import React, {useRef} from "react";
import {createRipple} from "../effect/Ripple";
import Icon from "../assets/Icon";

export default function IconButton(props) {
    const {component, onClick, type, children, className, selected,...other} = props
    // const filledButtonStyle = "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark"
    const filledTonalButtonStyle = "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark"
    const outlineButtonStyle = `border border-outline-light dark:border-outline-dark ${selected?"text-on-inverse-surface-light dark:text-on-inverse-surface-dark dark:hover:bg-opacity-[8%] hover:bg-opacity-[8%] dark:hover:bg-on-inverse-surface-dark hover:bg-on-inverse-surface-light":"text-on-surface-variant-light dark:text-on-surface-variant-dark dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-opacity-[8%] hover:bg-on-surface-variant-light"}`
    const standardButtonStyle = selected?"text-primary-light dark:text-primary-dark hover:bg-primary-light dark:bg-primary-dark hover:bg-opacity-[8%]":"text-on-surface-variant-light dark:text-on-surface-variant-dark dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-opacity-[8%] hover:bg-on-surface-variant-light"
    let Component = `${component || 'button'}`
    // const button = useRef(null)
    let resTypeStyle = null
    switch (type) {
        // case "filled":
        //     resTypeStyle = filledButtonStyle
        //     break;
        case "tonal":
            resTypeStyle = filledTonalButtonStyle
            break;
        case "outline":
            resTypeStyle = outlineButtonStyle
            break;
        default:
            resTypeStyle = standardButtonStyle
    }
    return (
        <Component onClick={(e)=>{
            // createRipple(e)
            onClick&&onClick()
        }} {...other} className={`overflow-hidden rounded-full justify-center flex items-center w-10 h-10 ${resTypeStyle} ${className}`}>
            <Icon size={24} type={"outline"}>
            {children}
            </Icon>
        </Component>

    )
}
