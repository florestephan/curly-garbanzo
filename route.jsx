export const publicRoutes = [
    "/",
    "/revendeurs",
    "/histoire",
    "/mademoiselle-barro",
    "/contact",
    "/studio",
    "/api/revalidate" //crrer une erreur en localsur le middlewere mais pas en prod, pas de revalidate sanity si pas activer
]


//non login user
export const authRoutes = [
    "/auth/login",
    "/auth/reset",
    "/auth/new-password"
]
// "/auth/register"

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/settings"