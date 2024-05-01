'use client'
import Icon from "@m3/assets/icons/Icon";
import IconButton from "@m3/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";
import {useState} from "react";

function TextComponent({onSelected,selected}) {
    return (
        <div onClick={onSelected} className={" group/editor-list h-auto w-full mx-auto  flex items-center"}>
            <div
                className={`${selected?"bg-secondary-container-light dark:bg-secondary-container-dark":"group-active/editor-list:bg-on-surface-light/[12%] dark:group-active/editor-list:bg-on-surface-dark/[12%] group-focus/editor-list:bg-on-surface-light/[12%] dark:group-focus/editor-list:bg-on-surface-dark/[12%] group-hover/editor-list:bg-on-surface-light/[8%] dark:group-hover/editor-list:bg-on-surface-dark/[8%]"} w-full pr-4 pl-6 py-2 flex items-center `}>

                <div contentEditable={true} placeholder={"Write your text"}
                     className={`${selected?"text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-light dark:text-on-surface-dark"} placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark outline-none h-auto bg-transparent flex-grow mr-4  py-2 text-body-large`}>

                </div>
                <Icon
                    className={"cursor-grab group-hover/editor-list:visible invisible  mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                    type={"outline"}>
                    drag_handle
                </Icon>
                {/*<Icon type={"outline"} className={"group-hover/editor-list:visible invisible"}>*/}
                {/*    delete*/}
                {/*</Icon>*/}
            </div>
        </div>
    )
}

export default function TextEditor() {
    const [isAddLineCardOpen, setIsAddLineCardOpen] = useState(false)
    const [list, setList] = useState([])
    const [selectedList,setSelectedList] = useState(null)
    const handleDelete = (e) => {

    }
    const createLine = (type) => {
        switch (type) {
            case "text":
                setList([...list,{type:"text"}])
                console.log(list)
                break;
            case "checkbox":
                break;
            case "image":
                break;
            case "upload":
                break;
            case "quote":
                break;
        }
        setIsAddLineCardOpen(false)
    }

    return (
        <div className={"bg-background-light dark:bg-background-dark h-[100vh] w-full"}>
            <div className={"container mx-auto py-[48px] max-w-6xl"}>
                <div
                    className={"min-h-[400px] bg-surface-light dark:bg-surface-dark rounded-[24px] py-6 outline outline-1 outline-outline-variant-light dark:outline-outline-variant-dark "}>
                    <div placeholder={"Write Your Title"} className={" group/editor-list h-auto w-full mx-auto  flex items-center"}>

                    </div>
                    {list.map((item, index) =>
                        <>
                            {item.type === "text" && <div key={index}>
                                <TextComponent onSelected={()=>setelectedList(index)} selected={index===selectedList} handleKeyDown={handleDelete}/>
                            </div>}
                        </>
                    )}
                    <div className={"py-2 flex justify-end px-6 items-center"}>
                        {isAddLineCardOpen ? <div
                            className={"bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[16px] px-3 pt-2 pb-3 w-full"}>
                            <div className={"flex mb-1 items-center"}>
                                <IconButton onClick={() => setIsAddLineCardOpen(false)}>
                                    arrow_back
                                </IconButton>
                                <h2 className={"text-title-medium font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Add New Component
                                </h2>
                            </div>
                            <div className={"flex items-center space-x-2"}>
                                <IconButton onClick={()=>createLine("text")}>
                                    title
                                </IconButton>
                                <IconButton>
                                    image
                                </IconButton>
                                <IconButton>
                                    checklist
                                </IconButton>
                                <IconButton>
                                    upload_file
                                </IconButton>
                                <IconButton>
                                    format_quote
                                </IconButton>
                            </div>

                        </div> : <Button onClick={() => setIsAddLineCardOpen(true)} icon={"add"}>
                            Add New Line
                        </Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}