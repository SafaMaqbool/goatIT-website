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

export function DesktopMenu({
  links
}: {
  links: { label: string; path: string; dropdown?: boolean; dropdownLinks?: { label: string; path: string }[] }[];
}) {
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
                    'group/1 relative isolate transition hover:text-green-400'
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover/1:left-0 group-hover/1:w-full"></span>
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
    return (
      <li>
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink asChild>
            <Link
              ref={ref}
              className={cn(
                'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
            </Link>
          </NavigationMenuLink>
        </Link>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
