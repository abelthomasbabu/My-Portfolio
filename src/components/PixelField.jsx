import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

const CELL = 14; // px per pixel block
const GAP = 2;

// Hero backdrop: a grid of pixel blocks. A few light up on their own, and the pointer
// paints a fading trail. Stops drawing when off screen or in a background tab; under
// reduced motion it draws one still frame.
export const PixelField = () => {
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let cols = 0;
    let rows = 0;
    let heat = new Float32Array(0);
    let hue = new Uint8Array(0); // 0 = accent, 1 = amber
    let raf = 0;
    let visible = true;
    let last = 0;

    const colours = () => {
      const s = getComputedStyle(document.documentElement);
      return {
        accent: s.getPropertyValue("--accent").trim(),
        amber: s.getPropertyValue("--amber").trim(),
        base: s.getPropertyValue("--field").trim(),
      };
    };
    let palette = colours();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      heat = new Float32Array(cols * rows);
      hue = new Uint8Array(cols * rows);
      if (reduced) {
        for (let i = 0; i < heat.length; i++) if (Math.random() < 0.04) heat[i] = 0.5 + Math.random() * 0.4;
      }
      draw();
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const h = heat[i];
          ctx.globalAlpha = 1;
          ctx.fillStyle = palette.base;
          ctx.fillRect(x * CELL, y * CELL, CELL - GAP, CELL - GAP);
          if (h > 0.02) {
            ctx.globalAlpha = Math.min(h, 1) * 0.55;
            ctx.fillStyle = hue[i] ? palette.amber : palette.accent;
            ctx.fillRect(x * CELL, y * CELL, CELL - GAP, CELL - GAP);
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // Stepped at ~12 fps for an 8-bit feel, and cheap.
    const tick = (t) => {
      raf = requestAnimationFrame(tick);
      if (!visible || t - last < 83) return;
      last = t;
      for (let i = 0; i < heat.length; i++) heat[i] *= 0.82;
      for (let n = 0; n < 3; n++) {
        const i = Math.floor(Math.random() * heat.length);
        heat[i] = 1;
        hue[i] = Math.random() < 0.25 ? 1 : 0;
      }
      draw();
    };

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      const cx = Math.floor((e.clientX - rect.left) / CELL);
      const cy = Math.floor((e.clientY - rect.top) / CELL);
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const x = cx + dx;
          const y = cy + dy;
          if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
          const i = y * cols + x;
          heat[i] = Math.max(heat[i], dx === 0 && dy === 0 ? 1.4 : 0.7);
          hue[i] = 0;
        }
      }
    };

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);
    const onVisibility = () => (visible = !document.hidden);
    const themeObserver = new MutationObserver(() => {
      palette = colours();
      draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pixel-field pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  );
};
