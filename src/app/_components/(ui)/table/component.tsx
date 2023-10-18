interface TableComponent {
    children: React.ReactNode
}
interface TableItemProps extends TableComponent {
    header: boolean
    width: string
}

export const Table: React.FC<TableComponent> = ({ children }) => {
    return <table className="w-full text-center">{children}</table>
}

export const TableHeader: React.FC<TableComponent> = ({ children }) => {
    return (
        <thead className="w-full">
            <tr className="w-full  bg-[#F2F5F9] rounded-md">{children}</tr>
        </thead>
    )
}

export const TableBody: React.FC<TableComponent> = ({ children }) => {
    return <tbody className="w-full">{children}</tbody>
}
export const TableBodyRow: React.FC<TableComponent> = ({ children }) => {
    return <tr className="w-full border-y border-gray-300 text-[14px]">{children}</tr>
}

export const TableItem: React.FC<TableItemProps> = ({ header, width, children }) => {
    return header === true ? (
        <th className={`py-2 ${width ? width : ""}`}>{children}</th>
    ) : (
        <td className={`py-2 ${width ? width : ""}`}>{children}</td>
    )
}

// 사용 예시
// <Table>
//     <TableHeader>
//         <TableItem header={true} width={"w-1/2"}>
//             {headerDATA}
//         </TableItem>
//         <TableItem header={true} width={"w-1/2"}>
//             {headerDATA}
//         </TableItem>
//         <TableItem header={true} width={"w-1/2"}>
//             {headerDATA}
//         </TableItem>
//     </TableHeader>
//     <TableBody>
//         <TableBodyRow>
//             <TableItem header={false} width={"w-1/2"}>
//                 {bodyDATA}
//             </TableItem>
//             <TableItem header={false} width={"w-1/2"}>
//                 {bodyDATA}
//             </TableItem>
//             <TableItem header={false} width={"w-1/2"}>
//                 {bodyDATA}
//             </TableItem>
//             <TableItem header={false} width={"w-1/2"}>
//                 {bodyDATA}
//             </TableItem>
//         </TableBodyRow>
//     </TableBody>
// </Table>
