import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { parsePhoneNumber } from 'libphonenumber-js';
import {
  ChevronDown,
  Forward,
  Hourglass,
  Radar,
  Rocket,
  Sun,
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import {
  Button,
  Checkbox,
  TextInput,
} from 'slate-ui';
import {
  toast,
  Toaster,
} from 'sonner';
import { useLocalStorage } from 'usehooks-ts';

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

function SubmitForm() {
  const [submitted, setSubmitted] = useLocalStorage("submitted", false);
  const [isParent, setIsParent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [useEmail, setUseEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || (!phone && !useEmail) || (useEmail && !email)) {
      toast.error("Please fill out all fields.");
      return;
    }

    setSubmitted(true);

    const payload = {
      your_name: name,
      is_parent: isParent,
      ...(useEmail
        ? { email }
        : { phone_number: parsePhoneNumber(phone, "US").number }),
    };

    fetch("https://api.learnwithorin.com/api/users/express-interest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  if (submitted) {
    return (
      <p className="text-xl text-gray-600">
        Submitted! Orin will be in touch soon.
      </p>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <TextInput
        value={name}
        placeholder="Your Name"
        className="w-full"
        onChange={setName}
      />
      <div className="flex gap-2 w-full">
        {useEmail ? (
          <TextInput
            value={email}
            type="email"
            placeholder="Email Address"
            onChange={setEmail}
            className="grow"
          />
        ) : (
          <TextInput
            value={phone}
            placeholder="Phone Number"
            onFocus={(e) => (e.target.type = "tel")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={setPhone}
            className="grow"
          />
        )}
        <Checkbox
          label="Use email instead"
          checked={useEmail}
          onCheckedChange={() => setUseEmail((prev) => !prev)}
          withBody
        />
      </div>
      <div className="w-full">
        <Checkbox
          label="I'm a parent"
          checked={isParent}
          onCheckedChange={() => setIsParent((prev) => !prev)}
          withBody
        />
      </div>
      <Button type="submit" className="w-fit">
        Reach out to me!
      </Button>
    </motion.form>
  );
}

function App() {
  return (
    <div className="max-w-screen relative overflow-y-auto z-0">
      <Toaster />
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
        <div className="container max-w-4xl w-full text-center flex flex-col gap-4 items-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
            Meet Orin, your<br></br>
            <TypeAnimation
              className="text-primary"
              sequence={["personal SAT tutor.", 1000]}
            />
          </h1>
          <span className="text-xl text-gray-600">
            The first learning assistant that learns <strong>you</strong>.
          </span>
          <SubmitForm />
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

            <div className="flex flex-col gap-8 sm:gap-4 border-b pb-6 mb-4">
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
            <SubmitForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-2 border-t">
        <div className="container mx-auto text-center text-gray-400 text-xs">
          <p>© 2025 Orin Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
