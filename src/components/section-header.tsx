import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function SectionHeader({ className, children }: Props) {
  return (
    <div className={cn("mt-4", className)}>{children}</div>
  );
}

export function SectionHeaderTitle({ className, children }: Props) {
  return (
    <h2 className={cn("text-3xl lg:text-4xl font-semibold dark:font-medium tracking-tight", className)}>{children}</h2>
  );
}

export function SectionHeaderDescription({ className, children }: Props) {
  return (
    <p className={cn("text-gray-600 dark:text-gray-400 mt-4 max-w-[400px]", className)}>{children}</p>
  );
}