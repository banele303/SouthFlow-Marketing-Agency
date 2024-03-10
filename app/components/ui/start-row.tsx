// components/StarsRow.js

import React from 'react';

const StarsRow = () => {
  return (
    <div className="flex items-center space-x-1 pl-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l2.76 8.28h7.48L14.88 14l2.76 8.28L12 17.72l-7.64 4.56 2.76-8.28L2.76 14l7.48-3.72H9.24L12 2z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarsRow;
