import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center overflow-hidden ${className}`}
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
        {children}
      </div>
    </section>
  );
}