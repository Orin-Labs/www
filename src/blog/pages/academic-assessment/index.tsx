import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, TrendingUp } from "lucide-react";
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
  SocialShareButtons,
} from "@blog/components";

export default function MAPStateTestsCompleteGuide() {
  const gradeExpectations = [
    {
      grade: "6th Grade",
      reading: "210-220",
      mathematics: "220-230",
      language: "210-215",
    },
    {
      grade: "7th Grade",
      reading: "215-225",
      mathematics: "225-235",
      language: "215-220",
    },
    {
      grade: "8th Grade",
      reading: "220-230",
      mathematics: "230-240",
      language: "220-225",
    },
  ];

  const keyInsights = [
    {
      text: "MAP testing adapts to your child's responses—if they answer correctly, questions become harder; if incorrect, they become easier.",
    },
    {
      text: "RIT scores provide an absolute measure of what your child knows, unlike percentiles which only show comparisons to other students.",
    },
    {
      text: "Growth often matters more than achievement—a student showing consistent improvement is on a stronger trajectory than one who plateaus.",
    },
    {
      text: "The test is designed so students get about 50% of questions correct—this isn't failure, it's the adaptive system finding their level.",
    },
    {
      text: "MAP scores can predict state test performance and help teachers adjust instruction throughout the year.",
    },
  ];

  const testingBenefits = [
    {
      title: "Adaptive Precision",
      imageUrl:
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "MAP adapts to your child's ability level in real-time, providing a more accurate assessment than traditional fixed tests.",
      metadata: { "Key Benefit": "Precise measurement" },
    },
    {
      title: "Growth Tracking",
      imageUrl:
        "https://images.unsplash.com/photo-1665956600293-4511bd26ea98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      description:
        "Same scale across all grades allows tracking of academic growth from year to year with unprecedented accuracy.",
      metadata: { "Key Benefit": "Longitudinal data" },
    },
    {
      title: "Instructional Insights",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663937576267-b178ecd95bfa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      description:
        "Teachers use MAP data to form learning groups, identify gaps, and personalize instruction for each student.",
      metadata: { "Key Benefit": "Targeted support" },
    },
  ];

  const scoreInterpretation = [
    {
      title: "RIT Score",
      details: [
        "Your student's absolute achievement level on a stable scale (typically 140-300)",
        "Equal intervals—difference between 200-210 equals difference between 230-240",
        "Shows exactly what your child knows regardless of grade level",
        "Can be tracked consistently across years and subjects",
      ],
      color: "blue" as const,
    },
    {
      title: "Percentile Rank",
      details: [
        "Compares your student to others nationally in their grade",
        "65th percentile = better than 65% of students nationwide",
        "50th percentile = exactly average performance",
        "Percentiles can fluctuate even when RIT scores improve",
      ],
      color: "green" as const,
    },
    {
      title: "Growth Percentile",
      details: [
        "Compares your student's growth to others who started at the same level",
        "Above 50th percentile = above-average growth",
        "More important than static achievement scores",
        "Shows learning trajectory and potential",
      ],
      color: "purple" as const,
    },
  ];

  const supportStrategies = [
    {
      title: "📈 Focus on Growth",
      subtitle: "Celebrate progress",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667354153969-8a8e59d7e18c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      description:
        "Praise effort and improvement over raw scores. A jump from 30th to 40th percentile represents significant growth.",
      metadata: { Impact: "Builds confidence" },
    },
    {
      title: "📚 Regular Reading",
      subtitle: "Diverse genres",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1665426465755-953214e31c2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      description:
        "Encourage reading across various genres to build comprehension skills measured by MAP assessments.",
      metadata: { Impact: "Improves literacy" },
    },
    {
      title: "🧮 Math Fluency",
      subtitle: "Build foundations",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661962443588-4b5c4ad9a799?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      description:
        "Practice math facts regularly to build the fluency that underlies higher-level mathematical reasoning.",
      metadata: { Impact: "Strengthens math" },
    },
    {
      title: "🏠 Home Environment",
      subtitle: "Supportive atmosphere",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1738634511326-c60cefa6ec0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      description:
        "Create a learning-focused home environment that emphasizes growth, curiosity, and academic effort.",
      metadata: { Impact: "Comprehensive support" },
    },
  ];

  const actionPlanItems = [
    {
      id: "1",
      text: "Review your student's most recent MAP scores using this guide's framework",
    },
    {
      id: "2",
      text: "Schedule a conference with teachers to discuss scores and set realistic goals",
    },
    {
      id: "3",
      text: "Create a supportive home environment that encourages learning and growth",
    },
    {
      id: "4",
      text: "Monitor progress throughout the year and celebrate incremental improvements",
    },
    {
      id: "5",
      text: "Focus conversations on growth patterns rather than single test results",
    },
    {
      id: "6",
      text: "Use MAP data to identify specific skill areas needing attention",
    },
    {
      id: "7",
      text: "Advocate for appropriate supports or challenges based on your student's needs",
    },
    {
      id: "8",
      text: "Prepare for test days with proper nutrition, sleep, and stress management",
    },
    {
      id: "9",
      text: "Stay informed about changes in assessment and educational policy",
    },
    {
      id: "10",
      text: "Remember that your student is more than any single test score",
    },
  ];

  const faqItems = [
    {
      question: "What is MAP testing and how does it work?",
      answer:
        "MAP (Measures of Academic Progress) is a computer-adaptive assessment that adjusts question difficulty based on student responses. If a student answers correctly, the next question becomes slightly more challenging; if incorrect, it becomes easier. This approach provides a more accurate picture of what students know and are ready to learn next, regardless of grade level.",
    },
    {
      question: "How do I interpret my child's RIT scores?",
      answer:
        "RIT scores are on a stable scale typically ranging from 140-300. For middle school, expect scores between 200-250. The key is understanding that RIT scores show absolute achievement—what your child actually knows—rather than just comparing them to others. Growth in RIT scores over time is more important than any single score.",
    },
    {
      question: "Why does my child sometimes score lower on MAP tests?",
      answer:
        "MAP tests are designed to be challenging—students typically get about 50% of questions correct. This isn't failure; it's the adaptive system finding their optimal difficulty level. Factors like test conditions, student motivation, curriculum changes, or natural learning curves can affect scores.",
    },
    {
      question: "How do MAP scores connect to state testing?",
      answer:
        "MAP scores often predict state test performance because they measure similar skills. Schools often use MAP data to: identify students who may need additional support before state testing, adjust instruction to address learning gaps, and celebrate growth and achievement throughout the year. The ongoing nature of MAP testing provides more actionable data than annual state assessments.",
    },
    {
      question: "Should I be concerned if my child's scores went down?",
      answer:
        "Not necessarily. Score fluctuations can happen due to various factors including test conditions, student motivation, or curriculum changes. Look at trends over multiple testing windows rather than single scores. Sometimes a temporary dip precedes significant growth as students tackle more challenging material.",
    },
    {
      question: "How can I support my child's MAP performance at home?",
      answer:
        "Focus on consistent academic support rather than test prep. Encourage regular reading across genres, practice math facts for fluency, support homework completion, and create a learning-focused home environment. The best preparation is quality instruction and engagement throughout the year.",
    },
    {
      question: "What's the difference between achievement and growth?",
      answer:
        "Achievement shows where your student is right now compared to grade-level expectations, while growth shows how much they've improved over time. A student starting below grade level but showing consistent growth is often on a stronger trajectory than one who starts high but plateaus.",
    },
    {
      question: "How often are MAP tests given?",
      answer:
        "Most schools administer MAP tests 2-3 times per year (fall, winter, spring). This frequency allows tracking of growth over time and helps teachers adjust instruction. The tests typically take 45-60 minutes per subject.",
    },
    {
      question: "Can students retake MAP tests?",
      answer:
        "MAP tests are typically administered on set school schedules, and individual retakes aren't standard practice. However, speak with your child's teacher about additional assessment options or ways to demonstrate growth between testing periods.",
    },
    {
      question: "Do MAP scores determine high school placement?",
      answer:
        "Many schools use MAP data alongside other factors for course placement and program decisions. However, scores alone don't determine academic outcomes—teachers consider multiple data points including classroom performance, work habits, and student motivation.",
    },
  ];

  const expectationTableColumns = [
    { header: "Grade", key: "grade", className: "font-semibold" },
    { header: "Reading", key: "reading", className: "text-center" },
    { header: "Mathematics", key: "mathematics", className: "text-center" },
    { header: "Language Usage", key: "language", className: "text-center" },
  ];

  // Track page engagement
  useEffect(() => {
    const startTime = Date.now();

    posthog.capture("map_complete_guide_started", {
      blog_post_id: "map-state-tests-complete-guide",
      blog_post_title:
        "All About MAP & State Tests in Grades 6-8: A Parent's Complete Guide",
      start_time: startTime,
    });

    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      posthog.capture("map_complete_guide_time_spent", {
        blog_post_id: "map-state-tests-complete-guide",
        time_spent_ms: timeSpent,
        time_spent_minutes: Math.round(timeSpent / 60000),
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <BlogLayout>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-lg text-gray-700 italic">
            As your middle schooler navigates the academic landscape, you've
            likely encountered terms like "MAP testing," "RIT scores," and
            "state assessments." While these assessments might seem
            overwhelming, understanding them is crucial for supporting your
            student's educational journey. The reality is that educational
            assessment is evolving rapidly, and staying informed helps you
            advocate effectively for your child.
          </p>
        </div>
      </motion.div>

      {/* Key Insights */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <NumberedList
          title="🎯 Essential MAP Testing Insights"
          items={keyInsights}
          itemClassName="border-gray-200 text-gray-800"
        />
      </div>

      {/* What is MAP Testing */}
      <BlogSection title="What is MAP Testing?">
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg leading-relaxed mb-6">
            MAP (Measures of Academic Progress) is a computer-adaptive
            assessment created by NWEA (Northwest Evaluation Association) that
            measures student growth in reading, language usage, and mathematics.
            Unlike traditional tests where every student answers the same
            questions, MAP testing adapts to your child's responses—if they
            answer correctly, the next question becomes slightly more
            challenging; if they answer incorrectly, the next question becomes
            easier.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            This adaptive approach provides a more accurate picture of what your
            student knows and is ready to learn next, regardless of their grade
            level. Think of it as a personalized academic GPS that shows exactly
            where your child stands and where they're headed.
          </p>
        </div>

        <BlogCardGrid cards={testingBenefits} />

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6">
          <h3 className="text-xl font-bold mb-3 text-blue-900">
            How MAP Testing Works
          </h3>
          <p className="text-blue-800 mb-4">
            When your middle schooler sits down for a MAP test, they're engaging
            with a sophisticated system designed to find their "sweet spot"—the
            level where they're getting about 50% of questions correct. This
            might sound concerning, but it's actually ideal.
          </p>
          <p className="text-blue-800">
            The test typically takes 45-60 minutes per subject and is
            administered 2-3 times per year (fall, winter, and spring). Each
            testing session builds a comprehensive picture of your student's
            academic growth over time.
          </p>
        </div>
      </BlogSection>

      {/* Understanding RIT Scores */}
      <BlogSection title="Understanding RIT Scores: The Heart of MAP Testing">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            RIT stands for Rasch Unit, a stable scale that measures achievement
            and growth. Unlike percentiles, which compare your child to other
            students, RIT scores provide an absolute measure of what your child
            knows and can do.
          </p>
        </div>

        <ScenarioGrid scenarios={scoreInterpretation} />

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">
            RIT Score Ranges for Middle School
          </h3>
          <p className="text-lg mb-6">
            RIT scores generally range between 140 and 300, with middle school
            students typically scoring between 200-250. Here's what you can
            expect:
          </p>

          <ComparisonTable
            columns={expectationTableColumns}
            data={gradeExpectations}
            className="mb-6"
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <strong>Important:</strong> These ranges represent average
              performance, but remember that every student's journey is unique.
              Some students may score above or below these ranges and still be
              making excellent progress.
            </p>
          </div>
        </div>
      </BlogSection>

      {/* Growth vs Achievement */}
      <BlogSection title="Growth vs. Achievement: What Really Matters?">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            One of the most important concepts for parents to understand is the
            difference between achievement and growth. Achievement tells you
            where your student is right now compared to grade-level
            expectations, while growth tells you how much they've improved over
            time.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-green-900">
            <TrendingUp className="inline-block w-6 h-6 mr-2" />
            Why Growth Often Matters More
          </h3>
          <p className="text-green-800 mb-4">
            A student who starts the year significantly below grade level but
            shows consistent growth throughout the year is demonstrating
            remarkable progress, even if their final score isn't at grade level.
            Conversely, a student who starts above grade level but shows little
            growth may need additional challenges or support.
          </p>
          <p className="text-green-800">
            MAP testing excels at measuring growth because it uses the same
            scale across all grade levels. This means you can track your
            student's progress year after year, seeing their academic journey
            unfold in real-time.
          </p>
        </div>
      </BlogSection>

      {/* How MAP Connects to State Testing */}
      <BlogSection title="How MAP Connects to State Testing">
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg leading-relaxed mb-6">
            While MAP testing provides ongoing insights into your student's
            progress, state tests serve a different purpose. State assessments
            are typically administered once per year and measure whether
            students are meeting state standards for their grade level.
          </p>

          <h3 className="text-xl font-bold mb-4">
            The Relationship Between MAP and State Tests
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            MAP scores can be strong predictors of state test performance.
            Schools often use MAP data to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              Identify students who may need additional support before state
              testing
            </li>
            <li>Adjust instruction to address learning gaps</li>
            <li>Celebrate growth and achievement throughout the year</li>
          </ul>
        </div>
      </BlogSection>

      {/* Supporting Your Student */}
      <BlogSection title="Beyond the Numbers: Supporting Your Middle Schooler">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            While understanding scores is important, remember that your student
            is more than any single test result. Here's how to use this
            information constructively:
          </p>
        </div>

        <BlogCardGrid cards={supportStrategies} columns={2} />

        <div className="mt-8 bg-purple-50 border-l-4 border-purple-400 p-6">
          <h3 className="text-xl font-bold mb-3 text-purple-900">
            <Brain className="inline-block w-6 h-6 mr-2" />
            The Middle School Context
          </h3>
          <p className="text-purple-800 mb-4">
            Middle school presents unique challenges for assessment. Students
            are dealing with increased academic demands, social pressures, and
            significant developmental changes. Understanding this context helps
            frame testing results appropriately.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">6th Grade</h4>
              <p className="text-purple-800 text-sm">
                The transition year - adjusting to new structures and
                expectations
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">7th Grade</h4>
              <p className="text-purple-800 text-sm">
                Finding their footing - more consistent growth patterns emerge
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">8th Grade</h4>
              <p className="text-purple-800 text-sm">
                Preparing for high school - scores influence course placement
              </p>
            </div>
          </div>
        </div>
      </BlogSection>

      {/* Action Plan */}
      <BlogSection title="Your Action Plan: Moving Forward">
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Understanding MAP testing and state assessments empowers you to
            support your middle schooler effectively. Here's your comprehensive
            action plan:
          </p>
        </div>

        <BlogChecklist
          title="Complete MAP Success Action Plan"
          description="Follow this systematic approach to leverage MAP data for your student's benefit:"
          items={actionPlanItems}
        />
      </BlogSection>

      {/* FAQ */}
      <BlogFAQ items={faqItems} />

      {/* Conclusion */}
      <BlogSection title="Conclusion: Embracing the Journey">
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg leading-relaxed mb-6">
            MAP testing and state assessments are tools designed to support your
            student's educational journey. While the numbers and percentiles
            might seem overwhelming at first, they provide valuable insights
            that can help you and your student's teachers make informed
            decisions about instruction and support.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Remember that your middle schooler is growing and developing
            rapidly, both academically and personally. Test scores are just one
            snapshot of their abilities at a particular moment in time. The most
            important thing you can do is maintain open communication with your
            student and their teachers, celebrate growth and effort, and provide
            the support they need to succeed.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            As education continues to evolve, staying informed about assessment
            tools like MAP testing helps you advocate effectively for your
            student and ensure they receive the support they need to thrive. The
            investment you make in understanding these assessments today will
            pay dividends in your ability to support your student's educational
            journey throughout middle school and beyond.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 text-center">
          <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <p className="text-lg font-semibold text-blue-900 mb-4">
            Ready to support your student's MAP success?
          </p>
          <Button
            bg="gray"
            shadow="neu"
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => window.open("https://incortical.com", "_blank")}
          >
            Get Personalized Support with Orin
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </BlogSection>

      {/* Social Share */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <SocialShareButtons
          title="All About MAP & State Tests in Grades 6-8: A Parent's Complete Guide"
          url={window.location.href}
          description="A comprehensive guide to understanding MAP testing and state assessments for middle school students"
          blogPostId="map-state-tests-complete-guide"
        />
      </div>

      {/* Related Articles */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold mb-2">Understanding RIT Scores</h3>
            <p className="text-gray-600 mb-4">
              Deep dive into MAP score interpretation and what the numbers
              really mean for your student.
            </p>
            <Button
              bg="gray"
              shadow="neu"
              className="text-gray-900"
              onClick={() =>
                (window.location.href =
                  "/blog/academic-assessment/understanding-rit-scores")
              }
            >
              Read More
            </Button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold mb-2">State Test Prep Strategies</h3>
            <p className="text-gray-600 mb-4">
              Practical strategies for preparing your middle schooler for state
              assessments.
            </p>
            <Button
              bg="gray"
              shadow="neu"
              className="text-gray-900"
              onClick={() =>
                (window.location.href =
                  "/blog/academic-assessment/state-test-prep-strategies")
              }
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      <Odyssey />
    </BlogLayout>
  );
}
