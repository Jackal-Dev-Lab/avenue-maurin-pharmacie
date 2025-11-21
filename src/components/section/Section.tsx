
import React from "react";

export function Section({
  title,
  description,
  children,
  className = "",
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mb-10 ${className}`}>
      {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
      {description && <p className="text-muted-foreground mb-4">{description}</p>}
      {children}
    </section>
  );
}
