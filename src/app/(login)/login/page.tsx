import { cookies } from "next/headers"
import LoginForm from "./LoginForm"

export default function Login() {
    // console.log(cookies(), 11)
    return (
        <>
            <LoginForm />
        </>
    )
}
