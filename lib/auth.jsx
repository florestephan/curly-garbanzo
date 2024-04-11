import {auth} from "@/auth";

//composant réutilisable, permet d'éviter de répéter le session?.user en serverside en utilisaun async await
export const currentUser = async () => {
    const session = await auth()

    return session?.user

}

export const currentRole = async () => {
    const session = await auth()

    return session?.user?.role

}

