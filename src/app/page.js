'use client'
import Image from 'next/image'
import Badge from "@m3/badges/Badge";
import BottomAppBar from "@m3/bottom_app_bars/BottomAppBar";
import IconButton from "@m3/icon_buttons/IconButton";
import FAB from "@m3/floating_action_buttons/FAB";
import Button from "@m3/buttons/Button";
import Checkbox from "@m3/checkboxes/Checkbox";
import Divider from "@m3/dividers/Divider";
import OutlinedSegmentedButton from "@m3/segmented_buttons/OutlinedSegmentedButton";
import Snackbar from "@m3/snackbars/Snackbar";
import Switch from "@m3/switch/Switch";
import InputChips from "@m3/chips/InputChips";
import AssistChips from "@m3/chips/AssistChips";
import FilterChips from "@m3/chips/FilterChips";
import SuggestionChips from "@m3/chips/SuggestionChips";
import NavigationBar from "@m3/navigation_bars/NavigationBar";

export default function Home() {

    return (
        <>
            <main data-font={4}
                className="h-[535px] w-[200vw] whitespace-nowrap overflow-scroll flex space-x-4 px-6 py-6 bg-background-dark ">
                <div
                    className={"p-[24px] space-y-4 items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Badges
                    </h2>
                    <div className={"block w-fit space-y-4"}>
                        <Badge type={"small"}/>
                        <Badge number={3} type={"large"}/>
                        <Badge number={33} type={"large-max"}/>
                    </div>
                </div>
                <div
                    className={"p-[24px] flex items-center justify-center h-fit  min-w-[150px] max-w-[400px] min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-full"}>
                    <div className={"space-y-4 w-[400px]"}>
                        <BottomAppBar menuList={[{icon: "home", link: "home"}, {icon: "add", link: "add"}]}
                                      fabIcon={"add"}/>
                    </div>
                </div>
                <div
                    className={"p-[24px] space-y-4 items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Icon Button
                    </h2>
                    <div className={"flex items-center space-x-4"}>
                        <IconButton selected={false} disabled={false}>
                            home
                        </IconButton>
                        <IconButton selected={false} disabled={true}>
                            home
                        </IconButton>
                        <IconButton selected={true} disabled={false}>
                            home
                        </IconButton>
                        <IconButton selected={true} disabled={true}>
                            home
                        </IconButton>
                    </div>
                    <div className={"flex items-center space-x-4"}>
                        <IconButton type={"filled"} selected={false} disabled={false}>
                            home
                        </IconButton>
                        <IconButton type={"filled"} selected={false} disabled={true}>
                            home
                        </IconButton>
                        <IconButton type={"filled"} selected={true} disabled={false}>
                            home
                        </IconButton>
                        <IconButton type={"filled"} selected={true} disabled={true}>
                            home
                        </IconButton>
                    </div>
                    <div className={"flex items-center space-x-4"}>
                        <IconButton type={"outlined"} selected={false} disabled={false}>
                            home
                        </IconButton>
                        <IconButton type={"outlined"} selected={false} disabled={true}>
                            home
                        </IconButton>
                        <IconButton type={"outlined"} selected={true} disabled={false}>
                            home
                        </IconButton>
                        <IconButton type={"outlined"} selected={true} disabled={true}>
                            home
                        </IconButton>
                    </div>
                    <div className={"flex items-center space-x-4"}>
                        <IconButton type={"tonal"} selected={false} disabled={false}>
                            home
                        </IconButton>
                        <IconButton type={"tonal"} selected={false} disabled={true}>
                            home
                        </IconButton>
                        <IconButton type={"tonal"} selected={true} disabled={false}>
                            home
                        </IconButton>

                        <IconButton type={"tonal"} selected={true} disabled={true}>
                            home
                        </IconButton>
                    </div>
                </div>
                <div
                    className={"p-[24px] space-y-4 block items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Floating Action Buttons
                    </h2>
                    <div className={" space-x-4 flex items-center"}>
                        <FAB size={"small"}>
                            home
                        </FAB>
                        <FAB color={"primary"} size={"small"}>
                            home
                        </FAB>
                        <FAB color={"secondary"} size={"small"}>
                            home
                        </FAB>
                        <FAB color={"tertiary"} size={"small"}>
                            home
                        </FAB>
                    </div>
                    <div className={" space-x-4 flex items-center"}>
                        <FAB>
                            home
                        </FAB>
                        <FAB color={"primary"}>
                            home
                        </FAB>
                        <FAB color={"secondary"}>
                            home
                        </FAB>
                        <FAB color={"tertiary"}>
                            home
                        </FAB>
                    </div>
                    <div className={" space-x-4 flex items-center"}>
                        <FAB size={"large"}>
                            home
                        </FAB>
                        <FAB color={"primary"} size={"large"}>
                            home
                        </FAB>
                        <FAB color={"secondary"} size={"large"}>
                            home
                        </FAB>
                        <FAB color={"tertiary"} size={"large"}>
                            home
                        </FAB>
                    </div>
                    <div className={" space-x-4 flex items-center"}>
                        <FAB label={"home"} isExtended>
                            home
                        </FAB>
                        <FAB color={"primary"} label={"home"} isExtended>
                            home
                        </FAB>
                        <FAB color={"secondary"} label={"home"} isExtended>
                            home
                        </FAB>

                        <FAB color={"tertiary"} label={"home"} isExtended>
                            home
                        </FAB>
                    </div>
                </div>
                <div
                    className={"p-[24px] space-y-4 block items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Buttons
                    </h2>
                    <div className={" space-x-4 flex items-center"}>
                        <Button type={"filled"}>
                            home
                        </Button>
                        <Button type={"outlined"}>
                            home
                        </Button>
                        <Button type={"tonal"}>
                            home
                        </Button>
                        <Button type={"elevated"}>
                            home
                        </Button>
                        <Button>
                            home
                        </Button>
                    </div>
                    <div className={" space-x-4 flex items-center"}>
                        <Button icon={"home"} type={"filled"}>
                            home
                        </Button>
                        <Button icon={"home"} type={"outlined"}>
                            home
                        </Button>
                        <Button icon={"home"} type={"tonal"}>
                            home
                        </Button>
                        <Button icon={"home"} type={"elevated"}>
                            home
                        </Button>
                        <Button icon={"home"}>
                            home
                        </Button>
                    </div>
                </div>
                <div
                    className={"p-[24px] space-y-4 block items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Icon Button
                    </h2>
                    <div className={" space-x-4 flex items-center"}>
                        <Checkbox isDisabled={true} label={"home"} color={"error"}/>
                        <Checkbox isDisabled={true} label={"home"} isCheck={true} color={"error"}/>
                        <Checkbox isDisabled={true} label={"home"} isIndeterminate={true} color={"error"}/>
                    </div>
                    <div className={" space-x-4 flex items-center"}>
                        <Checkbox label={"home"} color={"error"}/>
                        <Checkbox label={"home"} isCheck={true} color={"error"}/>
                        <Checkbox label={"home"} isIndeterminate={true} color={"error"}/>
                    </div>
                    <div className={" space-x-4 flex items-center"}>
                        <Checkbox label={"home"} color={"primary"}/>
                        <Checkbox label={"home"} isCheck={true} color={"primary"}/>
                        <Checkbox label={"home"} isIndeterminate={true} color={"primary"}/>
                    </div>

                </div>
                <div
                    className={"p-[24px] space-y-4 block items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Dividers
                    </h2>
                    <div className={" w-[320px] space-y-4  items-center"}>
                        <Divider type={"full"}/>
                        <Divider type={"inset"}/>
                        <Divider type={"inset-middle"}/>
                    </div>
                    <div className={" w-[320px] space-x-4 h-[120px] flex  items-center"}>
                        <Divider isVertical type={"full"}/>
                        <Divider isVertical type={"inset"}/>
                        <Divider isVertical type={"inset-middle"}/>
                    </div>


                </div>
                <div
                    className={"p-[24px] space-y-4 block items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Segmented Button : Outlined
                    </h2>
                    <div className={" space-y-4 w-[600px]  items-center"}>
                        <OutlinedSegmentedButton/>
                    </div>
                    <div className={" w-[320px] space-x-4 h-[120px] flex  items-center"}>

                    </div>
                </div>

            </main>
            <main
                className="h-[1024px] w-[200vw] whitespace-nowrap overflow-scroll flex space-x-4 px-6 py-6 bg-background-dark ">
                <div
                    className={"p-[24px] space-y-4 items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Snackbars
                    </h2>
                    <div className={"block w-[600px] mb-8  space-y-4"}>
                        {/*<Snackbar/>*/}
                        <Snackbar className={"!relative bottom-0 left-0"}
                                  message={'I love cupcakes. \n I love. I love chocolate.'} onAction={() => {
                        }} action={"action"} type={"multi-line"} fullWidth={false} side={"left"} withCloseIcon/>
                        <Snackbar className={"!relative bottom-0 left-0"}
                                  message={'I love cupcakes. \n I love. I love chocolate.'} onAction={() => {
                        }} action={"action"} type={"multi-line"} fullWidth={true} side={"left"} withCloseIcon/>
                        <Snackbar className={"!relative bottom-0 left-0"}
                                  message={'I love cupcakes. \n I love. I love chocolate.'} onAction={() => {
                        }} withLongerAction action={"action"} type={"multi-line"} fullWidth={true} side={"left"}
                                  withCloseIcon/>
                        <Snackbar className={"!relative bottom-0 left-0"}
                                  message={'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'} onAction={() => {
                        }} action={"action"} type={"multi-line"} fullWidth={false} side={"left"}/>
                        <Snackbar className={"!relative bottom-0 left-0"}
                                  message={'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'} onAction={() => {
                        }} type={"multi-line"} fullWidth={false} side={"left"} withCloseIcon/>
                        <Snackbar className={"!relative bottom-0 left-0"}
                                  message={'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'} onAction={() => {
                        }} type={"multi-line"} fullWidth={false} side={"left"}/>
                    </div>
                    <div className={"block w-[600px] mt-10 space-y-4"}>
                        <Snackbar className={"!relative bottom-0 left-0"} message={"ewflkw weklfn"} onAction={() => {
                        }} action={"action"} type={"single-line"} fullWidth={false} side={"left"} withCloseIcon/>
                        <Snackbar className={"!relative bottom-0 left-0"} message={"ewflkw weklfn"} onAction={() => {
                        }} action={"action"} type={"single-line"} fullWidth={true} side={"left"} withCloseIcon/>
                        <Snackbar className={"!relative bottom-0 left-0"} message={"ewflkw weklfn"} onAction={() => {
                        }} action={"action"} type={"single-line"} fullWidth={false} side={"left"}/>
                        <Snackbar className={"!relative bottom-0 left-0"} message={"ewflkw weklfn"} onAction={() => {
                        }} type={"single-line"} fullWidth={false} side={"left"} withCloseIcon/>
                        <Snackbar className={"!relative bottom-0 left-0"} message={"ewflkw weklfn"} onAction={() => {
                        }} type={"single-line"} fullWidth={false} side={"left"}/>
                    </div>
                </div>
                <div
                    className={"p-[24px] space-y-4 items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Switch
                    </h2>
                    <div className={"block w-fit mb-8 flex items-center  space-x-4"}>

                        <Switch/>
                        <Switch withIcon/>
                        <Switch isDisable/>
                        <Switch withIcon isDisable/>
                        <Switch isCheck withIcon isDisable/>

                    </div>
                </div>
                <div
                    className={"p-[24px] space-y-4 items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark w-fit"}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Chips
                    </h2>
                    <div className={"block w-fit   space-y-6"}>
                        <div>
                            <label
                                className={"font-medium text-on-surface-light dark:text-on-surface-dark text-label-large"}>
                                Input Chips
                            </label>
                            <div className={"mt-2 w-fit flex items-center  space-x-4"}>
                                <InputChips/>
                                <InputChips trailingIcon={"close"}/>
                                <InputChips leadingIcon={"inventory"}/>
                                <InputChips leadingIcon={"inventory"} trailingIcon={"close"}/>
                                <InputChips avatar={<div className={"w-6 h-6 flex items-center justify-center bg-white rounded-full "}>
                                    <div className={"relative w-4 h-4"}>
                                        <Image layout={"fill"} src={"/next.svg"} alt={"wekfn"}/>
                                    </div>
                                </div>}/>
                                <InputChips avatar={<div className={"w-6 h-6 flex items-center justify-center bg-white rounded-full "}>
                                            <div className={"relative w-4 h-4"}>
                                                <Image layout={"fill"} src={"/next.svg"} alt={"wekfn"}/>
                                            </div>
                                        </div>} trailingIcon={"close"}/>
                            </div>
                            <div className={"mt-2 w-fit flex items-center  space-x-4"}>
                                <InputChips selected/>
                                <InputChips selected trailingIcon={"close"}/>
                                <InputChips selected leadingIcon={"inventory"}/>
                                <InputChips selected leadingIcon={"inventory"} trailingIcon={"close"}/>
                                <InputChips selected avatar={<div className={"w-6 h-6 flex items-center justify-center bg-white rounded-full "}>
                                    <div className={"relative w-4 h-4"}>
                                        <Image layout={"fill"} src={"/next.svg"} alt={"wekfn"}/>
                                    </div>
                                </div>}/>
                                <InputChips selected avatar={<div className={"w-6 h-6 flex items-center justify-center bg-white rounded-full "}>
                                    <div className={"relative w-4 h-4"}>
                                        <Image layout={"fill"} src={"/next.svg"} alt={"wekfn"}/>
                                    </div>
                                </div>} trailingIcon={"close"}/>
                            </div>
                        </div>
                        <div>
                            <label
                                className={"font-medium text-on-surface-light dark:text-on-surface-dark text-label-large"}>
                                Assist Chips
                            </label>
                            <div className={"mt-2 w-fit flex items-center  space-x-4"}>
                                <AssistChips/>
                            </div>
                        </div>
                        <div>
                            <label
                                className={"font-medium text-on-surface-light dark:text-on-surface-dark text-label-large"}>
                                Filter Chips
                            </label>
                            <div className={"mt-2 w-fit flex items-center  space-x-4"}>
                                <FilterChips/>
                            </div>
                        </div>
                        <div>
                            <label
                                className={"font-medium text-on-surface-light dark:text-on-surface-dark text-label-large"}>
                                Suggestion Chips
                            </label>
                            <div className={"mt-2 w-fit flex items-center  space-x-4"}>
                                <SuggestionChips/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={"p-[24px] space-y-4 items-center justify-center  min-w-[150px] h-fit min-h-[200px] rounded-[24px] bg-surface-light dark:bg-surface-dark "}>
                    <h2 className={"text-title-large font-black text-on-surface-light dark:text-on-surface-dark mb-4"}>
                        Navigation bars
                    </h2>
                    <div className={"w-[412px]"}>
                        <NavigationBar/>


                    </div>
                </div>

            </main>
        </>
    )
}
