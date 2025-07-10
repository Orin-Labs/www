import React from 'react';

import { BlogLayout } from '@blog/components';

export function SummerProgramsHighSchoolCredit() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Evergreen list of summer high school credit programs with seasonal
        traffic spikes for middle school acceleration planning.
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
          for year-round credit opportunities.
        </p>
      </div>

      <h2>What You'll Find:</h2>
      <ul>
        <li>Comprehensive list of accredited summer credit programs</li>
        <li>Cost, duration, and application timeline information</li>
        <li>Subject area focus and prerequisites</li>
        <li>University partnerships and transfer agreements</li>
        <li>Competitive vs. open enrollment programs</li>
        <li>Financial aid and scholarship opportunities</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">☀️ Related Resources</h3>
        <p className="text-gray-700">
          Summer credit programs complement{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/gpa-starts-eighth-grade">
            early GPA planning
          </a>{" "}
          and can enhance{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/stem-portfolio-github-slides">
            STEM portfolio development
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
