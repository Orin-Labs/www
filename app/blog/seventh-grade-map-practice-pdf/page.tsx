import React from 'react';

import {
  Brain,
  CheckCircle,
  Download,
  FileText,
  Info,
} from 'lucide-react';
import { Metadata } from 'next';

import { Alert } from '../components/Alert';
import { BlogChecklist } from '../components/BlogChecklist';
import {
  BlogFAQ,
  type FAQItem,
} from '../components/BlogFAQ';
import { BlogLayout } from '../components/BlogLayout';
import { BlogSection } from '../components/BlogSection';

export const metadata: Metadata = {
  title: "Free 7th-Grade MAP Practice PDF | Test Prep Materials",
  description:
    "Free downloadable MAP practice test for 7th graders with printable worksheets to build confidence and test familiarity.",
  keywords: [
    "map practice test 7th grade",
    "MAP test prep",
    "practice worksheets",
    "test preparation",
    "printable practice",
    "assessment preparation",
    "test familiarity",
    "study materials",
    "practice tests",
    "academic preparation",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Free 7th-Grade MAP Practice PDF | Test Prep Materials",
    description:
      "Free downloadable MAP practice test for 7th graders with printable worksheets to build confidence and test familiarity.",
    images: ["/blog/susan-wilkinson-9UlalA_5VYQ-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-21T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "seventh-grade-map-practice-pdf",
  shortName: "7th Grade Practice",
  name: "Free 7th-Grade MAP Practice PDF",
  excerpt:
    "Free downloadable MAP practice test for 7th graders with printable worksheets to build confidence and test familiarity.",
  date: new Date("2025-06-21"),
  author: "Education Team",
  readingTime: 6,
  slug: "seventh-grade-map-practice-pdf",
  image: "/blog/susan-wilkinson-9UlalA_5VYQ-unsplash.jpg",
  keywords: [
    "map practice test 7th grade",
    "MAP test prep",
    "practice worksheets",
    "test preparation",
    "printable practice",
    "assessment preparation",
    "test familiarity",
    "study materials",
    "practice tests",
    "academic preparation",
  ],
};

const practiceQuestions = [
  {
    subject: "Reading",
    questions: [
      "Reading comprehension with multiple choice",
      "Vocabulary in context",
      "Literary analysis questions",
      "Inferential reasoning",
      "Main idea identification",
    ],
  },
  {
    subject: "Math",
    questions: [
      "Pre-algebra concepts",
      "Geometry and measurement",
      "Number sense and operations",
      "Patterns and relationships",
      "Data analysis and probability",
    ],
  },
  {
    subject: "Language Usage",
    questions: [
      "Grammar and mechanics",
      "Sentence structure",
      "Punctuation rules",
      "Spelling patterns",
      "Writing conventions",
    ],
  },
];

const preparationStrategies = [
  {
    title: "Familiarize with Format",
    description:
      "Practice with computer-based testing format to reduce anxiety",
    tips: [
      "Use online practice tools",
      "Practice clicking and dragging",
      "Get comfortable with scroll bars",
      "Practice timing yourself",
    ],
  },
  {
    title: "Review Grade-Level Content",
    description: "Focus on 7th grade curriculum standards and expectations",
    tips: [
      "Review fraction operations",
      "Practice algebraic thinking",
      "Read grade-appropriate texts",
      "Work on writing mechanics",
    ],
  },
  {
    title: "Build Test Stamina",
    description: "Gradually increase practice session length",
    tips: [
      "Start with 15-minute sessions",
      "Build up to 45-60 minutes",
      "Take scheduled breaks",
      "Practice sustained focus",
    ],
  },
];

const testDayTips = [
  {
    id: "sleep",
    text: "Get a good night's sleep before the test",
    completed: false,
  },
  {
    id: "breakfast",
    text: "Eat a healthy breakfast with protein",
    completed: false,
  },
  {
    id: "arrive-early",
    text: "Arrive early to reduce stress",
    completed: false,
  },
  {
    id: "read-directions",
    text: "Read all directions carefully",
    completed: false,
  },
  {
    id: "skip-difficult",
    text: "Skip difficult questions and return later",
    completed: false,
  },
  { id: "elimination", text: "Use process of elimination", completed: false },
  {
    id: "time-management",
    text: "Don't spend too much time on one question",
    completed: false,
  },
  {
    id: "stay-positive",
    text: "Stay positive and do your best",
    completed: false,
  },
];

const practiceSchedule = [
  {
    week: "Week 1",
    focus: "Diagnostic Assessment",
    activities: [
      "Take initial practice test",
      "Identify strength and growth areas",
      "Review test format and timing",
      "Set practice goals",
    ],
  },
  {
    week: "Week 2",
    focus: "Reading Practice",
    activities: [
      "Practice reading comprehension",
      "Work on vocabulary strategies",
      "Time reading passages",
      "Review answer explanations",
    ],
  },
  {
    week: "Week 3",
    focus: "Math Practice",
    activities: [
      "Review pre-algebra concepts",
      "Practice geometry problems",
      "Work on word problems",
      "Time math sections",
    ],
  },
  {
    week: "Week 4",
    focus: "Language Usage & Review",
    activities: [
      "Practice grammar rules",
      "Review writing conventions",
      "Take full practice test",
      "Review all subject areas",
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How often should my 7th grader practice with these materials?",
    answer:
      "We recommend 2-3 practice sessions per week, about 30-45 minutes each. Consistency is more important than long cramming sessions. Start practicing 4-6 weeks before the actual test date.",
    icon: "help-circle",
  },
  {
    question: "Are these practice questions similar to the actual MAP test?",
    answer:
      "Yes, our practice questions are designed to mirror the format, difficulty, and content areas of the actual MAP test for 7th grade. They follow the same adaptive testing principles and cover similar academic standards.",
    icon: "help-circle",
  },
  {
    question:
      "What should I do if my child struggles with the practice materials?",
    answer:
      "Focus on the specific areas where they need support. Use the practice materials to identify gaps, then work with teachers or tutors to address those areas. Remember, the goal is growth, not perfection.",
    icon: "help-circle",
  },
  {
    question: "How long does the actual MAP test take for 7th graders?",
    answer:
      "The MAP test is untimed, but most 7th graders finish each section in 45-60 minutes. The test adapts to your child's ability level, so timing can vary. Practice helps build stamina and confidence.",
    icon: "help-circle",
  },
  {
    question: "Should my child guess if they don't know an answer?",
    answer:
      "There's no penalty for guessing on the MAP test. If your child doesn't know an answer, they should make their best educated guess and move on. The test is designed to find their instructional level.",
    icon: "help-circle",
  },
  {
    question: "Can parents help during practice sessions?",
    answer:
      "Yes! Parents can help by timing practice sessions, discussing strategies, and providing encouragement. However, let your child work through problems independently to build confidence and test-taking skills.",
    icon: "help-circle",
  },
];

export default function SeventhGradeMAPPracticePDF() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Free 7th-Grade MAP Practice Materials">
        <div className="flex items-center gap-3 mb-6">
          <Download className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Free 7th-Grade MAP Practice Materials
            </h2>
            <p className="text-gray-600">
              Downloadable PDF with practice questions and preparation
              strategies
            </p>
          </div>
        </div>

        <Alert type="info" className="mb-8" icon={Info}>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <strong>What's Included:</strong> 50+ practice questions, answer
              key with explanations, test-taking strategies, and a 4-week
              preparation schedule.
            </div>
          </div>
        </Alert>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                Download Your Free Practice PDF
              </h3>
              <p className="text-blue-700">
                Complete practice test with answer explanations
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Why Practice Matters for 7th Graders">
        <p className="text-gray-700 mb-6">
          The MAP test can feel overwhelming for 7th graders facing their first
          adaptive assessment. Practice materials help students become familiar
          with the format, build confidence, and develop effective test-taking
          strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Builds Confidence
            </h3>
            <p className="text-green-700">
              Familiarity with question types and format reduces test anxiety
              and helps students feel more prepared.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <Brain className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Identifies Learning Gaps
            </h3>
            <p className="text-blue-700">
              Practice reveals areas where students need additional support
              before the actual test.
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="What's in the Practice Materials">
        <div className="space-y-6">
          {practiceQuestions.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {section.subject}
              </h3>
              <ul className="space-y-2">
                {section.questions.map((question, qIndex) => (
                  <li
                    key={qIndex}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="4-Week Preparation Schedule">
        <p className="text-gray-700 mb-6">
          Follow this structured approach to help your 7th grader prepare
          systematically for the MAP test.
        </p>

        <div className="space-y-4">
          {practiceSchedule.map((week, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {week.week}
                  </h3>
                  <p className="text-blue-600 font-medium">{week.focus}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {week.activities.map((activity, aIndex) => (
                  <li
                    key={aIndex}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Test Preparation Strategies">
        <div className="space-y-6">
          {preparationStrategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {strategy.title}
              </h3>
              <p className="text-gray-700 mb-4">{strategy.description}</p>
              <ul className="space-y-2">
                {strategy.tips.map((tip, tIndex) => (
                  <li
                    key={tIndex}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Test Day Success Tips">
        <BlogChecklist
          title="7th Grade MAP Test Day Checklist"
          items={testDayTips}
        />
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Ready to Get Started?">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 text-center">
          <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Start Practicing?
          </h3>
          <p className="text-gray-700 mb-6">
            Download our comprehensive 7th-grade MAP practice materials and give
            your student the confidence they need to succeed.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Practice PDF
          </button>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
