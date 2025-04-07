
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-wildlife-purple rounded-full opacity-70 animate-pulse-slow" />
        <div className="absolute inset-1 bg-wildlife-dark rounded-full flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-wildlife-teal"
          >
            <path
              d="M10.5 8.5C10.5 9.05228 10.0523 9.5 9.5 9.5C8.94772 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.94772 7.5 9.5 7.5C10.0523 7.5 10.5 7.94772 10.5 8.5Z"
              fill="currentColor"
            />
            <path
              d="M15.5 8.5C15.5 9.05228 15.0523 9.5 14.5 9.5C13.9477 9.5 13.5 9.05228 13.5 8.5C13.5 7.94772 13.9477 7.5 14.5 7.5C15.0523 7.5 15.5 7.94772 15.5 8.5Z"
              fill="currentColor"
            />
            <path
              d="M12 13.5C10.8954 13.5 10 12.8284 10 12H8C8 13.933 9.79086 15.5 12 15.5C14.2091 15.5 16 13.933 16 12H14C14 12.8284 13.1046 13.5 12 13.5Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <span className="font-bold text-lg text-white">Wild Eye</span>
    </div>
  );
};

export default Logo;
