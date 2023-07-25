import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import styles from './styles.module.css';

export interface Props {
    className?: string;
    contentClassName?: string;
    children?: React.ReactNode;
    hideNavbar?: boolean;
}

function Page(props: Props) {
    const {
        className,
        children,
        contentClassName,
        hideNavbar,
    } = props;

    return (
        <div className={_cs(className, styles.page)}>
            {!hideNavbar && (<Navbar className={styles.navbar} />)}
            <main
                className={_cs(styles.mainContent, contentClassName)}
            >
                {children}
            </main>
            <Footer className={styles.footer} />
        </div>
    );
}

export default Page;
