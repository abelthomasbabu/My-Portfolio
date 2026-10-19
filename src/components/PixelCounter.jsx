import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "@/lib/motion";

// Ticks a number from `from` to `to` in a few chunky steps once it scrolls into view.
// Screen readers only ever get the final value.
export const PixelCounter = ({ from, to, decimals = 0, suffix = "", steps = 12 }) => {
  const ref = useRef(null);
  const seen = useInView(ref);
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : from);

  useEffect(() => {
    if (reduced) {
      setValue(to);
      return;
    }
    if (!seen) return;
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      setValue(from + ((to - from) * step) / steps);
      if (step >= steps) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, [seen, reduced, from, to, steps]);

  const final = `${to.toFixed(decimals)}${suffix}`;
  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {value.toFixed(decimals)}
        {suffix}
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
};
