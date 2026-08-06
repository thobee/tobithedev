import justhome from '../assets/justhome.png';
import Track from '../assets/Track.jpg';
import babavee from '../assets/babavee.png';

export const projects = [
  {
    title: 'BabaVee Studio — design & development agency',
    image: babavee,
    href: 'https://babaveestudio.vercel.app/',
  },
  {
    title: 'JustHome Estate — real estate platform',
    image: justhome,
    href: 'https://justhome-estate.vercel.app',
  },
  {
    title: 'Track Progress — goal tracking app',
    image: Track,
    href: 'https://trackprogress-ten.vercel.app/',
  },
];

export const featuredProjects = projects.slice(0, 2);
