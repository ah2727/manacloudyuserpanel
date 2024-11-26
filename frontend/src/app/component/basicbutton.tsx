import React from "react";

type ButtonProps = {
  variant: "custom" | "soft" | "dashed" | "outline" | "ghost"; // Define the allowed variants
  children: React.ReactNode; // Button content
  onClick?: () => void; // Optional click handler
  className:string;
};

const BasicButton: React.FC<ButtonProps> = ({ variant, className,children, onClick }) => {
  // Base styles shared by all buttons
  const baseClass =
    "h-[40px] btn px-4 py-2 text-sm font-medium focus:ring focus:outline-none rounded";

  // Define styles for each variant
  const variants = {
    custom:
      "text-white bg-custom-500 border-custom-500 hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600 dark:ring-custom-400/20",
    soft:
      "text-custom-500 bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white",
    dashed:
      "bg-white border-dashed text-custom-500 border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20",
    outline:
      "bg-white text-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20",
    ghost:
      "bg-white text-custom-500 hover:text-custom-500 hover:bg-custom-100 focus:text-custom-500 focus:bg-custom-100 active:text-custom-500 active:bg-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500/10 dark:focus:bg-custom-500/10",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default BasicButton;


