import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from '../model/repos';

@Injectable()
export class ListSourceService {
  baseURL = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getRepos(
    userName: string,
    pageNo: string,
    sortOn: string
  ): Observable<Repos[]> {
    let params = new HttpParams().set('page', pageNo).set('sort', sortOn);

    return this.http.get<Repos[]>(
      this.baseURL + 'users/' + userName + '/repos',
      { params }
    );
  }
}
