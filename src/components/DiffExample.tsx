import React from 'react';

import { ComparisonTable } from './ComparisonTable';

export const DiffExample: React.FC = () => {
  // Before/After Code Comparison
  const codeComparisonColumns = [
    { header: "Aspect", key: "aspect", className: "font-semibold w-1/4" },
    {
      header: "Before",
      key: "before",
      className: "font-mono text-sm bg-red-50",
    },
    {
      header: "After",
      key: "after",
      className: "font-mono text-sm bg-green-50",
    },
  ];

  const codeComparisonData = [
    {
      aspect: "Import Statement",
      before: "import React from 'react';",
      after: "import React, { useState } from 'react';",
    },
    {
      aspect: "State Management",
      before: "// No state management",
      after: "const [count, setCount] = useState(0);",
    },
    {
      aspect: "Event Handler",
      before: "onClick={() => console.log('clicked')}",
      after: "onClick={() => setCount(count + 1)}",
    },
    {
      aspect: "JSX Output",
      before: "<div>Static content</div>",
      after: "<div>Count: {count}</div>",
    },
  ];

  // Feature Comparison
  const featureComparisonColumns = [
    { header: "Feature", key: "feature", className: "font-semibold" },
    { header: "Old Version", key: "oldVersion", className: "text-center" },
    { header: "New Version", key: "newVersion", className: "text-center" },
    { header: "Status", key: "status", className: "text-center font-semibold" },
  ];

  const featureComparisonData = [
    {
      feature: "Authentication",
      oldVersion: "Basic login",
      newVersion: "OAuth + 2FA",
      status: "🔄 Upgraded",
    },
    {
      feature: "API Response Time",
      oldVersion: "~500ms",
      newVersion: "~150ms",
      status: "⚡ Improved",
    },
    {
      feature: "Mobile Support",
      oldVersion: "❌ None",
      newVersion: "✅ Responsive",
      status: "🆕 New",
    },
    {
      feature: "Data Export",
      oldVersion: "CSV only",
      newVersion: "CSV, JSON, PDF",
      status: "📈 Enhanced",
    },
  ];

  // Configuration Comparison
  const configComparisonColumns = [
    { header: "Setting", key: "setting", className: "font-semibold" },
    {
      header: "Development",
      key: "development",
      className: "text-center bg-blue-50",
    },
    {
      header: "Production",
      key: "production",
      className: "text-center bg-orange-50",
    },
  ];

  const configComparisonData = [
    {
      setting: "API Endpoint",
      development: "localhost:3000",
      production: "api.example.com",
    },
    {
      setting: "Debug Mode",
      development: "true",
      production: "false",
    },
    {
      setting: "Cache TTL",
      development: "10 seconds",
      production: "1 hour",
    },
    {
      setting: "Log Level",
      development: "debug",
      production: "error",
    },
  ];

  // Performance Metrics Comparison
  const performanceColumns = [
    { header: "Metric", key: "metric", className: "font-semibold" },
    {
      header: "Before Optimization",
      key: "before",
      className: "text-center text-red-600",
    },
    {
      header: "After Optimization",
      key: "after",
      className: "text-center text-green-600",
    },
    {
      header: "Improvement",
      key: "improvement",
      className: "text-center font-bold",
    },
  ];

  const performanceData = [
    {
      metric: "Page Load Time",
      before: "3.2s",
      after: "1.1s",
      improvement: "66% faster",
    },
    {
      metric: "Bundle Size",
      before: "2.5MB",
      after: "890KB",
      improvement: "64% smaller",
    },
    {
      metric: "Time to Interactive",
      before: "4.8s",
      after: "1.8s",
      improvement: "62% faster",
    },
    {
      metric: "Lighthouse Score",
      before: "45/100",
      after: "95/100",
      improvement: "+50 points",
    },
  ];

  return (
    <div className="space-y-8 p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Diff Component Examples</h1>
        <p className="text-gray-600 mb-8">
          Using ComparisonTable for side-by-side comparisons and diffs
        </p>
      </div>

      {/* Code Comparison */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Code Changes</h2>
        <ComparisonTable
          title="React Component Refactor"
          columns={codeComparisonColumns}
          data={codeComparisonData}
          className="mb-6"
        />
      </section>

      {/* Feature Comparison */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Feature Updates</h2>
        <ComparisonTable
          title="Version 1.0 vs Version 2.0"
          columns={featureComparisonColumns}
          data={featureComparisonData}
          className="mb-6"
        />
      </section>

      {/* Configuration Comparison */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Environment Configuration</h2>
        <ComparisonTable
          title="Development vs Production Settings"
          columns={configComparisonColumns}
          data={configComparisonData}
          className="mb-6"
        />
      </section>

      {/* Performance Metrics */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Performance Improvements</h2>
        <ComparisonTable
          title="Optimization Results"
          columns={performanceColumns}
          data={performanceData}
          className="mb-6"
        />
      </section>

      {/* Usage Instructions */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Usage Instructions</h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold">1. Define your columns:</h4>
            <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
              {`const columns = [
  { header: "Feature", key: "feature", className: "font-semibold" },
  { header: "Before", key: "before", className: "bg-red-50" },
  { header: "After", key: "after", className: "bg-green-50" },
];`}
            </pre>
          </div>

          <div>
            <h4 className="font-semibold">2. Prepare your data:</h4>
            <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
              {`const data = [
  {
    feature: "Authentication",
    before: "Basic login",
    after: "OAuth + 2FA",
  },
  // ... more rows
];`}
            </pre>
          </div>

          <div>
            <h4 className="font-semibold">3. Use the component:</h4>
            <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
              {`<ComparisonTable
  title="My Comparison"
  columns={columns}
  data={data}
  className="mb-6"
/>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};
