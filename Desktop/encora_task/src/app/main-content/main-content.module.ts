
import { MainContentRoutingModule } from './main-content-routing.module';
import { MainContentComponent } from './main-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainContentRoutingModule,
  ],
  
})
export class MainContentModule { }
