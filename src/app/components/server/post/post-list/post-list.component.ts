import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../../../../services/post/post.service';
import {AuthService} from '../../../../services/auth/auth.service';
import {VoteService} from '../../../../services/vote/vote.service';
import {ServerService} from '../../../../services/server/server.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(
    private router: Router,
    private postService: PostService,
    private auth: AuthService,
    private serverService: ServerService
  ) {
  }

  list: Observable<any>;
  currentPage: number;
  pageList: any;


  ngOnInit(): void {
    this.changePage(this.currentPage);
  }

  changePage(page: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.list = this.postService.getList(this.currentPage, this.serverID);
    this.pageList = this.postService.getPageCountList(this.currentPage, this.serverID);
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  get isUserAuthenticated() {
    if (this.auth.isAuthenticated()) {
      return this.serverService.isUserAuthenticated;
    }
    return false;
  }

  get serverID() {
    return this.router.url.split('/')[2];
  }

}
