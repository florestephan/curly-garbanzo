"use server"

import {LoginSchema} from "@/schemas";
import {signIn} from "@/auth";
import {DEFAULT_LOGIN_REDIRECT} from "@/route";
import {AuthError} from "next-auth";

export const login = async (values) => {
    //On vérifie en back les datas
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return {error: "Champs invalides"}
    }

    // return {success: "Champs valides"}
    const {email, password} = validatedFields.data

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Identifiants invaldies"}
                default:
                    return {error: "Un problème est survenu"}
            }
        }

        throw error
    }
}