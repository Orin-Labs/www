import type { AnyZodObject } from 'zod';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

import {
  CreateFunctionToolDTO,
  ToolMessageComplete,
  ToolMessageDelayed,
  ToolMessageFailed,
  ToolMessageStart,
} from '@vapi-ai/web/dist/api';

const BaseSection = z.object({
  id: z.string(),
  title: z.string(),
});

const NoteSection = BaseSection.extend({
  type: z.literal("note"),
  content: z
    .string()
    .describe(
      "The content of the note. This will be rendered in Markdown. Use $$...$$ (MUST USE DOUBLE DOLLARS) for LaTeX equations."
    ),
});

const GraphSection = BaseSection.extend({
  type: z.literal("graph"),
  latex_equations: z.array(z.string()).describe(`
      The LaTeX equations to plot. The equations will be plotted in the order they are given.
  
      x and y are the only variables you can use without defining.
  
      If you're making multiple equations, remember that they will overlap each other. For some
      cases this is fine, but in other cases you may want to make sure they don't overlap.

      This tool can only do 2D graphs, not 3D graphs.
  
      Examples (don't output comments in yours):
      - y = sin(x)
      - (1, 2) // Defines a point
      - a = 5 // Defines a as a variable that can be used in other equations
      - y = a * x // Uses the variable a
      - (5t, 10t) // Defines a vector (5, 10)
    `),
  colors: z
    .array(z.string())
    .describe(
      "The colors to use for the graph. Must be a list of valid CSS colors in order of the equations."
    ),
  explainer_text: z
    .string()
    .describe(
      "The text that will be displayed to the user to explain the graph. Can use Markdown and LaTex."
    ),
  x_min: z
    .number()
    .default(-10)
    .describe("The initial left bound of the graph. Defaults to -10."),
  x_max: z
    .number()
    .default(10)
    .describe("The initial right bound of the graph. Defaults to 10."),
  y_min: z
    .number()
    .default(-10)
    .describe("The initial bottom bound of the graph. Defaults to -10."),
  y_max: z
    .number()
    .default(10)
    .describe("The initial top bound of the graph. Defaults to 10."),
});

const MultipleChoiceSection = BaseSection.extend({
  type: z.literal("multiple_choice"),
  question: z.string(),
  options: z.array(z.string()),
  answer: z
    .string()
    .describe(
      "The correct answer to the question. Must be an exact match to one of the options."
    ),
  answered: z
    .string()
    .nullable()
    .describe(
      "The user's answer to the question. If the user has not answered the question, this should be None."
    ),
});

const ShortAnswerSection = BaseSection.extend({
  type: z.literal("short_answer"),
  question: z.string(),
  answer: z
    .string()
    .describe(
      "The correct answer to the question. Doesn't have to be an exact match to the user's answer."
    ),
  answered: z
    .string()
    .nullable()
    .describe(
      "The user's answer to the question. If the user has not answered the question, this should be None."
    ),
});

const PlotSection = BaseSection.extend({
  type: z.literal("plot"),
  explainerText: z
    .string()
    .describe(
      "The text that will be displayed to the user to explain the plot."
    ),
  chartType: z
    .enum(["LineChart", "BarChart", "AreaChart", "PieChart"])
    .describe(
      "The type of chart to display. Must be one of the following: LineChart, BarChart, AreaChart, PieChart. This is different from the `type` field, which is the type of section you're creating."
    ),
  xAxisKey: z.string().describe("The key to use for labelling the x-axis."),
  data: z
    .string()
    // For some reason the model won't output an array type, so we need to parse it as a string.
    .describe(
      "The points to plot. Must be a valid JSON string in recharts format"
    ),
  series: z.array(
    z
      .object({
        dataKey: z.string(),
        stroke: z.string().optional(),
        fill: z.string().optional(),
      })
      .strict()
  ),
  tooltip: z
    .boolean()
    .optional()
    .default(true)
    .describe(
      "Whether to show a tooltip for the plot. Use this unless there is a clear reason not to."
    ),
  legend: z
    .boolean()
    .optional()
    .default(true)
    .describe(
      "Whether to show a legend for the plot. Use this unless there is a clear reason not to."
    ),
});

const TableSection = BaseSection.extend({
  type: z.literal("table"),
  data: z
    .array(z.array(z.string()))
    .describe("The data to display in the table."),
  columns: z
    .array(z.string())
    .describe(
      "The columns of the table. Must be a list of valid column names."
    ),
});

const CopyLinkSection = BaseSection.extend({
  type: z.literal("copy_link"),
  url: z
    .string()
    .describe("The url to show on the screen. The user can copy it from here."),
});

const CANVAS_SECTION_TYPES = [
  NoteSection,
  GraphSection,
  MultipleChoiceSection,
  ShortAnswerSection,
  PlotSection,
  TableSection,
  CopyLinkSection,
] as const;

export const VALID_CANVAS_SECTION_TYPES = CANVAS_SECTION_TYPES.map(
  (type) => type.shape.type.value
);

const process = (input: AnyZodObject) => {
  const schema = zodToJsonSchema(input);
  delete schema.$schema;

  // Recursively change any const properties to strings.
  // @ts-expect-error: Untyped
  const processProperty = (property) => {
    if (property.const) {
      property.description = `Must ONLY be '${property.const}'`;
      delete property.const;
    }
    if (property.properties) {
      for (const subProperty of Object.values(property.properties)) {
        processProperty(subProperty);
      }
    }
  };
  processProperty(schema);

  return schema as Required<CreateFunctionToolDTO>["function"]["parameters"];
};

const NO_MESSAGES: (
  | ToolMessageStart
  | ToolMessageComplete
  | ToolMessageFailed
  | ToolMessageDelayed
)[] = [
  {
    type: "request-start",
    content: "",
  },
  {
    type: "request-response-delayed",
    content: "",
  },
];

export const ORIN_TOOLS: CreateFunctionToolDTO[] = [
  ...CANVAS_SECTION_TYPES.map(
    (type) =>
      ({
        type: "function",
        function: {
          name: `new_${type.shape.type.value}_section`,
          strict: true,
          parameters: process(type),
        },
        messages: NO_MESSAGES,
        server: {
          url: "https://api.learnwithorin.com/api/lessons/tool-pong",
        },
      } satisfies CreateFunctionToolDTO)
  ),
  {
    type: "function",
    function: {
      name: "redirect-to-url",
      strict: true,
      parameters: {
        type: "object",
        properties: {
          url: {
            type: "string",
            description: "The URL to redirect to.",
          },
        },
      },
      description:
        "Redirects the user to a URL. Make sure to confirm with the user that you're going to do this before you do it.",
    },
    messages: NO_MESSAGES,
  },
];

export type NoteSection = z.infer<typeof NoteSection>;
export type GraphSection = z.infer<typeof GraphSection>;
export type MultipleChoiceSection = z.infer<typeof MultipleChoiceSection>;
export type ShortAnswerSection = z.infer<typeof ShortAnswerSection>;
export type PlotSection = z.infer<typeof PlotSection>;
export type TableSection = z.infer<typeof TableSection>;
export type CopyLinkSection = z.infer<typeof CopyLinkSection>;
export type ToolCallWithArgs = {
  id: string;
  type: "function";
  function:
    | { name: "new_note_section"; arguments: NoteSection }
    | { name: "new_graph_section"; arguments: GraphSection }
    | { name: "new_multiple_choice_section"; arguments: MultipleChoiceSection }
    | { name: "new_plot_section"; arguments: PlotSection }
    | { name: "new_short_answer_section"; arguments: ShortAnswerSection }
    | { name: "new_table_section"; arguments: TableSection }
    | { name: "redirect-to-url"; arguments: { url: string } }
    | { name: "new_copy_link_section"; arguments: CopyLinkSection };
};

export type CanvasSection =
  | NoteSection
  | GraphSection
  | MultipleChoiceSection
  | ShortAnswerSection
  | PlotSection
  | TableSection
  | CopyLinkSection;
