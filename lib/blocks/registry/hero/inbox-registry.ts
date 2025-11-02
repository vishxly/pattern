// lib/blocks/registry/inbox-registry.ts

import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Inbox from "../../components/hero/inbox";

export const inboxRegistry: LandingComponentGroup = {
  title: "Inbox",
  description:
    "This UI has a polished, minimal layout with bold typography, soft shadows, and a clean split-screen design showcasing the product in action.",
  category: "Hero",
  variants: {
    default: {
      title: "Inbox",
      description:
        "This UI has a polished, minimal layout with bold typography, soft shadows, and a clean split-screen design showcasing the product in action.",
      component: Inbox,
      image: "/images/blocks/hero/inbox.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState } from 'react';
import { 
  Search, 
  
  Send, 
  Users, 
  ChevronDown, 
  MessageCircle, 
  Globe, 
  Shield, 
  CheckCircle, 
  Clock,
  Bot,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';

const Inbox = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const chatMessages = [
    {
      id: '#782',
      name: 'Anonymous',
      message: 'Hello',
      time: 'about 2 months ago',
      status: 'Web',
      resolved: false,
      assumed: false
    },
    {
      id: '#763',
      name: 'Ahmad Falta',
      message: 'What is the status of order 2324',
      time: 'about 2 months ago',
      status: 'Web',
      resolved: true,
      assumed: true
    },
    {
      id: '#761',
      name: 'Anonymous',
      message: 'what can u do ?',
      time: 'about 2 months ago',
      status: 'Web',
      resolved: true,
      assumed: true
    },
    {
      id: '#756',
      name: 'Anonymous',
      message: "you're a helpful AI assistant that imitates API endpoints for a w...",
      time: 'about 2 months ago',
      status: 'Web',
      resolved: true,
      assumed: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Outer white ring container */}
      <div className="p-4 md:p-8">
        <div className="bg-white rounded-3xl shadow-2xl min-h-screen overflow-hidden">
          
          {/* Separate Centered Navigation Bar */}
          <div className="flex justify-center pt-6 pb-8">
            <nav className="bg-black rounded-full px-6 py-3 shadow-xl">
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="text-white text-xl font-bold tracking-tight">
                  loco
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                  <div className="flex items-center space-x-1 text-white hover:text-gray-300 cursor-pointer transition-colors">
                    <span className="text-sm font-medium">Products</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-white hover:text-gray-300 cursor-pointer transition-colors">
                    <span className="text-sm font-medium">Resources</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-white hover:text-gray-300 cursor-pointer transition-colors">
                    <span className="text-sm font-medium">Integrations</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-white hover:text-gray-300 cursor-pointer transition-colors">
                    <span className="text-sm font-medium">More</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Right side buttons */}
                <div className="hidden lg:flex items-center space-x-4">
                  <button className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                    Log in
                  </button>
                  <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Join the waitlist
                  </button>
                </div>

                {/* Mobile menu button */}
                <button 
                  className="lg:hidden text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mx-4 mb-6">
              <div className="bg-gray-900 rounded-2xl p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-1 text-white">
                    <span className="text-sm font-medium">Products</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-white">
                    <span className="text-sm font-medium">Resources</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-white">
                    <span className="text-sm font-medium">Integrations</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-white">
                    <span className="text-sm font-medium">More</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <hr className="border-gray-700" />
                  <button className="text-white hover:text-gray-300 text-sm font-medium text-left">
                    Log in
                  </button>
                  <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Join the waitlist
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content - Left Text, Right Dashboard */}
          <div className="flex flex-col xl:flex-row items-center xl:items-start px-6 md:px-12 lg:px-16 pb-12 gap-8 xl:gap-16">
            
            {/* Left Content Section */}
            <div className="xl:w-1/2 flex flex-col items-start">
              {/* Logo/Icon */}
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-12">
                <div className="w-10 h-10 bg-white rounded-lg"></div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight mb-8">
                Complete <em className="font-light italic">AI</em>
                <br />
                <span className="font-medium">Customer Support</span>
                <br />
                <span className="font-medium">Ecosystem</span>
              </h1>

              {/* Description */}
              <div className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
                <p className="mb-2">
                  We resolve <span className="font-bold text-gray-900">60-80%</span> of your customers' <span className="font-bold text-gray-900">complex support issues</span> via
                </p>
                <p>
                  phone, email, and web, reducing your costs <span className="font-bold text-gray-900">by over 50%</span>
                </p>
              </div>

              {/* CTA Button */}
              <button className="bg-black text-white px-5 py-3 rounded-2xl text-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Join the waitlist
              </button>
            </div>

            {/* Right Dashboard Section */}
            <div className="xl:w-1/2 w-full max-w-4xl relative">
              
              {/* Google Apps Icon */}
              <div className="absolute -top-4 -right-4 z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Browser Window Mockup */}
              <div className="bg-gray-50 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                {/* Browser Header */}
                <div className="bg-white px-6 py-4 flex items-center space-x-3 border-b">
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-gray-100 rounded-xl px-6 py-2 text-sm text-gray-600 flex items-center space-x-3">
                      <Shield className="w-4 h-4" />
                      <ChevronLeft className="w-4 h-4" />
                      <ChevronRight className="w-4 h-4" />
                      <span>https://www.website.com/</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-56 bg-white border-r p-6">
                    <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Apps</div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-blue-50 p-3 rounded-xl cursor-pointer transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Inbox</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-blue-50 p-3 rounded-xl cursor-pointer transition-colors">
                        <Send className="w-5 h-5" />
                        <span className="text-sm font-medium">Outbound</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-blue-50 p-3 rounded-xl cursor-pointer transition-colors">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-medium">Contacts</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1">
                    {/* Search Bar */}
                    <div className="p-6 bg-white border-b">
                      <div className="relative">
                        <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input 
                          type="text" 
                          placeholder="Quick search" 
                          className="w-full pl-12 pr-16 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-xs text-gray-400">
                          <span className="bg-gray-100 px-1 py-0.5 rounded">⌘</span>
                          <span className="bg-gray-100 px-1 py-0.5 rounded">K</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-6 space-y-4 bg-gray-50 max-h-96 overflow-y-auto">
                      {chatMessages.map((chat, index) => (
                        <div key={chat.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-3">
                                  <span className="font-semibold text-gray-900">{chat.name}</span>
                                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">👤 AI Agent</span>
                                </div>
                                <span className="text-xs text-gray-500">{chat.time}</span>
                              </div>
                              
                              <div className="text-sm text-gray-600 mb-3 font-medium">{chat.id}</div>
                              
                              <div className="flex items-center space-x-2 mb-3 flex-wrap">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                                  <Globe className="w-3 h-3 mr-1" />
                                  {chat.status}
                                </span>
                                {chat.resolved && (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Resolved
                                  </span>
                                )}
                                {chat.assumed && (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
                                    Assumed-Resolved
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                                <div className="flex items-center space-x-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                  <span>Neutral</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <span>✨ Light</span>
                                </div>
                              </div>
                              
                              <div className="text-sm text-gray-800 leading-relaxed">
                                {chat.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Chat Input */}
                    <div className="p-6 bg-white border-t">
                      <div className="flex items-center space-x-3 mb-4">
                        <MessageCircle className="w-10 h-10 bg-black text-white p-2 rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">tell me a joke</span>
                      </div>
                      <div className="text-right">
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-medium mb-2">
                          You are now in Inspect Mode
                        </div>
                        <div className="text-xs text-gray-500">
                          The AI Agent resolved this chat session
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
`,
    },
  },
};
