export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Coffee",
      description:
        "Browse our expertly curated coffee menu. From bold espressos to creamy lattes, find your perfect brew.",
      icon: "☕",
    },
    {
      step: "02",
      title: "Customize Your Order",
      description:
        "Select your preferred size, milk type, and sweetness level. Make it exactly how you like it.",
      icon: "🎯",
    },
    {
      step: "03",
      title: "Expert Preparation",
      description:
        "Our skilled baristas craft your coffee with precision using premium beans and professional equipment.",
      icon: "👨‍🍳",
    },
    {
      step: "04",
      title: "Enjoy Fresh Coffee",
      description:
        "Pick up your freshly made coffee or have it delivered hot to your location. Savor every sip!",
      icon: "🚚",
    },
  ];

  return (
    <section className="section-padding bg-cream-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            How We Brew Perfection
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            From bean to cup, every step is carefully crafted to deliver the
            perfect coffee experience you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card text-center hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-coffee-600 font-bold text-lg mb-3">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-coffee-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-coffee-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-8 h-8 text-coffee-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
