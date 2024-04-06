import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRepo } from '../models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getRepos() {
    return this.http.get<IRepo[]>(
      'https://api.github.com/users/skyluke11/repos'
    );
  }
}
