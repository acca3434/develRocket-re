"use client"

import { Arrow } from "../../(icon)/Arrow"
import { SelectComp } from "./selectComp"

export const PageNation = () => {
    return (
        <div className="flex justify-end items-center h-[50px]">
            <div className="mr-[10px]">Rows per page</div>
            <SelectComp />
            <div className="mr-[10px]">{"1-2 of 2"}</div>
            <div className="flex justify-center items-center">
                <Arrow rotate={"90"} color={"#223354"} />
                <Arrow rotate={"270"} color={"#223354"} onClick={() => console.log(1)} />
            </div>
        </div>
    )
}
