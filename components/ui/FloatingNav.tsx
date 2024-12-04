'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          'fixed inset-x-0 top-10 z-5000 mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-white/[0.2] bg-black py-2 pl-8 pr-2 shadow-xs',
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn('relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300')}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </Link>
        ))}

        <button className="relative rounded-full border border-neutral-200  px-4 py-2 text-sm font-medium text-white">
          <span>Login</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        </button>
      </div>
    </>
  );
};
