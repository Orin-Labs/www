import React from 'react';

import { BlogLayout } from '@blog/components';

export function PreAlgebraVocabularyFlashcards() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Downloadable Anki deck with essential pre-algebra vocabulary terms that
        drives deeper learning and academic confidence.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <p className="text-blue-800">
          🚧 <strong>Coming Soon:</strong> This sub-article is being developed
          as part of our{" "}
          <a href="/blog/middle-school-math-foundations-guide">
            Math Foundations pillar series
          </a>
          . Meanwhile, explore our{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness checklist
          </a>{" "}
          for comprehensive preparation.
        </p>
      </div>

      <h2>What You'll Get:</h2>
      <ul>
        <li>Complete Anki deck with 100+ pre-algebra vocabulary terms</li>
        <li>Visual examples and real-world applications</li>
        <li>Spaced repetition system for long-term retention</li>
        <li>Audio pronunciations for mathematical terms</li>
        <li>Progress tracking and mastery indicators</li>
        <li>Parent guide for supporting vocabulary development</li>
      </ul>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">📚 Related Resources</h3>
        <p className="text-gray-700">
          Strong mathematical vocabulary is essential for{" "}
          <a href="/blog/middle-school-math-foundations-guide/algebra-readiness-checklist-middle-school">
            algebra readiness
          </a>{" "}
          and helps students communicate mathematical thinking on{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            assessments and tests
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
