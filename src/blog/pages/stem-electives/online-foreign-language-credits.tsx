import React from 'react';

import { BlogLayout } from '@blog/components';

export function OnlineForeignLanguageCredits() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        ROI analysis of online high school foreign language credits for middle
        schoolers: costs, benefits, and quality considerations.
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
          for other credit opportunities.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Cost-benefit analysis of online language programs</li>
        <li>Quality comparison: online vs. traditional instruction</li>
        <li>High school credit transfer requirements</li>
        <li>Age-appropriate online learning considerations</li>
        <li>Top-rated programs and platforms review</li>
        <li>Long-term language learning pathway planning</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">🌍 Related Resources</h3>
        <p className="text-gray-700">
          Foreign language credits complement{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/stem-portfolio-github-slides">
            STEM portfolio development
          </a>{" "}
          for well-rounded high school preparation and{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/gpa-starts-eighth-grade">
            early GPA considerations
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
