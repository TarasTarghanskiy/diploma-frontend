import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) {
  }

  getList(page: number, serverID): Observable<any> {
    if (this.auth.isAuthenticated()) {
      return this.http.get<any>(SERVER_URL + 'vote/list/' + page + '?serverID=' + serverID,
        {headers: new HttpHeaders({token: this.auth.token})});
    } else {
      return this.http.get<any>(SERVER_URL + 'vote/list/' + page + '?serverID=' + serverID);
    }
  }

  getPageCountList(page: number, serverID): Observable<number[]> {
    return this.http.get<number[]>(SERVER_URL + 'vote/pages/' + page + '?serverID=' + serverID);
  }

  vote(serverID: string, voteID: any, voteVariantID: any) {
    return this.http
      .get<any>(SERVER_URL + 'vote/' + serverID + '?voteID=' + voteID + '&variantID=' + voteVariantID,
        {headers: new HttpHeaders({token: this.auth.token})});
  }
}
