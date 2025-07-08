import React from "react";

import { BlogLayout } from "@blog/components";

export default function GiftedProgramNavigation() {
  return (
    <BlogLayout>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          A comprehensive guide to understanding, accessing, and maximizing
          gifted education opportunities.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-blue-800">
            🚧 <strong>Coming Soon:</strong> This sub-article is being developed
            as part of our Advanced Academics pillar series.
          </p>
        </div>

        <h2>What You'll Learn:</h2>
        <ul>
          <li>Types of gifted programs and services</li>
          <li>Identification and testing processes</li>
          <li>Advocacy strategies for parents</li>
          <li>Supporting gifted learners at home</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
