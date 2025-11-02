"use client";
import React, { useRef } from "react";
import { DocsFloatingNavigator } from "@/lib/docs/ui/floating-navigator";

const FloatingNavigatorDemo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const mySections = [
    { key: "welcome", title: "1. Welcome" },
    { key: "features", title: "2. Features" },
    { key: "pricing", title: "3. Pricing" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div ref={scrollRef} className="max-h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 space-y-12">
          {/* Section 1: Welcome */}
          <section>
            <div id="variant-welcome" className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Welcome</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Welcome to our amazing product! This is the main welcome section.
              </p>
            </div>
            <div id="preview-welcome" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Preview</h3>
              <div className="bg-white dark:bg-neutral-900 dark:text-white p-6 rounded-lg shadow-sm border dark:border-neutral-700">
                <p>Here's a preview of what our product looks like in action.</p>
              </div>
            </div>
            <div id="installation-welcome" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Installation</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>npm install my-awesome-product</code>
              </div>
            </div>
            <div id="examples-welcome" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Examples</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>{`import { Product } from 'my-awesome-product';\n\n<Product theme="dark" />`}</code>
              </div>
            </div>
          </section>

          {/* Section 2: Features */}
          <section>
            <div id="variant-features" className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Features</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Discover all the amazing features our product offers.
              </p>
            </div>
            <div id="preview-features" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Preview</h3>
              <div className="bg-white dark:bg-neutral-900 dark:text-white p-6 rounded-lg shadow-sm border dark:border-neutral-700">
                <ul className="space-y-2">
                  <li>✅ Fast performance</li>
                  <li>✅ Easy to use</li>
                  <li>✅ Great support</li>
                </ul>
              </div>
            </div>
            <div id="installation-features" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Installation</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>npm install --save-features</code>
              </div>
            </div>
            <div id="examples-features" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Examples</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>{`<Product features={['fast', 'easy', 'supported']} />`}</code>
              </div>
            </div>
          </section>

          {/* Section 3: Pricing */}
          <section>
            <div id="variant-pricing" className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Pricing</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Simple and transparent pricing for everyone.
              </p>
            </div>
            <div id="preview-pricing" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Preview</h3>
              <div className="bg-white dark:bg-neutral-900 dark:text-white p-6 rounded-lg shadow-sm border dark:border-neutral-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">$29</div>
                  <div className="text-neutral-600 dark:text-neutral-400">per month</div>
                </div>
              </div>
            </div>
            <div id="installation-pricing" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Installation</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>npm install --plan=pro</code>
              </div>
            </div>
            <div id="examples-pricing" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Examples</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>{`<PricingCard plan="pro" price={29} />`}</code>
              </div>
            </div>
          </section>

          {/* Extra Scroll Padding */}
          <div className="h-96 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
            <p className="text-neutral-500 dark:text-neutral-400">
              Extra content to make the page scrollable...
            </p>
          </div>
        </div>
      </div>

      <DocsFloatingNavigator
        groupSlug="demo"
        variants={mySections}
        scrollContainer={scrollRef}
        floatingPosition="top-right"
      />
    </div>
  );
};

export default FloatingNavigatorDemo;
