import React from "react";

import { AlertTriangle, Info, Target } from "lucide-react";

import {
  Alert,
  BlogLayout,
  BlogSection,
  ScoreConverter,
} from "@blog/components";

export function NWEAToStateTestConverter() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600">
        Convert your student's MAP RIT scores to state test predictions and
        understand what to expect on upcoming assessments.
      </p>

      <Alert type="info" title="Why Convert RIT Scores?" icon={Info}>
        <p>
          MAP RIT scores and state tests measure similar skills but use
          different scales. Converting helps you understand how your student
          might perform on state assessments and identify areas for focused
          preparation.
        </p>
      </Alert>

      <BlogSection
        title="How Score Conversion Works"
        description="Understanding the relationship between MAP and state tests."
      >
        <p>
          MAP tests and state assessments both measure academic achievement, but
          they use different scoring systems. RIT scores provide a consistent
          scale across grade levels, while state tests typically use performance
          levels like "Proficient" or "Advanced."
        </p>

        <p>
          The conversion process uses statistical correlations between MAP RIT
          scores and state test performance. While these predictions are helpful
          for planning, remember that actual state test results depend on many
          factors including test preparation, format differences, and your
          student's readiness on test day.
        </p>
      </BlogSection>

      <BlogSection
        title="Interactive Score Converter"
        description="Enter your student's information to get state test predictions."
      >
        <ScoreConverter />
      </BlogSection>

      <BlogSection
        title="Understanding Your Results"
        description="How to interpret the conversion predictions."
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Confidence Levels:
            </h4>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>
                <strong>High:</strong> Strong correlation between RIT score and
                predicted performance
              </li>
              <li>
                <strong>Moderate:</strong> Good correlation with some
                variability expected
              </li>
              <li>
                <strong>Low:</strong> Weaker correlation; results may vary
                significantly
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              State Test Scales:
            </h4>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>
                <strong>STAAR (Texas):</strong> Does Not Meet, Approaches,
                Meets, Masters
              </li>
              <li>
                <strong>SBAC/PARCC:</strong> Level 1 (lowest) to Level 4
                (highest)
              </li>
              <li>
                <strong>General State Tests:</strong> Below Basic, Basic,
                Proficient, Advanced
              </li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection
        title="Next Steps Based on Predictions"
        description="How to use these predictions to support your student."
      >
        <Alert type="success" title="If Predictions Look Good" icon={Target}>
          <p>
            Continue current study habits and consider light review of key
            concepts. Focus on test-taking strategies and building confidence
            for test day.
          </p>
        </Alert>

        <Alert
          type="warning"
          title="If Predictions Show Concerns"
          icon={AlertTriangle}
        >
          <p>
            Don't panic! These are estimates, not guarantees. Use this
            information to create a targeted study plan. Consider working with
            your student's teacher to identify specific skill gaps and access
            additional resources.
          </p>
        </Alert>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">📚 Helpful Resources:</h4>
          <ul className="space-y-1 text-gray-700">
            <li>
              •{" "}
              <a href="/blog/map-testing-state-assessments-complete-guide/understanding-rit-scores-guide">
                Understanding RIT Scores Guide
              </a>{" "}
              - Learn the basics
            </li>
            <li>
              •{" "}
              <a href="/blog/map-testing-state-assessments-complete-guide/state-test-prep-strategies">
                State Test Prep Strategies
              </a>{" "}
              - Effective preparation methods
            </li>
            <li>
              • <a href="/blog/math-foundations">Math Foundations Playbook</a> -
              Strengthen math skills
            </li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection
        title="Remember: Tests Don't Tell the Whole Story"
        description="Keep perspective on your student's learning journey."
      >
        <p>
          While test scores provide valuable information, they're just one piece
          of your student's academic picture. Focus on growth over time,
          celebrate progress, and use these tools to support your student's
          learning journey. Every student learns differently, and success comes
          in many forms.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}
