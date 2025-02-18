import LandingHeader from "../components/landing/LandingHeader/LandingHeader";
import LandingHero from "../components/landing/LandingHero";
import LandingFooter from "../components/landing/LandingFooter";

import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <section className="landing-wrapper">
      <Helmet>
        <title>Liquid Button - Animated UI Component For React</title>
      </Helmet>
      <LandingHeader />
      <LandingHero />
    </section>
  );
};

export default LandingPage;
