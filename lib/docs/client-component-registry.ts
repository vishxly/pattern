// lib/client-component-registry.ts
import { lazy } from "react";

const componentMap = {
  "accordion-basic": lazy(() =>
    import("@/lib/docs/components/accordion").then((m) => ({
      default: m.AccordionDemo,
    }))
  ),
  "avatar-basic": lazy(() =>
    import("@/lib/docs/components/avatar").then((m) => ({
      default: m.default,
    }))
  ),
  "button-default": lazy(() =>
    import("@/lib/docs/components/button").then((m) => ({
      default: m.DefaultButton,
    }))
  ),

  "card-basic": lazy(() =>
    import("@/lib/docs/components/card").then((m) => ({ default: m.BasicCard }))
  ),

  "carousel-basic": lazy(() =>
    import("@/lib/docs/components/orbital-carousel").then((m) => ({
      default: m.default,
    }))
  ),
  "floating-basic": lazy(() =>
    import("@/lib/docs/components/floating-navigator").then((m) => ({
      default: m.default,
    }))
  ),
  "morphing-basic": lazy(() =>
    import("@/lib/docs/components/morphing-card").then((m) => ({
      default: m.default,
    }))
  ),
  "dock-basic": lazy(() =>
    import("@/lib/docs/components/dock").then((m) => ({
      default: m.DockDemo,
    }))
  ),
  "timeline-basic": lazy(() =>
    import("@/lib/docs/components/timeline").then((m) => ({
      default: m.TimelineDemo,
    }))
  ),

  "sheet-basic": lazy(() =>
    import("@/lib/docs/components/sheet").then((m) => ({
      default: m.default,
    }))
  ),
  "spotlight-basic": lazy(() =>
    import("@/lib/docs/components/spotlight").then((m) => ({
      default: m.default,
    }))
  ),
  "command-basic": lazy(() =>
    import("@/lib/docs/components/command-menu").then((m) => ({
      default: m.default,
    }))
  ),
  "celestial-basic": lazy(() =>
    import("@/lib/docs/components/celestial").then((m) => ({
      default: m.default,
    }))
  ),
  "chronoscroll-basic": lazy(() =>
    import("@/lib/docs/components/chrono-scroll").then((m) => ({
      default: m.default,
    }))
  ),

  "hoverpreview-basic": lazy(() =>
    import("@/lib/docs/components/hover-preview").then((m) => ({
      default: m.default,
    }))
  ),
  "magnetic-cards-basic": lazy(() =>
    import("@/lib/docs/components/magnetic-cards").then((m) => ({
      default: m.default,
    }))
  ),
  "smart-search-basic": lazy(() =>
    import("@/lib/docs/components/smart-search").then((m) => ({
      default: m.default,
    }))
  ),

  "globe-basic": lazy(() =>
    import("@/lib/docs/components/globe").then((m) => ({
      default: m.default,
    }))
  ),
  "otp-input-basic": lazy(() =>
    import("@/lib/docs/components/otp-input").then((m) => ({
      default: m.default,
    }))
  ),
  "card-transition-basic": lazy(() =>
    import("@/lib/docs/components/card-transition").then((m) => ({
      default: m.default,
    }))
  ),
  "pulse-border-basic": lazy(() =>
    import("@/lib/docs/components/pulse-border").then((m) => ({
      default: m.default,
    }))
  ),
  "folder-basic": lazy(() =>
    import("@/lib/docs/components/folder").then((m) => ({
      default: m.default,
    }))
  ),
  "marquee-basic": lazy(() =>
    import("@/lib/docs/components/marquee").then((m) => ({
      default: m.default,
    }))
  ),
  "cascade-input-basic": lazy(() =>
    import("@/lib/docs/components/cascade-input").then((m) => ({
      default: m.default,
    }))
  ),
  "animated-text-basic": lazy(() =>
    import("@/lib/docs/components/animated-text").then((m) => ({
      default: m.default,
    }))
  ),
  "warp-overlay-basic": lazy(() =>
    import("@/lib/docs/components/warp-overlay").then((m) => ({
      default: m.default,
    }))
  ),
  "tag-selector-basic": lazy(() =>
    import("@/lib/docs/components/tag-selector").then((m) => ({
      default: m.default,
    }))
  ),
  "chart-basic": lazy(() =>
    import("@/lib/docs/components/chart").then((m) => ({
      default: m.default,
    }))
  ),
  "loader-basic": lazy(() =>
    import("@/lib/docs/components/loader").then((m) => ({
      default: m.LoaderDemo,
    }))
  ),
  "dialog-stack-basic": lazy(() =>
    import("@/lib/docs/components/dialog-stack").then((m) => ({
      default: m.default,
    }))
  ),
  "beam-effect-basic": lazy(() =>
    import("@/lib/docs/components/beam-effect").then((m) => ({
      default: m.default,
    }))
  ),
  "luminous-icon-basic": lazy(() =>
    import("@/lib/docs/components/luminous-icon").then((m) => ({
      default: m.default,
    }))
  ),
  "sliding-number-basic": lazy(() =>    import("@/lib/docs/components/sliding-number").then((m) => ({
      default: m.SlidingNumberDemo,
    }))
  ),
 
};

export function getComponent(groupSlug: string, componentKey: string) {
  const componentId = `${groupSlug}-${componentKey}`;
  return componentMap[componentId as keyof typeof componentMap];
}
