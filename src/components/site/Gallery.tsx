import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, tall: true, label: "Sisterhood circles" },
  { src: g2, tall: false, label: "Learning today" },
  { src: g4, tall: false, label: "Together we rise" },
  { src: g3, tall: true, label: "Skill in her hands" },
  { src: g6, tall: false, label: "Her voice, her stage" },
  { src: g5, tall: true, label: "Care that travels" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-coral">
            Moments
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 text-4xl font-bold md:text-5xl">
            Faces of <span className="text-gradient">change</span>.
          </motion.h2>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${it.tall ? "aspect-[3/4]" : "aspect-square"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <div className="glass rounded-full px-4 py-2 text-sm font-medium">{it.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
