import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
function ComponentList({item,sub,isGrid,gridIndex}) {
	const [isOpen, setIsOpen] = useState(false);
	return(
		<div>
			<li>
			<Link href={`#${item.uniqueId}`} style={{paddingLeft:16*sub}} onClick={()=>
				item?.addedItems && setIsOpen(!isOpen)
			} className={"after:inset-0 text-on-surface-light after:absolute relative after:bg-on-surface-light/[8%] hover:after:block after:hidden flex items-center px-4 h-[56px] w-full"}>
				{!isGrid?<Icon weight={500} className={"mr-4"} size={20}>
					{item.icon}
				</Icon>:<Icon weight={500} className={"mr-4"} size={20}>
					{"transition_slide"}
				</Icon>}
				{isGrid?<h3 className={"flex-1  text-body-large "}>
					Column {gridIndex}
				</h3>:<h3 className={"flex-1  text-body-large "}>
					{item.label}
				</h3>}
				{item?.addedItems && <Icon>
					{isOpen?"keyboard_arrow_up":
						"keyboard_arrow_down"}
				</Icon>}

			</Link>
			</li>
			{isOpen && item?.addedItems.map((subItem, index) => (
				<ComponentList gridIndex={index+1} isGrid={item.idType==="grid"} sub={sub+1} key={subItem.uniqueId+"component-list-dialog"} item={subItem}/>
				))}
		</div>
	)
}
export default function PageComponentList({addedItems}) {
	const [isComponentListDialogOpen, setIsComponentListDialogOpen] = useState(false)





		// موقعیت دایالوگ (x, y)
		const [position, setPosition] = useState({ x: 400, y: 300 });
		// وضعیت درگ شدن دایالوگ
		const [isDragging, setIsDragging] = useState(false);
		// آفست: فاصله بین جایی که ماوس کلیک شده و گوشه بالا-چپ دایالوگ
		const offset = useRef({ x: 0, y: 0 });

		// رفرنس به المان دایالوگ برای دسترسی به ابعاد و موقعیت آن
		const dialogRef = useRef(null);

		// تابع مربوط به شروع درگ (وقتی ماوس روی هدر کلیک می‌شه)
		const handleMouseDown = (e) => {
			// فقط با کلیک چپ ماوس فعال شود
			if (e.button !== 0) return;

			setIsDragging(true);

			// محاسبه آفست
			if (dialogRef.current) {
				const dialogRect = dialogRef.current.getBoundingClientRect();
				offset.current = {
					x: e.clientX - dialogRect.left,
					y: e.clientY - dialogRect.top,
				};
			}
		};

		// تابع مربوط به حرکت ماوس (وقتی دایالوگ در حال درگ شدنه)
		const handleMouseMove = (e) => {
			if (!isDragging) return;

			// از requestAnimationFrame برای بهینه‌سازی انیمیشن استفاده می‌کنیم
			// این کار کمک می‌کنه که انیمیشن جابجایی نرم‌تر باشه
			requestAnimationFrame(() => {
				setPosition({
					x: e.clientX - offset.current.x,
					y: e.clientY - offset.current.y,
				});
			});
		};

		// تابع مربوط به پایان درگ (وقتی ماوس رها می‌شه)
		const handleMouseUp = () => {
			setIsDragging(false);
		};

		// برای افزودن Event Listenerها به document
		// این کار باعث می‌شه حتی اگه ماوس از روی دایالوگ هم خارج شد، همچنان بشه دایالوگ رو رها کرد
		useEffect(() => {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);

			// پاکسازی Event Listenerها هنگام Unmount شدن کامپوننت
			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
				document.removeEventListener('mouseup', handleMouseUp);
			};
		}, [isDragging]);
	return(
		<>
		<IconButton onClick={() => setIsComponentListDialogOpen(true)}>
			layers
		</IconButton>
		{isComponentListDialogOpen && <div  ref={dialogRef}
		                                    style={{
			                                    left: position.x,
			                                    top: position.y,
			                                  // cursor: isDragging ? 'grabbing' : 'grab', // تغییر شکل ماوس هنگام درگ
			                                  //   zIndex: 1000 // برای اینکه دایالوگ روی بقیه المان‌ها قرار بگیره
		                                    }}
			className={" border border-outline-variant-light   fixed z-999 w-[300px] rounded-[8px] h-[400px] bg-surface-container-light dark:bg-surface-container-dark"}>
			<div className={"flex items-center bg-surface-container-highest-light py-1 px-2"}>
				<IconButton onMouseDown={handleMouseDown}>
					drag_handle
				</IconButton>
				<h3 className={"flex-1 ml-1 text-on-surface-light text-title-small "}>
					Page Components List
				</h3>
				<IconButton onClick={()=>setIsComponentListDialogOpen(false)}>
					close
				</IconButton>
			</div>
			<ul className={"py-2 h-[calc(100%_-_56px)] overflow-scroll"}>
				{
					addedItems.map((item, index) => (
						<ComponentList sub={1} key={item.uniqueId+"component-list-dialog"} item={item}/>
					))
				}
			</ul>
		</div>}

	</>
)
}