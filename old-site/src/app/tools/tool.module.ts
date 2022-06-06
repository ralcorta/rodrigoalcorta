import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CaveRoutingModule } from './cave/cave-routing.module';
import { ToolRoutingModule } from './tool-routing.module';

@NgModule({
  imports: [
    ToolRoutingModule,
    CaveRoutingModule,
  ]
})
export class ToolModule { }
