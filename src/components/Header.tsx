import { useEffect,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Code,
  Layers,
  Users,
  Phone,
} from "lucide-react";

import white_logo from "../assets/colored-logo.png";
import blue_logo from "../assets/logo_panja.png";

/* ---------------- NAV LINKS ---------------- */

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Solutions", path: "/solutions", icon: Code },
  { name: "Work", path: "/work", icon: Layers },
  { name: "About", path: "/about", icon: Users },
  { name: "Contact", path: "/contact", icon: Phone },
];

/* ---------------- COMPONENT ---------------- */

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* -------- Mobile Detection -------- */
  // const isMobile = useMemo(() => {
  //   if (typeof window === "undefined") return false;
  //   return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // }, []);

  /* -------- Scroll Listener (lighter than framer useScroll) -------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------- Close menu on route change -------- */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  /* -------- Logo logic -------- */
  const logoSrc =
    isScrolled || ["/solutions", "/about"].includes(location.pathname)
      ? blue_logo
      : white_logo;

  /* ---------------- RENDER ---------------- */

  return (
    <>
      {/* ================= HEADER ================= */}

      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-3">

          {/* Logo */}
          <Link to="/" className="relative z-50">
            <img src={logoSrc} className="h-12 w-auto" alt="Panja Solutions" />
          </Link>

          {/* ------------ Desktop Nav ------------ */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;

              return (
                <Link key={link.path} to={link.path} className="relative group">
                  <div className="flex items-center gap-2">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isScrolled || ["/solutions", "/about"].includes(location.pathname)
                          ? "text-[#0f2e52]"
                          : "text-white"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium transition-colors
                        ${
                          isScrolled || ["/solutions", "/about"].includes(location.pathname)
                            ? "text-[#0f2e52] hover:text-[#1296db]"
                            : "text-white hover:text-white/80"
                        }`}
                    >
                      {link.name}
                    </span>
                  </div>

                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2098D0] to-[#95C1D9]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ------------ Mobile Button ------------ */}
          <button
            className="md:hidden z-50 p-2 rounded-lg bg-white/10 border border-white/20"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0f2e52]" />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled || ["/solutions", "/about"].includes(location.pathname)
                    ? "text-[#0f2e52]"
                    : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#0F2E52] pt-24 pb-8"
            >
              <div className="px-6 space-y-3">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-4 px-4 py-4 rounded-xl transition
                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#2098D0] to-[#95C1D9] text-white"
                            : "bg-white/5 text-white/90"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-lg font-medium">{link.name}</span>
                    </Link>
                  );
                })}

                {/* Contact CTA */}
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-[#2098D0] to-[#95C1D9] text-white font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
