"use client"

import { Line } from "@/app/_components/Line"
import Image from "next/image"
import Link from "next/link"
import { SideMenu } from "./content"
import { usePathname } from "next/navigation"
import {
    menuItems,
    courseInfoItems,
    courseManagementItems,
    contentManagementItems,
    jobManagement,
} from "./content/items"

export default function SideBar() {
    const pathname = usePathname()
    const allMenuItem = [menuItems, courseInfoItems, courseManagementItems, contentManagementItems, jobManagement]

    return (
        <div className="h-screen w-[290px] flex-shrink-0 bg-[#11192a]">
            <div className="p-5 pt-7">
                <Link href={"/dashboards/crypto"}>
                    <Image src="/block_logo.png" alt="Develrocket LOGO" width={300} height={200} />
                </Link>
                <Line />
                {allMenuItem.map((v, i) => (
                    <SideMenu key={i} item={v} pathName={pathname} />
                ))}
            </div>
        </div>
    )
}
