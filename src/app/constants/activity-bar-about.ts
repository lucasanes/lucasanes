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
            title: 'resumo',
            icon: 'markdown',
            route: '/about/bio/resume',
            external: false,
          },
          {
            title: 'conheça-me',
            icon: 'markdown',
            route: '/about/bio/know-me',
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
  },
  {
    title: 'contatos',
    folders: [],
    files: [
      {
        title: '(21) 97225-1252',
        icon: 'whatsapp',
        route: 'https://wa.me/5521972251252',
        external: true,
      },
      {
        title: '(21) 97225-1252',
        icon: 'phone',
        route: 'tel:+55 (21) 97225-1252',
        external: true,
      },
      {
        title: 'sky.lucas003@gmail.com',
        icon: 'email',
        route: 'mailto:sky.lucas003@gmail.com',
        external: true,
      },
      {
        title: '/in/lucas-anes',
        icon: 'linkedin',
        route: 'https://www.linkedin.com/in/lucas-anes/',
        external: true,
      },
      {
        title: '/skyluke11',
        icon: 'github',
        route: 'https://github.com/skyluke11',
        external: true,
      },
      {
        title: '@anes.lucass',
        icon: 'instagram',
        route: 'https://instagram.com/anes.lucass',
        external: true,
      },
    ],
  },
];
