"use client"

import { SmartSearch, type SearchResult, type SearchFilter } from "@/lib/docs/ui/smart-search"
import { useState } from "react"

// Sample data for different use cases
const ecommerceData: SearchResult[] = [
  {
    id: "1",
    title: "iPhone 15 Pro",
    description: "Latest Apple smartphone with titanium design",
    category: "Electronics",
    tags: ["apple", "smartphone", "premium"],
    popularity: 95,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { price: 999, brand: "Apple", rating: 4.8 },
  },
  {
    id: "2",
    title: "MacBook Air M3",
    description: "Lightweight laptop with M3 chip",
    category: "Electronics",
    tags: ["apple", "laptop", "productivity"],
    popularity: 88,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { price: 1299, brand: "Apple", rating: 4.7 },
  },
  {
    id: "3",
    title: "Nike Air Max 270",
    description: "Comfortable running shoes",
    category: "Fashion",
    tags: ["nike", "shoes", "running"],
    popularity: 76,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { price: 150, brand: "Nike", rating: 4.5 },
  },
  {
    id: "4",
    title: "Samsung Galaxy S24",
    description: "Android flagship with AI features",
    category: "Electronics",
    tags: ["samsung", "android", "smartphone"],
    popularity: 82,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { price: 899, brand: "Samsung", rating: 4.6 },
  },
  {
    id: "5",
    title: "Adidas Ultraboost 22",
    description: "Premium running shoes with boost technology",
    category: "Fashion",
    tags: ["adidas", "running", "boost"],
    popularity: 71,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { price: 180, brand: "Adidas", rating: 4.4 },
  },
]

const contentData: SearchResult[] = [
  {
    id: "1",
    title: "Getting Started with React",
    description: "Learn the basics of React development",
    category: "Tutorial",
    tags: ["react", "javascript", "beginner"],
    popularity: 92,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { duration: 30, difficulty: "Beginner", author: "John Doe" },
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    description: "Master complex TypeScript concepts",
    category: "Tutorial",
    tags: ["typescript", "advanced", "patterns"],
    popularity: 85,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { duration: 60, difficulty: "Advanced", author: "Jane Smith" },
  },
  {
    id: "3",
    title: "Building REST APIs",
    description: "Create scalable backend services",
    category: "Course",
    tags: ["api", "backend", "nodejs"],
    popularity: 78,
    image: "/placeholder.svg?height=40&width=40",
    metadata: { duration: 120, difficulty: "Intermediate", author: "Mike Johnson" },
  },
]



const ecommerceFilters: SearchFilter[] = [
  {
    id: "category",
    label: "Category",
    type: "select",
    options: [
      { value: "Electronics", label: "Electronics", count: 3 },
      { value: "Fashion", label: "Fashion", count: 2 },
    ],
  },
  {
    id: "brand",
    label: "Brand",
    type: "checkbox",
    options: [
      { value: "Apple", label: "Apple", count: 2 },
      { value: "Samsung", label: "Samsung", count: 1 },
      { value: "Nike", label: "Nike", count: 1 },
      { value: "Adidas", label: "Adidas", count: 1 },
    ],
  },
  {
    id: "price",
    label: "Price Range",
    type: "range",
    min: 0,
    max: 2000,
  },
]

const contentFilters: SearchFilter[] = [
  {
    id: "category",
    label: "Content Type",
    type: "select",
    options: [
      { value: "Tutorial", label: "Tutorial", count: 2 },
      { value: "Course", label: "Course", count: 1 },
    ],
  },
  {
    id: "difficulty",
    label: "Difficulty",
    type: "checkbox",
    options: [
      { value: "Beginner", label: "Beginner", count: 1 },
      { value: "Intermediate", label: "Intermediate", count: 1 },
      { value: "Advanced", label: "Advanced", count: 1 },
    ],
  },
  {
    id: "duration",
    label: "Duration (minutes)",
    type: "range",
    min: 0,
    max: 180,
  },
]



export default function SmartSearchDemo() {
  const [activeDemo, setActiveDemo] = useState<"ecommerce" | "content">("ecommerce")

  const handleSearch = (query: string, filters: Record<string, any>) => {
    console.log("Search:", { query, filters })
  }

  const handleResultClick = (result: SearchResult) => {
    console.log("Clicked result:", result)
  }

  const demos = {
    ecommerce: {
      title: "E-commerce Search",
      description: "Product search with price filters, brand filtering, and category grouping",
      data: ecommerceData,
      filters: ecommerceFilters,
      placeholder: "Search products...",
    },
    content: {
      title: "Content Library Search",
      description: "Educational content with difficulty levels and duration filtering",
      data: contentData,
      filters: contentFilters,
      placeholder: "Search tutorials and courses...",
    },
   
  }

  const currentDemo = demos[activeDemo]

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Search Component</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced search with dynamic filters, real-time suggestions, and intelligent categorization. Perfect for
            e-commerce, content libraries, and team directories.
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeDemo === key
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Current Demo Info */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{currentDemo.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{currentDemo.description}</p>
        </div>

        {/* Search Component */}
        <div className="flex justify-center mb-12">
          <SmartSearch
            data={currentDemo.data}
            filters={currentDemo.filters}
            placeholder={currentDemo.placeholder}
            onSearch={handleSearch}
            onResultClick={handleResultClick}
            showRecentSearches={true}
            showPopularSearches={true}
            showCategories={true}
            maxResults={50}
          />
        </div>

      </div>
    </div>
  )
}
