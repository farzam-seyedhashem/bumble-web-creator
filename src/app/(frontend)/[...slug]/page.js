'use strict';

import {revalidateTag} from "next/cache";
import {NextRequest, NextResponse} from "next/server";
import {notFound} from "next/navigation";
import WebComponentGenerator from "@website/WebComponentGenerator";
import React from "react";

async function getData(slug) {
    'use server'
    revalidateTag("page")
    const res = await fetch(`http://localhost:3000/api/page/${slug}`, {next: {tags: ['pages']}})
    console.log("-------------",await res)
    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }
        throw new Error('Failed to fetch data')
    }
    // return res.json()
    return res.json()
}

export default async function Page({params}) {
    const slug = params.slug
    const data = await getData(slug)
    const Style = await import(`@/app/(styles)/${slug}.module.css`)
    console.log(data.content)
    return (
        <div>
            {JSON.parse(data.content).map((item,index) =>
                <WebComponentGenerator Style={Style} key={index} item={item}/>
            )}
        </div>
    )
}