import {useSession} from "next-auth/react";

//permet de recup en client side les roles des users
export const useCurrentRole = () => {
    const session = useSession()
    return session.data?.user?.role
}