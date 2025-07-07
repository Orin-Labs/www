import React from 'react';

interface GPAScaleItem {
  grade: string;
  gpa: string;
  details: string[];
  color: string;
}

interface GPAScaleProps {
  title?: string;
  items?: GPAScaleItem[];
  className?: string;
}

const defaultGPAScale: GPAScaleItem[] = [
  {
    grade: "A",
    gpa: "4.0",
    details: ["A+ = 4.0", "A- = 3.7"],
    color: "green",
  },
  {
    grade: "B",
    gpa: "3.0",
    details: ["B+ = 3.3", "B- = 2.7"],
    color: "blue",
  },
  {
    grade: "C",
    gpa: "2.0",
    details: ["C+ = 2.3", "C- = 1.7"],
    color: "yellow",
  },
  {
    grade: "D",
    gpa: "1.0",
    details: ["D+ = 1.3", "D- = 0.7"],
    color: "orange",
  },
  {
    grade: "F",
    gpa: "0.0",
    details: ["Failing", "Must repeat"],
    color: "red",
  },
  {
    grade: "P",
    gpa: "0.0",
    details: ["Passing", "Some schools allow pass/fail"],
    color: "gray",
  },
];

export const GPAScale: React.FC<GPAScaleProps> = ({
  title = "GPA Scale",
  items = defaultGPAScale,
  className = "",
}) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 border-green-200 text-green-700",
      blue: "bg-blue-100 border-blue-200 text-blue-700",
      yellow: "bg-yellow-100 border-yellow-200 text-yellow-700",
      orange: "bg-orange-100 border-orange-200 text-orange-700",
      red: "bg-red-100 border-red-200 text-red-700",
      gray: "bg-gray-100 border-gray-200 text-gray-700",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <div className={`mb-6 ${className}`}>
      <h5 className="text-xl mb-4 font-semibold text-gray-800">{title}</h5>
      <div className="grid grid-cols-3 gap-4 text-center mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md border ${getColorClasses(
              item.color
            )}`}
          >
            <div className="text-3xl font-bold mb-1">{item.grade}</div>
            <div className="text-lg font-semibold mb-2">{item.gpa}</div>
            {item.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="text-sm text-gray-600">
                {detail}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
