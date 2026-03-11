import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import logo from "@/assets/logo.jpg";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Production", href: "/production" },
  { label: "Intrants", href: "/intrants" },
  { label: "Projet", href: "/projet" },
  { label: "Formations", href: "/formations" },
  { label: "Galerie", href: "/galerie" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Update sliding indicator position
  useEffect(() => {
    if (!navRef.current) return;
    const active = navRef.current.querySelector<HTMLElement>("[data-active='true']");
    if (active) {
      const navRect = navRef.current.getBoundingClientRect();
      const rect = active.getBoundingClientRect();
      setActiveIndicator({ left: rect.left - navRect.left, width: rect.width });
    }
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-[#0c180e]/95 backdrop-blur-xl border-b border-green-100 dark:border-white/8 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-[4.5rem]">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={logo}
                alt="Organic Green Lettuce by SKY"
                className="relative h-10 w-10 md:h-11 md:w-11 rounded-xl object-cover shadow-md border border-green-100 dark:border-green-900/60 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span
                className="font-bold text-stone-800 dark:text-stone-100 text-base leading-none group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-200"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Organic Green Lettuce
              </span>
              <span className="text-[10px] text-green-600 dark:text-green-500 font-body tracking-[0.2em] uppercase mt-0.5">
                by SKY
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-0.5 relative"
          >
            {/* Sliding pill indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-lg bg-green-600/10 dark:bg-green-500/15 pointer-events-none"
              animate={{ left: activeIndicator.left, width: activeIndicator.width }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
            />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-active={isActive(link.href)}
                className={`relative px-3 py-1.5 text-[13px] font-body font-medium transition-colors duration-200 rounded-lg whitespace-nowrap z-10 ${
                  isActive(link.href)
                    ? "text-green-700 dark:text-green-400"
                    : "text-stone-600 dark:text-stone-400 hover:text-green-700 dark:hover:text-green-300"
                }`}
              >
                {link.label}
                {/* Active dot */}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* CTA button — desktop only */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-body font-semibold text-xs shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Leaf size={12} />
              Nous contacter
            </Link>

            {/* Burger — mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-green-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-stone-700 dark:text-stone-300 hover:border-green-400 dark:hover:border-green-600 transition-colors duration-200"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden bg-white/98 dark:bg-[#0d1a10]/98 backdrop-blur-xl border-b border-green-100 dark:border-white/8 shadow-xl overflow-hidden"
            >
              {/* Logo mini repeat */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-3 border-b border-green-100 dark:border-white/5">
                <img src={logo} alt="Logo" className="h-8 w-8 rounded-lg object-cover" />
                <span className="text-sm font-bold text-stone-800 dark:text-stone-100 font-body">Organic Green Lettuce</span>
              </div>

              <nav className="px-4 py-3 grid grid-cols-2 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-200 ${
                        isActive(link.href)
                          ? "bg-green-600 text-white shadow-sm"
                          : "text-stone-700 dark:text-stone-300 hover:bg-green-50 dark:hover:bg-white/5 hover:text-green-700 dark:hover:text-green-400"
                      }`}
                    >
                      {isActive(link.href) && <Leaf size={12} className="flex-shrink-0" />}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-5 pt-2 pb-5">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-body font-semibold text-sm shadow-lg"
                >
                  <Leaf size={14} />
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}