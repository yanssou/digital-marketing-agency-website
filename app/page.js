import { Footer, Navbar } from '../components';
import Contact from '../components/Contact';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      {/* <Insights /> */}
      <Feedback />
      <div className="gradient-04 z-0" />
      <Contact />
    </div>

    <Footer />
  </div>
);

export default Page;
