import { useEffect, useState } from "react";
import { palette } from "@/data/sprites";
import { useReducedMotion } from "@/lib/motion";

// Draws a sprite as one SVG rect per pixel; crispEdges keeps the pixels sharp at any scale.
// With several frames and `playing`, it steps through them like a flipbook.
export const PixelSprite = ({ frames, scale = 4, title, playing = true, interval = 450, className = "" }) => {
  const reduced = useReducedMotion();
  const [frame, setFrame] = useState(0);
  const animate = playing && !reduced && frames.length > 1;

  useEffect(() => {
    if (!animate) {
      setFrame(0);
      return;
    }
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), interval);
    return () => clearInterval(id);
  }, [animate, frames.length, interval]);

  const rows = frames[animate ? frame : 0];
  const width = rows[0].length;
  const height = rows.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      shapeRendering="crispEdges"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      className={className}
    >
      {title && <title>{title}</title>}
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) =>
          ch === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1"
              height="1"
              fill={palette[ch]}
              className={ch === "x" ? "pixel-blink" : undefined}
            />
          )
        )
      )}
    </svg>
  );
};
