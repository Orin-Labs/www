import React from 'react';

import { BlogLayout } from '@blog/components';

export function NWEAToStateTestConverter() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Interactive tool to convert MAP RIT scores to state test predictions
        including STAAR, PARCC, and other state assessments.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            MAP & State Tests pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/understanding-rit-scores-guide">
            RIT scores guide
          </a>{" "}
          for foundational understanding.
        </p>
      </div>

      <h2>What You'll Get:</h2>
      <ul>
        <li>Interactive MAP to state test score converter (JS widget)</li>
        <li>Conversion tables for major state assessments</li>
        <li>Accuracy information and confidence intervals</li>
        <li>Grade-level specific conversions</li>
        <li>Interpretation guidance for converted scores</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">🔧 Related Resources</h3>
        <p className="text-gray-700">
          Score conversions are most useful when combined with{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/map-score-ranges-explained">
            understanding MAP score ranges
          </a>{" "}
          and using{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/state-test-prep-strategies">
            targeted test preparation strategies
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
