import React from 'react';

import { BlogLayout } from '@blog/components';

export function FractionsWithPizzaSlicesVideo() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Parent-friendly video guide using pizza slice analogies to teach 6th
        graders fractions in ways that actually make sense.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            Math Foundations pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/middle-school-math-foundations-guide/fraction-mastery-guide-middle-school">
            comprehensive fraction mastery guide
          </a>{" "}
          for detailed strategies.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Video series: Teaching fractions with pizza slice analogies</li>
        <li>Visual models that make fractions intuitive</li>
        <li>Common fraction misconceptions and how to fix them</li>
        <li>Hands-on activities for kinesthetic learners</li>
        <li>Parent scripts for guiding fraction conversations</li>
        <li>Real-world fraction applications kids actually use</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">🍕 Related Resources</h3>
        <p className="text-gray-700">
          Fraction mastery is crucial for{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness
          </a>{" "}
          and impacts performance on{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            standardized assessments
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
