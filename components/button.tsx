'use client';
import React, { ReactNode } from 'react';

const Button: React.FC = (props: any) => {
  return (
    <div className="mt-10">
      <button
        className="border-blue-500 border-2 p-3 rounded-md text-white bg-blue-500"
        onClick={() => alert('Hello')}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
