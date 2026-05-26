import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import storyImg from "@/assets/story.jpg";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={storyImg} alt="" loading="lazy" width={1280} height={1536} className="h-full w-full object-cover opacity-30" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet/20 via-transparent to-coral/20" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
          <Quote className="text-white" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 font-display text-3xl font-medium leading-snug md:text-5xl"
        >
          "I came in afraid to speak.<br />
          I left knowing I could <span className="text-gradient italic">build a school</span>."
        </motion.blockquote>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-primary" />
          <div className="text-left">
            <div className="font-semibold">Priya Sharma</div>
            <div className="text-sm text-muted-foreground">Founder, Roshni Learning Center</div>
          </div>
          <div className="h-px w-12 bg-gradient-primary" />
        </motion.div>
      </div>
    </section>
  );
}
