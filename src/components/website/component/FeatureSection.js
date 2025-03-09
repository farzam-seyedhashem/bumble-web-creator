import Icon from "@m3/assets/icons/Icon";

export default function FeatureSection({item}) {
    const featuredSections = item?.featuredSections
    // const options
    const desktopOptions = {...item.desktopOptions}
    const mobileOptions = {...item.mobileOptions}
    const globalOptions = {...item.globalOptions}





    return (
        <>
            <style>
                {`
                .${item.uniqueId}{
                    
                }
                 .${item.uniqueId} .featured-container{
                 border-radius:${globalOptions.cardRounded};
                 background-color:${globalOptions.cardColor};
                    
                }
                .${item.uniqueId} .featured-title{
                    font-size: ${mobileOptions.titleFontSize};
                    font-weight: ${mobileOptions.titlefontWeight};
                    color: ${globalOptions.titleColor};
                    
                }
                .${item.uniqueId} .featured-paragraph{
                    font-size: ${mobileOptions.paragraphFontSize};
                    font-weight: ${mobileOptions.paragraphFontWeight};
                    color: ${globalOptions.paragraphColor};
                }
                .${item.uniqueId} svg.featured-bg-icon{
                     color: ${globalOptions.iconBgColor};
                  
                } 
                .${item.uniqueId} div.featured-bg-icon{
                     background-color: ${globalOptions.iconBgColor};
                  
                }
            
                 .${item.uniqueId} .featured-icon{
                     color: ${globalOptions.iconColor};
                }
                `}
            </style>
            <div className={`relative group/featured-section ${item.uniqueId}`}>
                <div className={`grid grid-cols-${mobileOptions.gridNumber} md:grid-cols-${desktopOptions.gridNumber} gap-4`}>
                    {featuredSections.map((item, index) => globalOptions.cardShape === 1 ? <div key={index}>
                        <div
                             className="featured-container relative group flex rounded-[32px] hover:rounded-2xl transition-all duration-300 ease-in-out py-4 px-8">

                            <dt>
                                <globalOptions.titleType
                                                   className="featured-title mt-4 text-primary-light dark:text-primary-dark mb-2 text-2xl leading-[40px] font-bold">{item.title}</globalOptions.titleType>
                                <p className="featured-paragraph mb-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">

                                    {item.paragraph}

                                </p>
                            </dt>

                            <div
                                className="h-12 w-12 mt-1 mr-1 flex justify-center items-center">
                                <svg width="40px" height="40px" viewBox="0 0 40 40"
                                     fill="none" xmlns="http://www.w3.org/2000/svg" className="clover featured-bg-icon">
                                    <path
                                        d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
                                        fill="currentColor"></path>
                                </svg>
                                <Icon fill={item.icon.isFilled ? 1 : 0} weight={400}
                                      size={24}
                                      className={"featured-icon w-6 h-6 absolute group-hover:scale-110 transition duration-300"}>
                                    {item.icon.name}
                                </Icon>
                            </div>

                        </div>


                    </div> : globalOptions.cardShape === 2 ? <div className={"flex"}>
                        <Icon weight={400} size={24}
                              fill={item.icon.isFilled ? 1 : 0}
                              className={"featured-icon text-primary-light dark:text-primary-dark mr-4"}>
                            {item.icon.name}
                        </Icon>
                        <div>
                            <globalOptions.titleType className={"featured-title font-bold mb-1 text-on-surface-light dark:text-on-surface-dark"}>
                                {item.title}
                            </globalOptions.titleType>
                            <p className={"featured-paragraph text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                {item.paragraph}
                            </p>
                        </div>
                    </div> : <div>
                        <div
                             className={" flex items-center justify-center rounded-[8px] h-[48px] w-[48px] featured-bg-icon"}>
                            <Icon  weight={400} size={24}
                                  fill={item.icon.isFilled ? 1 : 0}
                                  className={"featured-icon text-on-primary-light dark:text-on-primary-dark"}>
                                {item.icon.name}
                            </Icon>
                        </div>
                        <div className={"mt-3"}>
                            <globalOptions.titleType className={"featured-title font-bold mb-1 text-on-surface-light dark:text-on-surface-dark"}>
                                {item.title}
                            </globalOptions.titleType>
                            <p  className={"featured-paragraph text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                {item.paragraph}
                            </p>
                        </div>
                    </div>)}

                </div>

            </div>

        </>
    )
}