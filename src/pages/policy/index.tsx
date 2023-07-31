import React from 'react';
import {
    _cs,
} from '@togglecorp/fujs';
import Head from 'next/head';

import Page from 'components/Page';
import Section from 'components/Section';
import Heading from 'components/Heading';

import styles from './styles.module.css';

const policyPara1 = 'Thank you for choosing our online website as your preferred learning platform. It is imperative to establish a clear understanding of the expectations and responsibilities between us, the service provider, and you, the user.';
const policyListItem1 = 'To commence your course, we kindly request you to complete and sign the "TRIP   Registration and Liability waiver Form." This document will be emailed to you upon the receipt of your registration.';
const policyListItem2 = 'In order to provide you with a satisfactory experience, we offer a single "Free Trial Class" that you may partake in prior to enrolling in any of our courses.';
const policyListItem3 = 'Prior to commencing the enrolled class, all payments must be remitted.';
const policyListItem4 = 'For monthly sessions, payment shall be rendered seven days preceding the initiation of the new session. In cases of termination, a refund amounting to 50% shall be reimbursed, subject to receipt of a written notice of discontinuation at least seven days prior to cessation.';
const policyListItem5 = 'Please be aware that in the event of cancellation or missed class, refunds will not be issued for the fees paid. We appreciate your understanding in this matter.';
const policyListItem6 = 'Should we, the service provider, encounter any circumstances resulting in your classes not being concluded due to our fault, we commit to extending your time frame and including an additional class within the package as compensation for any inconvenience caused.';
const policyListItem7 = 'We value your commitment to our platform and strive to offer the utmost professionalism while maintaining a cordial atmosphere. If you have any further questions or concerns regarding our policies, please do not hesitate to contact us.';

export interface Props {
    className?: string;
}

function Policy(props: Props) {
    const {
        className,
    } = props;

    return (
        <Page
            contentClassName={_cs(className, styles.policy)}
        >
            <Head>
                <title>Trip Yoga Company Policy</title>
            </Head>
            <Section
                contentClassName={styles.content}
            >
                <Heading
                    size="large"
                >
                    Company Policy
                </Heading>
                <p>
                    {policyPara1}
                </p>
                <div className={styles.listItem}>
                    {policyListItem1}
                </div>
                <div className={styles.listItem}>
                    {policyListItem2}
                </div>
                <div className={styles.listItem}>
                    {policyListItem3}
                </div>
                <div className={styles.listItem}>
                    {policyListItem4}
                </div>
                <div className={styles.listItem}>
                    {policyListItem5}
                </div>
                <div className={styles.listItem}>
                    {policyListItem6}
                </div>
                <div className={styles.listItem}>
                    {policyListItem7}
                </div>
            </Section>
        </Page>
    );
}

export default Policy;
