import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ABOUT_ACTIVITY_BAR } from 'src/app/constants/activity-bar-about';
import { IActivityBarFile } from 'src/app/models/ide';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private router: Router) {}

  activityBar = ABOUT_ACTIVITY_BAR;
  activeFile = {} as IActivityBarFile;
  hidden = true;

  ngOnInit(): void {
    this.router.events.subscribe({
      next: () => {
        this.findActivePageByRoute();
      },
    });
  }

  activePage(file: IActivityBarFile) {
    this.activeFile = file;
  }

  deactivatePage() {
    this.activeFile = {} as IActivityBarFile;
  }

  findActivePageByRoute() {
    const route = this.router.url;
    this.activityBar.forEach(({ files, folders }) => {

      this.deactivatePage();

      files.forEach((file) => {
        if (file.route === route) {
          this.activePage(file);
        }
      });

      folders.forEach((folder) => {
        folder.files.forEach((file) => {
          if (file.route === route) {
            this.activePage(file);
          }
        });
      });
    });
  }
}
