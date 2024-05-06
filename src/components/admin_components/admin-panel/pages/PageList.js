import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";

export default function PageList() {
    return (
        <>
            <div
                className={" bg-surface-container-light dark:bg-surface-container-dark  flex items-center justify-between px-4 h-[64px]"}>
                <h1 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-title-large"}>
                   Pages
                </h1>
                <Button icon={"add"} type={"filled"}
                        className={""}>
                    Add New Page
                </Button>
            </div>
            <div className=" h-[100vh] w-full flex pt-0 px-0 justify-center">

                <div className={"w-full"}>
                    <div
                        className={"overflow-hidden rounded-[0px]  dark:border-outline-dark border-outline-light"}>
                        <table
                            className={" w-full mt-2  border-collapse"}>
                            <thead className={" *:border-b *:border-outline-variant-light"}>
                            <tr className={"text-left *:font-medium *:text-title-small *:text-on-surface-variant-light dark:*:text-on-surface-variant-dark *:px-4 *:h-[48px] bg-surface-light dark:bg-surface-dark"}>
                                <th>Page Name</th>
                                <th>Slug (link)</th>
                                <th>Created At</th>
                                <th>Update At</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody
                                className={"*:text-on-surface-variant-light dark:*:text-on-surface-variant-dark dark:hover:*:text-on-secondary-container-dark hover:*:text-on-secondary-container-light dark:hover:*:bg-secondary-container-dark hover:*:bg-secondary-container-light  *:border-b dark:*:border-outline-variant-dark *:border-outline-variant-light"}>
                            <tr className={"*:px-4 *:h-[56px] "}>
                                <td className={"font-medium"}>Home</td>
                                <td>/</td>
                                <td>_</td>
                                <td>3 april 2023</td>
                                <td>
                                    <div className={"flex items-center space-x-1 justify-end"}>
                                        <Link href={"/page-builder"}>
                                            <IconButton>
                                                edit
                                            </IconButton>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className={"!border-b-0 *:px-4 *:h-[56px] "}>
                                <td className={"font-medium"}>Custom Page</td>
                                <td>/custom</td>
                                <td>3 april 2023</td>
                                <td>3 april 2023</td>
                                <td>
                                    <div className={"flex items-center space-x-1 justify-end"}>
                                        <IconButton className={"md:flex hidden"}>
                                            edit
                                        </IconButton>
                                        <IconButton className={"text-error-light dark:text-error-dark"}>
                                            delete
                                        </IconButton>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}