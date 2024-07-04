import React, { ReactNode } from "react";

type Props = {
  title: string;
  className?: string;
  action?: () => void;
};

const ActionButton = ({ title, className, action }: Props) => {
  return (
    <button
      onClick={action}
      className={`${className} border border-primary-500 lg:w-48 h-10 w-32  rounded-full hover:text-white hover:bg-primary-500 }`}
    >
      {title}
    </button>
  );
};

export default ActionButton;
