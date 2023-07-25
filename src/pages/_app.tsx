import { useEffect } from 'react';
import { Manrope, Crimson_Text } from 'next/font/google';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import 'styles/globals.css';
import 'styles/variables.css';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: 'https://app.posthog.com',
        // NOTE: Persistence in memory will not add any cookies
        persistence: 'memory',
        loaded: (loadedPosthog) => {
            if (process.env.NODE_ENV === 'development') {
                loadedPosthog.debug();
            }
        },
    });
}

const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const crimsonText = Crimson_Text({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

function MyApp(props: AppProps) {
    const {
        Component,
        pageProps,
    } = props;
    const router = useRouter();

    useEffect(() => {
        // Track page views
        const handleRouteChange = () => posthog?.capture('$pageview');
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);

    return (
        <>
            <style
                // eslint-disable-next-line react/no-unknown-property
                jsx
                // eslint-disable-next-line react/no-unknown-property
                global
            >
                {`
                :root {
                    --font-family-lato: ${manrope.style.fontFamily};
                    --font-family-dm-sans: ${crimsonText.style.fontFamily};
                }
                `}
            </style>
            <PostHogProvider client={posthog}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
            </PostHogProvider>
        </>
    );
}

export default MyApp;
