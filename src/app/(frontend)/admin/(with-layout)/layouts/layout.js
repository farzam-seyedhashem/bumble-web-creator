'use strict';
import React from "react";
import PageTemplateSegmentedButton from "@admin/admin-panel/pages/PageTemplateSegmentButton";
export default async function Layout({params,children}) {
    return (
        <>

            <div className={"min-h-screen border-l border-outline-variant-light dark:border-outline-variant-dark"}>
                <div className={"border-b border-outline-light container mx-auto py-6 "}>
                    <h1 className={"text-display-small text-on-surface-light dark:text-on-surface-dark font-black"}>
                        Pages & Templates
                    </h1>
                    <div className={"flex justify-end py-2 mt-2"}>
                      <PageTemplateSegmentedButton/>
                    </div>
                </div>
                {children}

            </div>
        </>

    )
}