import React from "react";

import { BlogLayout } from "@blog/components";

export default function UnderstandingRITScores() {
  return (
    <BlogLayout>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Deep dive into what RIT scores really mean and how to use them to
          support your student's learning journey.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-blue-800">
            🚧 <strong>Coming Soon:</strong> This sub-article is being developed
            as part of our Academic Assessment pillar series.
          </p>
        </div>

        <h2>What You'll Learn:</h2>
        <ul>
          <li>How to read and interpret RIT score reports</li>
          <li>What growth expectations mean for your grade level</li>
          <li>When to be concerned vs. when to celebrate</li>
          <li>Action steps based on different score ranges</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
