"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {LoginSchema} from "@/schemas";
import {CardWrapper} from "@/components/auth/card-wrapper";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/auth/form-error";
import {FormSuccess} from "@/components/auth/form-success";
import {login} from "@/actions/login";
import {useState, useTransition} from "react";
import Link from "next/link";
import Cta from "@/components/Cta";

export const LoginForm = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isPending, startTransition] = useTransition()

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (values) => {
        //appel serveur action pass data from client to server
        //start transition permet de définit quand quelque chose à ended

        setError("")
        setSuccess("")

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="CONNEXION ESPACE PRO"
            backUrl="/">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    {/*<FormLabel>Email</FormLabel>*/}
                                    <FormControl>
                                        <Input disabled={isPending} {...field} placeholder="mail@example.com"
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
                                    {/*<FormLabel>Mot de passe</FormLabel>*/}
                                    <FormControl>
                                        <Input autoComplete="current-password" disabled={isPending} {...field}
                                               placeholder="*******" type="password"/>
                                    </FormControl>
                                    <FormMessage className="font-normal"/>

                                    <FormError message={error}/>
                                    <FormSuccess message={success}/>

                                    <div className="flex pt-5 items-center justify-end gap-x-10">
                                        <Button
                                            size="sm"
                                            variant="link"
                                            asChild
                                            className="px-0 font-normal">
                                            <Link className="font-robotoFlex font-normal" href="/auth/reset">
                                                MOT DE PASSE OUBLIÉ
                                            </Link>
                                        </Button>

                                        <div className="[&>button>span:last-child]:bg-GreyM cta">

                                            <button disabled={isPending} type="submit"
                                                    className="group inline-flex w-fit items-center relative text-cta border h-12 px-8 border-GreyBlue">
                                                LOGIN
                                                <span className="w-5 border border-GreyBlue absolute"></span>
                                                <span className="w-5 border border-GreyBlue absolute"></span>
                                                <span className="w-5 border border-GreyBlue absolute"></span>
                                                <span className="w-5 border border-GreyBlue absolute"></span>
                                                <span
                                                    className={`absolute opacity-0 m-1 -z-10 transition duration-200 inset-0 group-hover:opacity-100`}></span>
                                            </button>

                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </CardWrapper>
    )
}