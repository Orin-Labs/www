import React from 'react';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '../Button';

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
  questions: DecisionTreeQuestion[];
  getResult: (answers: boolean[]) => DecisionTreeResult;
  className?: string;
}

export const DecisionTree: React.FC<DecisionTreeProps> = ({
  title = "Interactive Decision Tree",
  questions,
  getResult,
  className = "",
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<boolean[]>([]);
  const [showResult, setShowResult] = React.useState(false);

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

  if (showResult) {
    const result = getResult(answers);
    const bgColor =
      result.type === "success"
        ? "bg-green-50"
        : result.type === "caution"
        ? "bg-yellow-50"
        : "bg-red-50";
    const borderColor =
      result.type === "success"
        ? "border-green-200"
        : result.type === "caution"
        ? "border-yellow-200"
        : "border-red-200";
    const textColor =
      result.type === "success"
        ? "text-green-800"
        : result.type === "caution"
        ? "text-yellow-800"
        : "text-red-800";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${bgColor} ${borderColor} border-2 p-8 rounded-xl shadow-lg ${className}`}
      >
        <div className="text-center mb-6">
          <h3 className={`text-3xl font-bold mb-4 ${textColor}`}>
            {result.title}
          </h3>
          <p className={`text-lg ${textColor} mb-6`}>{result.message}</p>
        </div>

        <div className="bg-white p-6 rounded-lg mb-6 border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-4">📋 Next Steps:</h4>
          <ul className="space-y-2">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button
            bg="gray"
            shadow="neu"
            className="text-gray-900 gap-2"
            onClick={reset}
          >
            Start Over
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 p-8 rounded-xl shadow-lg ${className}`}
    >
      <h3 className="text-3xl font-bold mb-8 text-center text-blue-900">
        🎯 {title}
      </h3>

      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-blue-600">Progress</span>
            <span className="text-sm font-medium text-blue-600">
              {currentStep + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-3">
            <motion.div
              className="bg-blue-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Current Question */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-lg p-6 shadow-md mb-6"
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0">
              {questions[currentStep].id}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl text-gray-800 mb-2">
                {questions[currentStep].question}
              </h4>
              {questions[currentStep].context && (
                <p className="text-gray-600 text-sm">
                  {questions[currentStep].context}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4 justify-center">
            <Button
              bg="gray"
              shadow="neu"
              className="gap-2 px-8 py-3"
              onClick={() => handleAnswer(true)}
            >
              ✅ Yes
            </Button>
            <Button
              bg="gray"
              shadow="neu"
              className="gap-2 px-8 py-3"
              onClick={() => handleAnswer(false)}
            >
              ❌ No
            </Button>
          </div>
        </motion.div>

        {/* Previous Answers */}
        {answers.length > 0 && (
          <div className="bg-white/50 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">Your Answers:</h5>
            <div className="space-y-1">
              {answers.map((answer, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                >
                  <span className="text-gray-600">Q{index + 1}:</span>
                  <span
                    className={`font-semibold ${
                      answer ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {answer ? "Yes" : "No"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-center text-blue-800 font-semibold">
          💡 <strong>Pro Tip:</strong> Answer honestly - this tool is designed
          to help you make the best decision.
        </p>
      </div>
    </div>
  );
};
