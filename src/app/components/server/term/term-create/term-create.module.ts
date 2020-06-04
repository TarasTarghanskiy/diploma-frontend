import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermCreateComponent } from './term-create.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TermCreateComponent],
  imports: [
    RouterModule.forChild([{path: '', component: TermCreateComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TermCreateModule { }
