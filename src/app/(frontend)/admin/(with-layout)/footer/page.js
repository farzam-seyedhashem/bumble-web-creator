'use strict';
import React from "react";
// import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import PageList from "@admin/admin-panel/pages/PageList";
// import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import Link from "next/link";
import MenuEditor from "@admin/admin-panel/pages/MenuEditor";
import InventoryEditor from "@admin/admin-panel/pages/InventoryEditor";
import {getBySlug} from "@controller/PageController";
import PostEditor from "@admin/admin-panel/pages/PostEditor";
import FooterEditor from "@admin/admin-panel/pages/FooterEditor";
import TemplateList from "@admin/admin-panel/pages/TemplateList";

async function getData(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/page', {next: {tags: ['pages']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()

}
async function getTemplates() {
    'use server'
    const res = await fetch('http://localhost:3000/api/template', {next: {tags: ['template']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function getSiteSettingData(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/site-setting', {next: {tags: ['site-setting']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function getMenu(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/menu', {next: {tags: ['menu']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function getFooter(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/footer', {next: {tags: ['footer']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
async function getInventoryPage(slug) {
    'use server'
    const res = await fetch('http://localhost:3000/api/inventory-page', {next: {tags: ['inventory-page']}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Page() {
    const siteSetting = await getSiteSettingData();
    const footer = await getFooter();

    return (
        <>

            <div className={"min-h-screen border-l border-outline-variant-light dark:border-outline-variant-dark"}>

                <FooterEditor footerSetting={footer} siteSetting={siteSetting}/>

            </div>
        </>

    )
}