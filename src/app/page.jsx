import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className='min-h-[calc(100vh-502px)]'>
        <Hero></Hero>
      </main>
      <Footer></Footer>
    </div>
  );
}
