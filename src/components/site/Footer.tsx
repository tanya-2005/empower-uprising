import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-px w-full origin-left bg-gradient-primary" />

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-coral/60">
                <img src={logo} alt="She Can Foundation" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-display text-xl font-bold">She Can! <span className="text-coral">Foundation</span></div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Empowering women, transforming futures</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              A registered non-profit working across 30+ communities to make sure every woman has the tools to build the life she dreams of.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-gradient-primary hover:text-white hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Programs", "Stories", "Gallery", "Volunteer"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-coral transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4">Get in touch</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@shecan.org</li>
              <li>+91 98 000 12345</li>
              <li>Mumbai · India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} She Can! Foundation. Made with love.</div>
          <div className="flex gap-4"><a href="#" className="hover:text-foreground">Privacy</a><a href="#" className="hover:text-foreground">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
