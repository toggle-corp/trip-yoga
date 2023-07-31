import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Link from 'components/Link';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoMail,
    IoCall,
    IoLocationOutline,
} from 'react-icons/io5';

import ImageWrapper from 'components/ImageWrapper';
import Heading from 'components/Heading';

import styles from './styles.module.css';

const description = 'Let\'s unfold a world filled with peace, love, and self-discovery, one breath at a time.';

export interface Props {
    className?: string;
}

function Footer(props: Props) {
    const {
        className,
    } = props;

    return (
        <div
            className={_cs(className, styles.footer)}
            id="footer"
        >
            <div className={styles.topContainer}>
                <div
                    className={_cs(
                        styles.section,
                        styles.left,
                    )}
                >
                    <ImageWrapper
                        className={styles.logo}
                        src="/logo.svg"
                        alt="image"
                    />
                    <div>
                        {description}
                    </div>
                </div>
                <div className={styles.section}>
                    <Heading
                        className={styles.heading}
                        size="small"
                    >
                        Contact
                    </Heading>
                    <div className={styles.links}>
                        <div className={styles.contact}>
                            <IoMail className={styles.icon} />
                            <Link
                                href="mailto:trip.wellness2021@gmail.com"
                                target="_blank"
                                title="Email"
                            >
                                trip.wellness2021@gmail.com
                            </Link>
                        </div>
                        <div className={styles.contact}>
                            <IoCall className={styles.icon} />
                            +9779801166451 (WhatsApp), +1 (417) 849-9903
                        </div>
                        <div className={styles.contact}>
                            <IoLocationOutline className={styles.icon} />
                            USA: Frisco, Dallas & Nepal: Kathmandu
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <Heading
                        className={styles.heading}
                        size="small"
                    >
                        Follow us on
                    </Heading>
                    <div className={styles.socialLinks}>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100092267003485"
                            variant="icon"
                            target="_blank"
                            title="Facebook"
                        >
                            <IoLogoFacebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/tripyoga.np/"
                            variant="icon"
                            target="_blank"
                            title="Instagram"
                        >
                            <IoLogoInstagram />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.content}>
                    <div className={styles.leftContainer}>
                        Copyright © 2023 Trip Yoga
                    </div>
                    <Link
                        href="/policy"
                        title="Company Policy"
                    >
                        Company Policy
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
