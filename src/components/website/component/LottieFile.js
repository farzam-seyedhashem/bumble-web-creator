'use client';
// import React, {useEffect, useState, Fragment, useRef} from "react";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

// import Lottie from 'react-lottie';

export default function LottieFile({

	                                     item,

                                     }) {

	return (
		<>
			{item?.value&&<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData: JSON.parse(item.value),
					rendererSettings: {
						preserveAspectRatio: "xMidYMid slice"
					}
				}}
				height={400}
				width={400}
			/>}
		</>
	)
}