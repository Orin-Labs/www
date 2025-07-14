import React from 'react';

import {
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Star,
  Sun,
  Target,
  Users,
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
  title: "Summer Programs for High School Credit | Complete Guide 2025",
  description:
    "Comprehensive guide to summer programs that offer high school credit opportunities for middle school students.",
  keywords: [
    "summer programs",
    "high school credit",
    "summer courses",
    "academic acceleration",
    "summer learning",
    "credit recovery",
    "summer school",
    "enrichment programs",
    "summer academics",
    "educational programs",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Summer Programs for High School Credit | Complete Guide 2025",
    description:
      "Comprehensive guide to summer programs that offer high school credit opportunities for middle school students.",
    images: ["/blog/laura-vinck-Hyu76loQLdk-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-11T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "summer-programs-high-school-credit",
  shortName: "Summer Programs",
  name: "Summer Programs for High School Credit",
  excerpt:
    "Comprehensive guide to summer programs that offer high school credit opportunities for middle school students.",
  date: new Date("2025-06-11"),
  author: "Education Team",
  readingTime: 11,
  slug: "summer-programs-high-school-credit",
  image: "/blog/laura-vinck-Hyu76loQLdk-unsplash.jpg",
  keywords: [
    "summer programs",
    "high school credit",
    "summer courses",
    "academic acceleration",
    "summer learning",
    "credit recovery",
    "summer school",
    "enrichment programs",
    "summer academics",
    "educational programs",
  ],
};

const programBenefits = [
  {
    benefit: "Academic Acceleration",
    description: "Get ahead on high school requirements",
    advantages: [
      "Free up schedule for electives in high school",
      "Graduate early or take more advanced courses",
      "Reduce course load during school year",
      "Explore subjects not offered at your school",
    ],
  },
  {
    benefit: "College Preparation",
    description: "Experience college-level academics early",
    advantages: [
      "Develop independent learning skills",
      "Experience different teaching styles",
      "Build confidence in academic abilities",
      "Create competitive college applications",
    ],
  },
  {
    benefit: "Skill Development",
    description: "Focus intensively on specific subjects",
    advantages: [
      "Deep dive into areas of interest",
      "Develop specialized knowledge",
      "Build portfolio projects",
      "Master challenging concepts with focused attention",
    ],
  },
  {
    benefit: "Social Growth",
    description: "Meet like-minded peers from diverse backgrounds",
    advantages: [
      "Form lasting friendships",
      "Experience residential independence",
      "Learn from peers with different perspectives",
      "Build confidence in new environments",
    ],
  },
];

const programTypes = [
  {
    type: "University-Based Programs",
    description: "Programs hosted by colleges and universities",
    examples: [
      "Johns Hopkins CTY",
      "Northwestern CTD",
      "Duke TIP",
      "Stanford EPGY",
      "Brown University Pre-College",
    ],
    creditTypes: [
      "University credit",
      "High school credit",
      "Certificate programs",
    ],
    typical: "2-6 weeks, residential or commuter",
    cost: "$2,000-8,000",
    bestFor: "Academically advanced students seeking rigorous coursework",
  },
  {
    type: "Online Programs",
    description: "Virtual courses offering flexibility",
    examples: [
      "BYU Independent Study",
      "Florida Virtual School",
      "University of Missouri Online",
      "Edgenuity",
      "APEX Learning",
    ],
    creditTypes: ["High school credit", "NCAA approved", "State accredited"],
    typical: "Self-paced or 4-8 weeks",
    cost: "$200-800 per course",
    bestFor: "Self-motivated students needing schedule flexibility",
  },
  {
    type: "Local School Districts",
    description: "Summer school programs in your area",
    examples: [
      "District summer schools",
      "Community college dual enrollment",
      "Regional education cooperatives",
      "Magnet school programs",
      "Charter school offerings",
    ],
    creditTypes: ["High school credit", "Dual enrollment", "State approved"],
    typical: "3-6 weeks, daily classes",
    cost: "$100-1,500",
    bestFor: "Students wanting local, affordable options",
  },
  {
    type: "Specialized Academies",
    description: "Subject-specific intensive programs",
    examples: [
      "STEM academies",
      "Arts conservatories",
      "Language immersion programs",
      "Leadership institutes",
      "Business academies",
    ],
    creditTypes: [
      "Portfolio credit",
      "Certificate programs",
      "Industry certifications",
    ],
    typical: "1-4 weeks, intensive focus",
    cost: "$500-5,000",
    bestFor: "Students with specific career interests or talents",
  },
];

const subjectAreas = [
  {
    subject: "Mathematics",
    popularCourses: [
      "Algebra 1",
      "Geometry",
      "Algebra 2",
      "Pre-Calculus",
      "Statistics",
    ],
    accelerationValue: "High - enables advanced math track",
    timeCommitment: "3-6 weeks intensive",
    considerations: [
      "Strong foundation needed for success",
      "Fast pace requires daily practice",
      "Sequential nature means gaps cause problems",
      "Essential for STEM pathways",
    ],
  },
  {
    subject: "Foreign Languages",
    popularCourses: [
      "Spanish 1",
      "French 1",
      "German 1",
      "Mandarin 1",
      "Latin 1",
    ],
    accelerationValue: "Medium - frees up schedule for electives",
    timeCommitment: "4-8 weeks or year-long online",
    considerations: [
      "Immersion environment enhances learning",
      "Daily practice essential for retention",
      "Cultural components often included",
      "May need continued practice to maintain skills",
    ],
  },
  {
    subject: "Sciences",
    popularCourses: [
      "Biology",
      "Chemistry",
      "Physics",
      "Environmental Science",
      "Anatomy",
    ],
    accelerationValue: "High - enables AP sciences earlier",
    timeCommitment: "4-6 weeks with lab components",
    considerations: [
      "Lab experiences crucial for understanding",
      "Fast pace covers full year curriculum",
      "Strong math skills often required",
      "Excellent for pre-med pathways",
    ],
  },
  {
    subject: "Social Studies",
    popularCourses: [
      "World History",
      "US History",
      "Geography",
      "Psychology",
      "Economics",
    ],
    accelerationValue: "Medium - creates flexibility in schedule",
    timeCommitment: "3-6 weeks",
    considerations: [
      "Reading and writing intensive",
      "Discussion-based learning common",
      "Current events integration",
      "Develops critical thinking skills",
    ],
  },
  {
    subject: "English/Language Arts",
    popularCourses: [
      "English 9",
      "Creative Writing",
      "Literature",
      "Speech",
      "Journalism",
    ],
    accelerationValue: "Medium - enables advanced English courses",
    timeCommitment: "4-6 weeks",
    considerations: [
      "Heavy reading and writing requirements",
      "Peer collaboration important",
      "Skills transfer to all subjects",
      "Portfolio development opportunities",
    ],
  },
];

const selectionCriteria = [
  {
    id: "accreditation",
    text: "Verify the program is accredited and credits transfer to your high school",
    completed: false,
  },
  {
    id: "academic-readiness",
    text: "Ensure your child meets academic prerequisites",
    completed: false,
  },
  {
    id: "schedule-fit",
    text: "Confirm program dates work with family schedule",
    completed: false,
  },
  {
    id: "cost-budget",
    text: "Calculate total costs including tuition, housing, meals, and travel",
    completed: false,
  },
  {
    id: "support-systems",
    text: "Understand available academic and personal support",
    completed: false,
  },
  {
    id: "housing-arrangements",
    text: "Research residential life or commuter options",
    completed: false,
  },
  {
    id: "credit-policies",
    text: "Understand how credits will appear on transcript",
    completed: false,
  },
  {
    id: "backup-plans",
    text: "Have alternatives if first choice doesn't work out",
    completed: false,
  },
];

const applicationTimeline = [
  {
    timeframe: "September - October",
    focus: "Research and Planning",
    tasks: [
      "Research program options and requirements",
      "Attend information sessions or webinars",
      "Begin gathering application materials",
      "Discuss options with school counselor",
    ],
  },
  {
    timeframe: "November - December",
    focus: "Application Preparation",
    tasks: [
      "Request teacher recommendations",
      "Prepare personal statements or essays",
      "Gather transcripts and test scores",
      "Complete application forms",
    ],
  },
  {
    timeframe: "January - February",
    focus: "Application Submission",
    tasks: [
      "Submit applications before deadlines",
      "Apply for financial aid if available",
      "Schedule interviews if required",
      "Follow up on missing materials",
    ],
  },
  {
    timeframe: "March - April",
    focus: "Decision and Preparation",
    tasks: [
      "Receive admission decisions",
      "Make final program selections",
      "Complete enrollment requirements",
      "Arrange housing and travel plans",
    ],
  },
  {
    timeframe: "May - June",
    focus: "Final Preparations",
    tasks: [
      "Complete prerequisite coursework",
      "Prepare academically for intensive program",
      "Organize materials and supplies",
      "Review program expectations",
    ],
  },
];

const costBreakdown = [
  {
    category: "Tuition",
    range: "$200-8,000",
    factors: [
      "Program prestige and reputation",
      "Course difficulty and specialization",
      "Instructor qualifications",
      "Technology and resources provided",
    ],
  },
  {
    category: "Housing & Meals",
    range: "$1,000-4,000",
    factors: [
      "Dormitory vs. hotel accommodations",
      "Meal plan vs. individual meals",
      "Location and amenities",
      "Program duration",
    ],
  },
  {
    category: "Travel",
    range: "$100-2,000",
    factors: [
      "Distance from home",
      "Transportation method",
      "Travel timing and flexibility",
      "Airport transfers",
    ],
  },
  {
    category: "Materials & Supplies",
    range: "$50-500",
    factors: [
      "Required textbooks and software",
      "Lab supplies and equipment",
      "Technology requirements",
      "Personal items and clothing",
    ],
  },
];

const successTips = [
  {
    category: "Academic Preparation",
    tips: [
      "Review prerequisite material before program starts",
      "Develop strong study habits and time management",
      "Practice note-taking and active learning strategies",
      "Build stamina for intensive daily schedules",
    ],
  },
  {
    category: "Social Preparation",
    tips: [
      "Practice introducing yourself and making conversation",
      "Prepare to share your interests and goals",
      "Be open to different perspectives and backgrounds",
      "Plan how to stay connected with new friends",
    ],
  },
  {
    category: "Independence Building",
    tips: [
      "Practice managing your own schedule",
      "Learn to advocate for yourself when confused",
      "Develop problem-solving skills",
      "Build confidence in new environments",
    ],
  },
  {
    category: "Maximizing Benefits",
    tips: [
      "Engage actively in all activities",
      "Ask questions and seek extra help when needed",
      "Connect learning to your long-term goals",
      "Document your experience for future applications",
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question:
      "How do I know if my middle schooler is ready for a summer credit program?",
    answer:
      "Look for strong academic performance, self-motivation, ability to handle challenging coursework, and comfort with independence. Most programs have academic prerequisites and age requirements.",
    icon: "help-circle",
  },
  {
    question:
      "Will summer program credits definitely transfer to my child's high school?",
    answer:
      "Not always. Check with your school counselor before enrolling. Get written confirmation of credit transfer policies. Some schools accept credits conditionally or require validation exams.",
    icon: "help-circle",
  },
  {
    question: "Are expensive programs always better than affordable ones?",
    answer:
      "Not necessarily. Cost often reflects prestige, housing, and amenities rather than educational quality. Focus on program fit, accreditation, and learning outcomes rather than price alone.",
    icon: "help-circle",
  },
  {
    question: "What if my child struggles in a summer program?",
    answer:
      "Most programs offer academic support, tutoring, and counseling. Communicate early with program staff about concerns. Remember that struggle can be part of growth, but persistent difficulties may signal the program isn't the right fit.",
    icon: "help-circle",
  },
  {
    question:
      "Should my child take easy courses to boost GPA or challenging ones for growth?",
    answer:
      "Balance is key. One challenging course that interests them often works better than multiple easy ones. Focus on genuine learning and skill development rather than just GPA impact.",
    icon: "help-circle",
  },
  {
    question:
      "How do I prepare my child for the independence required in residential programs?",
    answer:
      "Practice self-advocacy, time management, and problem-solving at home. Start with overnight experiences away from family. Discuss expectations about homesickness and challenging situations.",
    icon: "help-circle",
  },
];

export default function SummerProgramsHighSchoolCredit() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Summer Programs for High School Credit">
        <div className="flex items-center gap-3 mb-6">
          <Sun className="w-8 h-8 text-yellow-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Accelerate Learning with Summer Programs
            </h2>
            <p className="text-gray-600">
              Comprehensive guide to earning high school credits during summer
              break
            </p>
          </div>
        </div>

        <Alert type="info" icon={BookOpen}>
          <div>
            <strong>Why Summer Credit Programs?</strong> Summer programs allow
            students to accelerate their academic progress, explore interests
            deeply, and create more flexibility in their high school schedules
            for advanced courses or electives.
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Benefits of Summer Credit Programs">
        <div className="grid md:grid-cols-2 gap-6">
          {programBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.benefit}
              </h3>
              <p className="text-gray-700 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.advantages.map((advantage, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <CheckCircle className="w-3 h-3 mt-0.5 text-green-600" />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Types of Summer Credit Programs">
        <div className="space-y-6">
          {programTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {type.type}
              </h3>
              <p className="text-gray-700 mb-4">{type.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-gray-700 text-sm">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Credit Types:
                  </h4>
                  <ul className="space-y-1">
                    {type.creditTypes.map((credit, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <Star className="w-3 h-3 text-yellow-600" />
                        {credit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
                <div>
                  <span className="font-semibold text-gray-900 text-sm">
                    Duration:
                  </span>
                  <p className="text-gray-700 text-sm">{type.typical}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">
                    Cost Range:
                  </span>
                  <p className="text-gray-700 text-sm">{type.cost}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">
                    Best For:
                  </span>
                  <p className="text-gray-700 text-sm">{type.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Popular Subject Areas">
        <p className="text-gray-700 mb-6">
          Different subjects offer varying benefits for academic acceleration.
          Here's what to consider for each area:
        </p>

        <div className="space-y-6">
          {subjectAreas.map((subject, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {subject.subject}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Popular Courses:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.popularCourses.map((course, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Program Details:
                  </h4>
                  <p className="text-blue-700 text-sm mb-1">
                    <strong>Acceleration Value:</strong>{" "}
                    {subject.accelerationValue}
                  </p>
                  <p className="text-blue-700 text-sm">
                    <strong>Time Commitment:</strong> {subject.timeCommitment}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  Key Considerations:
                </h4>
                <ul className="space-y-1">
                  {subject.considerations.map((consideration, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-blue-700 text-sm"
                    >
                      <Target className="w-3 h-3 mt-0.5 text-blue-600" />
                      {consideration}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Application Timeline">
        <p className="text-gray-700 mb-6">
          Planning ahead is crucial for summer program success. Follow this
          timeline to stay organized:
        </p>

        <div className="space-y-4">
          {applicationTimeline.map((period, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {period.timeframe}
                  </h3>
                  <p className="text-orange-600 font-medium">{period.focus}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {period.tasks.map((task, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Cost Considerations">
        <p className="text-gray-700 mb-6">
          Understanding all costs helps families budget effectively and choose
          programs wisely.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {costBreakdown.map((cost, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-yellow-900">
                  {cost.category}
                </h3>
                <span className="text-yellow-800 font-medium">
                  {cost.range}
                </span>
              </div>
              <ul className="space-y-2">
                {cost.factors.map((factor, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-yellow-700 text-sm"
                  >
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Setting Your Child Up for Success">
        <div className="space-y-6">
          {successTips.map((category, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-700">
                    <Users className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Selection Checklist">
        <BlogChecklist
          title="Summer Program Selection Checklist"
          description="Complete these steps before committing to a summer credit program"
          items={selectionCriteria}
        />
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Make This Summer Count">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8 text-center">
          <GraduationCap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Invest in Your Child's Future
          </h3>
          <p className="text-gray-700 mb-6">
            Summer credit programs offer unique opportunities for academic
            growth, personal development, and future preparation. Choose wisely,
            prepare thoroughly, and watch your child thrive.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> The best program is one that matches
              your child's academic level, interests, and growth goals. Success
              comes from fit, not prestige.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
