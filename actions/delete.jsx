"use server"

import {getUserById} from "@/data/user";
import {db} from "@/lib/db";

export const deleteItem = async (id) => {

    const existingUser = await getUserById(id)

    if (!existingUser) {
        return {error: "Utilisateur déjà supprimé"}
    }

    //delete user

    await db.user.delete({
        where: {id: existingUser.id}
    })

    return {success: "Utilisateur supprimé ! "}

}