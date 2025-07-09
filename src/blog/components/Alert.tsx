import React from 'react';

import { LucideIcon } from 'lucide-react';

interface AlertProps {
  type: "warning" | "error" | "info" | "success";
  title?: string;
  children: React.ReactNode;
  icon: LucideIcon;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  children,
  icon: Icon,
  className = "",
}) => {
  const getAlertClasses = (type: string) => {
    const typeMap = {
      warning: {
        container: "bg-yellow-50 border-l-yellow-400 border-yellow-400",
        icon: "text-yellow-400",
        text: "text-yellow-700",
      },
      error: {
        container: "bg-red-50 border-l-red-400 border-red-400",
        icon: "text-red-400",
        text: "text-red-700",
      },
      info: {
        container: "bg-blue-50 border-l-blue-400 border-blue-400",
        icon: "text-blue-400",
        text: "text-blue-700",
      },
      success: {
        container: "bg-green-50 border-l-green-400 border-green-400",
        icon: "text-green-400",
        text: "text-green-700",
      },
    };
    return typeMap[type as keyof typeof typeMap] || typeMap.info;
  };

  const classes = getAlertClasses(type);

  return (
    <div
      className={`${classes.container} border-l-8 p-4 shadow-md rounded-r-lg border ${className}`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`w-6 h-6 ${classes.icon}`} />
        </div>
        <div className="ml-3">
          <div className={`text-sm ${classes.text}`}>
            {title && <strong>{title}</strong>}
            {typeof children === "string" ? <p>{children}</p> : children}
          </div>
        </div>
      </div>
    </div>
  );
};
