"use client"

import axios from "axios"
import { FormEvent, FormEventHandler } from "react"

export const helloCognito = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = (e.currentTarget[0] as HTMLInputElement).value
    const pw = (e.currentTarget[1] as HTMLInputElement).value
    const data = await axios.post(`/api/signup`, { id, pw })
    console.log(data, "회원가입 data")
    // const paginator = paginateListUserPools({ client }, {})
    // const userPoolNames = []
    // for await (const page of paginator) {
    //     const names = page.UserPools.map((pool) => pool.Name)
    //     userPoolNames.push(...names)
    // }
    // console.log("User pool names: ")
    // console.log(userPoolNames.join("\n"))
    // return userPoolNames
}

export const init = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = (e.currentTarget[0] as HTMLInputElement).value
    const pw = (e.currentTarget[1] as HTMLInputElement).value
    const data = await axios.post(`/api/login`, { id, pw })
    console.log(data, "로그인 data")
}
export default function LoginForm() {
    return (
        <>
            <form onSubmit={helloCognito}>
                <input type="text" className="bg-[#888]" />
                <input type="password" className="bg-[#555]" />
                <button>회원가입</button>
            </form>
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={init}>
                <input type="text" className="bg-[#888]" />
                <input type="password" className="bg-[#555]" />
                <button>로그인</button>
            </form>
        </>
    )
}
