

export default function Paragraph({Style,item,key}) {

    return (
        <>
            <p id={key} className={Style[item.uniqueId]}>
                {item.value || item.idType}
            </p>


        </>
    )
}