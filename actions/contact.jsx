"use server"

import {Resend} from 'resend'
import {ResetSchema} from "@/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contact = async (values) => {

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev", // a changer en prod pour avoir le bon domaine
            to: values.email,
            subject: "Contact",
            html: `<p>Name : ${values.fullName}</p><p>Phone : ${values.phone}</p><p>Message : ${values.message}</p><p>Job : ${values.profession}</p><p>Entreprise : ${values.company}</p>`
        })

        return {success: "Email envoyé !"}
    } catch (error) {
        return {error: "Email error"}
    }
}