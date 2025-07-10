import React from 'react';

import { BlogLayout } from '@blog/components';

export function IntegerRulesCheatSheet() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Downloadable classroom poster with visual integer rules chart to help
        students master positive and negative number operations.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            Math Foundations pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness checklist
          </a>{" "}
          for next-level skills.
        </p>
      </div>

      <h2>What You'll Get:</h2>
      <ul>
        <li>Free downloadable integer rules chart (poster PDF)</li>
        <li>
          Visual models for addition, subtraction, multiplication, division
        </li>
        <li>Color-coded positive and negative number rules</li>
        <li>Practice problems with step-by-step solutions</li>
        <li>Classroom-ready poster for teachers and homeschool families</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📊 Related Resources</h3>
        <p className="text-gray-700">
          Integer mastery is essential for{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness
          </a>{" "}
          and shows up on{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            MAP testing and state assessments
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
