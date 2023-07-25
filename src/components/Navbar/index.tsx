import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';

import Link from 'components/Link';
import Button from 'components/Button';
import useBooleanState from 'hooks/useBooleanState';

import styles from './styles.module.css';

interface Props {
    className?: string;
    contentClassName?: string;
}

function Navbar(props: Props) {
    const {
        className,
        contentClassName,
    } = props;

    const [isNavShown, , , , toggleNavVisibility] = useBooleanState(false);

    return (
        <div className={_cs(styles.navbar, className)}>
            <div className={_cs(styles.navbarContent, contentClassName)}>
                <Link
                    className={styles.logo}
                    href="/"
                >
                    <Image
                        className={styles.logoImage}
                        src="/logo-white.svg"
                        alt="Logo"
                        fill
                    />
                </Link>
                <div
                    className={_cs(
                        styles.routes,
                        isNavShown && styles.navShown,
                    )}
                >
                    <Link
                        className={styles.link}
                        href="#about"
                    >
                        About
                    </Link>
                    <Link
                        className={styles.link}
                        href="#packages"
                    >
                        Packages
                    </Link>
                    <Link
                        className={styles.link}
                        href="#gallery"
                    >
                        Gallery
                    </Link>
                    <Link
                        className={styles.link}
                        href="#contact"
                    >
                        Contact
                    </Link>
                </div>
                <div className={styles.rightContainer}>
                    <Button
                        className={_cs(
                            styles.menu,
                        )}
                        name="toggle"
                        variant="transparent"
                        onClick={toggleNavVisibility}
                    >
                        <MdMenu />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
