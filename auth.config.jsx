import bcrypt from "bcryptjs";

import {LoginSchema} from "@/schemas";
import Credentials from "next-auth/providers/credentials"
import {getUserByEmail} from "@/data/user";


//On refait le check schema car sinon on peut bypass la vérication en passant directe par la route api
export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validateFields = LoginSchema.safeParse(credentials)

                if (validateFields.success) {
                    const {email, password} = validateFields.data

                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    )

                    if (passwordsMatch) return user
                }

                return null
            }
        })
    ],
}