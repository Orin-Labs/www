import React from 'react';

import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Coffee,
} from 'lucide-react';

import {
  Alert,
  BlogChecklist,
  BlogLayout,
  BlogSection,
  DirectComparison,
} from '@blog/components';

export function TestDayNutritionSleepChecklist() {
  const sleepChecklist = [
    {
      id: "consistent-schedule",
      text: "Maintain consistent bedtime for one week before testing",
    },
    {
      id: "screen-time",
      text: "No screens 1 hour before bedtime starting 3 days before test",
    },
    {
      id: "comfortable-environment",
      text: "Keep bedroom cool (65-68°F) and dark during test week",
    },
    {
      id: "early-bedtime",
      text: "Move bedtime 15 minutes earlier starting 4 days before test",
    },
    {
      id: "morning-routine",
      text: "Practice your test morning routine 2-3 days in advance",
    },
  ];

  const nutritionChecklist = [
    {
      id: "balanced-breakfast",
      text: "Eat a balanced breakfast with protein, complex carbs, and healthy fats",
    },
    {
      id: "hydration",
      text: "Drink water consistently but avoid excessive fluids 2 hours before test",
    },
    {
      id: "avoid-sugar",
      text: "Skip sugary cereals, pastries, and energy drinks on test day",
    },
    {
      id: "pack-snacks",
      text: "Pack approved snacks: nuts, fruit, or granola bars for breaks",
    },
    {
      id: "familiar-foods",
      text: "Stick to familiar foods - don't try anything new on test day",
    },
  ];

  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-6">
        Evidence-based nutrition and sleep strategies to optimize your student's
        test performance with downloadable checklists.
      </p>

      <Alert type="info" title="The Science Behind It" icon={Coffee}>
        <p>
          Quality sleep and proper nutrition directly impact cognitive function,
          memory consolidation, and stress management. Small changes in the week
          leading up to testing can significantly improve your child's
          performance and confidence.
        </p>
      </Alert>

      <BlogSection title="Sleep Strategy: The Week Before">
        <p className="mb-4">
          Sleep is your child's secret weapon for test success. The brain
          consolidates learning during sleep, making it essential for optimal
          performance.
        </p>

        <BlogChecklist
          title="Sleep Preparation Checklist"
          description="Follow this timeline to ensure your child is well-rested for test day"
          items={sleepChecklist}
        />

        <Alert type="success" title="Target Sleep Times" icon={Clock}>
          <div className="space-y-2">
            <p>
              <strong>6th-7th graders:</strong> 9-11 hours per night
            </p>
            <p>
              <strong>8th graders:</strong> 9-10 hours per night
            </p>
            <p>
              <strong>Test day wake-up:</strong> Same time as school days, not
              earlier
            </p>
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Nutrition Strategy: Fuel for Focus">
        <p className="mb-4">
          Your child's brain uses 20% of their daily calories. Strategic eating
          can enhance concentration and reduce test anxiety.
        </p>

        <BlogChecklist
          title="Nutrition Checklist"
          description="Optimize your child's cognitive performance with these nutrition strategies"
          items={nutritionChecklist}
        />

        <DirectComparison
          bad={{
            title: "Avoid These Foods",
            items: [
              "Sugary cereals or pastries",
              "Energy drinks or excessive caffeine",
              "Heavy, greasy foods",
              "Foods your child doesn't normally eat",
            ],
          }}
          good={{
            title: "Choose These Instead",
            items: [
              "Oatmeal with berries and nuts",
              "Whole grain toast with peanut butter",
              "Greek yogurt with fruit",
              "Scrambled eggs with whole grain toast",
            ],
          }}
        />
      </BlogSection>

      <BlogSection title="Test Day Timeline">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              Night Before (by 8 PM)
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Light dinner finished 3 hours before bed</li>
              <li>Prepare test materials and clothes</li>
              <li>Start wind-down routine early</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              Morning Of (2 hours before test)
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Wake up at regular time (not earlier)</li>
              <li>Eat breakfast 90 minutes before test</li>
              <li>Hydrate with water, not sports drinks</li>
              <li>Include 10 minutes of light movement</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold underline text-lg mb-2">
              During Test
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sip water during breaks if allowed</li>
              <li>Eat approved snacks during longer breaks</li>
              <li>Take deep breaths between sections</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <Alert type="warning" title="What to Avoid" icon={AlertTriangle}>
        <p>
          Don't make dramatic changes to sleep or eating habits right before
          testing. Consistency is more important than perfection. If your child
          has trouble sleeping, focus on relaxation techniques rather than sleep
          aids.
        </p>
      </Alert>

      <Alert type="success" title="The Bottom Line" icon={CheckCircle}>
        <p>
          Good preparation reduces test anxiety naturally. When your child feels
          physically ready, they can focus on demonstrating what they know
          rather than fighting fatigue or hunger. These strategies work best
          when combined with{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/state-test-prep-strategies">
            academic preparation
          </a>{" "}
          and{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/discussing-test-results-without-stress">
            emotional support
          </a>
          .
        </p>
      </Alert>
    </BlogLayout>
  );
}
