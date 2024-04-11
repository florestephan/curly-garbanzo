"use client"

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function SettingsPage() {
    const pathname = usePathname()

    return (
        <div className="bg-white p-10 rounded-xl w-full max-w-md mx-auto">
            Accédez à l&apos;espace profesionnel
            <Button className="w-full mt-8"
                asChild
                variant={pathname === "/indexpage" ? "default" : "outline"}>
                <Link href="/indexpage">Cliquez-ici</Link>
            </Button>
        </div>
    )
}