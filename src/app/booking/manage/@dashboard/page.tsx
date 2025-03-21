import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import getUserProfile from "@/libs/getUserProfile"
export default async function DashBoardPage(){
    const session = await getServerSession(authOptions)
    if(!session||!session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)
    return(
        <main className="bg-orange-100">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                <tr>
                        <td>Email</td><td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td>Tel</td><td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td>Member Since</td><td>{createdAt.toString()}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}