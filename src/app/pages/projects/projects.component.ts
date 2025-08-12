import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IRepo } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  repos: IRepo[] = [];
  reposBackup: IRepo[] = [];
  selectedTechs: string[] = [];
  hidden = true;
  technologies = [
    'nestjs',
    'nodejs',
    'nextjs',
    'react',
    'angular',
    'springboot',
    'java',
    'python',
    'javascript',
    'typescript',
    'cordova'
  ];

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    this.projectsService.getRepos().subscribe((repos) => {
      this.reposBackup = repos.filter(repo => repo.topics.length > 0).filter(repo => !repo.topics.includes('hidden'));
      this.reloadFilters();
    });
  }

  handleChangeFilterTechStatus(tech: string, event: MatCheckboxChange) {
    if (event.checked) {
      this.selectedTechs.push(tech);
    } else {
      this.selectedTechs = this.selectedTechs.filter(
        (selectedTech) => selectedTech !== tech
      );
    }

    this.reloadFilters();
  }

  reloadFilters() {
    this.repos = this.reposBackup.filter((repo) => {
      if (this.selectedTechs.length > 0) {
        return this.selectedTechs.some((tech) =>
          repo.topics.includes(tech.toLowerCase())
        );
      } else {
        return true;
      }
    });
  }
}
