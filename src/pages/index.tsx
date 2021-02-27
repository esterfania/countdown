import Head from 'next/head';
import { GetServerSideProps } from 'next';

import React from 'react';
import {
  ExperienceBar,
  Profile,
  CompletedChallenges,
  Countdown,
  Navbar,
} from '../components';
import styled from 'styled-components';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
const HomeContainer = styled.main`
  height: 100vh;
  width: 62rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 100%;

    > section {
      flex: 1;
      display: grid;
      gap: 3rem;
      grid-template-columns: 1fr;
      align-content: center;
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
  }
`;
export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Navbar></Navbar>
      <HomeContainer>
        <Head>
          <link rel='shortcut icon' href='favicon.png' type='image/png' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown></Countdown>
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </HomeContainer>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
