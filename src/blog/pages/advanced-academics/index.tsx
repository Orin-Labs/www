import React, { useEffect } from "react";

import { motion } from "framer-motion";
import posthog from "posthog-js";

import { GridCardProps } from "@/blog/components/BlogCardGrid";
import {
  Alert,
  BlogCardGrid,
  BlogChecklist,
  BlogFAQ,
  BlogLayout,
  BlogSection,
  ComparisonTable,
  DecisionTree,
  GPAScale,
  Odyssey,
  ProviderGrid,
  ScenarioGrid,
} from "@blog/components";

// Decision Tree Configuration
const questions = [
  {
    id: 1,
    question:
      "📊 Is your student earning A's in current math with minimal stress?",
    context:
      "Look for consistent performance without excessive tutoring or parent help",
  },
  {
    id: 2,
    question: "⏰ Can they handle 30+ minutes of additional homework nightly?",
    context: "Consider their current schedule and stress levels",
  },
  {
    id: 3,
    question: "🎯 Will this credit create a meaningful pathway advantage?",
    context: "Think about their long-term academic and career goals",
  },
  {
    id: 4,
    question: "💭 Does your student want this challenge?",
    context: "Make sure this is their choice, not just parent-driven",
  },
];

const getDecisionResult = (answers: boolean[]) => {
  const yesCount = answers.filter(Boolean).length;
  const noCount = answers.length - yesCount;

  if (yesCount === 3) {
    return {
      type: "success" as const,
      title: "🎉 Green Light!",
      message:
        "Your student shows strong readiness for high school credit acceleration. Consider moving forward with proper support systems in place.",
      recommendations: [
        "Start with one credit to test the waters",
        "Set up regular check-ins with teachers",
        "Have a backup plan if workload becomes overwhelming",
        "Focus on subjects that align with their interests",
      ],
    };
  } else if (noCount === 1) {
    return {
      type: "caution" as const,
      title: "⚠️ Proceed with Caution",
      message:
        "There are some concerns to address. Consider strengthening weak areas before acceleration.",
      recommendations: [
        "Address the specific concern identified",
        "Consider waiting one semester to build readiness",
        "Look into enrichment options within grade level",
        "Reassess readiness in 3-6 months",
      ],
    };
  } else {
    return {
      type: "wait" as const,
      title: "🛑 Wait and Build Foundation",
      message:
        "Your student would benefit from focusing on fundamentals before acceleration. This isn't a permanent 'no' - just 'not yet'.",
      recommendations: [
        "Focus on building strong study habits",
        "Consider enrichment within current grade level",
        "Look into STEM programs and competitions",
        "Reassess readiness next year",
      ],
    };
  }
};

export default function STEMElectivesGuide() {
  // Track page load and engagement
  useEffect(() => {
    const startTime = Date.now();

    posthog.capture("stem_electives_guide_started", {
      blog_post_id: "stem-electives-guide",
      blog_post_title:
        "STEM Electives & High School Credit Options in Middle School",
      start_time: startTime,
    });

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );

      if (scrollPercentage > 0 && scrollPercentage % 25 === 0) {
        posthog.capture("blog_scroll_depth", {
          blog_post_id: "stem-electives-guide",
          scroll_percentage: scrollPercentage,
          timestamp: Date.now(),
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Track time spent when leaving page
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      posthog.capture("stem_electives_guide_time_spent", {
        blog_post_id: "stem-electives-guide",
        time_spent_ms: timeSpent,
        time_spent_minutes: Math.round(timeSpent / 60000),
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const algebraComparison = [
    {
      factor: "Homework Load",
      math8: "20-30 min/night",
      algebra1: "45-60 min/night",
    },
    {
      factor: "Pace",
      math8: "Conceptual building",
      algebra1: "Fast-paced problem solving",
    },
    {
      factor: "Support Available",
      math8: "Grade-level teachers",
      algebra1: "High school expectations",
    },
    {
      factor: "GPA Impact",
      math8: "Middle school only",
      algebra1: "Counts toward high school GPA",
    },
    {
      factor: "Next Year Options",
      math8: "Algebra 1 or Pre-Algebra",
      algebra1: "Geometry or Algebra 2",
    },
    {
      factor: "Recovery Options",
      math8: "Easy to remediate",
      algebra1: "Difficult to repeat",
    },
  ];

  const stemPrograms: GridCardProps[] = [
    {
      title: "FIRST Robotics",
      subtitle: "Grades 6-8",
      imageUrl: "https://firstintexas.org/wp-content/uploads/2022/09/FRC5.jpg",
      description:
        "Programming, mechanical design, and teamwork through competitive robotics challenges.",
      metadata: { Time: "8-12 hours/week", Cost: "$200-500" },
      action: {
        text: "Learn More",
        onClick: () => window.open("https://firstinspires.org", "_blank"),
      },
    },
    {
      title: "VEX Robotics",
      subtitle: "Year-round competition",
      imageUrl: "https://cdn.rit.edu/images/news/2021-04/MMET-RIT.jpg",
      description:
        "CAD design, sensors, and autonomous programming with flexible scheduling.",
      metadata: { Time: "6-10 hours/week", Cost: "$150-400" },
      action: {
        text: "Learn More",
        onClick: () => window.open("https://vexrobotics.com", "_blank"),
      },
    },
    {
      title: "Project Lead the Way",
      subtitle: "PLTW Engineering",
      imageUrl: "https://blog.mtparanschool.com/hubfs/PTLW%20ms%20LR-5994.jpg",
      description:
        "Engineering design process and 3D modeling through structured curriculum.",
      metadata: {
        Time: "Daily class period",
        Cost: "Usually covered by school",
      },
      action: {
        text: "Learn More",
        onClick: () => window.open("https://pltw.org", "_blank"),
      },
    },
    {
      title: "Maker Spaces",
      subtitle: "Creative engineering",
      imageUrl:
        "https://www.makerspaces.com/wp-content/uploads/2018/12/Ultimate-Makerspace-Guide-Header.jpg",
      description:
        "Problem-solving and creativity through hands-on projects and collaboration.",
      metadata: { Time: "2-4 hours/week", Cost: "$50-200/year" },
      action: {
        text: "Find Local",
        onClick: () => window.open("https://www.fablabs.io/", "_blank"),
      },
    },
    {
      title: "Summer Programs",
      subtitle: "Various Locations",
      imageUrl:
        "https://www.bostontechmom.com/wp-content/uploads/2022/04/young-girls-playing-with-catapult.jpg",
      description:
        "Intensive 3-week programs in advanced math, science, and computer science.",
      metadata: { Time: "3 weeks", Cost: "$3,000-5,000" },
      action: {
        text: "Apply Now",
        onClick: () => window.open("https://cty.jhu.edu", "_blank"),
      },
    },
    {
      title: "Northwestern CTD",
      subtitle: "Summer programs",
      imageUrl:
        "https://images.unsplash.com/photo-1706466614730-855420835cdd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Accelerated learning in STEM fields with residential and online options for gifted students.",
      metadata: { Time: "2-3 weeks", Cost: "$2,500-4,500" },
      action: {
        text: "Apply Now",
        onClick: () =>
          window.open("https://www.ctd.northwestern.edu/programs", "_blank"),
      },
    },
  ];

  const portfolioComponents = [
    {
      title: "📂 Hosted Projects",
      subtitle: "Showcase your work",
      description:
        "Problem statements, solution approaches, tools used, and lessons learned from each project.",
      metadata: { "Key Benefit": "Demonstrates problem-solving skills" },
      action: {
        text: "Template",
        onClick: () => window.open("https://www.makeareadme.com/", "_blank"),
      },
    },
    {
      title: "💻 Code Samples",
      subtitle: "Programming portfolio",
      description:
        "Commented code, version control, testing documentation, and collaboration evidence.",
      metadata: { "Key Benefit": "Shows technical competency" },
      action: {
        text: "GitHub Guide",
        onClick: () =>
          window.open(
            "https://docs.github.com/en/get-started/quickstart/hello-world",
            "_blank"
          ),
      },
    },
    {
      title: "🏆 Competition Results",
      subtitle: "Achievement showcase",
      description:
        "Robotics competitions, science fairs, math contests, and programming challenges.",
      metadata: { "Key Benefit": "Validates skills objectively" },
      action: {
        text: "Examples",
        onClick: () =>
          window.open(
            "https://www.firstinspires.org/resource-library/youth/competition-results",
            "_blank"
          ),
      },
    },
  ];

  const onlineProviders = [
    {
      name: "APEX Learning",
      description: "$400-600/credit, strong support",
    },
    {
      name: "Edgenuity",
      description: "$300-500/credit, self-paced",
    },
    {
      name: "BYU Independent Study",
      description: "$200-400/credit, flexible timeline",
    },
    {
      name: "Local Community College",
      description:
        "$150-300/credit, transferable. Many offer dual enrollment programs for advanced middle schoolers.",
    },
  ];

  const strategicAdvantages = [
    "High school schedule flexibility",
    "Gradual exposure to college-level rigor",
    "Competitive edge in college applications",
    "Earlier access to advanced coursework",
  ];

  const hiddenCosts = [
    "Increased academic pressure",
    "Potential social separation",
    "Limited recovery time for mistakes",
    "Permanent GPA impact",
  ];

  const decisionFactors = [
    {
      id: "1",
      text: "Your student shows consistent academic strength (not just good grades)",
    },
    {
      id: "2",
      text: "They can handle increased homework load without burnout",
    },
    {
      id: "3",
      text: "The high school credit actually accelerates their pathway",
    },
    { id: "4", text: "Your family can support the additional complexity" },
    {
      id: "5",
      text: "Your student demonstrates strong work habits and self-advocacy",
    },
    { id: "6", text: "They show genuine interest in the subject matter" },
    {
      id: "7",
      text: "You have verified the credit will transfer and count properly",
    },
    {
      id: "8",
      text: "Your student can handle potential social/peer separation",
    },
    { id: "9", text: "Alternative enrichment options have been considered" },
    {
      id: "10",
      text: "Your student actively wants this challenge (not just parent-driven)",
    },
  ];

  const faqItems = [
    {
      question:
        "If my student takes Algebra 1 in 8th grade, what math do they take senior year?",
      answer:
        "The typical sequence becomes: Algebra 1 (8th) → Geometry (9th) → Algebra 2 (10th) → Pre-Calculus (11th) → AP Calculus (12th). This opens doors to advanced math courses and demonstrates sustained rigor to colleges.",
    },
    {
      question:
        "Do colleges really care about middle school high school credits?",
      answer:
        "Yes and no. The credits themselves matter less than the pattern they establish. Colleges see sustained academic challenge and success in accelerated coursework as positive indicators of college readiness and intellectual curiosity.",
    },
    {
      question:
        "What if my student struggles with their first high school credit?",
      answer:
        "Don't panic. Focus on support strategies: tutoring, study groups, teacher communication. If the struggle continues, consider whether the acceleration timeline needs adjustment for future courses. Early intervention is key.",
    },
    {
      question:
        "Are online high school credits viewed differently than in-person credits?",
      answer:
        "Quality online programs from accredited providers are generally viewed equally. However, verify that your target high schools and colleges accept credits from your chosen online provider before enrollment.",
    },
    {
      question: "Should we prioritize math acceleration or foreign language?",
      answer:
        "Consider your student's strengths and interests. Math acceleration has more prerequisites and builds sequentially. Foreign language requires consistent practice but offers more flexibility in timing and doesn't create as rigid a pathway.",
    },
    {
      question: "How do we balance acceleration with social development?",
      answer:
        "Monitor your student's social connections and stress levels. If acceleration isolates them from peers or creates excessive pressure, consider enrichment within grade-level courses instead. Social-emotional development is equally important.",
    },
  ];

  const comparisonTableColumns = [
    { header: "Factor", key: "factor", className: "font-semibold" },
    { header: "Math 8", key: "math8", className: "text-center" },
    { header: "Algebra 1", key: "algebra1", className: "text-center" },
  ];

  return (
    <BlogLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="italic text-xl rounded-lg relative"
      >
        "Should we push for Algebra 1 in 8th grade, or is that just adding
        unnecessary stress?"
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg rounded-lg relative"
      >
        This question keeps parents up at night, especially when everyone else
        seems to have it figured out. The truth? There's no one-size-fits-all
        answer, but there is a clear decision-making framework—and understanding
        how technology is reshaping educational pathways is crucial for making
        informed choices.
      </motion.div>

      <BlogSection
        title="The Big Decision"
        description="Should your student take high school credits in middle school?"
      >
        <ScenarioGrid
          scenarios={[
            {
              title: "Signs they're ready:",
              details: strategicAdvantages,
              color: "green",
            },
            {
              title: "Signs they're not ready:",
              details: hiddenCosts,
              color: "red",
            },
          ]}
        />
      </BlogSection>

      <BlogSection
        title="Step 1 - Decision Flowchart"
        description="A visual guide to help you make a decision about whether to take high school credits in middle school."
      >
        <DecisionTree
          title="Deciding on High School Credits?"
          questions={questions}
          getResult={getDecisionResult}
          imageUrl="https://images.unsplash.com/photo-1706466614730-855420835cdd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </BlogSection>

      <BlogSection
        title="Step 2 - Why Middle School Credits Matter"
        description="Benefits and potential challenges of taking high school credits in middle school."
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Strategic Advantages</h3>
            <p className="text-gray-700 mb-4">
              Early credit acceleration offers several compelling benefits for
              the right student. When a child is genuinely ready for advanced
              coursework, taking high school credits in middle school can create
              significant academic momentum. This approach allows students to
              complete graduation requirements early, opening up opportunities
              for more advanced electives, dual enrollment, or specialized
              programs in high school. It also demonstrates sustained academic
              commitment to colleges and can provide valuable time for exploring
              interests or pursuing other activities.
            </p>
            <p className="text-gray-700">
              The strategic advantages include{" "}
              {strategicAdvantages.join(", ").toLowerCase()}. These benefits
              work together to create a more flexible and enriched high school
              experience for students who are truly prepared for the challenge.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Hidden Costs</h3>
            <p className="text-gray-700 mb-4">
              However, the decision to accelerate isn't without risks. When
              students aren't developmentally ready, the pressure of advanced
              coursework can lead to burnout, anxiety, and a negative
              relationship with learning. The hidden costs often manifest as
              increased stress, reduced time for other important developmental
              activities, and potential gaps in foundational knowledge that
              become apparent later in more advanced courses.
            </p>
            <p className="text-gray-700">
              Key challenges to consider include{" "}
              {hiddenCosts.join(", ").toLowerCase()}. These factors can
              significantly impact a student's academic confidence and long-term
              success if not carefully managed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Bottom Line</h3>
            <p className="text-gray-700 mb-4">
              The fundamental principle is that middle school credits work best
              for students who are naturally ready, not those being pushed to
              keep up with peers or external expectations. The key lies in
              honest assessment of readiness versus external pressure—a
              distinction that requires careful reflection and sometimes
              difficult conversations about what's truly best for the individual
              child.
            </p>
            <p className="text-gray-700">
              Fortunately, with AI-powered assessment tools now available,
              parents have more data than ever to make informed decisions about
              academic acceleration. These tools can help identify genuine
              readiness versus social pressure, providing objective insights to
              guide what is ultimately a deeply personal family decision.
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Step 3 - Algebra 1 vs. Math 8—The Deep Dive">
        <ComparisonTable
          columns={comparisonTableColumns}
          data={algebraComparison}
          className="mb-6"
        />

        <ScenarioGrid
          scenarios={[
            {
              title: "⚠️ Warning Signs to Wait",
              description: "Red flags that suggest waiting",
              details: [
                "Struggling with negative numbers or fraction operations",
                "Consistently needs help with Math 8 homework",
                "Shows math anxiety or avoidance behaviors",
                "Has organizational challenges with current workload",
              ],
              color: "red",
            },
            {
              title: "✅ Green Light Indicators",
              description: "Signs of readiness for acceleration",
              details: [
                "Consistently finishes Math 8 work independently",
                "Asks for additional challenges or extension problems",
                "Shows genuine interest in mathematical problem-solving",
                "Demonstrates strong work habits and self-advocacy",
              ],
              color: "green",
            },
          ]}
        />
      </BlogSection>

      <BlogSection title="Step 4 - Foreign Language & Online Credits">
        <ScenarioGrid
          title="Foreign Language Decision Framework"
          scenarios={[
            {
              title: "The Benefits",
              color: "green",
              details: [
                "Complete 4-year language requirement early",
                "Cultural enrichment and cognitive benefits",
                "Demonstrates sustained commitment to challenge",
                "Practical real-world communication skills",
              ],
            },
            {
              title: "The Challenges",
              color: "red",
              details: [
                "Daily practice required for retention",
                "May be only middle schooler in HS class",
                "Scheduling conflicts with other electives",
                "Cost factor: $200-800 for online programs",
              ],
            },
          ]}
        />

        <ProviderGrid
          title="Top Online Credit Providers"
          providers={onlineProviders}
          className="mt-6"
        />
      </BlogSection>

      <BlogSection title="Step 5 - Robotics & Engineering Pathways">
        <p className="mb-6">
          Quality STEM programs provide excellent preparation for advanced high
          school courses and demonstrate sustained interest in technical
          fields—valuable for college applications and career exploration. As
          technology reshapes the job market, early exposure to these fields
          becomes increasingly important.
        </p>

        <BlogCardGrid cards={stemPrograms} />
      </BlogSection>

      <BlogSection title="Step 6 - GPA Starts Counting—The Reality Check">
        <GPAScale title="GPA Scale for High School Credits" className="mb-6" />

        <ScenarioGrid
          title="Real-World Examples"
          scenarios={[
            {
              title: "Scenario 1: The Overachiever",
              description: "High performance sets expectations",
              details: [
                "Takes 3 HS credits in 8th grade",
                "Earns 2 A's and 1 B",
                "Starts high school with 3.67 GPA",
                "Must maintain high performance to improve",
              ],
              color: "green",
            },
            {
              title: "Scenario 2: The Struggling Accelerator",
              description: "Early challenges create uphill battle",
              details: [
                "Takes 2 HS credits in 8th grade",
                "Earns 1 B and 1 C",
                "Starts high school with 2.5 GPA",
                "Significant recovery needed",
              ],
              color: "red",
            },
          ]}
        />

        <Alert type="error" title="CRITICAL WARNING:" className="mt-4">
          Every high school credit earned in middle school usually becomes
          permanent. Unlike middle school grades that disappear, these can
          follow students through graduation and college applications. A single
          C or D could impact their GPA for years.
        </Alert>
      </BlogSection>

      <BlogSection title="Step 7 - Building a STEM Portfolio">
        <p className="mb-6">
          A strong STEM portfolio showcases your student's growth, interests,
          and technical skills. Start early and focus on quality over quantity.
          In today's digital-first world, demonstrating technological fluency is
          as important as traditional academic achievements.
        </p>

        <BlogCardGrid cards={portfolioComponents} />

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mt-6 shadow-md border border-purple-200">
          <h4 className="font-bold text-purple-800 mb-2">
            📋 Portfolio Building Tips
          </h4>
          <ul className="text-sm space-y-1">
            <li>• Start early: Begin documenting projects in 6th grade</li>
            <li>
              • Quality over quantity: 3-5 well-documented projects beat 15
              snapshots
            </li>
            <li>
              • Show growth: Include early work alongside advanced projects
            </li>
            <li>
              • Tell stories: Explain your thinking process, not just final
              results
            </li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection title="Step 8 - Action Planning Checklist">
        <BlogChecklist
          title="High School Credit Decision Checklist"
          description="Check off each factor that applies to your student before committing to acceleration:"
          items={decisionFactors}
        />
      </BlogSection>

      <BlogFAQ items={faqItems} />

      <Odyssey />
    </BlogLayout>
  );
}
