import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaveRoutingModule } from './cave-routing.module';
import { CaveComponent } from './cave.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CaveComponent],
  imports: [
    CommonModule,
    FormsModule,
    CaveRoutingModule
  ],
})
export class CaveModule { }
