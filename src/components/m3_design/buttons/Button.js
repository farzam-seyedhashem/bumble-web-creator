import Icon from "@m3/assets/icons/Icon";

export default function Button({type, component, children, icon, className, ...other}) {
    let Component = component || "button"

    let classes = ""
    switch (type) {
        case "elevated":
            classes = "elevated-button"
            break
        case "tonal":
            classes = 'tonal-button'
            break
        case "filled":
            classes = 'filled-button'
            break
        case "outlined":
            classes = "outlined-button"
            break
        case "disabled":
            classes = "bg-on-surface-light/[10%] text-on-surface-light/[38%] dark:bg-on-surface-dark/[10%] dark:text-on-surface-dark/[38%] disabled-button"
            break
        default:
            classes = "text-button"
            break;
    }
    return (
        <Component disabled={type==="disabled"||other.disabled}
            className={`appearance-none button ${icon ? "button-with-icon" : "button-without-icon"} ${classes} ${typeof className === "object"?className.root:className}`} {...other}>
            <div className={`button-state-layer ${typeof className === "object"?className.stateLayer:""}`}>
                {icon && <Icon weight={500} size={18} className={"icon font-medium text-[18px]"}>
                    {icon}
                </Icon>}
                {children}
            </div>
        </Component>

    )
}