import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface MeshGradientProps extends ComponentProps<"div"> {
  /**
   * Up to four CSS colors for the orbs, one per corner from the top left,
   * clockwise, repeated when there are fewer. By default violet, blue,
   * cyan and violet; pass theme variables such as `var(--chart-1)` to
   * follow your theme.
   */
  colors?: string[];
  /**
   * A fine, still grain over the colors, which hides the banding faint
   * gradients show on dark screens.
   *
   * @default true
   */
  grain?: boolean;
  /**
   * How strongly the orbs show over the surface.
   *
   * @default "medium"
   */
  intensity?: "subtle" | "medium" | "strong";
  /**
   * How fast the orbs drift: 2 is twice as fast, 0.5 half as fast.
   *
   * @default 1
   */
  speed?: number;
}

/** The orbs' strength, a multiplier of their alpha. */
const STRENGTH = { medium: "1", strong: "1.6", subtle: "0.6" } as const;

/** Each orb: a soft color field on the shared drift, with its own path and pace. */
const ORB =
  "mesh-gradient-orb animate-mesh-gradient-drift motion-reduce:[animation-play-state:paused]";

/**
 * The variables the props set, `colors` repeated to four; a prop left out
 * writes nothing, so the stylesheet's default (or yours) applies.
 */
const layerVars = (
  speed: number | undefined,
  intensity: MeshGradientProps["intensity"],
  colors: string[] = []
) =>
  ({
    "--mesh-gradient-speed": speed === undefined ? undefined : String(speed),
    "--mesh-gradient-strength":
      intensity === undefined ? undefined : STRENGTH[intensity],
    ...Object.fromEntries(
      colors.length === 0
        ? []
        : [1, 2, 3, 4].map((n) => [
            `--mesh-gradient-color-${n}`,
            colors[(n - 1) % colors.length],
          ])
    ),
  }) as CSSProperties;

/**
 * Four large color orbs, one held in each corner, overlapping into one
 * continuous mesh of color, drifting and breathing so slowly you barely
 * see them move: the soft gradient look of many product pages. Each orb
 * is a radial gradient a little larger than the box, whose stops ease out
 * to transparent, so it looks blurred without a blur filter; the
 * `mesh-gradient-drift` keyframes move and scale it along its own short
 * path, with `translate` and `scale` only, so nothing repaints and its
 * corner stays covered. On a dark surface (the `dark` class) they're
 * stronger and lifted toward white, so the hues stay distinct on
 * near-black. A still grain hides color banding. With reduced motion the
 * orbs rest where they start.
 *
 * @cssvar --mesh-gradient-color-1 The top-left orb (violet).
 * @cssvar --mesh-gradient-color-2 The top-right orb (blue).
 * @cssvar --mesh-gradient-color-3 The bottom-right orb (cyan).
 * @cssvar --mesh-gradient-color-4 The bottom-left orb (light violet).
 * @cssvar --mesh-gradient-speed The drift's speed, a multiplier (`1`).
 * @cssvar --mesh-gradient-strength The orbs' strength, a multiplier of their alpha (`1`).
 */
export const MeshGradient = (props: MeshGradientProps) => {
  const {
    colors,
    grain = true,
    intensity,
    speed,
    className,
    children,
    ...rest
  } = props;
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-background",
        className
      )}
      data-slot="mesh-gradient"
      {...rest}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 [content-visibility:auto] dark:[--mesh-gradient-lift:10%] dark:[--mesh-gradient-tone:1.45]",
          grain && "mesh-gradient-grain"
        )}
        data-slot="mesh-gradient-layer"
        style={layerVars(speed, intensity, colors)}
      >
        <span
          className={cn(ORB, "mesh-gradient-orb-1")}
          data-slot="mesh-gradient-orb"
        />
        <span
          className={cn(ORB, "mesh-gradient-orb-2")}
          data-slot="mesh-gradient-orb"
        />
        <span
          className={cn(ORB, "mesh-gradient-orb-3")}
          data-slot="mesh-gradient-orb"
        />
        <span
          className={cn(ORB, "mesh-gradient-orb-4")}
          data-slot="mesh-gradient-orb"
        />
      </div>
      {children}
    </div>
  );
};