# Tobi the Dev — Portfolio

A polished, responsive portfolio website for Mubarak “Tobi” Oyewole — a full-stack web developer and designer based in Abuja, Nigeria.

The site combines editorial visual design with smooth motion, project showcases, a skills overview, and a working contact form so visitors can explore the work and start a conversation.

[![Live site](https://img.shields.io/badge/Live%20site-tobithedev.vercel.app-111111?style=flat-square&logo=vercel&logoColor=white)](https://tobithedev.vercel.app)
[![Built with React](https://img.shields.io/badge/Built%20with-React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

## Highlights

- Responsive portfolio experience for desktop, tablet, and mobile
- Dedicated Home, Projects, and Skills routes
- Framer Motion page transitions and scroll-based reveals
- Lenis-powered smooth scrolling
- Light and dark visual themes
- Project showcase with live project links
- Skills presented in a responsive bento-style layout
- EmailJS-powered contact form with graceful configuration errors
- Lazy-loaded routes with React Router
- Vercel-ready deployment configuration

## Tech stack

- React 19
- Vite 7
- React Router
- Tailwind CSS
- Framer Motion
- Lenis
- Lucide React and React Icons
- EmailJS
- Vercel

## Featured projects

| Project | Description | Link |
| --- | --- | --- |
| BabaVee Studio | Design and development agency website | [Visit site](https://babaveestudio.vercel.app/) |
| JustHome Estate | Real estate platform | [Visit site](https://justhome-estate.vercel.app) |
| Track Progress | Goal-tracking application | [Visit site](https://trackprogress-ten.vercel.app/) |

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository and install dependencies:

~~~
git clone https://github.com/thobee/tobithedev.git
cd tobithedev
npm install
~~~

Create a local environment file:

~~~
cp .env.example .env
~~~

Then add your EmailJS credentials to .env:

~~~env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
~~~

Start the development server:

~~~
npm run dev
~~~

Open the local URL shown by Vite, usually http://localhost:5173.

## Available scripts

| Command | Purpose |
| --- | --- |
| npm run dev | Start the local development server |
| npm run build | Create a production build |
| npm run preview | Preview the production build locally |
| npm run lint | Run ESLint |

## Project structure

~~~text
src/
├── components/   # Shared sections, navigation, footer, and UI primitives
├── context/      # Theme context and client-side state
├── data/         # Site content, navigation, and project data
├── pages/        # Home, Projects, and Skills routes
├── assets/       # Images, logo, and downloadable resume
├── App.jsx       # Router, lazy-loaded pages, and smooth scrolling
└── main.jsx      # Application entry point
~~~

Most portfolio content can be updated from:

- src/data/site.js for navigation, social links, bio, and site URL
- src/data/projects.js for project cards and live project links

## Deployment

This project is configured for Vercel. To deploy:

1. Import the repository into Vercel.
2. Keep the default Vite build settings, or use:
   - Build command: npm run build
   - Output directory: dist
3. Add the VITE_EMAILJS_* environment variables in the Vercel project settings.
4. Deploy.

## Contact

- Website: [tobithedev.vercel.app](https://tobithedev.vercel.app)
- GitHub: [@thobithedev](https://github.com/thobee)
- LinkedIn: [Mubarak Oyewole](https://www.linkedin.com/in/mubarak-oyewole-529b6a191/)
- X: [@tobithedev_](https://x.com/tobithedev_)
- Email: [oyestobi@gmail.com](mailto:oyestobi@gmail.com)

## License

This repository contains a personal portfolio project. Please contact the author before reusing branded assets, personal information, or portfolio content.
