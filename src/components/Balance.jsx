import React from 'react';

const Balance = () => {
  return (
    <div className="max-w-md p-4 border-b border-gray-300">
      <div className="text-gray-700 font-semibold">Баланс</div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-lg font-bold text-gray-900">$0.00</div>
        <a href="/add-balance" className="ml-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#14145A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 8V16" stroke="#14145A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M8 12H16" stroke="#14145A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Balance;