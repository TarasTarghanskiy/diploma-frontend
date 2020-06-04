import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  createByPost(serverID, postID, like) {
    return this.http.get<any>(SERVER_URL + 'opinion/create?serverID=' + serverID + '&like=' + like + '&postID=' + postID,
      {headers: new HttpHeaders({token: this.auth.token})});
  }

  createByComment(serverID, commentID, like) {
    return this.http.get<any>( SERVER_URL + 'opinion/create?serverID=' + serverID + '&like=' + like + '&commentID=' + commentID,
      {headers: new HttpHeaders({token: this.auth.token})});
  }

  getByComment(commentID: number) {
    return this.http.get<any>(SERVER_URL + 'opinion/get?commentID=' + commentID);
  }

  getByPost(postID: number) {
    return this.http.get<any>(SERVER_URL + 'opinion/get?postID=' + postID);
  }
}
