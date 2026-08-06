import { Github, Linkedin, Mail, FileDown, Home, FolderKanban, Layers } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import resumePdf from '../assets/MUBARAK OYEWOLE_Full Stack Engineer.pdf';

export const pageLinks = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/projects', icon: FolderKanban, label: 'Projects' },
  { to: '/skills', icon: Layers, label: 'Skills' },
];

export const socialLinks = [
  { href: 'https://github.com/thobee', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mubarak-oyewole-529b6a191/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/tobithedev_', icon: FaXTwitter, label: 'X' },
  { href: '#contact', icon: Mail, label: 'Email' },
  { href: '#resume', icon: FileDown, label: 'Resume', download: true },
];

export { logo, resumePdf };

/** Production site URL — update if your live domain changes */
export const SITE_URL = 'https://tobithedev.vercel.app';

export const BIO =
  'Passionate fullstack developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies';
