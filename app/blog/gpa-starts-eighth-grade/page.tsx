import React from 'react';

import {
  BookOpen,
  Calculator,
  CheckCircle,
  Target,
  TrendingUp,
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
import { ComparisonTable } from '../components/ComparisonTable';
import { GPAScale } from '../components/GPAScale';

export const metadata: Metadata = {
  title: "GPA Starts in 8th Grade: What Parents Need to Know",
  description:
    "Essential guide to understanding how 8th grade GPA impacts high school placement and college preparation.",
  keywords: [
    "8th grade GPA",
    "high school GPA",
    "academic transcript",
    "college preparation",
    "grade point average",
    "high school placement",
    "academic planning",
    "transcript management",
    "college admissions",
    "academic records",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "GPA Starts in 8th Grade: What Parents Need to Know",
    description:
      "Essential guide to understanding how 8th grade GPA impacts high school placement and college preparation.",
    images: ["/blog/omid-armin-b50MRxwg_gk-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-07T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "gpa-starts-eighth-grade",
  shortName: "GPA in 8th Grade",
  name: "GPA Starts in 8th Grade: What Parents Need to Know",
  excerpt:
    "Essential guide to understanding how 8th grade GPA impacts high school placement and college preparation.",
  date: new Date("2025-06-07"),
  author: "Education Team",
  readingTime: 7,
  slug: "gpa-starts-eighth-grade",
  image: "/blog/omid-armin-b50MRxwg_gk-unsplash.jpg",
  keywords: [
    "8th grade GPA",
    "high school GPA",
    "academic transcript",
    "college preparation",
    "grade point average",
    "high school placement",
    "academic planning",
    "transcript management",
    "college admissions",
    "academic records",
  ],
};

const gpaImpacts = [
  {
    area: "High School Course Placement",
    description:
      "Your 8th grade GPA often determines initial high school course levels",
    implications: [
      "Honors and AP course eligibility",
      "Math pathway placement (Algebra 1 vs Geometry)",
      "Language arts track assignment",
      "Science course progression",
      "Foreign language continuation",
    ],
    action: "Aim for strong performance in core subjects",
  },
  {
    area: "High School Transcript",
    description:
      "8th grade high school credit courses appear on official transcripts",
    implications: [
      "Algebra 1 grade affects cumulative GPA",
      "Foreign language credits count toward graduation",
      "Advanced courses show early academic commitment",
      "Poor grades can't be hidden or repeated easily",
      "Creates foundation for class rank",
    ],
    action: "Take high school credit courses seriously",
  },
  {
    area: "Academic Confidence",
    description:
      "Early GPA success builds momentum for high school achievement",
    implications: [
      "Establishes positive study habits",
      "Builds confidence in academic abilities",
      "Creates expectation of success",
      "Develops time management skills",
      "Encourages challenging course selection",
    ],
    action: "Focus on skill-building, not just grades",
  },
  {
    area: "College Preparation",
    description:
      "Strong 8th grade performance sets stage for competitive college preparation",
    implications: [
      "Earlier access to AP courses",
      "Better preparation for standardized tests",
      "More rigorous course sequences",
      "Stronger teacher relationships",
      "Leadership opportunities in high school",
    ],
    action: "Think long-term about academic planning",
  },
];

const coursesThatCount = [
  {
    course: "Algebra 1",
    when: "8th Grade",
    impact: "High",
    details:
      "Appears on high school transcript, affects cumulative GPA, determines math progression",
  },
  {
    course: "Foreign Language Level 1",
    when: "8th Grade",
    impact: "High",
    details: "Counts toward graduation requirements, affects language pathway",
  },
  {
    course: "Geometry (if qualified)",
    when: "8th Grade",
    impact: "High",
    details:
      "Advanced placement, opens calculus pathway, demonstrates mathematical ability",
  },
  {
    course: "High School Biology",
    when: "8th Grade",
    impact: "Medium",
    details: "Less common, but counts if offered and taken",
  },
  {
    course: "Regular 8th Grade Courses",
    when: "8th Grade",
    impact: "Low",
    details:
      "Don't appear on high school transcript but affect placement decisions",
  },
];

const gpaStrategies = [
  {
    category: "Academic Excellence",
    strategies: [
      {
        title: "Prioritize High School Credit Courses",
        description:
          "Focus extra attention on courses that will appear on the high school transcript",
        tips: [
          "Study more thoroughly for Algebra 1 tests",
          "Seek extra help immediately if struggling",
          "Complete all homework assignments",
          "Participate actively in class discussions",
        ],
      },
      {
        title: "Develop Strong Study Habits",
        description: "Build systems that will serve throughout high school",
        tips: [
          "Create consistent homework routines",
          "Use planners and organizational tools",
          "Form study groups with motivated peers",
          "Practice test-taking strategies",
        ],
      },
    ],
  },
  {
    category: "Course Planning",
    strategies: [
      {
        title: "Choose Courses Strategically",
        description: "Balance challenge with ability to succeed",
        tips: [
          "Don't take high school credit courses unless ready",
          "Consider summer preparation for challenging courses",
          "Discuss options with teachers and counselors",
          "Plan 4-year course sequences",
        ],
      },
      {
        title: "Build Relationships",
        description: "Connect with teachers who can support your success",
        tips: [
          "Communicate regularly with teachers",
          "Ask for help before struggling",
          "Show genuine interest in learning",
          "Be respectful and engaged in class",
        ],
      },
    ],
  },
];

const parentActions = [
  {
    id: "understand-policy",
    text: "Understand your district's GPA and transcript policies",
    completed: false,
  },
  {
    id: "meet-counselor",
    text: "Meet with the school counselor to discuss course planning",
    completed: false,
  },
  {
    id: "monitor-grades",
    text: "Monitor grades regularly, especially in high school credit courses",
    completed: false,
  },
  {
    id: "support-study-habits",
    text: "Help establish strong study habits and organization systems",
    completed: false,
  },
  {
    id: "communicate-teachers",
    text: "Maintain open communication with teachers",
    completed: false,
  },
  {
    id: "plan-high-school",
    text: "Begin long-term high school course planning",
    completed: false,
  },
  {
    id: "address-struggles",
    text: "Address academic struggles immediately",
    completed: false,
  },
  {
    id: "celebrate-success",
    text: "Celebrate academic achievements and effort",
    completed: false,
  },
];

const commonMistakes = [
  {
    mistake: "Treating 8th grade casually",
    consequence: "Poor foundation for high school, missed opportunities",
    prevention: "Emphasize importance early, set clear expectations",
  },
  {
    mistake: "Taking high school credit courses unprepared",
    consequence: "Poor grades that permanently affect transcript",
    prevention: "Honest assessment of readiness, summer preparation if needed",
  },
  {
    mistake: "Ignoring course selection process",
    consequence: "Suboptimal high school course placement",
    prevention: "Active participation in counseling meetings, research options",
  },
  {
    mistake: "Focusing only on grades, not learning",
    consequence: "Weak foundation for advanced coursework",
    prevention: "Emphasize understanding over grades, seek help when confused",
  },
  {
    mistake: "Not communicating with school",
    consequence: "Missing important information and opportunities",
    prevention: "Regular check-ins with teachers and counselors",
  },
];

const gpaMyths = [
  {
    myth: "8th grade doesn't matter for college",
    reality:
      "8th grade high school credit courses directly impact college-bound GPA and course sequences",
  },
  {
    myth: "You can retake courses in high school",
    reality:
      "Most districts don't allow retaking for GPA improvement; original grades stay on transcript",
  },
  {
    myth: "Only core subjects matter",
    reality:
      "All high school credit courses count, including electives and foreign languages",
  },
  {
    myth: "GPA is just a number",
    reality:
      "GPA affects course placement, scholarship opportunities, and college admissions",
  },
  {
    myth: "Smart kids don't need to try in 8th grade",
    reality:
      "Even gifted students need to develop work habits and learn to handle challenging coursework",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Which 8th grade courses count toward high school GPA?",
    answer:
      "Typically, any course taken for high school credit counts toward GPA. This commonly includes Algebra 1, foreign languages, and sometimes advanced science courses. Check with your school counselor for specific policies.",
    icon: "help-circle",
  },
  {
    question: "Can poor 8th grade grades be removed from the transcript?",
    answer:
      "Generally, no. High school credit courses taken in 8th grade become permanent parts of the high school transcript. Some districts allow grade replacement, but policies vary significantly.",
    icon: "help-circle",
  },
  {
    question: "How much does 8th grade GPA impact college admissions?",
    answer:
      "While 9th-12th grade performance is most important, 8th grade high school credit courses contribute to cumulative GPA and course sequences that matter for competitive college admissions.",
    icon: "help-circle",
  },
  {
    question: "Should my child take high school credit courses in 8th grade?",
    answer:
      "Only if they're academically ready and can handle the responsibility. These courses require high school-level commitment and will permanently affect their transcript.",
    icon: "help-circle",
  },
  {
    question:
      "What if my child struggles in an 8th grade high school credit course?",
    answer:
      "Get help immediately. Contact the teacher, consider tutoring, and speak with the counselor about options. Early intervention is crucial since these grades typically can't be changed later.",
    icon: "help-circle",
  },
  {
    question: "How can I help my 8th grader prepare for GPA responsibility?",
    answer:
      "Focus on building strong study habits, organization skills, and communication with teachers. Help them understand the importance without creating excessive pressure.",
    icon: "help-circle",
  },
];

export default function GPAStartsEighthGrade() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Why 8th Grade GPA Matters">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-green-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              GPA Starts in 8th Grade
            </h2>
            <p className="text-gray-600">
              Understanding how middle school performance shapes high school
              success
            </p>
          </div>
        </div>

        <Alert type="info" icon={BookOpen}>
          <div>
            <strong>Important:</strong> Many 8th graders take high school credit
            courses like Algebra 1 or foreign languages. These grades become
            permanent parts of their high school transcript and GPA calculation.
          </div>
        </Alert>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">
            The Reality Check
          </h3>
          <p className="text-yellow-800">
            Unlike elementary and middle school grades that "don't count," 8th
            grade high school credit courses create lasting academic records
            that follow students through graduation and college applications.
          </p>
        </div>
      </BlogSection>

      <BlogSection title="How 8th Grade GPA Impacts Your Child's Future">
        <div className="space-y-6">
          {gpaImpacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {impact.area}
              </h3>
              <p className="text-gray-700 mb-4">{impact.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Specific Implications:
                  </h4>
                  <ul className="space-y-2">
                    {impact.implications.map((implication, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <CheckCircle className="w-3 h-3 mt-0.5 text-blue-600" />
                        {implication}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Action Step:
                  </h4>
                  <p className="text-blue-800 text-sm">{impact.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Which 8th Grade Courses Count">
        <p className="text-gray-700 mb-6">
          Not all 8th grade courses affect high school GPA, but understanding
          which ones do is crucial for strategic planning.
        </p>

        <ComparisonTable
          columns={[
            { header: "Course", key: "course" },
            { header: "Timing", key: "when" },
            { header: "Transcript Impact", key: "impact" },
            { header: "Details", key: "details" },
          ]}
          data={coursesThatCount}
        />
      </BlogSection>

      <BlogSection title="GPA Scale and Calculation">
        <p className="text-gray-700 mb-6">
          Understanding how GPA is calculated helps students and parents make
          informed decisions about course selection and academic effort.
        </p>
        <GPAScale />
      </BlogSection>

      <BlogSection title="Strategies for Success">
        <div className="space-y-8">
          {gpaStrategies.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.strategies.map((strategy, strategyIndex) => (
                  <div
                    key={strategyIndex}
                    className="border-l-4 border-green-200 pl-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {strategy.title}
                    </h4>
                    <p className="text-gray-700 mb-3">{strategy.description}</p>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li
                          key={tipIndex}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <Target className="w-4 h-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Common Myths vs Reality">
        <div className="space-y-4">
          {gpaMyths.map((item, index) => (
            <div
              key={index}
              className="bg-red-50 border border-red-200 rounded-lg p-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">❌ Myth:</h3>
                  <p className="text-red-800 text-sm">{item.myth}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">
                    ✅ Reality:
                  </h3>
                  <p className="text-green-800 text-sm">{item.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Common Mistakes to Avoid">
        <div className="space-y-4">
          {commonMistakes.map((mistake, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                {mistake.mistake}
              </h3>
              <p className="text-yellow-800 mb-3">
                <strong>Consequence:</strong> {mistake.consequence}
              </p>
              <p className="text-yellow-700">
                <strong>Prevention:</strong> {mistake.prevention}
              </p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Parent Action Plan">
        <BlogChecklist
          title="8th Grade GPA Success Checklist"
          description="Complete these actions to support your child's academic success"
          items={parentActions}
        />
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Setting Your Child Up for Success">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Start Strong, Finish Stronger
          </h3>
          <p className="text-gray-700 mb-6">
            Understanding the importance of 8th grade GPA helps you support your
            child in building strong academic foundations that will serve them
            throughout high school and beyond.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> The goal isn't perfection—it's building
              skills, habits, and confidence that lead to long-term academic
              success.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
