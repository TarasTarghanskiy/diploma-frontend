import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  send(commentDTO, serverID) {
    return this.http.post<any>(
      SERVER_URL + 'comment/create?serverID=' + serverID,
      commentDTO,
      {headers: new HttpHeaders({token: this.auth.token})});
  }

  getListByPost(currentPage: number, postID: number) {
    return this.http.get<any>(SERVER_URL + 'comment/list/' + currentPage + '?postID=' + postID);
  }


  getPageCountListByPost(currentPage: number, postID: number) {
    return this.http.get<number[]>(SERVER_URL + 'comment/pages/' + currentPage + '?postID=' + postID);
  }

  getListByComment(currentPage: number, commentID: number) {
    return this.http.get<any>(SERVER_URL + 'comment/list/' + currentPage + '?commentID=' + commentID);
  }


  getPageCountListByComment(currentPage: number, commentID: number) {
    return this.http.get<number[]>(SERVER_URL + 'comment/pages/' + currentPage + '?commentID=' + commentID);
  }

  getComment(commentID) {
    return this.http.get(SERVER_URL + 'comment/' + commentID);
  }
}
