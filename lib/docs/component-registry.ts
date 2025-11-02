import { buttonRegistry } from "@/lib/docs/registry/button";
import { cardRegistry } from "@/lib/docs/registry/card";
import { ComponentGroup } from "@/lib/docs/types";
import { accordionRegistry } from "./registry/accordion";
import { carouselRegistry } from "./registry/orbital-carousel";
import { floatingNavigatorRegistry } from "./registry/floating-navigator";
import { morphingCardRegistry } from "./registry/morphing-card";
import { dockRegistry } from "./registry/dock";
import { timelineRegistry } from "./registry/timeline";
import { sheetRegistry } from "./registry/sheet";
import { spotlightRegistry } from "./registry/spotlight";
import { commandMenuRegistry } from "./registry/command-menu";

import { hoverPreviewRegistry } from "./registry/hover-preview";
import { magneticCardsRegistry } from "./registry/magnetic-cards";

import { globeRegistry } from "./registry/globe";
import { avatarRegistry } from "./registry/avatar";
import { otpInputRegistry } from "./registry/otp-input";
import { cardTransitionRegistry } from "./registry/card-transition";
import { pulseBorderRegistry } from "./registry/pulse-border";
import { folderRegistry } from "./registry/folder";

import { cascadeInputRegistry } from "./registry/input-stack";
import { animatedTextRegistry } from "./registry/animated-text";
import { warpOverlayRegistry } from "./registry/warp-overlay";
import { tagSelectorRegistry } from "./registry/tag-selector";
import { chartRegistry } from "./registry/chart";
import { loaderRegistry } from "./registry/loader";

import { luminousIconRegistry } from "./registry/luminous-icon";
import { slidingNumberRegistry } from "./registry/sliding-number";

export const componentRegistry: Record<string, ComponentGroup> = {
  accordion: accordionRegistry,
  "animated-text": animatedTextRegistry,
  avatar: avatarRegistry,

  carousel: carouselRegistry,
  "card-transition": cardTransitionRegistry,
  "cascade-input": cascadeInputRegistry,
  chart: chartRegistry,
  command: commandMenuRegistry,

  dock: dockRegistry,
  floating: floatingNavigatorRegistry,
  folder: folderRegistry,
  globe: globeRegistry,
  hoverpreview: hoverPreviewRegistry,
  loader: loaderRegistry,
  "luminous-icon": luminousIconRegistry,
  "magnetic-cards": magneticCardsRegistry,

  morphing: morphingCardRegistry,
  "otp-input": otpInputRegistry,
  "pulse-border": pulseBorderRegistry,
  "tag-selector": tagSelectorRegistry,
  timeline: timelineRegistry,
  sheet: sheetRegistry,
  "sliding-number": slidingNumberRegistry,
  spotlight: spotlightRegistry,
  "warp-overlay": warpOverlayRegistry,
} as const;
