import React from 'react';

import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Star,
  Target,
  Users,
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
import { WeeklyPlanner } from '../components/WeeklyPlanner';

export const metadata: Metadata = {
  title: "Weekly Study Planner Template for Math | Free Download",
  description:
    "Free downloadable weekly study planner template specifically designed for middle school math organization and success.",
  keywords: [
    "study planner",
    "math organization",
    "study schedule",
    "math planning",
    "study template",
    "math study guide",
    "organization tools",
    "study habits",
    "math homework",
    "academic planning",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Weekly Study Planner Template for Math | Free Download",
    description:
      "Free downloadable weekly study planner template specifically designed for middle school math organization and success.",
    images: ["/blog/susan-wilkinson-jaExxGtbfFA-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-07-22T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "weekly-study-planner-template",
  shortName: "Study Planner",
  name: "Weekly Study Planner Template for Math",
  excerpt:
    "Free downloadable weekly study planner template specifically designed for middle school math organization and success.",
  date: new Date("2025-07-22"),
  author: "Education Team",
  readingTime: 4,
  slug: "weekly-study-planner-template",
  image: "/blog/susan-wilkinson-jaExxGtbfFA-unsplash.jpg",
  keywords: [
    "study planner",
    "math organization",
    "study schedule",
    "math planning",
    "study template",
    "math study guide",
    "organization tools",
    "study habits",
    "math homework",
    "academic planning",
  ],
};

const plannerBenefits = [
  {
    icon: Target,
    title: "Improves Focus",
    description:
      "Having a clear plan helps students stay focused on specific math topics and goals.",
  },
  {
    icon: Clock,
    title: "Better Time Management",
    description:
      "Students learn to allocate appropriate time for different math concepts and assignments.",
  },
  {
    icon: CheckCircle,
    title: "Tracks Progress",
    description:
      "Visual progress tracking builds confidence and motivation to continue learning.",
  },
  {
    icon: BookOpen,
    title: "Organized Learning",
    description:
      "Systematic approach to math study prevents gaps and ensures comprehensive coverage.",
  },
  {
    icon: Star,
    title: "Builds Habits",
    description:
      "Consistent planning creates positive study habits that last throughout school.",
  },
  {
    icon: Users,
    title: "Parent Involvement",
    description:
      "Shared planning helps parents support their child's math learning effectively.",
  },
];

const plannerSections = [
  {
    section: "Weekly Goals",
    purpose: "Set 2-3 specific math goals for the week",
    examples: [
      "Master solving two-step equations",
      "Complete Chapter 5 practice problems",
      "Prepare for Friday's algebra quiz",
    ],
  },
  {
    section: "Daily Schedule",
    purpose: "Plan specific math topics and activities for each day",
    examples: [
      "Monday: Review homework, practice linear equations",
      "Tuesday: Learn new concept, complete textbook exercises",
      "Wednesday: Work on word problems, review quiz material",
    ],
  },
  {
    section: "Homework Tracker",
    purpose: "Record and track completion of math assignments",
    examples: [
      "Assignment name, due date, completion status",
      "Difficulty level (easy, medium, hard)",
      "Time spent and notes",
    ],
  },
  {
    section: "Practice Log",
    purpose: "Track additional math practice beyond homework",
    examples: [
      "Khan Academy exercises completed",
      "Math games played",
      "YouTube videos watched",
    ],
  },
  {
    section: "Weekly Reflection",
    purpose: "Review progress and plan improvements",
    examples: [
      "What math concepts did I master this week?",
      "What was challenging and needs more practice?",
      "How can I improve my math study habits?",
    ],
  },
];

const studyTips = [
  {
    tip: "Start with Hardest Topics",
    description: "Tackle challenging math concepts when your brain is freshest",
    timeframe: "Beginning of study session",
  },
  {
    tip: "Use the 25-5 Rule",
    description: "Study for 25 minutes, then take a 5-minute break",
    timeframe: "During study sessions",
  },
  {
    tip: "Practice Regularly",
    description:
      "15-20 minutes of daily practice is better than 2 hours once a week",
    timeframe: "Daily",
  },
  {
    tip: "Review Before Sleep",
    description: "Quickly review math concepts before bed to improve retention",
    timeframe: "Evening",
  },
  {
    tip: "Use Multiple Resources",
    description:
      "Combine textbook, videos, and practice apps for comprehensive learning",
    timeframe: "Throughout the week",
  },
  {
    tip: "Plan for Tests",
    description: "Start test preparation 3-4 days before the exam date",
    timeframe: "Test preparation",
  },
];

const successStrategies = [
  {
    strategy: "Weekly Planning Session",
    description: "Spend 10-15 minutes each Sunday planning the upcoming week",
    steps: [
      "Review upcoming assignments and tests",
      "Identify challenging topics needing extra practice",
      "Schedule specific study times for each day",
      "Set realistic and achievable goals",
    ],
  },
  {
    strategy: "Daily Check-ins",
    description: "Brief 5-minute review at the end of each day",
    steps: [
      "Mark completed tasks and assignments",
      "Note any difficulties or questions",
      "Adjust tomorrow's plan if needed",
      "Celebrate small wins and progress",
    ],
  },
  {
    strategy: "Parent Partnership",
    description: "Involve parents in the planning process for better support",
    steps: [
      "Share weekly goals with parents",
      "Ask for help with challenging concepts",
      "Request check-ins during difficult topics",
      "Discuss progress and adjustments needed",
    ],
  },
];

const plannerChecklist = [
  {
    id: "set-goals",
    text: "Set 2-3 specific math goals for the week",
    completed: false,
  },
  {
    id: "schedule-time",
    text: "Block out specific times for math study each day",
    completed: false,
  },
  {
    id: "list-assignments",
    text: "Write down all math assignments and due dates",
    completed: false,
  },
  {
    id: "identify-challenges",
    text: "Note topics that need extra practice or help",
    completed: false,
  },
  {
    id: "plan-resources",
    text: "Identify which resources you'll use (textbook, videos, apps)",
    completed: false,
  },
  {
    id: "schedule-breaks",
    text: "Include break times in your study schedule",
    completed: false,
  },
  {
    id: "prep-materials",
    text: "Gather all necessary materials before study time",
    completed: false,
  },
  {
    id: "review-progress",
    text: "Plan time for weekly reflection and planning",
    completed: false,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How much time should my child spend on math study each day?",
    answer:
      "For middle school students, 15-30 minutes of focused math study daily is typically sufficient, plus time for homework. Quality and consistency matter more than quantity.",
    icon: "help-circle",
  },
  {
    question: "What if my child doesn't stick to the planner?",
    answer:
      "Start small with just 2-3 items per day. Make the planner realistic and adjust as needed. Focus on building the habit gradually rather than perfection from the start.",
    icon: "help-circle",
  },
  {
    question: "Should parents help fill out the study planner?",
    answer:
      "Initially, yes. Help your child learn to use the planner effectively, but gradually transfer responsibility to them. The goal is to build independent planning skills.",
    icon: "help-circle",
  },
  {
    question: "How do I handle weeks with tests or major assignments?",
    answer:
      "Plan backward from the test date. Break study material into daily chunks and increase study time gradually. Use the planner to ensure you're not cramming at the last minute.",
    icon: "help-circle",
  },
  {
    question: "What if my child has multiple subjects to plan for?",
    answer:
      "This math planner can be part of a larger study system. Consider using different colors or sections for each subject, or create separate planners for major subjects.",
    icon: "help-circle",
  },
  {
    question: "How often should we review and adjust the planner?",
    answer:
      "Weekly reviews are essential. Adjust the format, timing, or goals based on what's working and what isn't. The planner should evolve with your child's needs.",
    icon: "help-circle",
  },
];

export default function WeeklyStudyPlannerTemplate() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Free Weekly Math Study Planner">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Weekly Study Planner Template for Math
            </h2>
            <p className="text-gray-600">
              Free downloadable template to organize your child's math learning
            </p>
          </div>
        </div>

        <Alert type="info" icon={BookOpen}>
          <div>
            <strong>Why Use a Study Planner?</strong> Research shows that
            students who plan their study time are more successful, less
            stressed, and develop better long-term academic habits.
          </div>
        </Alert>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                Download Your Free Template
              </h3>
              <p className="text-blue-700">
                Printable PDF planner designed specifically for math study
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Template
            </button>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Benefits of Using a Study Planner">
        <div className="grid md:grid-cols-2 gap-6">
          {plannerBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <benefit.icon className="w-8 h-8 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Interactive Weekly Planner">
        <p className="text-gray-700 mb-6">
          Try our interactive planner below to see how it works, then download
          the PDF template for regular use.
        </p>
        <WeeklyPlanner
          title="Sample Math Study Week"
          items={[
            {
              day: "Monday",
              time: "4:00 PM",
              task: "Review homework, practice linear equations (20 min)",
            },
            {
              day: "Tuesday",
              time: "4:00 PM",
              task: "Learn new concept: systems of equations (30 min)",
            },
            {
              day: "Wednesday",
              time: "4:00 PM",
              task: "Work on word problems, complete practice set (25 min)",
            },
            {
              day: "Thursday",
              time: "4:00 PM",
              task: "Review for Friday quiz, practice problems (30 min)",
            },
            {
              day: "Friday",
              time: "3:30 PM",
              task: "Take quiz, review incorrect answers (20 min)",
            },
            {
              day: "Saturday",
              time: "10:00 AM",
              task: "Catch up on any missed work, extra practice (30 min)",
            },
            {
              day: "Sunday",
              time: "2:00 PM",
              task: "Plan next week, review weekly goals (15 min)",
            },
          ]}
        />
      </BlogSection>

      <BlogSection title="What's Included in the Template">
        <div className="space-y-6">
          {plannerSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {section.section}
              </h3>
              <p className="text-gray-700 mb-4">{section.purpose}</p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                <ul className="space-y-1">
                  {section.examples.map((example, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Getting Started Checklist">
        <BlogChecklist
          title="Weekly Planner Setup"
          description="Complete these steps to start using your math study planner effectively"
          items={plannerChecklist}
        />
      </BlogSection>

      <BlogSection title="Study Tips for Success">
        <div className="space-y-4">
          {studyTips.map((tip, index) => (
            <div
              key={index}
              className="bg-purple-50 border border-purple-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-purple-900">{tip.tip}</h3>
                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                  {tip.timeframe}
                </span>
              </div>
              <p className="text-purple-700 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Making It Work: Implementation Strategies">
        <div className="space-y-6">
          {successStrategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {strategy.strategy}
              </h3>
              <p className="text-gray-700 mb-4">{strategy.description}</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Steps:</h4>
                <ol className="space-y-2">
                  {strategy.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {i + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Start Planning Today">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 text-center">
          <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Get Organized?
          </h3>
          <p className="text-gray-700 mb-6">
            Download your free weekly study planner template and start building
            better math study habits today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Get Your Free Template
          </button>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong>Bonus:</strong> Includes tips for parents on how to
              support their child's planning efforts.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
