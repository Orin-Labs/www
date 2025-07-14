import React from 'react';

import {
  Brain,
  CheckCircle,
  Clock,
  Star,
  Target,
  Trophy,
  Wrench,
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

export const metadata: Metadata = {
  title: "PLTW vs FIRST Robotics: Which STEM Path is Right for Your Child?",
  description:
    "Detailed comparison of Project Lead The Way and FIRST Robotics programs to help choose the best STEM pathway.",
  keywords: [
    "PLTW vs FIRST robotics",
    "STEM programs",
    "robotics programs",
    "engineering education",
    "STEM pathway",
    "robotics competition",
    "engineering curriculum",
    "STEM electives",
    "robotics teams",
    "engineering skills",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "PLTW vs FIRST Robotics: Which STEM Path is Right for Your Child?",
    description:
      "Detailed comparison of Project Lead The Way and FIRST Robotics programs to help choose the best STEM pathway.",
    images: ["/blog/milad-fakurian-PGdW_bHDbpI-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-09T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "pltw-vs-first-robotics",
  shortName: "PLTW vs FIRST",
  name: "PLTW vs FIRST Robotics: Which STEM Path?",
  excerpt:
    "Detailed comparison of Project Lead The Way and FIRST Robotics programs to help choose the best STEM pathway.",
  date: new Date("2025-06-09"),
  author: "Education Team",
  readingTime: 9,
  slug: "pltw-vs-first-robotics",
  image: "/blog/milad-fakurian-PGdW_bHDbpI-unsplash.jpg",
  keywords: [
    "PLTW vs FIRST robotics",
    "STEM programs",
    "robotics programs",
    "engineering education",
    "STEM pathway",
    "robotics competition",
    "engineering curriculum",
    "STEM electives",
    "robotics teams",
    "engineering skills",
  ],
};

const programOverview = [
  {
    program: "Project Lead The Way (PLTW)",
    type: "Curriculum-Based Program",
    structure: "Classroom courses with hands-on projects",
    timeCommitment: "Regular class period (45-90 minutes daily)",
    focus: "Broad engineering and computer science foundation",
    assessment: "Course grades, project portfolios, industry certifications",
  },
  {
    program: "FIRST Robotics Competition (FRC)",
    type: "Competition-Based Program",
    structure: "Team-based robot design and competition",
    timeCommitment: "After-school/weekend intensive (10-20 hours/week)",
    focus: "Robotics engineering, teamwork, competition",
    assessment: "Competition performance, team awards, skill development",
  },
];

const detailedComparison = {
  pltw: {
    name: "Project Lead The Way",
    description: "Comprehensive STEM curriculum with structured courses",
    strengths: [
      "Structured, sequential curriculum",
      "Certified teacher instruction",
      "Industry-standard software and tools",
      "College credit opportunities",
      "Broad STEM exposure",
      "Portfolio development",
      "Professional presentation skills",
    ],
    challenges: [
      "Less hands-on than robotics",
      "Limited team collaboration",
      "Classroom-based learning",
      "May lack real-world application",
      "Dependent on teacher quality",
    ],
    curriculum: [
      "Design & Modeling",
      "Automation & Robotics",
      "Energy & Environment",
      "Computer Science",
      "Biomedical Sciences",
      "Aerospace Engineering",
    ],
    outcomes: [
      "Strong technical foundation",
      "Industry software proficiency",
      "Engineering design process mastery",
      "College-level coursework experience",
      "STEM career pathway clarity",
    ],
  },
  first: {
    name: "FIRST Robotics",
    description:
      "Competitive robotics program focused on real-world engineering challenges",
    strengths: [
      "Intensive hands-on experience",
      "Real-world engineering challenges",
      "Strong teamwork and leadership",
      "Mentorship from industry professionals",
      "Competition excitement and motivation",
      "Scholarship opportunities",
      "Global community connection",
    ],
    challenges: [
      "High time commitment",
      "Expensive to participate",
      "Competitive team selection",
      "Travel requirements",
      "Seasonal intensity",
      "Limited to robotics focus",
    ],
    curriculum: [
      "Mechanical design and fabrication",
      "Electrical systems and programming",
      "Project management",
      "Team collaboration",
      "Public speaking and outreach",
      "Business and marketing skills",
    ],
    outcomes: [
      "Advanced problem-solving skills",
      "Leadership and teamwork experience",
      "Industry mentor relationships",
      "College recruitment opportunities",
      "Scholarship eligibility",
      "Real engineering portfolio",
    ],
  },
};

const studentProfiles = [
  {
    type: "The Structured Learner",
    description: "Prefers organized curriculum and clear expectations",
    recommendation: "PLTW",
    reasons: [
      "Benefits from sequential skill building",
      "Thrives in classroom environment",
      "Appreciates diverse STEM exposure",
      "Values academic credit and recognition",
    ],
  },
  {
    type: "The Hands-On Builder",
    description: "Learns best through practical application",
    recommendation: "FIRST Robotics",
    reasons: [
      "Motivated by tangible results",
      "Enjoys problem-solving under pressure",
      "Thrives in collaborative environments",
      "Excited by competition and challenges",
    ],
  },
  {
    type: "The Academic Achiever",
    description: "Focused on college preparation and credentials",
    recommendation: "PLTW (with FIRST supplements)",
    reasons: [
      "Values course credits and GPA impact",
      "Seeks broad foundation for college",
      "Appreciates industry certifications",
      "Can add robotics as extracurricular",
    ],
  },
  {
    type: "The Future Engineer",
    description: "Passionate about robotics and engineering",
    recommendation: "FIRST Robotics",
    reasons: [
      "Deep dive into engineering practice",
      "Professional mentorship opportunities",
      "Portfolio development for engineering schools",
      "Scholarship and recruitment advantages",
    ],
  },
];

const costConsiderations = [
  {
    aspect: "PLTW Program Costs",
    details: [
      "Usually included in regular school tuition",
      "Some schools charge lab fees ($50-200)",
      "Optional industry certification exams ($100-300)",
      "Software licenses typically school-provided",
      "Materials and supplies included",
    ],
  },
  {
    aspect: "FIRST Robotics Costs",
    details: [
      "Team registration fees ($6,000-15,000 annually)",
      "Individual student fees ($200-1,000)",
      "Travel expenses for competitions ($500-2,000)",
      "Additional training and workshops ($100-500)",
      "Tools and safety equipment ($100-300)",
    ],
  },
];

const timeCommitments = [
  {
    program: "PLTW",
    schoolYear: "Regular class period (45-90 minutes daily)",
    summer: "Optional internships or advanced courses",
    weekends: "Minimal, occasional project work",
    intensity: "Moderate and consistent",
  },
  {
    program: "FIRST Robotics",
    schoolYear: "After-school meetings 3-5 days/week (2-4 hours)",
    summer: "Optional camps and workshops",
    weekends: "Regular meetings during build season (6-8 hours)",
    intensity: "High during competition season (Jan-Apr)",
  },
];

const decisionFactors = [
  {
    id: "time-availability",
    text: "My child has time for intensive after-school commitment",
    completed: false,
  },
  {
    id: "competition-interest",
    text: "My child is motivated by competition and challenges",
    completed: false,
  },
  {
    id: "hands-on-preference",
    text: "My child learns best through hands-on building",
    completed: false,
  },
  {
    id: "team-collaboration",
    text: "My child enjoys working in teams",
    completed: false,
  },
  {
    id: "broad-exposure",
    text: "I want broad STEM exposure rather than deep specialization",
    completed: false,
  },
  {
    id: "academic-credit",
    text: "Academic credit and GPA impact are important",
    completed: false,
  },
  {
    id: "cost-factor",
    text: "Program cost is a significant consideration",
    completed: false,
  },
  {
    id: "college-prep",
    text: "College preparation is the primary goal",
    completed: false,
  },
];

const bothPrograms = [
  {
    scenario: "Large School District",
    description: "Some students can participate in both programs",
    approach:
      "Take PLTW courses for credit, join robotics team as extracurricular",
    benefits: [
      "Best of both worlds",
      "Broader skill development",
      "Multiple portfolio pieces",
    ],
    considerations: [
      "Significant time commitment",
      "Risk of burnout",
      "Need strong time management",
    ],
  },
  {
    scenario: "Progressive Pathway",
    description: "Start with one, add the other later",
    approach: "Begin with PLTW in middle school, join robotics in high school",
    benefits: [
      "Build foundation first",
      "Manageable progression",
      "Informed decision-making",
    ],
    considerations: [
      "May miss early robotics opportunities",
      "Different peer groups",
      "Scheduling conflicts",
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Can my child do both PLTW and FIRST Robotics?",
    answer:
      "Yes, many students participate in both. PLTW provides foundational knowledge that enhances robotics performance, while robotics offers hands-on application of PLTW concepts. However, this requires significant time commitment and strong organizational skills.",
    icon: "help-circle",
  },
  {
    question:
      "Which program better prepares students for engineering college programs?",
    answer:
      "Both are excellent preparation, but in different ways. PLTW provides broader foundational knowledge and academic credentials. FIRST Robotics offers deeper hands-on experience and often stronger college recruitment opportunities. Many engineering programs value both experiences.",
    icon: "help-circle",
  },
  {
    question: "What if my school doesn't offer both programs?",
    answer:
      "Research nearby schools or community organizations. Some students transfer schools for STEM programs, join community robotics teams, or supplement with online STEM courses. Consider advocating for program addition at your school.",
    icon: "help-circle",
  },
  {
    question: "How important are these programs for STEM college admissions?",
    answer:
      "While not required, both programs significantly enhance STEM college applications. They demonstrate sustained interest, practical skills, and commitment to STEM fields. The specific program matters less than depth of involvement and demonstrated learning.",
    icon: "help-circle",
  },
  {
    question: "What if my child tries one program and doesn't like it?",
    answer:
      "That's valuable learning too! STEM exploration in middle school helps students discover their interests and strengths. Skills from either program transfer to other STEM areas, and changing direction is normal and healthy.",
    icon: "help-circle",
  },
  {
    question: "Are there alternatives to PLTW and FIRST Robotics?",
    answer:
      "Yes! Consider VEX Robotics (smaller scale), Science Olympiad, engineering summer camps, maker spaces, coding clubs, or independent STEM projects. The goal is hands-on STEM engagement, which can happen in many formats.",
    icon: "help-circle",
  },
];

export default function PLTWVsFirstRobotics() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="PLTW vs FIRST Robotics: The Ultimate Comparison">
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-8 h-8 text-orange-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Choosing the Right STEM Pathway
            </h2>
            <p className="text-gray-600">
              Compare Project Lead The Way and FIRST Robotics to find the best
              fit
            </p>
          </div>
        </div>

        <Alert type="info" icon={Target}>
          <div>
            <strong>Both Are Excellent:</strong> PLTW and FIRST Robotics are
            both outstanding STEM programs that can launch successful
            engineering careers. The best choice depends on your child's
            learning style, interests, and goals.
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Program Overview">
        <ComparisonTable
          columns={[
            { header: "Aspect", key: "program" },
            { header: "Type", key: "type" },
            { header: "Structure", key: "structure" },
            { header: "Time Commitment", key: "timeCommitment" },
            { header: "Focus", key: "focus" },
            { header: "Assessment", key: "assessment" },
          ]}
          data={programOverview}
        />
      </BlogSection>

      <BlogSection title="Detailed Comparison">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Project Lead The Way
            </h3>
            <p className="text-blue-800 mb-4">
              {detailedComparison.pltw.description}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Strengths:</h4>
                <ul className="space-y-1">
                  {detailedComparison.pltw.strengths.map((strength, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-blue-700 text-sm"
                    >
                      <CheckCircle className="w-3 h-3 mt-0.5 text-blue-600" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  Curriculum Areas:
                </h4>
                <ul className="space-y-1">
                  {detailedComparison.pltw.curriculum.map((item, i) => (
                    <li key={i} className="text-blue-700 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-900 mb-3">
              FIRST Robotics
            </h3>
            <p className="text-orange-800 mb-4">
              {detailedComparison.first.description}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">
                  Strengths:
                </h4>
                <ul className="space-y-1">
                  {detailedComparison.first.strengths.map((strength, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-orange-700 text-sm"
                    >
                      <CheckCircle className="w-3 h-3 mt-0.5 text-orange-600" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-900 mb-2">
                  Curriculum Areas:
                </h4>
                <ul className="space-y-1">
                  {detailedComparison.first.curriculum.map((item, i) => (
                    <li key={i} className="text-orange-700 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Which Student Fits Where?">
        <div className="grid md:grid-cols-2 gap-6">
          {studentProfiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {profile.type}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">{profile.description}</p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-900 font-semibold">
                  Recommended: {profile.recommendation}
                </p>
              </div>

              <ul className="space-y-2">
                {profile.reasons.map((reason, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <CheckCircle className="w-3 h-3 mt-0.5 text-green-600" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Cost and Time Considerations">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Financial Investment
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {costConsiderations.map((cost, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
                >
                  <h4 className="font-semibold text-yellow-900 mb-3">
                    {cost.aspect}
                  </h4>
                  <ul className="space-y-2">
                    {cost.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-yellow-800 text-sm"
                      >
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Time Investment
            </h3>
            <ComparisonTable
              columns={[
                { header: "Program", key: "program" },
                { header: "School Year", key: "schoolYear" },
                { header: "Summer", key: "summer" },
                { header: "Weekends", key: "weekends" },
                { header: "Intensity", key: "intensity" },
              ]}
              data={timeCommitments}
            />
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Can Students Do Both?">
        <p className="text-gray-700 mb-6">
          Some ambitious students successfully participate in both programs.
          Here are common approaches:
        </p>

        <div className="space-y-6">
          {bothPrograms.map((option, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {option.scenario}
              </h3>
              <p className="text-green-800 mb-4">{option.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">
                    Approach:
                  </h4>
                  <p className="text-green-700 text-sm mb-3">
                    {option.approach}
                  </p>

                  <h4 className="font-semibold text-green-900 mb-2">
                    Benefits:
                  </h4>
                  <ul className="space-y-1">
                    {option.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-green-700 text-sm"
                      >
                        <Star className="w-3 h-3 mt-0.5 text-green-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 mb-2">
                    Considerations:
                  </h4>
                  <ul className="space-y-1">
                    {option.considerations.map((consideration, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-green-700 text-sm"
                      >
                        <Clock className="w-3 h-3 mt-0.5 text-green-600" />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Decision-Making Checklist">
        <p className="text-gray-700 mb-6">
          Consider these factors to help determine which program aligns better
          with your child's needs and your family's situation.
        </p>

        <BlogChecklist
          title="Program Selection Factors"
          description="Check the factors that apply to your situation"
          items={decisionFactors}
        />
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Making Your Choice">
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 rounded-lg p-8 text-center">
          <Trophy className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Both Paths Lead to Success
          </h3>
          <p className="text-gray-700 mb-6">
            The most important factor is sustained engagement in STEM learning.
            Whether through PLTW's structured curriculum or FIRST Robotics'
            competitive environment, what matters most is your child's
            enthusiasm and commitment.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> You can always start with one program
              and add or switch later. The goal is building STEM skills and
              passion, not choosing perfectly from the start.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
