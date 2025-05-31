import React, { JSX } from "react";

interface AppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  icon?: JSX.Element;
  className?: string;
}

export default function AppButton({
  children = "",
  className = "",
  icon = <></>,
  ...props
}: AppButtonProps) {
  const baseClass =
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none " +
    "bg-teal-500 font-medium text-white hover:bg-teal-600 active:bg-teal-700 cursor-pointer " +
    "dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-teal-800 dark:hover:text-teal-50 dark:active:bg-teal-800/50 dark:active:text-teal-50/70 " +
    "group w-auto";

  const combinedClassName = `${baseClass} ${className}`.trim();

  return (
    <a className={combinedClassName} {...props}>
      {children}
      {icon}
    </a>
  );
}
