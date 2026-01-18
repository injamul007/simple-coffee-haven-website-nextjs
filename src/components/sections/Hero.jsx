import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden h-[85vh] md:h-[90vh]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Coffee Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-coffee-900/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 leading-tight">
            Savor the
            <span className="block text-cream-200">Perfect Brew</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cream-100 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Experience the finest coffee crafted with passion and precision.
            From rich espressos to smooth lattes, discover your perfect cup.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
            <Link
              href="/coffee-menu"
              className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto"
            >
              Explore Menu
            </Link>
            <Link
              href="/learn-more"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto bg-cream-50/20 text-cream-50 border-cream-50/30 hover:bg-cream-50/30"
            >
              Learn More
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-cream-100">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 bg-cream-200/20 rounded-full flex items-center justify-center">
                ☕
              </div>
              <span className="font-medium text-sm sm:text-base">
                Premium Beans
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 bg-cream-200/20 rounded-full flex items-center justify-center">
                🌱
              </div>
              <span className="font-medium text-sm sm:text-base">
                Organic & Fair Trade
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-8 bg-cream-200/20 rounded-full flex items-center justify-center">
                ⚡
              </div>
              <span className="font-medium text-sm sm:text-base">
                Fresh Daily
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icon (desktop only) */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce">
        <div className="w-20 h-20 bg-cream-200/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-4xl">☕</span>
        </div>
      </div>
    </section>
  );
}
