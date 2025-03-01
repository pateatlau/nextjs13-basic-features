'use client';
import React, { ReactNode } from 'react';

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div className="mt-10">
      <button
        className="border-blue-500 border-2 p-3 rounded-md text-white bg-blue-500"
        onClick={() => alert(`Hello, I'm a client component`)}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
