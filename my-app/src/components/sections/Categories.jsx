// src/components/sections/Categories.jsx

export default function Categories() {
  const categories = [
    {
      name: "Smartphones",
      desc: "Discover flagship and budget phones from top brands.",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Laptops",
      desc: "Powerful laptops for gaming, work, and creativity.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Audio Gear",
      desc: "Headphones, earbuds, and speakers for pure sound quality.",
      img: "https://images.unsplash.com/photo-1590595906931-81f6c8d22b4c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Wearables",
      desc: "Smartwatches and fitness bands to keep you connected.",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-neutral-light" id="categories">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
          Shop by <span className="text-primary">Category</span>
        </h2>
        <p className="text-neutral-dark/70 max-w-2xl mx-auto mb-12">
          Find everything you need in one place — from the latest phones to high-performance laptops and gadgets.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                <h3 className="text-xl font-semibold mb-1">{cat.name}</h3>
                <p className="text-sm text-white/80">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
