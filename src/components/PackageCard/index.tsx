import React from 'react';
import {
    _cs,
} from '@togglecorp/fujs';
import {
    IoCheckmarkCircle,
    IoCalendarOutline,
    IoTimeOutline,
} from 'react-icons/io5';

import Heading from 'components/Heading';

import styles from './styles.module.css';

export interface Props {
    className?: string;
    title?: string;
    points?: string[];
    time?: string;
    days?: string;
    rates?: {
        price: string;
        details: string;
    }[];
}

function PackageCard(props: Props) {
    const {
        className,
        title,
        points,
        time,
        days,
        rates,
    } = props;

    return (
        <div className={_cs(className, styles.packageCard)}>
            <Heading
                size="extraSmall"
            >
                {title}
            </Heading>
            <div className={styles.divider} />
            <div className={styles.points}>
                {points?.map((item) => (
                    <div
                        key={item}
                        className={styles.item}
                    >
                        <IoCheckmarkCircle
                            className={styles.circle}
                        />
                        {item}
                    </div>
                ))}
            </div>
            <div className={styles.divider} />
            <div className={styles.group}>
                <div className={styles.info}>
                    <IoTimeOutline className={styles.icon} />
                    {time}
                </div>
                <div className={styles.info}>
                    <IoCalendarOutline className={styles.icon} />
                    {days}
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.rates}>
                {rates?.map((item) => (
                    <div
                        key={item.price}
                        className={styles.item}
                    >
                        <div className={styles.price}>{item.price}</div>
                        <div>{item.details}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PackageCard;
