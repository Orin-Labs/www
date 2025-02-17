import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  AudioLinesIcon,
  ChevronDown,
  ChevronRight,
  Forward,
  Hourglass,
  LoaderCircle,
  Minus,
  Radar,
  Rocket,
  Speech,
  Sun,
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from 'slate-ui';
import { useLocalStorage } from 'usehooks-ts';

import Vapi from '@vapi-ai/web';
import { CreateAssistantDTO } from '@vapi-ai/web/dist/api';

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg h-full">
      <div className="flex gap-2 items-center mb-2">
        <Icon className="text-2xl text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Bullet({
  icon: Icon,
  description,
}: {
  icon: React.ElementType;
  description: string;
}) {
  return (
    <div className="flex items-center gap-2 text-gray-500 flex-col sm:flex-row text-center sm:text-left">
      <Icon className="text-2xl text-primary" />
      <span className="text-md">{description}</span>
    </div>
  );
}

function App() {
  // Detect "waitlist-confirmed" query param
  const waitlistConfirmed = new URLSearchParams(window.location.search).get(
    "waitlist-confirmed"
  );

  const [isWaitlistConfirmed, setIsWaitlistConfirmed] = useLocalStorage(
    "waitlist-confirmed",
    !!waitlistConfirmed
  );

  if (waitlistConfirmed) {
    setIsWaitlistConfirmed(true);
  }

  const [vapi, setVapi] = useState<Vapi>(
    new Vapi("6abe9004-54a5-454e-8bf6-0678db02abdf")
  );
  const [orinLoading, setOrinLoading] = useState(false);
  const [orinTalking, setOrinTalking] = useState(false);
  const [callOn, setCallOn] = useState(false);

  const initVapi = async () => {
    setOrinLoading(true);
    const MODEL: CreateAssistantDTO = {
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      model: {
        provider: "openai",
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `
            You are a succinct AI tutor named Orin. You're currently studying at Oxford and
            are tutoring for some side cash. You love coffee, renaissance art, violin, and
            whatever subject is being taught.

            Don't ask the user if they have more questions, just answer them and treat the
            conversation as a normal conversation. Try and match the user's tone and style.

            Currently, you're embedded in a landing page selling your services. The person you're
            talking to is a potential customer. Your job is to be friendly, engaging, not too
            salesly, and help them learn more about you and your services.

            Within the app, user's will enter lessons with you. You'll be able to coach them
            through their lessons, controlling their UI and generating a shared notebook with
            notes, quizzes, examples, and more. You also construct a knowledge graph of the user's
            knowledge and use that to tailor the exact lessons they need. You update this knowledge
            graph after each lesson by reviewing the lesson transcript and updating the graph.

            The price is $150/month with a 7-day free trial. This is cheaper than any human tutoring
            service, and users can use you as much as they want every month.

            You are run by a company called Orin Labs, which is a small startup based in San Francisco.

            Do not mention features that aren't explicitly mentioned on the page or in this prompt.
            
            Features on the roadmap include:
            - Practice tests for the SAT
            - Parental reporting: realtime reports, allowing parents to call you and get a report
              on their child's progress.

            Here's the HTML of the page you're embedded in:
            ${document.documentElement.outerHTML}
            
            Greet the user, let them know this call is limited to 10 minutes, and ask if you can
            help them navigate or understand the webpage.
            `,
          },
        ],
      },
      voice: {
        provider: "11labs",
        voiceId: "L0Dsvb3SLTyegXwtm47J", // "T5cu6IU92Krx4mh43osx",
        model: "eleven_flash_v2_5",
      },
      stopSpeakingPlan: {
        numWords: 1,
      },
      // @ts-expect-error: Vapi type error thinks this shouldn't be an array.
      clientMessages: ["tool-calls", "speech-update", "conversation-update"],
      maxDurationSeconds: 600,
      name: "Orin",
      firstMessageMode: "assistant-speaks-first-with-model-generated-message",
    };
    await vapi.start(MODEL);
    setOrinLoading(false);
    setCallOn(true);

    vapi.on(
      "message",
      async (message: {
        type: "speech-update";
        status: "started" | "stopped";
        role: "assistant" | "user";
      }) => {
        if (message.type === "speech-update" && message.role === "assistant") {
          setOrinTalking(message.status === "started");
        }
      }
    );
  };

  return (
    <div className="max-w-screen relative overflow-y-auto z-0">
      <div className="absolute top-0 flex justify-between w-full h-[90vh] overflow-hidden opacity-10 xl:opacity-25">
        <img
          src="/tree.png"
          alt="Orin"
          className="w-full xl:w-[40vw] object-cover xl:-rotate-45"
        />
        <img
          src="/tree.png"
          alt="Orin"
          className="hidden xl:block w-[40vw] object-cover rotate-45"
        />
      </div>

      {/* Hero Section */}
      <header className="z-10 dot-vignette w-full px-4 h-[90vh] flex flex-col items-center justify-center relative">
        <div className="container max-w-4xl w-full text-center flex flex-col items-center">
          {isWaitlistConfirmed || waitlistConfirmed ? (
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
              You're on the waitlist!
            </h1>
          ) : (
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
              Meet Orin, your<br></br>
              <TypeAnimation
                className="text-primary"
                sequence={["personal SAT tutor.", 1000]}
              />
            </h1>
          )}
          <span className="text-xl text-gray-600 mb-8">
            The first learning assistant that learns <strong>you</strong>.
          </span>
          <div className="flex gap-4">
            <Button
              className="text-md gap-2 hover:scale-105 transition-all"
              iconLeft={
                orinLoading
                  ? LoaderCircle
                  : callOn
                  ? orinTalking
                    ? AudioLinesIcon
                    : Minus
                  : Speech
              }
              onClick={() => {
                if (callOn) {
                  vapi.stop();
                  setOrinTalking(false);
                  setCallOn(false);
                } else {
                  initVapi();
                }
              }}
              size="lg"
              disabled={orinLoading}
              styles={{
                icon: {
                  animation: orinLoading
                    ? "spin 1s linear infinite"
                    : undefined,
                },
              }}
            >
              {orinLoading ? "Loading..." : callOn ? "Stop" : "Talk to Orin"}
            </Button>
            <a
              href="https://getwaitlist.com/waitlist/24645"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="secondary"
                className="text-md hover:scale-105 transition-all"
                size="lg"
                iconRight={ChevronRight}
              >
                <span className="hidden sm:block">Join</span> Waitlist
              </Button>
            </a>
          </div>
        </div>

        <Button
          className="absolute bottom-4 right-4 sm:right-8 md:right-16 text-muted"
          iconRight={ChevronDown}
          variant="subtle"
        >
          Scroll to meet Orin
        </Button>
      </header>

      {/* Features Grid */}
      <section className="z-10 grow md:mx-16 md:rounded-lg flex flex-col items-center gap-8 py-8 sm:py-16 md:py-32 px-8 bg-primary border-y">
        <h1 className="text-white text-4xl font-semibold">
          So, what can Orin do?
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-96 sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureCard
              icon={Radar}
              title="Map Your Knowledge"
              description="Orin maps out your knowledge and uses that information to build a personalized learning plan."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureCard
              icon={Sun}
              title="Expertise in Every Subject"
              description="Orin can pass the LSAT, MCAT, scores perfectly on the SAT/ACT and AP tests, and is an expert on virtually every subject."
            />
          </motion.div>
        </div>
        <div className="max-w-96 sm:max-w-xl md:max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureCard
              icon={Hourglass}
              title="Learn How You Learn"
              description="Orin learns your preferred learning style and adjusts teaching methods for optimal understanding."
            />
          </motion.div>
        </div>
      </section>

      <section className="grow m-6 sm:m-12 md:m-16 px-6 rounded-lg z-10 flex flex-col items-center sm:bg-muted gap-4 py-8 sm:py-16 md:py-32">
        <h1 className="text-4xl text-center font-semibold">The SAT, mapped.</h1>
        <div className="w-full lg:w-3/4 overflow-hidden rounded-lg border shadow-lg">
          <img src="/product.png" alt="SAT" className="w-full" />
        </div>
      </section>

      {/* Pricing */}
      <section className="grow m-6 sm:m-12 md:m-16 px-6 rounded-lg z-10 flex flex-col items-center sm:bg-muted gap-4 py-8 sm:py-16 md:py-32">
        <h1 className="text-4xl font-semibold">Pricing</h1>
        <div className="flex gap-8 justify-center">
          <div className="border bg-white rounded-lg p-6 flex flex-col gap-2">
            <div className="flex justify-between items-center flex-col sm:flex-row">
              <p className="text-2xl font-medium">Full Access</p>
              <h1 className="text-2xl">
                $150.00<span className="text-sm text-gray-500 ml-1">/mo</span>
              </h1>
            </div>
            <p className="text-gray-500 text-lg text-center sm:text-left">
              Unparalleled learning power, more accessible than ever.
            </p>

            <div className="border-b my-4"></div>

            <div className="flex flex-col gap-8 sm:gap-4">
              <Bullet icon={Sun} description="Capacity to teach any subject." />
              <Bullet
                icon={Forward}
                description="Instruct via every medium - chat, voice, visual."
              />
              <Bullet
                icon={Radar}
                description="Comprehensive knowledge mapping and assessment."
              />
              <Bullet
                icon={Hourglass}
                description="Adaptive tutoring for your optimal learning."
              />
              <Bullet
                icon={Rocket}
                description="Predefined learning objectives (SAT, MCAT, etc)."
              />
            </div>

            <div className="w-full flex justify-center sm:justify-end mt-4">
              <a
                href="https://getwaitlist.com/waitlist/24645"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  iconRight={ChevronRight}
                  className="hover:scale-105 transition-all text-md"
                  size="lg"
                >
                  Join Waitlist
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-2 border-t">
        <div className="container mx-auto text-center text-gray-400 text-xs">
          <p>© 2025 Pylon Solutions, Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
