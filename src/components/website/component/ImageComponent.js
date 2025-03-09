'use server';
import Image from "next/image";

export default async function ImageComponent({item}) {
   
    return (
        <>
            {item?.value && <div className={`relative group h-fit ${item.uniqueId} overflow-hidden`}>

                <Image objectFit={item.globalStyles.objectFit} layout={"fill"} className={`z-10`} src={item.value} alt={""}/> :


            </div>}

        </>
    )
}