import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryDropdownComponent } from './story-dropdown.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [StoryDropdownComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StoryDropdownComponent
  ]
})
export class StoryDropdownModule { }
