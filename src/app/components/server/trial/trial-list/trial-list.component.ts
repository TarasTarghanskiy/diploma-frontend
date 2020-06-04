import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-trial-list',
  templateUrl: './trial-list.component.html',
  styleUrls: ['./trial-list.component.css']
})
export class TrialListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  get serverID() {
    return this.router.url.split('/')[2];
  }
}
