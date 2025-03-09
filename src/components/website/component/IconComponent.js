
import Icon from "@m3/assets/icons/Icon";

export default function IconComponent({item, key,Style}) {
    return (
        <>
            <Icon fill={item.isFill ? 1 : 0}  id={key}
                  className={` ${Style[item.uniqueId]}`}>
                {item.value}
            </Icon>
        </>
    )
}