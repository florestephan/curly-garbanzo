// Verification on front and back via ZOD
import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email non valide"
    }),
    password: z.string().min(1, {
        message: "Mot de passe requis"
    })
})


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email requis"
    }),
    password: z.string().min(6, {
        message: "6 characters minimum requis"
    }),

    name: z.string().min(1, {
        message: "Nom requis"
    })
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email non valide"
    }),
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "6 characters minimum requis"
    }),
})

export const contactFormSchema = z.object({
    email: z.string().email("Invalid email address").min(1, {message: "Email is required"}),
    message: z.string().min(1, {message: "Message is required"}),
    fullName: z.string().min(1, {message: "Name is required"}),
    phone: z.string().min(1, {message: "Phone is required"}),
    profession: z.string().optional(),
    company: z.string().optional(),
    gdprConsent: z.boolean().refine(val => val, {message: "You must agree to the privacy policy"}),
});