import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-[30px] z-50 border bg-background text-card-foreground',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card z-50';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col z-50 space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader z-50';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight z-50',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle z-50';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground z-50', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription z-50';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent z-50';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0 z-50', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter z-50';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
