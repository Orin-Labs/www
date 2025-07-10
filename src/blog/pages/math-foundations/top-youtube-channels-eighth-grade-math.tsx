import React from 'react';

import { BlogLayout } from '@blog/components';

export function TopYouTubeChannelsEighthGradeMath() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Curated list of the best YouTube math channels specifically for 8th
        grade content that gets shared by satisfied parents.
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
          which includes some top channel recommendations.
        </p>
      </div>

      <h2>What You'll Find:</h2>
      <ul>
        <li>Top 10 YouTube channels ranked for 8th grade math</li>
        <li>Detailed reviews of teaching styles and approaches</li>
        <li>Best channels for specific topics (algebra, geometry, etc.)</li>
        <li>Video length and frequency information</li>
        <li>Parent and student testimonials</li>
        <li>Playlist recommendations for common problem areas</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📺 Related Resources</h3>
        <p className="text-gray-700">
          Video learning supplements traditional instruction and can help with{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra preparation
          </a>{" "}
          and{" "}
          <a href="/blog/middle-school-math-foundations-guide/math-anxiety-solutions">
            reducing math anxiety
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
