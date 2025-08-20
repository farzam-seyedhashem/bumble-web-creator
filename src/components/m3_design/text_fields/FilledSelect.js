'use client'
import React, {useRef, useState} from "react";
import {useClickOutside} from "@lib/CustomHook";

export default function FilledSelect({value, onChange, children, label, className, options,id}) {
	const [openMenu, setOpenMenu] = useState(false);
	const wrapperRef = useRef("menu");

	useClickOutside(wrapperRef, () => {
		setOpenMenu(false);
	});
	return (
		<div ref={wrapperRef} className={"relative"}>
			<div onClick={()=>setOpenMenu(true)}
				className={` bg-surface-container-highest-light dark:bg-surface-container-highest-dark relative h-[56px] rounded-t-[4px] w-full min-w-[40px] ${className}`}>
				{!children && <select onChange={onChange || null} value={value}
				                      className="appearance-none peer h-full w-full border-0 border-b border-on-surface-variant-light dark:border-on-surface-variant-dark bg-transparent px-4 pt-6 font-sans text-body-large font-normal text-on-surface-light dark:text-on-surface-dark outline outline-0 transition-all placeholder-shown:border-on-surface-variant-light dark:placeholder-shown:border-on-surface-variant-dark dark:focus:border-on-surface-variant-dark focus:border-on-surface-variant-light focus:outline-0 placeholder:opacity-0 ">
					{options && options.map((op, index) => <option value={op?.value} label={op?.title} key={index}>

					</option>)}
				</select>}
				{children && <div aria-invalid={"true"} id={id ? id : label}
				                  className={"appearance-none peer h-full w-full border-0 border-b border-on-surface-variant-light dark:border-on-surface-variant-dark bg-transparent px-4 pt-6 font-sans text-body-large font-normal text-on-surface-light dark:text-on-surface-dark outline outline-0 transition-all placeholder-shown:border-on-surface-variant-light dark:placeholder-shown:border-on-surface-variant-dark dark:focus:border-on-surface-variant-dark focus:border-on-surface-variant-light focus:outline-0 placeholder:opacity-0 "}>
					{value}
				</div>}
				{/*transform top-1/2 -translate-y-1/2*/}
				{/*peer-focus:top-2 peer-focus:translate-y-0*/}
				<label
					className="peer-focus:top-2 peer-focus:translate-y-0 top-2 transform translate-y-0 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 left-4   after:content[''] pointer-events-none absolute  flex  w-full select-none !overflow-visible truncate text-body-small font-normal  text-on-surface-variant-light dark:text-on-surface-variant-dark transition-all after:absolute  after:block after:w-full after:scale-x-0   after:transition-transform after:duration-300 peer-placeholder-shown:text-body-large dark:peer-placeholder-shown:text-on-surface-variant-dark peer-placeholder-shown:text-on-surface-variant-light peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-primary-light dark:peer-focus:text-primary-dark peer-focus:after:scale-x-100   peer-disabled:text-transparent">
					{label}
				</label>
				<legend
					className="left-0  -top-1.5 after:-bottom-1.5 peer-placeholder-shown:leading-[4.25] after:content[''] pointer-events-none absolute  flex h-full w-full select-none !overflow-visible truncate text-body-large font-normal  text-gray-500 transition-all after:absolute  after:block after:w-full after:scale-x-0 after:border-b-[2px] after:border-primary-light dark:after:border-primary-dark after:transition-transform after:duration-300 peer-placeholder-shown:text-sm  peer-placeholder-shown:text-blue-gray-500 peer-focus:text-body-small peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-light dark:peer-focus:after:border-primary-dark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
					<span></span>
				</legend>

			</div>
			{(children && openMenu) && <div onClick={() => setOpenMenu(false)}
			                                className={"absolute shadow-elevated-two-light  mt-1 top-[56px] rounded-[4px] z-20 py-2 bg-surface-container-light w-full"}>
				<ul className={"overflow-scroll  max-h-[280px]"}>
					{children}
				</ul>
			</div>}
		</div>
	)
}