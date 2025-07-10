import React from 'react';

import { BlogLayout } from '@blog/components';

export function MAPScoreRangesExplained() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Decode the numbers: Complete guide to MAP score ranges (RIT 200–250) and
        what they mean for your middle schooler's academic growth.
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

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Detailed breakdown of RIT score ranges 200-250</li>
        <li>Grade-level expectations and benchmarks</li>
        <li>How to interpret score bands and confidence intervals</li>
        <li>What each score range indicates about student readiness</li>
        <li>Actionable steps based on your student's score range</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📊 Related Resources</h3>
        <p className="text-gray-700">
          Understanding score ranges helps inform decisions about{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school">
            advanced academic opportunities
          </a>{" "}
          and provides clarity on{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            where to focus foundational skill building
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
