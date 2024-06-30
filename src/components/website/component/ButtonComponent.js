'use server';
export default async function ButtonComponent({key, item, Style}) {
    // let [Component, setComponent] = useState(item.type)


    return (
        <>
            <button id={key} className={Style[item.uniqueId]}>
                {item.value || item.idType}
            </button>
        </>
    )
}