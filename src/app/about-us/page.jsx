import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AboutUs = () => {
  return (
    <section className="">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              About Coffee Haven
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Coffee Haven started with one simple idea — serve great coffee
              without pretending to be something we’re not. No shortcuts, no
              fake flavors, just carefully sourced beans and honest brewing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every cup we serve is made for people who actually love coffee —
              whether you’re starting your morning or taking a break from a long
              day. We believe coffee should feel warm, familiar, and real.
            </p>
            <p className="text-yellow-600 font-semibold text-lg">
              Good coffee. Calm space. No nonsense.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/best_coffee.png"
              alt="Coffee brewing at Coffee Haven"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default AboutUs;
