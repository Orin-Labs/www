import React from 'react';

import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
} from 'lucide-react';

import {
  Alert,
  BlogChecklist,
  BlogFAQ,
  BlogLayout,
  BlogSection,
  ComparisonTable,
  NumberedList,
} from '@blog/components';

export function DualEnrollmentGuide() {
  const dualEnrollmentBenefits = [
    { id: "1", text: "Early exposure to college-level expectations and rigor" },
    { id: "2", text: "Accelerated academic pathway for advanced students" },
    {
      id: "3",
      text: "Exploration of interests beyond middle school curriculum",
    },
    { id: "4", text: "Building confidence and academic maturity" },
    { id: "5", text: "Smaller class sizes with more personalized attention" },
    { id: "6", text: "Head start on high school graduation requirements" },
    { id: "7", text: "Development of college-level study skills early" },
  ];

  const applicationRequirements = [
    { id: "1", text: "Minimum GPA requirement (typically 3.0-3.5)" },
    { id: "2", text: "Teacher recommendations from core subjects" },
    { id: "3", text: "Parent/guardian consent and enrollment agreements" },
    { id: "4", text: "Placement test scores (ACCUPLACER or equivalent)" },
    { id: "5", text: "Academic planning meeting with college advisor" },
    { id: "6", text: "Proof of prerequisite course completion" },
    { id: "7", text: "Middle school transcript and enrollment verification" },
  ];

  const readinessFactors = [
    {
      id: "1",
      text: "Consistent A/B grades with minimal academic support needed",
    },
    { id: "2", text: "Strong organizational and time management skills" },
    { id: "3", text: "Ability to work independently for extended periods" },
    { id: "4", text: "Emotional maturity to interact with older students" },
    { id: "5", text: "Genuine academic curiosity and motivation" },
    {
      id: "6",
      text: "Family support for transportation and scheduling flexibility",
    },
    { id: "7", text: "Strong foundation in prerequisite subjects" },
  ];

  const warningSignsToWait = [
    {
      id: "1",
      text: "Frequent homework struggles or extensive parent help needed",
    },
    {
      id: "2",
      text: "Difficulty managing current academic and social commitments",
    },
    { id: "3", text: "Recent academic setbacks or family stressors" },
    { id: "4", text: "Student resistance or lack of genuine interest" },
    {
      id: "5",
      text: "Pressure primarily coming from parents rather than student",
    },
    {
      id: "6",
      text: "Unrealistic expectations about college-level difficulty",
    },
    {
      id: "7",
      text: "Transportation or scheduling conflicts that create stress",
    },
  ];

  const academicPlanningQuestions = [
    {
      id: "1",
      text: "How will this credit fit into high school graduation plans?",
    },
    {
      id: "2",
      text: "Will the credit transfer to target high schools and colleges?",
    },
    {
      id: "3",
      text: "Does this create meaningful acceleration for your student?",
    },
    {
      id: "4",
      text: "What happens if your student struggles with the coursework?",
    },
    {
      id: "5",
      text: "Are there prerequisite skills that need strengthening first?",
    },
  ];

  const practicalLogistics = [
    {
      id: "1",
      text: "How will college class times coordinate with middle school schedule?",
    },
    { id: "2", text: "What transportation arrangements are needed?" },
    { id: "3", text: "Can your family manage the financial investment?" },
    { id: "4", text: "What support systems exist if your student needs help?" },
    { id: "5", text: "How will this affect middle school social connections?" },
  ];

  const alternativeConsiderations = [
    {
      id: "1",
      text: "Would advanced middle school courses provide similar challenge?",
    },
    {
      id: "2",
      text: "Are there enrichment programs within current grade level?",
    },
    {
      id: "3",
      text: "Could subject acceleration (like math) meet the same goals?",
    },
    { id: "4", text: "Would summer programs be a better starting point?" },
    {
      id: "5",
      text: "Is this the right timing, or would 8th grade be better?",
    },
  ];

  const comparisonData = [
    {
      factor: "Class Environment",
      traditional: "Age-matched peers, familiar middle school setting",
      dualEnrollment: "Mixed-age students, college campus environment",
    },
    {
      factor: "Academic Expectations",
      traditional: "Grade-level appropriate pace and support",
      dualEnrollment: "College-level expectations and independence",
    },
    {
      factor: "Teacher Support",
      traditional: "Daily contact, structured guidance, parent communication",
      dualEnrollment: "Office hours only, self-advocacy required",
    },
    {
      factor: "Schedule",
      traditional: "Fixed daily schedule with built-in transitions",
      dualEnrollment:
        "College class times that may conflict with middle school",
    },
    {
      factor: "Cost",
      traditional: "Included in regular middle school enrollment",
      dualEnrollment: "$50-300 per credit hour plus materials",
    },
    {
      factor: "Credit Value",
      traditional: "Middle school completion only",
      dualEnrollment: "Both high school and potential college credit",
    },
  ];

  const faqItems = [
    {
      question: "Are middle schoolers really ready for college courses?",
      answer:
        "Some middle schoolers are academically ready, but success depends on more than just grades. Students need emotional maturity, strong study habits, and family support. Most successful middle school dual enrollment students start with a single course in a familiar subject like English or math.",
      icon: GraduationCap,
    },
    {
      question:
        "Will dual enrollment credits transfer to high school and college?",
      answer:
        "High school transfer is typically automatic, but college transfer policies vary. Public universities often accept credits from accredited community colleges, while private colleges may be more selective. Always verify transfer policies before enrollment.",
      icon: BookOpen,
    },
    {
      question: "How much time should we expect for homework and studying?",
      answer:
        "Plan for 2-3 hours of study time for every hour in class. A typical 3-credit course means 6-9 hours total weekly commitment. For middle schoolers, starting with just one course is recommended to gauge their ability to handle the workload.",
      icon: Clock,
    },
    {
      question: "What subjects work best for middle school dual enrollment?",
      answer:
        "English composition and college algebra are popular starting points because they build on familiar middle school concepts. Avoid specialized courses, lab sciences, or classes with extensive prerequisites for first-time dual enrollment.",
      icon: Users,
    },
    {
      question: "What if my middle schooler struggles or wants to drop?",
      answer:
        "Most programs have add/drop periods in the first 1-2 weeks. After that, withdrawals appear on college transcripts. Since these courses become part of your student's permanent record, early communication with instructors is crucial if problems arise.",
      icon: AlertTriangle,
    },
    {
      question: "How much does dual enrollment cost for middle schoolers?",
      answer:
        "Costs vary by state and institution. Many community colleges offer reduced rates for younger students ($50-200 per credit), while some states provide free dual enrollment programs. Factor in textbooks, transportation, and potential tutoring costs.",
      icon: DollarSign,
    },
  ];

  const comparisonTableColumns = [
    { header: "Factor", key: "factor", className: "font-semibold" },
    {
      header: "Traditional Middle School",
      key: "traditional",
      className: "text-center",
    },
    {
      header: "Dual Enrollment",
      key: "dualEnrollment",
      className: "text-center",
    },
  ];

  return (
    <BlogLayout>
      <p className="text-xl text-gray-600">
        A comprehensive guide to dual enrollment opportunities for middle school
        students, covering readiness assessment, application processes, and key
        considerations for families considering college courses for 6th-8th
        graders.
      </p>

      <BlogSection
        title="What is Dual Enrollment for Middle Schoolers?"
        description="College courses that count toward high school graduation for advanced 6th-8th graders"
      >
        <p className="text-gray-700">
          Dual enrollment for middle school students allows academically
          advanced 6th, 7th, and 8th graders to take college courses while
          completing their middle school education. These courses typically
          count toward high school graduation requirements and may transfer as
          college credit.
        </p>

        <p className="text-gray-700">
          Most middle school dual enrollment programs start with a single course
          per semester, often in core subjects like English composition or
          college algebra. The courses maintain full college standards—they're
          not simplified versions designed for younger students.
        </p>

        <BlogChecklist
          title="Key Benefits for Middle School Students"
          description="Why families consider dual enrollment for advanced middle schoolers."
          items={dualEnrollmentBenefits}
        />
      </BlogSection>

      <BlogSection
        title="Middle School Dual Enrollment Options"
        description="Types of programs available for 6th-8th grade students"
      >
        <p className="text-gray-700">
          Middle school dual enrollment typically starts conservatively with
          summer programs or single courses during the academic year. Students
          usually begin with 1-3 credit hours maximum per semester, with heavy
          emphasis on readiness assessment and ongoing support.
        </p>

        <p className="text-gray-700">
          Common options include single course trials in English or math, summer
          enrichment programs at local colleges, online courses with school
          support, and core subject acceleration programs. The focus remains on
          building college readiness skills rather than accumulating large
          numbers of credits.
        </p>
      </BlogSection>

      <BlogSection
        title="Is Your Middle Schooler Ready?"
        description="Essential factors for successful dual enrollment in grades 6-8"
      >
        <p className="text-gray-700">
          Readiness for middle school dual enrollment extends far beyond
          academic ability. Students need emotional maturity to interact with
          older students, strong organizational skills, and family support for
          the logistical challenges of attending college classes.
        </p>

        <NumberedList title="Readiness Factors" items={readinessFactors} />
        <NumberedList
          title="Warning Signs to Wait"
          items={warningSignsToWait}
        />
      </BlogSection>

      <BlogSection
        title="Dual Enrollment vs. Traditional Middle School"
        description="Understanding the key differences in expectations and environment"
      >
        <ComparisonTable
          data={comparisonData}
          columns={comparisonTableColumns}
        />
      </BlogSection>

      <BlogSection
        title="Application Process for Middle Schoolers"
        description="Steps to get started with dual enrollment programs"
      >
        <p className="text-gray-700">
          Application processes for middle school students often have additional
          requirements compared to high school dual enrollment. Start planning
          4-6 months before your desired start date to allow time for testing,
          parent meetings, and careful course selection with academic advisors.
        </p>

        <BlogChecklist
          title="Common Application Requirements"
          items={applicationRequirements}
        />

        <Alert type="warning" icon={AlertTriangle}>
          <p>
            <strong>Critical Consideration:</strong> Dual enrollment courses
            become part of your student's permanent academic record from age 12
            or 13. Poor performance can affect high school placement, college
            admissions, and scholarship eligibility years later. Success
            requires genuine readiness, not just academic ability.
          </p>
        </Alert>
      </BlogSection>

      <BlogSection
        title="Strategic Planning for Middle School Families"
        description="Making dual enrollment work for your young student's long-term goals"
      >
        <NumberedList
          title="Academic Planning"
          items={academicPlanningQuestions}
        />
        <NumberedList title="Practical Logistics" items={practicalLogistics} />
        <NumberedList
          title="Alternative Considerations"
          items={alternativeConsiderations}
        />
      </BlogSection>

      <BlogSection
        title="Frequently Asked Questions"
        description="Common concerns about dual enrollment for middle school students"
      >
        <BlogFAQ items={faqItems} />
      </BlogSection>

      <Alert type="success" icon={CheckCircle}>
        <p>
          <strong>🔗 Related Resources:</strong> Before pursuing dual
          enrollment, review your student's{" "}
          <a href="/blog/academic-assessment">
            assessment data and academic readiness indicators
          </a>
          . For students who might benefit from other acceleration options,
          explore our{" "}
          <a href="/blog/advanced-academics/gifted-program-navigation">
            gifted program navigation guide
          </a>
          . If your student needs stronger{" "}
          <a href="/blog/math-foundations">foundational math skills</a>, focus
          there first before considering college-level coursework.
        </p>
      </Alert>
    </BlogLayout>
  );
}
