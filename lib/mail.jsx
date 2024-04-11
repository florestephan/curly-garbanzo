import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendPasswordResetEmail = async (email, token) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`

    await resend.emails.send({
        from: "onboarding@resend.dev", // a changer en prod pour avoir le bon domaine
        to: email,
        subject: "Réinitialiser votre mot de passe",
        html: `<p>Cliquez <a href="${resetLink}">ici</a> pour réitinialiser votre mot de passe.</p>`
    })

}