interface PageWrapProps {
    children: React.ReactNode
}
export const PageWrap: React.FC<PageWrapProps> = ({ children }) => {
    return <div className="p-[30px] h-full bg-[#F2F5F9] overflow-scroll">{children}</div>
}
