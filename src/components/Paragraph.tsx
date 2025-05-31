import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export default function Paragraph({
  className = "",
  content,
  children,
  ...props
}: ParagraphProps) {
  const baseClass =
    "mt-4 text-sm sm:text-base leading-normal text-zinc-600 dark:text-zinc-400";
  const combinedClassName = `${baseClass} ${className}`.trim();

  if (content) {
    return (
      <p
        className={combinedClassName}
        dangerouslySetInnerHTML={{ __html: content }}
        {...props}
      />
    );
  }

  return (
    <p className={combinedClassName} {...props}>
      {children}
    </p>
  );
}
