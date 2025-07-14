import React from 'react';

interface NumberedListItem {
  text: string;
  description?: string;
}

interface NumberedListProps {
  title?: string;
  items: NumberedListItem[];
  className?: string;
  itemClassName?: string;
}

export const NumberedList: React.FC<NumberedListProps> = ({
  title,
  items,
  className = "",
  itemClassName = "",
}) => {
  return (
    <div className={className}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <ol className="text-left mx-auto space-y-3">
        {items.map((item, index) => (
          <li key={index} className={`pb-2 ${itemClassName}`}>
            {index + 1}. {item.text}
            {item.description && (
              <div className="text-sm mt-1 opacity-80">{item.description}</div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
