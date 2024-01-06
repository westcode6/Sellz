import About from "../components/About";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Feedbacks from "../components/Feedbacks";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import Process from "../components/Process";
// import Team from "../components/Team";
// import WhyUs from "../components/WhyUs";


const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <About />
        <Features />
        <Feedbacks />
        {/* <Cta /> */}
        <Footer />
        {/* <Process />
        <WhyUs />
        <Team /> */}
        {/* <Feedbacks /> */}
      </div>
    </>
  );
};

export default HomePage;
