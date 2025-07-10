import React from 'react';

import { BlogLayout } from '@blog/components';

export function GPAStartsEighthGrade() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Clarify transcript myths: When and how high school GPA calculations
        begin in 8th grade for different course types.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school">
            STEM Electives & High-School Credit pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/dual-enrollment-guide-middle-school">
            dual enrollment guide
          </a>{" "}
          for credit considerations.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Which 8th grade courses count toward high school GPA</li>
        <li>State-by-state variations in transcript policies</li>
        <li>High school credit course implications</li>
        <li>College admissions and scholarship impact</li>
        <li>Strategies for managing early academic pressure</li>
        <li>Grade recovery and transcript correction options</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📊 Related Resources</h3>
        <p className="text-gray-700">
          Early GPA considerations affect decisions about{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/algebra-vs-math-8-flowchart">
            algebra acceleration
          </a>{" "}
          and{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/dual-enrollment-guide-middle-school">
            dual enrollment opportunities
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
