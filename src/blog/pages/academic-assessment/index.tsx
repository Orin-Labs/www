import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import posthog from "posthog-js";

import { Button } from "@/Button";
import {
  BlogCardGrid,
  BlogChecklist,
  BlogFAQ,
  BlogLayout,
  BlogSection,
  ComparisonTable,
  NumberedList,
  Odyssey,
  ScenarioGrid,
} from "@blog/components";

export default function MAPStateTestsGuide() {
  const gradeExpectations = [
    {
      grade: "6th Grade",
      mathFall: "215",
      mathWinter: "220",
      mathSpring: "225",
      readingFall: "205",
      readingWinter: "210",
      readingSpring: "215",
    },
    {
      grade: "7th Grade",
      mathFall: "225",
      mathWinter: "230",
      mathSpring: "235",
      readingFall: "215",
      readingWinter: "220",
      readingSpring: "225",
    },
    {
      grade: "8th Grade",
      mathFall: "235",
      mathWinter: "240",
      mathSpring: "245",
      readingFall: "225",
      readingWinter: "230",
      readingSpring: "235",
    },
  ];

  const scoreDecoderItems = [
    {
      text: "RIT scores are like academic GPS coordinates—they show exactly where your student stands in their learning journey, regardless of grade level.",
    },
    {
      text: "Percentiles tell you the comparison story—65th percentile means better than 65% of students nationwide.",
    },
    {
      text: "Growth matters more than the number—jumping from 200 to 215 RIT shows stronger progress than staying flat at 230.",
    },
    {
      text: "State test predictions are built-in—MAP scores often predict performance on your state's annual assessments.",
    },
    {
      text: "Your action plan starts now—understanding scores helps you support learning year-round, not just during test season.",
    },
  ];

  const conversationStarters = [
    {
      title: "📉 Lower Than Expected Scores",
      subtitle: "Focus on growth opportunities",
      description:
        "These scores show us exactly where to focus our energy. What math topics felt most challenging during the test?",
      metadata: { "Key Benefit": "Builds growth mindset" },
    },
    {
      title: "📈 High Scores",
      subtitle: "Praise effort over ability",
      description:
        "Your preparation really paid off. Which strategies worked best for you?",
      metadata: { "Key Benefit": "Reinforces good habits" },
    },
    {
      title: "📊 Inconsistent Scores",
      subtitle: "Normalize different growth rates",
      description:
        "It's normal for skills to develop at different rates. Let's make a plan to support your reading growth.",
      metadata: { "Key Benefit": "Reduces anxiety" },
    },
  ];

  const resourceLibrary = [
    {
      title: "Khan Academy",
      subtitle: "Personalized practice",
      description:
        "Personalized practice aligned to MAP scores with immediate feedback.",
      metadata: { Cost: "Free" },
      action: {
        text: "Visit Site",
        onClick: () => window.open("https://khanacademy.org", "_blank"),
      },
    },
    {
      title: "IXL",
      subtitle: "Skill-specific practice",
      description:
        "Skill-specific practice with immediate feedback and progress tracking.",
      metadata: { Cost: "Subscription" },
      action: {
        text: "Visit Site",
        onClick: () => window.open("https://ixl.com", "_blank"),
      },
    },
    {
      title: "Prodigy Math",
      subtitle: "Game-based learning",
      description:
        "Game-based learning that adapts to ability level and keeps students engaged.",
      metadata: { Cost: "Freemium" },
      action: {
        text: "Visit Site",
        onClick: () => window.open("https://prodigygame.com", "_blank"),
      },
    },
    {
      title: "ReadWorks",
      subtitle: "Comprehension passages",
      description:
        "Comprehension passages at appropriate RIT levels with built-in assessments.",
      metadata: { Cost: "Free" },
      action: {
        text: "Visit Site",
        onClick: () => window.open("https://readworks.org", "_blank"),
      },
    },
    {
      title: "Photomath",
      subtitle: "Step-by-step solutions",
      description:
        "Step-by-step problem solving with camera-based equation recognition.",
      metadata: { Cost: "Freemium" },
      action: {
        text: "Download App",
        onClick: () => window.open("https://photomath.com/app", "_blank"),
      },
    },
    {
      title: "Epic Books",
      subtitle: "Digital reading library",
      description:
        "Reading library with level recommendations and progress tracking.",
      metadata: { Cost: "Subscription" },
      action: {
        text: "Visit Site",
        onClick: () => window.open("https://getepic.com", "_blank"),
      },
    },
  ];

  const actionPlanItems = [
    {
      id: "1",
      text: "Review score reports together - celebrate strengths, identify 1-2 focus areas",
    },
    {
      id: "2",
      text: "Set realistic goals using growth expectations for your child's grade level",
    },
    {
      id: "3",
      text: "Create study schedule - 15 minutes daily beats 2-hour weekend cramming",
    },
    {
      id: "4",
      text: "Communicate with teachers - share concerns and ask for specific support strategies",
    },
    {
      id: "5",
      text: "Ensure healthy breakfast on test day - protein + complex carbs for sustained energy",
    },
    { id: "6", text: "Arrive early to reduce stress in familiar environment" },
    {
      id: "7",
      text: "Focus on growth first when results arrive - compare to previous scores, not other students",
    },
    {
      id: "8",
      text: "Identify patterns - which subjects/skills need attention?",
    },
    {
      id: "9",
      text: "Plan interventions - extra practice, tutoring, or enrichment as needed",
    },
    {
      id: "10",
      text: "Celebrate progress - acknowledge effort and improvement over raw scores",
    },
  ];

  const faqItems = [
    {
      question:
        "My child's scores went down from last year. Should I be worried?",
      answer:
        "Not necessarily. Score fluctuations happen due to test conditions, student motivation, curriculum changes, or natural learning curves. Look at the trend over multiple tests rather than single-point comparisons. A temporary dip often precedes significant growth.",
    },
    {
      question: "Can students retake MAP tests if they perform poorly?",
      answer:
        "MAP tests are typically administered by schools on set schedules. Individual retakes aren't standard practice, but speak with your child's teacher about additional assessment options or ways to demonstrate growth between testing periods.",
    },
    {
      question: "How do MAP scores relate to report card grades?",
      answer:
        "MAP measures academic growth while grades reflect classroom performance, homework completion, and behavior. A student might have strong MAP growth but lower grades due to missing assignments, or vice versa. Both provide valuable but different information.",
    },
    {
      question: "Are MAP scores used for middle school placement decisions?",
      answer:
        "Many schools use MAP data alongside other factors for course placement, gifted programs, and intervention support. Scores alone don't determine academic fate - teachers consider multiple data points including classroom performance and student motivation.",
    },
    {
      question: "How often should I check my child's MAP progress?",
      answer:
        "Most schools test 2-3 times per year. Focus on growth between testing periods rather than obsessing over individual scores. The trend matters more than any single test result.",
    },
    {
      question: "Do MAP scores predict high school success?",
      answer:
        "MAP scores show current academic standing, but motivation, study habits, and support systems matter more for long-term success. Strong middle school growth patterns often continue into high school, but they're not destiny.",
    },
  ];

  const expectationTableColumns = [
    { header: "Grade", key: "grade", className: "font-semibold" },
    { header: "Math Fall", key: "mathFall", className: "text-center" },
    { header: "Math Winter", key: "mathWinter", className: "text-center" },
    { header: "Math Spring", key: "mathSpring", className: "text-center" },
    { header: "Reading Fall", key: "readingFall", className: "text-center" },
    {
      header: "Reading Winter",
      key: "readingWinter",
      className: "text-center",
    },
    {
      header: "Reading Spring",
      key: "readingSpring",
      className: "text-center",
    },
  ];

  // Track page load and engagement
  useEffect(() => {
    const startTime = Date.now();

    posthog.capture("map_state_tests_guide_started", {
      blog_post_id: "map-state-tests-guide",
      blog_post_title: "The Complete MAP & State Tests Guide for Grades 6-8",
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
          blog_post_id: "map-state-tests-guide",
          scroll_percentage: scrollPercentage,
          timestamp: Date.now(),
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Track time spent when leaving page
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      posthog.capture("map_state_tests_guide_time_spent", {
        blog_post_id: "map-state-tests-guide",
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

  return (
    <BlogLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-6 mb-8 italic text-lg rounded-lg relative"
      >
        Sarah stared at her daughter's MAP test results, feeling completely
        lost. "RIT 220... is that good? Bad? What does any of this mean for 7th
        grade?" If you've ever felt overwhelmed by testing scores and acronyms,
        you're not alone—and you're about to get clarity on how to navigate this
        data-driven education landscape.
      </motion.div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <NumberedList
          title="📥 5-Point Score Decoder"
          items={scoreDecoderItems}
          itemClassName="border-gray-200 text-gray-800"
        />
        <Button
          bg="gray"
          shadow="neu"
          className="mt-6 ml-auto gap-2 text-gray-900"
          onClick={() =>
            window.open("https://www.nwea.org/resource-center/", "_blank")
          }
        >
          <FileText className="w-4 h-4" />
          Download RIT Chart & Percentile Guide
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <BlogSection title="Step 1 - What the Numbers Actually Mean">
        <p className="mb-6">
          MAP tests produce two key numbers you need to understand:
        </p>

        <ScenarioGrid
          scenarios={[
            {
              title: "RIT Score (Rasch unIT)",
              details: [
                "Think of this as your student's academic coordinate on a massive learning map",
                "Unlike grade-level tests that max out, RIT scores can grow infinitely",
                "A 6th grader reading at a 9th-grade level will have a high RIT score that reflects their true ability",
              ],
              color: "green",
            },
            {
              title: "Percentile Rank",
              details: [
                "This compares your student to others nationwide",
                "It's not about passing or failing—it's about relative performance",
                "50th percentile means exactly average performance",
              ],
              color: "red",
            },
          ]}
        />

        <h3 className="text-2xl font-bold mb-4 mt-8">
          Grade-Level Expectations
        </h3>

        <ComparisonTable
          columns={expectationTableColumns}
          data={gradeExpectations}
          className="mb-6"
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> These are national averages. Your
                student's individual growth pattern matters more than hitting
                these exact numbers. Focus on progress, not perfection.
              </p>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection title="Step 2 - Growth vs. Proficiency—What Really Matters">
        <p className="mb-6">
          Here's where parents get confused: Is it better to have a high score
          with little growth, or lower score with big gains?
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            🎯 Growth Wins Every Time
          </h3>
          <p className="mb-4 text-gray-700">
            Research shows that students who demonstrate consistent growth—even
            if starting behind—outperform high-scoring students who plateau.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2 text-gray-800">
              Typical Growth Expectations:
            </h4>
            <ul className="text-left space-y-1 text-gray-700">
              <li>
                <strong>High-achieving students:</strong> 4-6 RIT points per
                year
              </li>
              <li>
                <strong>Average students:</strong> 6-8 RIT points per year
              </li>
              <li>
                <strong>Below-average students:</strong> 8-12 RIT points per
                year
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            The lower the starting point, the more growth potential exists. A
            student jumping from 190 to 205 RIT shows incredible progress that
            should be celebrated.
          </p>
        </div>
      </BlogSection>

      <BlogSection title="Step 3 - Score-Based Conversation Starters">
        <p className="mb-6">
          How you talk about test results shapes your student's relationship
          with learning. These conversation frameworks help turn numbers into
          growth opportunities:
        </p>

        <BlogCardGrid cards={conversationStarters} />
      </BlogSection>

      <BlogSection title="Step 4 - Resource Library by RIT Range">
        <p className="mb-6">
          Don't waste time on resources that don't match your student's level.
          These tools are specifically selected for middle school RIT ranges:
        </p>

        <BlogCardGrid cards={resourceLibrary} />

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-center text-blue-800 font-semibold">
            💡 <strong>Pro Tip:</strong> If you're working with Orin, let him
            know your student's RIT score and he'll set the difficulty level of
            lessons accordingly.
          </p>
        </div>
      </BlogSection>

      <BlogSection title="Step 5 - Action Planning Checklist">
        <BlogChecklist
          title="MAP Score Action Plan"
          description="Use this checklist to turn test results into meaningful support:"
          items={actionPlanItems}
        />
      </BlogSection>

      <BlogFAQ items={faqItems} />

      <Odyssey />
    </BlogLayout>
  );
}
