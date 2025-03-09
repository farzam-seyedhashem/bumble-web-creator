'use client'
import {useState} from "react";
import Icon from "@m3/assets/icons/Icon";

export default function CreateSlider(props) {
	const [step, setStep] = useState(0);
	return (
		<div className={"h-full"}>
			{step === 0 && <div
				className={"py-10 container mx-auto grid grid-cols-3 gap-6"}>
				<div
					className={"h-[240px] relative rounded-[12px] dark:bg-surface-container-dark bg-surface-container-light w-full"}>
					<div className={" top-1/2 transform -translate-y-1/2 left-4 absolute w-full "}>
						<div
							className={"h-[20px] rounded-full w-4/12  bg-surface-variant-light dark:bg-surface-variant-dark"}/>
						<div
							className={"h-[48px] mt-1 rounded-[8px] w-6/12 bg-surface-variant-light dark:bg-surface-variant-dark"}/>
						<div className={"flex items-center"}>
							<button
								className={"w-[60px] h-[16px] bg-surface-variant-light dark:bg-surface-variant-dark rounded-full mt-2"}>

							</button>
							<button
								className={"w-[60px] h-[16px] ml-1 border-surface-variant-light border-2 dark:border-surface-variant-dark rounded-full mt-2"}>

							</button>
						</div>
					</div>
				</div>
				<div
					className={"h-[240px] relative rounded-[12px] dark:bg-surface-container-dark bg-surface-container-light w-full"}>
					<div
						className={"flex items-center top-1/2 transform -translate-y-1/2 left-0 px-6 absolute w-full "}>
						<div className={"w-8/12"}>
							<div
								className={"h-[20px] rounded-full w-7/12  bg-surface-variant-light dark:bg-surface-variant-dark"}/>
							<div
								className={"h-[48px] mt-1 rounded-[8px] w-9/12 bg-surface-variant-light dark:bg-surface-variant-dark"}/>
							<div className={"flex items-center"}>
								<button
									className={"w-[60px] h-[16px] bg-surface-variant-light dark:bg-surface-variant-dark rounded-full mt-2"}>

								</button>
								<button
									className={"w-[60px] h-[16px] ml-1 border-surface-variant-light border-2 dark:border-surface-variant-dark rounded-full mt-2"}>

								</button>
							</div>
						</div>
						<div
							className={"text-on-surface-variant-light dark:text-on-surface-variant-dark flex items-center justify-center w-4/12 h-[120px] bg-surface-variant-light dark:bg-surface-variant-dark rounded-[8px]"}>
							<Icon fill={1}>
								image
							</Icon>
							<Icon fill={1}>
								code
							</Icon>
							<Icon fill={1}>
								play
							</Icon>
						</div>
					</div>
				</div>
				<div
					className={"h-[240px] relative rounded-[12px] dark:bg-surface-container-dark bg-surface-container-light w-full"}>
					<div
						className={"flex items-center top-1/2 transform -translate-y-1/2 left-0 px-6 absolute w-full "}>
						<div className={"w-8/12"}>
							<div
								className={"h-[20px] rounded-full w-7/12  bg-surface-variant-light dark:bg-surface-variant-dark"}/>
							<div
								className={"h-[48px] mt-1 rounded-[8px] w-9/12 bg-surface-variant-light dark:bg-surface-variant-dark"}/>
							<div className={"flex items-center"}>
								<button
									className={"w-[60px] h-[16px] bg-surface-variant-light dark:bg-surface-variant-dark rounded-full mt-2"}>

								</button>
								<button
									className={"w-[60px] h-[16px] ml-1 border-surface-variant-light border-2 dark:border-surface-variant-dark rounded-full mt-2"}>

								</button>
							</div>
						</div>
						<div
							className={"text-on-surface-variant-light dark:text-on-surface-variant-dark flex items-center justify-center w-4/12 h-[120px] bg-surface-variant-light dark:bg-surface-variant-dark rounded-[8px]"}>
							<Icon fill={1}>
								code
							</Icon>
						</div>
					</div>
				</div>

			</div>}
			{step === 1 && <div className={"container mx-auto h-full overflow-hidden"}>
				<div className={"flex items-end justify-center w-full h-full"}>
					<div
						className={"border-4 pt-[34px] relative border-b-0 border-outline-light dark:border-outline-dark w-full px-6   h-fit rounded-t-[24px] bg-surface-container-lowest-light dark:bg-surface-container-low-dark"}>
						<div
							className={"top-0 pl-4 pr-6 flex items-center justify-between h-[28px] rounded-b-[8px] w-[150px] bg-black left-1/2 absolute transform -translate-x-1/2"}>
							<div
								className={"w-[16px] h-[16px] bg-white bg-opacity-[10%] rounded-full border border-white/[16%]"}>

							</div>
							<div className={"bg-green-600 rounded-full w-[6px] h-[6px]"}></div>
						</div>
						<div
							className={"bg-surface-container-low-light pb-12 rounded-t-[24px] overflow-hidden dark:bg-surface-container-low-dark h-full border-outline-variant-light dark:border-outline-variant-dark"}>
							<div className="aspect-w-16 w-full aspect-h-8 bg-black">

							</div>
						</div>
					</div>
				</div>

			</div>}
		</div>
	)
}