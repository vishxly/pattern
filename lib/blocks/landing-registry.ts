// lib/blocks/landing-registry.ts

import { heroRegistry } from "@/lib/blocks/registry/hero/hero-registry";
import { footerRegistry } from "@/lib/blocks/registry/sample/footer-registry";
import { fintechRegistry } from "@/lib/blocks/registry/hero/fintech-registry";
import { designifyRegistry } from "@/lib/blocks/registry/hero/designify-registry";
import { alignoRegistry } from "@/lib/blocks/registry/hero/aligno-registry";
import { inboxRegistry } from "@/lib/blocks/registry/hero/inbox-registry";
import { devrelRegistry } from "@/lib/blocks/registry/hero/devrel-registry";
import { alyticsRegistry } from "@/lib/blocks/registry/hero/alytics-registry";
import { worklyRegistry } from "@/lib/blocks/registry/hero/workly-registry";
import { aeroboxRegistry } from "@/lib/blocks/registry/hero/aerobox";
import { jobRegistry } from "@/lib/blocks/registry/hero/job";
import { stripeRegistry } from "./registry/hero/stripe";
import { flowSyncRegistry } from "@/lib/blocks/registry/hero/flowsync";
import { capgoRegistry } from "@/lib/blocks/registry/hero/capgo";
import { footer1Registry } from "@/lib/blocks/registry/footer/footer1";
import { footer2Registry } from "@/lib/blocks/registry/footer/footer2";
import { footer3Registry } from "@/lib/blocks/registry/footer/footer3";
import { magRegistry } from "./registry/hero/mag";
import { talonRegistry } from "./registry/hero/talon";
import { zenoRegistry } from "./registry/hero/zeno";
import { inboundRegistry } from "./registry/hero/inbound";
import { pricing1Registry } from "./registry/pricing/pricing1";
import { marketRegistry } from "./registry/hero/market";
import { logoipsumRegistry } from "./registry/hero/logoipsum";
import { feature1Registry } from "./registry/feature/feature1";
import { glassCardRegistry } from "./registry/card/glass-card";
import { premadeCardRegistry } from "./registry/card/premade";
import { pricing2Registry } from "./registry/pricing/pricing2";
import { timeline1Registry } from "./registry/timeline/timeline1";
import { timeline2Registry } from "./registry/timeline/timeline2";
import { timeline3Registry } from "./registry/timeline/timeline3";
import { timeline4Registry } from "./registry/timeline/timeline4";
import { timeline5Registry } from "./registry/timeline/timeline5";
import { navbar1Registry } from "./registry/navbar/navbar1";
import { pricing3Registry } from "./registry/pricing/pricing3";
import { pricing4Registry } from "./registry/pricing/pricing4";
import { orcaRegistry } from "./registry/hero/orca";
import { button1Registry } from "./registry/button/button1";
import { button2Registry } from "./registry/button/button2";
import { button3Registry } from "./registry/button/button3";
import { button4Registry } from "./registry/button/button4";
import { button5Registry } from "./registry/button/button5";
import { button6Registry } from "./registry/button/button6";
import { button7Registry } from "./registry/button/button7";
import { button8Registry } from "./registry/button/button8";
import { button9Registry } from "./registry/button/button9";
import { button10Registry } from "./registry/button/button10";
import { button11Registry } from "./registry/button/button11";
import { navbar2Registry } from "./registry/navbar/navbar2";
import { navbar3Registry } from "./registry/navbar/navbar3";
import { bento1Registry } from "./registry/bento/bento1";
import { bento2Registry } from "./registry/bento/bento2";
import { bento3Registry } from "./registry/bento/bento3";
import { bento4Registry } from "./registry/bento/bento4";
import { bento5Registry } from "./registry/bento/bento5";
import { flowwtRegistry } from "./registry/hero/flowwt";
import { login1Registry } from "./registry/form/login";
import { taskerRegistry } from "./registry/hero/tasker";
import { promptplexRegistry } from "./registry/hero/promptplex";
import { invistraRegistry } from "./registry/hero/invistra";
import { blockbaseRegistry } from "./registry/hero/blockbase";
import { landing1Registry } from "./registry/landing/landing1";
import { landing2Registry } from "./registry/landing/landing2";
import { landing3Registry } from "./registry/landing/landing3";
import { landing4Registry } from "./registry/landing/landing4";
import { landing5Registry } from "./registry/landing/landing5";
import { landing6Registry } from "./registry/landing/landing6";
import { landing7Registry } from "./registry/landing/landing7";
import { landing8Registry } from "./registry/landing/landing8";
import { landing9Registry } from "./registry/landing/landing9";
import { landing10Registry } from "./registry/landing/landing10";
import { landing11Registry } from "./registry/landing/landing11";
import { landing12Registry } from "./registry/landing/landing12";
import { landing13Registry } from "./registry/landing/landing13";
import { landing14Registry } from "./registry/landing/landing14";
import { landing15Registry } from "./registry/landing/landing15";
import { landing16Registry } from "./registry/landing/landing16";

import { showcase1Registry } from "./registry/showcase/showcase1";
import { showcase2Registry } from "./registry/showcase/showcase2";
import { showcase3Registry } from "./registry/showcase/showcase3";
import { showcase4Registry } from "./registry/showcase/showcase4";
import { showcase5Registry } from "./registry/showcase/showcase5";
import { landing17Registry } from "./registry/landing/landing17";
import { landing18Registry } from "./registry/landing/landing18";
import { pricing5Registry } from "./registry/pricing/pricing5";
import { pricing6Registry } from "./registry/pricing/pricing6";
import { pricing7Registry } from "./registry/pricing/pricing7";
import { notfound1Registry } from "./registry/notfound/notfound1";
import { notFound } from "next/navigation";
import { notfound2Registry } from "./registry/notfound/notfound2";
import { notfound3Registry } from "./registry/notfound/notfound3";
import { notfound5Registry } from "./registry/notfound/notfound5";
import { notfound4Registry } from "./registry/notfound/notfound4";
import { landing19Registry } from "./registry/landing/landing19";

export interface LandingComponentVariant {
  title: string;
  description: string;
  component: React.ComponentType;
  image: string;
  fallbackImage: string;
  code: string;
}

// Type for serialized variant (without component function)
export interface SerializedLandingComponentVariant {
  title: string;
  description: string;
  image: string;
  fallbackImage: string;
  code: string;
}

export interface LandingComponentGroup {
  title: string;
  description: string;
  category: string;
  variants: Record<string, LandingComponentVariant>;
}

// Type for serialized component group (without component functions)
export interface SerializedLandingComponentGroup {
  title: string;
  description: string;
  category: string;
  variants: Record<string, SerializedLandingComponentVariant>;
}

export const landingRegistry: Record<string, LandingComponentGroup> = {
  // Hero
  blockbase: blockbaseRegistry,
  invistra: invistraRegistry,
  hero: heroRegistry,
  fintech: fintechRegistry,
  designify: designifyRegistry,
  aligno: alignoRegistry,
  inbox: inboxRegistry,
  devrel: devrelRegistry,
  alytics: alyticsRegistry,
  workly: worklyRegistry,
  aerobox: aeroboxRegistry,
  job: jobRegistry,
  stripe: stripeRegistry,
  flowsync: flowSyncRegistry,
  capgo: capgoRegistry,
  mag: magRegistry,
  talon: talonRegistry,
  zeno: zenoRegistry,
  inbound: inboundRegistry,
  market: marketRegistry,
  logoipsum: logoipsumRegistry,
  orca: orcaRegistry,
  flowwt: flowwtRegistry,
  tasker: taskerRegistry,
  promptplex: promptplexRegistry,

  //feature
  feature: feature1Registry,

  // Footer
  // footer: footerRegistry,
  footer1: footer1Registry,
  footer2: footer2Registry,
  footer3: footer3Registry,

  //Form
  login1: login1Registry,

  // Landing
  landing18: landing18Registry,
  // landing19: landing19Registry,

  // landing1: landing1Registry,
  landing17: landing17Registry,
  landing2: landing2Registry,
  landing3: landing3Registry,
  landing4: landing4Registry,
  landing5: landing5Registry,
  landing6: landing6Registry,
  landing7: landing7Registry,
  landing8: landing8Registry,
  landing9: landing9Registry,
  landing10: landing10Registry,
  landing11: landing11Registry,
  landing12: landing12Registry,
  landing13: landing13Registry,
  landing14: landing14Registry,
  landing15: landing15Registry,
  landing16: landing16Registry,

  //Not Found
  notfound1 : notfound1Registry,
  notfound2: notfound2Registry,
  notfound3: notfound3Registry,
  notfound4: notfound4Registry,
  notfound5: notfound5Registry,
  // Showcase
  showcase1: showcase1Registry,
  showcase2: showcase2Registry,

  showcase4: showcase4Registry,

  // Pricing
  pricing7: pricing7Registry,
  pricing6: pricing6Registry,
  pricing5: pricing5Registry,
  pricing1: pricing1Registry,
  pricing2: pricing2Registry,
  pricing3: pricing3Registry,
  pricing4: pricing4Registry,

  //Card
  glass: glassCardRegistry,
  premade: premadeCardRegistry,
 


  // Timeline
  timeline1: timeline1Registry,
  timeline2: timeline2Registry,
  timeline3: timeline3Registry,
  timeline4: timeline4Registry,
  timeline5: timeline5Registry,

  // Navbar
  navbar1: navbar1Registry,
  navbar2: navbar2Registry,
  navbar3: navbar3Registry,

  //Button
  button1: button1Registry,
  button2: button2Registry,
  button3: button3Registry,
  button4: button4Registry,
  button5: button5Registry,
  button6: button6Registry,
  button7: button7Registry,
  button8: button8Registry,
  button9: button9Registry,
  button10: button10Registry,
  button11: button11Registry,

  // bento
  bento1: bento1Registry,
  bento2: bento2Registry,
  bento3: bento3Registry,
  bento4: bento4Registry,
  bento5: bento5Registry,
} as const;
