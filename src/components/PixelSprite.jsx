import { palette } from "@/data/sprites";

// Draws a sprite as one SVG rect per pixel; crispEdges keeps the pixels sharp at any scale.
export const PixelSprite = ({ rows, scale = 4, title, className = "" }) => {
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
