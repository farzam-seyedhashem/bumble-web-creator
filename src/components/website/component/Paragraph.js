

export default function Paragraph({Style,item}) {

    return (
        <>
            {/*<style>*/}
            {/*    {`*/}
            {/*   ${item.className}*/}
            {/*    `}*/}
            {/*</style>*/}
            <p id={item.uniqueId} className={item.uniqueId}>
                {item.value || item.idType}
            </p>


        </>
    )
}