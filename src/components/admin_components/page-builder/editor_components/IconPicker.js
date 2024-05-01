import IconsList from '@/IconsList.json'
import Icon from "@m3/assets/icons/Icon";
import {useState} from "react";
import Switch from "@m3/switch/Switch";
import {Dialog} from "@headlessui/react";

export default function IconPicker({defValue,isFill, onIconSelect, label}) {
    const {icons} = IconsList
    const [isOpen, setIsOpen] = useState(false);
    const [isFilled, setIsFilled] = useState(isFill?isFill:false)
    const [search, setSearch] = useState("")
    const [value, setValue] = useState(defValue);
    const [isRounded, setIsRounded] = useState(false)
    const [isSharp, setIsSharp] = useState(false)

    return (
        <>
            <div className={"flex justify-between items-center"}>
                <label className={"text-on-surface-light dark:text-on-surface-dark text-label-large"}>
                    {label}
                </label>
                <div onClick={() => setIsOpen(true)}
                     className={"w-[40px] rounded-[8px] flex items-center justify-center h-[40px] bg-surface-container-highest-light dark:bg-surface-dark"}>
                    <Icon fill={isFilled ? 1 : 0} weight={400} size={24}>
                        {defValue}
                    </Icon>
                </div>
            </div>
            <Dialog className={"z-[1001]  relative  "}
                    open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel
                        className="w-6/12 overflow-scroll h-[580px] bg-surface-container-light dark:bg-surface-container-dark rounded-[24px]">
                        <div>
                            <div
                                className={"items-center border-b border-outline-variant-light dark:border-outline-variant-dark sticky top-0 left-0 bg-surface-container-highest-light dark:bg-surface-container-highest-dark  px-4 pt-4 pb-2 flex justify-between"}>
                                <div className={"w-8/12  "}>
                                    <div
                                        className={"w-full relative bg-surface-container-light rounded-full overflow-hidden"}>
                                        <Icon
                                            className={"left-4 text-on-surface-variant-light dark:text-on-surface-variant-dark absolute top-1/2 -translate-y-1/2"}>
                                            search
                                        </Icon>
                                        <input onChange={(e) => setSearch(e.target.value)} placeholder={"search"}
                                               className={'pl-[48px] pr-4 border-0 w-full bg-transparent h-[48px]'}/>
                                    </div>
                                </div>
                                <div className={"w-fit"}>
                                    <div className={"flex text-label-small items-center space-x-4"}>
                                        <label>
                                            is Filled
                                        </label>
                                        <Switch setIsCheck={setIsFilled} isCheck={isFilled}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"pt-2 px-4 grid grid-cols-5 gap-4"}>
                                {icons.filter(item => search ? item === search : item).map((item, i) =>
                                    <div onClick={() => {
                                        onIconSelect(item, isFilled)
                                        setValue(item)
                                        setIsOpen(false)
                                    }} key={i}
                                         className={"flex items-center justify-center bg-surface-container-highest-light dark:bg-surface-container-highest-dark w-full rounded-[8px] h-[100px]"}>
                                        <div>

                                            <div className={" flex items-center justify-center"}>
                                                <Icon fill={isFilled ? 1 : 0}
                                                      className={"mx-auto text-center text-[36px]"}
                                                >
                                                    {item}
                                                </Icon>
                                            </div>
                                            <h6 className={"mt-2 text-center text-label-small"}>
                                                {item}
                                            </h6>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}