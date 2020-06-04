import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {StoryService} from '../../services/story/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  historyList: Observable<any>;
  currentPage: number;
  pageList: any;
  constructor(private historyService: StoryService) {
  }

  ngOnInit(): void {
    this.changePage(this.currentPage);
  }

  changePage(page: number) {
    this.currentPage = page === undefined ? 0 : page;
    this.historyList = this.historyService.getHistoryList(this.currentPage);
    this.pageList = this.historyService.getPaginationCount(this.currentPage);
  }

}
