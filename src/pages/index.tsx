import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/pages/Home.module.css';
import { Countdown } from '../components/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';
import PomodoroOptions from '../components/PomodoroOptions';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Start | concentrate</title>
        </Head>
        <CountdownProvider>
          <Header />
          <section>
            <PomodoroOptions />
            <div>
              <Countdown />
            </div>
          </section>
        </CountdownProvider>
      </div>
      <About />
      <Footer />
    </>
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
