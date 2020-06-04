import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  getHistoryList(page: number): Observable<any> {
    return this.http.get<any>(SERVER_URL + 'story/list/' + page);
  }

  getHistoryListByAcc(page: number): Observable<any> {
    return this.http.get<any>(SERVER_URL + 'story/acc_list/' + page, {headers:  new HttpHeaders({token: this.auth.token})});
  }

  getPaginationCount(page: number): Observable<any> {
    return this.http.get<number[]>(SERVER_URL + 'story/pages/' + page);
  }

  getNewsCount() {
    return this.http.get<any>(SERVER_URL + 'story/acc_news', {headers:  new HttpHeaders({token: this.auth.token})});
  }
}
