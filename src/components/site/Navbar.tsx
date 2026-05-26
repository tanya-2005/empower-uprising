import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#story", label: "Stories" },
  { href: "#gallery", label: "Gallery" },
  { href: "#join", label: "Volunteer" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-coral/60 shadow-glow">
            <img src={logo} alt="She Can Foundation" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold">She Can!</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Foundation</div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="#donate" className="rounded-full bg-gradient-primary animated-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105">
            Donate
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-full glass p-2.5">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mx-6 mt-3 glass rounded-2xl p-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium">{l.label}</a>
              ))}
              <a href="#donate" onClick={() => setOpen(false)} className="rounded-full bg-gradient-primary px-5 py-2.5 text-center text-sm font-semibold text-white">Donate</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
