import React from 'react';

import { BlogLayout } from '@blog/components';

export function STEMPortfolioGitHubSlides() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Guide ambitious middle schoolers in building a professional STEM
        portfolio using GitHub and Google Slides for future opportunities.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school">
            STEM Electives & High-School Credit pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/pltw-vs-first-robotics">
            STEM program comparison
          </a>{" "}
          for portfolio-worthy activities.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Setting up a professional GitHub profile for middle schoolers</li>
        <li>Creating compelling project documentation</li>
        <li>Using Google Slides for visual portfolio presentation</li>
        <li>Age-appropriate coding projects and repositories</li>
        <li>Digital citizenship and online safety for young creators</li>
        <li>Portfolio review and feedback strategies</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">💻 Related Resources</h3>
        <p className="text-gray-700">
          STEM portfolios showcase achievements from{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/pltw-vs-first-robotics">
            robotics and STEM programs
          </a>{" "}
          and complement{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/summer-programs-high-school-credit">
            summer program applications
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
