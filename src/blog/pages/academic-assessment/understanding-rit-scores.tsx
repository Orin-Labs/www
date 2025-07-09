import React from 'react';

import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Info,
  Target,
  TrendingUp,
} from 'lucide-react';

import {
  Alert,
  BlogChecklist,
  BlogFAQ,
  BlogLayout,
  BlogSection,
  ComparisonTable,
  NumberedList,
} from '@blog/components';
import { type FAQItem } from '@blog/components/BlogFAQ';

export function UnderstandingRITScores() {
  const faqItems: FAQItem[] = [
    {
      question: "What does RIT stand for?",
      answer:
        "RIT stands for Rasch unIT. It's a measurement scale that provides consistent, equal-interval units for measuring academic achievement. Unlike grade-level scores, RIT scores are not dependent on a student's grade or age.",
      icon: HelpCircle,
    },
    {
      question: "How often should I expect my child's RIT score to improve?",
      answer:
        "RIT scores typically increase throughout the school year and from year to year. However, the rate of growth varies by subject and grade level. Younger students tend to show larger gains, while growth increments become smaller as students progress through higher grades.",
      icon: TrendingUp,
    },
    {
      question: "Should I be concerned if my child's RIT score stays the same?",
      answer:
        "Not necessarily. RIT scores can plateau, especially in higher grades where expected growth is smaller. What matters more is the trend over time and how your child is performing relative to their personal growth targets.",
      icon: Target,
    },
    {
      question: "Can RIT scores predict future academic success?",
      answer:
        "RIT scores provide valuable insight into current academic performance and can help identify areas for support, but they're just one piece of the puzzle. Many factors contribute to academic success, including motivation, study habits, and learning environment.",
      icon: BookOpen,
    },
  ];

  const scoreRangeData = [
    {
      range: "Below 140",
      interpretation: "Beginning Skills",
      typical_grade: "K-1",
      action: "Focus on foundational skills and concepts.",
    },
    {
      range: "140-160",
      interpretation: "Developing Skills",
      typical_grade: "1-2",
      action: "Continue building core competencies.",
    },
    {
      range: "160-180",
      interpretation: "Approaching Grade Level",
      typical_grade: "2-3",
      action: "Target specific skill gaps.",
    },
    {
      range: "180-200",
      interpretation: "At Grade Level",
      typical_grade: "3-4",
      action: "Maintain progress and expand learning.",
    },
    {
      range: "200-220",
      interpretation: "Above Grade Level",
      typical_grade: "4-5",
      action: "Provide enrichment opportunities.",
    },
    {
      range: "220-240",
      interpretation: "Well Above Grade Level",
      typical_grade: "5-6",
      action: "Consider advanced coursework.",
    },
    {
      range: "240+",
      interpretation: "Advanced",
      typical_grade: "6+",
      action: "Explore gifted programs or acceleration.",
    },
  ];

  const readingSteps = [
    {
      text: "Look at the current RIT score.",
      description: "Find your child's most recent RIT score on the report.",
    },
    {
      text: "Check the growth target.",
      description:
        "Compare to the expected growth goal for the testing period.",
    },
    {
      text: "Review the percentile rank.",
      description: "See how your child compares to other students nationally.",
    },
    {
      text: "Examine the growth over time.",
      description: "Look at the trend line to see progress patterns.",
    },
    {
      text: "Identify skill areas.",
      description: "Review specific learning objectives and mastery levels.",
    },
  ];

  const actionItems = [
    {
      id: "review-report",
      text: "Schedule a parent-teacher conference to discuss the RIT score report in detail.",
    },
    {
      id: "track-progress",
      text: "Set up a system to track your child's academic progress at home.",
    },
    {
      id: "support-areas",
      text: "Identify specific subject areas where your child needs additional support.",
    },
    {
      id: "celebrate-growth",
      text: "Acknowledge and celebrate your child's academic growth and achievements.",
    },
    {
      id: "collaborate-teacher",
      text: "Work with teachers to align home support with classroom instruction.",
    },
    {
      id: "monitor-trends",
      text: "Keep track of RIT score trends over multiple testing periods.",
    },
  ];

  return (
    <BlogLayout>
      <p className="text-xl text-gray-600 mb-8">
        Deep dive into what RIT scores really mean and how to use them to
        support your student's learning journey.
      </p>

      <Alert type="info" title="Quick Overview" icon={Info}>
        <p>
          RIT scores are a reliable way to measure your child's academic growth
          over time. Unlike grade-level scores that compare students to others
          in their grade, RIT scores track individual progress on a continuous
          scale, making them perfect for understanding your child's unique
          learning journey.
        </p>
      </Alert>

      <BlogSection
        title="What Are RIT Scores?"
        description="Understanding the basics of RIT scoring and why schools use them"
      >
        <p>
          RIT (Rasch unIT) scores are a standardized measurement used by many
          schools to track student academic progress. Unlike traditional
          grade-level assessments, RIT scores provide a consistent scale that
          follows students throughout their academic career, typically ranging
          from about 120 to 300.
        </p>

        <p>
          Think of RIT scores like a ruler for academic growth. Just as a ruler
          has consistent inches regardless of what you're measuring, RIT scores
          maintain consistent intervals whether your child is in 2nd grade or
          8th grade. This makes them incredibly valuable for tracking long-term
          academic development.
        </p>

        <Alert
          type="success"
          title="Why Schools Love RIT Scores"
          icon={CheckCircle}
        >
          <ul>
            <li>They show individual growth over time.</li>
            <li>They're not limited by grade-level expectations.</li>
            <li>They help teachers personalize instruction.</li>
            <li>They provide consistent measurement across years.</li>
          </ul>
        </Alert>
      </BlogSection>

      <BlogSection
        title="Reading Your Child's RIT Score Report"
        description="A step-by-step guide to interpreting the information"
      >
        <NumberedList items={readingSteps} />

        <Alert type="warning" title="Don't Compare Kids" icon={AlertTriangle}>
          <p>
            Remember that each child's learning journey is unique. While RIT
            scores can show how your child compares to national averages, the
            most important factor is your child's individual growth over time,
            not how they stack up against their peers.
          </p>
        </Alert>
      </BlogSection>

      <BlogSection
        title="Understanding Score Ranges"
        description="What different RIT score ranges typically indicate"
      >
        <ComparisonTable
          columns={[
            { header: "Score Range", key: "range" },
            { header: "Interpretation", key: "interpretation" },
            { header: "Typical Grade", key: "typical_grade" },
            { header: "Recommended Action", key: "action" },
          ]}
          data={scoreRangeData}
        />

        <Alert type="info" title="Remember" icon={Info}>
          <p>
            These ranges are general guidelines. Your child's specific goals
            should be based on their individual starting point and growth rate,
            not just their grade level.
          </p>
        </Alert>
      </BlogSection>

      <BlogSection
        title="Understanding Score Patterns"
        description="Understanding what different score patterns mean"
      >
        <div className="flex flex-col">
          <h2 className="underline">When to Celebrate:</h2>
          <ul className="list-disc pl-4">
            <li>Your child meets their personal growth target.</li>
            <li>Consistent upward trend over multiple testing periods.</li>
            <li>Improvement in previously challenging skill areas.</li>
            <li>Score growth matches or exceeds expected range.</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="underline">Consider Support When:</h2>
          <ul className="list-disc pl-4">
            <li>Scores decline over multiple testing periods.</li>
            <li>Growth is significantly below expected range.</li>
            <li>Large gaps between different subject areas.</li>
            <li>Plateau in scores for extended periods.</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection
        title="Action Steps Based on Your Child's Scores"
        description="Concrete next steps you can take at home and school"
      >
        <BlogChecklist
          title="Your RIT Score Action Plan"
          description="Use this checklist to make the most of your child's RIT score information"
          items={actionItems}
        />
      </BlogSection>

      <BlogFAQ
        items={faqItems}
        title="Common RIT Score Questions"
        description="Get answers to the most frequently asked questions about understanding and using RIT scores"
      />

      <Alert type="success" title="Bottom Line" icon={Target}>
        <p>
          RIT scores are a powerful tool for understanding your child's academic
          journey. Focus on individual growth over time rather than comparing to
          others, and use the information to support your child's learning both
          at home and in partnership with their teachers. Remember: every child
          learns at their own pace, and RIT scores help us celebrate that unique
          journey.
        </p>
      </Alert>
    </BlogLayout>
  );
}
