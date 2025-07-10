import React from 'react';

import { BlogLayout } from '@blog/components';

export function AlgebraVsMath8Flowchart() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Printable decision flowchart to help families determine whether 8th
        graders should take Algebra I or continue with Math 8.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school">
            STEM Electives & High-School Credit pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness checklist
          </a>{" "}
          for preparation guidance.
        </p>
      </div>

      <h2>What You'll Get:</h2>
      <ul>
        <li>Printable Algebra I vs Math 8 decision flowchart</li>
        <li>Assessment criteria for algebra readiness</li>
        <li>Pros and cons of acceleration vs. foundation building</li>
        <li>Long-term high school planning implications</li>
        <li>Parent-student-teacher conversation guide</li>
        <li>Alternative pathway options for different readiness levels</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📊 Related Resources</h3>
        <p className="text-gray-700">
          This decision should be informed by{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            MAP testing and assessment data
          </a>{" "}
          and guided by{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            comprehensive readiness assessment
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
