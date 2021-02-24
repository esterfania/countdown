import React from 'react';
import {
  ExperienceBar,
  Profile,
  CompletedChallenges,
  Countdown,
  StartButton,
} from '../components';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar value={300} />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown></Countdown>
        </div>
        <div></div>
      </section>
    </main>
  );
}
