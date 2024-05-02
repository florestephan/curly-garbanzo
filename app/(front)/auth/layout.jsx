const AuthLayout = ({children}) => {

    return (
        <div
            className="min-h-svh flex items-center justify-center mobile:mt-40">
            {children}
        </div>
    )
}

export default AuthLayout;