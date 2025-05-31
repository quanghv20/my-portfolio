import React from "react";

interface TextSubHeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export default function TextSubHeading({
  className = "",
  children,
  ...props
}: TextSubHeadingProps) {
  const baseClass =
    "text-sm sm:text-base leading-normal font-medium text-zinc-900 dark:text-zinc-100";
  const combinedClassName = `${baseClass} ${className}`.trim();

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
}
