import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StoryService} from '../../../services/story/story.service';
import {VoteService} from '../../../services/vote/vote.service';
import {first} from 'rxjs/operators';
import {AuthService} from '../../../services/auth/auth.service';
import {ServerService} from '../../../services/server/server.service';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {

  constructor(
    private router: Router,
    private voteService: VoteService,
    private auth: AuthService,
    private serverService: ServerService
  ) { }

  list: Observable<any>;
  currentPage: number;
  pageList: any;


  ngOnInit(): void {
    this.changePage(this.currentPage);
  }

  changePage(page: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.list = this.voteService.getList(this.currentPage, this.serverID);
    this.pageList = this.voteService.getPageCountList(this.currentPage, this.serverID);
  }

  get isAuthenticated(){
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

  vote(vote: any, voteVariantIndex) {
    this.voteService.vote(this.serverID, vote.voteID, vote.voteVariantList[voteVariantIndex].voteVariantID)
      .pipe(first()).subscribe();
    this.list = null;
    this.changePage(this.currentPage);
  }
}
