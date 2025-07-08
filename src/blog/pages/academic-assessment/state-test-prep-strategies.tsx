import React from "react";

import { BlogLayout } from "@blog/components";

export default function StateTestPrepStrategies() {
  return (
    <BlogLayout>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Evidence-based strategies for preparing middle schoolers for state
          assessments without the stress.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-blue-800">
            🚧 <strong>Coming Soon:</strong> This sub-article is being developed
            as part of our Academic Assessment pillar series.
          </p>
        </div>

        <h2>What You'll Learn:</h2>
        <ul>
          <li>Timeline for effective test preparation</li>
          <li>Practice strategies that reduce anxiety</li>
          <li>How to use MAP scores to predict state test performance</li>
          <li>Home support techniques that make a difference</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
