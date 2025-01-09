import React from "react";

import { ArrowUpRight } from "lucide-react";

import {
  DownOutlined,
  ForwardOutlined,
  HourglassOutlined,
  RadarChartOutlined,
  RightOutlined,
  RocketOutlined,
  SunOutlined,
} from "@ant-design/icons";

const HIRING_BUTTON = (
  <a href="mailto:brhoulton@gmail.com">
    <button className="text-gray-500 flex gap-2 justify-center px-1.5 py-0.5 text-sm items-center">
      Join Us
      <ArrowUpRight size={18} />
    </button>
  </a>
);

const FREE_TRIAL_BUTTON = (
  <button className="bg-indigo-600 w-fit depress text-white pl-6 pr-4 py-2 text-md font-semibold hover:bg-indigo-700 transition-colors drop">
    <div className="flex gap-2 items-center">
      Start Free Trial
      <RightOutlined size={24} />
    </div>
  </button>
);

function Navbar() {
  return (
    <div className="fixed w-screen px-4 top-4 z-50">
      <nav className="max-w-4xl w-fit mx-auto bg-white/80 backdrop-blur border p-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center space-x-2">
            {/* <Sparkles className="w-6 h-6 text-indigo-600" /> */}
            <span className="text-lg font-bold text-gray-900">Orin</span>
          </div>

          {/* <div className="flex gap-4">
            <a
              href="#how-it-works"
              className="text-sm text-gray-700 hover:text-indigo-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
          </div> */}

          {FREE_TRIAL_BUTTON}
        </div>
      </nav>
    </div>
  );
}

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
    <div className="bg-white p-6 drop">
      <div className="flex gap-2 items-center mb-2">
        <Icon className="text-2xl text-indigo-600" />
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
    <div className="flex items-center gap-2 text-gray-500">
      <Icon className="text-2xl text-indigo-600" />
      <span className="text-md">{description}</span>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen max-w-screen relative">
      {/* Grid */}
      <div className="fixed right-4 top-4">{HIRING_BUTTON}</div>

      {/* Hero Section */}
      <header className="z-10 dot-vignette w-full px-4 h-[95vh] flex flex-col items-center justify-center relative">
        <div className="container max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            Meet Orin, Your<br></br>
            <span className="text-indigo-600">Personalized AI Tutor</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The first learning assistant that learns <strong>you</strong>.
          </p>
          {FREE_TRIAL_BUTTON}
        </div>

        <div className="absolute bottom-4 right-4 text-gray-500 text-sm flex gap-2">
          <span>Scroll to meet Orin</span>
          <DownOutlined />
        </div>
      </header>

      {/* Features Grid */}
      <section className="w-full z-10 flex flex-col items-center gap-8 py-32 bg-indigo-600">
        <h1 className="text-white text-4xl font-semibold">
          So, what can Orin do?
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-96 sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          <FeatureCard
            icon={SunOutlined}
            title="Teach Any Subject, Any Level"
            description="Orin can pass the LSAT, MCAT, scores perfectly on the SAT/ACT and AP tests, and is an expert on virtually every subject."
          />
          <FeatureCard
            icon={RadarChartOutlined}
            title="Map Your Knowledge"
            description="Orin maps out your knowledge behind the scenes and uses that information to build perfectly crafted instruction."
          />
        </div>
        <div className="max-w-96 sm:max-w-xl md:max-w-2xl mx-auto">
          <FeatureCard
            icon={HourglassOutlined}
            title="Learn How You Learn"
            description="Orin learns your preferred learning style and adjusts teaching methods for optimal understanding."
          />
        </div>
      </section>

      <section className="w-full z-10 flex flex-col items-center gap-8 py-32">
        <h1 className="text-4xl font-semibold">Pricing</h1>
        <div className="flex gap-8 justify-center">
          <div className="border drop drop-light p-8 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-medium">Full Access</p>
              <h1 className="text-2xl">
                $150.00<span className="text-sm text-gray-500 ml-1">/mo</span>
              </h1>
            </div>
            <p className="text-gray-500 text-lg">
              Unparalleled learning power, more accessible than ever.
            </p>

            <div className="border-b my-4"></div>

            <div className="flex flex-col gap-4">
              <Bullet
                icon={SunOutlined}
                description="Capacity to teach any subject."
              />
              <Bullet
                icon={ForwardOutlined}
                description="Instruct via every medium - chat, voice, visual."
              />
              <Bullet
                icon={RadarChartOutlined}
                description="Comprehensive knowledge mapping and assessment."
              />
              <Bullet
                icon={HourglassOutlined}
                description="Adaptive tutoring for your optimal learning."
              />
              <Bullet
                icon={RocketOutlined}
                description="Predefined learning objectives (SAT, MCAT, etc)."
              />
            </div>

            <div className="w-full flex justify-end mt-4">
              {FREE_TRIAL_BUTTON}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-64 z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Experience the Future of Learning
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Learning is a lifelong endeavor. Welcome to your first step.
          </p>
          {FREE_TRIAL_BUTTON}
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-50 py-2 border-t">
        <div className="container mx-auto text-center text-gray-600 text-xs">
          <p>© 2024 Incortical. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
