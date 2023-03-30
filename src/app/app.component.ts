import { StorageService } from './services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.storage.loadCurrentTheme();
    this.storage.setTheme('light');
  }
}
