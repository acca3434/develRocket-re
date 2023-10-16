import TableComponent from "../../(ui)/table"
import { LinkBtn } from "./linkBtn"
interface BoxWrapProps {
    title: string
    footer: boolean
    footerItem?: React.ReactNode
    href?: string
    linkLabel?: string
    children?: React.ReactNode
}

export const BoxWrap: React.FC<BoxWrapProps> = ({ title, footer, href, linkLabel, children }) => {
    return (
        <div className="w-full h-full rounded-[15px] bg-white shadow-[0_2px_15px_0_#22335410] flex flex-col justify-between ">
            <div className="h-[60px] min-h-[60px] w-full text-[20px] font-bold text-[#223354] px-[30px] flex items-center border-b-[1px] justify-between">
                {title}
                {href && linkLabel && <LinkBtn href={href} label={linkLabel} />}
            </div>
            <div className="h-full w-full p-[20px]">{children}</div>
            {footer && <div className="h-[80px] flex-shrink-0"></div>}
        </div>
    )
}
