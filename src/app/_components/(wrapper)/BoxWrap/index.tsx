import TableComponent from "../../(ui)/table"
import { LinkBtn } from "./linkBtn"
interface BoxWrapFooterTrue {
    title: string
    footer: true
    footerItem?: React.ReactNode
    href?: string
    linkLabel?: string
    children?: React.ReactNode
}
interface BoxWrapFooterFasle {
    title: string
    footer: false
    href?: string
    linkLabel?: string
    children?: React.ReactNode
}
type BoxWrapProps = BoxWrapFooterTrue | BoxWrapFooterFasle

export const BoxWrap: React.FC<BoxWrapProps> = (props) => {
    if (props.footer && !props.footerItem) throw new Error("footerItem이 필요합니다.")
    return (
        <div className="w-full h-full rounded-[15px] bg-white shadow-[0_2px_15px_0_#22335410] flex flex-col justify-between ">
            <div className="h-[60px] min-h-[60px] w-full text-[20px] font-bold text-[#223354] px-[30px] flex items-center border-b-[1px] justify-between">
                {props.title}
                {props.href && props.linkLabel && <LinkBtn href={props.href} label={props.linkLabel} />}
            </div>
            <div className="h-full w-full p-[20px]">{props.children}</div>
            {props.footer && (
                <div className="h-[80px] max-h-[80px] flex-shrink-0 flex justify-center items-center">
                    {props.footerItem}
                </div>
            )}
        </div>
    )
}
