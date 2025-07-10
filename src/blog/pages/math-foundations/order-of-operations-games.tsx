import React from 'react';

import { BlogLayout } from '@blog/components';

export function OrderOfOperationsGames() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Curated list of 10 engaging PEMDAS games to help students master order
        of operations through interactive online practice.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            Math Foundations pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            main math survival guide
          </a>{" "}
          for comprehensive learning strategies.
        </p>
      </div>

      <h2>What You'll Get:</h2>
      <ul>
        <li>10 curated PEMDAS games with affiliate links</li>
        <li>Age-appropriate difficulty levels for grades 6-8</li>
        <li>Device compatibility and time requirements</li>
        <li>Parent review and recommendation notes</li>
        <li>Progress tracking features comparison</li>
        <li>Free vs. premium game options</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">🎮 Related Resources</h3>
        <p className="text-gray-700">
          Order of operations mastery is fundamental for{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra success
          </a>{" "}
          and frequently appears on{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            standardized tests
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
