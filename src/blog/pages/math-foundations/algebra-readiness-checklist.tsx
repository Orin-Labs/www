import React from 'react';

import { BlogLayout } from '@blog/components';

export function AlgebraReadinessChecklist() {
  return (
    <BlogLayout>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          A comprehensive assessment tool to determine if your middle schooler
          has the foundational skills for algebra success.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-blue-800">
            🚧 <strong>Coming Soon:</strong> This sub-article is being developed
            as part of our Math Foundations pillar series.
          </p>
        </div>

        <h2>What You'll Learn:</h2>
        <ul>
          <li>Essential pre-algebra skills assessment</li>
          <li>Warning signs your student needs more time</li>
          <li>Skill-building strategies for gaps</li>
          <li>When to accelerate vs. when to strengthen foundations</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
