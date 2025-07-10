import React from 'react';

interface RoadmapItem {
  period: string;
  grade6?: string;
  grade7?: string;
  grade8?: string;
  [key: string]: string | undefined;
}

interface CurriculumRoadmapProps {
  title?: string;
  items: RoadmapItem[];
  gradeLabels?: string[];
  className?: string;
}

export const CurriculumRoadmap: React.FC<CurriculumRoadmapProps> = ({
  title,
  items,
  gradeLabels = ["Grade 6", "Grade 7", "Grade 8"],
  className = "",
}) => {
  const gradeKeys = ["grade6", "grade7", "grade8"];

  return (
    <div className={className}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      )}

      <div className="border  rounded-lg bg-white overflow-x-auto mb-6">
        <div className="flex min-w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-1 text-center flex flex-col ${
                index < items.length - 1 ? "border-r  " : ""
              }`}
            >
              <h3 className="text-white w-full border-b bg-gray-800  p-2">
                {item.period}
              </h3>
              <div className="flex flex-col gap-2 p-4">
                {gradeLabels.map((label, gradeIndex) => {
                  const gradeKey = gradeKeys[gradeIndex];
                  const content = item[gradeKey];

                  return content ? (
                    <p key={gradeIndex} className="text-left">
                      <strong className="font-bold">{label}:</strong> {content}
                    </p>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
