import React from 'react';

import { BlogLayout } from '@blog/components';

export function GrowthVsProficiency() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Understand percentile vs gain: Which matters more for your student's
        academic progress and how to use both metrics effectively.
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
        <li>
          Difference between growth percentiles and achievement percentiles
        </li>
        <li>How to interpret MAP growth norms</li>
        <li>When to focus on growth vs. when to focus on proficiency</li>
        <li>Setting appropriate expectations for your student</li>
        <li>Using both metrics to guide academic planning</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📊 Related Resources</h3>
        <p className="text-gray-700">
          Growth data helps determine readiness for{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school">
            advanced academic opportunities
          </a>{" "}
          and informs decisions about{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            foundational skill development
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
