'use server';
import Image from "next/image";

export default function ImageComponent({item}) {
   
    return (
        <>
            {item?.value && <div className={"relative group"}>

                <Image className={"z-[1]"} src={item.value} alt={""}/> :


            </div>}

        </>
    )
}