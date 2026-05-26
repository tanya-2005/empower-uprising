import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, oklch(0.72 0.19 35 / 0.08), transparent 70%)`,
        transition: "background 0.1s",
      }}
    />
  );
}
