
export default function ButtonComponent({ item, Style}) {
    // let [Component, setComponent] = useState(item.type)


    return (
        <div className={`w-full flex ${item.justify==="center"?"justify-center":item.justify==="center"?"justify-end":"justify-start"}`}>
            <button id={item.uniqueId} className={`${item.uniqueId}`}>
                {item.value || item.idType}
            </button>
        </div>
    )
}