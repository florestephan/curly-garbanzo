import {db} from "@/lib/db"

export const getPasswordResetByToken = async (token) => {

    try {
        const PasswordResetToken = await db.PasswordResetToken.findUnique({
            where: {token}
        })

        return PasswordResetToken
    } catch {
        return null
    }
}

export const getPasswordResetByEmail = async (token) => {

    try {
        const PasswordResetToken = await db.PasswordResetToken.findFirst({
            where: {email }
        })

        return PasswordResetToken
    } catch {
        return null
    }
}