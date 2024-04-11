"use client"
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {UserButton} from "@/components/auth/user-button";
import {RoleGate} from "@/components/auth/role-gate";
import {UserRole} from "@prisma/client";

export const Navbar = () => {
    const pathname = usePathname() // permet de savoir ou on est

    return (
        <div
            className="bg-secondary flex justify-between items-center p-4 mt-8 rounded-xl w-full] shadow-sm w-5/6 md:w-3/6 ">
            <div className="flex flex-wrap gap-4">

                <Button
                    asChild
                    variant={pathname === "/server" ? "default" : "outline"}>
                    <Link href="/server">Compte</Link>
                </Button>

                <RoleGate allowedRole={UserRole.ADMIN}>
                    <Button
                        asChild
                        variant={pathname === "/account" ? "default" : "outline"}>
                        <Link href="/account">Liste des comptes</Link>
                    </Button>
                </RoleGate>

                <RoleGate allowedRole={UserRole.ADMIN}>
                    <Button
                        asChild
                        variant={pathname === "/register" ? "default" : "outline"}>
                        <Link href="/register">Créer un compte</Link>
                    </Button>
                </RoleGate>

                <Button
                    asChild
                    variant={pathname === "/settings" ? "default" : "outline"}>
                    <Link href="/settings">Espace pro</Link>
                </Button>
            </div>

            <UserButton/>

        </div>
    )
}