import React from 'react';

import {
  cn,
  parseLinksInText,
} from '@/utils';

type ComparisonTableData = Record<string, any>[];

interface ComparisonTableProps {
  columns: {
    header: string;
    key: string;
    className?: string;
  }[];
  data: ComparisonTableData;
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  columns,
  data,
  className = "",
}) => {
  return (
    <div className={className}>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-900 text-white">
            {columns.map((column, index) => (
              <th
                key={index}
                className={cn(
                  "border-r border-gray-700 px-4 py-3 font-normal",
                  column.className || "text-left",
                  index === columns.length - 1 && "border-r-0"
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={cn(
                    "border-b border-r  px-4 py-3",
                    column.className || "",
                    index === 0 && "border-t",
                    colIndex === 0 && "border-l",
                    index === data.length - 1 &&
                      colIndex === 0 &&
                      "rounded-bl-lg",
                    index === data.length - 1 &&
                      colIndex === columns.length - 1 &&
                      "rounded-br-lg"
                  )}
                >
                  {parseLinksInText(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
