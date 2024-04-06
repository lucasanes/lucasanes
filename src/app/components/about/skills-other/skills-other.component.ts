import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-other',
  templateUrl: './skills-other.component.html',
})
export class SkillsOtherComponent {
  terminal = ['Git', 'BitBucket', 'Terminal'];
  ide = ['Visual Studio Code', 'IntelliJ IDEA', 'Eclipse'];
  cloud = ['Vercel', 'Netlify', 'Railway'];
}
