import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaArrowRight, FaPhoneVolume } from 'react-icons/fa6';

const icons = {
  phone: <FaPhoneVolume />,
  'right-arrow': <FaArrowRight />
};

const AnimatedButton = ({
  className,
  link,
  label,
  icon,
  iconClassName
}: {
  className?: string;
  link: string;
  label: string;
  icon: 'phone' | 'right-arrow';
  iconClassName?: string;
}) => {
  const IconComponent = icons[icon] as ReactNode;

  return (
    <Link href={link} className={cn('', className)}>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] uppercase focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
        <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
          {label}
          {IconComponent && <span className={cn('default-icon-styles', iconClassName)}>{IconComponent}</span>}
        </span>
      </button>
    </Link>
  );
};

export default AnimatedButton;
