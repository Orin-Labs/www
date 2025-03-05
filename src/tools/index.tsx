import { useCallback } from "react";

import { motion } from "framer-motion";
import {
  ChartPie,
  Check,
  Copy,
  LineChart,
  LucideIcon,
  Notebook,
  PenLine,
  TableIcon,
} from "lucide-react";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import { Badge, cn, Table } from "slate-ui";

import { CopyLink } from "./CopyLink";
import { Graph } from "./Graph";
import { MultipleChoice } from "./MultipleChoice";
import { PlotSectionComponent } from "./Plot";
import { ShortAnswer } from "./ShortAnswer";
import { CanvasSection } from "./tools";

const SECTION_TYPE_META: Record<
  CanvasSection["type"],
  {
    icon: LucideIcon;
    title: string;
  }
> = {
  note: { icon: Notebook, title: "Note" },
  multiple_choice: { icon: Check, title: "Multiple Choice" },
  short_answer: { icon: PenLine, title: "Short Answer" },
  graph: { icon: LineChart, title: "Graph" },
  plot: { icon: ChartPie, title: "Plot" },
  table: { icon: TableIcon, title: "Table" },
  copy_link: { icon: Copy, title: "Copy Link" },
};

export interface CanvasSectionComponentProps {
  section: CanvasSection;
  sendMessageToVapi: (message: any) => void;
  updateSection: (section: CanvasSection) => void;
}

export function CanvasSectionComponent({
  section,
  sendMessageToVapi,
  updateSection,
}: CanvasSectionComponentProps) {
  const renderSection = useCallback(
    (section: CanvasSection) => {
      switch (section.type) {
        case "note":
          return (
            <Markdown
              className="markdown text-muted"
              remarkPlugins={[remarkMath, remarkBreaks]}
              rehypePlugins={[rehypeKatex]}
            >
              {section.content.replace(/\\n/g, "\n").replace(/\\\\$/g, "\\$")}
            </Markdown>
          );
        case "multiple_choice":
          return (
            <MultipleChoice
              question={section}
              title={section.title}
              onAnswer={(answer) => {
                updateSection({
                  ...section,
                  answered: answer,
                });
                sendMessageToVapi({
                  role: "system",
                  content: `For question: ${section.title}, user submitted answer: ${answer}`,
                });
              }}
            />
          );
        case "short_answer":
          return (
            <ShortAnswer
              question={section}
              onAnswer={(answer) => {
                updateSection({
                  ...section,
                  answered: answer,
                });
                sendMessageToVapi({
                  role: "system",
                  content: `For question: ${section.title}, user submitted answer: ${answer}`,
                });
              }}
              clearAnswer={() => {
                updateSection({
                  ...section,
                  answered: null,
                });
              }}
            />
          );
        case "table": {
          const zipped = section.data.map((row: any) =>
            Object.fromEntries(
              section.columns
                .map((column: any, j: number) => [column, row[j]])
                .filter(([column, value]) => column && value)
            )
          );
          return (
            <Table
              rows={zipped}
              columns={section.columns.map((c: any) => ({
                id: c,
                value: c,
                cell: ({ row }: { row: any }) => (
                  <span className="text-sm" key={row[c]}>
                    {row[c]}
                  </span>
                ),
              }))}
              paginate
              pageSize={10}
              showPagination={zipped.length > 10}
              emptyState={{
                icon: TableIcon,
                title: "No data to display.",
              }}
              className={cn(
                "border rounded-lg overflow-hidden",
                zipped.length <= 10 ? "border-b-0" : "pb-4"
              )}
            />
          );
        }
        case "graph":
          return (
            <Graph
              latexEquations={section.latex_equations}
              xMin={section.x_min ?? -10}
              xMax={section.x_max ?? 10}
              yMin={section.y_min ?? -10}
              yMax={section.y_max ?? 10}
              explainerText={section.explainer_text}
              colors={section.colors}
            />
          );
        case "plot":
          return <PlotSectionComponent section={section} />;
        case "copy_link":
          return <CopyLink url={section.url} />;
      }
    },
    [updateSection, sendMessageToVapi]
  );

  return (
    <motion.div
      initial={{ opacity: 0.5, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={cn(
        "p-4 flex bg-white border rounded-lg flex-col gap-2 z-10 transition-colors max-w-[700px]"
      )}
      key={section.id}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Badge
            iconLeft={SECTION_TYPE_META[section.type].icon}
            variant="secondary"
          >
            {SECTION_TYPE_META[section.type].title}
          </Badge>
          <p className="font-normal text-lg">{section.title}</p>
        </div>
      </div>

      {renderSection(section)}
    </motion.div>
  );
}
