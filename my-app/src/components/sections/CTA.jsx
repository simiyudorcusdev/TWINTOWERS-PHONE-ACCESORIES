// src/components/sections/CTA.jsx

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-white text-center" id="contact">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Stay Ahead with <span className="text-white/90">TwinTowers</span>
        </h2>
        <p className="text-white/80 mb-10 text-lg">
          Join thousands of tech lovers who get the latest updates, exclusive offers, and first access to new gadgets.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full w-full sm:w-auto text-neutral-900 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition"
          >
            Subscribe Now
          </button>
        </form>

        <p className="text-white/60 mt-8 text-sm">
          Have questions? <a href="mailto:support@twintowers.tech" className="underline hover:text-white">Contact us</a>
        </p>
      </div>
    </section>
  );
}
