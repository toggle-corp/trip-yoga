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

const aboutMePara1 = 'Hey there! I\'m Aparajita, the founder of The Real Inner Peace Yoga (TRIP) and I have experienced a lifelong connection with yoga. Growing up in a family that valued yoga, I initially practiced it to fit in, but over time, I began to discover the tremendous emotional and health benefits it brought into my life.';
const aboutMePara2 = 'However, like everyone, I had my ups and downs, and there was a phase where I lost touch with yoga. It was during one of the lowest points in my life that I found myself turning back to this ancient practice for solace. Yoga became my sanctuary, guiding me through life\'s challenges and reigniting the profound mental and spiritual connection with myself.';
const aboutMePara3 = 'This eye-opening experience sparked a deep desire to delve deeper into the essence of yoga. Fueled by passion, I embarked on a soul-enriching journey to the Divine Life Society in India to become a certified yoga teacher. It was there that I realized how the true wisdom of yoga had been overshadowed by fleeting fitness trends.';
const aboutMePara4 = 'With a heart full of purpose, I returned to establish TRIP - a sanctuary where everyone can access the transformative benefits of authentic yoga. My mission is to make yoga inclusive, catering to all experience levels and fitness goals.';
const aboutMePara5 = 'Join me on this TRIP, and together, let\'s unfold a world filled with peace, love, and self-discovery, one breath at a time.';
const aboutMePara6 = 'Namaste';

const galleryImages = [
    '/img/gallery-twist.jpg',
    '/img/pump2.jpeg',
    '/img/shut-eyes.jpg',
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
                            <div className={styles.text}>
                                Tailored classes for individuals of all
                                <b>fitness levels</b>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.text}>
                                <b>Breathing exercises</b>
                                for effective stress and mood disorder management
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.text}>
                                <b>Mindfulness</b>
                                lessons to improve concentration, focus, and emotional well-being.
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.text}>
                                Heightened emotional and intentional awareness,
                                invigorated energy, increased flexibility, and
                                <b>blissful body relaxation</b>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.text}>
                                Unlocking secrets to
                                <b>manage emotions</b>
                                and align your mind with financial and relational life goals
                            </div>
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
                    src="/img/me.jpeg"
                    alt="hero-image"
                    shaded
                />
                <ImageWrapper
                    className={styles.knowImage}
                    imageClassName={styles.image}
                    src="/img/l.jpg"
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
                                    {aboutMePara3}
                                </div>
                                <div className={styles.paragraph}>
                                    {aboutMePara4}
                                </div>
                                <div className={styles.paragraph}>
                                    {aboutMePara5}
                                </div>
                                <div className={styles.paragraph}>
                                    {aboutMePara6}
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
                            price: '$25',
                            details: 'per lesson',
                        },
                        {
                            price: '$285',
                            details: 'for 12 sessions/person',
                        },
                        {
                            price: '$960',
                            details: 'for family of 4 people, 12 sessions',
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
                    days="Monday to fridays"
                    rates={[
                        {
                            price: '$16',
                            details: 'per session',
                        },
                        {
                            price: '$179',
                            details: '12 sessions billed monthy',
                        },
                        {
                            price: '$280',
                            details: '20 sessions billed monthy',
                        },
                    ]}
                />
                <PackageCard
                    title="Sunday Classes"
                    points={[
                        'complimentary Sunday classes, open to all, at no charge.',
                        'aims to clarify specific practices, enhance breathwork, and provide additional support.',
                        'Scheduled as needed, but at least once a month, these classes address any uncertainties.',
                        'allows those who missed earlier classes to catch up on essential content, providing a concise review of key aspects.',
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
