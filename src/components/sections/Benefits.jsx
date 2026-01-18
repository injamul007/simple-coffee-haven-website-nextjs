import Image from "next/image";

export default function Benefits() {
  const benefits = [
    {
      title: "Premium Quality Beans",
      description:
        "We source only the finest coffee beans from sustainable farms around the world for exceptional taste.",
      stats: "100%",
      statsDesc: "premium grade",
    },
    {
      title: "Expert Barista Crafted",
      description:
        "Every cup is prepared by skilled baristas trained in the art of coffee making.",
      stats: "5+ Years",
      statsDesc: "average experience",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Join thousands of coffee lovers who trust Coffee Haven for their daily brew.",
      stats: "99.2%",
      statsDesc: "satisfaction rate",
    },
    {
      title: "Fresh Daily Roasting",
      description:
        "Our beans are roasted fresh daily to ensure maximum flavor and aroma in every cup.",
      stats: "Daily",
      statsDesc: "fresh roasting",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-coffee-800 to-coffee-900 text-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Coffee Lovers Choose Us
            </h2>
            <p className="text-xl text-cream-100 mb-8 leading-relaxed">
              We're not just another coffee shop. We're passionate artisans
              dedicated to crafting the perfect cup through quality beans,
              expert preparation, and exceptional service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-cream-200 mb-1">
                    {benefit.stats}
                  </div>
                  <div className="text-cream-300 text-sm mb-3">
                    {benefit.statsDesc}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-cream-100 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Coffee Preparation"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-cream-200 text-coffee-900 rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-xs">Rating</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-coffee-600 text-cream-50 rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-xs">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
