// src/components/sections/About.jsx

export default function About() {
  return (
    <section className="py-24 bg-neutral-50" id="about">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1603400938371-d030ad03505b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
            alt="Modern tech workspace with laptop and gadgets"
            className="rounded-2xl shadow-md w-full max-w-md object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            About <span className="text-primary">TwinTowers</span>
          </h2>
          <p className="text-neutral-600 mb-6 leading-relaxed">
            TwinTowers is more than a tech brand — it’s a hub for innovation and next-generation connectivity. 
            Founded by gadget enthusiasts, we’re redefining how people discover and experience technology in Kenya and beyond.
          </p>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            From flagship smartphones to must-have accessories, we believe in delivering 
            top-tier products with unmatched customer satisfaction. Our goal is to make premium tech accessible, reliable, and exciting.
          </p>

          <a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Explore Our Store
          </a>
        </div>
      </div>
    </section>
  );
}
