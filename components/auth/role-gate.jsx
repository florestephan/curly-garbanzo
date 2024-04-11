"use client"

import {useCurrentRole} from "@/hooks/use-current-role";
import {FormError} from "@/components/auth/form-error";

export const RoleGate = ({children, allowedRole}) => {
    const role = useCurrentRole()

    //Permet de rendre un composant si allowed

    if (role !== allowedRole) {
        return null
    }

    return (
        <>
            {children}
        </>
    )

}