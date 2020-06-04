import {Component, OnInit} from '@angular/core';
import {StoryService} from '../../services/story/story.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-story-dropdown',
  templateUrl: './story-dropdown.component.html',
  styleUrls: ['./story-dropdown.component.css']
})
export class StoryDropdownComponent implements OnInit {
  storyList: { id: any; viewed: boolean; story: { storyID: number; text: string; link: string } }[] = [];
  page = -1;
  access = true;
  open = false;
  newsCount: number;

  constructor(
    private historyService: StoryService
  ) {
  }

  ngOnInit(): void {
    this.changeNewsCount();
  }

  changeNewsCount() {
    this.historyService.getNewsCount()
      .pipe(first())
      .subscribe(resp => this.newsCount = resp);
  }

  load() {
    this.access = false;
    this.changeNewsCount();
    this.page++;
    this.historyService.getHistoryListByAcc(this.page).pipe(first()).subscribe(resp => {
      Array.prototype.push.apply(this.storyList, resp);
      if (resp !== null && resp.length !== 0) {
        this.access = true;
      }
    });
  }

  storyTracking(index, story) {
    return story.id.storyID;
  }

  click() {
    if (!this.open) {
      this.open = !this.open;
      this.load();
    }
  }
}
