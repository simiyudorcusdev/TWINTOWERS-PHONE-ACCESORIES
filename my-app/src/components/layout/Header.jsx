// src/components/layout/Header.jsx
import Navigation from "./Navigation";
import Button from "../common/Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Brand Logo */}
        <div className="text-2xl font-heading font-bold text-primary">
          TwinTowers
        </div>

        {/* Navigation */}
        <Navigation />

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button>Shop Now</Button>
        </div>

        {/* Mobile Menu (placeholder for now) */}
        <div className="lg:hidden">
          <button aria-label="Open menu" className="text-neutralDark">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
