import React from 'react';

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

const dayEmojis: Record<DayOfWeek, string> = {
  Monday: "🌟",
  Tuesday: "🔥",
  Wednesday: "💡",
  Thursday: "🎯",
  Friday: "🎉",
  Saturday: "🌈",
  Sunday: "✨",
};

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

  const daysWithTasks = Object.keys(itemsByDay) as DayOfWeek[];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
          {title}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {daysWithTasks.map((day) => (
          <div
            key={day}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{dayEmojis[day]}</span>
              <h4 className="font-bold text-xl text-gray-800">{day}</h4>
            </div>

            <div className="space-y-3">
              {itemsByDay[day].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-400"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-700 font-bold text-sm px-3 py-1 rounded-full whitespace-nowrap">
                      {item.time}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">
                      {item.task}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 text-base italic">
          💡 Consistency is key - small daily actions create lasting habits
        </p>
      </div>
    </div>
  );
};
