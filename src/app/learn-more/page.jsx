import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function LearnMore() {
  return (
    <section>
        <Navbar></Navbar>
      <div className="bg-cream-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
                alt="Coffee brewing process"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900">
                More Than Just Coffee
              </h2>

              <p className="text-coffee-700 text-base sm:text-lg leading-relaxed">
                At Coffee Haven, we focus on quality, consistency, and comfort.
                Every bean is carefully selected, every cup brewed with
                intention, and every space designed for calm and connection.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <span className="text-xl">☕</span>
                  <p className="text-coffee-700">
                    Carefully sourced, premium coffee beans
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">🔥</span>
                  <p className="text-coffee-700">
                    Freshly brewed by trained baristas
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">🌱</span>
                  <p className="text-coffee-700">
                    Ethical and sustainable sourcing
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">🏡</span>
                  <p className="text-coffee-700">
                    Calm, welcoming spaces to relax or work
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/coffee-menu"
                  className="inline-block btn-primary px-8 py-4 text-base"
                >
                  View Our Coffee Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
