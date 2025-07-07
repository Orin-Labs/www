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
      green: "bg-green-50 border-green-200 text-green-800",
      red: "bg-red-50 border-red-200 text-red-800",
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      gray: "bg-gray-50 border-gray-200 text-gray-800",
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
            <h4 className="font-bold mb-2">{scenario.title}</h4>
            {scenario.description && (
              <p className="text-sm mb-3 opacity-90">{scenario.description}</p>
            )}
            <ul className="text-sm space-y-1">
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
