import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, Play, X } from "lucide-react";

interface DecisionTreeQuestion {
  id: number;
  question: string;
  context?: string;
}

interface DecisionTreeResult {
  type: "success" | "caution" | "wait";
  title: string;
  message: string;
  recommendations: string[];
}

interface DecisionTreeProps {
  title?: string;
  imageUrl?: string;
  questions: DecisionTreeQuestion[];
  getResult: (answers: boolean[]) => DecisionTreeResult;
  className?: string;
}

export const DecisionTree: React.FC<DecisionTreeProps> = ({
  title = "Interactive Decision Tree",
  questions,
  getResult,
  imageUrl,
  className = "",
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (answer === false) {
      // If they answer "No" to any question, show result immediately
      setShowResult(true);
    } else if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All questions answered
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const result = getResult(answers);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-8 bg-[#000000bb] text-white min-h-[400px] flex flex-col gap-8 relative">
        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div
              className="flex flex-col gap-4 items-center justify-center grow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              exit={{ opacity: 0, y: 20 }}
            >
              <h3 className="text-4xl font-bold text-white text-center">
                {result.title}
              </h3>
              <p className="text-md mb-8 text-center max-w-2xl">
                {result.message}
              </p>
            </motion.div>
          ) : currentStep === 0 ? (
            <>
              <motion.div
                className="flex flex-col gap-4"
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                exit={{ opacity: 0, y: 20 }}
              >
                <h3 className="text-3xl font-bold text-white">{title}</h3>
                <p className="text-white/80 text-sm mb-8">
                  Answer the questions below to get a recommendation.
                </p>
              </motion.div>
              <motion.div
                className="grow flex flex-col justify-end items-end"
                key="start-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                exit={{ opacity: 0, y: 20 }}
              >
                <button
                  className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2"
                  onClick={() => setCurrentStep((p) => p + 1)}
                >
                  Start
                  <Play className="w-4 h-4" />
                </button>
              </motion.div>
            </>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col justify-between grow"
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-4xl text-white mb-2">
                  {questions[currentStep].question}
                </h2>
                {questions[currentStep].context && (
                  <p className="text-white/80 text-lg">
                    {questions[currentStep].context}
                  </p>
                )}
              </div>

              <div className="flex justify-between gap-2 items-center">
                <div className="flex gap-6">
                  <button
                    className="text-white flex items-center gap-2 h-fit"
                    onClick={() => setCurrentStep((p) => p - 1)}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    className="text-white flex items-center gap-2 h-fit"
                    onClick={reset}
                  >
                    Reset
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 bg-white min-w-24 justify-center text-black rounded-lg flex items-center gap-2 h-fit"
                    onClick={() => handleAnswer(true)}
                  >
                    Yes
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    className="px-4 py-2 bg-white min-w-24 justify-center text-black rounded-lg flex items-center gap-2 h-fit"
                    onClick={() => handleAnswer(false)}
                  >
                    No
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {showResult && (
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <button className="flex items-center gap-2" onClick={reset}>
              <ArrowLeft className="w-4 h-4" />
              Reset
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
