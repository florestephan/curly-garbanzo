"use server"


import {ResetSchema} from "@/schemas";
import {getUserByEmail} from "@/data/user";
import {sendPasswordResetEmail} from "@/lib/mail";
import {generatePasswordResetToken} from "@/lib/tokens";


export const reset = async (values) => {
    const validateFields = ResetSchema.safeParse(values)

    if (!validateFields.success) {
        return {error: "Email invalide"}
    }

    const {email} = validateFields.data
    const existingUser = await getUserByEmail(email)

    if (!existingUser) {
        return {error: "L'utilisateur n'existe pas"}
    }

    //TODO : generate token
    const passwordResetToken = await generatePasswordResetToken(email)
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    )

    return {success: "Email envoyé !"}
}