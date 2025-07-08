import React, { useState } from 'react';

import { Button } from '@/Button';

interface SortableTableColumn {
  header: string;
  key: string;
  className?: string;
}

interface SortableTableProps {
  title?: string;
  columns: SortableTableColumn[];
  data: string[][];
  sortButtons?: string[];
  className?: string;
}

export const SortableTable: React.FC<SortableTableProps> = ({
  title,
  columns,
  data: initialData,
  sortButtons = [],
  className = "",
}) => {
  const [data, setData] = useState(initialData);
  const [activeSort, setActiveSort] = useState(0);

  const sortTable = (columnIndex: number) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[columnIndex] < b[columnIndex]) return -1;
      if (a[columnIndex] > b[columnIndex]) return 1;
      return 0;
    });
    setData(sortedData);
    setActiveSort(columnIndex);
  };

  return (
    <div className={className}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      )}

      {sortButtons.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {sortButtons.map((label, index) => (
            <Button
              key={index}
              shadow="neu"
              bg={activeSort !== index ? "white" : "gray"}
              className={`${
                activeSort !== index
                  ? "text-gray-900 border-gray-300 border"
                  : "text-white"
              } grow`}
              onClick={() => sortTable(index)}
            >
              {label}
            </Button>
          ))}
        </div>
      )}

      <div className="overflow-x-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
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
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border border-gray-300 px-4 py-3 ${
                      columns[cellIndex]?.className || ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
