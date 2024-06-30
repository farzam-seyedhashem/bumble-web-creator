'use server'
import WebComponentGenerator from "@website/WebComponentGenerator";

export default async function Container({item, key, Style}) {
    return (
        <>
            <div id={key} className={`${Style[item.uniqueId]}`}>
                <div className={`${item.isBox ? "" : "container mx-auto"}`}>
                    {/*{addedItems.length!==0 && <div onClick={() => setIsSelected(true)}*/}
                    {/*      className={"hidden group-hover:block absolute top-1/2 -translate-y-1/2 transform right-4 "}>*/}
                    {/*    <button*/}
                    {/*        className={"flex items-center h-[32px] w-[32px] justify-center rounded-full  !bg-tertiary-container-light "}>*/}
                    {/*        <Icon size={16} className={"!text-on-tertiary-container-light text-[24px]"}>*/}
                    {/*            edit*/}
                    {/*        </Icon>*/}
                    {/*    </button>*/}
                    {/*</div>}*/}
                    {item.addedItems.map((l, i) =>
                        <WebComponentGenerator Style={Style} key={i} item={l}/>
                    )}
                </div>

            </div>

        </>
    )
}