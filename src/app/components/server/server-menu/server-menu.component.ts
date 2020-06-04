import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-server-menu',
  templateUrl: './server-menu.component.html',
  styleUrls: ['./server-menu.component.css']
})
export class ServerMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get serverID() {
    return this.router.url.split('/')[2];
  }

}
