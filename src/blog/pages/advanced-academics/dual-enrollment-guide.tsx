import React from "react";

import { BlogLayout } from "@blog/components";

export default function DualEnrollmentGuide() {
  return (
    <BlogLayout>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Everything you need to know about dual enrollment opportunities for
          academically advanced middle schoolers.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-blue-800">
            🚧 <strong>Coming Soon:</strong> This sub-article is being developed
            as part of our Advanced Academics pillar series.
          </p>
        </div>

        <h2>What You'll Learn:</h2>
        <ul>
          <li>Types of dual enrollment programs available</li>
          <li>Application processes and requirements</li>
          <li>Academic and social considerations</li>
          <li>How to evaluate if it's right for your student</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
