import Icon from "@m3/assets/icons/Icon";

export default function MenuItemComponent({setIsInEdit,menuItem, isInEditMode}) {
	return (
		<div
			className={"h-[72px] z-1 flex items-center w-full px-4 before:z-10  before:inset-0 before:bg-on-surface-light/[8%] before:absolute relative before:hidden hover:before:block"}>
			{isInEditMode && <div className={"mr-2 z-20"}>
				<Icon className={"cursor-grab text-on-surface-variant-light"}>
					drag_indicator
				</Icon>
			</div>}
			<div className={"flex-1"}>
				<h3 className={"text-body-large text-on-surface-light"}>
					{menuItem.title}
				</h3>
				<h4 className={"text-body-medium text-on-surface-variant-light"}>
					{menuItem.page}
				</h4>
			</div>
			{isInEditMode && <div className={" space-x-1 flex items-center z-20"}>
				<Icon onClick={setIsInEdit} className={"w-[40px] flex items-center justify-center h-[40px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
					edit
				</Icon>
				<Icon className={"w-[40px] flex items-center justify-center h-[40px] text-error-light dark:text-error-dark"}>
					delete
				</Icon>
			</div>}
		</div>

	)
}
