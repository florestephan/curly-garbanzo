"use server"

import {currentRole} from "@/lib/auth";
import {UserRole} from "@prisma/client";
import {getAllUser} from "@/data/user";

export const admin = async () => {
    const role = await currentRole()

    if (role === UserRole.ADMIN) {
        return {success: "Autorisé"}
    }

    return {error: "Refusé"}
}

export const AllUsers = async ()=>{
    const users = await getAllUser()
    return users
}