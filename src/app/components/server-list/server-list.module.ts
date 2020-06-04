import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerListComponent } from './server-list.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ServerListComponent],
  imports: [
    RouterModule.forChild([{path: '', component: ServerListComponent}]),
    CommonModule
  ]
})
export class ServerListModule { }
