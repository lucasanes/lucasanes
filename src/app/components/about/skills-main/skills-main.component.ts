import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-main',
  templateUrl: './skills-main.component.html',
})
export class SkillsMainComponent {
  lenguages = [
    'TypeScript',
    'JavaScript',
    'Java',
    'C#',
    'C',
    'HTML5',
    'Sass',
    'CSS3',
    'JSON',
  ];

  frameworks = [
    'React',
    'Next.js',
    'Angular',
    'Node.js',
    'Express',
    'Nest.js',
    'Spring Boot',
    'Prisma',
    'Vite',
    'Tailwind CSS',
    'Styled Components',
    'JWT',
    'Postam',
    'NPM',
  ];

  sql = ['PostgreSQL', 'MySQL', 'SQLite'];
}
