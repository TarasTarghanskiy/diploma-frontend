import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {VoteService} from '../../../services/vote/vote.service';
import {AuthService} from '../../../services/auth/auth.service';
import {ServerService} from '../../../services/server/server.service';
import {Observable} from 'rxjs';
import {CommentService} from '../../../services/comment/comment.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(
    private router: Router,
    private voteService: VoteService,
    private auth: AuthService,
    private serverService: ServerService,
    private commentService: CommentService
  ) {
  }

  @Input() postID;
  comment: any = null;
  list: Observable<any>;
  currentPage: number;
  pageList: any;


  ngOnInit(): void {
    console.log(this.postID);
    this.changePageByPost(this.currentPage, this.postID);
  }

  changePageByPost(page: number, postID: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.list = this.commentService.getListByPost(this.currentPage, postID);
    this.pageList = this.commentService.getPageCountListByPost(this.currentPage, postID);
  }

  changePageByComment(page: number, commentID: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.list = this.commentService.getListByComment(this.currentPage, commentID);
    this.pageList = this.commentService.getPageCountListByComment(this.currentPage, commentID);
  }

  changePage(page: number) {
    if (this.comment === null) {
      this.changePageByPost(page, this.postID);
    } else {
      this.changePageByComment(page, this.comment.commentID);
    }
  }

  back() {
    if (this.comment.ownerCommentID === 0) {
      this.comment = null;
      this.changePageByPost(0, this.postID);
    } else {
      this.commentService.getComment(this.comment.ownerCommentID).pipe(first()).subscribe(resp => this.comment = resp);
      this.changePageByComment(0, this.comment.ownerCommentID);
    }
  }

  open(comment) {
    this.comment = comment;

    this.changePageByComment(0, this.comment.commentID);
  }

  get isUserAuthenticated() {
    if (this.auth.isAuthenticated()) {
      return this.serverService.isUserAuthenticated;
    }
    return false;
  }

  get serverID() {
    return Number.parseInt(this.router.url.split('/')[2], 10);
  }
}
