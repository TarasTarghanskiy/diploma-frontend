import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawCreateComponent } from './law-create.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [LawCreateComponent],
  imports: [
    RouterModule.forChild([{path: '', component: LawCreateComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LawCreateModule { }
