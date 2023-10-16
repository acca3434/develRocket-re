interface TableComponentProps {
    headers: any
    rows: any[]
    widths: string[]
}

const TableComponent: React.FC<TableComponentProps> = ({ headers, rows, widths }) => {
    const headersKey = Object.keys(headers)
    return (
        <table className="w-full text-center">
            <thead className="w-full ">
                <tr className="w-full  bg-[#F2F5F9] rounded-md">
                    {headersKey.map((key, i) => (
                        <th key={i} className={`${widths[i] ? widths[i] : ""} py-2`}>
                            {headers[key]}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="w-full">
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="w-full border-y border-gray-300 text-[14px]">
                        {headersKey.map((key, colIndex) => (
                            <td key={colIndex} className={`${widths[colIndex] ? widths[colIndex] : ""} py-2`}>
                                {row[key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableComponent
