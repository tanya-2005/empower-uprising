import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

type Field = "name" | "email" | "message";

export function Volunteer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Partial<Record<Field, string>> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as Field] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="join" className="relative py-32 overflow-hidden">
      <div id="donate" className="absolute -top-40" />
      <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-violet/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-coral/30 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-coral">Join the Movement</span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Be the <span className="text-gradient">reason</span> someone rises.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Volunteer your time, share your skills, or fund a workshop. Every gesture becomes a girl's tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="rounded-full bg-gradient-primary animated-gradient px-6 py-3 font-semibold text-white shadow-glow">Donate Now</a>
            <a href="#" className="rounded-full glass px-6 py-3 font-semibold">Partner with Us</a>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-8 shadow-violet"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-30 blur-lg -z-10" />
          {(["name", "email", "message"] as Field[]).map((field) => (
            <FloatingField
              key={field}
              field={field}
              type={field === "email" ? "email" : "text"}
              textarea={field === "message"}
              value={form[field]}
              onChange={(v) => setForm({ ...form, [field]: v })}
              error={errors[field]}
            />
          ))}

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary animated-gradient px-6 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.02]">
            Send <Send size={16} />
          </button>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-coral/20 px-4 py-3 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="text-coral" size={18} /> Thank you — we'll be in touch soon!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

function FloatingField({
  field, type, textarea, value, onChange, error,
}: {
  field: string;
  type: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Comp: any = textarea ? "textarea" : "input";
  return (
    <div className="relative mb-5">
      <label className={`pointer-events-none absolute left-4 transition-all ${active ? "top-1.5 text-[10px] uppercase tracking-widest text-coral" : "top-4 text-sm text-muted-foreground"}`}>
        {field === "name" ? "Your name" : field === "email" ? "Email address" : "Your message"}
      </label>
      <Comp
        type={type}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={textarea ? 4 : undefined}
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 pt-6 pb-2 text-foreground outline-none transition focus:border-coral focus:bg-white/10"
      />
      {error && <p className="mt-1 text-xs text-pink">{error}</p>}
    </div>
  );
}
