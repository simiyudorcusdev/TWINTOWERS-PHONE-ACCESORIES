// src/components/layout/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-10 text-center text-neutral-600">
      <div className="container mx-auto px-6">
        <p className="text-sm mb-3">
          © {new Date().getFullYear()} <span className="font-semibold text-neutral-900">TwinTowers</span>. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
