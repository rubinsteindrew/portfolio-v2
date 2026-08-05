import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import Work from '@/components/site/Work';
import Practice from '@/components/site/Practice';
import Agent from '@/components/site/Agent';
import Path from '@/components/site/Path';
import Contact from '@/components/site/Contact';

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <hr className="rule" />
      <Work />
      <hr className="rule" />
      <Practice />
      <hr className="rule" />
      <Agent />
      <hr className="rule" />
      <Path />
      <Contact />
    </main>
  </>
);

export default Index;
