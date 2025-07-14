import React from 'react';

import { Info } from 'lucide-react';
import { Metadata } from 'next';

import { Alert } from '../components/Alert';
import { BlogChecklist } from '../components/BlogChecklist';
import {
  BlogFAQ,
  type FAQItem,
} from '../components/BlogFAQ';
import { BlogLayout } from '../components/BlogLayout';
import { BlogSection } from '../components/BlogSection';
import { ComparisonTable } from '../components/ComparisonTable';
import { NumberedList } from '../components/NumberedList';

export const metadata: Metadata = {
  title: "Understanding RIT Scores: A Complete Guide for Parents",
  description:
    "Deep dive into what RIT scores really mean and how to use them to support your student's learning journey.",
  keywords: [
    "RIT scores",
    "MAP testing",
    "academic growth",
    "progress tracking",
    "student assessment",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Understanding RIT Scores: A Complete Guide for Parents",
    description:
      "Deep dive into what RIT scores really mean and how to use them to support your student's learning journey.",
    images: ["/blog/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-20T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "understanding-rit-scores",
  shortName: "RIT Scores",
  name: "Understanding RIT Scores: A Complete Guide for Parents",
  excerpt:
    "Deep dive into what RIT scores really mean and how to use them to support your student's learning journey.",
  date: new Date("2025-06-20"),
  author: "Education Team",
  readingTime: 8,
  slug: "understanding-rit-scores-guide",
  image: "/blog/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg",
  keywords: [
    "RIT scores",
    "MAP testing",
    "academic growth",
    "progress tracking",
    "student assessment",
  ],
  underConstruction: false,
};

export default function UnderstandingRITScores() {
  const faqItems: FAQItem[] = [
    {
      question: "What does RIT stand for?",
      answer:
        "RIT stands for Rasch unIT. It's a measurement scale that provides consistent, equal-interval units for measuring academic achievement. Unlike grade-level scores, RIT scores are not dependent on a student's grade or age.",
      icon: "help-circle",
    },
    {
      question: "How often should I expect my child's RIT score to improve?",
      answer:
        "RIT scores typically increase throughout the school year and from year to year. However, the rate of growth varies by subject and grade level. Younger students tend to show larger gains, while growth increments become smaller as students progress through higher grades.",
      icon: "trending-up",
    },
    {
      question: "Should I be concerned if my child's RIT score stays the same?",
      answer:
        "Not necessarily. RIT scores can plateau, especially in higher grades where expected growth is smaller. What matters more is the trend over time and how your child is performing relative to their personal growth targets.",
      icon: "target",
    },
    {
      question: "Can RIT scores predict future academic success?",
      answer:
        "RIT scores provide valuable insight into current academic performance and can help identify areas for support, but they're just one piece of the puzzle. Many factors contribute to academic success, including motivation, study habits, and learning environment.",
      icon: "book-open",
    },
  ];

  const actionItems = [
    {
      id: "review-reports",
      text: "Review your child's MAP report thoroughly",
      completed: false,
    },
    {
      id: "track-progress",
      text: "Track RIT score progress over time",
      completed: false,
    },
    {
      id: "discuss-teacher",
      text: "Discuss results with your child's teacher",
      completed: false,
    },
    {
      id: "identify-strengths",
      text: "Identify academic strengths and areas for growth",
      completed: false,
    },
    {
      id: "set-goals",
      text: "Set realistic learning goals based on RIT data",
      completed: false,
    },
  ];

  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection
        title="What Are RIT Scores?"
        description="Understanding the foundation of MAP testing"
      >
        <p className="text-gray-700 leading-relaxed">
          RIT scores are the heart of MAP (Measures of Academic Progress)
          testing. Unlike traditional percentage-based scores, RIT scores
          provide a stable, consistent measurement of your child's academic
          achievement that isn't influenced by grade level or age.
        </p>

        <Alert type="info" icon={Info} className="mt-4">
          <strong>Key Point:</strong> RIT scores measure what your child knows
          and can do, not how they compare to other students their age.
        </Alert>
      </BlogSection>

      <BlogSection
        title="How RIT Scores Work"
        description="The technical foundation made simple"
      >
        <NumberedList
          items={[
            {
              text: "Equal Intervals",
              description:
                "The difference between 200 and 210 is the same as between 220 and 230 in terms of learning growth.",
            },
            {
              text: "Grade-Independent",
              description:
                "A 6th grader and 8th grader with the same RIT score have similar knowledge levels in that subject.",
            },
            {
              text: "Continuous Scale",
              description:
                "RIT scores can track growth across multiple years and grade levels on the same scale.",
            },
          ]}
        />
      </BlogSection>

      <BlogSection
        title="Interpreting Your Child's RIT Scores"
        description="What the numbers actually mean"
      >
        <ComparisonTable
          columns={[
            { header: "Grade", key: "grade" },
            { header: "Math (Typical Range)", key: "math" },
            { header: "Reading (Typical Range)", key: "reading" },
          ]}
          data={[
            { grade: "6th Grade", math: "220-240", reading: "210-230" },
            { grade: "7th Grade", math: "230-250", reading: "215-235" },
            { grade: "8th Grade", math: "240-260", reading: "220-240" },
          ]}
        />
      </BlogSection>

      <BlogSection
        title="Action Steps for Parents"
        description="Use this checklist to make the most of your child's RIT score information"
      >
        <BlogChecklist
          title="RIT Score Action Plan"
          description="Use this checklist to make the most of your child's RIT score information"
          items={actionItems}
        />
      </BlogSection>

      <BlogFAQ
        items={faqItems}
        title="Common RIT Score Questions"
        description="Get answers to the most frequently asked questions about understanding and using RIT scores."
      />

      <BlogSection
        title="Bottom Line"
        description="A few final thoughts about RIT scores."
      >
        <p className="text-gray-700 leading-relaxed">
          RIT scores are a powerful tool for understanding your child's academic
          journey. Focus on individual growth over time rather than comparing to
          others, and use the information to support your child's learning both
          at home and in partnership with their teachers. Remember: every child
          learns at their own pace, and RIT scores help us celebrate that unique
          journey.
        </p>
      </BlogSection>
    </BlogLayout>
  );
}
