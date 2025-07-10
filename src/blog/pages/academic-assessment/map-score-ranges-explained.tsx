import React from 'react';

import {
  AlertTriangle,
  CheckCircle,
  Target,
} from 'lucide-react';

import {
  Alert,
  BlogLayout,
  BlogSection,
  ComparisonTable,
} from '@blog/components';

export function MAPScoreRangesExplained() {
  const scoreRangeData = [
    {
      range: "200-210",
      grade_level: "6th Grade Beginning",
      status: "Building Foundation",
      action:
        "Focus on core skills. Consider <a href='/blog/middle-school-math-foundations-guide'>foundational math support</a>.",
    },
    {
      range: "210-220",
      grade_level: "6th-7th Grade",
      status: "On Track",
      action: "Continue current pace. Monitor progress trends.",
    },
    {
      range: "220-230",
      grade_level: "7th-8th Grade",
      status: "Grade Appropriate",
      action: "Maintain momentum. Explore enrichment opportunities.",
    },
    {
      range: "230-240",
      grade_level: "8th-9th Grade",
      status: "Above Grade Level",
      action:
        "Consider <a href='/blog/stem-electives-high-school-credit-middle-school'>advanced coursework</a> options.",
    },
    {
      range: "240-250",
      grade_level: "High School Level",
      status: "Significantly Advanced",
      action: "Explore acceleration and gifted program opportunities.",
    },
  ];

  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-6">
        Decode the numbers: Your complete guide to MAP score ranges (RIT
        200–250) and what they mean for your middle schooler's academic growth.
      </p>

      <Alert type="info" title="Quick Context" icon={Target}>
        <p>
          RIT scores in the 200-250 range are typical for middle schoolers.
          Unlike percentiles that compare students to peers, these absolute
          scores show exactly what your child knows and can do. For foundational
          understanding, see our{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/understanding-rit-scores-guide">
            complete RIT scores guide
          </a>
          .
        </p>
      </Alert>

      <BlogSection title="Middle School RIT Score Ranges">
        <p className="mb-6">
          The 200-250 range represents the core middle school learning span.
          Here's how to interpret where your student stands:
        </p>

        <ComparisonTable
          columns={[
            { header: "RIT Range", key: "range", className: "font-semibold" },
            {
              header: "Grade Level",
              key: "grade_level",
              className: "text-center",
            },
            { header: "Status", key: "status", className: "text-center" },
            { header: "Action Steps", key: "action", className: "text-left" },
          ]}
          data={scoreRangeData}
        />
      </BlogSection>

      <BlogSection title="What These Ranges Really Mean">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              Focus on Growth, Not Position
            </h3>
            <p>
              A student scoring 210 who gains 8 points is showing excellent
              progress. Don't fixate on the absolute number—track the
              trajectory.
            </p>
          </div>

          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              Subject Variations Are Normal
            </h3>
            <p>
              Most students score differently across subjects. A 220 in reading
              and 235 in math is completely typical.
            </p>
          </div>

          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              Timing Matters
            </h3>
            <p>
              Fall scores are typically lower than spring scores. Expect 3-8
              point gains per testing period as normal growth.
            </p>
          </div>
        </div>
      </BlogSection>

      <Alert type="success" title="Your Next Steps" icon={CheckCircle}>
        <div className="space-y-2">
          <p>
            <strong>If your student is 200-220:</strong> Focus on building
            confidence and core skills. Consistent practice matters more than
            acceleration.
          </p>
          <p>
            <strong>If your student is 220-235:</strong> They're hitting
            grade-level expectations. Consider enrichment activities in areas of
            strength.
          </p>
          <p>
            <strong>If your student is 235+:</strong> Time to explore advanced
            opportunities. They may be ready for high school coursework.
          </p>
        </div>
      </Alert>

      <Alert type="warning" title="Important Reminder" icon={AlertTriangle}>
        <p>
          These ranges are guidelines, not judgments. Every child's learning
          journey is unique. Use this information alongside{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/growth-vs-proficiency">
            growth data
          </a>{" "}
          and teacher observations for the complete picture.
        </p>
      </Alert>
    </BlogLayout>
  );
}
