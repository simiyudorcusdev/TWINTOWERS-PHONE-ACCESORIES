// src/components/common/Button.jsx
export default function Button({ children, variant = "primary" }) {
  const base =
    "px-6 py-2 rounded-xl font-medium transition-all duration-200 focus:outline-none";
  const styles = {
    primary: `${base} bg-primary text-white hover:bg-primary/90`,
    secondary: `${base} bg-secondary text-white hover:bg-secondary/90`,
    outline: `${base} border-2 border-primary text-primary hover:bg-primary hover:text-white`,
  };
  return <button className={styles[variant]}>{children}</button>;
}
