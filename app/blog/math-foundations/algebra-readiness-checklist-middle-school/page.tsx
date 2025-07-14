import React from 'react';

import {
  AlertTriangle,
  Calculator,
  CheckCircle,
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

export const metadata: Metadata = {
  title: "Algebra Readiness Checklist for Middle School Students",
  description:
    "A comprehensive assessment tool to determine if your middle schooler has the foundational skills for algebra success.",
  keywords: [
    "algebra readiness",
    "pre-algebra",
    "math preparation",
    "algebra success",
    "mathematical readiness",
    "algebra foundations",
    "math assessment",
    "algebra skills",
    "mathematical prerequisites",
    "algebra transition",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Algebra Readiness Checklist for Middle School Students",
    description:
      "A comprehensive assessment tool to determine if your middle schooler has the foundational skills for algebra success.",
    images: ["/blog/jj-ying-7JX0-bfiuxQ-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-07-10T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "algebra-readiness-checklist",
  shortName: "Algebra Ready?",
  name: "Algebra Readiness Checklist for Middle School Students",
  excerpt:
    "A comprehensive assessment tool to determine if your middle schooler has the foundational skills for algebra success.",
  date: new Date("2025-07-10"),
  author: "Education Team",
  readingTime: 12,
  slug: "algebra-readiness-checklist-middle-school",
  image: "/blog/jj-ying-7JX0-bfiuxQ-unsplash.jpg",
  keywords: [
    "algebra readiness",
    "pre-algebra",
    "math preparation",
    "algebra success",
    "mathematical readiness",
    "algebra foundations",
    "math assessment",
    "algebra skills",
    "mathematical prerequisites",
    "algebra transition",
  ],
};

const readinessChecklist = [
  {
    id: "integers",
    text: "Can work with positive and negative integers",
    completed: false,
  },
  {
    id: "fractions",
    text: "Comfortable with fraction operations (add, subtract, multiply, divide)",
    completed: false,
  },
  {
    id: "decimals",
    text: "Can convert between fractions, decimals, and percentages",
    completed: false,
  },
  {
    id: "order-operations",
    text: "Understands and applies order of operations (PEMDAS)",
    completed: false,
  },
  {
    id: "exponents",
    text: "Knows basic exponent rules and can calculate powers",
    completed: false,
  },
  {
    id: "variables",
    text: "Comfortable with the concept of variables and unknowns",
    completed: false,
  },
  {
    id: "linear-equations",
    text: "Can solve simple one-step equations",
    completed: false,
  },
  {
    id: "graphing",
    text: "Can plot points on a coordinate plane",
    completed: false,
  },
  {
    id: "proportions",
    text: "Understands ratios and proportions",
    completed: false,
  },
  {
    id: "word-problems",
    text: "Can translate word problems into mathematical expressions",
    completed: false,
  },
  {
    id: "distributive",
    text: "Knows the distributive property",
    completed: false,
  },
  {
    id: "combining-terms",
    text: "Can combine like terms in expressions",
    completed: false,
  },
];

const skillAreas = [
  {
    title: "Number Sense & Operations",
    description: "Foundation skills with numbers and basic operations",
    skills: [
      "Integer operations (addition, subtraction, multiplication, division)",
      "Fraction operations and simplification",
      "Decimal operations and rounding",
      "Percentage calculations",
      "Absolute value understanding",
      "Number line fluency",
    ],
    importance:
      "These skills form the computational foundation for all algebraic work.",
  },
  {
    title: "Algebraic Thinking",
    description: "Beginning concepts of algebra and variable manipulation",
    skills: [
      "Understanding variables as unknown quantities",
      "Evaluating expressions with variables",
      "Writing expressions from word problems",
      "Recognizing patterns in sequences",
      "Basic equation solving",
      "Substitution of values",
    ],
    importance: "This bridges arithmetic thinking to algebraic reasoning.",
  },
  {
    title: "Geometric Foundations",
    description: "Essential geometry concepts used in algebra",
    skills: [
      "Coordinate plane navigation",
      "Plotting points and reading coordinates",
      "Basic area and perimeter formulas",
      "Understanding of geometric relationships",
      "Measurement conversions",
      "Spatial reasoning",
    ],
    importance: "Geometry provides visual context for algebraic concepts.",
  },
  {
    title: "Problem-Solving Skills",
    description: "Critical thinking and mathematical reasoning",
    skills: [
      "Reading and interpreting word problems",
      "Identifying relevant information",
      "Choosing appropriate strategies",
      "Checking answers for reasonableness",
      "Explaining mathematical reasoning",
      "Persistence through multi-step problems",
    ],
    importance:
      "These skills enable students to apply algebra to real-world situations.",
  },
];

const strengthenStrategies = [
  {
    area: "Number Operations",
    strategies: [
      "Daily fact practice with integers",
      "Fraction games and manipulatives",
      "Real-world percentage problems",
      "Calculator vs. mental math exercises",
    ],
  },
  {
    area: "Variable Concepts",
    strategies: [
      "Use physical objects to represent variables",
      "Practice with balance scales for equations",
      "Pattern recognition activities",
      "Substitution practice with simple formulas",
    ],
  },
  {
    area: "Graphing Skills",
    strategies: [
      "Regular coordinate plane practice",
      "Graph paper activities",
      "Online graphing tools exploration",
      "Connect graphs to real-world data",
    ],
  },
  {
    area: "Problem Solving",
    strategies: [
      "Multi-step word problem practice",
      "Encourage explaining reasoning aloud",
      "Break complex problems into smaller steps",
      "Use drawings and diagrams",
    ],
  },
];

const timelineGuidance = [
  {
    timing: "6th Grade",
    focus: "Building Foundations",
    activities: [
      "Master fraction operations",
      "Introduce basic variable concepts",
      "Practice coordinate plane skills",
      "Begin simple equation solving",
    ],
  },
  {
    timing: "7th Grade",
    focus: "Pre-Algebra Preparation",
    activities: [
      "Strengthen integer operations",
      "Expand variable manipulation",
      "Practice proportional reasoning",
      "Introduce algebraic expressions",
    ],
  },
  {
    timing: "8th Grade",
    focus: "Algebra Readiness",
    activities: [
      "Complete readiness assessment",
      "Address any identified gaps",
      "Practice advanced problem-solving",
      "Prepare for formal algebra",
    ],
  },
];

const warningSignsData = [
  {
    skill: "Fraction Operations",
    warning:
      "Struggles with adding/subtracting fractions with different denominators",
    action: "Review fraction concepts with visual aids and practice",
  },
  {
    skill: "Negative Numbers",
    warning: "Confused about rules for negative number operations",
    action: "Use number line activities and real-world contexts",
  },
  {
    skill: "Order of Operations",
    warning: "Doesn't consistently apply PEMDAS",
    action: "Practice with varied expressions and memory devices",
  },
  {
    skill: "Variable Understanding",
    warning: "Treats variables as specific numbers rather than unknowns",
    action: "Use concrete examples and gradually increase abstraction",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "When should my child take this readiness assessment?",
    answer:
      "The best time is during 7th grade or early 8th grade, before enrolling in Algebra 1. This gives you time to address any gaps identified in the assessment.",
    icon: "help-circle",
  },
  {
    question: "What if my child doesn't meet all the readiness criteria?",
    answer:
      "Don't worry! This is normal. Focus on the areas where they need support. Consider a pre-algebra course or additional practice in weak areas before moving to Algebra 1.",
    icon: "help-circle",
  },
  {
    question: "How long should it take to address readiness gaps?",
    answer:
      "It depends on the gaps, but typically 2-4 months of focused practice can significantly improve readiness. Some students may need a full semester of pre-algebra.",
    icon: "help-circle",
  },
  {
    question: "Should I hire a tutor if my child isn't ready?",
    answer:
      "A tutor can be helpful, but first try working with your child's teacher and using online resources. If gaps persist after 4-6 weeks, consider getting additional support.",
    icon: "help-circle",
  },
  {
    question: "Is it better to wait a year if my child isn't ready?",
    answer:
      "Sometimes yes. It's better to build a strong foundation than to struggle through Algebra 1. Success in algebra depends heavily on having these prerequisite skills.",
    icon: "help-circle",
  },
  {
    question: "How do I know if my child is truly ready for Algebra 1?",
    answer:
      "They should comfortably complete 80-90% of the readiness checklist items. More importantly, they should approach math problems with confidence and persistence.",
    icon: "help-circle",
  },
];

export default function AlgebraReadinessChecklist() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Algebra Readiness Assessment">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Is Your Middle Schooler Ready for Algebra?
            </h2>
            <p className="text-gray-600">
              Complete this comprehensive checklist to assess algebra readiness
            </p>
          </div>
        </div>

        <Alert type="info" icon={Target}>
          <div>
            <strong>Assessment Goal:</strong> Use this checklist to identify
            your student's strengths and areas needing support before entering
            Algebra 1. A strong foundation prevents future struggles.
          </div>
        </Alert>

        <BlogChecklist
          title="Core Algebra Readiness Checklist"
          description="Check off each skill your student can demonstrate confidently"
          items={readinessChecklist}
        />
      </BlogSection>

      <BlogSection title="Essential Skill Areas">
        <p className="text-gray-700 mb-6">
          Algebra readiness spans multiple mathematical domains. Understanding
          these key areas helps identify where to focus preparation efforts.
        </p>

        <div className="space-y-6">
          {skillAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-700 mb-4">{area.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Key Skills:
                  </h4>
                  <ul className="space-y-1">
                    {area.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 text-gray-600 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded p-4">
                  <h4 className="font-medium text-purple-900 mb-2">
                    Why This Matters:
                  </h4>
                  <p className="text-purple-700 text-sm">{area.importance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Strengthening Weak Areas">
        <p className="text-gray-700 mb-6">
          If your student struggles with any checklist items, focus on these
          targeted strategies to build their skills.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {strengthenStrategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {strategy.area}
              </h3>
              <ul className="space-y-2">
                {strategy.strategies.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-blue-700"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Grade-Level Timeline">
        <p className="text-gray-700 mb-6">
          Algebra readiness develops over time. Here's when to focus on
          different skills across middle school.
        </p>

        <div className="space-y-4">
          {timelineGuidance.map((period, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 6}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {period.timing}
                  </h3>
                  <p className="text-green-600 font-medium">{period.focus}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {period.activities.map((activity, aIndex) => (
                  <li
                    key={aIndex}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <Target className="w-4 h-4 text-green-600" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Warning Signs to Watch For">
        <Alert type="warning" icon={AlertTriangle}>
          <div>
            <strong>Early Intervention:</strong> Addressing these warning signs
            early prevents algebra struggles later.
          </div>
        </Alert>

        <div className="space-y-4 mt-6">
          {warningSignsData.map((warning, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                {warning.skill}
              </h3>
              <p className="text-yellow-800 mb-3">
                <strong>Warning Sign:</strong> {warning.warning}
              </p>
              <p className="text-yellow-700">
                <strong>Action Steps:</strong> {warning.action}
              </p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Making the Final Decision">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Ready or Not Ready?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-900 mb-3">
                Signs They're Ready:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Completes 80%+ of checklist items</span>
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Shows confidence with math problems</span>
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Persists through challenging problems</span>
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Understands abstract concepts</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-red-900 mb-3">
                Consider Waiting If:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Struggles with basic fractions</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Confused by negative numbers</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Avoids word problems</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Needs frequent help with homework</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Next Steps">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Assess Your Student?
          </h3>
          <p className="text-gray-700 mb-6">
            Use this checklist to make an informed decision about your student's
            algebra readiness and create a targeted preparation plan.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> It's better to build a strong
              foundation than to struggle through algebra unprepared.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
