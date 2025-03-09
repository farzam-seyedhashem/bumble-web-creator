import Icon from "@m3/assets/icons/Icon";
import Switch from "@m3/switch/Switch";

export default function ListItem({onClick,isDisabled,supportingText,headline,trailingIcon,trailingSwitch,actionChange,actionValue}) {
    return (
        <li onClick={onClick} className={`${isDisabled ? "dark:text-on-surface-dark/[38%] text-on-surface-light/[38%] bg-on-surface-light/[10%] dark:bg-on-surface-dark/[10%] " : "before:inset-0 before:absolute relative before:transition-colors before:duration-300 hover:before:bg-on-surface-light/[8%] dark:hover:before:bg-on-surface-dark/[8%] text-on-surface-light dark:text-on-surface-dark"} ${supportingText ? supportingText.length > 150 ? "h-[88px]" : "h-[72px]" : "h-[56px]"} px-4  flex items-center text-body-large`}>
            <div className={"flex-grow"}>
                {headline}
                <p className={`${isDisabled ? "dark:text-on-surface-dark/[38%] text-on-surface-light/[38%]" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} text-body-medium block `}>
                    {supportingText}
                </p>
            </div>
            <div
                className={`${!isDisabled ? "text-on-surface-variant-light dark:text-on-surface-variant-dark" : "dark:text-on-surface-dark/[38%] text-on-surface-light/[38%]"}`}>
                {trailingIcon && <Icon>
                    {trailingIcon}
                </Icon>}
                {trailingSwitch&&<Switch isCheck={actionValue} setIsCheck={actionChange}/>}
            </div>
        </li>
    )
}