import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import styles from './Header.module.scss';

export const Header = () => {
    const { pathname, locales, locale } = useRouter();

    const onChaneLang = (lang: string) => {
        const date = new Date();
        const expireMs = 100 * 365 * 24 * 60 * 60 * 1000; // 100 days
        date.setTime(date.getTime() + expireMs);

        document.cookie = `NEXT_LOCALE=${lang}; expires=${date.toUTCString()}; path=/`;
    };

    if (!locales) return null;

    return (
        <header className={styles.root}>
            {locales.map((lang) => (
                <Link
                    className={clsx({ [styles['is-active']]: lang === locale })}
                    key={lang}
                    href={pathname}
                    locale={lang}
                    onClick={onChaneLang.bind(null, lang)}
                >
                    {lang.toUpperCase()}
                </Link>
            ))}
        </header>
    );
};
