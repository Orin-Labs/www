import { ExactReplacement, RegexReplacement } from "@vapi-ai/web/dist/api";

const DIGIT_OR_VARIABLE = "[0-9a-zA-Z]";

export const REPLACEMENTS: (ExactReplacement | RegexReplacement)[] = [
  // Basic operations like addition, subtraction, multiplication, division
  {
    type: "regex",
    regex: `(${DIGIT_OR_VARIABLE}+)\\s*\\+\\s*(${DIGIT_OR_VARIABLE}+)`,
    value: "$1 plus $2",
  },
  {
    type: "regex",
    regex: `(${DIGIT_OR_VARIABLE}+)\\s*−\\s*(${DIGIT_OR_VARIABLE}+)`,
    value: "$1 minus $2",
  },
  {
    type: "regex",
    regex: `(${DIGIT_OR_VARIABLE}+)\\s*[\\*×]\\s*(${DIGIT_OR_VARIABLE}+)`,
    value: "$1 times $2",
  },
  {
    type: "regex",
    regex: `(${DIGIT_OR_VARIABLE}+)\\s*\\/\\s*(${DIGIT_OR_VARIABLE}+)`,
    value: "$1 divided by $2",
  },
  {
    type: "regex",
    regex: `(${DIGIT_OR_VARIABLE}+)\\s*\\^\\s*(${DIGIT_OR_VARIABLE}+)`,
    value: "$1 to the power of $2",
  },
  {
    type: "regex",
    regex: `(${DIGIT_OR_VARIABLE}+)\\s*(\\p{No})`,
    value: "$1 to the power of $2",
  },
  {
    type: "regex",
    regex: `[-−](${DIGIT_OR_VARIABLE}+)`,
    value: "negative $1",
  },

  // Equality and inequality
  {
    type: "regex",
    regex: `\\s*=\\s*`,
    value: " equals ",
  },
  {
    type: "exact",
    key: "<",
    value: " is less than ",
  },
  {
    type: "exact",
    key: ">",
    value: " is greater than ",
  },
  {
    type: "exact",
    key: "<=",
    value: " is less than or equal to ",
  },
  {
    type: "exact",
    key: ">=",
    value: " is greater than or equal to ",
  },

  // Symbols
  {
    type: "exact",
    key: "π",
    value: "pie",
  },
  {
    type: "exact",
    key: "∑",
    value: "sum",
  },
  {
    type: "exact",
    key: "#",
    value: "number",
  },
];
