// src/components/sections/Stats.jsx
export default function Stats() {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "120+", label: "Partner Brands" },
    { number: "1M+", label: "Devices Sold" },
    { number: "10+", label: "Years of Innovation" },
  ];

  return (
    <section className="bg-white border-t border-neutral-200 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                {stat.number}
              </h3>
              <p className="text-neutralDark/70 mt-2 text-base lg:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
