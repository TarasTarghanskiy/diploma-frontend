import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private user: any = undefined;

  constructor(
    private http: HttpClient,
    private  authService: AuthService
  ) {
  }

  getServerList(page: number): Observable<any> {
    return this.http.get<any>(SERVER_URL + 'server/list/' + page);
  }

  getServerPageCountList(page: number): Observable<number[]> {
    return this.http.get<number[]>(SERVER_URL + 'server/pages/' + page);
  }

  createServer(server: object): Observable<any> {
    return this.http.post(SERVER_URL + 'server/create', server, {headers: new HttpHeaders({token: this.authService.token})});
  }

  get isUserAuthenticated() {
    return this.user !== null;
  }

  getUserProfile(serverID: string) {
    if (this.authService.isAuthenticated()) {
      this.http.get(SERVER_URL + 'server/get_user/' + serverID, {headers: new HttpHeaders({token: this.authService.token})})
        .pipe(first())
        .subscribe(resp => this.user = resp);
    }
  }

  createUser(userDTO: { userName: any; serverID: number }): Observable<any> {
    return this.http.post(SERVER_URL + 'server/create_user', userDTO, {headers: new HttpHeaders({token: this.authService.token})});
  }

  sendReportsByPost(list: { lawID: number; lawText: string; check: boolean }[], postID) {
    return this.http.post(SERVER_URL + 'server/report?postID=' + postID + '&commentID=0', list,
      {headers: new HttpHeaders({token: this.authService.token})});
  }

  sendReportsByComment(list: { lawID: number; lawText: string; check: boolean }[], commentID) {
    return this.http.post(SERVER_URL + 'server/report?commentID=' + commentID + '&postID=0', list,
      {headers: new HttpHeaders({token: this.authService.token})});
  }
}
