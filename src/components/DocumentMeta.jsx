import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../data/site';

const pages = {
  '/': {
    title: 'Mubarak Tobi Oyewole — Full Stack Developer & Designer | tobithedev',
    description:
      'Portfolio of Mubarak Tobi Oyewole (tobithedev) — Full Stack Web Developer and designer in Abuja, Nigeria. Building scalable React, Node.js, and modern web products.',
  },
  '/projects': {
    title: 'Projects — Mubarak Tobi Oyewole | tobithedev',
    description:
      'Selected web projects by Mubarak Tobi Oyewole — BabaVee Studio, JustHome Estate, Track Progress, and more full stack builds.',
  },
  '/skills': {
    title: 'Skills — Mubarak Tobi Oyewole | Full Stack Developer',
    description:
      'Tech stack and skills of Mubarak Tobi Oyewole — React, Next.js, Node.js, databases, UI/UX, cloud deployment, and more.',
  },
};

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const DocumentMeta = () => {
  const { pathname } = useLocation();
  const meta = pages[pathname] || pages['/'];
  const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

  useEffect(() => {
    document.title = meta.title;

    setMeta('description', meta.description);
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [pathname, meta, url]);

  return null;
};

export default DocumentMeta;
