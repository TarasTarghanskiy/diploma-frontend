import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class LawService {
  constructor(private http: HttpClient) {
  }

  create(law: object): Observable<any> {
    return this.http.post(SERVER_URL + 'law/create', law);
  }

  getList(page: number, serverID): Observable<{lawID: number, lawText: string, check: boolean}[]> {
    return this.http.get<{lawID: number, lawText: string, check: boolean}[]>
    (SERVER_URL + 'law/list/' + page + '?serverID=' + serverID);
  }

  getPageCountList(page: number, serverID): Observable<any> {
    return this.http.get<number[]>(SERVER_URL + 'law/pages/' + page + '?serverID=' + serverID);
  }
}
