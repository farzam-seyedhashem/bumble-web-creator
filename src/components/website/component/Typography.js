'use server'
export default async function Typography({item, key,Style}) {
    const Component = item.type
    return (
        <>

            <Component id={key} className={Style[item.uniqueId]}>
                {item.value || item.idType}
            </Component>

        </>
    )
}