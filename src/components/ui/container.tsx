import type { HTMLAttributes, ReactNode } from "react";

type ContainerSize = "reading" | "content" | "wide";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  reading: "max-w-[var(--layout-reading)]",
  content: "max-w-[var(--layout-content)]",
  wide: "max-w-[var(--layout-wide)]",
};

export function Container({
  children,
  className = "",
  size = "content",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-[var(--layout-gutter)] ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
