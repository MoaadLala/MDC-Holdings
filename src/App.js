import HomeHero from './HomeHero/HomeHero';
import IntroductionSection from './IntroductionSection/IntroductionSection';
import Navbar from './Navbar/Navbar';
import WhiteContainer from './WhiteContainer/WhiteContainer';
import ContactForm from './ContactForm/ContactForm';
import logo from './logo.svg';
import Footer from './Footer/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeHero />
      <section id="WhoWeAre">
        <WhiteContainer title="Who we are" description="Established in 2010, we are a team with extensive regional experience and outstanding backing commited to delivering on time, on budget, and first-class quality." />
      </section>
      <section id="WhatWeDo">
        <IntroductionSection />
      </section>
      <section id="ContactUs">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ease: 'easeIn',
            duration: .6,
          }}
          viewport={{
            once: true
          }}
        >
          <WhiteContainer title="let’s start a conversation" description="We're delighted to connect with you and discuss how our expertise in the Middle East and Africa can help achieve your business goals.">
            <ContactForm />
          </WhiteContainer>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
