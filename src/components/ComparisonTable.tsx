import React from 'react';

interface ComparisonTableProps {
  title?: string;
  columns: {
    header: string;
    key: string;
    className?: string;
  }[];
  data: Record<string, any>[];
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title,
  columns,
  data,
  className = "",
}) => {
  return (
    <div
      className={`overflow-x-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg ${className}`}
    >
      {title && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`border border-gray-300 px-4 py-3 ${
                  column.className || "text-left"
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50`}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-gray-300 px-4 py-3 ${
                    column.className || ""
                  }`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
