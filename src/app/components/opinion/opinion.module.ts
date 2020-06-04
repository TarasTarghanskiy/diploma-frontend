import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpinionComponent } from './opinion.component';



@NgModule({
  declarations: [OpinionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OpinionComponent
  ]
})
export class OpinionModule { }
