import React from 'react';

const Practice = () => {
    return (
      <div className="flex items-center justify-center ">
      <svg className="w-72 h-72" viewBox="0 0 300 300">
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
          />
        </defs>
        <text className=" font-bold text-xl">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            🎉 Welcome to Rounded Text with Tailwind 🎉
          </textPath>
        </text>
      </svg>
    </div>
    );
};

export default Practice;