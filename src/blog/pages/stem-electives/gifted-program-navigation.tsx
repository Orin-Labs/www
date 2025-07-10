import React from 'react';

import { BlogLayout } from '@blog/components';

export function GiftedProgramNavigation() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        A comprehensive guide to understanding, accessing, and maximizing gifted
        education opportunities.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/advanced-academics-middle-school-guide">
            Advanced Academics pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/advanced-academics-middle-school-guide/dual-enrollment-guide-middle-school">
            dual enrollment guide
          </a>{" "}
          for advanced learning opportunities.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Types of gifted programs and services</li>
        <li>Identification and testing processes</li>
        <li>Advocacy strategies for parents</li>
        <li>Supporting gifted learners at home</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📊 Related Resources</h3>
        <p className="text-gray-700">
          Gifted identification often relies on{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            standardized assessment data
          </a>{" "}
          including MAP scores and cognitive evaluations. Strong{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            mathematical foundations
          </a>{" "}
          are particularly important for STEM-focused gifted programs.
        </p>
      </div>
    </BlogLayout>
  );
}
