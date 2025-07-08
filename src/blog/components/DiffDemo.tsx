import React from 'react';

import { DiffExample } from '@blog/components/DiffExample';

export const DiffDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <DiffExample />
      </div>
    </div>
  );
};

export default DiffDemo;
