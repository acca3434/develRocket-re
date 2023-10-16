import { Arrow } from "@/app/_components/(icon)/Arrow"
import Link from "next/link"
interface LinkBtnProps {
    href: string
    label: string
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ href, label }) => {
    return (
        <Link href={href} className="text-[14px] text-[#3A3A3A] flex justify-center items-center">
            {label}
            <Arrow rotate={"-90"} color={"#3A3A3A"} />
        </Link>
    )
}
