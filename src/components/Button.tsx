import React from "react";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className="flex items-center justify-center bg-gray-200 py-2 px-3 rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
