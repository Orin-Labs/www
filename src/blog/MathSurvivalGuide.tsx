import React from 'react';

import { motion } from 'framer-motion';

import { Ad } from '@/components/Ad';
import {
  BlogCallout,
  BlogCardGrid,
  BlogChecklist,
  BlogFAQ,
  BlogLayout,
  BlogSection,
  CurriculumRoadmap,
  NumberedList,
  Odyssey,
  SortableTable,
  WeeklyPlanner,
  WeeklyPlannerItem,
} from '@components';

const gamesData = [
  [
    "Khan Academy",
    "All devices",
    "15-30 min",
    "6-8",
    "Comprehensive skill building",
  ],
  ["Prodigy Math", "All devices", "20-45 min", "6-8", "RPG-style engagement"],
  ["IXL Math", "All devices", "10-25 min", "6-8", "Targeted practice"],
  [
    "Math Playground",
    "Desktop/Tablet",
    "5-15 min",
    "6-7",
    "Quick problem solving",
  ],
  [
    "Desmos Calculator",
    "All devices",
    "5-20 min",
    "7-8",
    "Graphing and exploration",
  ],
  ["Mathletics", "All devices", "15-30 min", "6-8", "Competitive learning"],
  [
    "Coolmath Games",
    "All devices",
    "10-20 min",
    "6-8",
    "Fun skill reinforcement",
  ],
  ["Mathway", "All devices", "2-10 min", "7-8", "Step-by-step solutions"],
  ["GeoGebra", "Desktop/Tablet", "10-30 min", "7-8", "Geometry visualization"],
  ["Sumdog", "All devices", "15-25 min", "6-7", "Adaptive learning games"],
  ["Reflex Math", "All devices", "5-15 min", "6-8", "Fact fluency building"],
  ["DragonBox", "Mobile/Tablet", "10-20 min", "6-8", "Algebra concepts"],
];

const quickWins = [
  {
    text: 'Master PEMDAS with the "Please Excuse My Dear Aunt Sally" memory trick.',
  },
  {
    text: "Adapt to your student's learning style - some kids learn best by visual models, others by verbal explanations.",
  },
  {
    text: "Create a dedicated math homework space with reference materials.",
  },
  { text: "Practice 10 minutes daily with interactive math games." },
  {
    text: "Connect math to real-world scenarios (cooking, shopping, sports stats)",
  },
];

const curriculumData = [
  {
    period: "Sept-Oct",
    grade6: "Whole numbers, decimals",
    grade7: "Integers, rational numbers",
    grade8: "Real numbers, radicals",
  },
  {
    period: "Nov-Jan",
    grade6: "Fractions, ratios",
    grade7: "Operations with integers",
    grade8: "Exponents, scientific notation",
  },
  {
    period: "Feb-Mar",
    grade6: "Proportions, percentages",
    grade7: "Expressions, equations",
    grade8: "Linear equations, functions",
  },
  {
    period: "Apr-Jun",
    grade6: "Data analysis, geometry",
    grade7: "Inequalities, geometry",
    grade8: "Systems, Pythagorean theorem",
  },
];

const partnershipTechniques = [
  {
    title: '🗣️ The "Think Aloud" Method',
    subtitle: "Verbalize the process",
    description:
      "Have your student verbalize their thinking process step by step.",
    metadata: { "Key Benefit": "Reveals thinking patterns" },
  },
  {
    title: "❓ Strategic Questioning",
    subtitle: "Guide with questions",
    description: "Guide with questions instead of giving answers directly.",
    metadata: { "Key Benefit": "Builds problem-solving skills" },
  },
  {
    title: '🎓 The "Teaching Back" Technique',
    subtitle: "Student teaches you",
    description:
      "Once your student solves a problem, have them teach it to you.",
    metadata: { "Key Benefit": "Reinforces understanding" },
  },
];

const weeklyPartnershipRoutine: {
  title: string;
  items: WeeklyPlannerItem[];
} = {
  title: "🤝 Weekly Partnership Routine",
  items: [
    {
      day: "Monday",
      time: "5 min",
      task: 'Review the week\'s math topics together. Ask: "What looks familiar? What looks challenging?"',
    },
    {
      day: "Wednesday",
      time: "10 min",
      task: 'Practice the "Think Aloud" method on 2-3 problems from current homework.',
    },
    {
      day: "Friday",
      time: "10 min",
      task: 'Have your student teach you their favorite problem from the week using the "Teaching Back" technique.',
    },
    {
      day: "Sunday",
      time: "5 min",
      task: "Celebrate the week's math wins together—effort matters more than perfection!",
    },
  ],
};

const youtubeChannels = [
  {
    title: "Khan Academy",
    subtitle: "7.8M subscribers",
    description:
      "Clear, methodical explanations with visual aids. Perfect for step-by-step learning.",
    metadata: { "Avg Video": "8-12 minutes" },
    action: {
      text: "Check it out",
      onClick: () => window.open("https://youtube.com/@khanacademy", "_blank"),
    },
  },
  {
    title: "Professor Leonard",
    subtitle: "1.2M subscribers",
    description: "Engaging classroom-style lessons with personality and humor.",
    metadata: { "Avg Video": "25-40 minutes" },
    action: {
      text: "Check it out",
      onClick: () =>
        window.open("https://youtube.com/@professorleonard", "_blank"),
    },
  },
  {
    title: "Math Antics",
    subtitle: "3.1M subscribers",
    description:
      "Animated explanations perfect for visual learners and younger students. Bite-sized lessons great for quick concept reviews and homework help.",
    metadata: { "Avg Video": "8-15 minutes" },
    action: {
      text: "Check it out",
      onClick: () => window.open("https://youtube.com/@mathantics", "_blank"),
    },
  },
  {
    title: "Organic Chemistry Tutor",
    subtitle: "5.9M subscribers",
    description:
      "Comprehensive problem-solving with multiple examples per concept.",
    metadata: { "Avg Video": "15-30 minutes" },
    action: {
      text: "Check it out",
      onClick: () =>
        window.open("https://youtube.com/@theorganicchemistrytutor", "_blank"),
    },
  },
  {
    title: "Mashup Math",
    subtitle: "890K subscribers",
    description:
      "Creative, colorful presentations that make math feel accessible and fun.",
    metadata: { "Avg Video": "5-8 minutes" },
    action: {
      text: "Check it out",
      onClick: () => window.open("https://youtube.com/@mashupmath", "_blank"),
    },
  },
];

const checklistItems = [
  { id: "1", text: "Create a calm, distraction-free homework environment" },
  {
    id: "2",
    text: 'Use "math talk" - verbalize problem-solving steps out loud',
  },
  {
    id: "3",
    text: 'Celebrate effort over correctness ("You stuck with that problem!")',
  },
  { id: "4", text: "Break complex problems into smaller, manageable steps" },
  {
    id: "5",
    text: 'Use a "mistake notebook" to learn from errors without judgment',
  },
  {
    id: "6",
    text: "Practice deep breathing before tackling difficult problems",
  },
  {
    id: "7",
    text: "Connect math to your student's interests (sports stats, video game math, etc.)",
  },
  {
    id: "8",
    text: "Share your own math struggles - normalize the learning process",
  },
  {
    id: "9",
    text: 'Use timers to prevent "stuck" spirals (work for 10 minutes, then take a break)',
  },
  {
    id: "10",
    text: "Seek help early - don't let small gaps become large ones",
  },
];

const faqItems = [
  {
    question:
      "My student was great at elementary math but struggles now. What happened?",
    answer:
      "This is completely normal! Middle school math represents a significant cognitive shift from arithmetic to algebraic thinking. Elementary math focuses on concrete operations, while middle school introduces abstract concepts like variables, negative numbers, and complex fractions. The key is patience and addressing any foundational gaps early.",
  },
  {
    question: "How much time should my student spend on math homework daily?",
    answer:
      "Most middle schoolers should spend 20-45 minutes on math homework, depending on the assignment and their skill level. If homework consistently takes more than an hour, contact the teacher—there may be underlying comprehension issues that need addressing.",
  },
  {
    question: "Should I help with homework or let them struggle?",
    answer:
      "Strike a balance. Guide them through the thinking process rather than providing answers. Ask questions like 'What do you think the first step should be?' or 'What information do we have?' This builds problem-solving skills while providing support.",
  },
  {
    question: "When should I consider getting a tutor?",
    answer:
      "Consider tutoring if your student consistently struggles for more than 2-3 weeks with new concepts, shows signs of math anxiety, or if grades drop significantly. Early intervention prevents small gaps from becoming large ones. Tutoring with Orin is a low cost, unlimited tutoring option.",
  },
  {
    question: "Are calculator and online tools cheating?",
    answer:
      "Not when used appropriately! Calculators and apps like Desmos are legitimate tools that professionals use daily. The key is ensuring your student understands the underlying concepts and doesn't become dependent on tools for basic operations.",
  },
  {
    question: "How can I support my student if I'm not good at math myself?",
    answer:
      "Your support doesn't require mathematical expertise! Focus on organization, encouragement, and creating a positive learning environment. Use the resources in this guide, and remember that your belief in your student's ability to learn is more important than your ability to solve the problems yourself.",
  },
];

const gameTableColumns = [
  { header: "Game/Tool", key: "name" },
  { header: "Device", key: "device" },
  { header: "Time", key: "time" },
  { header: "Grade Focus", key: "grade" },
  { header: "Best For", key: "description" },
];

const sortButtons = [
  "Sort by Name",
  "Sort by Device",
  "Sort by Time",
  "Sort by Grade",
];

export default function MathSurvivalGuide() {
  return (
    <BlogLayout>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center z-10 relative"
      >
        🧮 Middle School Math Survival Guide for Parents
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-6 italic text-lg rounded-lg relative"
      >
        Picture this: It's 7 PM on a Tuesday.
        <br />
        <br />
        Your sixth-grader sits at the kitchen table, tears welling up over a
        worksheet that might as well be written in ancient hieroglyphics.
        <br />
        <br />
        "What comes first in 3 + 4 × 2?" they ask.
        <br />
        <br />
        You confidently start to say "seven times two..." then stop.
        <br />
        <br />
        Wait. PEMDAS? BODMAS? Was it left to right, or...
        <br />
        <br />
        Your student's frustration mirrors your own growing panic.
        <br />
        <br />
        You're not alone—millions of parents face this exact moment every night,
        feeling helpless as their once-confident elementary student struggles
        with the mathematical leap that is middle school.
        <br />
        <br />
        But here's what's changed: technology now offers solutions that weren't
        available when we were students.
      </motion.div>

      <BlogCallout variant="gradient">
        <NumberedList
          title="📥 Top 5 Quick Wins"
          items={quickWins}
          itemClassName="border-white text-white"
        />
      </BlogCallout>

      <BlogSection title="Step 1 - Curriculum Road-map">
        <p className="mb-6">
          Understanding what your student will learn each month helps you
          prepare and support them proactively. Here's the typical progression
          through grades 6-8:
        </p>

        <CurriculumRoadmap items={curriculumData} />

        <p>
          This roadmap shows the natural progression from concrete concepts to
          abstract thinking. Notice how each grade builds on the previous year's
          foundation—this is why gaps in understanding can quickly compound.
          Modern adaptive learning platforms can identify and address these gaps
          in real-time, something traditional textbooks simply cannot do.
        </p>
      </BlogSection>

      <BlogSection title="Step 2 - Interactive Practice Toolbox">
        <p className="mb-6">
          The right tools can transform math from a chore into an engaging
          challenge. Here are 12 proven web-based games and tools, sorted by
          device compatibility and time commitment:
        </p>

        <Ad
          className="my-4"
          title="Want 1:1 interactive lessons?"
          description="Orin creates personalized, interactive math lessons just for your student."
        />

        <SortableTable
          columns={gameTableColumns}
          data={gamesData}
          sortButtons={sortButtons}
        />

        <p className="mt-6">
          <strong>Usage Strategy:</strong> Start with 10-15 minutes daily using
          one primary tool (Khan Academy or Prodigy work well), then rotate in
          others for variety. The key is consistency over intensity—daily
          practice builds mathematical confidence more effectively than weekend
          cramming sessions.
        </p>
      </BlogSection>

      <BlogSection title="Step 3 - Parent-Student Math Partnership System">
        <p className="mb-6">
          The most powerful math support doesn't come from tracking sheets—it
          comes from effective collaboration. These research-backed techniques
          transform homework battles into productive partnerships:
        </p>

        <BlogCardGrid cards={partnershipTechniques} className="mb-8" />

        <WeeklyPlanner
          title={weeklyPartnershipRoutine.title}
          items={weeklyPartnershipRoutine.items}
        />
        <p className="my-4 text-center">
          <strong>Pro tip:</strong> When your student gets stuck, resist the
          urge to immediately explain. Instead, try: "Let's think about this
          together. What's one small thing we could try?" This builds
          problem-solving resilience rather than dependence.
        </p>
        <Ad
          className="my-4"
          title="Too Busy to be a teacher?"
          description="Let Orin teach it for you with personalized 1:1 lessons."
        />
      </BlogSection>

      <BlogSection title="Step 4 - Tackling Math Anxiety">
        <p className="mb-6">
          Math anxiety is real, measurable, and surprisingly common. Stanford
          researchers using MRI technology found that math anxiety actually
          changes brain function, making problem-solving more difficult. The
          good news? It's absolutely treatable, and technology is making
          intervention more accessible than ever.
        </p>

        <BlogCallout variant="warning" className="mb-8">
          🧠 Stanford MRI Study: Math anxiety activates the same brain regions
          as physical pain, but targeted interventions can reduce this response
          by up to 40% in just 8 weeks.
        </BlogCallout>

        <BlogChecklist
          title="Math Anxiety Action Checklist"
          description="Check off strategies as you implement them:"
          items={checklistItems}
        />

        <p className="mb-4">
          Remember: Math anxiety often stems from gaps in foundational skills
          rather than lack of ability. Address the skill gaps, and confidence
          typically follows.
        </p>
      </BlogSection>

      <BlogSection title="Step 5 - Best YouTube Channels">
        <p className="mb-6">
          Quality math instruction is available 24/7 through these carefully
          selected YouTube channels. Each offers a different teaching style, so
          try several to find what resonates with your student:
        </p>

        <BlogCardGrid cards={youtubeChannels} />

        <p className="mt-6">
          <strong>Pro tip:</strong> Watch videos together initially, then
          encourage independent viewing. Create a "math video playlist" for
          topics your student struggles with most.
        </p>

        <Ad
          className="my-4"
          title="Want something better than YouTube?"
          description="Let Orin teach it for you with personalized 1:1 lessons."
        />
      </BlogSection>

      <BlogFAQ items={faqItems} />

      <Odyssey />
    </BlogLayout>
  );
}
