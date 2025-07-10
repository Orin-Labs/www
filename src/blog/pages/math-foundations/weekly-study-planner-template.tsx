import React from 'react';

import { BlogLayout } from '@blog/components';

export function WeeklyStudyPlannerTemplate() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Free Google Sheets template for planning middle school math study
        sessions that captures email leads and drives engagement.
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
          which includes weekly planning strategies.
        </p>
      </div>

      <h2>What You'll Get:</h2>
      <ul>
        <li>Free Google Sheets study planner template</li>
        <li>Grade-specific math topic scheduling</li>
        <li>Time allocation guidelines for different concepts</li>
        <li>Progress tracking and goal-setting features</li>
        <li>Parent-student collaboration tools</li>
        <li>Integration with popular math apps and platforms</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📅 Related Resources</h3>
        <p className="text-gray-700">
          Consistent study planning supports{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness development
          </a>{" "}
          and helps with{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/state-test-prep-strategies">
            test preparation strategies
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
