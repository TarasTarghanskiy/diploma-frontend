import {Component, Input, OnInit} from '@angular/core';
import {OpinionService} from '../../services/opinion/opinion.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthService} from '../../services/auth/auth.service';
import {ServerService} from '../../services/server/server.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  @Input() commentID = 0;
  @Input() postID = 0;

  rating;

  constructor(
    private opinionService: OpinionService,
    private router: Router,
    private auth: AuthService,
    private serverService: ServerService
  ) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    if (this.commentID !== 0) {
      this.opinionService.getByComment(this.commentID).pipe(first()).subscribe(resp => this.rating = resp);
    } else {
      this.opinionService.getByPost(this.postID).pipe(first()).subscribe(resp => this.rating = resp);
    }
  }

  opinion(like: boolean) {
    if (this.commentID !== 0) {
      this.opinionService.createByComment(this.router.url.split('/')[2], this.commentID, like)
        .pipe(first()).subscribe(resp => console.log(resp));
    } else {
      this.opinionService.createByPost(this.router.url.split('/')[2], this.postID, like)
        .pipe(first()).subscribe(resp => console.log(resp));
    }
  }

  get isUserAuthenticated() {
    // return this.auth.isAuthenticated && this.serverService.isUserAuthenticated;
    if (this.auth.isAuthenticated()) {
      return this.serverService.isUserAuthenticated;
    }
    return false;
  }
}
