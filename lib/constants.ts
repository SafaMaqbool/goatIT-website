import { LinkItem } from './types';

export const getNavigationLinks = ({ currentPath }: { currentPath: string }): LinkItem[] => [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: true,
    dropdownLinks: [
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'ERP Development', path: '/services/erp-development' }
    ]
  },
  { label: 'Jobs', path: '/jobs' },
  { label: 'Testimonials', path: currentPath === '/' ? '#testimonials' : '/#testimonials' },
  { label: 'Contact', path: '/contact' }
];
