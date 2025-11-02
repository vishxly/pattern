// lib/blocks/landing-client-registry.ts
import { lazy } from "react";

const landingComponentMap = {
  // Hero

  "hero-default": lazy(() =>
    import("@/lib/blocks/components/hero/dataform").then((m) => ({
      default: m.default,
    }))
  ),
  "fintech-default": lazy(() =>
    import("@/lib/blocks/components/hero/fintech").then((m) => ({
      default: m.default,
    }))
  ),
  "designify-default": lazy(() =>
    import("@/lib/blocks/components/hero/designify").then((m) => ({
      default: m.default,
    }))
  ),
  "aligno-default": lazy(() =>
    import("@/lib/blocks/components/hero/aligno").then((m) => ({
      default: m.default,
    }))
  ),

  "inbox-default": lazy(() =>
    import("@/lib/blocks/components/hero/inbox").then((m) => ({
      default: m.default,
    }))
  ),

  "devrel-default": lazy(() =>
    import("@/lib/blocks/components/hero/devrel").then((m) => ({
      default: m.default,
    }))
  ),

  "alytics-default": lazy(() =>
    import("@/lib/blocks/components/hero/alytics").then((m) => ({
      default: m.default,
    }))
  ),
  "workly-default": lazy(() =>
    import("@/lib/blocks/components/hero/workly").then((m) => ({
      default: m.default,
    }))
  ),
  "aerobox-default": lazy(() =>
    import("@/lib/blocks/components/hero/aerobox").then((m) => ({
      default: m.default,
    }))
  ),
  "job-default": lazy(() =>
    import("@/lib/blocks/components/hero/job").then((m) => ({
      default: m.default,
    }))
  ),
  "stripe-default": lazy(() =>
    import("@/lib/blocks/components/hero/stripe").then((m) => ({
      default: m.default,
    }))
  ),
  "flowsync-default": lazy(() =>
    import("@/lib/blocks/components/hero/flowsync").then((m) => ({
      default: m.default,
    }))
  ),
  "capgo-default": lazy(() =>
    import("@/lib/blocks/components/hero/capgo").then((m) => ({
      default: m.default,
    }))
  ),
  "mag-default": lazy(() =>
    import("@/lib/blocks/components/hero/mag").then((m) => ({
      default: m.default,
    }))
  ),
  "talon-default": lazy(() =>
    import("@/lib/blocks/components/hero/talon").then((m) => ({
      default: m.default,
    }))
  ),
  "zeno-default": lazy(() =>
    import("@/lib/blocks/components/hero/zeno").then((m) => ({
      default: m.default,
    }))
  ),
  "inbound-default": lazy(() =>
    import("@/lib/blocks/components/hero/inbound").then((m) => ({
      default: m.default,
    }))
  ),
  "market-default": lazy(() =>
    import("@/lib/blocks/components/hero/market").then((m) => ({
      default: m.default,
    }))
  ),
  "logoipsum-default": lazy(() =>
    import("@/lib/blocks/components/hero/logoipsum").then((m) => ({
      default: m.default,
    }))
  ),
  "orca-default": lazy(() =>
    import("@/lib/blocks/components/hero/orca").then((m) => ({
      default: m.default,
    }))
  ),
  "flowwt-default": lazy(() =>
    import("@/lib/blocks/components/hero/flowwt").then((m) => ({
      default: m.default,
    }))
  ),

  "tasker-default": lazy(() =>
    import("@/lib/blocks/components/hero/tasker").then((m) => ({
      default: m.default,
    }))
  ),
  "promptplex-default": lazy(() =>
    import("@/lib/blocks/components/hero/promptplex").then((m) => ({
      default: m.default,
    }))
  ),
  "invistra-default": lazy(() =>
    import("@/lib/blocks/components/hero/invistra").then((m) => ({
      default: m.default,
    }))
  ),
  "blockbase-default": lazy(() =>
    import("@/lib/blocks/components/hero/blockbase").then((m) => ({
      default: m.default,
    }))
  ),

  // Feature

  "feature-default": lazy(() =>
    import("@/lib/blocks/components/feature/feature1").then((m) => ({
      default: m.default,
    }))
  ),

  // Footer

  "footer-default": lazy(() =>
    import("@/lib/blocks/components/sample/footer").then((m) => ({
      default: m.FooterSection,
    }))
  ),
  "footer1-default": lazy(() =>
    import("@/lib/blocks/components/footer/footer1").then((m) => ({
      default: m.default,
    }))
  ),
  "footer2-default": lazy(() =>
    import("@/lib/blocks/components/footer/footer2").then((m) => ({
      default: m.default,
    }))
  ),
  "footer3-default": lazy(() =>
    import("@/lib/blocks/components/footer/footer3").then((m) => ({
      default: m.default,
    }))
  ),

  // Form
  "login1-default": lazy(() =>
    import("@/lib/blocks/components/form/login").then((m) => ({
      default: m.default,
    }))
  ),

  // Landing

  "landing1-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing1").then((m) => ({
      default: m.default,
    }))
  ),
  "landing2-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing2").then((m) => ({
      default: m.default,
    }))
  ),
  "landing3-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing3").then((m) => ({
      default: m.default,
    }))
  ),
  "landing4-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing4").then((m) => ({
      default: m.default,
    }))
  ),
  "landing5-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing5").then((m) => ({
      default: m.default,
    }))
  ),
  "landing6-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing6").then((m) => ({
      default: m.default,
    }))
  ),
  "landing7-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing7").then((m) => ({
      default: m.default,
    }))
  ),
  "landing8-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing8").then((m) => ({
      default: m.default,
    }))
  ),
  "landing9-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing9").then((m) => ({
      default: m.default,
    }))
  ),
  "landing10-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing10").then((m) => ({
      default: m.default,
    }))
  ),
  "landing11-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing11").then((m) => ({
      default: m.default,
    }))
  ),
  "landing12-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing12").then((m) => ({
      default: m.default,
    }))
  ),
  "landing13-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing13").then((m) => ({
      default: m.default,
    }))
  ),
  "landing14-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing14").then((m) => ({
      default: m.default,
    }))
  ),
  "landing15-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing15").then((m) => ({
      default: m.default,
    }))
  ),
  "landing16-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing16").then((m) => ({
      default: m.default,
    }))
  ),

  // Showcase

  "showcase1-default": lazy(() =>
    import("@/lib/blocks/components/showcase/showcase1").then((m) => ({
      default: m.default,
    }))
  ),
  "showcase2-default": lazy(() =>
    import("@/lib/blocks/components/showcase/showcase2").then((m) => ({
      default: m.default,
    }))
  ),
  "showcase3-default": lazy(() =>
    import("@/lib/blocks/components/showcase/showcase3").then((m) => ({
      default: m.default,
    }))
  ),
  "showcase4-default": lazy(() =>
    import("@/lib/blocks/components/showcase/showcase4").then((m) => ({
      default: m.default,
    }))
  ),
  "showcase5-default": lazy(() =>
    import("@/lib/blocks/components/showcase/showcase5").then((m) => ({
      default: m.default,
    }))
  ),

  // Pricing

  "pricing1-default": lazy(() =>
    import("@/lib/blocks/components/pricing/pricing1").then((m) => ({
      default: m.default,
    }))
  ),
  "pricing2-default": lazy(() =>
    import("@/lib/blocks/components/pricing/pricing2").then((m) => ({
      default: m.default,
    }))
  ),
  "pricing3-default": lazy(() =>
    import("@/lib/blocks/components/pricing/pricing3").then((m) => ({
      default: m.default,
    }))
  ),
  "pricing4-default": lazy(() =>
    import("@/lib/blocks/components/pricing/pricing4").then((m) => ({
      default: m.default,
    }))
  ),

  // Card
  "glass-default": lazy(() =>
    import("@/lib/blocks/components/card/glass").then((m) => ({
      default: m.default,
    }))
  ),
  "premade-default": lazy(() =>
    import("@/lib/blocks/components/card/premade").then((m) => ({
      default: m.default,
    }))
  ),

  // Timeline
  "timeline1-default": lazy(() =>
    import("@/lib/blocks/components/timeline/timeline1").then((m) => ({
      default: m.default,
    }))
  ),
  "timeline2-default": lazy(() =>
    import("@/lib/blocks/components/timeline/timeline2").then((m) => ({
      default: m.default,
    }))
  ),
  "timeline3-default": lazy(() =>
    import("@/lib/blocks/components/timeline/timeline3").then((m) => ({
      default: m.default,
    }))
  ),
  "timeline4-default": lazy(() =>
    import("@/lib/blocks/components/timeline/timeline4").then((m) => ({
      default: m.default,
    }))
  ),
  "timeline5-default": lazy(() =>
    import("@/lib/blocks/components/timeline/timeline5").then((m) => ({
      default: m.default,
    }))
  ),

  // Navbar
  "navbar1-default": lazy(() =>
    import("@/lib/blocks/components/navbar/navabar1").then((m) => ({
      default: m.default,
    }))
  ),
  "navbar2-default": lazy(() =>
    import("@/lib/blocks/components/navbar/navbar2").then((m) => ({
      default: m.default,
    }))
  ),
  "navbar3-default": lazy(() =>
    import("@/lib/blocks/components/navbar/navbar3").then((m) => ({
      default: m.default,
    }))
  ),

  // Button
  "button1-default": lazy(() =>
    import("@/lib/blocks/components/button/button1").then((m) => ({
      default: m.default,
    }))
  ),
  "button2-default": lazy(() =>
    import("@/lib/blocks/components/button/button2").then((m) => ({
      default: m.default,
    }))
  ),
  "button3-default": lazy(() =>
    import("@/lib/blocks/components/button/button3").then((m) => ({
      default: m.default,
    }))
  ),
  "button4-default": lazy(() =>
    import("@/lib/blocks/components/button/button4").then((m) => ({
      default: m.default,
    }))
  ),
  "button5-default": lazy(() =>
    import("@/lib/blocks/components/button/button5").then((m) => ({
      default: m.default,
    }))
  ),
  "button6-default": lazy(() =>
    import("@/lib/blocks/components/button/button6").then((m) => ({
      default: m.default,
    }))
  ),
  "button7-default": lazy(() =>
    import("@/lib/blocks/components/button/button7").then((m) => ({
      default: m.default,
    }))
  ),
  "button8-default": lazy(() =>
    import("@/lib/blocks/components/button/button8").then((m) => ({
      default: m.default,
    }))
  ),
  "button9-default": lazy(() =>
    import("@/lib/blocks/components/button/button9").then((m) => ({
      default: m.default,
    }))
  ),
  "button10-default": lazy(() =>
    import("@/lib/blocks/components/button/button10").then((m) => ({
      default: m.default,
    }))
  ),

  "button11-default": lazy(() =>
    import("@/lib/blocks/components/button/button11").then((m) => ({
      default: m.default,
    }))
  ),

  // bento
  "bento1-default": lazy(() =>
    import("@/lib/blocks/components/bento/bento1").then((m) => ({
      default: m.default,
    }))
  ),
  "bento2-default": lazy(() =>
    import("@/lib/blocks/components/bento/bento2").then((m) => ({
      default: m.default,
    }))
  ),
  "bento3-default": lazy(() =>
    import("@/lib/blocks/components/bento/bento3").then((m) => ({
      default: m.default,
    }))
  ),
  "bento4-default": lazy(() =>
    import("@/lib/blocks/components/bento/bento4").then((m) => ({
      default: m.default,
    }))
  ),
  "bento5-default": lazy(() =>
    import("@/lib/blocks/components/bento/bento5").then((m) => ({
      default: m.default,
    }))
  ),

  "landing17-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing17").then((m) => ({
      default: m.default,
    }))
  ),

  "landing18-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing18").then((m) => ({
      default: m.default,
    }))
  ),

  "pricing5-default": lazy(() =>
    import("@/lib/blocks/components/pricing/pricing5").then((m) => ({
      default: m.default,
    }))
  ),

  "pricing6-default": lazy(() =>
    import("@/lib/blocks/components/pricing/pricing6").then((m) => ({
      default: m.default,
    }))
  ),

  "pricing7-default": lazy(() =>
    import("@/lib/blocks/components/pricing/pricing7").then((m) => ({
      default: m.default,
    }))
  ),

  "notfound1-default": lazy(() =>
    import("@/lib/blocks/components/notfound/notfound1").then((m) => ({
      default: m.default,
    }))
  ),

  "notfound2-default": lazy(() =>
    import("@/lib/blocks/components/notfound/notfound2").then((m) => ({
      default: m.default,
    }))
  ),

  "notfound3-default": lazy(() =>
    import("@/lib/blocks/components/notfound/notfound3").then((m) => ({
      default: m.default,
    }))
  ),

  "notfound5-default": lazy(() =>
    import("@/lib/blocks/components/notfound/notfound5").then((m) => ({
      default: m.default,
    }))
  ),

  "notfound4-default": lazy(() =>
    import("@/lib/blocks/components/notfound/notfound4").then((m) => ({
      default: m.default,
    }))
  ),

  "landing19-default": lazy(() =>
    import("@/lib/blocks/components/landing/landing19").then((m) => ({
      default: m.default,
    }))
  ),
};

export function getLandingComponent(groupSlug: string, componentKey: string) {
  const componentId = `${groupSlug}-${componentKey}`;
  return landingComponentMap[componentId as keyof typeof landingComponentMap];
}
