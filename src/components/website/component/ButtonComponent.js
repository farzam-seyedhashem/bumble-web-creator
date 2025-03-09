'use server';
export default async function ButtonComponent({key, item, Style}) {
    // let [Component, setComponent] = useState(item.type)


    return (
        <>
            <button id={key} className={`${item.uniqueId}`}>
                {item.value || item.idType}
            </button>
        </>
    )
}