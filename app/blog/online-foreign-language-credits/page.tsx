import React from 'react';

import {
  BookOpen,
  CheckCircle,
  Globe,
  Monitor,
  Star,
  Target,
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
import { ProviderGrid } from '../components/ProviderGrid';

export const metadata: Metadata = {
  title: "Online Foreign Language Credits for Middle School | Complete Guide",
  description:
    "Complete guide to earning high school foreign language credits online during middle school years.",
  keywords: [
    "online foreign language",
    "language credits",
    "high school credit",
    "language learning",
    "online courses",
    "foreign language requirement",
    "language education",
    "virtual language classes",
    "language programs",
    "credit acceleration",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Online Foreign Language Credits for Middle School | Complete Guide",
    description:
      "Complete guide to earning high school foreign language credits online during middle school years.",
    images: ["/blog/susan-wilkinson-F8tGmG1T2rg-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-08T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "online-foreign-language-credits",
  shortName: "Online Languages",
  name: "Online Foreign Language Credits for Middle School",
  excerpt:
    "Complete guide to earning high school foreign language credits online during middle school years.",
  date: new Date("2025-06-08"),
  author: "Education Team",
  readingTime: 8,
  slug: "online-foreign-language-credits",
  image: "/blog/susan-wilkinson-F8tGmG1T2rg-unsplash.jpg",
  keywords: [
    "online foreign language",
    "language credits",
    "high school credit",
    "language learning",
    "online courses",
    "foreign language requirement",
    "language education",
    "virtual language classes",
    "language programs",
    "credit acceleration",
  ],
};

const benefits = [
  {
    benefit: "Early High School Credit",
    description: "Get ahead on graduation requirements",
    details: [
      "Count toward high school foreign language requirement",
      "Create space for additional electives later",
      "Demonstrate academic commitment",
      "Build stronger college application profile",
    ],
  },
  {
    benefit: "Flexible Scheduling",
    description: "Learn at your own pace and schedule",
    details: [
      "Work around school and extracurricular activities",
      "Progress faster or slower as needed",
      "Study during summer breaks",
      "Continue learning during school year",
    ],
  },
  {
    benefit: "Advanced Pathway Options",
    description: "Opens doors to higher-level language courses",
    details: [
      "Enter Level 2 or 3 in high school",
      "Access to AP language courses earlier",
      "Opportunity for dual enrollment",
      "Better preparation for language immersion programs",
    ],
  },
  {
    benefit: "Technology Integration",
    description: "Modern language learning with interactive tools",
    details: [
      "Speech recognition for pronunciation practice",
      "Interactive games and activities",
      "Cultural immersion through multimedia",
      "Real-time feedback and assessment",
    ],
  },
];

const languageOptions = [
  {
    language: "Spanish",
    availability: "Widely Available",
    difficulty: "Moderate",
    advantages: [
      "Most commonly offered",
      "Strong job market demand",
      "Cultural connections in many US regions",
      "Gateway to other Romance languages",
    ],
    providers: [
      "Rosetta Stone Education",
      "FLVS",
      "BYU Independent Study",
      "Edgenuity",
    ],
  },
  {
    language: "French",
    availability: "Common",
    difficulty: "Moderate",
    advantages: [
      "International business language",
      "Rich cultural connections",
      "Preparation for European travel/study",
      "Academic prestige",
    ],
    providers: [
      "FLVS",
      "BYU Independent Study",
      "University of Missouri",
      "Edgenuity",
    ],
  },
  {
    language: "German",
    availability: "Limited",
    difficulty: "Challenging",
    advantages: [
      "Strong in STEM fields",
      "European business connections",
      "Rich philosophical and scientific traditions",
      "Less commonly studied (stands out)",
    ],
    providers: [
      "BYU Independent Study",
      "University of Missouri",
      "Local university partnerships",
    ],
  },
  {
    language: "Mandarin Chinese",
    availability: "Growing",
    difficulty: "Very Challenging",
    advantages: [
      "Fastest growing business language",
      "Cultural understanding of major world power",
      "Unique cognitive benefits",
      "Impressive to colleges",
    ],
    providers: [
      "Chinese Learning Online",
      "BYU Independent Study",
      "Specialized programs",
    ],
  },
  {
    language: "Latin",
    availability: "Common",
    difficulty: "Challenging",
    advantages: [
      "Strong foundation for English vocabulary",
      "Preparation for medical/legal careers",
      "Enhanced understanding of Romance languages",
      "Academic rigor demonstration",
    ],
    providers: [
      "BYU Independent Study",
      "University partnerships",
      "Classical schools",
    ],
  },
];

const topProviders = [
  {
    name: "Florida Virtual School (FLVS)",
    type: "Public Online School",
    cost: "Free for FL residents, fees for out-of-state",
    strengths: [
      "Fully accredited courses",
      "Experienced online teachers",
      "Comprehensive curriculum",
      "Strong student support",
    ],
    languages: ["Spanish", "French", "German", "Latin"],
    requirements: "Must be enrolled in school, parent/counselor approval",
  },
  {
    name: "BYU Independent Study",
    type: "University Program",
    cost: "$169-199 per semester",
    strengths: [
      "University-level rigor",
      "Self-paced learning",
      "Strong academic reputation",
      "Detailed curriculum",
    ],
    languages: [
      "Spanish",
      "French",
      "German",
      "Portuguese",
      "Latin",
      "Chinese",
    ],
    requirements: "Parent/counselor approval, self-motivated students",
  },
  {
    name: "Edgenuity",
    type: "Commercial Provider",
    cost: "Varies by district/school",
    strengths: [
      "Interactive multimedia",
      "Adaptive learning technology",
      "Progress tracking",
      "Engaging content",
    ],
    languages: ["Spanish", "French", "German"],
    requirements: "School or district partnership",
  },
  {
    name: "University of Missouri",
    type: "University Program",
    cost: "$300-400 per course",
    strengths: [
      "University credit option",
      "Rigorous academics",
      "Flexible pacing",
      "Personal instructor support",
    ],
    languages: ["Spanish", "French", "German", "Latin"],
    requirements: "High academic standards, counselor approval",
  },
];

const successStrategies = [
  {
    strategy: "Set Clear Goals",
    description:
      "Define what you want to achieve with online language learning",
    steps: [
      "Determine credit requirements for your high school",
      "Decide on target proficiency level",
      "Set realistic timeline for completion",
      "Identify long-term language learning goals",
    ],
  },
  {
    strategy: "Create Study Structure",
    description: "Establish consistent routines for online language learning",
    steps: [
      "Schedule daily practice time",
      "Create dedicated study space",
      "Use calendar reminders for assignments",
      "Set weekly progress check-ins",
    ],
  },
  {
    strategy: "Supplement with Real Practice",
    description: "Go beyond online coursework for authentic experience",
    steps: [
      "Find conversation partners or language exchange",
      "Watch movies/shows in target language",
      "Listen to music and podcasts",
      "Join online language communities",
    ],
  },
  {
    strategy: "Stay Motivated",
    description: "Maintain enthusiasm throughout the course",
    steps: [
      "Set short-term milestones and rewards",
      "Track progress visually",
      "Connect with the culture behind the language",
      "Share achievements with family and friends",
    ],
  },
];

const selectionCriteria = [
  {
    id: "accreditation",
    text: "Verify the program is accredited and credits transfer",
    completed: false,
  },
  {
    id: "school-approval",
    text: "Get approval from current school counselor",
    completed: false,
  },
  {
    id: "cost-budget",
    text: "Understand all costs and budget accordingly",
    completed: false,
  },
  {
    id: "time-commitment",
    text: "Realistically assess time commitment needed",
    completed: false,
  },
  {
    id: "tech-requirements",
    text: "Ensure you have necessary technology and internet",
    completed: false,
  },
  {
    id: "support-system",
    text: "Confirm availability of teacher/tutor support",
    completed: false,
  },
  {
    id: "course-quality",
    text: "Research course quality and student reviews",
    completed: false,
  },
  {
    id: "transcript-process",
    text: "Understand how credits will appear on transcript",
    completed: false,
  },
];

const challenges = [
  {
    challenge: "Self-Motivation Required",
    description: "Online learning demands higher self-discipline",
    solutions: [
      "Create accountability partnerships",
      "Use digital planning tools",
      "Set up regular check-ins with parents",
      "Join online study groups",
    ],
  },
  {
    challenge: "Limited Speaking Practice",
    description: "Conversational skills may lag behind other areas",
    solutions: [
      "Use video chat with native speakers",
      "Participate in online conversation clubs",
      "Practice with language learning apps",
      "Record yourself speaking regularly",
    ],
  },
  {
    challenge: "Technical Issues",
    description: "Technology problems can disrupt learning",
    solutions: [
      "Have backup internet access",
      "Keep contact information for tech support",
      "Download materials when possible",
      "Use multiple devices if available",
    ],
  },
  {
    challenge: "Isolation from Peers",
    description: "Missing collaborative learning experience",
    solutions: [
      "Connect with other online language learners",
      "Form study groups virtually",
      "Participate in online cultural events",
      "Share progress with school language teachers",
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question:
      "Will online foreign language credits count toward high school graduation?",
    answer:
      "Most accredited online language courses count toward graduation requirements, but you must verify with your high school counselor before enrollment. Each district has different policies for accepting external credits.",
    icon: "help-circle",
  },
  {
    question:
      "How much time should my middle schooler spend on online language learning daily?",
    answer:
      "Most programs recommend 30-45 minutes daily for steady progress. Middle schoolers typically need more frequent, shorter sessions rather than long study periods. Consistency is more important than duration.",
    icon: "help-circle",
  },
  {
    question:
      "Are online language courses as effective as traditional classroom instruction?",
    answer:
      "Online courses can be very effective, especially for motivated students. However, they require more self-discipline and may need supplementation with conversation practice. The key is finding a high-quality program with interactive elements.",
    icon: "help-circle",
  },
  {
    question: "What if my child struggles with the online format?",
    answer:
      "Consider supplemental tutoring, switching to a program with more teacher interaction, or waiting until high school for traditional classroom instruction. Online learning isn't ideal for every student or learning style.",
    icon: "help-circle",
  },
  {
    question:
      "Can my child test out of language requirements with online learning?",
    answer:
      "Some students use online courses to prepare for proficiency exams or placement tests. However, completing a full course sequence usually provides better preparation for advanced language study.",
    icon: "help-circle",
  },
  {
    question:
      "How do online language courses handle speaking and listening skills?",
    answer:
      "Quality programs include speech recognition technology, recorded conversations, and virtual speaking activities. However, students may need additional conversation practice with tutors or language exchange partners.",
    icon: "help-circle",
  },
];

export default function OnlineForeignLanguageCredits() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Online Foreign Language Learning for Middle Schoolers">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Earning High School Language Credits Online
            </h2>
            <p className="text-gray-600">
              Complete guide to online foreign language courses for middle
              school students
            </p>
          </div>
        </div>

        <Alert type="info" icon={BookOpen}>
          <div>
            <strong>Why Consider Online Language Learning?</strong> Online
            foreign language courses allow middle schoolers to earn high school
            credits early, explore languages not offered at their school, and
            learn at their own pace with modern technology.
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Benefits of Online Language Learning">
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.benefit}
              </h3>
              <p className="text-gray-700 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Language Options and Considerations">
        <p className="text-gray-700 mb-6">
          Different languages offer unique advantages and challenges. Consider
          your child's interests, career goals, and learning style when
          choosing.
        </p>

        <div className="space-y-6">
          {languageOptions.map((language, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {language.language}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {language.availability}
                  </span>
                  <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {language.difficulty}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Advantages:
                  </h4>
                  <ul className="space-y-1">
                    {language.advantages.map((advantage, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <Star className="w-3 h-3 mt-0.5 text-yellow-600" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Common Providers:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {language.providers.map((provider, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Top Online Language Providers">
        <ProviderGrid providers={topProviders} />
      </BlogSection>

      <BlogSection title="Success Strategies">
        <div className="space-y-6">
          {successStrategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {strategy.strategy}
              </h3>
              <p className="text-green-800 mb-4">{strategy.description}</p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Action Steps:
                </h4>
                <ol className="space-y-2">
                  {strategy.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <div className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
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

      <BlogSection title="Common Challenges and Solutions">
        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                {challenge.challenge}
              </h3>
              <p className="text-yellow-800 mb-4">{challenge.description}</p>
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Solutions:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {challenge.solutions.map((solution, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-yellow-700 text-sm"
                    >
                      <Target className="w-3 h-3 mt-0.5 text-yellow-600" />
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Selection Checklist">
        <BlogChecklist
          title="Choosing an Online Language Program"
          description="Complete these steps before enrolling in an online language course"
          items={selectionCriteria}
        />
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Start Your Language Journey">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 text-center">
          <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Begin?
          </h3>
          <p className="text-gray-700 mb-6">
            Online foreign language learning opens doors to new cultures, career
            opportunities, and academic advancement. Start with careful research
            and realistic expectations.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Next Step:</strong> Schedule a meeting with your school
              counselor to discuss credit transfer policies and course options.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
