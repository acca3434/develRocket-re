import { cookies } from "next/headers"
import { request } from "./_utils/request"
const Home = () => {
    const cookieStore = cookies()

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Home
