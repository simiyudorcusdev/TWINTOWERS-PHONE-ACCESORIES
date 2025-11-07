// src/components/layout/Navigation.jsx
export default function Navigation() {
  return (
    <nav className="hidden lg:flex space-x-10">
      <a href="#" className="text-neutralDark hover:text-primary transition">
        Home
      </a>
      <a href="#" className="text-neutralDark hover:text-primary transition">
        Shop
      </a>
      <a href="#" className="text-neutralDark hover:text-primary transition">
        About
      </a>
      <a href="#" className="text-neutralDark hover:text-primary transition">
        Contact
      </a>
    </nav>
  );
}
