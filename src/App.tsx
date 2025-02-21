import React, {
  useCallback,
  useState,
} from 'react';

import {
  AudioLines,
  HeadphoneOff,
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from 'slate-ui';
import {
  toast,
  Toaster,
} from 'sonner';

import Vapi from '@vapi-ai/web';

import { CanvasSectionComponent } from './tools';
import {
  CanvasSection,
  ORIN_TOOLS,
  ToolCallWithArgs,
  VALID_CANVAS_SECTION_TYPES,
} from './tools/tools';

const vapi = new Vapi("6abe9004-54a5-454e-8bf6-0678db02abdf");

const prompt = `
  Orin is an S.A.T tutor. Right now, Orin is embedded in a landing page for tutoring services. The
  person Orin is about to talk to is a potential customer.

  Here are Orin's unique selling points for parents and kids for context:
  - Parents:
    - Orin will help their kid learn and improve.
    - Orin will meet their kid where they are.
    - Orin will keep the kid accountable to actually study. Once engaged, Orin will set up a study
      schedule and follow up with them to make sure they stick to it. If they're getting off
      track, falling behind, or not showing up, Orin will let them know.
    - Orin charges a fixed monthly price of $150/mo no matter how much the kid works with them.
  - Kids:
    - Orin will meet them where they are. Not a self-study course or just a chatbot.
    - Orin will work through problems at their pace since there's no class - just 1:1 tutoring.
    - Orin is actually focused on their understanding of the material - not just getting them to
      the right answer.
    - Orin can keep them accountable to actually study. Orin communicates with students and parents
      via SMS, WhatsApp, and phone calls.

  Here's the rough script Orin follows:
  1. Say hi and ask if the person is a parent or a student.
  2. See if they want to walk through a sample S.A.T question.
  3. If they do, ask them a random question from the S.A.T. Ask them to walk you through
     how they'd solve it.
  4. Help them solve the problem and give some quick feedback on their reasoning.
  5. Once finished walking through the question, explain that the next step would be for
     the kid to take a placement test. Orin uses this to assess their current level and make a
     custom study plan based on their target score, test date, and study commitment.
  6. If they want to proceed, do one of the following:
    - If they're a parent, copy the link to the signup page to the clipboard. Instruct them
      send that link to their kid and they can sign up.
    - If they're a student, redirect them to the signup page.

  Here's the signup page: https://app.learnwithorin.com/signup

  Everything should be formatted for a text-to-speech voice, as Orin interacts with the
  user via embedded voice. For example: "y = 3x + 2" should be written as "y equals 3x plus 2". DO
  NOT FORGET THIS.
  
  Do not explain why you're asking a question. Just ask it. For example, instead of saying "Are you a
  parent or a student? This will help me tailor our conversation." just say "Are you a parent or
  a student?"
  
  Only use display tools when walking through a question. The user can only see one display at a time.

  Other facts:
  - Students get 7 days free for a trial. After that, they're billed $150/mo.
  - Orin is available to chat with students or parents via SMS, WhatsApp, and phone calls at any time.

  Roleplay as Orin.
`;

function App() {
  const [callOn, setCallOn] = useState<boolean>(false);
  const [display, setDisplay] = useState<CanvasSection | null>(null);

  const initVapi = useCallback(() => {
    vapi.start({
      transcriber: {
        provider: "assembly-ai",
      },
      model: {
        provider: "anthropic",
        model: "claude-3-5-sonnet-20241022",
        messages: [
          {
            role: "system",
            content: prompt,
          },
          {
            role: "assistant",
            content: "Hey! I'm Orin, an S.A.T tutor. What can I help with?",
          },
        ],
        maxTokens: 4096,
        tools: ORIN_TOOLS,
      },
      silenceTimeoutSeconds: 600,
      voice: {
        provider: "11labs",
        voiceId: "L0Dsvb3SLTyegXwtm47J",
        model: "eleven_multilingual_v2",
        stability: 0.8,
        similarityBoost: 0.7,
      },
      maxDurationSeconds: 43200,
      // @ts-expect-error: Vapi types are wrong
      clientMessages: ["tool-calls"],
      name: "Orin",
      firstMessageMode: "assistant-waits-for-user",
    });
    setCallOn(true);
    setTimeout(() => {
      toast.success("Say hi to Orin!");
      vapi.setMuted(false);
    }, 2000);

    // Handle tool calls.
    vapi.on(
      "message",
      async (message: {
        type: "tool-calls";
        toolCallList: ToolCallWithArgs[];
      }) => {
        console.log("message", message);
        if (message.type !== "tool-calls") {
          return;
        }

        for (const toolCall of message.toolCallList) {
          switch (toolCall.function.name) {
            case "redirect-to-url":
              window.location.href = toolCall.function.arguments.url;
              break;
            case "new_note_section":
            case "new_graph_section":
            case "new_multiple_choice_section":
            case "new_plot_section":
            case "new_table_section":
            case "new_short_answer_section": {
              const section = toolCall.function.arguments;
              if (!VALID_CANVAS_SECTION_TYPES.includes(section.type)) {
                console.error("Invalid section type", section);
                return;
              }
              setDisplay(toolCall.function.arguments);
              break;
            }
          }
        }
      }
    );
  }, []);

  return (
    <div className="max-w-screen h-screen flex flex-col">
      <Toaster />

      <div className="grow w-full flex flex-col gap-8 px-8 items-center justify-center relative">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                rgba(255, 0, 0, 0.3) 39px,
                rgba(255, 0, 0, 0.3) 41px,
                transparent 0px,
                transparent 100%
              ),
              repeating-linear-gradient(
                0deg,
                rgba(0, 0, 255, 0.2) 5px,
                rgba(0, 0, 255, 0.2) 6px,
                transparent 0px,
                transparent 32px
              ),
              radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.8) 40%,
                transparent 100%
              )
            `,
            backgroundBlendMode: "overlay",
          }}
        />

        {display ? (
          <CanvasSectionComponent
            section={display}
            sendMessageToVapi={(message) => vapi.send(message)}
            updateSection={setDisplay}
          />
        ) : (
          <TypeAnimation
            sequence={[
              "Hey! I'm Orin, an S.A.T tutor. What can I help with?",
              1000,
            ]}
            speed={50}
            className="text-5xl font-normal max-w-2xl text-center relative"
          />
        )}

        {callOn ? (
          <Button
            iconLeft={HeadphoneOff}
            onClick={() => {
              vapi.setMuted(true);
              vapi.stop();
              setCallOn(false);
            }}
            size="lg"
            className="text-md gap-2 relative"
          >
            End
          </Button>
        ) : (
          <Button
            iconLeft={AudioLines}
            onClick={initVapi}
            size="lg"
            className="text-md gap-2 relative"
          >
            Talk with Orin
          </Button>
        )}
      </div>

      <footer className="bg-gray-50 py-2 border-t">
        <div className="container mx-auto text-center text-gray-400 text-xs flex justify-between gap-4">
          <p>© 2025 Orin Labs. All rights reserved.</p>
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
