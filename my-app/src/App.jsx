// src/App.jsx
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import About from "./components/sections/About";
import CTA from "./components/sections/CTA";
import Categories from "./components/sections/Categories";
import Testimonials from "./components/sections/Testimonials";
export default function App() {
  return (
    <div className="font-sans text-neutral-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Products />
        <About />
        <Testimonials />
        <CTA />

      </main>
      <Footer />
    </div>
  );
}
