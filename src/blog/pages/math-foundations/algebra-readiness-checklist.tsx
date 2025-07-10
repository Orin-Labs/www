import React from 'react';

import { BlogLayout } from '@blog/components';

export function AlgebraReadinessChecklist() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        A comprehensive assessment tool to determine if your middle schooler has
        the foundational skills for algebra success.
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
            fraction mastery guide
          </a>{" "}
          for foundational skills.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Essential pre-algebra skills assessment</li>
        <li>Warning signs your student needs more time</li>
        <li>Skill-building strategies for gaps</li>
        <li>When to accelerate vs. when to strengthen foundations</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📊 Related Resources</h3>
        <p className="text-gray-700">
          Use your student's{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            MAP scores and assessment data
          </a>{" "}
          to identify specific skill gaps. For students who are ready for
          acceleration, explore our{" "}
          <a href="/blog/advanced-academics-middle-school-guide">
            advanced academics guide
          </a>{" "}
          for next steps.
        </p>
      </div>
    </BlogLayout>
  );
}
