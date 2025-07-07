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
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      )}
      <ol className="text-left max-w-lg mx-auto space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className={`pb-2 border-b border-current ${itemClassName}`}
          >
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
