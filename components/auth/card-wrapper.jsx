"use client"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const CardWrapper = ({children, headerLabel, backUrl}) => {
    return (
        <Card className="w-full gridCtn mobile:flex mobile:flex-col mobile:mb-40 ">
            <CardHeader className="col-span-12 space-y-1">
                <CardTitle className="text-90 text-center">{headerLabel}</CardTitle>
            </CardHeader>
            <CardContent className="col-start-5 col-end-9 space-y-9 pb-2">
                {children}
            </CardContent>
            {/*<CardFooter className="col-start-5 col-end-9">*/}
            {/*    <Button className="w-full" variant="outline" asChild>*/}
            {/*        <Link href={backUrl}>Retour</Link>*/}
            {/*    </Button>*/}
            {/*</CardFooter>*/}
        </Card>
    )
}