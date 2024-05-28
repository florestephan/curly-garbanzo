import {Negotiator} from "negotiator";
import {match as matchLocale} from "@formatjs/intl-localematcher";
import {i18n} from "@/i18n.config";
import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes, privateRoutes} from "@/route";
import {NextResponse} from "next/server";
import {parse} from 'cookie';

const {auth} = NextAuth(authConfig);

// On récupère la locale de l'url ou des cookies
const getLocale = (request) => {
    const cookies = parse(request.headers.get('cookie') || '');
    const savedLocale = cookies.locale;

    if (savedLocale) {
        return savedLocale;
    }

    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => {
        negotiatorHeaders[key] = value;
    });

    const locales = i18n.languages.map((lang) => lang.id);
    const languages = new Negotiator({headers: negotiatorHeaders}).languages();

    return matchLocale(languages, locales, i18n.base);
};

export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;
    const pathname = nextUrl.pathname;
    const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);
    const isPrivateRoute = privateRoutes.includes(pathname);

    // Vérifiez si le chemin contient /studio et laissez passer la requête
    if (pathname.startsWith('/studio')) {
        return null;
    }
    //
    // if (pathname.startsWith(`/fr/images`) || pathname.startsWith(`/en/images`)) {
    //     return null;
    // }

    const pathnameIsMissingLocale = i18n.languages.every(
        (locale) =>
            !pathname.startsWith(`/${locale.id}/`) && pathname !== `/${locale.id}`,
    );

    // Connecté et sur une route authRoutes
    if (isAuthRoute && isLoggedIn) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    // Si c'est une route api, on laisse passer
    if (isApiAuthRoute) {
        return null;
    }

    // On ajoute la locale devant la route si elle est manquante
    if (pathnameIsMissingLocale) {
        const locale = getLocale(req);

        // Créer la réponse de redirection et définir le cookie de langue
        const response = NextResponse.redirect(new URL(`/${locale}${nextUrl.pathname}`, req.url));
        response.cookies.set('locale', locale, {path: '/'});
        return response;
    }

    if (isPublicRoute) {
        return null;
    }

    // Route privée et pas connecté
    if (isPrivateRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL(`/fr/auth/login`, nextUrl));
    }

    return null;
});

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|studio|images).*)",
        "/",
        "/(api|trpc)(.*)"
    ],
};
