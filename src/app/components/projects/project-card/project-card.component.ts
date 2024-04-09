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
    if (this.repo.topics[0].includes('angular') 
      || this.repo.topics[0].includes('nextjs') 
      || this.repo.topics[0].includes('react')
      || this.repo.topics[0].includes('nestjs')
      || this.repo.topics[0].includes('express')
      || this.repo.topics[0].includes('springboot')
    ) {
      this.topic = this.repo.topics[0];
    }
  }
}
