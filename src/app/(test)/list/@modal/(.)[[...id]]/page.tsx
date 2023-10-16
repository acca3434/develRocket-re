"use client"
import { useParams } from "next/navigation"
import List from "../../[[...id]]/page"

const ListModal = () => {
    const { id } = useParams()
    return (
        <>
            <List params={{ id }} />
        </>
    )
}

export default ListModal
