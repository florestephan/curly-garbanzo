"use server"

import {db} from "@/lib/db";
import {NewPasswordSchema} from "@/schemas";
import {getPasswordResetByToken} from "@/data/password-reset-token";
import {getUserByEmail} from "@/data/user";
import bcrypt from "bcryptjs";

export const newPassword = async (values, token) => {

    if (!token) {
        return {error: "Token manquant"}
    }

    const validateFields = NewPasswordSchema.safeParse(values)

    if (!validateFields.success) {
        return {error: "Champs invalides !"}
    }

    const {password} = validateFields.data
    const existingToken = await getPasswordResetByToken(token)

    if (!existingToken) {
        return {error: "Token invalide"}
    }

    //if expired
    const hasExpired = new Date(existingToken.expires) < new Date()

    if (hasExpired) {
        return {error: "Le token à expiré"}
    }

    const existingUser = await getUserByEmail(existingToken.email)
    if (!existingUser) {
        return {error: "L'email n'existe pas"}
    }

    //hash password

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.update({
        where: {id: existingUser.id},
        data: {password: hashedPassword}
    })

    await db.PasswordResetToken.delete({
        where: {id: existingToken.id}
    })

    return {success: "Mot de passe mis à jour"}


}