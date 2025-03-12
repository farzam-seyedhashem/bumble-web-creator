

export default function Paragraph({Style,item,key}) {

    return (
        <>
            {/*<style>*/}
            {/*    {`*/}
            {/*   ${item.className}*/}
            {/*    `}*/}
            {/*</style>*/}
            <p id={key} className={item.uniqueId}>
                {item.value || item.idType}
            </p>


        </>
    )
}