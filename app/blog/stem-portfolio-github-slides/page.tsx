import React from 'react';

import {
  CheckCircle,
  Code,
  FileText,
  Github,
  Monitor,
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

export const metadata: Metadata = {
  title: "STEM Portfolio: GitHub + Google Slides Guide for Middle School",
  description:
    "Step-by-step guide to creating a professional STEM portfolio using GitHub and Google Slides for middle school students.",
  keywords: [
    "STEM portfolio",
    "GitHub portfolio",
    "Google Slides",
    "student portfolio",
    "STEM projects",
    "digital portfolio",
    "coding projects",
    "project showcase",
    "academic portfolio",
    "STEM documentation",
  ],
  authors: [{ name: "Education Team" }],
  openGraph: {
    title: "STEM Portfolio: GitHub + Google Slides Guide for Middle School",
    description:
      "Step-by-step guide to creating a professional STEM portfolio using GitHub and Google Slides for middle school students.",
    images: ["/blog/john-sin-Q5rtHn9I4oA-unsplash.jpg"],
    type: "article",
    publishedTime: "2025-06-10T00:00:00.000Z",
  },
};

const blogMeta = {
  id: "stem-portfolio-github-slides",
  shortName: "STEM Portfolio",
  name: "STEM Portfolio: GitHub + Google Slides Guide",
  excerpt:
    "Step-by-step guide to creating a professional STEM portfolio using GitHub and Google Slides for middle school students.",
  date: new Date("2025-06-10"),
  author: "Education Team",
  readingTime: 10,
  slug: "stem-portfolio-github-slides",
  image: "/blog/john-sin-Q5rtHn9I4oA-unsplash.jpg",
  keywords: [
    "STEM portfolio",
    "GitHub portfolio",
    "Google Slides",
    "student portfolio",
    "STEM projects",
    "digital portfolio",
    "coding projects",
    "project showcase",
    "academic portfolio",
    "STEM documentation",
  ],
};

const portfolioBenefits = [
  {
    benefit: "College Applications",
    description: "Demonstrate STEM skills and passion to admissions committees",
    examples: [
      "Show coding projects and problem-solving abilities",
      "Document science fair projects and research",
      "Highlight engineering design process work",
      "Prove technical competency with real examples",
    ],
  },
  {
    benefit: "Scholarship Opportunities",
    description: "Stand out in STEM scholarship competitions",
    examples: [
      "Visual proof of project complexity",
      "Evidence of sustained STEM engagement",
      "Documentation of leadership in STEM activities",
      "Portfolio of innovative solutions",
    ],
  },
  {
    benefit: "Internship Applications",
    description: "Showcase abilities to potential mentors and employers",
    examples: [
      "Demonstrate real programming skills",
      "Show ability to complete projects",
      "Evidence of technical communication",
      "Proof of collaborative work",
    ],
  },
  {
    benefit: "Personal Growth",
    description: "Track progress and reflect on learning journey",
    examples: [
      "See skill development over time",
      "Identify areas for improvement",
      "Build confidence in abilities",
      "Create professional online presence",
    ],
  },
];

const githubSetup = [
  {
    step: "Create GitHub Account",
    description: "Set up your professional GitHub presence",
    details: [
      "Choose a professional username (firstname-lastname or similar)",
      "Use a clear profile photo",
      "Write a brief bio highlighting STEM interests",
      "Add contact information and school (optional)",
    ],
    tips: [
      "Username will be part of your portfolio URL",
      "Keep it professional - this may be seen by colleges",
      "Consider using the same username across platforms",
    ],
  },
  {
    step: "Learn Git Basics",
    description: "Understand version control fundamentals",
    details: [
      "Learn what repositories (repos) are",
      "Understand commits and commit messages",
      "Practice creating and editing files",
      "Learn to use README files effectively",
    ],
    tips: [
      "GitHub Desktop makes it easier for beginners",
      "Start with web interface before command line",
      "Watch YouTube tutorials for visual learning",
    ],
  },
  {
    step: "Create Project Repositories",
    description: "Organize your STEM work into repositories",
    details: [
      "One repository per major project",
      "Use descriptive repository names",
      "Include comprehensive README files",
      "Add appropriate topics/tags",
    ],
    tips: [
      "Make repositories public to showcase work",
      "Use clear folder structure",
      "Include photos and documentation",
    ],
  },
];

const googleSlidesSetup = [
  {
    step: "Design Professional Template",
    description: "Create a consistent visual brand",
    details: [
      "Choose professional color scheme (blues, grays, whites)",
      "Select readable fonts (Arial, Calibri, or Google Fonts)",
      "Create master slide with your name and contact info",
      "Design section dividers for different project types",
    ],
  },
  {
    step: "Structure Your Portfolio",
    description: "Organize content for maximum impact",
    details: [
      "Title slide with your name and STEM focus",
      "About me section highlighting interests and goals",
      "Project showcase with 2-3 slides per major project",
      "Skills and technologies section",
      "Contact information and links",
    ],
  },
  {
    step: "Create Project Slides",
    description: "Document each project effectively",
    details: [
      "Project title and one-sentence description",
      "Problem statement and objectives",
      "Process overview with photos/screenshots",
      "Results and what you learned",
      "Link to GitHub repository",
    ],
  },
];

const projectTypes = [
  {
    category: "Programming Projects",
    description: "Code-based projects and applications",
    examples: [
      "Simple games (Tic-tac-toe, Pong, Snake)",
      "Calculator or utility applications",
      "Data analysis projects",
      "Web pages or simple websites",
      "Arduino or Raspberry Pi projects",
    ],
    documentation: [
      "Source code with clear comments",
      "Screenshots of the running program",
      "Explanation of algorithms used",
      "Challenges faced and solutions found",
      "Future improvements planned",
    ],
  },
  {
    category: "Science Fair Projects",
    description: "Research and experimental work",
    examples: [
      "Biology experiments and observations",
      "Chemistry investigations",
      "Physics demonstrations",
      "Environmental science studies",
      "Engineering design challenges",
    ],
    documentation: [
      "Research question and hypothesis",
      "Experimental procedure and setup photos",
      "Data collection and analysis",
      "Conclusions and implications",
      "Photos of displays and presentations",
    ],
  },
  {
    category: "Engineering Projects",
    description: "Design and build challenges",
    examples: [
      "Bridge or tower building challenges",
      "Robot design and programming",
      "3D printing and CAD projects",
      "Electronics and circuit projects",
      "Mechanical contraptions",
    ],
    documentation: [
      "Design process and iterations",
      "CAD drawings or sketches",
      "Building photos and videos",
      "Testing results and improvements",
      "Engineering notebook excerpts",
    ],
  },
  {
    category: "Mathematics Projects",
    description: "Mathematical modeling and problem-solving",
    examples: [
      "Statistics and data visualization",
      "Mathematical modeling projects",
      "Geometry investigations",
      "Number theory explorations",
      "Real-world math applications",
    ],
    documentation: [
      "Problem statement and approach",
      "Mathematical methods used",
      "Calculations and proofs",
      "Visualizations and graphs",
      "Real-world applications",
    ],
  },
];

const integrationSteps = [
  {
    step: "Link Projects",
    description: "Connect GitHub repositories to Google Slides presentation",
    actions: [
      "Add GitHub repository links to each project slide",
      "Include QR codes for easy mobile access",
      "Embed key screenshots from GitHub in slides",
      "Reference specific files or folders in repositories",
    ],
  },
  {
    step: "Create Summary Documents",
    description: "Bridge detailed GitHub content with overview slides",
    actions: [
      "Write one-page project summaries",
      "Create visual infographics of your work",
      "Develop skill progression timelines",
      "Make comparison charts of different projects",
    ],
  },
  {
    step: "Prepare Multiple Formats",
    description: "Adapt portfolio for different audiences and situations",
    actions: [
      "Create 5-minute elevator pitch version",
      "Develop detailed technical presentation",
      "Make printable PDF versions",
      "Prepare interactive demonstration versions",
    ],
  },
];

const portfolioChecklist = [
  {
    id: "github-account",
    text: "Created professional GitHub account with clear profile",
    completed: false,
  },
  {
    id: "multiple-repos",
    text: "Created repositories for 3+ STEM projects",
    completed: false,
  },
  {
    id: "readme-files",
    text: "Written comprehensive README files for each project",
    completed: false,
  },
  {
    id: "slides-template",
    text: "Designed professional Google Slides template",
    completed: false,
  },
  {
    id: "project-documentation",
    text: "Documented each project with photos and explanations",
    completed: false,
  },
  {
    id: "skills-section",
    text: "Created skills and technologies summary",
    completed: false,
  },
  {
    id: "contact-info",
    text: "Included appropriate contact information",
    completed: false,
  },
  {
    id: "mobile-friendly",
    text: "Ensured portfolio works well on mobile devices",
    completed: false,
  },
  {
    id: "regular-updates",
    text: "Established routine for updating portfolio",
    completed: false,
  },
  {
    id: "feedback-testing",
    text: "Got feedback from teachers, parents, or peers",
    completed: false,
  },
];

const commonMistakes = [
  {
    mistake: "Overwhelming Detail",
    problem: "Including too much technical detail that obscures main points",
    solution:
      "Focus on outcomes and learning, save technical details for GitHub",
  },
  {
    mistake: "Poor Visual Design",
    problem: "Using unprofessional colors, fonts, or layouts",
    solution: "Keep design clean and professional, prioritize readability",
  },
  {
    mistake: "Outdated Information",
    problem: "Forgetting to update portfolio as skills grow",
    solution: "Set monthly reminders to review and update content",
  },
  {
    mistake: "Missing Context",
    problem: "Not explaining why projects matter or what was learned",
    solution: "Always include reflection and real-world connections",
  },
  {
    mistake: "Broken Links",
    problem: "GitHub links that don't work or lead to empty repositories",
    solution: "Test all links regularly and ensure repositories are public",
  },
];

const presentationTips = [
  {
    situation: "College Interviews",
    tips: [
      "Prepare 3-5 minute overview of your strongest projects",
      "Focus on problem-solving process, not just results",
      "Be ready to explain technical concepts simply",
      "Emphasize collaboration and leadership experiences",
    ],
  },
  {
    situation: "Science Fair Presentations",
    tips: [
      "Use portfolio to show broader context of your work",
      "Highlight connections between different projects",
      "Demonstrate progression of skills over time",
      "Include interactive elements when possible",
    ],
  },
  {
    situation: "Scholarship Applications",
    tips: [
      "Customize portfolio focus for each scholarship",
      "Quantify impact and achievements where possible",
      "Include community service and outreach projects",
      "Show sustained commitment to STEM fields",
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Do I need to know how to code to create a GitHub portfolio?",
    answer:
      "Not necessarily! GitHub can host any type of project documentation, including science fair projects, engineering designs, and math investigations. However, learning basic coding skills will significantly enhance your portfolio.",
    icon: "help-circle",
  },
  {
    question: "How many projects should I include in my portfolio?",
    answer:
      "Start with 3-5 substantial projects that showcase different skills. Quality matters more than quantity. It's better to have 3 well-documented projects than 10 poorly explained ones.",
    icon: "help-circle",
  },
  {
    question: "Can I include group projects in my individual portfolio?",
    answer:
      "Yes! Just be clear about your specific contributions. Group projects can actually strengthen your portfolio by showing collaboration skills. Explain your role and what you learned from working with others.",
    icon: "help-circle",
  },
  {
    question: "How often should I update my STEM portfolio?",
    answer:
      "Review and update monthly, with major updates each semester. Add new projects as you complete them, and refresh older project descriptions as your understanding deepens.",
    icon: "help-circle",
  },
  {
    question: "Is it okay to include projects that didn't work perfectly?",
    answer:
      "Absolutely! Failed experiments and debugging challenges often make the most compelling portfolio pieces. They show resilience, problem-solving, and real learning. Focus on what you learned from setbacks.",
    icon: "help-circle",
  },
  {
    question: "Should parents help with portfolio creation?",
    answer:
      "Parents can help with organization and feedback, but the portfolio should reflect the student's own work and voice. Parent support in learning tools like GitHub is valuable, but content should be authentic to the student.",
    icon: "help-circle",
  },
];

export default function STEMPortfolioGitHubSlides() {
  return (
    <BlogLayout blogMeta={blogMeta}>
      <BlogSection title="Building Your STEM Portfolio">
        <div className="flex items-center gap-3 mb-6">
          <Github className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              STEM Portfolio with GitHub + Google Slides
            </h2>
            <p className="text-gray-600">
              Create a professional showcase of your STEM projects and skills
            </p>
          </div>
        </div>

        <Alert type="info" icon={Target}>
          <div>
            <strong>Why These Tools?</strong> GitHub provides professional
            project hosting and version control experience, while Google Slides
            creates accessible, visual presentations. Together, they form a
            comprehensive portfolio system.
          </div>
        </Alert>
      </BlogSection>

      <BlogSection title="Why Create a STEM Portfolio?">
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.benefit}
              </h3>
              <p className="text-gray-700 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.examples.map((example, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <Star className="w-3 h-3 mt-0.5 text-yellow-600" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Setting Up GitHub">
        <p className="text-gray-700 mb-6">
          GitHub serves as your professional project repository. Follow these
          steps to create a strong foundation:
        </p>

        <div className="space-y-6">
          {githubSetup.map((step, index) => (
            <div
              key={index}
              className="bg-purple-50 border border-purple-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-purple-900">
                  {step.step}
                </h3>
              </div>

              <p className="text-purple-800 mb-4">{step.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">
                    Action Items:
                  </h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-purple-700 text-sm"
                      >
                        <CheckCircle className="w-3 h-3 mt-0.5 text-purple-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    Pro Tips:
                  </h4>
                  <ul className="space-y-1">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="text-purple-700 text-sm">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Creating Google Slides Presentation">
        <p className="text-gray-700 mb-6">
          Your Google Slides presentation serves as the visual front-end of your
          portfolio, making your work accessible and engaging.
        </p>

        <div className="space-y-6">
          {googleSlidesSetup.map((step, index) => (
            <div
              key={index}
              className="bg-orange-50 border border-orange-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-orange-900">
                  {step.step}
                </h3>
              </div>
              <p className="text-orange-800 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-orange-700 text-sm"
                  >
                    <CheckCircle className="w-3 h-3 mt-0.5 text-orange-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Types of Projects to Include">
        <div className="space-y-6">
          {projectTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {type.category}
              </h3>
              <p className="text-gray-700 mb-4">{type.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Project Examples:
                  </h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <Code className="w-3 h-3 mt-0.5 text-blue-600" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Documentation Should Include:
                  </h4>
                  <ul className="space-y-1">
                    {type.documentation.map((doc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <FileText className="w-3 h-3 mt-0.5 text-green-600" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Integrating GitHub and Google Slides">
        <p className="text-gray-700 mb-6">
          The power of your portfolio comes from seamlessly connecting detailed
          GitHub repositories with engaging slide presentations.
        </p>

        <div className="space-y-6">
          {integrationSteps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {step.step}
              </h3>
              <p className="text-blue-800 mb-4">{step.description}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {step.actions.map((action, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-blue-700 text-sm"
                  >
                    <Target className="w-3 h-3 mt-0.5 text-blue-600" />
                    {action}
                  </div>
                ))}
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
              className="bg-red-50 border border-red-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                {mistake.mistake}
              </h3>
              <p className="text-red-800 mb-3">
                <strong>Problem:</strong> {mistake.problem}
              </p>
              <p className="text-red-700">
                <strong>Solution:</strong> {mistake.solution}
              </p>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Portfolio Checklist">
        <BlogChecklist
          title="STEM Portfolio Completion Checklist"
          description="Complete these steps to build a comprehensive STEM portfolio"
          items={portfolioChecklist}
        />
      </BlogSection>

      <BlogSection title="Using Your Portfolio">
        <p className="text-gray-700 mb-6">
          Different situations call for different presentation approaches.
          Here's how to adapt your portfolio:
        </p>

        <div className="space-y-6">
          {presentationTips.map((tip, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                {tip.situation}
              </h3>
              <ul className="space-y-2">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-700">
                    <Users className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </BlogSection>

      <BlogSection title="Frequently Asked Questions">
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <BlogSection title="Start Building Today">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 text-center">
          <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Your STEM Journey Deserves Documentation
          </h3>
          <p className="text-gray-700 mb-6">
            Every project you complete, every problem you solve, and every skill
            you develop is worth showcasing. Start building your portfolio today
            and watch your confidence and opportunities grow.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Your portfolio is a living document.
              Start simple, be consistent, and improve over time. The journey of
              building it is just as valuable as the final product.
            </p>
          </div>
        </div>
      </BlogSection>
    </BlogLayout>
  );
}
