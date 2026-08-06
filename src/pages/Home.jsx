import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedWorks from '../components/FeaturedWorks';
import ContactCTA from '../components/ContactCTA';
import MegaFooter from '../components/MegaFooter';
import MinimalHeader from '../components/MinimalHeader';

const Home = () => (
  <>
    <MinimalHeader dark scrollTarget="#about" />
    <Hero />
    <About />
    <FeaturedWorks />
    <ContactCTA />
    <MegaFooter />
  </>
);

export default Home;
