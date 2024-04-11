import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
import {db} from "@/lib/db";
import {getUserById} from "@/data/user";

//callbacks permet de

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    callbacks: {

        //permet de passer les datas et champs de la db au token JWT(sessions de connexion) / extend session inside of nextauth
        async session({token, session}) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.role && session.user) {
                session.user.role = token.role
            }

            return session
        },
        async jwt({token}) {
            if (!token.sub) return token

            const existingUser = await getUserById(token.sub)

            if (!existingUser) return token

            //asign role to token
            token.role = existingUser.role


            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig
})