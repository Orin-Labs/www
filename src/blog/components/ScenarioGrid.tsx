import React from 'react';

interface ScenarioItem {
  title: string;
  description?: string;
  details: string[];
  color: "green" | "red" | "blue" | "yellow" | "purple" | "gray";
}

interface ScenarioGridProps {
  title?: string;
  scenarios: ScenarioItem[];
  className?: string;
}

export const ScenarioGrid: React.FC<ScenarioGridProps> = ({
  title,
  scenarios,
  className = "",
}) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "border-green-200 text-green-800",
      red: "border-red-200 text-red-800",
      blue: "border-blue-200 text-blue-800",
      yellow: "border-yellow-200 text-yellow-800",
      purple: "border-purple-200 text-purple-800",
      gray: " text-gray-800",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  return (
    <div className={className}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      )}
      <div className={`grid md:grid-cols-${scenarios.length} gap-6`}>
        {scenarios.map((scenario, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md border ${getColorClasses(
              scenario.color
            )}`}
          >
            <h3 className="font-bold mb-2">{scenario.title}</h3>
            {scenario.description && (
              <p className="text-sm mb-3 opacity-90 text-gray-800">
                {scenario.description}
              </p>
            )}
            <ul className="text-sm space-y-1 text-gray-800">
              {scenario.details.map((detail, detailIndex) => (
                <li key={detailIndex}>• {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
