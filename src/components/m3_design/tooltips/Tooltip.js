export function Tooltip({label,position,className}) {
	return(
		<div className={`${className} hidden whitespace-nowrap  items-center justify-center absolute ${position[1]==="right"?"right-0":position[1]==="center"?"left-1/2 transform -translate-x-1/2":"left-0"} ${position[0]==="top"?"-top-[28px]":"-bottom-[28px]"} bg-inverse-surface-light px-2 h-[24px] text-body-small text-inverse-on-surface-light rounded-[4px]`}>
			{label}
		</div>
	)
}