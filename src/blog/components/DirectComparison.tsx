type DirectComparisonProps = {
  bad: {
    title: string;
    items: string[];
  };
  good: {
    title: string;
    items: string[];
  };
};

export function DirectComparison({ bad, good }: DirectComparisonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 border border-red-300 shadow-md rounded-lg flex flex-col gap-2">
        <h4 className="font-semibold text-red-800">{bad.title}</h4>
        <ul className="text-sm text-red-700 list-disc list-inside">
          {bad.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="p-4 border border-green-300 shadow-md rounded-lg flex flex-col gap-2">
        <h4 className="font-semibold text-green-800">{good.title}</h4>
        <ul className="text-sm text-green-700 list-disc list-inside">
          {good.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
