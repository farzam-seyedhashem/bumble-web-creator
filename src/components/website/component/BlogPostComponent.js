import Typography from "@m3/assets/typography/Typography";
import Image from "next/legacy/image";

export default function BlogPostComponent({item}) {
    return (
        <div
            className={`relative group/blog grid md:grid-cols-${item.desktopOptions.gridNumber} grid-cols-${item.mobileOptions.gridNumber} gap-4`}>

            <div
                className={" w-full h-fit p-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={"flex pb-3"}>
                    <div className={`flex-1`}>
                        <Typography type={"h4"}
                                    className="mr-6  !text-title-medium  font-bold text-on-surface-light dark:text-on-surface-dark ">
                            Post Title
                        </Typography>
                        <p
                            className={"text-body-medium font-medium flex items-center w-fit py-1 rounded-[8px]  mt-2  whitespace-normal dark:text-on-surface-variant-dark text-on-surface-variant-light"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl
                            nisi


                        </p>
                    </div>
                    <div className={"h-[100px] w-[100px]"}>

                        <Image quality={100} layout={'responsive'} width={720} height={720}
                               className="rounded-[12px] w-full object-cover"
                               src={"/bg.webp"} alt=""/>

                    </div>
                </div>
                <div className={"flex justify-between"}>
                    <div
                        className={`w-fit py-2 items-center px-4 rounded-[12px] dark:bg-surface-container-high-dark bg-surface-container-light flex  gap-0`}>
                        <div className={`   mr-2 items-center`}>
                            <p className={` inline-flex items-center text-label-small sm:text-label-medium mr-2 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                Tags:
                            </p>
                            <p className={`mr-1 inline-flex text-primary-light dark:text-primary-dark items-center text-label-small sm:text-label-medium `}>

                                <a href={"#"} className={"text-primary-light dark:text-primary-dark"}>

                                    lorem_ipsum
                                </a>
                            </p>
                            <p className={`mr-2 inline-flex text-primary-light dark:text-primary-dark items-center text-label-small sm:text-label-medium `}>

                                <a href={"#"} className={"text-primary-light dark:text-primary-dark"}>

                                    lorem_ipsum
                                </a>
                            </p>
                            <p className={`mr-2 inline-flex text-primary-light dark:text-primary-dark items-center text-label-small sm:text-label-medium `}>

                                <a href={"#"} className={"text-primary-light dark:text-primary-dark"}>

                                    lorem_ipsum
                                </a>
                            </p>


                        </div>

                    </div>
                    {/*<div className={"flex justify-end"}>*/}
                    {/*    <IconButton*/}
                    {/*        className={"w-10 h-10 !bg-surface-container-high-light dark:!bg-surface-container-high-dark"}>*/}
                    {/*        more_horiz*/}
                    {/*    </IconButton>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}