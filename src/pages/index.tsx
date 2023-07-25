import React, { useState, useCallback } from 'react';
import {
    _cs,
} from '@togglecorp/fujs';
import Head from 'next/head';

import Page from 'components/Page';
import ImageWrapper from 'components/ImageWrapper';
import Section from 'components/Section';
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import PackageCard from 'components/PackageCard';
import Heading from 'components/Heading';

import styles from './styles.module.css';

const ramDassQuote = '"We\'re all just walking each other home." - Ram Dass';

const visionDescription = 'To help people achieve their full potential and live their best lives.';
const missionDescription = 'To provide a supportive space where people can nurture their minds and bodies by practicing, sharing, and developing the ancient knowledge of yoga as it has been preserved through time. We offer personalized care to each of our clients, with teachers who have been in practice themselves and share our passion for helping people heal and thrive.';

const classesDescription = 'Let\'s unleash your full potential together and witness the remarkable transformation that awaits you on the mat.';

const aboutMePara1 = 'I\'m Aparajita, the founder of The Real Inner Peace Yoga (TRIP). My lifelong journey with yoga has been quite a ride – from practicing asanas as a child to experiencing ups and downs along the way.';
const aboutMePara2 = 'Yoga has been my go-to sanctuary, helping me navigate life\'s challenges, manage stress, and enhance flexibility while fostering an overall sense of well-being. But it wasn\'t until later that I discovered its true power: the profound mental and spiritual connection it nurtures with oneself.';

const galleryImages = [
    '/img/gallery1.jpeg',
    '/img/pump2.jpeg',
    '/img/gallery3.jpg',
    '/img/gallery4.jpg',
    '/img/pump.jpeg',
    '/img/gallery6.jpg',
];

export interface Props {
    className?: string;
}

function Home(props: Props) {
    const {
        className,
    } = props;

    const [showMore, setShowMore] = useState(false);
    const toggleMoreMeContent = useCallback(() => {
        setShowMore((oldVal) => !oldVal);
    }, []);

    return (
        <Page
            contentClassName={_cs(className, styles.home)}
            hideNavbar
        >
            <Head>
                <title>Trip Yoga</title>
            </Head>
            <div className={styles.hero}>
                <ImageWrapper
                    className={styles.heroImage}
                    imageClassName={styles.image}
                    src="/img/hero.jpeg"
                    alt="hero-image"
                />
                <div className={styles.bg} />
                <Navbar
                    className={styles.navbar}
                    contentClassName={styles.navbarContent}
                />
                <div className={styles.content}>
                    <Heading
                        className={styles.heading}
                        size="large"
                    >
                        Welcome to The Real Inner Peace Yoga
                    </Heading>
                    <Heading
                        className={styles.heading}
                        size="small"
                        font="normal"
                    >
                        {ramDassQuote}
                    </Heading>
                </div>
            </div>
            <Section
                className={styles.visionSection}
                contentClassName={styles.content}
            >
                <div className={styles.block}>
                    <Heading
                        className={styles.heading}
                        size="large"
                    >
                        Our Vision
                    </Heading>
                    <div className={styles.description}>
                        {visionDescription}
                    </div>
                </div>
                <div className={styles.block}>
                    <Heading
                        className={styles.heading}
                        size="large"
                    >
                        Our Mission
                    </Heading>
                    <div className={styles.description}>
                        {missionDescription}
                    </div>
                </div>
            </Section>
            <Section
                className={styles.classes}
                title="What can you expect from our classes?"
                contentClassName={styles.content}
                withAlternativeBackground
            >
                <div className={styles.leftContent}>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            Profound journey of discovery.
                        </div>
                        <div className={styles.listItem}>
                            Heightened emotional and intentional awareness.
                        </div>
                        <div className={styles.listItem}>
                            Increased flexibility and invigorated energy.
                        </div>
                        <div className={styles.listItem}>
                            Relaxation and blissful body experience.
                        </div>
                    </div>
                    <div className={styles.classesDescription}>
                        {classesDescription}
                    </div>
                </div>
                <ImageWrapper
                    className={styles.classesImage}
                    imageClassName={styles.image}
                    src="/img/teach.jpg"
                    alt="hero-image"
                    shaded
                />
            </Section>
            <Section
                className={styles.know}
                sectionId="about"
                contentClassName={styles.content}
            >
                <ImageWrapper
                    className={styles.knowImage}
                    imageClassName={styles.image}
                    src="/img/l.jpg"
                    alt="hero-image"
                    shaded
                />
                <ImageWrapper
                    className={styles.knowImage}
                    imageClassName={styles.image}
                    src="/img/a.jpg"
                    alt="hero-image"
                    shaded
                />
                <div className={styles.rightContent}>
                    <Heading size="medium">
                        Hey, There!!
                    </Heading>
                    <div className={styles.paragraphs}>
                        <div className={styles.paragraph}>
                            {aboutMePara1}
                        </div>
                        <div className={styles.paragraph}>
                            {aboutMePara2}
                        </div>
                        {showMore && (
                            <>
                                <div className={styles.paragraph}>
                                    {aboutMePara1}
                                </div>
                                <div className={styles.paragraph}>
                                    {aboutMePara2}
                                </div>
                            </>
                        )}
                    </div>
                    <Button
                        className={styles.readMoreButton}
                        onClick={toggleMoreMeContent}
                    >
                        {!showMore ? 'Read More' : 'Show Less'}
                    </Button>
                </div>
            </Section>
            <Section
                className={styles.packages}
                sectionId="packages"
                title="Explore our classes / packages"
                contentClassName={styles.content}
                withAlternativeBackground
            >
                <PackageCard
                    title="Personalized Lessons"
                    points={[
                        'Personalized one-on-one sessions with skilled trainer.',
                        'Tailored transformative yoga experience.',
                        'Practice conveniently at home, saving travel time.',
                        'Empowerment to excel in specific areas like backbends or inversions.',
                    ]}
                    time="45 - 60 min"
                    days="Tuesdays and Thursdays"
                    rates={[
                        {
                            price: '$250',
                            details: 'per lesson',
                        },
                        {
                            price: '$285',
                            details: 'for 12 sessions/person',
                        },
                    ]}
                />
                <PackageCard
                    title="Group Lessons"
                    points={[
                        'Transformative yoga experience through meticulously designed group classes.',
                        'Well-rounded classes combining various styles to cater to your needs.',
                        'Sun salutations, pranayama, breathwork, and soul-soothing meditations.',
                        'Strengthening the mind-body connection for enhanced well-being.',
                        'Immerse yourself in the magic of yoga and foster self-care commitment.',
                    ]}
                    time="45 - 60 min"
                    days="Monday, Wednesday & Friday"
                    rates={[
                        {
                            price: '$16',
                            details: 'per session',
                        },
                        {
                            price: '$175',
                            details: 'for 12 session / person',
                        },
                    ]}
                />
                <PackageCard
                    title="Sunday Classes"
                    points={[
                        'Complimentary. Open to all, at no charge.',
                        'Enjoy the convenience of practicing at home, saving time on travel.',
                        'Scheduled as needed, but at least once a month, these classes address any uncertainties. Additionally, a designated time slot on Sundays allows those who missed earlier classes to catch up on essential content, providing a concise review of key aspects.',
                    ]}
                    time="15 - 40 min"
                    days="Sundays"
                />
            </Section>
            <Section
                className={styles.gallery}
                sectionId="gallery"
                title="Gallery"
                contentClassName={styles.content}
            >
                {galleryImages.map((item, index) => (
                    <ImageWrapper
                        key={`${index + 1}`}
                        className={styles.galleryImageContainer}
                        imageClassName={styles.galleryImage}
                        src={item}
                        alt="hero-image"
                        shaded
                    />
                ))}
            </Section>
        </Page>
    );
}

export default Home;
