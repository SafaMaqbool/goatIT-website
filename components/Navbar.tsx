'use client';

import { getNavigationLinks } from '@/lib/constants';
import { useClickAway } from '@uidotdev/usehooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { DesktopMenu } from './DesktopMenu';
import GoatLogo from './icons/brand';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const currentPath = usePathname();
  const links = getNavigationLinks({ currentPath });

  return (
    <>
      <nav className="fixed inset-x-0 top-5 z-50 mx-4 h-16 max-w-3xl rounded-full border border-gray-200 bg-white px-4 py-0.5 shadow-lg backdrop-blur-lg dark:border-gray-900 dark:bg-black/50 md:mx-auto">
        <div className="flex h-full w-full items-center justify-between text-black dark:text-white sm:justify-between lg:justify-evenly">
          <Link href="/" className="flex items-center">
            <GoatLogo className="h-7" />
          </Link>

          <DesktopMenu links={links} />
          <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={ref as any}
          className="fixed inset-0 top-24 z-50 flex h-min flex-col items-center rounded-2xl border px-4 py-16 shadow-lg backdrop-blur-lg dark:border-gray-900 dark:bg-black/50 lg:hidden"
        >
          <div className="flex w-full flex-col items-start space-y-7 py-4 text-xl">
            {links.map(({ label, path, dropdown, dropdownLinks }) => (
              <div key={label} className="px-7">
                <Link href={path} onClick={toggleMenu}>
                  {label}
                </Link>
                {dropdown && (
                  <ul className="ml-5 mt-7 space-y-7">
                    {dropdownLinks?.map(({ label, path }) => (
                      <li key={label}>
                        <Link href={path} onClick={toggleMenu}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
