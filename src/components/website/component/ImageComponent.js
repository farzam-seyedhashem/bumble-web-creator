
import Image from "next/image";

export default function ImageComponent({item}) {
   
    return (
        <>
            {item?.value && <div className={`relative w-fit group h-fit ${item.uniqueId} overflow-hidden`}>

                <Image objectFit={item.styles.desktop.objectFit} layout={"fill"} className={`z-10`} src={item.value} alt={""}/> :


            </div>}

        </>
    )
}