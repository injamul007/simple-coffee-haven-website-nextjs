import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

async function getFeaturedItems() {
  const filePath = path.join(process.cwd(), "public/data/coffee-items.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(file);

  return items.slice(0, 6);
}

export default async function ItemsPreview() {
  const items = await getFeaturedItems();

  return (
    <section className="section-padding bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Featured Coffee
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular coffee selections, carefully crafted by
            our expert baristas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-coffee-900 mb-3">
                {item.name}
              </h3>

              <p className="text-coffee-600 mb-6 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-coffee-800">
                  ৳{item.price}
                </span>
                <Link
                  href={`/coffee-menu/${item.id}`}
                  className="btn-primary text-sm"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/coffee-menu" className="btn-primary text-lg px-10 py-4">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
