import { Component, Input } from '@angular/core';
import { IRepo } from 'src/app/models/projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() repo = {} as IRepo;

  topic: string = '';

  ngOnInit() {
    this.filterTopics();
  }

  filterTopics(): void {
    for (let i = 0; i < this.repo.topics.length; i++) {
      if (
        this.repo.topics[i].includes('angular') ||
        this.repo.topics[i].includes('nextjs') ||
        this.repo.topics[i].includes('react') ||
        this.repo.topics[i].includes('nestjs') ||
        this.repo.topics[i].includes('express') ||
        this.repo.topics[i].includes('spring-boot') ||
        this.repo.topics[i].includes('java') ||
        this.repo.topics[i].includes('config')
      ) {
        this.topic = this.repo.topics[i];
        break;
      }
    }
  }
}
