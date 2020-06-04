import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  create(post: object): Observable<any> {
    return this.http.post(SERVER_URL + 'post/create', post, {headers: new HttpHeaders({token: this.authService.token})});
  }

  getList(page: number, serverID): Observable<object[]> {
    console.log(serverID);
    return this.http.get<object[]>(SERVER_URL + 'post/list/' + page + '?serverID=' + serverID);
  }

  getPageCountList(page: number, serverID): Observable<any> {
    return this.http.get<number[]>( SERVER_URL + 'post/pages/' + page + '?serverID=' + serverID);
  }

  getPostByPostID(postID: number): Observable<any> {
    return this.http.get(SERVER_URL + 'post/' + postID);
  }
}
