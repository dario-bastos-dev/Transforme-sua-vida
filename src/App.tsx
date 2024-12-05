import Footer from "./ui/components/footer";
import Header from "./ui/components/header";
import Benefits from "./ui/partials/benefits";
import Content from "./ui/partials/content";
import FAQ from "./ui/partials/faq";
import Final from "./ui/partials/final";
import Guarantee from "./ui/partials/guarantee";
import HeroSection from "./ui/partials/hero";
import Inducing from "./ui/partials/inducing";
import PainPoints from "./ui/partials/painPoints";
import Pricing from "./ui/partials/pricing";
import Testimonials from "./ui/partials/testimonials";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PainPoints />
      <Benefits />
      <Content />
      <Testimonials />
      <Inducing />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Final />
      <Footer />
    </>
  );
}

export default App;
