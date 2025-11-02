"use client";

import React, { useRef } from "react";
import { User, Mail, MapPin, CreditCard } from "lucide-react";
import {
  CascadeInput,
  CascadeInputRef,
  CascadeInputStep,
} from "@/lib/docs/ui/cascade-input";

const demoSteps: CascadeInputStep[] = [
  {
    id: "personal",
    title: "Personal Information",
    subtitle: "Tell us about yourself",
    icon: <User className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600", // Clean blue gradient
    fields: [
      {
        name: "firstName",
        type: "text",
        placeholder: "First name",
        required: true,
      },
      {
        name: "lastName",
        type: "text",
        placeholder: "Last name",
        required: true,
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Details",
    subtitle: "How can we reach you?",
    icon: <Mail className="w-5 h-5" />,
    color: "from-emerald-400 to-emerald-600", // Fresh emerald
    fields: [
      {
        name: "email",
        type: "email",
        placeholder: "your@email.com",
        required: true,
      },
      { name: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
    ],
  },
  {
    id: "address",
    title: "Shipping Address",
    subtitle: "Where should we deliver?",
    icon: <MapPin className="w-5 h-5" />,
    color: "from-purple-400 to-purple-600", // Modern purple
    fields: [
      {
        name: "street",
        type: "text",
        placeholder: "Street address",
        required: true,
      },
      { name: "city", type: "text", placeholder: "City", required: true },
      { name: "zip", type: "text", placeholder: "ZIP code", required: true },
    ],
  },
  {
    id: "payment",
    title: "Payment Method",
    subtitle: "Secure checkout",
    icon: <CreditCard className="w-5 h-5" />,
    color: "from-rose-400 to-pink-500", // Elegant rose
    fields: [
      {
        name: "cardNumber",
        type: "text",
        placeholder: "1234 5678 9012 3456",
        required: true,
      },
      { name: "expiry", type: "text", placeholder: "MM/YY", required: true },
      { name: "cvv", type: "text", placeholder: "CVV", required: true },
    ],
  },
];

export default function CascadeDemo() {
  const cascadeRef = useRef<CascadeInputRef>(null);

  const handleComplete = (data: Record<string, string>) => {
    console.log("Form completed with data:", data);
    // Handle form completion - send to API, etc.
  };

  const handleStepChange = (step: number, data: Record<string, string>) => {
    console.log(`Step ${step + 1} data:`, data);
    // Handle step changes - auto-save, validation, etc.
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background glass elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md mx-auto">
        {/* Main Component */}
        <CascadeInput
          ref={cascadeRef}
          steps={demoSteps}
          onComplete={handleComplete}
          onStepChange={handleStepChange}
          containerHeight="520px"
          cardWidth="w-full"
          cardMaxWidth="max-w-md"
          cardMinWidth="min-w-[360px]"
        />
      </div>
    </div>
  );
}
