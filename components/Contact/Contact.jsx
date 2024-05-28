"use client"

import {useState, useTransition} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Cta from "@/components/Cta";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {contactFormSchema} from "@/schemas";
import {contact} from "@/actions/contact";
import {FormError} from "@/components/auth/form-error";
import {FormSuccess} from "@/components/auth/form-success";

// Define Zod schema


export const Contact = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            email: "",
            message: "",
            fullName: "",
            phone: "",
            profession: "",
            company: "",
            gdprConsent: false
        }
    });


    const onSubmit = async (values) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            // Simulate a server action
            contact(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        });
    };

    return (
        <Form {...form}>

            <form className="gridCtn gap-y-2.5 mobile:flex mobile:flex-col" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="fullName"
                           render={({field}) => (
                               <FormItem className="col-span-6">
                                   <FormControl>
                                       <Input
                                           {...field}
                                           placeholder="Name" type="text"/>
                                   </FormControl>
                                   <FormMessage className="text-red-400"/>
                               </FormItem>
                           )
                           }
                />

                <FormField control={form.control} name="email"
                           render={({field}) => (
                               <FormItem className="col-span-6">
                                   <FormControl>
                                       <Input {...field} placeholder="mail@example.com" type="email"/>
                                   </FormControl>
                                   <FormMessage className="text-red-400"/>
                               </FormItem>
                           )}
                />

                <FormField control={form.control} name="phone"
                           render={({field}) => (
                               <FormItem className="col-span-6">
                                   <FormControl>
                                       <Input {...field} placeholder="Phone" type="tel"/>
                                   </FormControl>
                                   <FormMessage className="text-red-400"/>
                               </FormItem>
                           )}
                />

                <FormField control={form.control} name="profession"
                           render={({field}) => (
                               <FormItem className="col-span-6">
                                   <FormControl>
                                       <Input {...field} placeholder="Profession" type=" text"/>
                                   </FormControl>
                                   <FormMessage className="text-red-400"/>
                               </FormItem>
                           )}
                />

                <FormField control={form.control} name="company"
                           render={({field}) => (
                               <FormItem className="col-span-6">
                                   <FormControl>
                                       <Input {...field} placeholder="Company" type=" text"/>
                                   </FormControl>
                                   <FormMessage className="text-red-400"/>
                               </FormItem>
                           )}
                />

                <FormField control={form.control} name="message"
                           render={({field}) => (
                               <FormItem className="col-span-12">
                                   <FormControl>
                                       <Textarea
                                           className="focus-visible:outline-none focus-visible:ring-0 rounded-none border-Grey bg-GreyM" {...field}
                                           placeholder="Your message" type="text"/>
                                   </FormControl>
                                   <FormMessage className="text-red-400"/>
                               </FormItem>
                           )}
                />

                <FormField control={form.control} name="gdprConsent"
                           render={({field}) => (
                               <FormItem className="col-span-12 flex items-end">
                                   <FormControl>
                                       <Checkbox
                                           checked={field.value}
                                           onCheckedChange={field.onChange}
                                       />
                                   </FormControl>
                                   <FormLabel className="pl-4">I agree to the privacy policy</FormLabel>
                                   <FormMessage className="leading-none text-red-400 pl-4"/>
                               </FormItem>
                           )}
                />


                <div className="[&>button>span:last-child]:bg-GreyM cta col-span-12 justify-self-end">
                    <button disabled={isPending} type="submit"
                            className={`group inline-flex w-fit items-center relative text-cta border h-12 px-8 border-GreyBlue ${isPending ? "opacity-50" : "opacity-100"}`}>
                        ENVOYER
                        <span className="w-5 border border-GreyBlue absolute"></span>
                        <span className="w-5 border border-GreyBlue absolute"></span>
                        <span className="w-5 border border-GreyBlue absolute"></span>
                        <span className="w-5 border border-GreyBlue absolute"></span>
                        <span
                            className={`absolute opacity-0 m-1 -z-10 transition duration-200 inset-0 group-hover:opacity-100`}></span>
                    </button>
                </div>

                <div className="col-span-12">
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                </div>
            </form>


        </Form>
    )
        ;
};
