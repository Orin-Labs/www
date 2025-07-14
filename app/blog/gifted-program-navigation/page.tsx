import React from 'react';

import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
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
import { DecisionTree } from '../components/DecisionTree';

export const metadata: Metadata = {
  title: "Gifted Program Navigation Guide for Parents",
  description:
    "A comprehensive guide to understanding, accessing, and maximizing gifted education opportunities.",
  keywords: [
    "gifted programs",
    "talented and gifted",
    "gifted education",
    "advanced learners",
    "gifted services",
    "educational excellence",
    "gifted identification",
    "advanced learning",
    "gifted advocacy",
    "intellectual giftedness",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Gifted Program Navigation Guide for Parents",
    description:
      "A comprehensive guide to understanding, accessing, and maximizing gifted education opportunities.",
    images: ["/blog/laura-vinck-Hyu76loQLdk-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-05T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "gifted-program-navigation",
  shortName: "Gifted Programs",
  name: "Gifted Program Navigation Guide for Parents",
  excerpt:
    "A comprehensive guide to understanding, accessing, and maximizing gifted education opportunities.",
  date: new Date("2025-06-05"),
  author: "Education Team",
  readingTime: 11,
  slug: "gifted-program-navigation",
  image: "/blog/laura-vinck-Hyu76loQLdk-unsplash.jpg",
  keywords: [
    "gifted programs",
    "talented and gifted",
    "gifted education",
    "advanced learners",
    "gifted services",
    "educational excellence",
    "gifted identification",
    "advanced learning",
    "gifted advocacy",
    "intellectual giftedness",
  ],
};

const giftedCharacteristics = [
  {
    category: "Cognitive Abilities",
    traits: [
      "Advanced reasoning and problem-solving skills",
      "Exceptional memory and quick learning",
      "Abstract thinking capabilities",
      "Complex pattern recognition",
      "Advanced vocabulary and verbal skills",
      "Ability to make connections across subjects",
    ],
  },
  {
    category: "Learning Preferences",
    traits: [
      "Prefers working independently",
      "Enjoys complex, challenging tasks",
      "Learns quickly with minimal instruction",
      "Shows intense interest in specific topics",
      "Questions authority and conventional thinking",
      "Seeks depth over breadth in learning",
    ],
  },
  {
    category: "Social-Emotional Traits",
    traits: [
      "High sensitivity to fairness and justice",
      "Perfectionist tendencies",
      "Intense emotions and reactions",
      "May struggle with social relationships",
      "Strong sense of humor, often advanced",
      "Leadership qualities in areas of interest",
    ],
  },
  {
    category: "Creative Abilities",
    traits: [
      "Original thinking and problem-solving",
      "Imaginative and inventive",
      "Enjoys creative expression",
      "Thinks outside conventional boundaries",
      "Generates many ideas quickly",
      "Sees multiple solutions to problems",
    ],
  },
];

const programTypes = [
  {
    type: "Pull-Out Programs",
    description: "Students leave regular class for specialized instruction",
    frequency: "1-3 times per week",
    pros: [
      "Maintains peer relationships in regular class",
      "Focused gifted instruction time",
      "Relatively easy to implement",
      "Cost-effective for schools",
    ],
    cons: [
      "Limited time for advanced instruction",
      "May miss regular class content",
      "Inconsistent curriculum integration",
      "Potential social isolation",
    ],
    bestFor:
      "Students who need enrichment but function well in regular classes",
  },
  {
    type: "Full-Time Gifted Classes",
    description: "Self-contained classrooms with only gifted students",
    frequency: "Full academic day",
    pros: [
      "Curriculum designed for advanced learners",
      "Intellectual peer group",
      "Consistent high expectations",
      "Specialized teacher training",
    ],
    cons: [
      "May lack diverse perspectives",
      "Potential for increased pressure",
      "Less interaction with typical peers",
      "Limited availability",
    ],
    bestFor: "Highly gifted students who need comprehensive academic challenge",
  },
  {
    type: "Magnet Schools",
    description: "Entire schools focused on gifted education",
    frequency: "Full academic program",
    pros: [
      "Specialized facilities and resources",
      "Comprehensive gifted curriculum",
      "Experienced gifted educators",
      "Strong academic culture",
    ],
    cons: [
      "Competitive admission process",
      "May require transportation",
      "High academic pressure",
      "Limited geographic availability",
    ],
    bestFor: "Families committed to intensive gifted programming",
  },
  {
    type: "Cluster Grouping",
    description: "Small groups of gifted students in regular classes",
    frequency: "Daily within regular instruction",
    pros: [
      "Maintains diverse classroom",
      "Flexible grouping options",
      "Differentiated instruction",
      "Natural peer interaction",
    ],
    cons: [
      "Requires skilled teachers",
      "May not provide sufficient challenge",
      "Inconsistent implementation",
      "Limited specialized resources",
    ],
    bestFor: "Students who benefit from both challenge and diversity",
  },
];

const identificationProcess = [
  {
    step: "Initial Referral",
    description: "Teacher, parent, or self-referral initiates the process",
    timeline: "September - November",
    requirements: [
      "Referral form completion",
      "Initial screening criteria met",
      "Supporting documentation gathered",
      "Parent consent obtained",
    ],
    parentActions: [
      "Submit referral if teacher hasn't",
      "Provide supporting evidence",
      "Request meeting with teacher",
      "Document child's abilities",
    ],
  },
  {
    step: "Comprehensive Evaluation",
    description: "Multiple assessments evaluate student abilities",
    timeline: "December - February",
    requirements: [
      "Cognitive ability testing",
      "Achievement assessments",
      "Behavioral observations",
      "Portfolio review",
    ],
    parentActions: [
      "Prepare child for testing",
      "Provide home examples",
      "Complete parent questionnaires",
      "Maintain communication with school",
    ],
  },
  {
    step: "Decision Making",
    description: "Committee reviews data and makes placement decision",
    timeline: "March - April",
    requirements: [
      "Committee meeting convened",
      "Multiple criteria considered",
      "Decision documented",
      "Parents notified",
    ],
    parentActions: [
      "Attend committee meeting",
      "Ask questions about process",
      "Understand appeal options",
      "Plan for next steps",
    ],
  },
  {
    step: "Program Placement",
    description: "Student placed in appropriate gifted services",
    timeline: "May - August",
    requirements: [
      "Services matched to needs",
      "IEP or 504 plan developed",
      "Teacher notification",
      "Transition planning",
    ],
    parentActions: [
      "Discuss service options",
      "Understand program expectations",
      "Prepare child for transition",
      "Establish communication plan",
    ],
  },
];

const advocacyTips = [
  {
    title: "Build Relationships",
    strategies: [
      "Establish positive communication with teachers",
      "Volunteer in school activities",
      "Join parent organizations",
      "Attend school board meetings",
    ],
  },
  {
    title: "Document Everything",
    strategies: [
      "Keep records of all communications",
      "Document child's abilities and needs",
      "Save examples of work",
      "Note behavioral observations",
    ],
  },
  {
    title: "Know Your Rights",
    strategies: [
      "Understand state gifted education laws",
      "Learn district policies",
      "Know appeal processes",
      "Understand funding sources",
    ],
  },
  {
    title: "Be Collaborative",
    strategies: [
      "Work with school as partner",
      "Offer solutions, not just problems",
      "Respect teacher expertise",
      "Focus on student needs",
    ],
  },
];

const commonChallenges = [
  {
    challenge: "Underachievement",
    description: "Child performs below ability level",
    solutions: [
      "Increase challenge level",
      "Address perfectionism",
      "Improve motivation",
      "Consider counseling",
    ],
  },
  {
    challenge: "Social Difficulties",
    description: "Trouble relating to age peers",
    solutions: [
      "Find intellectual peers",
      "Develop social skills",
      "Consider counseling",
      "Join gifted groups",
    ],
  },
  {
    challenge: "Perfectionism",
    description: "Unrealistic standards causing stress",
    solutions: [
      "Teach growth mindset",
      "Model mistake-making",
      "Reduce pressure",
      "Celebrate effort",
    ],
  },
  {
    challenge: "Boredom",
    description: "Lack of appropriate challenge",
    solutions: [
      "Request curriculum acceleration",
      "Provide enrichment activities",
      "Consider grade skipping",
      "Explore independent study",
    ],
  },
];

const parentChecklist = [
  {
    id: "research-options",
    text: "Research gifted program options in your district",
    completed: false,
  },
  {
    id: "observe-child",
    text: "Document your child's advanced abilities and behaviors",
    completed: false,
  },
  {
    id: "talk-to-teacher",
    text: "Discuss your child's needs with their current teacher",
    completed: false,
  },
  {
    id: "submit-referral",
    text: "Submit referral for gifted evaluation if appropriate",
    completed: false,
  },
  {
    id: "prepare-child",
    text: "Prepare your child for the evaluation process",
    completed: false,
  },
  {
    id: "attend-meetings",
    text: "Attend all school meetings and conferences",
    completed: false,
  },
  {
    id: "understand-services",
    text: "Understand available gifted services and supports",
    completed: false,
  },
  {
    id: "monitor-progress",
    text: "Regularly monitor your child's progress and satisfaction",
    completed: false,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How do I know if my child is gifted?",
    answer:
      "Look for characteristics like advanced reasoning, rapid learning, intense curiosity, and complex thinking. However, giftedness varies greatly. If you suspect your child might be gifted, discuss with teachers and consider formal evaluation.",
    icon: "help-circle",
  },
  {
    question: "What if my child wasn't identified but I think they're gifted?",
    answer:
      "You can request an evaluation at any time. Document your child's abilities, gather supporting evidence, and formally request testing. You have the right to request evaluation even if teachers disagree.",
    icon: "help-circle",
  },
  {
    question: "Are gifted programs elitist or discriminatory?",
    answer:
      "Well-designed gifted programs serve educational needs, not create elite groups. However, historical underrepresentation of minorities and low-income students is a valid concern. Many districts are working to improve identification and access.",
    icon: "help-circle",
  },
  {
    question: "Can giftedness be developed or is it innate?",
    answer:
      "Both nature and nurture play roles. While some abilities may be innate, proper education and environment can develop and enhance gifted potential. This is why appropriate programming is crucial.",
    icon: "help-circle",
  },
  {
    question: "What if there's no gifted program in my district?",
    answer:
      "Advocate for services, seek enrichment opportunities outside school, consider private options, or explore online programs. You can also work with teachers to provide differentiation within regular classrooms.",
    icon: "help-circle",
  },
  {
    question: "How do I support my gifted child at home?",
    answer:
      "Provide challenging activities, encourage questioning, support their interests, help with social-emotional needs, and maintain high but reasonable expectations. Remember that gifted children are still children.",
    icon: "help-circle",
  },
];

const decisionTreeData = {
  question: "Does your child show signs of giftedness?",
  options: [
    {
      answer: "Yes, multiple clear signs",
      result: {
        question: "Has your child been formally identified?",
        options: [
          {
            answer: "Yes, already identified",
            result:
              "Focus on maximizing current program benefits and monitoring progress",
          },
          {
            answer: "No, not yet identified",
            result: "Request formal evaluation and document abilities",
          },
        ],
      },
    },
    {
      answer: "Some signs, but unsure",
      result: {
        question: "Are you seeing academic or social challenges?",
        options: [
          {
            answer: "Yes, challenges present",
            result: "Consider informal assessment and discuss with teachers",
          },
          {
            answer: "No major challenges",
            result: "Monitor development and provide enrichment opportunities",
          },
        ],
      },
    },
    {
      answer: "No clear signs",
      result: "Continue supporting your child's individual learning needs",
    },
  ],
};

export default function GiftedProgramNavigation() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Understanding Gifted Education">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-8 h-8 text-yellow-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Navigating Gifted Programs
            </h2>
            <p className="text-gray-600">
              A complete guide to understanding and accessing gifted education
            </p>
          </div>
        </div>

        <Alert type="info" icon={BookOpen}>
          <div>
            <strong>What is Giftedness?</strong> Giftedness is exceptional
            ability or potential in one or more areas, requiring specialized
            educational services to develop that potential. It's not just about
            high IQ—it includes creativity, leadership, and specific academic
            talents.
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Recognizing Gifted Characteristics">
        <p className="text-gray-700 mb-6">
          Gifted children often display distinctive characteristics across
          multiple domains. Understanding these can help identify potential and
          advocate for appropriate services.
        </p>

        <div className="space-y-6">
          {giftedCharacteristics.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {category.traits.map((trait, traitIndex) => (
                  <div key={traitIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Types of Gifted Programs">
        <p className="text-gray-700 mb-6">
          Different program models serve different needs. Understanding these
          options helps you advocate for the best fit for your child.
        </p>

        <div className="space-y-8">
          {programTypes.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {program.type}
                </h3>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {program.frequency}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{program.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">
                    Advantages:
                  </h4>
                  <ul className="space-y-1">
                    {program.pros.map((pro, i) => (
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
                    {program.cons.map((con, i) => (
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
                  <strong>Best for:</strong> {program.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="The Identification Process">
        <p className="text-gray-700 mb-6">
          Understanding the identification process helps you navigate it
          effectively and advocate for your child.
        </p>

        <div className="space-y-6">
          {identificationProcess.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.step}
                  </h3>
                  <p className="text-purple-600 text-sm">{step.timeline}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{step.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    School Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {step.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <Target className="w-3 h-3 mt-0.5 text-purple-600" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Parent Actions:
                  </h4>
                  <ul className="space-y-2">
                    {step.parentActions.map((action, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <CheckCircle className="w-3 h-3 mt-0.5 text-green-600" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Should Your Child Be Evaluated?">
        <p className="text-gray-700 mb-6">
          Use this decision tree to help determine if gifted evaluation might be
          appropriate for your child.
        </p>
        <DecisionTree data={decisionTreeData} />
      </BlogSection>

      <BlogSection title="Advocacy Strategies">
        <p className="text-gray-700 mb-6">
          Effective advocacy requires preparation, persistence, and partnership.
          Here are proven strategies for supporting your gifted child.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {advocacyTips.map((tip, index) => (
            <div
              key={index}
              className="bg-orange-50 border border-orange-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-orange-900 mb-3">
                {tip.title}
              </h3>
              <ul className="space-y-2">
                {tip.strategies.map((strategy, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-orange-700"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                    <span className="text-sm">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Common Challenges and Solutions">
        <p className="text-gray-700 mb-6">
          Even with appropriate programming, gifted children may face unique
          challenges. Here are common issues and evidence-based solutions.
        </p>

        <div className="space-y-4">
          {commonChallenges.map((item, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                {item.challenge}
              </h3>
              <p className="text-yellow-800 mb-3">{item.description}</p>
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Solutions:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.solutions.map((solution, i) => (
                    <span
                      key={i}
                      className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm"
                    >
                      {solution}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Parent Action Checklist">
        <BlogChecklist
          title="Gifted Program Navigation Checklist"
          description="Use this checklist to guide your advocacy efforts"
          items={parentChecklist}
        />
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Next Steps">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8 text-center">
          <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Advocate for Your Child
          </h3>
          <p className="text-gray-700 mb-6">
            Remember that you are your child's best advocate. Trust your
            instincts, be persistent, and focus on your child's unique needs and
            potential.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Giftedness is not a privilege to be
              earned—it's a educational need to be served.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
