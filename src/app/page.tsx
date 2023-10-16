import { cookies } from "next/headers"
const Home = () => {
    const cookieStore = cookies()

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Home
