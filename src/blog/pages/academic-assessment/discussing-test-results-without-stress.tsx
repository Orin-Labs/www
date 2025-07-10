import React from 'react';

import { BlogLayout } from '@blog/components';

export function DiscussingTestResultsWithoutStress() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Emotional guidance for discussing test scores with your middle schooler
        in ways that build confidence rather than create anxiety.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            MAP & State Tests pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/understanding-rit-scores-guide">
            RIT scores guide
          </a>{" "}
          for score interpretation basics.
        </p>
      </div>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>Age-appropriate ways to explain test scores</li>
        <li>Focusing on growth rather than comparison to peers</li>
        <li>How to identify and address test anxiety</li>
        <li>Conversation scripts for different score scenarios</li>
        <li>Building growth mindset around academic challenges</li>
        <li>When and how to involve teachers in discussions</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">💬 Related Resources</h3>
        <p className="text-gray-700">
          Effective score discussions require understanding{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/growth-vs-proficiency">
            growth vs proficiency metrics
          </a>{" "}
          and knowing how to use results to guide{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            targeted academic support
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
