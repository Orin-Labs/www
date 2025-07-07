import React from 'react';

interface ProsConsItem {
  title: string;
  items: string[];
}

interface ProsConsGridProps {
  title?: string;
  pros: ProsConsItem;
  cons: ProsConsItem;
  className?: string;
}

export const ProsConsGrid: React.FC<ProsConsGridProps> = ({
  title,
  pros,
  cons,
  className = "",
}) => {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pros */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-green-800">
            ✅ {pros.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {pros.items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-200 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-red-800">
            ❌ {cons.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {cons.items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
