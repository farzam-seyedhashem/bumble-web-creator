import Image from "next/image";
import Button from "@m3/buttons/Button";

export default function PostCard({post}) {
    return (
        <>
            <div className="rounded-[16px]  w-full">
                <div className={"relative h-[340px] w-full"}>
                    <Image alt={""} objectFit={"cover"} layout={"fill"} src={"/bg.webp"}/>
                </div>
                <div>
                    <h3>
                        Post Title
                    </h3>
                </div>
            </div>
            {/*<div className="rounded-[16px] overflow-hidden h-4/6 relative w-full">*/}
            {/*    <Image alt={""} objectFit={"cover"} layout={"fill"} src={"/bg.webp"}/>*/}
            {/*    <div className={"flex items-end absolute inset-0 z-2 bg-gradient-to-b from-transparent via-scrim-light/[40%] to-scrim-light/[40%]"}>*/}
            {/*        <div className={"px-4 py-4"}>*/}
            {/*            <div className={"text-label-medium font-medium text-on-tertiary-container-light dark:text-on-surface-variant-dark"}>*/}
            {/*                Mar 16,2020*/}
            {/*            </div>*/}
            {/*            <div className={"mb-2 text-title-large font-bold text-on-tertiary-container-light dark:text-on-surface-dark"}>*/}
            {/*                Post Title*/}
            {/*            </div>*/}
            {/*            <div className={"text-label-large text-primary-light dark:text-primary-dark"}>*/}
            {/*                #lorem_ipsum #lorem_ipsum #lorem_ipsum #lorem_ipsum*/}
            {/*            </div>*/}
            {/*            <p className={" text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
            {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
            {/*                labore et dolore magna aliqua Egestas purus viverra accumsan in nisi nisi*/}
            {/*            </p>*/}
            {/*            <button className={"mt-4 bg-tertiary-light rounded-full px-6 h-[40px] text-on-tertiary-light text-label-large font-medium"}>*/}
            {/*                Read More*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}