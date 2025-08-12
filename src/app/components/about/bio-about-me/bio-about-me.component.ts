import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-about-me',
  templateUrl: './bio-about-me.component.html',
})
export class BioAboutMeComponent implements OnInit {
  myYearsOld = 0;
  myCurrentPeriod = 0;

  ngOnInit(): void {
    this.calculateMyAge();
    this.calculateMyCurrentPeriod();
  }

  calculateMyAge() {
    const today = new Date();
    const myBirthday = new Date('2006-03-03');
    const diffInMonths = (today.getFullYear() - myBirthday.getFullYear()) * 12 + (today.getMonth() - myBirthday.getMonth());
    this.myYearsOld = Math.max(0, Math.floor(diffInMonths / 12));
  }

  calculateMyCurrentPeriod() {
    const today = new Date();
    const startDate = new Date('2024-01-01');
    const diffInSemesters = 1 + (today.getFullYear() - startDate.getFullYear()) * 2 + Math.floor((today.getMonth() - startDate.getMonth()) / 6);
    this.myCurrentPeriod = Math.max(0, diffInSemesters);
  }
}
