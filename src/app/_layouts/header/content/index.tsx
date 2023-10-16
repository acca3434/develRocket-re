import { ListItem } from "../../sidebar/content"

interface HeaderDropDownProps {
    item: any[]
}

export const HeaderDropDown: React.FC<HeaderDropDownProps> = ({ item }) => {
    return (
        <div className="absolute top-[40px] before:w-full before:h-full before:backdrop-blur-[2px] before:fixed before:top-0 before:left-0 before:bg-opacity-20 before:bg-transparent before:z-20 before:content-['']">
            <div className="p-[10px] relative flex flex-col  bg-white z-20 shadow-lg rounded-[10px]">
                {item.map((v, i) => (
                    <div
                        className="w-[120px] h-[40px] text-[14px] text-[#223354b2] hover:text-[#223354] flex justify-center items-center hover:bg-[#e5e8ff66]"
                        key={i}
                    >
                        {v.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
