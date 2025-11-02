"use client";

import { MagneticCards, type MagneticCard } from "@/lib/docs/ui/magnetic-cards";




const teamCards: MagneticCard[] = [
  {
    id: "sarah",
    title: "Sarah Chen",
    description:
      "Lead Designer with 8+ years creating beautiful user experiences.",
    image: "/placeholder.svg?height=64&width=64",
    badge: "Lead",
  },
  {
    id: "alex",
    title: "Alex Rodriguez",
    description:
      "Full-stack developer passionate about performance and clean code.",
    image: "/placeholder.svg?height=64&width=64",
    badge: "Senior",
  },
  {
    id: "maya",
    title: "Maya Patel",
    description: "UX researcher focused on accessibility and inclusive design.",
    image: "/placeholder.svg?height=64&width=64",
    badge: "Expert",
  },
  {
    id: "jordan",
    title: "Jordan Kim",
    description:
      "DevOps engineer ensuring reliable and scalable infrastructure.",
    image: "/placeholder.svg?height=64&width=64",
  },
];

export default function MagneticCardsDemo() {
  const handleCardClick = (card: MagneticCard) => {
    console.log("Card clicked:", card.title);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12 px-4">
        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Meet Our Team
          </h2>
          <MagneticCards
            cards={teamCards}
            magneticStrength={0.4}
            maxDistance={160}
            onCardClick={handleCardClick}
            className="max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8"
            cardClassName="hover:shadow-xl"
          />
        </section>
      </div>
    </div>
  );
}
