'use client'
import Image from "next/image";

export default function WebsiteLogoComponent({siteSetting,item}) {

	return (
		<>
			{<div className={`relative w-fit group h-fit ${item.uniqueId} overflow-hidden`}>
				{siteSetting?.logo&&<Image objectFit={item.styles.desktop.objectFit} layout={"fill"} className={`z-10`}
				        src={process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL + siteSetting.logo.name} alt={""}/>}


			</div>}

		</>
	)
}