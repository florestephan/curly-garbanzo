"use client"

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function SettingsPage({params}) {
    const pathname = usePathname()

    if (params.lang === "fr") {
        return (
            <div className="bg-white p-10 rounded-xl w-full max-w-md mx-auto">
                Accédez à l&apos;espace privé
                <Button className="w-full mt-8"
                        asChild
                        variant={pathname === "/produits" ? "default" : "outline"}>
                    <Link href="/produits">Produit</Link>
                </Button>

                <Button className="w-full mt-8"
                        asChild
                        variant={pathname === "/lastchance" ? "default" : "outline"}>
                    <Link href="/lastchance">Last Chance</Link>
                </Button>
            </div>
        )
    } else if (params.lang === "en") {
        return (
            <div className="bg-white p-10 rounded-xl w-full max-w-md mx-auto">
               Access to private area
                <Button className="w-full mt-8"
                        asChild
                        variant={pathname === "/produits" ? "default" : "outline"}>
                    <Link href="/produits">Product</Link>
                </Button>

                <Button className="w-full mt-8"
                        asChild
                        variant={pathname === "/lastchance" ? "default" : "outline"}>
                    <Link href="/lastchance">Last Chance</Link>
                </Button>
            </div>
        )
    }


}