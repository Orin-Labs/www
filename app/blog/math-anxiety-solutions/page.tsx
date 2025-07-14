import React from 'react';

import {
  AlertTriangle,
  Brain,
  CheckCircle,
  Heart,
  Lightbulb,
  Shield,
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

export const metadata: Metadata = {
  title: "Math Anxiety Solutions for Middle School Students",
  description:
    "Practical strategies to help your middle schooler overcome math anxiety and build confidence in mathematics.",
  keywords: [
    "math anxiety",
    "math confidence",
    "math stress",
    "math fear",
    "math support",
    "math mindset",
    "math help",
    "math strategies",
    "math encouragement",
    "math success",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Math Anxiety Solutions for Middle School Students",
    description:
      "Practical strategies to help your middle schooler overcome math anxiety and build confidence in mathematics.",
    images: ["/blog/susan-wilkinson-u8ZT4aQUMhs-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-07-18T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "math-anxiety-solutions",
  shortName: "Math Anxiety",
  name: "Math Anxiety Solutions for Middle School Students",
  excerpt:
    "Practical strategies to help your middle schooler overcome math anxiety and build confidence in mathematics.",
  date: new Date("2025-07-18"),
  author: "Education Team",
  readingTime: 8,
  slug: "math-anxiety-solutions",
  image: "/blog/susan-wilkinson-u8ZT4aQUMhs-unsplash.jpg",
  keywords: [
    "math anxiety",
    "math confidence",
    "math stress",
    "math fear",
    "math support",
    "math mindset",
    "math help",
    "math strategies",
    "math encouragement",
    "math success",
  ],
};

const anxietySignsChecklist = [
  {
    id: "physical-symptoms",
    text: "Physical symptoms like sweating, nausea, or rapid heartbeat during math",
    completed: false,
  },
  {
    id: "avoidance",
    text: "Avoiding math homework or making excuses not to do it",
    completed: false,
  },
  {
    id: "negative-self-talk",
    text: "Saying things like 'I'm not a math person' or 'I hate math'",
    completed: false,
  },
  {
    id: "blank-mind",
    text: "Mind going blank during math tests or when asked math questions",
    completed: false,
  },
  {
    id: "perfectionism",
    text: "Extreme frustration when making math mistakes",
    completed: false,
  },
  {
    id: "comparison",
    text: "Constantly comparing their math abilities to others",
    completed: false,
  },
  {
    id: "homework-battles",
    text: "Frequent tears or tantrums during math homework time",
    completed: false,
  },
  {
    id: "test-anxiety",
    text: "Performing poorly on math tests despite understanding the material",
    completed: false,
  },
];

const anxietyStrategies = [
  {
    category: "Mindset Strategies",
    icon: Brain,
    strategies: [
      {
        title: "Reframe Math Mistakes",
        description:
          "Help your child see mistakes as learning opportunities, not failures.",
        tips: [
          "Say 'What can we learn from this mistake?' instead of focusing on the error",
          "Share your own math mistakes and how you learned from them",
          "Celebrate the process of problem-solving, not just correct answers",
          "Use mistakes as teaching moments to strengthen understanding",
        ],
      },
      {
        title: "Challenge Negative Self-Talk",
        description:
          "Replace 'I can't do math' with 'I'm learning to do math better.'",
        tips: [
          "Help them identify negative thoughts about math",
          "Practice positive affirmations before math work",
          "Focus on effort and improvement, not just ability",
          "Use growth mindset language: 'yet' is a powerful word",
        ],
      },
      {
        title: "Build Math Identity",
        description:
          "Help your child see themselves as capable of math success.",
        tips: [
          "Point out everyday math they already do successfully",
          "Highlight their math strengths and improvements",
          "Connect math to their interests and hobbies",
          "Share stories of people who overcame math challenges",
        ],
      },
    ],
  },
  {
    category: "Practical Techniques",
    icon: Target,
    strategies: [
      {
        title: "Breathing and Relaxation",
        description: "Teach calming techniques for when math anxiety hits.",
        tips: [
          "Practice deep breathing: 4 counts in, hold for 4, out for 4",
          "Use progressive muscle relaxation before math work",
          "Try the 5-4-3-2-1 grounding technique during anxiety",
          "Create a calm, organized space for math homework",
        ],
      },
      {
        title: "Break Down Problems",
        description: "Make overwhelming problems feel manageable.",
        tips: [
          "Teach them to read problems multiple times",
          "Circle or highlight key information",
          "Break multi-step problems into smaller parts",
          "Use visual aids and diagrams when possible",
        ],
      },
      {
        title: "Practice Self-Advocacy",
        description: "Empower your child to ask for help when needed.",
        tips: [
          "Teach them to identify when they're stuck",
          "Practice asking specific questions about math concepts",
          "Role-play conversations with teachers",
          "Create a 'help-seeking' plan for homework time",
        ],
      },
    ],
  },
  {
    category: "Environment & Support",
    icon: Shield,
    strategies: [
      {
        title: "Create a Math-Positive Home",
        description:
          "Foster an environment where math is approached with curiosity, not fear.",
        tips: [
          "Avoid saying 'I was never good at math' in front of your child",
          "Show enthusiasm for math in everyday situations",
          "Play math games and puzzles together",
          "Celebrate small math victories and progress",
        ],
      },
      {
        title: "Collaborate with Teachers",
        description:
          "Work with your child's teacher to address anxiety in school.",
        tips: [
          "Share your child's anxiety triggers with the teacher",
          "Ask about accommodations like extra time or quiet spaces",
          "Request regular check-ins about math progress",
          "Discuss alternative assessment methods if needed",
        ],
      },
      {
        title: "Build Support Networks",
        description: "Connect with others who understand math anxiety.",
        tips: [
          "Find study groups or math homework buddies",
          "Consider working with a math tutor who understands anxiety",
          "Connect with other parents facing similar challenges",
          "Look for math anxiety support groups or resources",
        ],
      },
    ],
  },
];

const parentDos = [
  "Listen to your child's math concerns without judgment",
  "Focus on effort and improvement, not just grades",
  "Help them see math as a skill that can be developed",
  "Celebrate small victories and progress",
  "Be patient during homework time",
  "Model positive attitudes toward math",
  "Seek help when needed (tutors, teachers, counselors)",
  "Remember that anxiety is real and valid",
];

const parentDonts = [
  "Don't say 'I was never good at math either'",
  "Don't rush through math homework",
  "Don't compare your child to siblings or peers",
  "Don't minimize their feelings about math",
  "Don't do their homework for them",
  "Don't use math as punishment",
  "Don't expect immediate improvement",
  "Don't ignore signs of severe anxiety",
];

const mathGames = [
  {
    name: "Number Talks",
    description: "Daily 5-minute conversations about math problems",
    ages: "All ages",
    benefits: "Builds number sense and reduces math fear through discussion",
  },
  {
    name: "Math Journals",
    description: "Write about math experiences, feelings, and strategies",
    ages: "6th-8th grade",
    benefits: "Helps process emotions and reflect on learning",
  },
  {
    name: "Real-World Math",
    description: "Cooking, shopping, sports statistics, budgeting",
    ages: "All ages",
    benefits: "Shows practical applications and builds confidence",
  },
  {
    name: "Math Art Projects",
    description: "Geometric patterns, tessellations, graphing designs",
    ages: "6th-8th grade",
    benefits: "Combines creativity with math concepts",
  },
  {
    name: "Math Board Games",
    description: "Monopoly, Yahtzee, card games with math focus",
    ages: "All ages",
    benefits: "Makes math fun and social",
  },
  {
    name: "Online Math Games",
    description: "Khan Academy, Prodigy, IXL interactive activities",
    ages: "6th-8th grade",
    benefits: "Gamifies learning and provides immediate feedback",
  },
];

const faqItems: FAQItem[] = [
  {
    question:
      "How can I tell if my child has math anxiety or just needs more practice?",
    answer:
      "Math anxiety involves emotional symptoms like fear, panic, or physical discomfort when approaching math. If your child shows signs of distress beyond normal frustration, it's likely anxiety. However, skill gaps can also contribute to anxiety, so address both emotional and academic needs.",
    icon: "help-circle",
  },
  {
    question: "Should I get professional help for my child's math anxiety?",
    answer:
      "Consider professional help if anxiety significantly impacts daily life, school performance, or your child's well-being. A school counselor, therapist, or educational psychologist can provide strategies and support for severe math anxiety.",
    icon: "help-circle",
  },
  {
    question: "How long does it typically take to overcome math anxiety?",
    answer:
      "Recovery varies greatly depending on the severity and how long the anxiety has been present. With consistent support and strategies, many students see improvement in 2-6 months. Be patient and celebrate small progress along the way.",
    icon: "help-circle",
  },
  {
    question: "Can math anxiety affect other subjects?",
    answer:
      "Yes, math anxiety can impact science classes that require math, cause general test anxiety, or affect overall academic confidence. Addressing math anxiety often helps improve performance across subjects.",
    icon: "help-circle",
  },
  {
    question: "What if I also have math anxiety and struggle to help my child?",
    answer:
      "Your awareness is the first step! Work on your own math mindset alongside your child's. Consider getting help from teachers, tutors, or online resources. Your positive attitude and willingness to learn together can be very powerful.",
    icon: "help-circle",
  },
  {
    question: "Are there any warning signs that math anxiety is getting worse?",
    answer:
      "Watch for escalating physical symptoms, complete avoidance of math, declining grades despite effort, social withdrawal, or talk of giving up entirely. If you notice these signs, seek additional support immediately.",
    icon: "help-circle",
  },
];

export default function MathAnxietySolutions() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Understanding Math Anxiety">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-red-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Helping Your Child Overcome Math Anxiety
            </h2>
            <p className="text-gray-600">
              Practical strategies to build confidence and reduce math-related
              stress
            </p>
          </div>
        </div>

        <Alert type="info" icon={Lightbulb}>
          <div>
            <strong>What is Math Anxiety?</strong> Math anxiety is a feeling of
            tension, apprehension, or fear that interferes with math
            performance. It's a real condition that affects students of all
            ability levels and can significantly impact learning.
          </div>
        </Alert>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">
            Is Your Child Experiencing Math Anxiety?
          </h3>
          <BlogChecklist
            title="Common Signs of Math Anxiety"
            description="Check any signs you've noticed in your child"
            items={anxietySignsChecklist}
          />
        </div>
      </BlogSection>

      <BlogSection title="Evidence-Based Strategies">
        <p className="text-gray-700 mb-6">
          Research shows that math anxiety can be reduced with the right
          strategies. Here are three key approaches that work for middle school
          students.
        </p>

        <div className="space-y-8">
          {anxietyStrategies.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.strategies.map((strategy, strategyIndex) => (
                  <div
                    key={strategyIndex}
                    className="border-l-4 border-blue-200 pl-4"
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
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
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

      <BlogSection title="Parent Do's and Don'ts">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Do These Things
            </h3>
            <ul className="space-y-3">
              {parentDos.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-green-800"
                >
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Avoid These Things
            </h3>
            <ul className="space-y-3">
              {parentDonts.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-red-800">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Fun Math Activities That Reduce Anxiety">
        <p className="text-gray-700 mb-6">
          Making math enjoyable is one of the best ways to reduce anxiety. Here
          are engaging activities that build confidence while learning.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {mathGames.map((game, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-blue-900">
                  {game.name}
                </h3>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                  {game.ages}
                </span>
              </div>
              <p className="text-blue-800 mb-3 text-sm">{game.description}</p>
              <div className="bg-blue-100 rounded p-3">
                <p className="text-blue-700 text-sm">
                  <strong>Benefits:</strong> {game.benefits}
                </p>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="When to Seek Additional Help">
        <Alert type="warning" icon={AlertTriangle}>
          <div>
            <strong>Seek professional help if:</strong> Your child's anxiety is
            severe, persistent, or significantly impacts their daily life or
            school performance.
          </div>
        </Alert>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <Users className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              School Counselor
            </h3>
            <p className="text-purple-700 text-sm">
              Can provide in-school support and coordinate with teachers
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <Brain className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg font-semibold text-orange-900 mb-2">
              Math Tutor
            </h3>
            <p className="text-orange-700 text-sm">
              Specialized in working with anxious students and building
              confidence
            </p>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <Heart className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="text-lg font-semibold text-teal-900 mb-2">
              Therapist
            </h3>
            <p className="text-teal-700 text-sm">
              For severe anxiety affecting multiple areas of life
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Building Math Confidence">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Remember: You Can Help
          </h3>
          <p className="text-gray-700 mb-6">
            Your support and understanding are powerful tools in helping your
            child overcome math anxiety. With patience, the right strategies,
            and consistent encouragement, your child can develop confidence and
            success in mathematics.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Start Small:</strong> Pick one or two strategies from this
              guide and implement them consistently. Building confidence takes
              time, but every small step matters.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
