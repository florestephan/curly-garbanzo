import {v4 as uuidv4} from "uuid"

import {getPasswordResetByEmail} from "@/data/password-reset-token";
import {db} from "@/lib/db";

export const generatePasswordResetToken = async (email) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000) // Expire in 1 hour

    const existingToken = await getPasswordResetByEmail(email)

    if (existingToken) {
        await db.PasswordResetToken.delete({
            where: {id: existingToken.id}
        })
    }

    const passwordResetToken = await db.PasswordResetToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return passwordResetToken

}