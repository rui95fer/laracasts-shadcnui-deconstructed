import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import { ComponentProps, ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Input } from '@/components/ui/input';

export default function Welcome() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
            <h1 className="mb-4 text-5xl font-extrabold text-slate-800 drop-shadow">Welcome to My App!</h1>
            <p className="mt-2 mb-8 text-xl text-slate-600">This is a simple welcome page.</p>
            <Button className="mb-6" onClick={() => setToggle((prev) => !prev)} variant={toggle ? 'secondary' : 'default'}>
                Toggle: {toggle ? 'ON' : 'OFF'}
            </Button>
            <Input placeholder="Digite algo..." className="mb-4 max-w-xs" />
            <div className="flex w-full max-w-xs flex-col gap-4">
                <Box className={clsx(toggle ? 'bg-black text-white' : 'bg-white text-black')}>
                    I am inside a box
                    <br />
                </Box>
                <Box>I am inside a box</Box>
            </div>
        </div>
    );
}

type BoxProps = {
    children: ReactNode;
    className?: string;
} & ComponentProps<'div'>;

function Box({ children, className = '', ...restProps }: BoxProps) {
    return (
        <div
            className={twMerge(
                'flex cursor-pointer flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-slate-700 shadow-lg transition hover:scale-105 hover:shadow-2xl',
                className,
            )}
            {...restProps}
        >
            {children}
        </div>
    );
}
