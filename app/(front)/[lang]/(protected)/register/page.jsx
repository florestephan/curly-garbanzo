import {RegisterForm} from "@/app/(front)/[lang]/(protected)/_components/register-form";
import {RoleGate} from "@/components/auth/role-gate";
import {UserRole} from "@prisma/client";

const RegisterPage = () => {

    return (
        <RoleGate allowedRole={UserRole.ADMIN}>
            <RegisterForm/>
        </RoleGate>
    )
}

export default RegisterPage;