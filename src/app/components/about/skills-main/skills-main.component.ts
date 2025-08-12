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
    'HTML5',
    'Sass',
    'CSS3',
    'JSON',
  ];

  frameworks = [
    'NestJS',
    'Express',
    'NextJS',
    'React',
    'Angular',
    'Spring Boot',
  ];
  
  libs = [
    'TypeORM',
    'Prisma',
    'Tailwind CSS',
    'Styled Components',
    'JWT',
    'NPM',
  ]
}
