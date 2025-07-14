import {
  Brain,
  Target,
} from 'lucide-react';

import { Alert } from '@/blog/components/Alert';
import { BlogCardGrid } from '@/blog/components/BlogCardGrid';
import {
  BlogChecklist,
  ChecklistItem,
} from '@/blog/components/BlogChecklist';
import {
  BlogFAQ,
  FAQItem,
} from '@/blog/components/BlogFAQ';
import { BlogLayout } from '@/blog/components/BlogLayout';
import { BlogSection } from '@/blog/components/BlogSection';
import { ComparisonTable } from '@/blog/components/ComparisonTable';
import { ScenarioGrid } from '@/blog/components/ScenarioGrid';

import { Ad } from '../components/Ad';
import { asMetadata } from '../utils';

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
    ],
    color: "green" as const,
  },
  {
    title: "Growth Percentile",
    details: [
      "Compares your student's growth to others who started at the same level",
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
      "Practice math facts regularly to build the fluency that underlies higher-level mathematical reasoning. See our <a href='/blog/math-foundations'>comprehensive math playbook</a> for detailed strategies.",
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

const actionPlanItems: ChecklistItem[] = [
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

const faqItems: FAQItem[] = [
  {
    question: "What is MAP testing and how does it work?",
    answer:
      "MAP (Measures of Academic Progress) is a computer-adaptive assessment that adjusts question difficulty based on student responses. If a student answers correctly, the next question becomes slightly more challenging; if incorrect, it becomes easier. This approach provides a more accurate picture of what students know and are ready to learn next, regardless of grade level.",
    icon: "brain",
  },
  {
    question: "How do I interpret my child's RIT scores?",
    answer:
      "RIT scores are on a stable scale typically ranging from 140-300. For middle school, expect scores between 200-250. The key is understanding that RIT scores show absolute achievement—what your child actually knows—rather than just comparing them to others. Growth in RIT scores over time is more important than any single score.",
    icon: "brain",
  },
  {
    question: "Why does my child sometimes score lower on MAP tests?",
    answer:
      "MAP tests are designed to be challenging—students typically get about 50% of questions correct. This isn't failure; it's the adaptive system finding their optimal difficulty level. Factors like test conditions, student motivation, curriculum changes, or natural learning curves can affect scores.",
    icon: "brain",
  },
  {
    question: "How do MAP scores connect to state testing?",
    answer:
      "MAP scores often predict state test performance because they measure similar skills. Schools often use MAP data to: identify students who may need additional support before state testing, adjust instruction to address learning gaps, and celebrate growth and achievement throughout the year. The ongoing nature of MAP testing provides more actionable data than annual state assessments.",
    icon: "brain",
  },
  {
    question: "Should I be concerned if my child's scores went down?",
    answer:
      "Not necessarily. Score fluctuations can happen due to various factors including test conditions, student motivation, or curriculum changes. Look at trends over multiple testing windows rather than single scores. Sometimes a temporary dip precedes significant growth as students tackle more challenging material.",
    icon: "brain",
  },
  {
    question: "How can I support my child's MAP performance at home?",
    answer:
      "Focus on consistent academic support rather than test prep. Encourage regular reading across genres, practice math facts for fluency, support homework completion, and create a learning-focused home environment. The best preparation is quality instruction and engagement throughout the year.",
    icon: "brain",
  },
  {
    question: "What's the difference between achievement and growth?",
    answer:
      "Achievement shows where your student is right now compared to grade-level expectations, while growth shows how much they've improved over time. A student starting below grade level but showing consistent growth is often on a stronger trajectory than one who starts high but plateaus.",
    icon: "brain",
  },
  {
    question: "How often are MAP tests given?",
    answer:
      "Most schools administer MAP tests 2-3 times per year (fall, winter, spring). This frequency allows tracking of growth over time and helps teachers adjust instruction. The tests typically take 45-60 minutes per subject.",
    icon: "brain",
  },
  {
    question: "Can students retake MAP tests?",
    answer:
      "MAP tests are typically administered on set school schedules, and individual retakes aren't standard practice. However, speak with your child's teacher about additional assessment options or ways to demonstrate growth between testing periods.",
    icon: "brain",
  },
  {
    question: "Do MAP scores determine high school placement?",
    icon: "brain",
    answer:
      "Many schools use MAP data alongside other factors for course placement and program decisions. However, scores alone don't determine academic outcomes—teachers consider multiple data points including classroom performance, work habits, and student motivation. For students showing advanced abilities, explore our guide to <a href='/blog/advanced-academics'>advanced academic opportunities</a> in middle school.",
  },
];

const expectationTableColumns = [
  { header: "Grade", key: "grade", className: "font-semibold text-left" },
  { header: "Reading", key: "reading", className: "text-center" },
  { header: "Mathematics", key: "mathematics", className: "text-center" },
  { header: "Language Usage", key: "language", className: "text-center" },
];

export const metadata = asMetadata({
  title: "Academic Assessment",
  description: "Academic Assessment",
  date: new Date(),
  author: "Education Team",
  readingTime: 1,
  image: "/blog/allison-saeng-mAM2jcU8dvw-unsplash.jpg",
  keywords: [
    "academic assessment",
    "MAP testing",
    "RIT scores",
    "state assessments",
    "middle school",
    "education",
    "assessment",
  ],
  authors: [{ name: "Education Team" }],
});

export default function AcademicAssessmentPage() {
  return (
    <BlogLayout blogMeta={metadata}>
      <p className="text-lg text-gray-700 italic">
        As your middle schooler navigates the academic landscape, you've likely
        encountered terms like "MAP testing," "RIT scores," and "state
        assessments." While these assessments might seem overwhelming,
        understanding them is crucial for supporting your student's educational
        journey. The reality is that educational assessment is evolving rapidly,
        and staying informed helps you advocate effectively for your child.
      </p>

      {/* What is MAP Testing */}
      <BlogSection title="What is MAP Testing?">
        <p className="text-lg leading-relaxed mb-6">
          MAP (Measures of Academic Progress) is a computer-adaptive assessment
          created by NWEA (Northwest Evaluation Association) that measures
          student growth in reading, language usage, and mathematics. Unlike
          traditional tests where every student answers the same questions, MAP
          testing adapts to your child's responses—if they answer correctly, the
          next question becomes slightly more challenging; if they answer
          incorrectly, the next question becomes easier.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This adaptive approach provides a more accurate picture of what your
          student knows and is ready to learn next, regardless of their grade
          level. Think of it as a personalized academic GPS that shows exactly
          where your child stands and where they're headed.
        </p>

        <BlogCardGrid cards={testingBenefits} />

        <Alert
          type="info"
          title="How MAP Testing Works"
          className="mt-8"
          icon={Brain}
        >
          <p className="mb-4">
            When your middle schooler sits down for a MAP test, they're engaging
            with a sophisticated system designed to find their "sweet spot"—the
            level where they're getting about 50% of questions correct. This
            might sound concerning, but it's actually ideal.
          </p>
          <p>
            The test typically takes 45-60 minutes per subject and is
            administered 2-3 times per year (fall, winter, and spring). Each
            testing session builds a comprehensive picture of your student's
            academic growth over time.
          </p>
        </Alert>
      </BlogSection>

      {/* Understanding RIT Scores */}
      <BlogSection title="Understanding RIT Scores">
        <p className="text-lg leading-relaxed">
          RIT stands for Rasch Unit, a stable scale that measures achievement
          and growth. Unlike percentiles, which compare your child to other
          students, RIT scores provide an absolute measure of what your child
          knows and can do. For a comprehensive deep dive into interpreting
          these scores, see our detailed guide on{" "}
          <a href="/blog/map-testing-state-assessments-complete-guide/understanding-rit-scores-guide">
            understanding RIT scores
          </a>
          .
        </p>

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

          <Alert type="warning" title="Important:" icon={Brain}>
            These ranges represent average performance, but remember that every
            student's journey is unique. Some students may score above or below
            these ranges and still be making excellent progress.
          </Alert>
        </div>
      </BlogSection>

      {/* Growth vs Achievement */}
      <BlogSection title="Growth vs. Achievement">
        <p className="text-lg leading-relaxed">
          One of the most important concepts for parents to understand is the
          difference between achievement and growth. Achievement tells you where
          your student is right now compared to grade-level expectations, while
          growth tells you how much they've improved over time.
        </p>

        <p>
          A student who starts the year significantly below grade level but
          shows consistent growth throughout the year is demonstrating
          remarkable progress, even if their final score isn't at grade level.
          Conversely, a student who starts above grade level but shows little
          growth may need additional challenges or support.
        </p>
        <p>
          MAP testing excels at measuring growth because it uses the same scale
          across all grade levels. This means you can track your student's
          progress year after year, seeing their academic journey unfold in
          real-time.
        </p>
      </BlogSection>

      {/* How MAP Connects to State Testing */}
      <BlogSection title="How MAP Connects to State Testing">
        <p className="text-lg leading-relaxed mb-6">
          While MAP testing provides ongoing insights into your student's
          progress, state tests serve a different purpose. State assessments are
          typically administered once per year and measure whether students are
          meeting state standards for their grade level.
        </p>

        <h3 className="text-2xl">
          The Relationship Between MAP and State Tests
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          MAP scores can be strong predictors of state test performance. Schools
          often use MAP data to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            Identify students who may need additional support before state
            testing
          </li>
          <li>Adjust instruction to address learning gaps</li>
          <li>Celebrate growth and achievement throughout the year</li>
        </ul>
        <p className="text-lg leading-relaxed mt-6">
          To help your student approach state testing with confidence, explore
          our comprehensive{" "}
          <a href="/blog/academic-assessment/state-test-prep-strategies">
            state test preparation strategies
          </a>{" "}
          that reduce stress and improve performance.
        </p>
      </BlogSection>

      {/* Supporting Your Student */}
      <BlogSection title="Beyond the Numbers">
        <p className="text-lg leading-relaxed">
          While understanding scores is important, remember that your student is
          more than any single test result. Here's how to use this information
          constructively:
        </p>

        <BlogCardGrid cards={supportStrategies} columns={2} />

        <Alert
          type="info"
          title="The Middle School Context"
          className="p-6"
          icon={Brain}
        >
          <p className="text-purple-800">
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
        </Alert>
      </BlogSection>

      {/* Action Plan */}
      <BlogSection title="Your Action Plan: Moving Forward">
        <p className="text-lg leading-relaxed">
          Understanding MAP testing and state assessments empowers you to
          support your middle schooler effectively. Here's your comprehensive
          action plan:
        </p>

        <BlogChecklist
          title="Complete MAP Success Action Plan"
          description="Follow this systematic approach to leverage MAP data for your student's benefit:"
          items={actionPlanItems}
        />

        <Alert
          type="success"
          title="Target Specific Skills"
          className="mt-8"
          icon={Target}
        >
          <p className="mb-4">
            Use MAP score insights to focus on specific skill areas:
          </p>
          <ul className="space-y-2">
            <li>
              • <strong>Math scores below grade level?</strong> Start with our{" "}
              <a href="/blog/middle-school-math-foundations-guide">
                math foundations guide
              </a>{" "}
              to build core skills.
            </li>
            <li>
              • <strong>Student exceeding expectations?</strong> Explore{" "}
              <a href="/blog/advanced-academics-middle-school-guide">
                advanced academic opportunities
              </a>{" "}
              and acceleration options.
            </li>
            <li>
              • <strong>Inconsistent performance?</strong> Check our{" "}
              <a href="/blog/map-testing-state-assessments-complete-guide/state-test-prep-strategies">
                test preparation strategies
              </a>{" "}
              to build confidence.
            </li>
          </ul>
        </Alert>
      </BlogSection>

      {/* Conclusion */}
      <BlogSection title="Conclusion: Embracing the Journey">
        <p className="text-lg leading-relaxed mb-2">
          MAP testing and state assessments offer valuable insights to help you
          and your student's teachers make informed decisions. Test scores are
          just one snapshot—focus on growth, keep communication open, and
          celebrate your student's effort. Staying informed about assessments
          helps you advocate for your student as education evolves.
        </p>

        <Ad
          title="To busy to be your student's teacher?"
          description="Get personalized support with Orin"
        />
      </BlogSection>

      {/* FAQ */}
      <BlogFAQ items={faqItems} />
    </BlogLayout>
  );
}
