import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head'
const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Alpha Designs</title>
        <meta type='description' content='We will scale your brand to the top by asdding alpha effects to your brand. My works interact with the targeted audiences, and have been endorsed by divergent organizations including social media pages, religious organizations, developed and start-ups, private individuals, and other online businesses to convert sales and gain the desired result. '/>
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
