import React from 'react';

import { BlogLayout } from '@blog/components';

export function MathAnxietySolutions() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Recognize and address math anxiety in middle schoolers using SEL-focused
        strategies that build confidence and reduce stress.
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
          which includes strategies for building math confidence.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Warning signs of math anxiety in middle schoolers</li>
        <li>Evidence-based interventions and SEL strategies</li>
        <li>Creating a supportive math learning environment</li>
        <li>Growth mindset techniques for mathematical challenges</li>
        <li>When to seek professional support</li>
        <li>Parent conversation scripts for anxious moments</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">💚 Related Resources</h3>
        <p className="text-gray-700">
          Addressing math anxiety improves{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/discussing-test-results-without-stress">
            test performance and score discussions
          </a>{" "}
          and creates better conditions for{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness development
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
