import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Benefits from "../components/sections/Benefits.jsx";
import CallToAction from "../components/sections/CallToAction.jsx";
import Features from "../components/sections/Features.jsx";
import Hero from "../components/sections/Hero.jsx";
import HowItWorks from "../components/sections/HowItWorks.jsx";
import ItemsPreview from "../components/sections/ItemsPreview.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="min-h-[calc(100vh-502px)]">
        <Hero></Hero>
        <Features />
        <HowItWorks />
        <ItemsPreview />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer></Footer>
    </div>
  );
}
