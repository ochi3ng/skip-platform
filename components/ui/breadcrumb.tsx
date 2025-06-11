import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Breadcrumb({ children, className, ...props }: BreadcrumbProps) {
  return (
    <nav className={cn("flex", className)} {...props}>
      <ol className="inline-flex items-center space-x-1 text-sm text-muted-foreground sm:space-x-2">
        {children}
      </ol>
    </nav>
  );
}

interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export function BreadcrumbItem({ children, className, ...props }: BreadcrumbItemProps) {
  return (
    <li className={cn("inline-flex items-center", className)} {...props}>
      {children}
    </li>
  );
}

interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function BreadcrumbLink({ children, className, ...props }: BreadcrumbLinkProps) {
  return (
    <a className={cn("transition-colors hover:text-foreground", className)} {...props}>
      {children}
    </a>
  );
}

export function BreadcrumbSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li role="presentation" className={cn("flex items-center", className)} {...props}>
      <ChevronRight className="h-4 w-4" />
    </li>
  );
}
