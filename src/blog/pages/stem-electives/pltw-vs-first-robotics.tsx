import React from 'react';

import { BlogLayout } from '@blog/components';

export function PLTWVsFirstRobotics() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Detailed comparison table of Project Lead The Way vs FIRST Robotics
        programs for middle school STEM engagement.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school">
            STEM Electives & High-School Credit pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/stem-portfolio-github-slides">
            STEM portfolio building guide
          </a>{" "}
          for documenting your student's experiences.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Detailed comparison table: PLTW vs FIRST Robotics</li>
        <li>Time commitment and cost analysis</li>
        <li>Skills development and learning outcomes</li>
        <li>High school pathway connections</li>
        <li>College admissions and scholarship implications</li>
        <li>Parent and student testimonials</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">🤖 Related Resources</h3>
        <p className="text-gray-700">
          STEM program participation enhances{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/stem-portfolio-github-slides">
            STEM portfolio development
          </a>{" "}
          and may influence decisions about{" "}
          <a href="/blog/stem-electives-high-school-credit-middle-school/algebra-vs-math-8-flowchart">
            advanced math acceleration
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
