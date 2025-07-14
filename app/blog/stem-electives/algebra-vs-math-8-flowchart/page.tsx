import React from 'react';

import {
  AlertTriangle,
  Calculator,
  CheckCircle,
  GitBranch,
  Target,
} from 'lucide-react';
import { Metadata } from 'next';

import { Alert } from '@/blog/components/Alert';
import { BlogChecklist } from '@/blog/components/BlogChecklist';
import {
  BlogFAQ,
  type FAQItem,
} from '@/blog/components/BlogFAQ';
import { BlogLayout } from '@/blog/components/BlogLayout';
import { BlogSection } from '@/blog/components/BlogSection';
import { ComparisonTable } from '@/blog/components/ComparisonTable';

export const metadata: Metadata = {
  title: "Algebra vs Math 8: Decision Flowchart | Course Selection Guide",
  description:
    "Interactive flowchart to help parents decide between Algebra 1 and Math 8 for their middle schooler's optimal math pathway.",
  keywords: [
    "algebra vs math 8",
    "math pathway",
    "algebra readiness",
    "math acceleration",
    "middle school math",
    "academic planning",
    "course selection",
    "math progression",
    "algebra placement",
    "math curriculum",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Algebra vs Math 8: Decision Flowchart | Course Selection Guide",
    description:
      "Interactive flowchart to help parents decide between Algebra 1 and Math 8 for their middle schooler's optimal math pathway.",
    images: ["/blog/yassine-ait-tahit-NDtucHeDnWc-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-06T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "algebra-vs-math-8-flowchart",
  shortName: "Algebra vs Math 8",
  name: "Algebra vs Math 8: Decision Flowchart",
  excerpt:
    "Interactive flowchart to help parents decide between Algebra 1 and Math 8 for their middle schooler's optimal math pathway.",
  date: new Date("2025-06-06"),
  author: "Education Team",
  readingTime: 6,
  slug: "algebra-vs-math-8-flowchart",
  image: "/blog/yassine-ait-tahit-NDtucHeDnWc-unsplash.jpg",
  keywords: [
    "algebra vs math 8",
    "math pathway",
    "algebra readiness",
    "math acceleration",
    "middle school math",
    "academic planning",
    "course selection",
    "math progression",
    "algebra placement",
    "math curriculum",
  ],
};

const comparisonData = [
  {
    category: "Course Content",
    math8:
      "Pre-algebra concepts, advanced arithmetic, introduction to variables",
    algebra1: "Linear equations, graphing, systems of equations, polynomials",
  },
  {
    category: "Pace",
    math8: "Moderate pace, time to solidify fundamentals",
    algebra1: "Faster pace, assumes strong foundation",
  },
  {
    category: "Prerequisites",
    math8: "Solid Math 7 performance, basic fraction skills",
    algebra1: "Strong pre-algebra skills, comfortable with variables",
  },
  {
    category: "High School Impact",
    math8: "Standard math progression, Algebra 1 in 9th grade",
    algebra1: "Advanced track, opens calculus pathway",
  },
  {
    category: "Difficulty Level",
    math8: "Moderate challenge, builds confidence",
    algebra1: "High challenge, requires mathematical maturity",
  },
  {
    category: "Time Commitment",
    math8: "Standard homework load",
    algebra1: "Increased homework and study time",
  },
];

const readinessChecklist = [
  {
    id: "fraction-mastery",
    text: "Comfortable with all fraction operations",
    completed: false,
  },
  {
    id: "negative-numbers",
    text: "Confident with positive and negative integer operations",
    completed: false,
  },
  {
    id: "order-operations",
    text: "Consistently applies order of operations (PEMDAS)",
    completed: false,
  },
  {
    id: "variable-comfort",
    text: "Understands variables and can solve simple equations",
    completed: false,
  },
  {
    id: "graphing-basics",
    text: "Can plot points on coordinate plane",
    completed: false,
  },
  {
    id: "word-problems",
    text: "Translates word problems into mathematical expressions",
    completed: false,
  },
  {
    id: "abstract-thinking",
    text: "Shows ability to think abstractly",
    completed: false,
  },
  {
    id: "work-independence",
    text: "Can work independently on challenging problems",
    completed: false,
  },
  {
    id: "study-habits",
    text: "Has strong study habits and time management",
    completed: false,
  },
  {
    id: "math-confidence",
    text: "Approaches math with confidence and curiosity",
    completed: false,
  },
];

const pathwayComparison = [
  {
    track: "Standard Track (Math 8)",
    timeline: [
      "8th Grade: Math 8 (Pre-Algebra)",
      "9th Grade: Algebra 1",
      "10th Grade: Geometry",
      "11th Grade: Algebra 2",
      "12th Grade: Pre-Calculus or Statistics",
    ],
    pros: [
      "Solid foundation building",
      "Age-appropriate pacing",
      "Reduces pressure and stress",
      "Builds confidence gradually",
      "Allows for mastery of concepts",
    ],
    cons: [
      "May not reach calculus",
      "Fewer advanced options",
      "Some gifted students may be bored",
      "Less competitive for STEM majors",
    ],
    bestFor:
      "Students who need foundation strengthening or prefer thorough concept mastery",
  },
  {
    track: "Accelerated Track (Algebra 1)",
    timeline: [
      "8th Grade: Algebra 1",
      "9th Grade: Geometry",
      "10th Grade: Algebra 2",
      "11th Grade: Pre-Calculus",
      "12th Grade: Calculus (AP or regular)",
    ],
    pros: [
      "Opens calculus pathway",
      "More advanced course options",
      "Competitive for STEM programs",
      "Intellectual challenge",
      "College readiness",
    ],
    cons: [
      "Higher pressure and stress",
      "Risk of gaps in foundation",
      "More time-intensive",
      "May struggle if not ready",
      "Harder to recover from poor performance",
    ],
    bestFor:
      "Students with strong math foundation who show readiness for abstract thinking",
  },
];

const decisionTreeData = {
  question: "How did your child perform in Math 7?",
  options: [
    {
      answer: "A's consistently, finds math easy",
      result: {
        question: "Can they handle fraction operations confidently?",
        options: [
          {
            answer: "Yes, very comfortable",
            result: {
              question: "Do they enjoy challenging problems?",
              options: [
                {
                  answer: "Yes, seeks challenge",
                  result: "Consider Algebra 1 - Take readiness assessment",
                },
                {
                  answer: "Prefers steady pace",
                  result: "Math 8 might be better for confidence building",
                },
              ],
            },
          },
          {
            answer: "Some difficulty with fractions",
            result: "Math 8 recommended to strengthen foundation",
          },
        ],
      },
    },
    {
      answer: "B's with some effort",
      result: {
        question: "Are they comfortable with abstract thinking?",
        options: [
          {
            answer: "Yes, grasps concepts well",
            result: "Math 8 with option to reassess mid-year",
          },
          {
            answer: "Prefers concrete examples",
            result: "Math 8 recommended for solid foundation",
          },
        ],
      },
    },
    {
      answer: "C's or below, finds math challenging",
      result: "Math 8 strongly recommended to build confidence and skills",
    },
  ],
};

const warningSignsAlgebra = [
  {
    sign: "Struggles with homework completion",
    description: "Difficulty keeping up with assignments",
    action: "Consider Math 8 for better foundation",
  },
  {
    sign: "Frequent mistakes with fractions",
    description: "Basic skills not yet automatic",
    action: "Focus on prerequisite skills first",
  },
  {
    sign: "Avoids word problems",
    description: "Difficulty translating problems",
    action: "Strengthen problem-solving skills",
  },
  {
    sign: "Test anxiety with math",
    description: "Stress interferes with performance",
    action: "Build confidence before acceleration",
  },
];

const supportStrategies = [
  {
    scenario: "Chose Algebra 1 but struggling",
    strategies: [
      "Arrange tutoring immediately",
      "Communicate with teacher weekly",
      "Review prerequisite skills",
      "Consider dropping to Math 8",
      "Reduce other commitments",
    ],
  },
  {
    scenario: "Chose Math 8 but bored",
    strategies: [
      "Request enrichment activities",
      "Explore independent study",
      "Consider mid-year assessment",
      "Join math competitions",
      "Supplement with online resources",
    ],
  },
  {
    scenario: "Unsure which to choose",
    strategies: [
      "Take algebra readiness test",
      "Discuss with current teacher",
      "Consider summer prep course",
      "Start with Math 8, reassess",
      "Get second opinion",
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Can my child switch between courses after starting?",
    answer:
      "Most schools allow course changes within the first few weeks of school. However, switching from Algebra 1 to Math 8 is usually easier than the reverse. Discuss options with your counselor early.",
    icon: "help-circle",
  },
  {
    question: "Will taking Math 8 hurt my child's college prospects?",
    answer:
      "Not necessarily. Many successful students take the standard math track. What matters more is performing well in the courses taken and showing growth over time.",
    icon: "help-circle",
  },
  {
    question:
      "What if my child wants to take Algebra 1 but I'm not sure they're ready?",
    answer:
      "Consider a compromise: summer algebra prep course, or starting with Math 8 with plans to reassess. The goal is success, not just acceleration.",
    icon: "help-circle",
  },
  {
    question: "How important is it to reach calculus in high school?",
    answer:
      "Calculus is valuable for STEM careers but not essential for all students. Focus on building strong mathematical reasoning skills rather than rushing to calculus.",
    icon: "help-circle",
  },
  {
    question: "What if the school recommends one path but I prefer another?",
    answer:
      "Teachers have valuable insights, but you know your child best. Request a meeting to discuss concerns and potentially seek a trial period or assessment.",
    icon: "help-circle",
  },
  {
    question: "Are there alternatives to the traditional sequence?",
    answer:
      "Some schools offer compressed courses, summer intensives, or online options. Explore creative solutions that might work for your child's unique situation.",
    icon: "help-circle",
  },
];

export default function AlgebraVsMath8Flowchart() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Choosing the Right Math Path">
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Algebra 1 vs Math 8: Making the Right Choice
            </h2>
            <p className="text-gray-600">
              Interactive guide to help you choose the best math pathway for
              your 8th grader
            </p>
          </div>
        </div>

        <Alert type="info" icon={Target}>
          <div>
            <strong>The Decision Matters:</strong> This choice impacts your
            child's entire high school math sequence and college readiness. Take
            time to carefully consider your child's abilities, interests, and
            goals.
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Interactive Decision Guide">
        <p className="text-gray-700 mb-6">
          Answer these questions to get a personalized recommendation for your
          child's math pathway.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Math Path Decision Guide
          </h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                If your child earned A's consistently in Math 7:
              </h4>
              <p className="text-gray-700 text-sm mb-2">
                And they're comfortable with fractions and enjoy challenging
                problems → Consider Algebra 1
              </p>
              <p className="text-gray-700 text-sm">
                But if they prefer a steady pace → Math 8 might be better
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                If your child earned B's with effort:
              </h4>
              <p className="text-gray-700 text-sm mb-2">
                If they grasp abstract concepts well → Math 8 with mid-year
                reassessment
              </p>
              <p className="text-gray-700 text-sm">
                If they prefer concrete examples → Math 8 recommended
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                If your child earned C's or below:
              </h4>
              <p className="text-gray-700 text-sm">
                Math 8 is strongly recommended to build confidence and
                strengthen skills
              </p>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Course Comparison">
        <ComparisonTable
          columns={[
            { header: "Aspect", key: "category" },
            { header: "Math 8", key: "math8" },
            { header: "Algebra 1", key: "algebra1" },
          ]}
          data={comparisonData}
        />
      </BlogSection>

      <BlogSection title="Algebra Readiness Assessment">
        <p className="text-gray-700 mb-6">
          Use this checklist to evaluate if your child is ready for Algebra 1.
          Students should confidently demonstrate 8-10 of these skills.
        </p>

        <BlogChecklist
          title="Algebra Readiness Checklist"
          description="Check all skills your child has mastered"
          items={readinessChecklist}
        />
      </BlogSection>

      <BlogSection title="Long-Term Pathway Comparison">
        <div className="space-y-8">
          {pathwayComparison.map((track, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {track.track}
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  4-Year Timeline:
                </h4>
                <div className="space-y-2">
                  {track.timeline.map((year, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {i + 8}
                      </div>
                      <span className="text-gray-700">{year}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">
                    Advantages:
                  </h4>
                  <ul className="space-y-1">
                    {track.pros.map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-green-700 text-sm"
                      >
                        <CheckCircle className="w-3 h-3 mt-0.5 text-green-600" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-900 mb-2">
                    Considerations:
                  </h4>
                  <ul className="space-y-1">
                    {track.cons.map((con, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-red-700 text-sm"
                      >
                        <AlertTriangle className="w-3 h-3 mt-0.5 text-red-600" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Best for:</strong> {track.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Warning Signs Against Early Algebra">
        <Alert type="warning" icon={AlertTriangle}>
          <div>
            <strong>
              Proceed with caution if your child shows these signs:
            </strong>
          </div>
        </Alert>

        <div className="space-y-4 mt-6">
          {warningSignsAlgebra.map((warning, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
            >
              <h3 className="font-semibold text-yellow-900 mb-1">
                {warning.sign}
              </h3>
              <p className="text-yellow-800 text-sm mb-2">
                {warning.description}
              </p>
              <p className="text-yellow-700 text-sm">
                <strong>Recommendation:</strong> {warning.action}
              </p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Supporting Your Child's Success">
        <p className="text-gray-700 mb-6">
          Regardless of which path you choose, here are strategies to support
          your child's mathematical journey.
        </p>

        <div className="space-y-6">
          {supportStrategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-purple-50 border border-purple-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                {strategy.scenario}
              </h3>
              <ul className="space-y-2">
                {strategy.strategies.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-purple-700"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Making Your Decision">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 text-center">
          <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Trust the Process
          </h3>
          <p className="text-gray-700 mb-6">
            The "right" choice is the one that sets your child up for success
            and maintains their love of learning. Consider their readiness,
            confidence, and long-term goals.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> There's no single "best" path. Success
              comes from choosing the path that matches your child's current
              abilities and provides appropriate challenge.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
