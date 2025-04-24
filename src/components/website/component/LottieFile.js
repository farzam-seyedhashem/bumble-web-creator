'use client';
// import dynamic from 'next/dynamic';
// const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// import Lottie from "react-lottie";
import { useLottie } from 'lottie-react'

export default function LottieFile({

	                                     item,

                                     }) {
	const options = {
		loop: true,
		autoplay: true,
		animationData: JSON.parse(item.value),
	}
	const { View } = useLottie(options)
	return (
		<>
			<div className="w-full h-fit flex items-center justify-center text-center">
				<div className="lottie">{View}</div>
			</div>
			{/*{item?.value && <Lottie*/}
			{/*	options={{*/}

			{/*		loop: true,*/}
			{/*		autoplay: true,*/}
			{/*		animationData: JSON.parse(item.value),*/}
			{/*		rendererSettings: {*/}
			{/*			preserveAspectRatio: "xMidYMid slice"*/}
			{/*		}*/}

			{/*	}}*/}
			{/*	height={400}*/}
			{/*	width={400}*/}
			{/*/>}*/}
		</>
	)
}