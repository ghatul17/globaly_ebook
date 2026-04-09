import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
 "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
 {
  variants: {
   variant: {
    default:  "bg-brand-50 border-brand-100 text-brand-700",
    secondary: "bg-surface border-border text-dark/60",
    amber:   "bg-amber-50 border-amber-200 text-amber-700",
    outline:  "border-border text-dark/70 bg-transparent",
   },
  },
  defaultVariants: { variant: "default" },
 }
);

export interface BadgeProps
 extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
 return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
