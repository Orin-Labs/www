import React from 'react';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { PlotSection } from './tools';

const COLORS = [
  "var(--primary-500)",
  "var(--secondary-400)",
  "var(--error-500)",
  "var(--success-500)",
  "var(--warning-500)",
  "var(--info-500)",
  "var(--primary-500)",
  "var(--error-400)",
  "var(--success-400)",
  "var(--warning-400)",
  "var(--info-400)",
  "var(--primary-400)",
  "var(--error-600)",
  "var(--success-600)",
  "var(--warning-600)",
  "var(--info-600)",
  "var(--primary-600)",
  "var(--error-300)",
  "var(--success-300)",
  "var(--warning-300)",
  "var(--info-300)",
  "var(--primary-300)",
];

export function PlotSectionComponent({ section }: { section: PlotSection }) {
  const data = JSON.parse(section.data);

  function renderChart(): JSX.Element {
    switch (section.chartType) {
      case "LineChart":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {section.xAxisKey && <XAxis dataKey={section.xAxisKey} />}
            <YAxis />
            {section.tooltip && <Tooltip />}
            {section.legend && <Legend />}
            {section.series.map((s, idx) => (
              <Line
                key={idx}
                type="monotone"
                // @ts-expect-error: Sometimes the model outputs dataKey as data_key??
                dataKey={s.dataKey || s.data_key}
                stroke={s.stroke || "#8884d8"}
              />
            ))}
          </LineChart>
        );
      case "BarChart":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {section.xAxisKey && <XAxis dataKey={section.xAxisKey} />}
            <YAxis />
            {section.tooltip && <Tooltip />}
            {section.legend && <Legend />}
            {section.series.map((s, idx) => (
              <Bar
                isAnimationActive={false}
                key={idx}
                // @ts-expect-error: Sometimes the model outputs dataKey as data_key??
                dataKey={s.dataKey || s.data_key}
                fill={s.fill || "#8884d8"}
              />
            ))}
          </BarChart>
        );
      case "AreaChart":
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {section.xAxisKey && <XAxis dataKey={section.xAxisKey} />}
            <YAxis />
            {section.tooltip && <Tooltip />}
            {section.legend && <Legend />}
            {section.series.map((s, idx) => (
              <Area
                key={idx}
                type="monotone"
                // @ts-expect-error: Sometimes the model outputs dataKey as data_key??
                dataKey={s.dataKey || s.data_key}
                stroke={s.stroke || "#8884d8"}
                fill={s.fill || "#8884d8"}
              />
            ))}
          </AreaChart>
        );
      case "PieChart":
        return (
          <PieChart>
            {section.tooltip && <Tooltip />}
            {section.legend && <Legend />}
            <Pie
              data={data}
              dataKey={
                // @ts-expect-error: Sometimes the model outputs dataKey as data_key??
                section.series[0]?.dataKey || section.series[0]?.data_key || ""
              }
              nameKey={section.xAxisKey}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill={section.series[0]?.fill || "#8884d8"}
            >
              {" "}
              {data.map((_: unknown, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        );
      default:
        return <></>;
    }
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <p>{section.explainerText}</p>
      <ResponsiveContainer
        className="bg-muted rounded-lg border aspect-video pt-8 pr-8"
        width="100%"
      >
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
}
