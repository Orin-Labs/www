import React from 'react';

interface ProviderItem {
  name: string;
  description: string;
  metadata?: Record<string, string>;
  action?: {
    text: string;
    url?: string;
    onClick?: () => void;
  };
}

interface ProviderGridProps {
  title?: string;
  providers: ProviderItem[];
  columns?: number;
  className?: string;
}

export const ProviderGrid: React.FC<ProviderGridProps> = ({
  title,
  providers,
  columns = 2,
  className = "",
}) => {
  const handleAction = (provider: ProviderItem) => {
    if (provider.action?.onClick) {
      provider.action.onClick();
    } else if (provider.action?.url) {
      window.open(provider.action.url, "_blank");
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      )}
      <div
        className={`grid md:grid-cols-${columns} gap-4 p-6 rounded-lg border shadow-md bg-white`}
      >
        {providers.map((provider, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{provider.name}</p>
                <p className="text-sm text-gray-600">{provider.description}</p>
                {provider.metadata && (
                  <div className="mt-2 space-y-1">
                    {Object.entries(provider.metadata).map(([key, value]) => (
                      <div key={key} className="text-xs text-gray-500">
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {provider.action && (
                <button
                  onClick={() => handleAction(provider)}
                  className="ml-4 px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {provider.action.text}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
