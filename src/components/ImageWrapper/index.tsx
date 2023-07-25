import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Image, { ImageProps } from 'next/image';

import styles from './styles.module.css';

export interface Props extends ImageProps {
    className?: string;
    src: string;
    imageClassName?: string;
    nonOptimizedImage?: boolean;
    shaded?: boolean;
}

function ImageWrapper(props: Props) {
    const {
        className,
        imageClassName,
        src,
        nonOptimizedImage,
        shaded,
        ...otherProps
    } = props;

    return (
        <div className={_cs(className, styles.imageWrapper)}>
            {shaded && (
                <div className={_cs(imageClassName, styles.bg)} />
            )}
            {!nonOptimizedImage ? (
                <Image
                    src={src}
                    className={_cs(imageClassName, styles.image)}
                    fill
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...otherProps}
                />
            ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={src}
                    className={_cs(imageClassName, styles.image, styles.nonOptimizedImage)}
                    alt={otherProps.alt}
                />
            )}
        </div>
    );
}

export default ImageWrapper;
