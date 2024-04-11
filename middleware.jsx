import {Negotiator} from "negotiator";
import {match as matchLocale} from "@formatjs/intl-localematcher"
import {i18n} from "@/i18n.config";


import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes} from "@/route";
import {NextResponse} from "next/server";

const {auth} = NextAuth(authConfig)

// // Fonction pour obtenir la locale
// export const getLocale = (request) => {
//     const negotiatorHeaders = {}
//     request.headers.forEach((value, key) => {
//         negotiatorHeaders[key] = value;
//     });
//
//     const locales = i18n.languages.map((lang) => lang.id);
//     const languages = new Negotiator({headers: negotiatorHeaders}).languages();
//
//     const locale = matchLocale(languages, locales, i18n.base || 'id');
//     return locale;
// };
//
// export function middleware(req) {
//     const pathname = req.nextUrl.pathname;
//     const pathnameIsMissingLocale = i18n.languages.every(
//         (locale) =>
//             !pathname.startsWith(`/${locale.id}/`) && pathname !== `/${locale.id}`,
//     );
//
//     if (pathnameIsMissingLocale) {
//         const locale = getLocale(req);
//         return NextResponse.redirect(
//             new URL(
//                 `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
//                 req.url,
//             ),
//         );
//     }
// }

//action du middleware auth
export default auth((req) => {
    const {nextUrl} = req
    const isLoggedIn = !!req.auth


    //Allways allowd this route
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    //not require authentification
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    //require auth
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    //gestion de l'autheni
    if (isApiAuthRoute) {
        return null
    }

    //check if we are on authroute

    //LE failt de le mettre dans default blabla permet d'avoir la liverté dechanger par la suite la route ou est redirigé l'authentifié
    //le fait de rajouter nexturl permet de creer une url absolue

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL(`/auth/login`, nextUrl))
    }

    return null

})

//permet de controler le status de l'app, is log ou pas par exemple et quoi faire avec les routes quand log ou pas
//permet d'invoquer le middleware sans les static file et image
export const config = {
    // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],  // clerk middleware
}