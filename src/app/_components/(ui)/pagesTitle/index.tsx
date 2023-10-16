interface PagesTitleProps {
    title: string
}

export const PagesTitle: React.FC<PagesTitleProps> = ({ title }) => {
    return (
        <div
            className={`h-[80px] pl-[60px] flex items-center font-bold text-[24px] bg-[#F9FAFC] shadow-[0_0_10px_0_#00000019;]`}
        >
            {title}
        </div>
    )
}
