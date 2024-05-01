import DesktopMenu from "@admin/admin-panel/menu/Desktop";

export default function layout ({children}) {
    return(
        <div className={"flex overflow-hidden items-center justify-center bg-surface-light dark:bg-surface-dark"}>
            <DesktopMenu/>
            <div className={"w-[calc(100%_-_80px)] min-h-screen bg-surface-light dark:bg-surface-dark  ml-auto"}>
            {children}
            </div>
        </div>
    )
}