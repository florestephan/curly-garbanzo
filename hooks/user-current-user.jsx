import {useSession} from "next-auth/react";

//Permet déviter de devoir rajouter le .data?.user a chaque fois en client side via hooks
export const userCurrentUser = () => {
    const session = useSession()
    return session.data?.user
}