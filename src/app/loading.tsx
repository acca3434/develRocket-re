"use client"
import Image from "next/image"

const Loading = () => {
    return (
        <div className="relative w-screen h-screen flex justify-center items-center scale-150 bg-black">
            <Image
                className="absolute z-10 mb-[100px] w-[79px] animate-floating"
                src="/img/rocket_01.png"
                alt=""
                width={79}
                height={79}
            />
            <Image className="absolute w-[90px]" src="/img/rocket_02.png" alt="" width={90} height={90} />
            <h1 className="absolute text-white font-bol mt-[150px]">정보를 불러오는 중입니다...</h1>
        </div>
    )
}

export default Loading
