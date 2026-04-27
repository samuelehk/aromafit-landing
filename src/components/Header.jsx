import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/hush", label: "Shop HUSH" },
  { to: "/#science", label: "Science" },
  { to: "/#reviews", label: "Reviews" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md border-b border-ink/5"
          : "bg-cream-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-tight text-ink">AromaFit</span>
          <span className="text-[10px] uppercase tracking-widest text-rosegold">Wellness</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition ${
                  isActive ? "text-ink" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/hush" className="btn-primary !py-3 !px-6 text-xs">
            <ShoppingBag size={16} /> Get HUSH
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden text-ink p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-50 border-t border-ink/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/hush" className="btn-primary w-full" onClick={() => setOpen(false)}>
            <ShoppingBag size={16} /> Get HUSH
          </Link>
        </div>
      )}
    </header>
  );
}
