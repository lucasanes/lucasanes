import { Component, Input, OnInit } from '@angular/core';
import { IRepo } from 'src/app/models/projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() repo = {} as IRepo;
  @Input() technologies: string[] = [];

  topic: string = '';

  ngOnInit() {
    this.filterTopics();
  }

  filterTopics(): void {
    for (let i = 0; i < this.technologies.length; i++) {
      const tech = this.technologies[i];
      if (this.repo.topics.includes(tech)) {
        this.topic = tech;
        return; 
      }
    }
    
    this.topic = this.repo.topics[0];
  }
}
