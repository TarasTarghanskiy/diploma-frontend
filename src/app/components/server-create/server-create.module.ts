import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerCreateComponent } from './server-create.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ServerCreateComponent],
  imports: [
    RouterModule.forChild([{path: '', component: ServerCreateComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ServerCreateModule { }
