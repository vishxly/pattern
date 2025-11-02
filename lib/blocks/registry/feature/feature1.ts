import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import APIIntegrationFeature from "../../components/feature/feature1";

export const feature1Registry: LandingComponentGroup = {
  title: "Feature",
  description: "Feature sections for your landing page.",
  category: "Feature",

  variants: {
    default: {
      title: "Feature Section",
      description: "A feature section with a title, description, and image.",
      component: APIIntegrationFeature,
      image: "/images/blocks/feature/feature1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState, JSX } from 'react';

// Define types for our tab system
type TabID = 'gemini' | 'replit' | 'vscode' | 'palm';
type Language = 'python' | 'javascript' | 'typescript' | 'curl';

interface CodeExample {
  language: Language;
  code: string;
}

interface TabInfo {
  id: TabID;
  name: string;
  icon: JSX.Element;
}

const APIIntegrationFeature = () => {
  const [activeTab, setActiveTab] = useState<TabID>('gemini');

  const codeExamples: Record<TabID, CodeExample> = {
    gemini: {
      language: 'python',
      code: \`import requests

response = requests.post('https://api.example.com/data', json={
    'key': 'value',
    'anotherKey': 'anotherValue',
})

print(response.json())\`
    },
    replit: {
      language: 'javascript',
      code: \`const response = await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key: 'value',
    anotherKey: 'anotherValue',
  }),
});

const data = await response.json();
console.log(data);\`
    },
    vscode: {
      language: 'typescript',
      code: \`interface ApiResponse {
  key: string;
  anotherKey: string;
}

const response = await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key: 'value',
    anotherKey: 'anotherValue',
  }),
});

const data: ApiResponse = await response.json();
console.log(data);\`
    },
    palm: {
      language: 'curl',
      code: \`curl -X POST https://api.example.com/data \\\\
  -H "Content-Type: application/json" \\\\
  -d '{
    "key": "value",
    "anotherKey": "anotherValue"
  }'\`
    }
  };

  const tabs: TabInfo[] = [
    {
      id: 'gemini',
      name: 'Gemini',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="currentColor" opacity="0.2"/>
          <path d="M12 2L2 7l10 5 10-5L12 2z" fill="currentColor"/>
          <path d="M2 7v10l10 5V12L2 7z" fill="currentColor" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 'replit',
      name: 'Replit',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.2"/>
          <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'vscode',
      name: 'VSCode',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2L7 12l-4.5-3.5L1 10l6 6 11.5-12L17.5 2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'palm',
      name: 'Google PaLM',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const renderCodeWithHighlight = (code: string, language: Language) => {
    const lines = code.split('\\n');
    return (
    <div className="font-mono text-sm leading-relaxed">
      {lines.map((line, index) => (
        <div key={index} className="flex">
        <div className="text-neutral-500 dark:text-neutral-400 select-none w-8 text-right pr-3 text-xs">
          {index + 1}
        </div>
        <div className="flex-1">
          {highlightSyntax(line, language)}
        </div>
        </div>
      ))}
    </div>
    );
  };

  const highlightSyntax = (line: string, language: Language) => {
    if (!line.trim()) return <span>&nbsp;</span>;

    // Simple syntax highlighting
    let highlightedLine = line;
    
    // Keywords
    const keywords: Record<Language, string[]> = {
      python: ['import', 'await', 'def', 'class', 'if', 'else', 'for', 'while', 'try', 'except', 'return', 'print'],
      javascript: ['const', 'let', 'var', 'function', 'async', 'await', 'if', 'else', 'for', 'while', 'try', 'catch', 'return', 'console'],
      typescript: ['const', 'let', 'var', 'function', 'async', 'await', 'if', 'else', 'for', 'while', 'try', 'catch', 'return', 'console', 'interface', 'type', 'import'],
      curl: ['curl', '-X', '-H', '-d']
    };

    // String highlighting
    highlightedLine = highlightedLine.replace(
      /(["'\`])((?:\\\\.|(?!\\1)[^\\\\])*?)\\1/g,
      '<span className="text-emerald-600 dark:text-emerald-400">$1$2$1</span>'
    );

    // Keyword highlighting
    if (keywords[language]) {
      keywords[language].forEach(keyword => {
        const regex = new RegExp(\`\\\\b(\${keyword})\\\\b\`, 'g');
        highlightedLine = highlightedLine.replace(regex, '<span className="text-blue-600 dark:text-blue-400 font-semibold">$1</span>');
      });
    }

    // Comment highlighting
    if (language === 'python') {
      highlightedLine = highlightedLine.replace(/(#.*$)/g, '<span className="text-neutral-500 dark:text-neutral-400 italic">$1</span>');
    } else if (language === 'javascript' || language === 'typescript') {
      highlightedLine = highlightedLine.replace(/(\\/\\/.*$)/g, '<span className="text-neutral-500 dark:text-neutral-400 italic">$1</span>');
    }

    return <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />;
  };

  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
                Build powerful integrations with our API
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                Generate payment links at scale, enabling seamless marketing campaigns, 
                efficient sales processes, and faster payment.
              </p>
            </div>
            
            {/* IDE Support Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Native IDE Support</h3>
              <div className="flex space-x-1">
                {/* VS Code */}
                <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 flex-1 flex items-center justify-center hover:shadow-md dark:hover:shadow-neutral-900/50 transition-shadow">
                  <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z"/>
                  </svg>
                </div>
                
                {/* Cursor */}
                <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 flex-1 flex items-center justify-center hover:shadow-md dark:hover:shadow-neutral-900/50 transition-shadow">
                  <svg className="w-8 h-8 text-neutral-700 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
                  </svg>
                </div>
                
                {/* Replit */}
                <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 flex-1 flex items-center justify-center hover:shadow-md dark:hover:shadow-neutral-900/50 transition-shadow">
                  <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L18.82 8 12 11.82 5.18 8 12 4.18z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Code Block */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl dark:shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              {/* Window Controls */}
              <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
              </div>
              
              {/* Tab Navigation */}
              <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-3 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex space-x-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={\`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 \${
                        activeTab === tab.id
                          ? 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm border border-neutral-200 dark:border-neutral-600'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-neutral-700/50'
                      }\`}
                    >
                      {tab.icon}
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 bg-white dark:bg-neutral-900">
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 overflow-x-auto">
                  {renderCodeWithHighlight(
                    codeExamples[activeTab].code,
                    codeExamples[activeTab].language
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIIntegrationFeature;
`,
    },
  },
};
