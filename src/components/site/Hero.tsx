import { motion } from "framer-motion";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-women.jpg";

const stats = [
  { value: "5K+", label: "Women Supported" },
  { value: "120+", label: "Workshops" },
  { value: "30+", label: "Communities" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-32 pb-20">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet/40 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-coral/40 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-pink/30 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
        {/* particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/60"
            style={{ left: `${(i * 73) % 100}%`, top: `${(i * 41) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/80"
          >
            <Sparkles size={14} className="text-coral" /> A Movement for Her
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Empowering Women. <br />
            <span className="text-gradient animated-gradient">Transforming</span>{" "}
            <span className="font-script text-coral text-6xl md:text-8xl">Futures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            She Can! Foundation builds bold futures through education, leadership and opportunity — one woman, one community, one story at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#join" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary animated-gradient px-7 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.03]">
              Join Us <Heart size={18} className="transition group-hover:scale-125" />
            </a>
            <a href="#donate" className="rounded-full glass px-7 py-3.5 font-semibold text-foreground transition hover:bg-white/10">
              Donate Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass rounded-2xl p-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass shadow-violet">
            <img src={heroImg} alt="Empowered women" width={1536} height={1280} className="h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-6 bottom-10 glass rounded-2xl p-4 shadow-glow"
          >
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Lives changed</div>
            <div className="font-display text-2xl font-bold text-gradient">+5,000</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-4 top-10 glass rounded-2xl p-4 shadow-violet"
          >
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Communities</div>
            <div className="font-display text-2xl font-bold text-gradient">30+</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
      >
        Scroll <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
