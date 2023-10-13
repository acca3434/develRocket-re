import Link from "next/link"

interface SideMenuProps {
    item: SideMenuItems
    pathName: string
}

interface SideMenuItems {
    category?: string
    list: ListItem[]
}

interface ListItem {
    label: string
    path: string
}

export const SideMenu: React.FC<SideMenuProps> = ({ item: { list, category }, pathName }) => {
    return (
        <div className="text-white ">
            {category && <div className="py-5 font-bold text-xs ">{category}</div>}
            <ul className="flex flex-col ">
                {list.map((v, i) => (
                    <Link
                        href={v.path}
                        className={`px-7 py-3 text-sm hover:bg-slate-600 rounded-lg ${
                            pathName === v.path ? "bg-slate-800" : ""
                        }`}
                        key={i}
                    >
                        {v.label}
                    </Link>
                ))}
            </ul>
        </div>
    )
}
