import {Navbar} from "@/app/(front)/(protected)/_components/navbar";

const ProtectedLayout = ({children}) => {
    return (
        <div
            className="min-h-svh h-full w-full flex flex-col gap-y-10 items-center justify-center ">
            <Navbar/>
            {children}
        </div>
    )
}

export default ProtectedLayout