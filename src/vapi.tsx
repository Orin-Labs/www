import { useCallback, useEffect, useState } from "react";

import { generate } from "random-words";
import { toast } from "sonner";

import Vapi from "@vapi-ai/web";
import { OpenAIMessage } from "@vapi-ai/web/dist/api";

import { REPLACEMENTS } from "./replacements";
import {
  CanvasSection,
  ORIN_TOOLS,
  ToolCallWithArgs,
  VALID_CANVAS_SECTION_TYPES,
} from "./tools/tools";

const vapi = new Vapi("6abe9004-54a5-454e-8bf6-0678db02abdf");

type VapiMessage =
  | { type: "tool-calls"; toolCallList: ToolCallWithArgs[] }
  | {
      type: "conversation-update";
      messages: { role: string; message: string }[];
    }
  | {
      type: "speech-update";
      status: "started" | "stopped";
      role: "assistant" | "user";
    };

const prompt = `
  --random seed--
  ${generate(5)}
  --end random seed--


  Orin is an assertive, opinionated S.A.T tutor. Right now, Orin is embedded in a landing page for tutoring
  services. The person Orin is about to talk to is a potential customer. Orin speaks to them like he's talking
  over the phone. For example, Orin will make an effort to read out math in a way that's easy to understand
  in a conversational, not just on a screen. Orin is empathetic and tries to understand how the user is
  experiencing this interaction, while still having a strong opinion on how the user should learn.

  Here are Orin's unique selling points for parents and kids:
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
  1. See if they want to walk through a sample S.A.T question.
  2. If they do, ask them a random question from the S.A.T. Put it on the canvas and ask them
     directly to walk you through how they'd solve it, out loud. Make sure to get them to engage
     and explain their reasoning.
  3. Write down their solution and give some quick feedback on their reasoning. Keep guiding them
     slowly towards the answer without EVER giving it away. The user should learn how to do it.
  4. Once finished with the question, explain that the next step would be for
     the kid to take a placement test. Orin uses this to assess their current level and make a
     custom study plan based on their target score, test date, and study commitment.
  5. If they want to proceed, do one of the following:
    - If they're a parent, copy the link to the signup page to the clipboard. Instruct them
      send that link to their kid and they can sign up.
    - If they're a student, redirect them to the signup page.

  Here's the signup page: https://app.learnwithorin.com/signup
  
  The user can only see one canvas section at a time.

  Other facts:
  - Students get 7 days free for a trial. After that, they're billed $150/mo.
  - Orin is available to chat with students or parents via SMS, WhatsApp, and phone calls at any time.

  Roleplay as Orin.
`;

export function useVapi() {
  const [callOn, setCallOn] = useState<boolean>(false);
  const [display, setDisplay] = useState<CanvasSection | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [toolCallQueue, setToolCallQueue] = useState<ToolCallWithArgs[]>([]);
  const [messages, setMessages] = useState<OpenAIMessage[]>([
    {
      role: "system",
      content: prompt,
    },
  ]);
  const flushToolCalls = useCallback(() => {
    for (const toolCall of toolCallQueue) {
      switch (toolCall.function.name) {
        case "redirect-to-url":
          window.location.href = toolCall.function.arguments.url;
          break;
        case "new_note_section":
        case "new_graph_section":
        case "new_multiple_choice_section":
        case "new_plot_section":
        case "new_table_section":
        case "new_copy_link_section":
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
    setToolCallQueue([]);
  }, [toolCallQueue]);

  const initVapi = useCallback(() => {
    vapi.start({
      transcriber: {
        provider: "deepgram",
        model: "nova-3",
        language: "en-US",
        keywords: ["Orin", "SAT"].filter((k) => Boolean(k)) as string[],
      },
      model: {
        provider: "anthropic",
        model: "claude-3-5-sonnet-20241022",
        messages: messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
        tools: ORIN_TOOLS,
        maxTokens: 8192,
      },
      messagePlan: {
        idleTimeoutSeconds: 10,
        idleMessages: [
          "Hey. You still with me?",
          "Hey. Are you still there?",
          "Dang. Did you fall asleep on me? No worries, let me know when you're ready.",
          "I'm here if you need me, just let me know.",
          "Hey there, I noticed the silence. Everything okay?",
          "Hello? I'm still here whenever you're ready.",
          "It's pretty quiet... Did you need a moment?",
          "Just checking in. Feel free to jump back in when you're ready.",
          "I'm here if you need help or have questions.",
          "Hey, seems like it's quiet on your end. Need anything?",
          "Is everything alright? I'm ready when you are.",
          "Looks like there's a pause. Let me know if you'd like to continue.",
          "I'm still listening—no hurry, take your time.",
          "Hey, I can sense a lull. Whenever you're ready, just say the word.",
        ],
      },
      silenceTimeoutSeconds: 600,
      voice: {
        provider: "cartesia",
        voiceId: "729651dc-c6c3-4ee5-97fa-350da1f88600",
        model: "sonic-english",
        chunkPlan: {
          formatPlan: {
            numberToDigitsCutoff: 9,
            // @ts-expect-error: Vapi types are wrong.
            formattersEnabled: [
              "markdown",
              "asterisk",
              "quote",
              "dash",
              "newline",
              "colon",
              "acronym",
              "dollarAmount",
              "email",
              "date",
              "time",
              "percentage",
              "phoneNumber",
              "number",
            ],
            replacements: REPLACEMENTS,
          },
        },
      },
      maxDurationSeconds: 43200,
      // @ts-expect-error: Vapi types are wrong
      clientMessages: ["tool-calls", "speech-update", "conversation-update"],
      name: "Orin",
      firstMessageMode: "assistant-speaks-first",
      firstMessage:
        "Hey! I'm Orin, a private S.A.T tutor. Are you a parent or a student?",
    });

    setLoading(true);

    vapi.on("call-start", () => {
      toast.success("Say hi to Orin!");
      vapi.setMuted(false);
      setCallOn(true);
      setLoading(false);
    });
  }, [messages]);

  useEffect(() => {
    function handleMessage(message: VapiMessage) {
      console.log("message", message);
      if (
        message.type === "speech-update" &&
        message.role === "assistant" &&
        message.status === "stopped"
      ) {
        flushToolCalls();
      }

      if (message.type === "conversation-update") {
        const newHistory = message.messages
          .filter((m) => !m.role.includes("tool"))
          .map((m) => ({
            role: m.role === "bot" ? "assistant" : m.role,
            content: m.message,
          })) as OpenAIMessage[];

        setMessages(newHistory);
      }

      if (message.type === "tool-calls") {
        setToolCallQueue((prev) => [...prev, ...message.toolCallList]);
      }
    }

    vapi.on("message", handleMessage);

    return () => {
      vapi.off("message", handleMessage);
    };
  }, [flushToolCalls]);

  return {
    callOn,
    display,
    loading,
    initVapi,
    messages,
    vapi,
    setDisplay,
    setCallOn,
  };
}
