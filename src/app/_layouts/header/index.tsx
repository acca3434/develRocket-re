"use client"
import { Arrow } from "@/app/_components/(icon)/Arrow"
import { HeaderDropDown } from "./content"
import { community, satisfactionSurvey, studentManagement, studyManagement, trainingLog } from "./content/items"
import { useState } from "react"

export default function Header() {
    const [showDropDown, setShowDropDown] = useState<number | null>(null)

    const items = [studyManagement, studentManagement, trainingLog, satisfactionSurvey, community]

    return (
        <>
            <div className="w-full h-[80px] sticky top-0 bg-white flex justify-between shadow-[0_0_15px_0px_#00000026]">
                <div className="flex items-center ml-[50px] bg-white">
                    {items.map((v, i) => (
                        <div
                            key={i}
                            className={
                                "p-2 px-3 text-[14px] leading-normal text-[#6E759F] hover:text-[#223354] flex justify-center items-center hover:cursor-pointer relative before:h-[4px] before:w-[22px] hover:before:opacity-100 before:invisible hover:before:visible before:block before:absolute hover:before:bottom-[0px] before:bottom-[-10px] before:left-[12px] before:transition-all before:duration-200 before:ease-in-out before:rounded-[12px] before:bg-[rgb(85,105,255)] before:opacity-0"
                            }
                            onClick={() => setShowDropDown(showDropDown === i ? null : i)}
                        >
                            {v.category}
                            <Arrow rotate={"0"} color={"#6E759F"} />
                            {showDropDown === i && <HeaderDropDown item={v.list} />}
                        </div>
                    ))}
                </div>
                <div>123</div>
            </div>
        </>
    )
}
