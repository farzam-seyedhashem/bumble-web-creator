'use client';
// import dynamic from 'next/dynamic';
// const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import dynamic from "next/dynamic";
// import Lottie from "lottie-react";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
// import Lottie from "react-lottie";
// import { useLottie } from 'lottie-react'
// const {useLottie} = DynamicLottie

export default function LottieFile({

	                                     item,

                                     }) {
	const options = {
		loop: true,
		autoplay: true,
		animationData: JSON.parse(item.value),
	}
	// const { View } = useLottie(options)
	return (
		<>
			{/*<div className="w-full h-fit flex items-center justify-center text-center">*/}
			{/*	<div className="lottie">{View}</div>*/}
			{/*</div>*/}
			{item?.value && <DynamicLottie
				className={"w-full h-[400px]"}
				loop={true}
				autoplay={true}
				height={400}
				width={400}
			 animationData={JSON.parse(item.value)}/>}
		</>
	)
}