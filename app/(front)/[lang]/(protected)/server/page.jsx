import {currentUser} from "@/lib/auth";
import {UserInfo} from "@/components/auth/user-info";

const ServerPage = async () => {
    const user = await currentUser()

    return (
        <UserInfo user={user} label={"Informations du compte"}/>
    )
}

export default ServerPage