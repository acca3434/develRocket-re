import Loading from "@/app/loading"

const List = ({ params: { id } }: { params: { id: string | string[] } }) => {
    const evals = id[1] === "1"

    return (
        // <div className="w-screen h-screen">
        //     <div className="flex justify-center items-center w-full h-full">{evals ? "list" : "list2"}</div>
        // </div>
        <Loading />
    )
}
export default List
