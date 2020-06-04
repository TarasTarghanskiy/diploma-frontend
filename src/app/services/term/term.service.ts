import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class TermService {
  constructor(private http: HttpClient) {
  }

  create(term: object): Observable<any> {
    return this.http.post(SERVER_URL + 'term/create', term);
  }

  getList(page: number, serverID): Observable<object[]> {
    return this.http.get<object[]>(SERVER_URL + 'term/list/' + page + '?serverID=' + serverID);
  }

  getPageCountList(page: number, serverID): Observable<any> {
    return this.http.get<number[]>(SERVER_URL + 'term/pages/' + page + '?serverID=' + serverID);
  }

  // getLawByLawID(lawID: number): Observable<any> {
  //   return this.http.get('http://localhost:8085/term/' + lawID);
  // }
}
