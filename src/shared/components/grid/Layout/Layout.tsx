import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Header } from '../Header/Header';

import styles from './Layout.module.scss';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <ToastContainer className={styles.toastify} />
    </>
);
