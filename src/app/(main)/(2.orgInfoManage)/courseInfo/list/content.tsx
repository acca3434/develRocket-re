"use client"

import { PaperManage } from "@/app/_components/(icon)/paperManage"
import { priceToString } from "@/app/_utils/priceFn"
import Link from "next/link"

interface TableComponentProps {
    headers: any
    rows: any[]
    widths: string[]
}

const CourseInfoTable: React.FC<TableComponentProps> = ({ headers, rows, widths }) => {
    const headersKey = Object.keys(headers)

    return (
        <table className="w-full text-center text-[14px]">
            <thead className="w-full ">
                <tr className="w-full  bg-[#F2F5F9] rounded-md h-[30px]">
                    {headersKey.map((key, i) => (
                        <th key={i} className={`${widths[i] ? widths[i] : ""} py-1`}>
                            {headers[key]}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="w-full">
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="w-full border-y border-gray-300">
                        {headersKey.map((key, colIndex) =>
                            key !== "manageMenu" ? (
                                <td key={colIndex} className={`${widths[colIndex] ? widths[colIndex] : ""} py-1`}>
                                    {key === "coursePrice" ? priceToString(row[key]) : row[key]}
                                </td>
                            ) : (
                                <td
                                    key={colIndex}
                                    className={`${
                                        widths[colIndex] ? widths[colIndex] : ""
                                    } py-1 flex justify-center items-center`}
                                >
                                    <Link href={row["manageMenu"]}>
                                        <PaperManage size="25" />
                                    </Link>
                                </td>
                            )
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CourseInfoTable
