"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {NewPasswordSchema} from "@/schemas";
import {CardWrapper} from "@/components/auth/card-wrapper";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/auth/form-error";
import {FormSuccess} from "@/components/auth/form-success";
import {useState, useTransition} from "react";
import {useSearchParams} from "next/navigation";
import {newPassword} from "@/actions/new-password";

export const NewPasswordForm = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isPending, startTransition] = useTransition()

    const form = useForm({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    })

    const onSubmit = (values) => {
        //appel serveur action pass data from client to server
//start transition permet de définit quand quelque chose à ended
        setError("")
        setSuccess("")

        startTransition(() => {
            newPassword(values, token)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Entrez un nouveau mot de passe"
            backUrl="/auth/login">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Mot de passe</FormLabel>
                                    <FormControl>
                                        <Input disabled={isPending} {...field} placeholder="******"
                                               type="password"/>
                                    </FormControl>
                                    <FormMessage className="font-normal"/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error}/>
                    <FormSuccess message={success}/>

                    <Button disabled={isPending} type="submit" className="w-full font-normal">
                        Réinitialiser mon mot de passe
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}