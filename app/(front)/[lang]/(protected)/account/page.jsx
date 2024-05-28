"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {RoleGate} from "@/components/auth/role-gate";
import {UserRole} from "@prisma/client"
import {Button} from "@/components/ui/button";
import {AllUsers} from "@/actions/admin";
import {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {deleteItem} from "@/actions/delete";
import {toast} from "sonner";

export const AdminPage = ({params}) => {


    const [data, setData] = useState([])


    useEffect(() => {
        AllUsers()
            .then((data) => {
                if (data) {
                    let newData = data.reverse()
                    setData(newData)
                }
            })
    }, [data]);

    const onClick = (id) => {
        deleteItem(id)
            .then((info) => {
                //On récupère les error ou succes qui sont return depuis la server action
                //on l'envoie en notif toast de shadcdn
                info.success ? toast.success(info.success) : toast.error(info.error)
            })
    }

    if (params.lang === "fr") {
        return (
            <RoleGate allowedRole={UserRole.ADMIN}>
                <Card className="w-5/6 h-full mb-8">
                    <CardHeader>
                        <p className="text-2xl font-semibold text-center">Comptes</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="min-w-[150px]">Name</TableHead>
                                    <TableHead className="hidden md:table-cell">Email</TableHead>
                                    <TableHead className="hidden md:table-cell">Role</TableHead>
                                    <TableHead className="text-right">Delete</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {data?.map(data =>
                                    <TableRow key={data.id}>
                                        <TableCell>{data?.name}</TableCell>
                                        <TableCell className="hidden md:table-cell">{data?.email}</TableCell>
                                        <TableCell className="hidden md:table-cell">{data?.role}</TableCell>
                                        <TableCell className="text-right">
                                            <Button onClick={() => onClick(data?.id)}
                                                    className="bg-red-600">X</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </RoleGate>
        )
    } else if (params.lang === "en") {
        return (
            <RoleGate allowedRole={UserRole.ADMIN}>
                <Card className="w-5/6 h-full mb-8">
                    <CardHeader>
                        <p className="text-2xl font-semibold text-center">Accounts</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="min-w-[150px]">Name</TableHead>
                                    <TableHead className="hidden md:table-cell">Email</TableHead>
                                    <TableHead className="hidden md:table-cell">Role</TableHead>
                                    <TableHead className="text-right">Delete</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {data?.map(data =>
                                    <TableRow key={data.id}>
                                        <TableCell>{data?.name}</TableCell>
                                        <TableCell className="hidden md:table-cell">{data?.email}</TableCell>
                                        <TableCell className="hidden md:table-cell">{data?.role}</TableCell>
                                        <TableCell className="text-right">
                                            <Button onClick={() => onClick(data?.id)}
                                                    className="bg-red-600">X</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </RoleGate>
        )
    }

}

export default AdminPage