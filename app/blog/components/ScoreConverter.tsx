"use client";

import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Ban,
  MapPin,
} from 'lucide-react';
import posthog from 'posthog-js';

import { cn } from '@/utils';

interface StateTestPrediction {
  testName: string;
  prediction: string;
  confidence: string;
  description: string;
}

interface ScoreConverterProps {
  className?: string;
}

type ConverterStep = "welcome" | "input" | "state" | "results";

const getStateSpecificPrediction = (
  ritScore: number,
  grade: number,
  subject: string,
  stateCode: string,
  testName: string,
  stateName: string
): StateTestPrediction => {
  // Grade-based RIT score ranges (approximate averages)
  const gradeRanges = {
    3: {
      math: { low: 140, mid: 160, high: 180 },
      reading: { low: 140, mid: 160, high: 180 },
    },
    4: {
      math: { low: 150, mid: 170, high: 190 },
      reading: { low: 150, mid: 170, high: 190 },
    },
    5: {
      math: { low: 160, mid: 180, high: 200 },
      reading: { low: 160, mid: 180, high: 200 },
    },
    6: {
      math: { low: 170, mid: 190, high: 210 },
      reading: { low: 170, mid: 190, high: 210 },
    },
    7: {
      math: { low: 180, mid: 200, high: 220 },
      reading: { low: 180, mid: 200, high: 220 },
    },
    8: {
      math: { low: 190, mid: 210, high: 230 },
      reading: { low: 190, mid: 210, high: 230 },
    },
  };

  const ranges =
    gradeRanges[grade as keyof typeof gradeRanges]?.[
      subject as keyof (typeof gradeRanges)[3]
    ];

  if (!ranges) {
    return {
      testName,
      prediction: "Unable to predict",
      confidence: "Low",
      description: "Insufficient data for this grade/subject combination.",
    };
  }

  let prediction = "";
  let confidence = "";
  let description = "";

  // State-specific performance level mappings
  const statePerformanceLevels: { [key: string]: string[] } = {
    // 3-level states
    IA: ["Not-Yet-Proficient", "Proficient", "Advanced"],
    NE: ["Developing", "On Track", "Advanced"],
    VA: ["Below Proficient", "Proficient", "Advanced"],

    // 4-level states (most common)
    AL: ["Level 1", "Level 2", "Level 3", "Level 4"],
    AK: ["Needs Support", "Approaching Proficient", "Proficient", "Advanced"],
    AZ: [
      "Minimally Proficient",
      "Partially Proficient",
      "Proficient",
      "Highly Proficient",
    ],
    AR: ["In Need of Support", "Close", "Ready", "Exceeding"],
    CA: [
      "Standard Not Met",
      "Standard Nearly Met",
      "Standard Met",
      "Standard Exceeded",
    ],
    CT: ["Does Not Meet", "Approaching", "Meets", "Exceeds"],
    DE: [
      "Well Below Standard",
      "Below Standard",
      "At Standard",
      "Beyond Standard",
    ],
    GA: [
      "Beginning Learner",
      "Developing Learner",
      "Proficient Learner",
      "Distinguished Learner",
    ],
    HI: [
      "Well-Below Proficient",
      "Approaches Proficient",
      "Meets Proficient",
      "Exceeds Proficient",
    ],
    ID: ["Below Basic", "Basic", "Proficient", "Advanced"],
    IN: [
      "Below Proficiency",
      "Approaching Proficiency",
      "At Proficiency",
      "Above Proficiency",
    ],
    KS: ["Limited", "Basic", "Effective", "Excellent"],
    KY: ["Novice", "Apprentice", "Proficient", "Distinguished"],
    ME: [
      "Well Below Expectations",
      "Below Expectations",
      "At Expectations",
      "Above Expectations",
    ],
    MD: [
      "Beginning Learner",
      "Developing Learner",
      "Proficient Learner",
      "Distinguished Learner",
    ],
    MA: ["Not Meeting", "Partially Meeting", "Meeting", "Exceeding"],
    MI: ["Not Proficient", "Partially Proficient", "Proficient", "Advanced"],
    MN: ["Does Not Meet", "Partially Meets", "Meets", "Exceeds"],
    MO: ["Below Basic", "Basic", "Proficient", "Advanced"],
    MT: ["Novice", "Nearing Proficiency", "Proficient", "Advanced"],
    NV: [
      "Minimal Understanding",
      "Partial Understanding",
      "Proficient",
      "Advanced",
    ],
    NH: [
      "Below Proficient",
      "Approaching Proficient",
      "Proficient",
      "Proficient with Distinction",
    ],
    NM: ["Novice", "Nearing Proficiency", "Proficient", "Advanced"],
    NY: [
      "Well Below Proficient",
      "Partially Proficient",
      "Proficient",
      "Excels",
    ],
    ND: ["Novice", "Partially Proficient", "Proficient", "Advanced"],
    OK: ["Below Basic", "Basic", "Proficient", "Advanced"],
    OR: ["Does Not Yet Meet", "Nearly Meets", "Meets", "Exceeds"],
    PA: ["Below Basic", "Basic", "Proficient", "Advanced"],
    RI: ["Not Meeting", "Partially Meeting", "Meeting", "Exceeding"],
    SC: ["Does Not Meet", "Approaches", "Meets", "Exceeds"],
    SD: ["Level 1", "Level 2", "Proficient", "Advanced"],
    TN: ["Below", "Approaching", "On Track", "Mastered"],
    TX: ["Did Not Meet", "Approaches", "Meets", "Masters"],
    UT: [
      "Below Proficient",
      "Approaching Proficient",
      "Proficient",
      "Highly Proficient",
    ],
    VT: [
      "Below Standard",
      "Approaching Standard",
      "At Standard",
      "Above Standard",
    ],
    WA: ["Level 1", "Level 2", "Level 3", "Level 4"],
    WV: ["Novice", "Developing", "Proficient", "Distinguished"],
    WI: ["Below Basic", "Basic", "Proficient", "Advanced"],
    WY: ["Below Basic", "Basic", "Proficient", "Advanced"],

    // 5-level states
    CO: ["Did Not Yet Meet", "Partially Met", "Approached", "Met", "Exceeded"],
    FL: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
    IL: ["Did Not Yet Meet", "Partially Met", "Approached", "Met", "Exceeded"],
    LA: ["Unsatisfactory", "Approaching Basic", "Basic", "Mastery", "Advanced"],
    MS: ["Minimal", "Basic", "Passing", "Proficient", "Advanced"],
    NJ: ["Did Not Meet", "Partially Met", "Approached", "Met", "Exceeded"],
    NC: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
    OH: ["Limited", "Basic", "Proficient", "Accelerated", "Advanced"],
  };

  const levels =
    statePerformanceLevels[stateCode] || statePerformanceLevels["AL"];

  // Determine performance level based on RIT score ranges
  if (ritScore < ranges.low) {
    prediction = levels[0];
    confidence = "Medium";
    description = `This RIT score typically indicates performance below grade-level expectations for ${stateName}. Additional support may be beneficial.`;
  } else if (ritScore < ranges.mid) {
    prediction = levels[1];
    confidence = "Medium";
    description = `This RIT score suggests approaching grade-level performance for ${stateName}. Student is developing skills but may need additional practice.`;
  } else if (ritScore < ranges.high) {
    // For 3-level states, use index 1 (Proficient), for 4+ level states, use index 2
    const proficientIndex = levels.length === 3 ? 1 : 2;
    prediction = levels[proficientIndex];
    confidence = "High";
    description = `This RIT score indicates solid grade-level performance for ${stateName}. Student demonstrates understanding of key concepts.`;
  } else {
    // Use the highest level
    prediction = levels[levels.length - 1];
    confidence = "High";
    description = `This RIT score suggests above grade-level performance for ${stateName}. Student shows strong mastery of concepts.`;
  }

  return {
    testName,
    prediction,
    confidence,
    description,
  };
};

type StateInfo = {
  code: string;
  name: string;
  testAbbreviation: string;
  testFull: string;
  toScore?: (ritScore: number) => StateTestPrediction;
};

const US_STATES: StateInfo[] = [
  {
    code: "AL",
    name: "Alabama",
    testAbbreviation: "ACAP",
    testFull: "Alabama Comprehensive Assessment Program",
  },
  {
    code: "AK",
    name: "Alaska",
    testAbbreviation: "AK STAR",
    testFull: "Alaska System of Academic Readiness",
  },
  {
    code: "AZ",
    name: "Arizona",
    testAbbreviation: "AASA",
    testFull: "Arizona's Academic Standards Assessment",
  },
  {
    code: "AR",
    name: "Arkansas",
    testAbbreviation: "ATLAS",
    testFull: "ATLAS Summative Assessment",
  },
  {
    code: "CA",
    name: "California",
    testAbbreviation: "CAASPP",
    testFull: "California Assessment of Student Performance and Progress",
  },
  {
    code: "CO",
    name: "Colorado",
    testAbbreviation: "CMAS",
    testFull: "Colorado Measures of Academic Success",
  },
  {
    code: "CT",
    name: "Connecticut",
    testAbbreviation: "SBAC",
    testFull: "Smarter Balanced Assessment Consortium",
  },
  {
    code: "DE",
    name: "Delaware",
    testAbbreviation: "DeSSA",
    testFull: "Delaware System of Student Assessments",
  },
  {
    code: "FL",
    name: "Florida",
    testAbbreviation: "FAST",
    testFull: "Florida Assessment of Student Thinking",
  },
  {
    code: "GA",
    name: "Georgia",
    testAbbreviation: "Milestones",
    testFull: "Georgia Milestones End-of-Grade Assessments",
  },
  {
    code: "HI",
    name: "Hawaii",
    testAbbreviation: "SBA",
    testFull: "Smarter Balanced Assessment",
  },
  {
    code: "ID",
    name: "Idaho",
    testAbbreviation: "ISAT",
    testFull: "Idaho Standards Achievement Test",
  },
  {
    code: "IL",
    name: "Illinois",
    testAbbreviation: "IAR",
    testFull: "Illinois Assessment of Readiness",
  },
  {
    code: "IN",
    name: "Indiana",
    testAbbreviation: "ILEARN",
    testFull: "Indiana Learning Evaluation Assessment Readiness Network",
  },
  {
    code: "IA",
    name: "Iowa",
    testAbbreviation: "ISASP",
    testFull: "Iowa Statewide Assessment of Student Progress",
  },
  {
    code: "KS",
    name: "Kansas",
    testAbbreviation: "KAP",
    testFull: "Kansas Assessment Program",
  },
  {
    code: "KY",
    name: "Kentucky",
    testAbbreviation: "KSA",
    testFull: "Kentucky Summative Assessments",
  },
  {
    code: "LA",
    name: "Louisiana",
    testAbbreviation: "LEAP 2025",
    testFull: "Louisiana Educational Assessment Program",
  },
  {
    code: "ME",
    name: "Maine",
    testAbbreviation: "Through-Year",
    testFull: "Maine Through-Year Assessment",
  },
  {
    code: "MD",
    name: "Maryland",
    testAbbreviation: "MCAP",
    testFull: "Maryland Comprehensive Assessment Program",
  },
  {
    code: "MA",
    name: "Massachusetts",
    testAbbreviation: "MCAS",
    testFull: "Massachusetts Comprehensive Assessment System",
  },
  {
    code: "MI",
    name: "Michigan",
    testAbbreviation: "M-STEP",
    testFull: "Michigan Student Test of Educational Progress",
  },
  {
    code: "MN",
    name: "Minnesota",
    testAbbreviation: "MCA",
    testFull: "Minnesota Comprehensive Assessments",
  },
  {
    code: "MS",
    name: "Mississippi",
    testAbbreviation: "MAAP",
    testFull: "Mississippi Academic Assessment Program",
  },
  {
    code: "MO",
    name: "Missouri",
    testAbbreviation: "MAP",
    testFull: "Missouri Assessment Program",
  },
  {
    code: "MT",
    name: "Montana",
    testAbbreviation: "MontCAS",
    testFull: "Montana Comprehensive Assessment System",
  },
  {
    code: "NE",
    name: "Nebraska",
    testAbbreviation: "NSCAS",
    testFull: "Nebraska Student-Centered Assessment System",
  },
  {
    code: "NV",
    name: "Nevada",
    testAbbreviation: "SBAC",
    testFull: "Smarter Balanced Assessment Consortium",
  },
  {
    code: "NH",
    name: "New Hampshire",
    testAbbreviation: "NHSAS",
    testFull: "New Hampshire Statewide Assessment System",
  },
  {
    code: "NJ",
    name: "New Jersey",
    testAbbreviation: "NJSLA",
    testFull: "New Jersey Student Learning Assessments",
  },
  {
    code: "NM",
    name: "New Mexico",
    testAbbreviation: "NM-MSSA",
    testFull: "New Mexico Measures of Student Success and Achievement",
  },
  {
    code: "NY",
    name: "New York",
    testAbbreviation: "NYS Tests",
    testFull: "New York State Assessments",
  },
  {
    code: "NC",
    name: "North Carolina",
    testAbbreviation: "EOG",
    testFull: "End-of-Grade Tests",
  },
  {
    code: "ND",
    name: "North Dakota",
    testAbbreviation: "NDSA",
    testFull: "North Dakota State Assessment",
  },
  {
    code: "OH",
    name: "Ohio",
    testAbbreviation: "OST",
    testFull: "Ohio State Tests",
  },
  {
    code: "OK",
    name: "Oklahoma",
    testAbbreviation: "OSTP",
    testFull: "Oklahoma School Testing Program",
  },
  {
    code: "OR",
    name: "Oregon",
    testAbbreviation: "OSAS",
    testFull: "Oregon Statewide Assessment System",
  },
  {
    code: "PA",
    name: "Pennsylvania",
    testAbbreviation: "PSSA",
    testFull: "Pennsylvania System of School Assessment",
  },
  {
    code: "RI",
    name: "Rhode Island",
    testAbbreviation: "RICAS",
    testFull: "Rhode Island Comprehensive Assessment System",
  },
  {
    code: "SC",
    name: "South Carolina",
    testAbbreviation: "SC READY",
    testFull: "South Carolina College- and Career-Ready Assessment",
  },
  {
    code: "SD",
    name: "South Dakota",
    testAbbreviation: "SBAC",
    testFull: "Smarter Balanced Assessment Consortium",
  },
  {
    code: "TN",
    name: "Tennessee",
    testAbbreviation: "TNReady",
    testFull: "Tennessee Comprehensive Assessment Program",
  },
  {
    code: "TX",
    name: "Texas",
    testAbbreviation: "STAAR",
    testFull: "State of Texas Assessments of Academic Readiness",
  },
  {
    code: "UT",
    name: "Utah",
    testAbbreviation: "RISE",
    testFull: "Readiness Improvement Success Empowerment",
  },
  {
    code: "VT",
    name: "Vermont",
    testAbbreviation: "VTCAP",
    testFull: "Vermont Common Assessment Program",
  },
  {
    code: "VA",
    name: "Virginia",
    testAbbreviation: "SOL",
    testFull: "Standards of Learning Assessments",
  },
  {
    code: "WA",
    name: "Washington",
    testAbbreviation: "SBAC",
    testFull: "Smarter Balanced Assessment Consortium",
  },
  {
    code: "WV",
    name: "West Virginia",
    testAbbreviation: "WVGSA",
    testFull: "West Virginia General Summative Assessment",
  },
  {
    code: "WI",
    name: "Wisconsin",
    testAbbreviation: "Forward",
    testFull: "Wisconsin Forward Exam",
  },
  {
    code: "WY",
    name: "Wyoming",
    testAbbreviation: "WY-TOPP",
    testFull: "Wyoming Test of Proficiency and Progress",
  },
];

export function ScoreConverter({ className }: ScoreConverterProps) {
  const [currentStep, setCurrentStep] = useState<ConverterStep>("welcome");
  const [ritScore, setRitScore] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const convertScore = () => {
    if (!ritScore || !grade || !subject || !selectedState) return;

    const score = parseInt(ritScore);
    const gradeNum = parseInt(grade);
    const stateInfo = US_STATES.find((s) => s.code === selectedState);
    if (!stateInfo) return;

    // Track conversion attempt
    posthog.capture("score_converter_used", {
      rit_score: score,
      grade: gradeNum,
      subject: subject,
      selected_state: selectedState,
      state_test: stateInfo?.testAbbreviation,
      page_path: window.location.pathname,
      blog_post_id: window.location.pathname.split("/").pop(),
    });
    setCurrentStep("results");
  };

  const reset = () => {
    setRitScore("");
    setGrade("");
    setSubject("");
    setSelectedState("");
    setCurrentStep("welcome");
  };

  const goToInput = () => {
    setCurrentStep("input");
  };

  const goToState = () => {
    setCurrentStep("state");
  };

  const goBack = () => {
    if (currentStep === "input") {
      setCurrentStep("welcome");
    } else if (currentStep === "state") {
      setCurrentStep("input");
    } else if (currentStep === "results") {
      setCurrentStep("state");
    }
  };

  const stateInfo = US_STATES.find((s) => s.code === selectedState);
  const prediction = stateInfo?.toScore
    ? stateInfo.toScore(parseInt(ritScore))
    : getStateSpecificPrediction(
        parseInt(ritScore),
        parseInt(grade),
        subject,
        selectedState,
        stateInfo?.testFull || "",
        stateInfo?.name || ""
      );

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden min-h-[500px] text-white relative p-6 flex flex-col justify-between",
        className
      )}
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1750779941037-b3cbfde22acb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#00000080] z-0" />

      <AnimatePresence mode="wait">
        {currentStep === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 z-10 grow justify-between"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-bold">MAP Score Converter</h3>
              <p className="text-lg text-gray-50 font-light">
                Get predictions for how your student might perform on state
                assessments based on their MAP RIT scores.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={goToInput}
                className="px-6 py-3 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === "input" && (
          <motion.div
            key="input"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 z-10 grow justify-between items-center"
          >
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-3xl font-bold">Enter Student Information</h3>
              <p className="text-gray-50 font-light">
                Fill in your student's MAP RIT score, grade level, and subject
                to get predictions.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-stretch">
              <div className="flex-1">
                <label className="block text-sm mb-1">RIT Score</label>
                <input
                  type="number"
                  value={ritScore}
                  onChange={(e) => setRitScore(e.target.value)}
                  placeholder="e.g., 185"
                  className={cn(
                    "w-full px-3 py-2 border text-white placeholder:text-gray-500 rounded-md",
                    "backdrop-blur-sm bg-[#ffffff20] border-[#ffffff20]"
                  )}
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm mb-1">Grade Level</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className={cn(
                    "w-full px-3 py-2 border rounded-md border-[#ffffff20]",
                    "backdrop-blur-sm bg-[#ffffff20]",
                    grade === "" ? "text-gray-500" : "text-white"
                  )}
                >
                  <option value="">Select Grade</option>
                  <option value="3">3rd Grade</option>
                  <option value="4">4th Grade</option>
                  <option value="5">5th Grade</option>
                  <option value="6">6th Grade</option>
                  <option value="7">7th Grade</option>
                  <option value="8">8th Grade</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm mb-1">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={cn(
                    "w-full px-3 backdrop-blur-sm py-2 border",
                    "rounded-md border-[#ffffff20] bg-[#ffffff20]",
                    subject === "" ? "text-gray-200" : "text-white"
                  )}
                >
                  <option value="">Select Subject</option>
                  <option value="math">Math</option>
                  <option value="reading">Reading</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-end w-full">
              <button
                onClick={goBack}
                className="text-white flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={goToState}
                className="text-white flex items-center gap-2 hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={!ritScore || !grade || !subject}
              >
                Next
                {ritScore && grade && subject ? (
                  <ArrowRight className="w-4 h-4" />
                ) : (
                  <Ban className="w-4 h-4 opacity-50" />
                )}
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === "state" && (
          <motion.div
            key="state"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 z-10 grow justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                <h3 className="text-3xl font-bold">Select Your State</h3>
              </div>
              <p className="text-gray-50 font-light">
                Choose your state to get more accurate predictions based on your
                specific state test.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto max-h-80 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Search for a state"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-full px-3 py-2 rounded-md bg-[#ffffff10] border border-[#ffffff20]",
                  "text-white placeholder-gray-300 focus:outline-none focus:border-[#ffffff80]"
                )}
              />
              <div className="grow overflow-y-auto min-h-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {US_STATES.filter((state) =>
                    state.name.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((state) => (
                    <button
                      key={state.code}
                      onClick={() => setSelectedState(state.code)}
                      className={cn(
                        "p-3 rounded-md text-left transition-colors",
                        "backdrop-blur-sm border border-[#ffffff20] h-fit",
                        selectedState === state.code
                          ? "bg-[#ffffff60] border-[#ffffff80]"
                          : "bg-[#ffffff20] hover:bg-[#ffffff30]"
                      )}
                    >
                      <div className="font-medium">{state.name}</div>
                      <div className="text-sm text-gray-300">
                        {state.testAbbreviation}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <button
                onClick={goBack}
                className="text-white flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={convertScore}
                className="text-white flex items-center gap-2 hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={!selectedState}
              >
                Convert
                {selectedState ? (
                  <ArrowRight className="w-4 h-4" />
                ) : (
                  <Ban className="w-4 h-4 opacity-50" />
                )}
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === "results" && prediction && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 z-10 grow justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                <h4 className="font-semibold text-green-100 mb-2">
                  Predictions for RIT Score {ritScore} - Grade {grade}{" "}
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </h4>
                <p className="text-green-200 text-sm">
                  {US_STATES.find((s) => s.code === selectedState)?.name}{" "}
                  predictions
                </p>
              </div>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-semibold text-white">
                        {prediction.testName}
                      </h5>
                      <p className="text-sm text-gray-200">
                        {US_STATES.find((s) => s.code === selectedState)?.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-blue-200">
                        {prediction.prediction}
                      </p>
                      <p className="text-sm text-gray-300">
                        {prediction.confidence} Confidence
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200">
                    {prediction.description}
                  </p>
                </motion.div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-400 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-300 mr-2" />
                  <div>
                    <p className="text-yellow-100 text-sm font-medium">
                      Important Note
                    </p>
                    <p className="text-yellow-200 text-sm">
                      These predictions are estimates based on general
                      correlations. Actual state test performance depends on
                      many factors including test preparation, test format, and
                      student readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={goBack}
                className="text-white flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={reset}
                className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              >
                Start Over
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
