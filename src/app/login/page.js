'use client'
import TextField from "@m3/text_fields/TextField";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";

export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center w-full bg-surface-light dark:bg-surface-dark">
            <div
                className={"w-[420px] space-y-4 py-6 px-6 rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                <div className={"flex  items-center justify-center"}>
                    <Icon className={"text-secondary-light dark:text-secondary-dark"}
                          size={24} weight={700}>
                       login
                    </Icon>
                </div>
                <h1 className={"text-on-surface-light dark:text-on-surface-dark text-headline-small text-center font-medium"}>
                    Login
                </h1>
                <p className={" text-body-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    If forgot your password please contact to your administrator or <span className={"text-primary-light dark:text-primary-dark hover:underline"}>our support</span> team
                </p>
                <div className={"space-y-2"}>
                <TextField defaultValue={""} label="Email" type="email"/>
                <TextField defaultValue={""} label="password" type="password"/>
                </div>
                <div className={"pt-2 flex justify-end"}>
                    <Button icon={"login"} className={""} type={"filled"}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}