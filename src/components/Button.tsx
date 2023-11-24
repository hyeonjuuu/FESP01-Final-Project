import React from "react"

interface ButtonProps {
  text: string
  type: "button" | "submit" | "reset"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  activeClass?: string
  color?: string
}

function Button({
  text,
  type,
  onClick,
  activeClass,
  color = "bg-white text-black",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center  py-2 px-3 rounded-full ${color} ${activeClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
