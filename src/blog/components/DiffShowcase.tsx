import React from 'react';

import { ComparisonTable } from './ComparisonTable';
import {
  CodeDiff,
  DiffTable,
  FeatureDiff,
} from './DiffTable';

export const DiffShowcase: React.FC = () => {
  // Example 1: Basic DiffTable usage
  const basicDiffItems = [
    {
      label: "User Authentication",
      before: "Basic username/password",
      after: "OAuth 2.0 + Multi-factor authentication",
      status: "modified" as const,
    },
    {
      label: "API Rate Limiting",
      before: "None",
      after: "100 requests/minute per user",
      status: "added" as const,
    },
    {
      label: "Legacy Flash Components",
      before: "Flash-based file uploader",
      after: "Modern HTML5 drag-and-drop",
      status: "removed" as const,
    },
    {
      label: "Database Connection",
      before: "MySQL 5.7",
      after: "MySQL 5.7",
      status: "unchanged" as const,
    },
  ];

  // Example 2: Code changes
  const codeChanges = [
    {
      file: "src/components/Button.tsx",
      before: `<button className="btn">
  {children}
</button>`,
      after: `<button className="btn" {...props}>
  {children}
</button>`,
      status: "modified" as const,
    },
    {
      file: "src/hooks/useAuth.ts",
      before: "// File doesn't exist",
      after: `export const useAuth = () => {
  // Authentication logic
  return { user, login, logout };
};`,
      status: "added" as const,
    },
    {
      file: "src/utils/legacy.js",
      before: `function oldFunction() {
  // Legacy implementation
}`,
      after: "// File removed",
      status: "removed" as const,
    },
  ];

  // Example 3: Feature comparison
  const featureComparison = [
    {
      name: "Page Load Speed",
      oldVersion: "3.2 seconds",
      newVersion: "1.1 seconds",
      improvement: "66% faster",
    },
    {
      name: "Mobile Responsiveness",
      oldVersion: "Desktop only",
      newVersion: "Full responsive design",
      improvement: "100% mobile compatible",
    },
    {
      name: "SEO Score",
      oldVersion: "45/100",
      newVersion: "92/100",
      improvement: "+47 points",
    },
    {
      name: "Accessibility",
      oldVersion: "WCAG 1.0 partial",
      newVersion: "WCAG 2.1 AA compliant",
      improvement: "Full compliance",
    },
  ];

  // Example 4: Custom comparison using ComparisonTable
  const environmentComparison = [
    {
      setting: "Node.js Version",
      development: "v18.17.0",
      staging: "v18.17.0",
      production: "v18.17.0",
    },
    {
      setting: "Database",
      development: "SQLite (local)",
      staging: "PostgreSQL 15",
      production: "PostgreSQL 15 (clustered)",
    },
    {
      setting: "Redis Cache",
      development: "❌ Disabled",
      staging: "✅ Single instance",
      production: "✅ Cluster mode",
    },
    {
      setting: "SSL Certificate",
      development: "❌ HTTP only",
      staging: "✅ Let's Encrypt",
      production: "✅ Extended validation",
    },
  ];

  const environmentColumns = [
    { header: "Setting", key: "setting", className: "font-semibold" },
    {
      header: "Development",
      key: "development",
      className: "text-center bg-blue-50",
    },
    {
      header: "Staging",
      key: "staging",
      className: "text-center bg-yellow-50",
    },
    {
      header: "Production",
      key: "production",
      className: "text-center bg-green-50",
    },
  ];

  return (
    <div className="space-y-12 p-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Diff Component Showcase</h1>
        <p className="text-xl text-gray-600 mb-8">
          Comprehensive examples of using diff components for before/after
          comparisons
        </p>
      </div>

      {/* Example 1: Basic DiffTable */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">1. Basic DiffTable</h2>
        <p className="text-gray-600 mb-6">
          Perfect for showing system changes with status indicators
        </p>
        <DiffTable
          title="System Upgrade Changes"
          items={basicDiffItems}
          className="mb-4"
        />
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Usage:</h3>
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
            {`<DiffTable
  title="System Upgrade Changes"
  items={[
    {
      label: "User Authentication",
      before: "Basic username/password",
      after: "OAuth 2.0 + Multi-factor authentication",
      status: 'modified'
    },
    // ... more items
  ]}
/>`}
          </pre>
        </div>
      </section>

      {/* Example 2: CodeDiff */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">2. CodeDiff Component</h2>
        <p className="text-gray-600 mb-6">
          Specialized for showing code changes with file names
        </p>
        <CodeDiff
          title="Pull Request #123 - Component Refactor"
          changes={codeChanges}
          className="mb-4"
        />
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Usage:</h3>
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
            {`<CodeDiff
  title="Pull Request #123"
  changes={[
    {
      file: "src/components/Button.tsx",
      before: "<button className=\\"btn\\">",
      after: "<button className=\\"btn\\" {...props}>",
      status: 'modified'
    },
    // ... more changes
  ]}
/>`}
          </pre>
        </div>
      </section>

      {/* Example 3: FeatureDiff */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">3. FeatureDiff Component</h2>
        <p className="text-gray-600 mb-6">
          Perfect for showing performance improvements and feature upgrades
        </p>
        <FeatureDiff
          title="Version 2.0 Performance Improvements"
          features={featureComparison}
          className="mb-4"
        />
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Usage:</h3>
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
            {`<FeatureDiff
  title="Version 2.0 Performance Improvements"
  features={[
    {
      name: "Page Load Speed",
      oldVersion: "3.2 seconds",
      newVersion: "1.1 seconds",
      improvement: "66% faster"
    },
    // ... more features
  ]}
/>`}
          </pre>
        </div>
      </section>

      {/* Example 4: Custom ComparisonTable */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">4. Custom ComparisonTable</h2>
        <p className="text-gray-600 mb-6">
          For more complex comparisons with custom columns and styling
        </p>
        <ComparisonTable
          title="Environment Configuration Matrix"
          columns={environmentColumns}
          data={environmentComparison}
          className="mb-4"
        />
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Usage:</h3>
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
            {`<ComparisonTable
  title="Environment Configuration Matrix"
  columns={[
    { header: "Setting", key: "setting", className: "font-semibold" },
    { header: "Development", key: "development", className: "bg-blue-50" },
    { header: "Staging", key: "staging", className: "bg-yellow-50" },
    { header: "Production", key: "production", className: "bg-green-50" },
  ]}
  data={environmentData}
/>`}
          </pre>
        </div>
      </section>

      {/* Component Selection Guide */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-2xl font-bold mb-4">
          🎯 Component Selection Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Use DiffTable when:</h3>
            <ul className="space-y-2 text-sm">
              <li>• You need to show before/after changes</li>
              <li>• Status indicators are important</li>
              <li>• Changes are system or configuration related</li>
              <li>• You want colored status badges</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Use CodeDiff when:</h3>
            <ul className="space-y-2 text-sm">
              <li>• Comparing code changes</li>
              <li>• File names are important context</li>
              <li>• Pull request reviews</li>
              <li>• Documentation of code evolution</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Use FeatureDiff when:</h3>
            <ul className="space-y-2 text-sm">
              <li>• Showing performance improvements</li>
              <li>• Feature upgrade comparisons</li>
              <li>• Before/after metrics</li>
              <li>• Marketing or progress reports</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Use ComparisonTable when:</h3>
            <ul className="space-y-2 text-sm">
              <li>• Complex multi-column comparisons</li>
              <li>• Custom styling requirements</li>
              <li>• More than 2 options to compare</li>
              <li>• Educational or reference content</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiffShowcase;
