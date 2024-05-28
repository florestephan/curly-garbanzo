'use client';

import {i18n} from '@/i18n.config';
import Link from 'next/link';
import {useParams, usePathname, useRouter} from 'next/navigation';
import React, {useMemo, useEffect} from 'react';
import Cookies from 'js-cookie';

const removeLocaleFromPathname = (pathname) => {
    const localePattern = new RegExp(`^/(${i18n.languages.map(lang => lang.id).join('|')})(/|$)`);
    const cleanedPathname = pathname.replace(localePattern, '');
    return cleanedPathname.startsWith('/') ? cleanedPathname : `/${cleanedPathname}`;
};

const ToggleLang = ({translations}) => {
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();

    const cleanedPathname = removeLocaleFromPathname(pathname);

    const availableTranslations = useMemo(() => {
        return i18n.languages.map((lang) => ({
            language: lang.id,
            path: `/${lang.id}${cleanedPathname}`,
        }));
    }, [cleanedPathname]);

    useEffect(() => {
        const savedLocale = Cookies.get('locale');
        if (savedLocale && savedLocale !== params.lang) {
            const newPath = `/${savedLocale}${cleanedPathname}`;
            router.replace(newPath);
        }
    }, [params.lang, cleanedPathname, router]);

    const handleClick = (language) => {
        Cookies.set('locale', language);
    };

    return (
        <label
            className="col-start-1 col-end-3 bg-GreyM rounded-3xl h-[50px] w-24 flex items-center justify-center p-1 mobile:col-span-12 mobile:justify-self-center mobile:mb-10">
            {/*<div className="shadow-card flex p-[2px] items-center justify-center rounded-md bg-GreyM">*/}
            {availableTranslations.map((version) => (
                <Link
                    key={version.language}
                    href={version.path}
                    locale={version.language}
                    onClick={() => handleClick(version.language)}
                    className={`inline-flex items-center justify-center w-11 h-11 cursor-pointer rounded-full text-Black capitalize ${
                        params?.lang === version.language
                            ? 'bg-white text-Black'
                            : 'bg-GreyM text-Black'
                    }`}
                >
                    {version.language}
                </Link>
            ))}
            {/*</div>*/}
        </label>
    );
};

export default ToggleLang;
