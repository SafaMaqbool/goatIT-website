import edolutions from '@/public/edolutions logo.png';
import lunar from '@/public/lunar logo.jpg';
import { StaticImageData } from 'next/image';

export interface Testimonial {
  id: number;
  company: string;
  logo: StaticImageData;
  text: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    company: 'Edolutions',
    logo: edolutions,
    text: "Working with GOAT for our ERP development has been a transformative experience. Their team truly understood our operational challenges and delivered a tailored solution that streamlined our processes, enhanced our data management, and improved overall efficiency. From the initial consultation to the final implementation, their professionalism and technical expertise were exceptional. We couldn't have asked for a better partner.",
    author: 'Talha Sami',
    role: 'CEO'
  },
  {
    id: 2,
    company: 'Lunar Furniture',
    logo: lunar,
    text: 'The ERP system developed by GOAT has revolutionized the way we manage our inventory, orders, and customer relationships. Their ability to customize the platform to our specific business needs was remarkable. The seamless integration of all our processes has saved us time and resources, allowing us to focus on growth. We highly recommend GOAT to any company looking for a reliable ERP solution.',
    author: 'Usman Mehanti',
    role: 'CEO'
  }
];
