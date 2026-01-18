import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-r from-coffee-800 to-coffee-900 text-white w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready for Your Perfect Cup?
        </h2>
        <p className="text-xl md:text-2xl text-cream-100 mb-8 leading-relaxed">
          Join thousands of coffee enthusiasts and discover why Coffee Haven is
          the ultimate destination for premium coffee. Your perfect brew awaits!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/coffee-menu"
            className="bg-cream-50 text-coffee-800 hover:bg-cream-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
          >
            Explore Coffee Menu
          </Link>
          <Link
            href="/login"
            className="border-2 border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-coffee-800 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Join Coffee Haven
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cream-200 mb-2">50K+</div>
            <div className="text-cream-300">Happy Coffee Lovers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cream-200 mb-2">20+</div>
            <div className="text-cream-300">Coffee Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cream-200 mb-2">Daily</div>
            <div className="text-cream-300">Fresh Roasted</div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">
            ☕ New Customer Special
          </h3>
          <p className="text-cream-100 mb-4">
            Get 15% off your first coffee order when you join Coffee Haven
            today! Use code{" "}
            <span className="font-bold text-cream-200">WELCOME15</span> at
            checkout.
          </p>
          <p className="text-sm text-cream-300">
            *Valid for new customers only. Minimum order $10. Valid for 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}
