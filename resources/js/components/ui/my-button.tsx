import { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type MyButtonProps = {
    children: ReactNode;
    className?: string;
    size?: 'default' | 'sm' | 'lg';
    look?: 'primary' | 'secondary' | 'destructive';
} & ComponentProps<'button'>;

const baseClasses = 'rounded text-white disabled:bg-slate-300 disabled:text-slate-500 border-transparent';

const sizeClasses: Record<NonNullable<MyButtonProps['size']>, string> = {
    sm: 'px-4 py-2',
    default: 'px-8 py-4',
    lg: 'px-16 py-8'
};

const lookClasses: Record<NonNullable<MyButtonProps['look']>, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    destructive: 'bg-red-500 hover:bg-red-600'
};

export function MyButton({ children, className = '', size = 'default', look = 'primary', ...props }: MyButtonProps) {
    return (
        <button
            className={cn(
                baseClasses,
                sizeClasses[size],
                lookClasses[look],
                className
            )}
            {...props}>
            {children}
        </button>
    );
}
