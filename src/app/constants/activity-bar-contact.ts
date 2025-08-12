import { IActivityBar } from '../models/ide';

export const CONTACT_ACTIVITY_BAR: IActivityBar[] = [
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
        title: 'sky.lucas003@gmail.com',
        icon: 'email',
        route: 'mailto:sky.lucas003@gmail.com',
        external: true,
      },
    ],
  },
  {
    title: 'me-encontre-também',
    folders: [],
    files: [
      {
        title: '/in/lucas-anes',
        icon: 'linkedin',
        route: 'https://www.linkedin.com/in/lucas-anes/',
        external: true,
      },
      {
        title: '/lucasanes',
        icon: 'github',
        route: 'https://github.com/lucasanes',
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
