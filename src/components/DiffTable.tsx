import React from 'react';

import { ComparisonTable } from './ComparisonTable';

interface DiffItem {
  label: string;
  before: string | React.ReactNode;
  after: string | React.ReactNode;
  status?: "added" | "removed" | "modified" | "unchanged";
}

interface DiffTableProps {
  title?: string;
  items: DiffItem[];
  className?: string;
  showStatus?: boolean;
}

export const DiffTable: React.FC<DiffTableProps> = ({
  title,
  items,
  className = "",
  showStatus = true,
}) => {
  const getStatusIcon = (status?: DiffItem["status"]) => {
    switch (status) {
      case "added":
        return "✅";
      case "removed":
        return "❌";
      case "modified":
        return "🔄";
      case "unchanged":
        return "🔘";
      default:
        return "";
    }
  };

  const getStatusColor = (status?: DiffItem["status"]) => {
    switch (status) {
      case "added":
        return "bg-green-100 text-green-800";
      case "removed":
        return "bg-red-100 text-red-800";
      case "modified":
        return "bg-yellow-100 text-yellow-800";
      case "unchanged":
        return "bg-gray-100 text-gray-800";
      default:
        return "";
    }
  };

  const columns = [
    { header: "Item", key: "label", className: "font-semibold w-1/4" },
    {
      header: "Before",
      key: "before",
      className: "font-mono text-sm bg-red-50",
    },
    {
      header: "After",
      key: "after",
      className: "font-mono text-sm bg-green-50",
    },
    ...(showStatus
      ? [{ header: "Status", key: "status", className: "text-center w-20" }]
      : []),
  ];

  const data = items.map((item) => ({
    label: item.label,
    before: item.before,
    after: item.after,
    ...(showStatus && {
      status: (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
            item.status
          )}`}
        >
          {getStatusIcon(item.status)} {item.status || "modified"}
        </span>
      ),
    }),
  }));

  return (
    <ComparisonTable
      title={title}
      columns={columns}
      data={data}
      className={className}
    />
  );
};

// Convenience component for code diffs
interface CodeDiffProps {
  title?: string;
  changes: Array<{
    file: string;
    before: string;
    after: string;
    status?: "added" | "removed" | "modified";
  }>;
  className?: string;
}

export const CodeDiff: React.FC<CodeDiffProps> = ({
  title,
  changes,
  className = "",
}) => {
  const diffItems: DiffItem[] = changes.map((change) => ({
    label: change.file,
    before: change.before,
    after: change.after,
    status: change.status,
  }));

  return (
    <DiffTable
      title={title}
      items={diffItems}
      className={className}
      showStatus={true}
    />
  );
};

// Convenience component for feature comparisons
interface FeatureDiffProps {
  title?: string;
  features: Array<{
    name: string;
    oldVersion: string;
    newVersion: string;
    improvement?: string;
  }>;
  className?: string;
}

export const FeatureDiff: React.FC<FeatureDiffProps> = ({
  title,
  features,
  className = "",
}) => {
  const columns = [
    { header: "Feature", key: "name", className: "font-semibold" },
    { header: "Old Version", key: "oldVersion", className: "text-center" },
    { header: "New Version", key: "newVersion", className: "text-center" },
    {
      header: "Improvement",
      key: "improvement",
      className: "text-center font-bold text-green-600",
    },
  ];

  const data = features.map((feature) => ({
    name: feature.name,
    oldVersion: feature.oldVersion,
    newVersion: feature.newVersion,
    improvement: feature.improvement || "Enhanced",
  }));

  return (
    <ComparisonTable
      title={title}
      columns={columns}
      data={data}
      className={className}
    />
  );
};
