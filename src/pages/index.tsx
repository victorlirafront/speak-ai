import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/pages/Home.module.css';
import { Countdown } from '../components/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';
import PomodoroOptions from '../components/PomodoroOptions';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <CountdownProvider>
        <section>
          <PomodoroOptions />
          <div>
            <Countdown />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
