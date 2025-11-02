import { ComponentGroup } from "@/lib/docs/types";
import SmartSearchDemo from "../components/smart-search";

export const smartSearchRegistry: ComponentGroup = {
  name: "smartSearchRegistry",
  title: "Smart Search",
  description:
    "A powerful component that provides an advanced search experience with dynamic filters, real-time suggestions, and intelligent categorization.",

  category: "components",
  components: ["smartSearchDemo"],
  // Installation configuration
  installation: {
    cliCommand: "npx shadcn@latest add smart-search",
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    componentPath: "components/zeroui/smart-search.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "data",
      type: "SearchResult[]",
      description: "An array of data objects to be searched through.",
      required: true,
    },
    {
      name: "filters",
      type: "SearchFilter[]",
      description: "Configuration for advanced filtering options.",
      required: false,
    },
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text for the search input field.",
      required: false,
    },
    {
      name: "maxResults",
      type: "number",
      description: "The maximum number of search results to display.",
      required: false,
    },
    {
      name: "showRecentSearches",
      type: "boolean",
      description: "If true, displays a list of recent search queries.",
      required: false,
    },
    {
      name: "showPopularSearches",
      type: "boolean",
      description: "If true, displays a list of popular or trending searches.",
      required: false,
    },
    {
      name: "showCategories",
      type: "boolean",
      description: "If true, groups search results by their category.",
      required: false,
    },
    {
      name: "onSearch",
      type: "(query: string, filters: Record<string, any>) => void",
      description: "Callback function that fires when a search query is entered.",
      required: false,
    },
    {
      name: "onResultClick",
      type: "(result: SearchResult) => void",
      description: "Callback function that fires when a user clicks on a search result.",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the search component container.",
      required: false,
    },
  ],

  variants: {
    basic: {
      title: "Advanced Search with Filters",
      description:
        "An advanced search component with dynamic filters, real-time suggestions, and intelligent categorization.",
      component: SmartSearchDemo,
      image: "/images/components/smart-search-demo.png",
      fallbackImage: "/placeholder.svg?height=400&width=400&text=SmartSearch",
      code: `"use client";

import { SmartSearch, type SearchResult, type SearchFilter } from "@/lib/docs/ui/smart-search";
import { useState } from "react";

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
];

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
];

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
];

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
];

export default function SmartSearchDemo() {
  const [activeDemo, setActiveDemo] = useState<"ecommerce" | "content">("ecommerce");

  const handleSearch = (query: string, filters: Record<string, any>) => {
    console.log("Search:", { query, filters });
  };

  const handleResultClick = (result: SearchResult) => {
    console.log("Clicked result:", result);
  };

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
  };

  const currentDemo = demos[activeDemo];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Search Component</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced search with dynamic filters, real-time suggestions, and intelligent categorization.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key as any)}
                className={\`px-6 py-3 rounded-lg font-medium transition-all duration-200 \${
                  activeDemo === key
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }\`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{currentDemo.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{currentDemo.description}</p>
        </div>

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
  );
}
`,
      manualCode: `"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Search, X, Filter, Clock, TrendingUp, Tag, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SearchResult {
  id: string
  title: string
  description?: string
  category: string
  tags?: string[]
  popularity?: number
  image?: string
  metadata?: Record<string, any>
}

export interface SearchFilter {
  id: string
  label: string
  type: 'checkbox' | 'range' | 'select' | 'date'
  options?: { value: string; label: string; count?: number }[]
  min?: number
  max?: number
}

export interface SmartSearchProps {
  data: SearchResult[]
  filters?: SearchFilter[]
  placeholder?: string
  maxResults?: number
  showRecentSearches?: boolean
  showPopularSearches?: boolean
  showCategories?: boolean
  onSearch?: (query: string, filters: Record<string, any>) => void
  onResultClick?: (result: SearchResult) => void
  className?: string
}

export function SmartSearch({
  data,
  filters = [],
  placeholder = "Search anything...",
  maxResults = 50,
  showRecentSearches = true,
  showPopularSearches = true,
  showCategories = true,
  onSearch,
  onResultClick,
  className
}: SmartSearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({})
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Popular searches based on data
  const popularSearches = useMemo(() => {
    const searchTerms = data.flatMap(item => 
      [item.title, ...(item.tags || [])].map(term => term.toLowerCase())
    )
    const frequency = searchTerms.reduce((acc, term) => {
      acc[term] = (acc[term] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    return Object.entries(frequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([term]) => term)
  }, [data])

  // Filter and search results
  const filteredResults = useMemo(() => {
    let results = data

    // Apply text search
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(' ')
      results = results.filter(item => 
        searchTerms.every(term =>
          item.title.toLowerCase().includes(term) ||
          item.description?.toLowerCase().includes(term) ||
          item.tags?.some(tag => tag.toLowerCase().includes(term)) ||
          item.category.toLowerCase().includes(term)
        )
      )
    }

    // Apply filters
    Object.entries(activeFilters).forEach(([filterId, value]) => {
      const filter = filters.find(f => f.id === filterId)
      if (!filter || !value) return

      switch (filter.type) {
        case 'checkbox':
          if (Array.isArray(value) && value.length > 0) {
            results = results.filter(item => 
              value.some(v => 
                item.category === v || 
                item.tags?.includes(v) ||
                item.metadata?.[filterId] === v
              )
            )
          }
          break
        case 'range':
          if (value.min !== undefined || value.max !== undefined) {
            results = results.filter(item => {
              const itemValue = item.metadata?.[filterId] || item.popularity || 0
              return (value.min === undefined || itemValue >= value.min) &&
                     (value.max === undefined || itemValue <= value.max)
            })
          }
          break
        case 'select':
          if (value) {
            results = results.filter(item => 
              item.category === value || 
              item.metadata?.[filterId] === value
            )
          }
          break
      }
    })

    return results.slice(0, maxResults)
  }, [data, query, activeFilters, filters, maxResults])

  // Group results by category
  const groupedResults = useMemo(() => {
    if (!showCategories) return { 'All Results': filteredResults }
    
    return filteredResults.reduce((acc, result) => {
      const category = result.category || 'Other'
      if (!acc[category]) acc[category] = []
      acc[category].push(result)
      return acc
    }, {} as Record<string, SearchResult[]>)
  }, [filteredResults, showCategories])

  // Dynamic filter suggestions based on current results
  const suggestedFilters = useMemo(() => {
    if (!query.trim() || filteredResults.length === 0) return []

    const categories = [...new Set(filteredResults.map(r => r.category))]
    const tags = [...new Set(filteredResults.flatMap(r => r.tags || []))]
    
    return [
      ...categories.map(cat => ({ type: 'category', value: cat, count: filteredResults.filter(r => r.category === cat).length })),
      ...tags.slice(0, 5).map(tag => ({ type: 'tag', value: tag, count: filteredResults.filter(r => r.tags?.includes(tag)).length }))
    ].slice(0, 8)
  }, [filteredResults, query])

  // Handle search
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery)
    if (newQuery.trim() && !recentSearches.includes(newQuery.trim())) {
      setRecentSearches(prev => [newQuery.trim(), ...prev.slice(0, 4)])
    }
    onSearch?.(newQuery, activeFilters)
  }

  // Handle filter change
  const handleFilterChange = (filterId: string, value: any) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: value
    }))
  }

  // Add quick filter
  const addQuickFilter = (type: string, value: string) => {
    if (type === 'category') {
      handleFilterChange('category', value)
    } else if (type === 'tag') {
      const currentTags = activeFilters.tags || []
      if (!currentTags.includes(value)) {
        handleFilterChange('tags', [...currentTags, value])
      }
    }
  }

  // Remove filter
  const removeFilter = (filterId: string, value?: string) => {
    if (value && Array.isArray(activeFilters[filterId])) {
      const newValues = activeFilters[filterId].filter((v: string) => v !== value)
      handleFilterChange(filterId, newValues.length > 0 ? newValues : undefined)
    } else {
      handleFilterChange(filterId, undefined)
    }
  }

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setShowFilters(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const hasActiveFilters = Object.values(activeFilters).some(value => 
    value !== undefined && value !== null && 
    (Array.isArray(value) ? value.length > 0 : true)
  )

  return (
    <div ref={searchRef} className={cn("relative w-full max-w-2xl", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {query && (
            <button
              onClick={() => {
                setQuery('')
                setActiveFilters({})
                inputRef.current?.focus()
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
          
          {filters.length > 0 && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "p-2 rounded-lg transition-all duration-200 flex items-center gap-1",
                hasActiveFilters 
                  ? "bg-blue-100 text-blue-600" 
                  : "hover:bg-gray-100 text-gray-500"
              )}
            >
              <Filter className="w-4 h-4" />
              {hasActiveFilters && (
                <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {Object.values(activeFilters).filter(v => v !== undefined && (Array.isArray(v) ? v.length > 0 : true)).length}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-3">
          {Object.entries(activeFilters).map(([filterId, value]) => {
            if (!value || (Array.isArray(value) && value.length === 0)) return null
            
            const filter = filters.find(f => f.id === filterId)
            if (!filter) return null

            if (Array.isArray(value)) {
              return value.map(v => (
                <div key={\`\${filterId}-\${v}\`} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  <span>{v}</span>
                  <button
                    onClick={() => removeFilter(filterId, v)}
                    className="hover:bg-blue-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))
            }

            return (
              <div key={filterId} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                <Tag className="w-3 h-3" />
                <span>{\`\${filter.label}: \${value}\`}</span>
                <button
                  onClick={() => removeFilter(filterId)}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )
          })}
        </div>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-96 overflow-hidden">
          {query.trim() && suggestedFilters.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <div className="text-sm font-medium text-gray-700 mb-2">Quick Filters</div>
              <div className="flex flex-wrap gap-2">
                {suggestedFilters.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => addQuickFilter(suggestion.type, suggestion.value)}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                  >
                    {suggestion.type === 'category' ? <Tag className="w-3 h-3" /> : <Tag className="w-3 h-3" />}
                    <span>{suggestion.value}</span>
                    <span className="text-gray-500">({suggestion.count})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!query.trim() && (showRecentSearches || showPopularSearches) && (
            <div className="p-4 border-b border-gray-100">
              {showRecentSearches && recentSearches.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4" />
                    Recent Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {showPopularSearches && popularSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    Popular Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {query.trim() && (
            <div className="max-h-80 overflow-y-auto">
              {Object.entries(groupedResults).map(([category, results]) => (
                <div key={category}>
                  {showCategories && Object.keys(groupedResults).length > 1 && (
                    <div className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 border-b border-gray-100">
                      {category} ({results.length})
                    </div>
                  )}
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => {
                        onResultClick?.(result)
                        setIsOpen(false)
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        {result.image && (
                          <img 
                            src={result.image || "/placeholder.svg"} 
                            alt={result.title}
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 truncate">{result.title}</div>
                          {result.description && (
                            <div className="text-sm text-gray-600 truncate mt-1">{result.description}</div>
                          )}
                          {result.tags && result.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {result.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ))}

              {filteredResults.length === 0 && query.trim() && (
                <div className="px-4 py-8 text-center text-gray-500">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <div className="font-medium">No results found</div>
                  <div className="text-sm">Try adjusting your search or filters</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {showFilters && filters.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-40 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Filters</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filters.map((filter) => (
              <div key={filter.id}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {filter.label}
                </label>

                {filter.type === 'checkbox' && filter.options && (
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {filter.options.map((option) => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={(activeFilters[filter.id] || []).includes(option.value)}
                          onChange={(e) => {
                            const current = activeFilters[filter.id] || []
                            const newValue = e.target.checked
                              ? [...current, option.value]
                              : current.filter((v: string) => v !== option.value)
                            handleFilterChange(filter.id, newValue.length > 0 ? newValue : undefined)
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                        {option.count && (
                          <span className="text-xs text-gray-500">({option.count})</span>
                        )}
                      </label>
                    ))}
                  </div>
                )}

                {filter.type === 'select' && filter.options && (
                  <select
                    value={activeFilters[filter.id] || ''}
                    onChange={(e) => handleFilterChange(filter.id, e.target.value || undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All</option>
                    {filter.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} {option.count && \`(\${option.count})\`}
                      </option>
                    ))}
                  </select>
                )}

                {filter.type === 'range' && (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        min={filter.min}
                        max={filter.max}
                        value={activeFilters[filter.id]?.min || ''}
                        onChange={(e) => {
                          const current = activeFilters[filter.id] || {}
                          handleFilterChange(filter.id, {
                            ...current,
                            min: e.target.value ? Number(e.target.value) : undefined
                          })
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        min={filter.min}
                        max={filter.max}
                        value={activeFilters[filter.id]?.max || ''}
                        onChange={(e) => {
                          const current = activeFilters[filter.id] || {}
                          handleFilterChange(filter.id, {
                            ...current,
                            max: e.target.value ? Number(e.target.value) : undefined
                          })
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => setActiveFilters({})}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
`,
    },
  },
};
