'use client';

import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function DesktopMenu({
  links
}: {
  links: { label: string; path: string; dropdown?: boolean; dropdownLinks?: { label: string; path: string }[] }[];
}) {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.label}>
            {link.dropdown ? (
              <>
                <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] lg:w-[280px]">
                    {link.dropdownLinks?.map((dropdownLink) => (
                      <ListItem key={dropdownLink.label} title={dropdownLink.label} href={dropdownLink.path} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={link.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'group/1 relative isolate transition hover:text-green-400',
                    pathname === link.path && 'text-green-400'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover/1:left-0 group-hover/1:w-full',
                      pathname === link.path && 'left-0 w-full'
                    )}
                  ></span>
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, href, ...props }, ref) => {
    const pathname = usePathname();
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href || '/'}
            ref={ref}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none',
              pathname === href && 'bg-accent text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm leading-none font-medium">{title}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
