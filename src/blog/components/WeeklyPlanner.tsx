import React from 'react';

import { Clock } from 'lucide-react';

import {
  cn,
  parseLinksInText,
} from '@/utils';

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface WeeklyPlannerItem {
  day: DayOfWeek;
  time: string;
  task: string;
}

interface WeeklyPlannerProps {
  title: string;
  items: WeeklyPlannerItem[];
}

export const WeeklyPlanner: React.FC<WeeklyPlannerProps> = ({
  title,
  items,
}) => {
  const itemsByDay = items.reduce((acc, item) => {
    const day = item.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);
    return acc;
  }, {} as Record<DayOfWeek, WeeklyPlannerItem[]>);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold mb-3">{title}</h3>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full">
          <thead className="text-left text-white">
            <tr>
              <th className="py-3 px-4 bg-gray-800 rounded-l-lg font-light">
                Day
              </th>
              <th className="py-3 px-4 bg-gray-800 font-light">Time</th>
              <th className="py-3 px-4 bg-gray-800 rounded-r-lg font-light">
                Task
              </th>
            </tr>
          </thead>

          <tbody>
            {(
              [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ] as DayOfWeek[]
            ).map((day, idx) => {
              const dayTasks = itemsByDay[day] || [];
              const sharedClasses =
                "py-4 px-4 group-hover:bg-gray-50 transition-colors duration-150";
              return (
                <tr key={day} className="transition-colors duration-300 group">
                  <td className={cn(sharedClasses, "rounded-l-lg")}>{day}</td>
                  <td className={sharedClasses}>
                    {dayTasks.length > 0 ? (
                      <div className="space-y-2">
                        {dayTasks.map((item, i) => (
                          <div
                            key={i}
                            className={cn(
                              "bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1 border-blue-200 border whitespace-nowrap",
                              "rounded-lg flex items-center gap-2 w-fit"
                            )}
                          >
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">—</span>
                    )}
                  </td>
                  <td className={cn(sharedClasses, "rounded-r-lg")}>
                    {dayTasks.length > 0 ? (
                      <ul className="space-y-2">
                        {dayTasks.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 text-sm leading-relaxed"
                          >
                            {parseLinksInText(item.task)}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-400 text-sm">No tasks</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
