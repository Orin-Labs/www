import React from 'react';

import {
  BookOpen,
  Clock,
  Lightbulb,
  Target,
  Users,
} from 'lucide-react';

import {
  Alert,
  BlogChecklist,
  BlogFAQ,
  BlogLayout,
  BlogSection,
  type FAQItem,
  WeeklyPlanner,
  type WeeklyPlannerItem,
} from '@blog/components';

const prepChecklist = [
  {
    id: "familiar-format",
    text: "Review practice tests to help your student understand the format and timing",
    checked: false,
  },
  {
    id: "comfort-strategies",
    text: "Practice deep breathing and positive self-talk techniques with your student",
    checked: false,
  },
  {
    id: "sleep-routine",
    text: "Establish consistent sleep schedule 2 weeks before the test",
    checked: false,
  },
  {
    id: "nutrition-plan",
    text: "Plan brain-boosting breakfast and pack familiar snacks",
    checked: false,
  },
  {
    id: "review-schedule",
    text: "Create short, focused review sessions rather than cramming",
    checked: false,
  },
  {
    id: "growth-mindset",
    text: "Focus conversations on effort and improvement, not just scores",
    checked: false,
  },
];

const weeklyPlan: WeeklyPlannerItem[] = [
  {
    day: "Monday",
    time: "20 min",
    task: "Review one subject area using practice questions. Focus on understanding mistakes, not just getting answers right.",
  },
  {
    day: "Tuesday",
    time: "15 min",
    task: "Practice test-taking strategies like eliminating wrong answers and managing time per question.",
  },
  {
    day: "Wednesday",
    time: "20 min",
    task: "Work on a different subject area. Use MAP scores to identify which topics need the most attention. For students struggling with math foundations, our <a href='/blog/math-foundations'>math playbook</a> provides targeted skill-building strategies.",
  },
  {
    day: "Thursday",
    time: "15 min",
    task: "Practice relaxation techniques and positive self-talk. Make it fun with breathing exercises or mindfulness apps.",
  },
  {
    day: "Friday",
    time: "25 min",
    task: "Take a short practice test section under timed conditions. Celebrate effort and progress made.",
  },
  {
    day: "Saturday",
    time: "30 min",
    task: "Review the week's practice with your student. Discuss what strategies worked best.",
  },
  {
    day: "Sunday",
    time: "Rest day",
    task: "No test prep! Engage in fun activities that reduce stress and build confidence.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How far in advance should we start preparing?",
    answer:
      "Start 6-8 weeks before the test date. This allows time for steady progress without overwhelming your student. Last-minute cramming increases anxiety and isn't effective for long-term retention.",
    icon: Clock,
  },
  {
    question: "Can MAP scores really predict state test performance?",
    answer:
      "Yes! MAP scores are highly correlated with state test results. Use your student's MAP RIT scores to identify specific skill gaps and focus preparation time on those areas for maximum impact. For detailed guidance on interpreting these scores, see our <a href='/blog/academic-assessment/understanding-rit-scores'>complete guide to understanding RIT scores</a>.",
    icon: Target,
  },
  {
    question: "What if my student gets anxious about tests?",
    answer:
      "Test anxiety is common and manageable. Practice relaxation techniques, maintain perspective that one test doesn't define them, and focus on preparation strategies that build confidence rather than create pressure.",
    icon: Users,
  },
  {
    question: "Should I hire a tutor or use online prep programs?",
    answer:
      "It depends on your student's needs and learning style. Free resources like Khan Academy can be very effective. Consider paid options if your student needs personalized attention or has significant skill gaps.",
    icon: BookOpen,
  },
];

export function StateTestPrepStrategies() {
  return (
    <BlogLayout>
      <p className="text-md text-gray-600">
        Help your middle schooler approach state testing with confidence using
        these evidence-based strategies that reduce stress and improve
        performance.
      </p>

      <BlogSection title="The Smart Approach to Test Prep">
        <p>
          State tests don't have to be stressful. When students feel prepared
          and confident, they perform better and experience less anxiety. The
          key is creating a structured approach that builds skills gradually
          while maintaining your student's love of learning.
        </p>

        <p>
          Modern assessment tools like{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide">
            MAP testing
          </a>{" "}
          provide valuable insights into exactly where your student needs
          support. Rather than generic test prep, you can target specific areas
          and track progress effectively. Understanding{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/understanding-rit-scores-guide">
            what RIT scores really mean
          </a>{" "}
          helps you focus preparation time on the areas that matter most.
        </p>
      </BlogSection>

      <Alert type="info" icon={Lightbulb}>
        Focus on building test-taking confidence, not just academic content.
        Students who feel calm and prepared often outperform those who know more
        but feel anxious.
      </Alert>

      <WeeklyPlanner title="Weekly Test Prep Schedule" items={weeklyPlan} />

      <BlogSection title="Essential Preparation Checklist">
        <BlogChecklist
          title="State Test Prep Essentials"
          description="Work through these items with your student to build confidence and reduce test-day stress."
          items={prepChecklist}
        />
      </BlogSection>

      <BlogSection title="Using Technology Wisely">
        <p>
          Today's students have access to powerful digital tools that can make
          test prep more engaging and effective. Khan Academy's free SAT prep
          has been shown to increase scores, and similar platforms exist for
          state tests.
        </p>

        <p>
          The key is choosing tools that adapt to your student's learning style
          and provide immediate feedback. Technology should supplement, not
          replace, conversations about learning and growth mindset. For students
          who consistently excel on practice tests, consider exploring{" "}
          <a href="/blog/advanced-academics">advanced academic opportunities</a>{" "}
          that can provide appropriate challenge beyond grade-level
          expectations.
        </p>
      </BlogSection>

      <BlogFAQ title="Common Questions from Parents" items={faqItems} />

      <BlogSection title="The Bottom Line">
        <p>
          Effective test preparation is about building your student's confidence
          and skills gradually. By starting early, focusing on specific areas of
          need, and maintaining a positive approach, you can help your middle
          schooler approach state testing as just another opportunity to show
          what they've learned.
        </p>

        <p>
          Remember: one test score doesn't define your student's potential. The
          preparation process itself teaches valuable skills like time
          management, perseverance, and self-advocacy that will serve them well
          beyond middle school.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}
