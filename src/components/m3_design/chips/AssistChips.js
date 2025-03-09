import Icon from "@m3/assets/icons/Icon";

export default function AssistChips({onClick,label,icon,elevated}) {
return(
    <button onClick={onClick} className={`${icon?"pr-4 pl-2":"px-4"} ${elevated?"bg-surface-container-low-light dark:bg-surface-container-low-dark":""} flex items-center w-fit text-label-large font-medium text-on-surface-light drk:text-on-surface-dark border border-outline-light dark:border-outline-dark  h-[32px] rounded-[8px]  `}>
        <Icon className={"mr-2 text-primary-light dark:text-primary-dark"} size={20}>
            {icon}
        </Icon>
        {label}
    </button>
)
}