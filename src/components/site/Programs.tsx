import { motion } from "framer-motion";
import { BookOpen, Crown, Wrench, HeartPulse } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "Education", desc: "Scholarships, tutoring and learning centers that keep girls in school and dreaming bigger.", grad: "from-coral to-pink" },
  { icon: Crown, title: "Leadership", desc: "Mentorship circles and public-speaking labs shaping the next generation of women leaders.", grad: "from-violet to-coral" },
  { icon: Wrench, title: "Skill Development", desc: "Tailoring, coding, entrepreneurship — practical skills that turn into livelihoods.", grad: "from-pink to-violet" },
  { icon: HeartPulse, title: "Health Awareness", desc: "Community clinics and workshops on wellness, nutrition and reproductive health.", grad: "from-violet to-pink" },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-coral">
            What We Do
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 text-4xl font-bold md:text-5xl">
            Four pillars. <span className="text-gradient">Endless possibilities.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-4 text-muted-foreground">
            Holistic programs designed for real change at every stage of her journey.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${p.grad} opacity-0 blur transition group-hover:opacity-70`} />
              <div className="relative h-full glass rounded-3xl p-7 transition group-hover:border-white/30">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.grad} text-white shadow-glow`}>
                  <motion.div whileHover={{ rotate: 12, scale: 1.1 }}>
                    <p.icon size={26} />
                  </motion.div>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-coral opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
