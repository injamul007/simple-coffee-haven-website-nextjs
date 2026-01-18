export default function Features() {
  const features = [
    {
      icon: "☕",
      title: "Premium Quality",
      description:
        "Hand-selected coffee beans from the finest coffee regions around the world.",
    },
    {
      icon: "🌱",
      title: "Organic & Fair Trade",
      description:
        "Ethically sourced, organic coffee that supports sustainable farming practices.",
    },
    {
      icon: "⚡",
      title: "Fresh Roasted",
      description:
        "Coffee beans roasted daily to ensure maximum freshness and flavor.",
    },
    {
      icon: "👨‍🍳",
      title: "Expert Baristas",
      description:
        "Skilled baristas crafting each cup with precision and passion.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Quick delivery to bring fresh coffee directly to your doorstep.",
    },
    {
      icon: "💝",
      title: "Perfect Gift",
      description:
        "Beautiful packaging makes our coffee the perfect gift for coffee lovers.",
    },
  ];

  return (
    <section
      id="features"
      className="section-padding bg-cream-50 w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Why Choose Coffee Haven?
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            We're passionate about delivering the perfect coffee experience
            through quality beans, expert craftsmanship, and exceptional
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-coffee-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-coffee-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
