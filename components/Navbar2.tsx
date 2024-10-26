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

const components: { title: string; href: string }[] = [
  {
    title: 'ERP Implementation',
    href: '/erp-development'
  },
  {
    title: 'Web Development',
    href: '/web-development'
  }
];

export function Navbar2() {
  const path = usePathname();

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {/*  */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref className="">
            <NavigationMenuLink
              className={cn(
                cn(navigationMenuTriggerStyle(), 'group/1 relative isolate transition hover:text-green-400'),
                'group/1 relative isolate transition hover:text-green-400'
              )}
            >
              Home
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover/1:left-0 group-hover/1:w-full"></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/*  */}
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'group/2 relative isolate transition hover:text-green-400')}
            >
              About
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover/2:left-0 group-hover/2:w-full"></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/*  */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] lg:w-[280px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/*  */}
        <NavigationMenuItem>
          <Link href="/jobs" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'group/2 relative isolate transition hover:text-green-400')}
            >
              Jobs
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover/2:left-0 group-hover/2:w-full"></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/*  */}
        <NavigationMenuItem>
          {/* if the current path is home then "#testimonials" other wise "/#testimonials" */}
          <Link href={path === '/' ? '#testimonials' : '/#testimonials'} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'group/3 relative isolate transition hover:text-green-400')}
            >
              Testimonial
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover/3:left-0 group-hover/3:w-full"></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/*  */}
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), 'group/4 relative isolate transition hover:text-green-400')}
            >
              Contact
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover/4:left-0 group-hover/4:w-full"></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
