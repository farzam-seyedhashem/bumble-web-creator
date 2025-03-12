'use server';
export default async function ButtonComponent({key, item, Style}) {
    // let [Component, setComponent] = useState(item.type)


    return (
        <div className={`w-full flex ${item.justify==="center"?"justify-center":item.justify==="center"?"justify-end":"justify-start"}`}>
            <button id={key} className={`${item.uniqueId}`}>
                {item.value || item.idType}
            </button>
        </div>
    )
}