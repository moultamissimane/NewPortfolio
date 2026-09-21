import confidentialImg from '../assets/confidentiel-lmd.jpg';
import dealkhirLogo from '../assets/dealkhir.png';

export type ProjectCategory = 'fullstack' | 'frontend' | 'mobile';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  /** Logos need `contain` on a light backdrop; photos use `cover`. */
  imageFit?: 'cover' | 'contain';
  technologies: string[];
  category: ProjectCategory;
  demoUrl?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  fullstack: 'Full stack',
  frontend: 'Front-end',
  mobile: 'Mobile',
};

const jaiTesteImage =
  "https://impro.usercontent.one/appid/oneComWsb/domain/jaiteste.com/media/jaiteste.com/onewebmedia/J'ai%20test%C3%A9.jpg?etag=W%2F%224696b-624e53f9%22&sourceContentType=image%2Fjpeg&quality=85";

export const projects: Project[] = [
  {
    id: 'visionyze',
    title: 'Visionyze',
    description:
      'Confidential enterprise project. Led the migration to Next.js (SSR/ISR) and built a high-performance Node.js backend on AWS.',
    image: confidentialImg,
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    category: 'fullstack',
  },
  {
    id: 'linkedsync',
    title: 'LinkedSync',
    description:
      'Profile management platform for LinkedIn, using the LinkedIn API to manage and update profiles programmatically.',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    imageFit: 'contain',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'LinkedIn API'],
    category: 'fullstack',
  },
  {
    id: 'dealkhir',
    title: 'Dealkhir',
    description:
      'Donation-as-a-service platform with secure payments and a wide range of donation options for causes and organisations.',
    image: dealkhirLogo,
    imageFit: 'contain',
    technologies: ['Next.js', 'Nest.js', 'Tailwind CSS', 'GraphQL', 'AWS'],
    category: 'fullstack',
    demoUrl: 'https://dealkhir.com/fr',
  },
  {
    id: 'dealkhir-mobile',
    title: 'Dealkhir Mobile',
    description: 'The Dealkhir donation experience as a native mobile app.',
    image: dealkhirLogo,
    imageFit: 'contain',
    technologies: ['React Native'],
    category: 'mobile',
  },
  {
    id: 'jai-teste',
    title: 'J’ai testé',
    description:
      'Platform to share and discover restaurants and good deals in Moroccan cities, with real-time chat and a robust data backend.',
    image: jaiTesteImage,
    technologies: ['Next.js', 'REST API', 'Node.js', 'Express'],
    category: 'fullstack',
    demoUrl: 'https://jaiteste.com/',
  },
  {
    id: 'jai-teste-mobile',
    title: 'J’ai testé Mobile',
    description: 'Mobile companion to J’ai testé for finding restaurants and deals on the go.',
    image: jaiTesteImage,
    technologies: ['React Native'],
    category: 'mobile',
    demoUrl: 'https://jaiteste.com/',
  },
  {
    id: 'datetric',
    title: 'Datetric',
    description:
      'Booking system that lets businesses manage appointments, bookings and customer interactions in one place.',
    image:
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Tailwind CSS', 'PHP', 'CodeIgniter', 'MySQL'],
    category: 'fullstack',
    demoUrl: 'https://datetric.com/',
  },
  {
    id: 'serena',
    title: 'Serena Jewelry',
    description: 'Storefront and brand website for a jewelry label.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Next.js', 'Firebase'],
    category: 'frontend',
    demoUrl: 'https://serenastore.store/',
  },
  {
    id: 'tu-manges-quoi',
    title: 'Tu manges quoi ?',
    description: 'Headless CMS with content modelling and API-first delivery.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Next.js', 'GraphQL', 'Node.js', 'MongoDB'],
    category: 'fullstack',
  },
  {
    id: 'jackhammer',
    title: 'Jackhammer Workwear',
    description: 'E-commerce site for professional and medical workwear.',
    image: 'https://www.jackhammerworkwear.com/cdn/shop/files/DSC02157.jpg?v=1777027634&width=400',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Liquid'],
    category: 'fullstack',
    demoUrl: 'https://www.jackhammerworkwear.com/',
  },
];
