'use client'
import grapesjs from 'grapesjs';
import {useEffect} from "react";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        grapesjs.init({
            // Indicate where to init the editor. You can also pass an HTMLElement
            container: '#gjs',
            // Get the content for the canvas directly from the element
            // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
            fromElement: true,
            // Size of the editor
            height: '100vh',
            width: '100%',
            // Disable the storage manager for the moment
            storageManager: false,
            // Avoid any default panel
            panels: {defaults: []},
            styleManager: {
                sectors: [
                    {
                        name: 'First sector',
                        properties: [
                            {
                                // Default options
                                // id: 'padding', // The id of the property, if missing, will be the same as `property` value
                                type: 'number',
                                label: 'Padding', // Label for the property
                                property: 'padding', // CSS property to change
                                default: '0', // Default value to display
                                // Additonal `number` options
                                units: ['px', '%'], // Units (available only for the 'number' type)
                                min: 0, // Min value (available only for the 'number' type)
                            }
                        ],
                        // id: 'first-sector', // Id generated from the name
                        // open: true, // The sector is open by default
                    },
                    {
                        open: false, // render it closed by default
                        name: 'Second sector',
                        properties: [],
                    },
                ],
            },
            blockManager: {
                appendTo: '#blocks',
                blocks: [
                    {
                        id: 'section', // id is mandatory
                        label: '<b>Section</b>', // You can use HTML/SVG inside labels
                        attributes: { class:'gjs-block-section' },
                        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
                    }, {
                        id: 'text',
                        label: 'Text',
                        content: '<div data-gjs-type="text">Insert your text here</div>',
                    }, {
                        id: 'image',
                        label: 'Image',
                        // Select the component once it's dropped
                        select: true,
                        // You can pass components as a JSON instead of a simple HTML string,
                        // in this case we also use a defined component type `image`
                        content: { type: 'image' },
                        // This triggers `active` event on dropped components and the `image`
                        // reacts by opening the AssetManager
                        activate: true,
                    }
                ]
            },
        });
    },[])

    return (
        <>
            <div id="gjs">
                <h1>Hello World Component!</h1>
            </div>
            <div className={"absolute top-0 w-full h-[40px]"} id="blocks"></div>
        </>
    )
}