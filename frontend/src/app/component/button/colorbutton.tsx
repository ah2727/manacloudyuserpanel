import React from "react";

type ButtonProps = {
  variant?:
    | "custom"
    | "green"
    | "orange"
    | "sky"
    | "yellow"
    | "red"
    | "purple"
    | "slate"
    | "light"; // Define allowed variants
  children: React.ReactNode; // Button content
  onClick?: () => void; // Optional click handler
};

// Reusable Button Component with variants
const ColorButton: React.FC<ButtonProps> = ({ variant = "custom", children, onClick }) => {
  // Base classes for all buttons
  const baseClass =
    "btn px-4 py-2 text-sm font-medium focus:ring focus:outline-none rounded";

  // Variants object mapping each variant to its specific styles
  const variants = {
    custom:
      "text-white bg-custom-500 border-custom-500 hover:bg-custom-600 hover:border-custom-600 focus:bg-custom-600 focus:border-custom-600 active:bg-custom-600 active:border-custom-600 dark:ring-custom-400/20",
    green:
      "text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:bg-green-600 focus:border-green-600 active:bg-green-600 active:border-green-600 dark:ring-green-400/10",
    orange:
      "text-white bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600 focus:bg-orange-600 focus:border-orange-600 active:bg-orange-600 active:border-orange-600 dark:ring-orange-400/10",
    sky:
      "text-white bg-sky-500 border-sky-500 hover:bg-sky-600 hover:border-sky-600 focus:bg-sky-600 focus:border-sky-600 active:bg-sky-600 active:border-sky-600 dark:ring-sky-400/20",
    yellow:
      "text-white bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 focus:bg-yellow-600 focus:border-yellow-600 active:bg-yellow-600 active:border-yellow-600 dark:ring-yellow-400/10",
    red:
      "text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 active:bg-red-600 active:border-red-600 dark:ring-red-400/10",
    purple:
      "text-white bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600 focus:bg-purple-600 focus:border-purple-600 active:bg-purple-600 active:border-purple-600 dark:ring-purple-400/10",
    slate:
      "text-white bg-slate-500 border-slate-500 hover:bg-slate-600 hover:border-slate-600 focus:bg-slate-600 focus:border-slate-600 active:bg-slate-600 active:border-slate-600 dark:ring-slate-400/10",
    light:
      "text-slate-500 bg-slate-200 border-slate-200 hover:bg-slate-300 hover:border-slate-300 focus:bg-slate-300 focus:border-slate-300 active:bg-slate-300 active:border-slate-300 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:text-zink-200 dark:ring-zink-400/50",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

// Basic Button with default styles
const BasicButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded"
    >
      {children}
    </button>
  );
};

// Export both components
export default ColorButton;
