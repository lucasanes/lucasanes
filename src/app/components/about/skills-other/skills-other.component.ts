import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-other',
  templateUrl: './skills-other.component.html',
})
export class SkillsOtherComponent {
  sql = ['PostgreSQL', 'MySQL', 'SQLite'];

  tools = [
    'Git',
    'Docker',
    'Kubernetes',
    'Postman',
    'ApiDog',
    'Zsh',
  ]

  ui = [
    'Shadcn UI',
    'Material UI',
    'Hero UI',
    'Prime React'
  ]

  cloud = ['AWS EC2 & S3', 'Contabo VPS', 'Hostinger VPS', 'Vercel', 'Netlify', 'Railway'];

  ide = ['Visual Studio Code', 'IntelliJ IDEA', 'Eclipse'];
}
