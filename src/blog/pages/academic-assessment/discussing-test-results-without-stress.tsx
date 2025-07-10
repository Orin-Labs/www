import React from "react";

import { AlertTriangle, CheckCircle, Info, Lightbulb } from "lucide-react";

import { DirectComparison, ScenarioGrid } from "@/blog/components";
import {
  Alert,
  BlogChecklist,
  BlogLayout,
  BlogSection,
} from "@blog/components";

export function DiscussingTestResultsWithoutStress() {
  return (
    <BlogLayout>
      <p className="text-xl text-gray-600">
        Emotional guidance for discussing test scores with your middle schooler
        in ways that build confidence rather than create anxiety.
      </p>

      <BlogSection title="The Real Goal: From Static Judgment to Dynamic Data">
        <p>
          Here's the truth: test scores aren't verdicts on your child's
          worth—they're GPS coordinates on their learning journey. When we shift
          from treating scores as permanent labels to viewing them as helpful
          data points, everything changes.
        </p>
        <p>
          Your goal isn't to make your child feel amazing about every score.
          It's to help them see scores as tools for growth, not measures of
          their value as a person. Think of it like checking your car's GPS
          mid-route—it tells you where you are so you can decide where to go
          next.
        </p>
        <Alert type="info" icon={Info}>
          <strong>Quick Reality Check:</strong> The most confident kids aren't
          those who never struggle—they're the ones who know how to bounce back
          from challenges and use setbacks as stepping stones.
        </Alert>
      </BlogSection>

      <BlogSection title="Before You Even Look at Numbers: Set the Stage">
        <h3 className="text-2xl font-semibold">
          Check Your Own Temperature First
        </h3>
        <p>
          Your child will mirror your energy about test scores. If you're
          anxious, they'll absorb that anxiety. If you're curious and confident,
          they'll feel safer exploring what the numbers mean together.
        </p>
        <p>
          Before opening any test results, take a moment to reset your own
          mindset. Take three deep breaths. Remind yourself that this is just
          data—not a report card on your parenting or your child's future.
        </p>

        <h3 className="text-2xl font-semibold">Pick Your Moment and Place</h3>
        <p>
          Avoid the formal "we need to talk" dining room conversation. Instead,
          try:
        </p>
        <ul className="list-disc ml-6">
          <li>Car rides (less eye contact = less pressure)</li>
          <li>While doing chores together</li>
          <li>During a walk</li>
          <li>Any time when you're both relaxed</li>
        </ul>

        <h3 className="text-2xl font-semibold">Preview, Don't Ambush</h3>
        <p>
          Give your child a heads up: "Tomorrow we'll look at your MAP results
          together. I'm excited to see what you're already crushing and what we
          can work on next." This removes the element of surprise and positions
          the conversation as collaborative rather than evaluative.
        </p>
      </BlogSection>

      <BlogSection title="Start with Connection, Not Correction">
        <p>
          When you finally sit down with those test results, resist the urge to
          dive straight into numbers. Instead, start with your child's
          perspective.
        </p>

        <h3 className="text-2xl font-semibold">Ask for Their Read First</h3>
        <p>
          "How do you think the test went?" This simple question tells you
          everything you need to know about their emotional state and
          self-assessment. Listen without immediately correcting or reassuring.
        </p>

        <h3 className="text-2xl font-semibold">Spotlight Strengths</h3>
        <p>
          Before discussing any areas for improvement, highlight two specific
          things they did well. Not generic praise like "good job," but specific
          recognition:
        </p>
        <ul className="list-disc ml-6">
          <li>"I noticed you really focused on showing your work in math."</li>
          <li>
            "You've gotten much better at managing your time during tests."
          </li>
          <li>
            "Your reading comprehension scores show you're really understanding
            what you read."
          </li>
        </ul>
      </BlogSection>

      <BlogSection title="Translate Scores into Growth Stories">
        <h3 className="text-2xl font-semibold">Numbers Need Narrative</h3>
        <p>
          Raw scores are meaningless to most kids (and parents). Your job is to
          translate them into a story about learning and growth. Here's how:
        </p>

        <Alert type="info" icon={Lightbulb}>
          <strong>The GPS Metaphor:</strong> "Your RIT score is like a GPS pin
          on your learning map. It shows us exactly where you are right now,
          which helps us plan the best route to where you want to go next."
        </Alert>

        <h3 className="text-2xl font-semibold">
          Compare to Self, Not Classmates
        </h3>
        <p>
          If you have previous test scores, create a simple visual of their
          progress over time. Even a hand-drawn chart can show growth in a way
          that makes kids proud of their trajectory rather than worried about
          their ranking.
        </p>
        <p>
          "Look at this—last spring you were here, and now you're here. That's
          real growth!" Focus on the slope of improvement, not the absolute
          position.
        </p>
      </BlogSection>

      <BlogSection title="Handle Anxiety in Real Time">
        <p>
          If your child shows signs of stress during your
          conversation—fidgeting, shutting down, getting defensive—address it
          immediately.
        </p>

        <h3 className="text-2xl font-semibold">Name and Normalize Feelings</h3>
        <p>
          "I can see you're feeling worried about this. That's totally
          normal—even professional athletes get nervous before big games. The
          butterflies mean you care, and that's actually a good thing."
        </p>

        <BlogChecklist
          title="Simple Anxiety-Busting Tools"
          description="These tools can help your child feel more calm and focused before and during tests."
          items={[
            {
              id: "box-breathing",
              text: "Box breathing: In for 4, hold for 4, out for 4, hold for 4",
            },
            {
              id: "positive-self-talk",
              text: "Positive self-talk: 'I can learn from this' instead of 'I'm bad at this'",
            },
            {
              id: "muscle-relaxation",
              text: "Progressive muscle relaxation: Tense and release muscle groups",
            },
            {
              id: "grounding-technique",
              text: "The 5-4-3-2-1 technique: Name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste",
            },
          ]}
        />

        <h3 className="text-2xl font-semibold">
          Create a Practice Plan Together
        </h3>
        <p>
          If test anxiety is a real issue, don't just say "don't worry."
          Instead, create a concrete plan:
        </p>
        <ul className="list-disc ml-6">
          <li>Practice with sample questions in low-pressure settings</li>
          <li>Familiarize them with the test format</li>
          <li>Develop pre-test routines that help them feel centered</li>
          <li>Plan post-test rewards that aren't tied to scores</li>
        </ul>
      </BlogSection>

      <BlogSection title="Focus on Process Over Performance">
        <h3 className="text-2xl font-semibold">
          Language That Builds Growth Mindset
        </h3>
        <p>
          The words you use matter enormously. Here are some simple swaps that
          make a big difference:
        </p>

        <DirectComparison
          bad={{
            title: "Fixed Mindset Language",
            items: [
              '"You\'re so smart!"',
              '"You got an 85%"',
              '"You\'re just not a math person"',
              '"This is easy for you"',
            ],
          }}
          good={{
            title: "Growth Mindset Language",
            items: [
              '"You worked really hard on that strategy!"',
              '"You improved your problem-solving approach"',
              '"You\'re learning to be a math person"',
              '"You\'ve practiced this skill a lot"',
            ],
          }}
        />

        <h3 className="text-2xl font-semibold">Mini Goal-Setting Session</h3>
        <p>
          Don't end the conversation with just analysis—end with action. Ask
          your child to choose one specific, achievable goal based on their
          results.
        </p>
        <p>Good goals are specific and process-focused:</p>
        <ul className="list-disc ml-6">
          <li>
            "Practice fraction word problems for 10 minutes three times this
            week"
          </li>
          <li>"Read one chapter book this month to build reading stamina"</li>
          <li>"Use the elimination strategy on multiple choice questions"</li>
        </ul>

        <Alert type="success" icon={CheckCircle}>
          <strong>Write It Down Together:</strong> Create a simple tracking
          sheet or goal card that your child can see daily. When they have
          agency in creating their goals, they're more likely to stick with
          them.
        </Alert>
      </BlogSection>

      <BlogSection title="Plan Support and Create Check-In Loops">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Identify Concrete Tools</h3>
          <p>
            Goals without support systems fail. Help your child identify
            specific resources:
          </p>
          <ul className="list-disc ml-6">
            <li>Teacher office hours for extra help</li>
            <li>Khan Academy playlists for skill practice</li>
            <li>Study groups with classmates</li>
            <li>Tutoring sessions if needed</li>
            <li>Online practice tests for format familiarity</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Schedule Micro Check-Ins</h3>
          <p>
            Don't wait until the next test to revisit your child's goals.
            Schedule brief 5-minute weekly check-ins:
          </p>
          <ul className="list-disc ml-6">
            <li>"How did your fraction practice go this week?"</li>
            <li>"What's working well with your new study strategy?"</li>
            <li>"What feels challenging right now?"</li>
            <li>"Do we need to adjust anything?"</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">
            Celebrate Effort Milestones
          </h3>
          <p>
            Recognize progress along the way, not just final outcomes. When your
            child sticks to their practice schedule for a week, completes a
            challenging assignment, or tries a new strategy—celebrate it! Ice
            cream, extra screen time, or just enthusiastic recognition all work.
          </p>
        </div>
      </BlogSection>

      <BlogSection title="What to Avoid (And What to Do Instead)">
        <DirectComparison
          bad={{
            title: "❌ Avoid These Pitfalls",
            items: [
              "Comparing to siblings or friends",
              "Rewarding only high scores",
              "Marathon lecture sessions",
              "Making scores about your parenting",
              "Dismissing their emotions",
              "Setting unrealistic expectations",
            ],
          }}
          good={{
            title: "✅ Do This Instead",
            items: [
              "Focus on personal growth over time",
              "Reward effort and strategy use",
              "Keep conversations short and two-way",
              "Separate scores from identity",
              "Validate their feelings first",
              "Set process goals they can control",
            ],
          }}
        />

        <Alert type="warning" icon={AlertTriangle}>
          <strong>Remember:</strong> Your child's test scores don't reflect your
          worth as a parent any more than they reflect your child's worth as a
          person. They're simply data points to help guide learning decisions.
        </Alert>
      </BlogSection>

      <BlogSection title="Sample Conversation Scripts">
        <p>
          Sometimes it helps to have actual words to use. Here are some
          conversation starters for different scenarios:
        </p>

        <ScenarioGrid
          scenarios={[
            {
              title: "When Scores Are Lower Than Expected",
              color: "blue",
              details: [
                `"I can see you're disappointed with some of these scores. That tells me you care about your learning, which is awesome. Let's look at this like detectives—what can these numbers teach us about what to focus on next?"`,
              ],
            },
            {
              title: "When Scores Are Higher Than Expected",
              color: "green",
              details: [
                `"These scores show that your practice strategies are really working! I'm especially proud of how you [specific effort/strategy]. What do you think helped you the most?"`,
              ],
            },
            {
              title: "When Your Child Seems Anxious",
              color: "purple",
              details: [
                `"I notice you seem worried about these results. Can you tell me what's going through your mind? Whatever you're feeling is okay—let's figure out how to help you feel more confident about tests."`,
              ],
            },
          ]}
        />
      </BlogSection>

      <BlogSection title="The Bottom Line">
        <p>
          Great test score conversations aren't about the numbers—they're about
          building your child's confidence in their ability to learn and grow.
          When you approach scores with curiosity rather than judgment, you
          teach your child that challenges are opportunities, not threats.
        </p>
        <p>
          Remember: the goal isn't to eliminate all academic stress (some
          pressure can be motivating), but to help your child develop healthy
          coping strategies and a growth mindset that will serve them far beyond
          any single test.
        </p>
        <p>
          Your child needs to know that their worth isn't determined by a score,
          but their growth is supported by the insights those scores provide.
          That's the conversation that builds confidence while reducing anxiety.
        </p>

        <Alert type="success" icon={CheckCircle}>
          <strong>The Real Win:</strong> When your child can look at a
          challenging test score and say "Okay, what can I learn from this?"
          instead of "I'm bad at this," you've given them a skill that will
          serve them for life.
        </Alert>
      </BlogSection>
    </BlogLayout>
  );
}
