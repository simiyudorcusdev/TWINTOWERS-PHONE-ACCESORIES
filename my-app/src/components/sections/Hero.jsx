// src/components/sections/Hero.jsx
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-neutralLight py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-neutralDark leading-tight">
            Experience the <span className="text-primary">Future</span> of Smart
            Living
          </h1>
          <p className="text-neutralDark/80 text-lg max-w-lg">
            Discover innovative gadgets designed to power your lifestyle — from
            cutting-edge smartphones to next-gen accessories. Technology made
            simple, elegant, and powerful.
          </p>

          <div className="pt-4">
            <Button>Shop Now</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Smartphone futuristic display"
            className="w-[90%] lg:w-[80%] rounded-3xl shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
