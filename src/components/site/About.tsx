import { motion } from "framer-motion";
import { Counter } from "./Counter";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const counters = [
  { to: 5000, suffix: "+", label: "Women Supported" },
  { to: 120, suffix: "+", label: "Workshops" },
  { to: 30, suffix: "+", label: "Communities" },
  { to: 200, suffix: "+", label: "Volunteers" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} src={g1} alt="" loading="lazy" width={800} height={1024} className="aspect-[3/4] rounded-3xl object-cover shadow-glow" />
            <div className="flex flex-col gap-4 pt-12">
              <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} src={g2} alt="" loading="lazy" width={800} height={800} className="aspect-square rounded-3xl object-cover shadow-violet" />
              <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} src={g3} alt="" loading="lazy" width={800} height={1024} className="aspect-[4/5] rounded-3xl object-cover" />
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-glow max-w-[180px]"
          >
            <div className="font-script text-2xl text-coral">"She rose."</div>
            <div className="mt-1 text-xs text-muted-foreground">— Asha, 2024 graduate</div>
          </motion.div>
        </div>

        <div>
          <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-coral">
            Our Mission
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Every woman holds a <span className="text-gradient">universe</span>. We help her open it.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-6 text-lg text-muted-foreground">
            From classrooms in remote villages to leadership stages in cities, She Can! Foundation walks beside women as they discover their voice, build their skills, and rewrite their stories.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {counters.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 hover:shadow-glow transition"
              >
                <div className="font-display text-3xl font-bold text-gradient">
                  <Counter to={c.to} suffix={c.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{c.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
