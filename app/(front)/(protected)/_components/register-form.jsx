"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {LoginSchema, RegisterSchema} from "@/schemas";
import {CardWrapper} from "@/components/auth/card-wrapper";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/auth/form-error";
import {FormSuccess} from "@/components/auth/form-success";
import {register} from "@/actions/register";
import {useState, useTransition} from "react";

export const RegisterForm = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isPending, startTransition] = useTransition()

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    })

    const onSubmit = (values) => {
        //appel serveur action pass data from client to server
//start transition permet de définit quand quelque chose à ended
        setError("")
        setSuccess("")

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    //CREATION DUN COMPTE

    return (
        <CardWrapper
            headerLabel="Création d'un compte"
            backUrl="/auth/login">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input disabled={isPending} {...field}
                                               placeholder="John Doe"/>
                                    </FormControl>
                                    <FormMessage className="font-normal"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input disabled={isPending} {...field}
                                               placeholder="mail@example.com"
                                               type="email"/>
                                    </FormControl>
                                    <FormMessage className="font-normal"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Mot de passe</FormLabel>
                                    <FormControl>
                                        <Input autoComplete="current" disabled={isPending} {...field}
                                               placeholder="*******" type="password"/>
                                    </FormControl>
                                    <FormMessage className="font-normal"/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error}/>
                    <FormSuccess message={success}/>

                    <Button disabled={isPending} type="submit" className="w-full font-normal">
                        Créer un compte
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}