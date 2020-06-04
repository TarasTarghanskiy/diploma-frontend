import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoryListComponent} from './story-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [StoryListComponent],
  imports: [
    RouterModule.forChild([{path: '', component: StoryListComponent}]),
    CommonModule
  ]
})
export class StoryListModule {
}
