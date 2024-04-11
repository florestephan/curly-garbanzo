"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {ResetSchema} from "@/schemas";
import {CardWrapper} from "@/components/auth/card-wrapper";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Cta from "@/components/Cta";
import {FormError} from "@/components/auth/form-error";
import {FormSuccess} from "@/components/auth/form-success";
import {useState, useTransition} from "react";
import {reset} from "@/actions/reset";

export const ResetForm = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isPending, startTransition] = useTransition()

    const form = useForm({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    })

    const onSubmit = (values) => {
        //appel serveur action pass data from client to server
//start transition permet de définit quand quelque chose à ended
        setError("")
        setSuccess("")

        startTransition(() => {
            reset(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Mot de passe oublié"
            backUrl="/auth/login">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input disabled={isPending} {...field} placeholder="mail@example.com"
                                               type="email"/>
                                    </FormControl>
                                    <FormMessage className="font-normal"/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error}/>
                    <FormSuccess message={success}/>

                    <div className="cta flex items-center justify-center">
                        <button disabled={isPending} type="submit"
                                className="inline-flex w-fit items-center relative text-cta border h-12 px-8 border-GreyBlue">
                            Réinitialiser mon mot de passe
                            <span className="w-5 border border-GreyBlue absolute"></span>
                            <span className="w-5 border border-GreyBlue absolute"></span>
                            <span className="w-5 border border-GreyBlue absolute"></span>
                            <span className="w-5 border border-GreyBlue absolute"></span>
                        </button>
                    </div>

                    {/*<Button disabled={isPending} type="submit" className="w-full font-normal">*/}
                    {/*    Réinitialiser mon mot de passe*/}
                    {/*</Button>*/}
                </form>
            </Form>
        </CardWrapper>
    )
}