"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  MapPin,
  Clock,
  Users,
  Share2,
  Bookmark,
  Play,
} from "lucide-react";
import {
  CardTransitionRoot,
  CardTransitionGrid,
  CardTransitionCard,
  CardTransitionDetail,
  CardTransitionTrigger,
  useCardTransitionControl,
} from "@/lib/docs/ui/card-transition";

// Your own card data structure (completely flexible)
interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  category: string;
}

interface Experience {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
}

// Example 1: E-commerce Product Cards
function ProductCard({
  product,
  isHovered,
}: {
  product: Product;
  isHovered: boolean;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border">
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-gray-600 mb-2">{product.brand}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-green-600 mb-6">
              ${product.price}
            </p>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Example 2: Experience/Travel Cards
function ExperienceCard({
  experience,
  isHovered,
}: {
  experience: Experience;
  isHovered: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border">
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{experience.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{experience.subtitle}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {experience.location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {experience.duration}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-1" />
            {experience.reviews} reviews
          </div>
          <span className="text-2xl font-bold">${experience.price}</span>
        </div>
      </div>
    </div>
  );
}

function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 p-8"
        >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-3">
              {experience.title}
            </h1>
            <p className="text-xl text-white/90">{experience.subtitle}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">About this experience</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                This is a detailed description of the experience. You can
                customize this content based on your data structure and
                requirements.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-1">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="sticky top-32 bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">
                  ${experience.price}
                  <span className="text-lg font-normal text-gray-600">
                    {" "}
                    / person
                  </span>
                </div>
              </div>
              <button className="w-full bg-black text-white rounded-xl py-4 font-semibold mb-4 hover:bg-gray-800 transition-colors">
                Book Experience
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

// Header component that works with any data
function CustomHeader() {
  const { goBack, selectedId } = useCardTransitionControl();

  if (!selectedId) return null;

  return (
    <div className="flex items-center space-x-3">
      <button className="p-2 bg-gray-100 hover:bg-red-50 rounded-xl transition-colors group">
        <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" />
      </button>
      <button className="p-2 bg-gray-100 hover:bg-blue-50 rounded-xl transition-colors group">
        <Share2 className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
      </button>
    </div>
  );
}

// Main demo component
export default function CardTransitionDemo() {
  // Sample data - use your own structure
  const products: Product[] = [
    {
      id: "p1",
      name: "Wireless Headphones",
      brand: "TechSound",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop&q=80",
      rating: 4.8,
      description: "Premium wireless headphones with noise cancellation...",
      category: "Electronics",
    },
    {
      id: "p2",
      name: "Smart Watch",
      brand: "FitTech",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop&q=80",
      rating: 4.6,
      description: "Advanced fitness tracking and smart notifications...",
      category: "Wearables",
    },
  ];

  const experiences: Experience[] = [
    {
      id: "e1",
      title: "Northern Lights Safari",
      subtitle: "Aurora Photography Workshop",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop&q=80",
      location: "Iceland",
      duration: "7 days",
      rating: 4.9,
      reviews: 127,
      price: 2899,
    },
    {
      id: "e2",
      title: "Mountain Retreat",
      subtitle: "Digital Detox Experience",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
      location: "Japan",
      duration: "5 days",
      rating: 4.8,
      reviews: 89,
      price: 1899,
    },
  ];

  return (
    <div className=" ">
      {/* Experiences Section */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-medium text-center mb-4">
            Travel Experiences
          </h2>

          <CardTransitionRoot>
            <CardTransitionGrid
              columns={{ default: 1, md: 2 }}
              className="max-w-4xl mx-auto"
            >
              {experiences.map((experience, index) => (
                <CardTransitionCard
                  key={experience.id}
                  id={experience.id}
                  index={index}
                >
                  <CardTransitionTrigger targetId={experience.id}>
                    <ExperienceCard experience={experience} isHovered={false} />
                  </CardTransitionTrigger>
                </CardTransitionCard>
              ))}
            </CardTransitionGrid>

            {/* Experience Details */}
            {experiences.map((experience) => (
              <CardTransitionDetail
                key={experience.id}
                id={experience.id}
                backButtonText="Back to experiences"
                headerContent={<CustomHeader />}
              >
                <ExperienceDetail experience={experience} />
              </CardTransitionDetail>
            ))}
          </CardTransitionRoot>
        </div>
      </section>
    </div>
  );
}
