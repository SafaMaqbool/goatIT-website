import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaPhoneVolume } from 'react-icons/fa6';

const ContactUsButton = ({ className }: { className?: string }) => {
  return (
    <Link href="/contact" className={cn('', className)}>
      {/* <TailwindCssButtons title="Contact Us Now" icon={<FaPhoneVolume />} position="right"/> */}
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {/* Adjusted the gradient color to match Goat IT theme */}
        <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
        <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
          Contact Us Now
          <FaPhoneVolume className="ml-3" /> {/* Arrow icon */}
        </span>
      </button>
    </Link>
  );
};

export default ContactUsButton;
