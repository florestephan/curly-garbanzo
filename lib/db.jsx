import {PrismaClient} from '@prisma/client'

//Pour le dev mode sinon on s'expose a des bugs
export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db