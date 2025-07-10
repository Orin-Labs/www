import React from 'react';

import {
  AlertTriangle,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

import {
  Alert,
  BlogLayout,
  BlogSection,
  ComparisonTable,
  DirectComparison,
} from '@blog/components';

export function GrowthVsProficiency() {
  const scenarioData = [
    {
      scenario: "High Achievement, Low Growth",
      achievement: "85th percentile",
      growth: "25th percentile",
      meaning: "Student knows a lot but isn't learning much new",
      action: "Provide more challenging material and enrichment opportunities",
    },
    {
      scenario: "Low Achievement, High Growth",
      achievement: "25th percentile",
      growth: "85th percentile",
      meaning: "Student is learning rapidly despite starting behind",
      action: "Continue current supports while celebrating progress",
    },
    {
      scenario: "High Achievement, High Growth",
      achievement: "85th percentile",
      growth: "85th percentile",
      meaning: "Student excels and continues advancing quickly",
      action: "Consider acceleration or advanced academic programs",
    },
    {
      scenario: "Low Achievement, Low Growth",
      achievement: "25th percentile",
      growth: "25th percentile",
      meaning: "Student needs immediate intervention and support",
      action: "Intensive intervention and foundational skill building",
    },
  ];

  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-6">
        Understand percentile vs gain: Which matters more for your student's
        academic progress and how to use both metrics effectively.
      </p>

      <Alert type="info" title="The Key Difference" icon={TrendingUp}>
        <p>
          <strong>Achievement percentiles</strong> compare your child to other
          students nationwide. <strong>Growth percentiles</strong> measure how
          much your child learned compared to other students who started at the
          same level. Both matter, but for different reasons.
        </p>
      </Alert>

      <BlogSection title="Achievement vs Growth: What Each Tells You">
        <DirectComparison
          bad={{
            title: "Achievement Percentiles",
            items: [
              "Where your child ranks compared to peers",
              "Snapshot of current knowledge",
              "Influenced by background and prior learning",
              "Can mask learning progress",
            ],
          }}
          good={{
            title: "Growth Percentiles",
            items: [
              "How much your child learned over time",
              "Shows learning velocity and progress",
              "Reflects teaching effectiveness",
              "Predicts future achievement gains",
            ],
          }}
        />
      </BlogSection>

      <BlogSection title="Four Common Scenarios">
        <p className="mb-6">
          Here's how to interpret different combinations of achievement and
          growth percentiles:
        </p>

        <ComparisonTable
          columns={[
            { header: "Scenario", key: "scenario", className: "font-semibold" },
            {
              header: "Achievement",
              key: "achievement",
              className: "text-center",
            },
            { header: "Growth", key: "growth", className: "text-center" },
            { header: "What It Means", key: "meaning", className: "text-left" },
            { header: "Action Steps", key: "action", className: "text-left" },
          ]}
          data={scenarioData}
        />
      </BlogSection>

      <BlogSection title="When to Focus on Which Metric">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              Focus on Growth When
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Your child is behind grade level but making steady progress
              </li>
              <li>You're evaluating teaching effectiveness or interventions</li>
              <li>
                Your child started the year significantly below expectations
              </li>
              <li>You want to build confidence and motivation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              Focus on Achievement When
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Making decisions about advanced coursework or programs</li>
              <li>Considering grade-level placement or acceleration</li>
              <li>Preparing for state testing or high school placement</li>
              <li>Evaluating readiness for increased academic challenges</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <Alert type="success" title="The Sweet Spot" icon={CheckCircle}>
        <p>
          <strong>Both metrics matter.</strong> High achievement with low growth
          suggests your child needs more challenge. Low achievement with high
          growth indicates effective support that should continue. Use
          achievement to understand where your child stands and growth to
          evaluate whether they're moving forward at an appropriate pace.
        </p>
      </Alert>

      <Alert type="warning" title="Important Context" icon={AlertTriangle}>
        <p>
          Growth percentiles can fluctuate more than achievement percentiles. A
          single low growth score isn't cause for alarm—look for patterns over
          multiple testing periods. For deeper score interpretation, see our{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/map-score-ranges-explained">
            MAP score ranges guide
          </a>
          .
        </p>
      </Alert>
    </BlogLayout>
  );
}
