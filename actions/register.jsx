"use server"

import bcrypt from "bcrypt"
import {RegisterSchema} from "@/schemas";
import {db} from "@/lib/db";
import {getUserByEmail} from "@/data/user";

export const register = async (values) => {
    //On vérifie en back les datas
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return {error: "Champs invalides"}
    }

    // crypt mdp
    const {email, password, name} = validatedFields.data
    const hashPassword = await bcrypt.hash(password, 10)

    //check if email is talken in folder data
    const existingUser = await getUserByEmail(email)


    if (existingUser) {
        return {error: "Email déjà utilisé"}
    }

    //create user
    await db.user.create({
        data: {
            name,
            email,
            password: hashPassword
        }
    })

    // todo : send verification token email

    return {success: "Compte crée !"}
}