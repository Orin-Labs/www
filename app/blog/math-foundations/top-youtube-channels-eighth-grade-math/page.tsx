import React from 'react';

import {
  BookOpen,
  Clock,
  Eye,
  Play,
  Star,
  Target,
  ThumbsUp,
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
  title: "Top YouTube Channels for 8th Grade Math | 2025 Reviews",
  description:
    "Curated list of the best YouTube channels for 8th grade math with detailed reviews and recommended playlists.",
  keywords: [
    "YouTube math channels",
    "8th grade math videos",
    "online math help",
    "math video resources",
    "free math tutorials",
    "math education videos",
    "math learning videos",
    "online math support",
    "math video lessons",
    "educational YouTube",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "Top YouTube Channels for 8th Grade Math | 2025 Reviews",
    description:
      "Curated list of the best YouTube channels for 8th grade math with detailed reviews and recommended playlists.",
    images: ["/blog/mithushi-arya-lXOX3-yTvyQ-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-07-21T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "top-youtube-channels-eighth-grade-math",
  shortName: "YouTube Channels",
  name: "Top YouTube Channels for 8th Grade Math",
  excerpt:
    "Curated list of the best YouTube channels for 8th grade math with detailed reviews and recommended playlists.",
  date: new Date("2025-07-21"),
  author: "Education Team",
  readingTime: 7,
  slug: "top-youtube-channels-eighth-grade-math",
  image: "/blog/mithushi-arya-lXOX3-yTvyQ-unsplash.jpg",
  keywords: [
    "YouTube math channels",
    "8th grade math videos",
    "online math help",
    "math video resources",
    "free math tutorials",
    "math education videos",
    "math learning videos",
    "online math support",
    "math video lessons",
    "educational YouTube",
  ],
};

const topChannels = [
  {
    name: "Khan Academy",
    subscribers: "7.8M",
    rating: 5,
    description:
      "The gold standard for free math education with comprehensive 8th grade algebra content.",
    strengths: [
      "Comprehensive curriculum aligned with standards",
      "Step-by-step explanations",
      "Practice problems with instant feedback",
      "Progress tracking and mastery learning",
      "Available in multiple languages",
    ],
    weaknesses: [
      "Can be dry for some learning styles",
      "Limited interactive elements",
      "Pace might be too slow for advanced students",
    ],
    bestFor: "Students who prefer structured, systematic learning",
    keyTopics: [
      "Linear equations",
      "Systems of equations",
      "Functions",
      "Exponents",
      "Graphing",
    ],
    recommendedPlaylists: [
      "Algebra Basics",
      "Linear Equations and Inequalities",
      "Systems of Equations",
    ],
  },
  {
    name: "Professor Leonard",
    subscribers: "1.2M",
    rating: 5,
    description:
      "Detailed, lecture-style explanations perfect for students who like thorough mathematical reasoning.",
    strengths: [
      "Extremely detailed explanations",
      "Shows multiple solution methods",
      "Emphasizes mathematical reasoning",
      "Great for building deep understanding",
      "Excellent board work and organization",
    ],
    weaknesses: [
      "Videos can be quite long (30-60 minutes)",
      "May be too advanced for struggling students",
      "Less visually engaging for younger learners",
    ],
    bestFor:
      "Students who want in-depth understanding and don't mind longer videos",
    keyTopics: [
      "Algebra foundations",
      "Equation solving",
      "Graphing",
      "Word problems",
    ],
    recommendedPlaylists: ["Algebra 1 Lectures", "Intermediate Algebra"],
  },
  {
    name: "Organic Chemistry Tutor",
    subscribers: "5.4M",
    rating: 4,
    description:
      "Clear, concise explanations with a focus on problem-solving techniques and test preparation.",
    strengths: [
      "Excellent problem-solving strategies",
      "Concise and to-the-point explanations",
      "Great for test prep",
      "Wide variety of practice problems",
      "Consistent posting schedule",
    ],
    weaknesses: [
      "Less emphasis on conceptual understanding",
      "Can feel rushed for complex topics",
      "Limited interaction with viewers",
    ],
    bestFor: "Students preparing for tests and exams",
    keyTopics: [
      "Algebraic expressions",
      "Solving equations",
      "Graphing functions",
      "Exponents",
    ],
    recommendedPlaylists: ["Algebra 1 Review", "Pre-Algebra Math Problems"],
  },
  {
    name: "Math Antics",
    subscribers: "2.1M",
    rating: 4,
    description:
      "Animated, entertaining math videos that make concepts accessible and fun for middle schoolers.",
    strengths: [
      "Engaging animations and visuals",
      "Perfect for visual learners",
      "Makes math concepts fun and accessible",
      "Great for building confidence",
      "Appropriate pacing for middle schoolers",
    ],
    weaknesses: [
      "Limited advanced topics",
      "Sometimes oversimplifies complex concepts",
      "Fewer practice problems provided",
    ],
    bestFor: "Visual learners and students who need confidence building",
    keyTopics: [
      "Basic algebra",
      "Graphing",
      "Fractions",
      "Decimals",
      "Percentages",
    ],
    recommendedPlaylists: ["Algebra Basics", "Graphing and Functions"],
  },
  {
    name: "PatrickJMT",
    subscribers: "1.1M",
    rating: 4,
    description:
      "Straightforward, no-nonsense math tutorials covering a wide range of algebra topics.",
    strengths: [
      "Clear, straightforward explanations",
      "Covers many specific topics",
      "Good for quick concept review",
      "Reliable and consistent format",
      "Great for targeted learning",
    ],
    weaknesses: [
      "Can be too basic for advanced students",
      "Limited visual aids",
      "Older video quality",
    ],
    bestFor: "Students who need quick, targeted help with specific topics",
    keyTopics: [
      "Solving equations",
      "Factoring",
      "Graphing",
      "Exponents",
      "Radicals",
    ],
    recommendedPlaylists: ["Algebra 1 Topics", "Pre-Algebra Review"],
  },
  {
    name: "MathHelp.com",
    subscribers: "890K",
    rating: 4,
    description:
      "Structured lessons with practice problems, perfect for systematic learning.",
    strengths: [
      "Well-organized lesson structure",
      "Includes practice problems",
      "Good pacing for middle schoolers",
      "Covers curriculum systematically",
      "Professional production quality",
    ],
    weaknesses: [
      "Some content requires subscription",
      "Less personality than other channels",
      "Limited advanced problem solving",
    ],
    bestFor: "Students who prefer structured, curriculum-aligned content",
    keyTopics: [
      "Linear equations",
      "Inequalities",
      "Polynomials",
      "Factoring",
      "Graphing",
    ],
    recommendedPlaylists: ["Algebra 1 Course", "Pre-Algebra Complete Course"],
  },
];

const channelSelectionCriteria = [
  {
    id: "learning-style",
    text: "Consider your child's learning style (visual, auditory, kinesthetic)",
    completed: false,
  },
  {
    id: "topic-coverage",
    text: "Check if the channel covers your child's specific math topics",
    completed: false,
  },
  {
    id: "explanation-style",
    text: "Watch a few videos to see if the teaching style resonates",
    completed: false,
  },
  {
    id: "difficulty-level",
    text: "Ensure the content matches your child's current math level",
    completed: false,
  },
  {
    id: "video-length",
    text: "Consider video length and your child's attention span",
    completed: false,
  },
  {
    id: "practice-problems",
    text: "Look for channels that provide practice problems",
    completed: false,
  },
  {
    id: "currency",
    text: "Check if content is regularly updated and current",
    completed: false,
  },
  {
    id: "supplementary-resources",
    text: "See if additional materials are available (worksheets, etc.)",
    completed: false,
  },
];

const usageTips = [
  {
    title: "Create Study Playlists",
    description:
      "Organize videos by topic or difficulty level for systematic learning.",
    icon: BookOpen,
  },
  {
    title: "Use Multiple Channels",
    description: "Different explanations can help clarify difficult concepts.",
    icon: Users,
  },
  {
    title: "Take Notes While Watching",
    description: "Active engagement improves retention and understanding.",
    icon: Target,
  },
  {
    title: "Practice After Each Video",
    description: "Apply concepts immediately to reinforce learning.",
    icon: Play,
  },
  {
    title: "Set Viewing Goals",
    description: "Watch 1-2 videos per study session to avoid overwhelm.",
    icon: Clock,
  },
  {
    title: "Use Captions When Helpful",
    description: "Subtitles can aid comprehension and note-taking.",
    icon: Eye,
  },
];

const topicRecommendations = [
  {
    topic: "Linear Equations",
    channels: ["Khan Academy", "Professor Leonard", "Organic Chemistry Tutor"],
    reason:
      "These channels provide comprehensive coverage from basic concepts to advanced problem-solving",
  },
  {
    topic: "Graphing Functions",
    channels: ["Math Antics", "Khan Academy", "MathHelp.com"],
    reason:
      "Visual learners benefit from animated explanations and step-by-step graphing techniques",
  },
  {
    topic: "Systems of Equations",
    channels: ["Khan Academy", "Professor Leonard", "PatrickJMT"],
    reason:
      "Complex topic requiring multiple solution methods and detailed explanations",
  },
  {
    topic: "Exponents and Radicals",
    channels: ["Organic Chemistry Tutor", "PatrickJMT", "Khan Academy"],
    reason:
      "Benefits from clear rules explanation and lots of practice problems",
  },
  {
    topic: "Word Problems",
    channels: ["Professor Leonard", "Khan Academy", "Math Antics"],
    reason: "Requires step-by-step reasoning and multiple examples",
  },
];

const faqItems: FAQItem[] = [
  {
    question:
      "Should I let my child watch math videos instead of doing homework?",
    answer:
      "YouTube videos should supplement, not replace, homework and classroom instruction. Use them to clarify concepts, review before tests, or provide alternative explanations when your child is struggling.",
    icon: "help-circle",
  },
  {
    question:
      "How do I know if a YouTube channel is teaching concepts correctly?",
    answer:
      "Stick to well-established channels with high subscriber counts and positive reviews. Cross-reference with your child's textbook or teacher's explanations. If something seems off, consult with the teacher.",
    icon: "help-circle",
  },
  {
    question:
      "My child gets distracted by YouTube's suggested videos. How can I help?",
    answer:
      "Use YouTube's restricted mode, create specific playlists, or consider using YouTube Kids. You can also watch together initially to help them stay focused on educational content.",
    icon: "help-circle",
  },
  {
    question: "Are there any risks to using YouTube for math learning?",
    answer:
      "Main risks include distraction by non-educational content, inconsistent teaching methods, and potential misinformation. Always verify information and use reputable channels as supplements to formal education.",
    icon: "help-circle",
  },
  {
    question: "How much time should my child spend watching math videos?",
    answer:
      "Balance is key. 15-30 minutes per day can be beneficial, but shouldn't replace practicing problems or doing homework. Use videos strategically when concepts are unclear or for review.",
    icon: "help-circle",
  },
  {
    question: "Can YouTube videos replace a math tutor?",
    answer:
      "While excellent for review and concept clarification, YouTube videos can't provide personalized feedback or identify specific learning gaps like a tutor can. Use them as a cost-effective supplement to professional help.",
    icon: "help-circle",
  },
];

export default function TopYouTubeChannelsEighthGradeMath() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Best YouTube Channels for 8th Grade Math">
        <div className="flex items-center gap-3 mb-6">
          <Play className="w-8 h-8 text-red-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Top YouTube Math Channels for 8th Graders
            </h2>
            <p className="text-gray-600">
              Curated reviews of the best free math resources online
            </p>
          </div>
        </div>

        <Alert type="info" icon={BookOpen}>
          <div>
            <strong>Why YouTube for Math?</strong> Video explanations can
            clarify difficult concepts, provide alternative teaching methods,
            and offer unlimited replay for complex topics. The best channels
            combine clear explanations with visual aids and practice problems.
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Detailed Channel Reviews">
        <div className="space-y-8">
          {topChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {channel.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">
                        {channel.subscribers} subscribers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < channel.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{channel.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">
                    Strengths:
                  </h4>
                  <ul className="space-y-1">
                    {channel.strengths.map((strength, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-green-700 text-sm"
                      >
                        <ThumbsUp className="w-3 h-3 mt-0.5 text-green-600" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-900 mb-2">
                    Considerations:
                  </h4>
                  <ul className="space-y-1">
                    {channel.weaknesses.map((weakness, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-red-700 text-sm"
                      >
                        <div className="w-3 h-3 mt-0.5 bg-red-600 rounded-full"></div>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800 text-sm">
                  <strong>Best for:</strong> {channel.bestFor}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Topics Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {channel.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Recommended Playlists:
                  </h4>
                  <ul className="space-y-1">
                    {channel.recommendedPlaylists.map((playlist, i) => (
                      <li
                        key={i}
                        className="text-blue-600 text-sm hover:underline cursor-pointer"
                      >
                        {playlist}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="How to Choose the Right Channel">
        <BlogChecklist
          title="Channel Selection Checklist"
          description="Use this checklist to evaluate which channels work best for your child"
          items={channelSelectionCriteria}
        />
      </BlogSection>

      <BlogSection title="Making the Most of Math Videos">
        <div className="grid md:grid-cols-2 gap-6">
          {usageTips.map((tip, index) => (
            <div
              key={index}
              className="bg-purple-50 border border-purple-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <tip.icon className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-900">
                  {tip.title}
                </h3>
              </div>
              <p className="text-purple-700 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Topic-Specific Recommendations">
        <p className="text-gray-700 mb-6">
          Different math topics are better explained by different channels. Here
          are our recommendations for specific 8th grade math concepts.
        </p>

        <div className="space-y-4">
          {topicRecommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {rec.topic}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {rec.channels.map((channel, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {channel}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm">{rec.reason}</p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Start Learning Today">
        <div className="bg-gradient-to-r from-red-50 to-purple-50 border border-red-200 rounded-lg p-8 text-center">
          <Play className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Explore Math Videos?
          </h3>
          <p className="text-gray-700 mb-6">
            Start with one or two channels that match your child's learning
            style and math level. Remember, consistency and active engagement
            are key to success.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Pro Tip:</strong> Watch the first few videos together to
              help your child get comfortable with the format and teaching
              style.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
