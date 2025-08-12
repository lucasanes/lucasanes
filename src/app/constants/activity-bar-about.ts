import { IActivityBar } from '../models/ide';

export const ABOUT_ACTIVITY_BAR: IActivityBar[] = [
  {
    title: 'informações-pessoais',
    folders: [
      {
        title: 'biografia',
        route: '/about/bio',
        color: 'var(--accent-orange)',
        files: [
          {
            title: 'sobre-mim',
            icon: 'markdown',
            route: '/about/bio/about-me',
            external: false,
          },
             {
            title: 'experiencia',
            icon: 'markdown',
            route: '/about/bio/experience',
            external: false,
          },
        ],
      },
      {
        title: 'habilidades',
        route: '/about/skills',
        color: 'var(--accent-purple)',
        files: [
          {
            title: 'principais',
            icon: 'markdown',
            route: '/about/skills/main',
            external: false,
          },
          {
            title: 'secundárias',
            icon: 'markdown',
            route: '/about/skills/other',
            external: false,
          },
          {
            title: 'em breve',
            icon: 'markdown',
            route: '/about/skills/soon',
            external: false,
          },
        ],
      },
    ],
    files: [],
  }
];
